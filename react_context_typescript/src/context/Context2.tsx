import { useContext,createContext  } from "react";

interface IPropsContext {
    children: React.ReactNode
}
interface Propsvalue {
    name: string,
    place: string
}
const value:Propsvalue = {
        name: "Context2",
        place: "Địa điểm 2"
}
export const ContextGlobal = createContext<Propsvalue >({
    name: "",
    place: ""
})


function ContextApp2({children}:IPropsContext) {
    return <ContextGlobal.Provider value = {value}>
        {children}
    </ContextGlobal.Provider>
}

export function UseContextValue2() {
    return useContext(ContextGlobal)
}

export default ContextApp2