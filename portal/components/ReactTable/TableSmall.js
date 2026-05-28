import React from 'react';
import 'react-virtualized-compat/styles.css'
import Draggable from "react-draggable";
import { AutoSizer, Table, Column, SortDirection } from 'react-virtualized-compat';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import styles from './TableSmall.module.css';

class TableSmall extends React.Component {

    constructor(props) {
        super();

        this.state = {
            list: [],
            widths: {},
            dragStart: undefined,
            windowHeightDelta: props.windowHeightDelta ? props.windowHeightDelta : 100,
            windowHeight: 0,
            windowWidth: 0,
            disableHeader: false,
            headerHeight: props.headerHeight ? props.headerHeight : 75,
            indexRowWidth: props.indexRowWidth ? props.indexRowWidth : 70,
            overscanRowCount: props.overscanRowCount ? props.overscanRowCount : 10,
            rowHeight: props.rowHeight ? props.rowHeight : 30,
            scrollToIndex: undefined,
            sortBy: "",
            sortDirection: SortDirection.ASC,
            dropDownOption: null,
            filterOptions: null
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateDropdowns = this.updateDropdowns.bind(this);
        this.updateList = this.updateList.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.resizeStart = this.resizeStart.bind(this);
        this.resizeEnd = this.resizeEnd.bind(this);
        this.dragRefs = {};
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.updateDropdowns();
        this.updateList();
        this.initializeFilters();

        // initialize column widths 
        if (this.props.columns) {
            const totalWidth = window.innerWidth;
            const columnsWithWidth = this.props.columns.filter(item => item.width);
            const columnsWithWidthPerc = this.props.columns.filter(item => item.widthPerc);
            const sumWidths = Math.floor(columnsWithWidth.reduce((a, b) => a + (b.width || 0), 0) + 
                              (totalWidth * columnsWithWidthPerc.reduce((a, b) => a + (b.widthPerc || 0), 0) / 100));
            const remainingWidth = Math.floor((totalWidth - sumWidths) / (this.props.columns.length - columnsWithWidth.length - columnsWithWidthPerc.length));
            
            const isFitting = (totalWidth - sumWidths > 50)
            var widths = {}
            
            this.props.columns.forEach(item => {
                // if all would fit align according provided widths            
                if (isFitting) {
                    if (item.width) {
                        widths[item.id] = item.width;
                    }
                    else if (item.widthPerc){
                        widths[item.id] = item.widthPerc * totalWidth / 100;
                    }
                    else {
                        widths[item.id] = remainingWidth;
                        //widths[item.id] = Math.floor((totalWidth - sumWidths) / (this.props.columns.length - Object.keys(columnsWithWidth).length));
                    }
                }
                else {
                    widths[item.id] = Math.floor(totalWidth / this.props.columns.length);
                }
            });
            this.setState({ widths });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
    }

    displayStringOrArray(content) {
        if (Array.isArray(content)) {
            return content.map(item => this.displayStringOrArray(item)).join(", ")
        }
        return content;
    }

    render() {
        const data = this.props.data;
        const columns = this.props.columns;

        const {
            list,
            widths,
            disableHeader,
            headerHeight,
            windowHeight,
            windowHeightDelta,
            overscanRowCount,
            rowHeight,
            scrollToIndex,
            sortBy,
            sortDirection
        } = this.state;

        /*
        if (list.length === 0) {
            return null;
        }
        */

        const rowGetter = ({ index }) => data[list[index] % data.length];

        const tableFullHeight = windowHeight - windowHeightDelta;
        const tableHeight = Math.min(tableFullHeight, headerHeight + (rowHeight * data.length))

        if (!this.props.columns || !this.props.data || Object.keys(this.state.widths).length === 0) {
            return null;
        }

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => {
                        return <Table
                            id="coreTable"
                            disableHeader={disableHeader}
                            headerHeight={headerHeight}
                            height={tableHeight}
                            noRowsRenderer={this._noRowsRenderer}
                            overscanRowCount={overscanRowCount}
                            rowHeight={rowHeight}
                            rowGetter={rowGetter}
                            rowCount={list.length}
                            rowClassName={this.rowStyleClass}
                            scrollToIndex={scrollToIndex}
                            sortBy={sortBy}
                            sortDirection={sortDirection}
                            width={width}
                            headerClassName={styles.headerColumn}
                            headerRowRenderer={this._headerRowRenderer}
                        >

                            {columns.map(item => {
                                return (
                                    <Column
                                        key={item.id}
                                        width={widths[item.id]}
                                        label={item.label}
                                        dataKey={item.id}
                                        headerRenderer={({ dataKey, sortBy, sortDirection }) => this._headerRenderer(dataKey, sortBy, sortDirection, item.label, width)}
                                        cellRenderer={typeof (item.accessor) === 'function' ? item.accessor : ({ cellData }) => this.displayStringOrArray(cellData)}
                                        className={styles.rowColumn}
                                    />
                                );
                            })}
                        </Table>
                    }}
                </AutoSizer>
            </div>

        );
    }

