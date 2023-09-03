import { useContext } from "react";
import { RootStoreContext } from "./stores/StoreContext";
import { TRootStore } from "./stores/RootStore";

export function useStore<T>(storeClass: new () => T): T {
    const rootStore = useContext(RootStoreContext) as TRootStore;
  
    const storeInstance = Object.values(rootStore).find(instance => 
      instance instanceof storeClass
    );
  
    if (!storeInstance) {
      throw new Error(`Store of instance ${storeClass.name} not found.`);
    }
  
    return storeInstance as T;
  }