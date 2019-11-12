import {useState, useEffect} from 'react';

/**
 * @name useLocalStorage
 *
 * @description Use as useState but it will save the value
 * to local storage when changed.
 *
 * @param {String} key
 * @param {Any} defaultValue
 */
const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
    } catch(e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;
