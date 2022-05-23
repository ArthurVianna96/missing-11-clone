import { useState, useEffect, useCallback } from "react";

export const useLocalStorage = (key, defaultValue) => {

  const getStorageValue = useCallback(() => {
    const savedValue = localStorage.getItem(key);
    const item = JSON.parse(savedValue);
    return item || defaultValue;
  }, [key, defaultValue]);

  const [value, setValue] = useState(getStorageValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
