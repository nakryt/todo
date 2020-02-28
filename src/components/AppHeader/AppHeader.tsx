import React from "react"
import classes from "./AppHeader.module.css"

const AppHeader: React.FC = () => {

    return (
        <h1 className={classes.AppHeader}>
           My Todo List
        </h1>
    )
};

export default AppHeader;
