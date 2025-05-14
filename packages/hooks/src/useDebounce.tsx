import { useCallback, useEffect, useRef } from "react";

interface DebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}

export function useDebounce<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number,
  options: DebounceOptions = { leading: false, trailing: true }
): T {
  const { leading = false, trailing = true } = options;

  const callbackRef = useRef<T>(callback);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isCalledRef = useRef<boolean>(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        timeoutRef.current = null;
        if (trailing && isCalledRef.current) {
          callbackRef.current(...args);
          isCalledRef.current = false;
        }
      };

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      } else if (leading && !isCalledRef.current) {
        callbackRef.current(...args);
      }

      isCalledRef.current = true;
      timeoutRef.current = setTimeout(later, delay);
    },
    [delay, leading, trailing]
  ) as T;
}

export default useDebounce;
