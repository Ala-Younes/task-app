import { useEffect, useState } from "react";

type localStorageProps<T> = {
  key: string;
  initialValue: T;
};

export function useLocalStorage<T>({
  key,
  initialValue,
}: localStorageProps<T>) {
  // ! the "!" is a non-null assertion operator stringWord variable is never null or undefined
  // ! its always an empty []
  // 1st render ==> get items
  const [storedValue, setStoredValue] = useState<T>(() => {
    const savedData = localStorage.getItem(key) as string;
    const parsedData = JSON.parse(savedData);
    return parsedData || initialValue;
  });

  // useEffect rerender all component ==> useState will fire and values inside will change
  // react ..........
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
