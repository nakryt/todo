import React from "react"
import classes from "./ButtonClose.module.css"

type TProps = {
    onClick: () => void
}

const ButtonClose: React.FC<TProps> = ({ onClick }) => {

    return (
        <button className={`btn btn-default ${classes.ButtonClose}`} onClick={onClick}>
            <i className={`fa fa-times ${classes.ButtonCloseText}`}/>
        </button>
    )
};

export default ButtonClose;
