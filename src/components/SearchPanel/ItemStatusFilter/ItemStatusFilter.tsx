import React from "react"
import classes from "./ItemStatusFilter.module.css"
import {changeFilter, TFilterEnum} from "../../../store/todoActions";
import {useDispatch, useSelector} from "react-redux";
import {getFilter} from "../../../store/todoSelectors";

const ItemStatusFilter: React.FC = () => {
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()
    const changeFilterHandler = (filter:TFilterEnum) => {
        dispatch(changeFilter(filter))
    }
    const cls = (filterValue:TFilterEnum) => `btn btn-${filter === filterValue ? 'info' : 'outline-secondary'}`
    return (
        <div className={classes.ItemStatusFilter}>
            <button type='button'
                    className={cls(TFilterEnum.all)}
                    onClick={() => changeFilterHandler(TFilterEnum.all)}
            >All</button>
            <button type='button'
                    className={cls(TFilterEnum.active)}
                    onClick={() => changeFilterHandler(TFilterEnum.active)}
            >Active</button>
            <button type='button'
                    className={cls(TFilterEnum.done)}
                    onClick={() => changeFilterHandler(TFilterEnum.done)}
            >Done</button>
            <button type='button'
                    className={cls(TFilterEnum.important)}
                    onClick={() => changeFilterHandler(TFilterEnum.important)}
            >Important</button>
        </div>
    )
};

export default ItemStatusFilter;
