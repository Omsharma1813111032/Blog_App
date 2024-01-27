import {createContext, useState} from "react"


export const dataContext = createContext(null)

const DataProvider = ({children}) => {
    
    const [account,setAccount] = useState({
        id:"",
        email:"",
        token:""
    })

    return (
    <dataContext.Provider value={{
        account,
        setAccount
    }}>
        {children}
    </dataContext.Provider>
  )
}

export default DataProvider