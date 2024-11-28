import { useLocalStorage } from "hooks/useLocalStorage";

export const useToggle = (key: string, initValue: boolean) => {
  const [value, setValue] = useLocalStorage(key, initValue);

  const toggle = (value?: boolean) =>
    setValue((prev: boolean) => (typeof value === "boolean" ? value : !prev));

  return [value, toggle];
};
