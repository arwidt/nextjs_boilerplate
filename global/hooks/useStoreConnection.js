import React, {useState, useEffect} from 'react';

// Store
import PubSub from 'pubsub-js';
import Actions from 'global/store/Actions';

/**
 * 
 */
const sendStoreAction = (action, payload) => {
  PubSub.publish(action, payload);
}

/**
 * @name useStoreConnection
 *
 * @description Help hook to listen for changes to store.
 *
 * @example
 * const [sendStoreAction] = useStoreConnection((diff, state) => {
 *  if (wantedDiffKeys(diff, ['any.diff.you.want'])) {
 *    // Do stuff
 *  }
 * });
 *
 * @example
 * sendStoreAction(Actions.SET_GLOBAL_LOADING, true);
 */
const useStoreConnection = (handleStoreChanged) => {

  const _handleStoreChanged = (action, payload) => {
    handleStoreChanged(payload.diff, payload.state);
  }

  useEffect(() => {
    const token = PubSub.subscribe(Actions.STORE_CHANGED, _handleStoreChanged);
    return () => {
      PubSub.unsubscribe(token);
    }
  }, []);

  return [sendStoreAction];
}

export { sendStoreAction };
export default useStoreConnection;


