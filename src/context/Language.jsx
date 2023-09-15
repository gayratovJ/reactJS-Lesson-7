import { createContext } from "react";
import { PropTypes } from "prop-types";

export const languageContext = createContext();
const Language = () => {

  return (
    <languageContext.Provider value={{type:'eng'}}>
     {children}
    </languageContext.Provider>
  )
}

languageContext.propTypes = {
  children:PropTypes.node,
}

export default Language