import React from "react"
import classes from "./ItemEditPanel.module.css"

type TProps = {
    onClickImportant: () => void
    onClickDelete: () => void
    onClickEdit: () => void
}

const ItemEditPanel: React.FC<TProps> = ({ onClickEdit, onClickImportant, onClickDelete }) => {

    return (
        <div className={classes.ItemEditPanel}>
            <button className="btn btn-outline-info btn-sm mr-2" onClick={onClickEdit}>
                <i className="fa fa-pencil"/>
            </button>
            <button className="btn btn-outline-danger btn-sm mr-2" onClick={onClickDelete}>
                <i className="fa fa-trash-o"/>
            </button>
            <button className="btn btn-outline-success btn-sm" onClick={onClickImportant}>
                <i className="fa fa-exclamation"/>
            </button>
        </div>
    )
};

export default ItemEditPanel;
