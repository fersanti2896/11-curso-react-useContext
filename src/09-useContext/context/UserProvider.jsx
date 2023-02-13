import { UserContext } from './UseContext';

const user = {
    id: 123,
    name: 'Fernando Nicolás',
    email: 'fersanti2896@gmail.com'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'mundo', user }} >
            { children }
        </UserContext.Provider>
    )
}
