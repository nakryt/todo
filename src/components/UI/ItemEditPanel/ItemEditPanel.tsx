import React from "react"
import classes from "./ItemEditPanel.module.css"

const ItemEditPanel: React.FC = () => {

    return (
        <div className={classes.ItemEditPanel}>
            <button className="btn btn-outline-danger btn-sm mr-2">
                <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"/>
            </button>
        </div>
    )
};

export default ItemEditPanel;
