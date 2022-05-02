import { useEffect, useState } from 'react';

function useIndexDB() {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    const request = indexedDB.open('mydb', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target?.result;
      const objectStore = db.createObjectStore('todos', { keyPath: 'id' });
    };

    request.onsuccess = (event) => {
      setDb(event.target?.result);
    };

    request.onerror = (event) => {
      console.log('error', event);
    };
  }, []);

  return db;
}

export default useIndexDB;
