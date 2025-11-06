import { useCallback, useRef } from "react";

/**
 * Memoized callback hook that only changes when dependencies change
 * Similar to useCallback but with additional optimization
 * 
 * @param {Function} callback - Function to memoize
 * @param {Array} deps - Dependency array
 * @returns {Function} - Memoized callback
 */
export const useMemoizedCallback = (callback, deps) => {
  const callbackRef = useRef(callback);
  const memoizedCallbackRef = useRef();

  // Update callback ref when callback changes
  callbackRef.current = callback;

  // Create memoized callback
  if (!memoizedCallbackRef.current) {
    memoizedCallbackRef.current = (...args) => {
      return callbackRef.current(...args);
    };
  }

  return useCallback(memoizedCallbackRef.current, deps);
};

