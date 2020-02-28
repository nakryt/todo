import React, {ChangeEvent} from "react"
import classes from "./SearchPanel.module.css"
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";
import {useDispatch, useSelector} from "react-redux";
import {getFindText} from "../../store/todoSelectors";
import {changeFindText} from "../../store/todoActions";
import ButtonClose from "../UI/ButtonClose/ButtonClose";

const SearchPanel: React.FC = () => {
    const findText = useSelector(getFindText)
    const dispatch = useDispatch()
    const searchHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        dispatch(changeFindText(value.trim()))
    }
    return (
        <div className={`${classes.SearchPanel} mb-8`}>
            <div className={classes.SearchPanelInputWrap}>
                <input className={`${classes.SearchPanelInput} mr-2`}
                       placeholder='Search'
                       onChange={searchHandler}
                       value={findText}
                />
                {
                    findText.length > 0 &&
                        <ButtonClose onClick={() => dispatch(changeFindText(''))}/>
                }

            </div>
            <ItemStatusFilter/>
        </div>
        )
};

export default SearchPanel;
