import React from "react"
import classes from "./AppHeader.module.css"
import CountTodos from "../CountTodos/CountTodos";

const AppHeader: React.FC = () => {

    return (
        <>
            <h1 className={classes.AppHeader}>
               Todo List
            </h1>
            <CountTodos/>
        </>
    )
};

export default AppHeader;
