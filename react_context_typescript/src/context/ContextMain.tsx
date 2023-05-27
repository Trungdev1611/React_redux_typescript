import { useContext,createContext  } from "react";

interface IPropsContext {
    children: React.ReactNode
}
interface Propsvalue {
    name: string,
    place: string
}
const value:Propsvalue = {
        name: "WindSoft",
        place: "299 Trung kinhs111111111111111"
}
export const ContextGlobal = createContext<Propsvalue >({
    name: "",
    place: ""
})


function ContextApp({children}:IPropsContext) {
    return <ContextGlobal.Provider value = {value}>
        {children}
    </ContextGlobal.Provider>
}

export function UseContextValue() {
    return useContext(ContextGlobal)
}

export default ContextApp