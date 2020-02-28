import React from "react"
import classes from "./SearchPanel.module.css"
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";

const SearchPanel: React.FC = () => {

    return (
        <div className={`${classes.SearchPanel} mb-8`}>
            <input className={`${classes.SearchPanelInput} mr-2`} placeholder='search'/>
            <ItemStatusFilter/>
        </div>
        )
};

export default SearchPanel;
