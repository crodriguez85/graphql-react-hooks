import { createContext } from 'react';

const Context = createContext({
    currentUser: null,
    isAuth: null,
    draft: null
})


export default Context;