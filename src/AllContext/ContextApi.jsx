import React, { createContext } from 'react';
export const ContextProvider = createContext(null)
const ContextApi = ({children}) => {
   const data = {name: 'samio hasan', id: '21-45579-3'}
   return (
      <ContextProvider.Provider value={data}>
         {children}
      </ContextProvider.Provider>
   )
};

export default ContextApi;