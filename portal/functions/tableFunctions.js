import React from 'react';

export const filterMethodGeneric = (options, filter, row) => {
    if (filter.value === "all") {
        return true;
    }
    if (filter.value === "OTHER") {
        var result = row[filter.id].split(", ");
        if (result.filter(e => !options.includes(e)).length === 0) {
            return false;
        } else {
            return true;
        }
    } else {
        var item
        if (filter.id === "NameItem" || filter.id === "ScriptItem") {            
            item = row[filter.id].props.children;
        } else {
            item = row[filter.id];
        }
        return item.includes(filter.value);
    }
}

export const filterGeneric = (options, withOther, filter, onChange) => {
    return (
        <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
        >
            <option value="all">Show All</option>
            {options.map(item => {
                return <option value={item} key={item}>{item}</option>
            })}
            {withOther &&
                <option value="OTHER">Other</option>
            }
        </select>
    );
}

export const filterMethodDefault = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
    var item
    if (filter.id === "NameItem" || filter.id === "ScriptItem") {
        item = row[id].props.children;
    } else {
        item = row[id];
    }
    return row[id] !== undefined ? String(item).toUpperCase().includes(filter.value.toUpperCase()) : true;
}