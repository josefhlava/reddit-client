import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectMenuItem } from "./menuSlice";
import { addItem } from "./menuSlice";
import { useDispatch } from "react-redux";

export const Menu = () => {
    const menuItems = useSelector(selectMenuItem);
    const [newItem, setNewItem] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({
            item: newItem
        }));
        setNewItem("")
    }

    const handleChange = (e) => {
        const input = e.target.value;
        setNewItem(input);
    }

    return (
        <div>
            <h3>Select SubReddit</h3>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <button>{item}</button>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-item">Add another SubReddit</label>
                <input type="text" id="new-item" value={newItem} onChange={handleChange} />
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}