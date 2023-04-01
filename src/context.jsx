import { createContext, useContext, useState } from "react";
import userData from "./data";

const GlobalContext = createContext();

/**Custom Hook to use this context*/
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [data, setData] = useState(userData);

    return <GlobalContext.Provider value={{
        data,
        setData
    }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;