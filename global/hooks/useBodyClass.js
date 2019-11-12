import React, {useState, useEffect} from 'react';

/**
 *
 * useBodyClass
 *
 * @param {Array} classes Array of classes that will merge with classlist on body
 */
const useBodyClass = (classes) => {

  const setBodyClass = (c) => {
    document.body.classList.add(c);
  }

  const removeBodyClass = (c) => {
    document.body.classList.remove(c);
  }

  useEffect(() => {
    // setBodyClass(classes);
    return () => {
      removeBodyClass(classes);
    }
  }, []);

  return [setBodyClass, removeBodyClass];
}

export default useBodyClass;
