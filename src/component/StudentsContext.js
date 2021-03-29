import { createContext, useReducer } from "react";
import studentReducer from "../reducers/studentReducer";


const initialstudents = [
  { name: "kofi", level: "100", date: "21/09/18", indexNo: "bse/0021/18" },
  { name: "ama", level: "200", date: "21/09/19", indexNo: "bse/00231/19" },
  { name: "aphya", level: "300", date: "21/09/20", indexNo: "bse/01021/20" },
  { name: "santo", level: "400", date: "21/09/21", indexNo: "bse/11021/21" },
];

export const StudentsContext = createContext();

const StudentsContextProvider = ({ children }) => {
    const [students, dispatch] = useReducer(studentReducer, initialstudents);
    return(
        <StudentsContext.Provider value={{ students, dispatch }}>
            {children}
        </StudentsContext.Provider>)
    
}
export default StudentsContextProvider;
