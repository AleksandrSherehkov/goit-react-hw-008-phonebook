import { useEffect, useState } from 'react';
import { save, load } from 'utilities/localStorage';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => load(key) ?? defaultValue);

  useEffect(() => {
    save(key, state);
  }, [key, state]);

  return [state, setState];
};
