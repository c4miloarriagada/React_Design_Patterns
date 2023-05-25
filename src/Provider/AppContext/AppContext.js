import { createContext } from 'react';


export const AppContext = createContext({
    items: [],
    onComplete : (id) => {},
    counter: 0
})


