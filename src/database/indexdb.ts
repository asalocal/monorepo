interface IDatabase {
  database: {
    name: string;
    version: number;
  };

  objectStore: {
    name: string;
    keyPath: string;
  };

  store: {
    name: string;
    keyPath: string;
    isUnique: boolean;
  }[];

  data: any;
}

interface IData {
  database: {
    name: string;
    version: number;
  };

  objectStore: {
    name: string;
  };

  data: any;
}

export function getDatabase(name: string, version: number) {
  return window.indexedDB.open(name, version);
}

export function updateDataObject({ database, data, objectStore }: IData) {
  const databaseRequest = getDatabase(database.name, database.version);

  databaseRequest.onsuccess = (event: any) => {
    const db = event.target.result;
    const transaction = db.transaction(objectStore.name, 'readwrite');
    const objectStoreRequest = transaction.objectStore(objectStore.name);

    objectStoreRequest.put(data);
  };
}

export function deleteDataObject({ database, data, objectStore }: IData) {
  const databaseRequest = getDatabase(database.name, database.version);

  databaseRequest.onsuccess = (event: any) => {
    const db = event.target.result;
    const transaction = db.transaction(objectStore.name, 'readwrite');
    const objectStoreRequest = transaction.objectStore(objectStore.name);

    objectStoreRequest.delete(data);
  };
}

export function createObjectStore({
  database,
  objectStore,
  store,
  data,
}: IDatabase): any {
  const databaseRequest = getDatabase(database.name, database.version);

  databaseRequest.onupgradeneeded = (event: any) => {
    const db = event.target?.result;

    const myObjectStore = db.createObjectStore(objectStore.name, {
      keyPath: objectStore.keyPath,
    });

    store.forEach((item) => {
      myObjectStore.createIndex(item.name, item.keyPath, {
        unique: item.isUnique,
      });
    });

    myObjectStore.transaction.oncomplete = (event: any) => {
      const customerObjectStore = db
        .transaction(objectStore.name, 'readwrite')
        .objectStore(objectStore.name);

      customerObjectStore.add(data);
    };
  };
}
