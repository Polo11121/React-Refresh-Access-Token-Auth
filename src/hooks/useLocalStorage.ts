import { useState, useEffect } from "react";

const getLocalValue = <T>(key: string, initValue: T) => {
  if (typeof window === "undefined") return initValue;

  const localValue = JSON.parse(localStorage.getItem(key) || "null");

  if (localValue) return localValue;

  if (initValue instanceof Function) return initValue();

  return initValue;
};

export const useLocalStorage = <T>(key: string, initValue: T) => {
  const [value, setValue] = useState(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
