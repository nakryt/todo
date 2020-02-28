import React from "react"
import classes from "./CountTodos.module.css"
import {useSelector} from "react-redux";
import {getCountAllTodo, getCountDoneTodo} from "../../store/todoSelectors";

const CountTodos: React.FC = () => {
    const countAllTodo = useSelector(getCountAllTodo)
    const countDoneTodo = useSelector(getCountDoneTodo)
    return (
        <div className={classes.CountTodos}>
            Done&nbsp;
            <span className={classes.CountTodosNum}>{countDoneTodo}&nbsp;</span>
            of&nbsp;
            <span className={classes.CountTodosNum}>{countAllTodo}</span>
        </div>
    )
};

export default CountTodos;
