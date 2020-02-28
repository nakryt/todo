import React, {KeyboardEvent, ChangeEvent, useState} from "react";
import classes from './TextWithEdit.module.css'

type TProps = {
    isEdit: boolean
    active: boolean
    label: string
    onClick: () => void
    onSave: (text: string) => void
    onCancel: () => void
}
const TextWithEdit:React.FC<TProps> = ({ isEdit, active, label, onClick, onSave, onCancel }) => {
    const [text, setText] = useState(label)
    return (
        <>
            {
                isEdit ?
                    <div className={classes.TextWithEditWrap}>
                        <input value={text} className={classes.TextWithEdit} autoFocus
                               onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.currentTarget.value)}
                               onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                                   event.charCode === 13 && onSave(text)
                               }}
                        />
                        <div className={classes.EditIcons}>
                            <button className={`btn btn-default ${classes.EditIconsButton}`} onClick={() => onSave(text)}>
                                <i className={`fa fa-check ${classes.EditIconsCheck}`} />
                            </button>
                            <button className={`btn btn-default ${classes.EditIconsButton}`} onClick={onCancel}>
                                <i className={`fa fa-times ${classes.EditIconsCancel}`}/>
                            </button>
                        </div>
                    </div>
                    :
                    <p className={classes.TextWithEditValue} onClick={onClick}>
                        {active ? <span>{label}</span> : <del>{label}</del>}
                    </p>
            }
        </>
    )
}

export default TextWithEdit
