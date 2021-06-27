import React, { createContext, useState } from 'react';

export const Store = createContext({
    store : {},
    setStore : ({ type , payload }) => {}
});

const StoreProvider = ({ children , store }) => {
    const [_store, set_Store] = useState(store.value);

    const changeStore = ({ valueMaker , sliceName , payload }) => {
        set_Store(prev => ({
            ...prev,
            [sliceName] : valueMaker(prev[sliceName] , payload)
        }))
    }

    return (
        <Store.Provider value={{ store : _store , setStore : changeStore }}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider;