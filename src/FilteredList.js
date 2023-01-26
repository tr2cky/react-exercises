import React, { useMemo, useState } from "react";

export function FilteredList({ list }) {
    const [filteredList, setFilteredList] = useState([]);

    useMemo(() => {
        setFilteredList(list.filter(item => item.age > 18));
    }, [list]);


    return (
        <ul>
            {filteredList.map(item => <li key={item.id}> Name: {item.name} | Age: {item.age} </li>)}
        </ul>
    )
}