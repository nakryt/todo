import React from "react"
import classes from "./TodoListItem.module.css"
import ItemEditPanel from "../../UI/ItemEditPanel/ItemEditPanel";

type TProps = {
    id: number
    label: string
    important?: boolean
    active: boolean
}
const TodoListItem: React.FC<TProps> = ({ id, label, important = false, active }) => {
    const cls = [classes.TodoListItem, important && classes.important]
    return (
        <li className={`${cls.join(' ')} list-group-item`}>
            {active ? <span>{label}</span> : <del>{label}</del>}
            <ItemEditPanel/>
        </li>
    )
};

export default TodoListItem;
