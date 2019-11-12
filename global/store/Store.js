import { defineStore, cloneObject, deepObjectDiff } from '@arwidt/fluxtools';
import PubSub from 'pubsub-js';
import UniversalCookies from 'universal-cookie';
import atob from 'atob';
import btoa from 'btoa';

import Actions from './Actions.js';

// Store and Model
const Store = {};
const State = {
  inited: false
};
const StateHistory = [];

// Cookies
const CookieKey = "Key_6A9F2377-C523-41A7-811B-C609D3CFF936";
const CookieInterestedIn = ['increment'];
const Cookies = new UniversalCookies();

// LocalStorage
const LocalStorageKey = "Locale_7550C05F-A7B5-43D5-9369-BB547B587EAA";

/**
 * @name isInited
 * @description If the Store is inited or not
 * @public
 * @returns {Boolean}
 */
Object.defineProperty(Store, "isInited", {get: function() { return State.inited; }});

/**
 * @name getState
 * @description Returns a clone of the State
 * @public
 * @returns {Object} The cloned storeModel object
 */
Object.defineProperty(Store, "getState", {get: function() {
  return cloneObject(State);
}});


/**
 * @name addStateToHistory
 * @description Will add the current storeModel to history array. In this app we only need 10 saved stores.
 * @private
 */
const addStateToHistory = function() {
  StateHistory.push(cloneObject(State));

  while (StateHistory.length > 10) {
      StateHistory.shift();
  }
};

/**
 * @name getLastItemInHistory
 * @description Returns the last item in history
 * @private
 */
const getLastItemInHistory = function() {
  if (StateHistory.length > 0) {
      return StateHistory[StateHistory.length-1];
  } else return null;
};

/**
 * @name publishChange
 * @description Will publish that the storeModel has changed
 * @private
 */
const publishChange = function() {
  // Get the last item from history to create the diff
  const previousState = getLastItemInHistory();
  // Add the current model to history
  addStateToHistory();
  // Sync store to cookie in the eventloop
  // setTimeout(syncToLocalStorage, 0);
  // Create the diff with diff tool function
  const diff = deepObjectDiff(previousState, State);
  // Clone the store we want to send to subscribers, never send
  // a reference of the store. We must have it immutable from outside
  // the store.
  const clone = cloneObject(State);
  // Publish the diff and full cloned store.
  PubSub.publish(Actions.STORE_CHANGED, {diff: diff, state: clone});
};

/**
 * @name syncToCookie
 * @description Save the defined keys in the storeModel to a encoded cookie
 * @private
 */
const syncToCookie = function() {
  const filteredStore = Object.keys(State)
    .filter(key => CookieInterestedIn.includes(key))
    .reduce((obj, key) => {
      obj[key] = State[key];
      return obj;
    }, {});
  Cookies.set(CookieKey, btoa(JSON.stringify(filteredStore)));
}

/**
 * @name syncStateFromCookie
 * @description Will look for encoded cookie and sync that to the storeModel
 * @private
 */
const syncStateFromCookie = function() {
  const cookieData = JSON.parse(atob(Cookies.get(CookieKey)));
  defineStore(State, cookieData);
}

/**
 * @name syncToLocalStorage
 * @description Will sync the StoreLocale to localStorage
 * @private
 */
const syncToLocalStorage = function() {
  if (process.browser) {
    window.localStorage.setItem(LocalStorageKey, JSON.stringify(State));
  }
}

/**
 * @name syncStateFromLocalStorage
 * @description Get the stored Locale object from LocalStorage and merge it to the StoreLocale
 * @private
 */
const syncStateFromLocalStorage = function() {
  if (process.browser) {
    const cachedStateData = JSON.parse(window.localStorage.getItem(LocalStorageKey));
    defineStore(State, cachedStateData);
  }
}

/**
 * @name handleGlobalLoading
 * @description Target for action sent to store that handles the global loading tag
 * @function
 * @private
 *
 * @param {String} action
 * @param {Object} payload
 */
const handleGlobalLoading = function(action, payload) {
  // GUARD
  if (typeof payload !== "boolean") {
    throw new Error('loading must be a boolean');
  }

  State.loading = payload;
  publishChange();
};

/**
 * 
 * @param {String} action 
 * @param {Object} payload 
 */
const handleIncrementAdd = function(action, payload) {
  State.increment += 1;
  publishChange();
}

/**
 * 
 * @param {String} action 
 * @param {Object} payload 
 */
const handleIncrementSubtract = function(action, payload) {
  State.increment -= 1;
  publishChange();
}


/**
 * Init the store, will publish a change
 * from the eventloop to let the components render
 * before.
*/
Store.init = function() {

  defineStore(State, {
    increment: 0,  
    loading: false
  });

  // Sync cookies
  // if (process.browser) {
  //   const storeCookie = Cookies.get(CookieKey);
  //   if (!storeCookie) {
  //     syncToLocalStorage();
  //   } else {
  //     syncStateFromLocalStorage();
  //   }
  // }

  PubSub.subscribe(Actions.SET_GLOBAL_LOADING, handleGlobalLoading);
  PubSub.subscribe(Actions.SET_INCREMENT_ADD, handleIncrementAdd);
  PubSub.subscribe(Actions.SET_INCREMENT_SUBTRACT, handleIncrementSubtract);

  State.inited = true;

  setTimeout(publishChange, 0);

};

export default Store;