    _headerRowRenderer({ className, columns, style, }) {
        return (
            <div className={`${className} ${styles.overflowVisible}`} role="row" style={style}>
                {columns}
            </div>
        );
    }

    _noRowsRenderer() {
        return <div className={styles.noContent}>No Content Selected</div>;
    }

    _headerRenderer(dataKey, sortBy, sortDirection, label, totalWidth) {
        if (!this.dragRefs[dataKey]) {
            this.dragRefs[dataKey] = React.createRef();
        }
        const dragRef = this.dragRefs[dataKey];

        var isDropdown = false;
        var isTextSearch = false;
        var options;

        const metadata = this.props.columns.filter(item => item.id === dataKey)[0];

        if (metadata.filter && metadata.filter === "text") {
            isTextSearch = true;
        }
        else if (metadata.filter && metadata.filter === "dropdown") {
            isDropdown = true;
            if (this.state.dropDownOption && this.state.dropDownOption[dataKey]) {
                options = this.state.dropDownOption[dataKey];
            }
            else {
                options = [{ key: 'Loading ...', value: 'Loading ...', text: 'Loading ...' }];
            }
        }

        return (
            <table className={`${styles.tableFullWidth}`}>
                <tbody>
                    <tr>
                        <td className={`${styles.tableHeader} ${styles.cursorSort}`} onClick={() => this.sort(dataKey)}>
                            {label}
                        </td>
                        {
                            sortBy === dataKey &&
                            <td className={styles.arrowWidth} onClick={() => this.sort(dataKey)}>
                                {
                                    sortDirection === SortDirection.ASC &&
                                    <ExpandMoreIcon fontSize="small" sx={{ paddingRight: '3px' }}/>
                                }
                                {
                                    sortDirection === SortDirection.DESC &&
                                    <ExpandLessIcon fontSize="small" sx={{ paddingRight: '3px' }}/>
                                }
                            </td>
                        }
                        <td className={styles.arrowWidth}>
                            <Draggable
                                nodeRef={dragRef}
                                axis="x"
                                defaultClassName={styles.DragHandle}
                                defaultClassNameDragging="DragHandleActive"
                                onDrag={({ clientX }) => this.resizeRow({ dataKey, clientX, totalWidth })}
                                onStart={({ clientX }) => this.resizeStart({ clientX })}
                                onStop={() => this.resizeEnd({ dataKey, totalWidth })}
                                position={{ x: 0 }}
                                zIndex={999}
                            >
                                <span ref={dragRef} className={`${styles.DragHandleIcon} ${styles.cursorSetColResize}`}>⋮</span>
                            </Draggable>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={dataKey === sortBy ? "3" : "2"} className={styles.tableHeaderRow2}>
                            {isDropdown &&
                                <Select
                                    fullWidth
                                    value={this.state.filterOptions ? this.state.filterOptions[dataKey].value : ""}
                                    onChange={(e) => this.onFilterChange(e.target.value, dataKey)}
                                    size="small"
                                >
                                    <MenuItem value="">
                                        <em>Unselect</em>
                                    </MenuItem>
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.text}
                                        </MenuItem>
                                    ))}
                                </Select>
                            }
                            {!isDropdown && isTextSearch &&
                                <TextField
                                    fullWidth
                                    onChange={(e) => this.onFilterChange(e.target.value, dataKey)}
                                    value={this.state.filterOptions ? this.state.filterOptions[dataKey].value : ""}
                                    variant="outlined"
                                    size="small"
                                    label="Search"
                                />
                            }
                            {!isDropdown && !isTextSearch &&
                                <div />
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    resizeStart({ clientX }) {
        var returnObj = {};
        returnObj.clientX = clientX;
        returnObj.allWidths = { ...this.state.widths }
        this.setState({ dragStart: returnObj });
    }

    resizeRow = ({ dataKey, clientX }) => {
        if (this.state.dragStart) {
            const deltaX = - (this.state.dragStart.clientX - clientX);
            var newWidths = { ...this.state.dragStart.allWidths };

            for (var item in newWidths) {
                if (item === dataKey) {
                    if (newWidths[dataKey] + deltaX > 20) {
                        newWidths[dataKey] = newWidths[dataKey] + deltaX;
                    }
                    else {
                        newWidths[dataKey] = 20;
                    }
                }
                else {
                    var newValue = newWidths[item] - (deltaX / (Object.keys(newWidths).length - 1));
                    if (newValue > 20) {
                        newWidths[item] = newValue;
                    }
                    else {
                        newWidths[item] = 20;
                    }
                }
            }

            this.setState({ widths: newWidths });
        }
    }

    resizeEnd({ dataKey, totalWidth }) {
        const sumValues = Object.values(this.state.widths).reduce((a, b) => a + b);
        const minWidth = this.state.widths[dataKey] + ((Object.keys(this.state.widths).length - 1) * 20);

        if ((sumValues - 1) > totalWidth) {
            // factor to multiply widths values considering 20 as minimum
            const factor = (totalWidth - minWidth) / (sumValues - minWidth)
            var newWidths = { ...this.state.widths }
            for (var column in newWidths) {
                if (column !== dataKey) {
                    newWidths[column] = ((newWidths[column] - 20) * factor) + 20
                }
            }
            this.setState({ widths: newWidths });
        }

        this.setState({ dragStart: undefined });
    }

    sort(sortBy) {
        var sortDirection = SortDirection.ASC;
        var myList = this.state.list;

        // if it is the same variable, perform descending sorting
        if (this.state.sortBy === sortBy) {
            if (this.state.sortDirection === SortDirection.ASC) {
                sortDirection = SortDirection.DESC;
            }
            myList.reverse();
            this.setState({ sortBy, sortDirection, list: myList });
        }

        // otherwise perform sorting according variable
        else {
            const data = this.props.data;

            if (sortDirection === SortDirection.ASC) {
                myList.sort(function (a, b) {
                    if (data[a][sortBy] === data[b][sortBy]) {
                        return 0;
                    }
                    if (!data[a][sortBy] || data[a][sortBy] === "") {
                        return -1;
                    }
                    else if (!data[b][sortBy] || data[b][sortBy] === "") {
                        return 1;
                    }

                    return data[a][sortBy] < data[b][sortBy] ? -1 : 1;
                });
            }
            this.setState({ sortBy, sortDirection, list: myList });
        }
    }

    rowStyleClass(row) {
        if (row.index < 0 || (row.index % 2)) return;
        return styles.rowStyleAlternate;
    }

    updateList() {
        var list;
        var fullList = [];
        var activeFilters = {};
        const data = this.props.data;

        if (this.state.filterOptions !== null) {
            Object.keys(this.state.filterOptions).forEach(item => {
                if (this.state.filterOptions[item].value.length > 0) {
                    activeFilters[item] = this.state.filterOptions[item]
                }
            });
        }

        for (var i = 0; i < this.props.data.length; i++) {
            fullList.push(i);
        }

        list = fullList;

        if (this.state.filterOptions !== null && Object.keys(activeFilters).length > 0) {
            for (var filterKey in activeFilters) {
                const compareValue = activeFilters[filterKey].value;
                const key = filterKey;

                if (activeFilters[filterKey].filter === "dropdown") {
                    list = list.filter(pos => {
                        if (compareValue === "*missing*" && !data[pos][key]){
                            return true;
                        }
                        if (!data[pos][key]) {
                            return false;
                        }
                        if (Array.isArray(data[pos][key])){
                            return data[pos][key].includes(compareValue);
                        }
                        else {
                            return data[pos][key].toString() === compareValue;
                        }
                    })
                }
                else if (activeFilters[filterKey].filter === "text") {
                    list = list.filter(pos => {
                        if (!data[pos][key]) {
                            return false;
                        }
                        return data[pos][key].toString().toLowerCase().includes(compareValue.toLowerCase());
                    })
                }
            }
        }
        this.setState({ list });
    }

    updateDropdowns() {
        var dropdownOptions;
        dropdownOptions = {};

        this.props.columns.filter(item => item.filter === "dropdown").forEach(column => {
            const options = [...new Set(this.props.data.map(item => item[column.id]).flat())];
            dropdownOptions[column.id] = options;

            dropdownOptions[column.id] = options.map(function (item) {
                if (item === undefined) {
                    return { key: "error", value: "error", text: "error" }
                }
                else if (item === null || item === "") {
                    return { key: "*missing*", value: "*missing*", text: "*missing*" }
                }
                return { key: item, value: item, text: item }
            });
        })

        this.setState({ dropDownOption: dropdownOptions });
    }

    onFilterChange(value, dataKey) {
        var newFilter = { ...this.state.filterOptions };
        newFilter[dataKey].value = value;
        this.setState({ filterOptions: newFilter });
        this.updateList();
    }

    initializeFilters() {
        var filters = {};

        this.props.columns.filter(item => item.filter).forEach(column => {
            filters[column.id] = { value: "", filter: column.filter };
        })
        this.setState({ filterOptions: filters });
    }
}

export default (TableSmall);
