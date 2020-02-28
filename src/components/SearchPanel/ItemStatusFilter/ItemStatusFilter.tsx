import React from "react"
import classes from "./ItemStatusFilter.module.css"

const ItemStatusFilter: React.FC = () => {

    return (
        <div className={classes.ItemStatusFilter}>
            <button type='button' className="btn btn-info">All</button>
            <button type='button' className="btn btn-outline-secondary">Active</button>
            <button type='button' className="btn btn-outline-secondary">Done</button>
        </div>
    )
};

export default ItemStatusFilter;
