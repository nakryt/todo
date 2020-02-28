import React from "react"
import classes from "./TodoList.module.css"
import {TTodos} from "../../types/todoTypes";
import TodoListItem from "./TodoListItem/TodoListItem";
import {useSelector} from "react-redux";
import {getTodos} from "../../store/todoSelectors";

const TodoList: React.FC = () => {
    const todos = useSelector(getTodos)
    debugger
    return (
        <ul className={`${classes.TodoList} list-group`}>
            {
                todos.map((item) =>
                    <TodoListItem key={item.id} {...item} />
                )
            }
        </ul>
    )
};

export default TodoList;
