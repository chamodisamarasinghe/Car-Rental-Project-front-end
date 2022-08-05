import React, {useEffect, useState} from 'react'
import TextField from "@mui/material/TextField";
import {Box, Button, Grid, IconButton} from "@mui/material";
import CustomerService from "../../../services/CustomerService";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashNav from "../AdminDashBoard/adminDashNav";
import CustomerDashNav from "../CustomerDashBoard/customerDashNav";
const defaultPosition = toast.POSITION.BOTTOM_CENTER;

function createData(rentId, pickUpDate, pickUpTime, returnDate, returnTime, slipFile, carType, nicNo,   update, deleted, maintain) {
    return {
        rentId,
        pickUpDate,
        pickUpTime,
        returnDate,
        returnTime,
        slipFile,
        carType,
        nicNo,
        update,
        deleted,
        maintain
    };
}
const rows = [
    createData("1234567", "Praboda", "ABC123", "1", "3000", "2022.07.24"),
    createData("7654321", "Sadali", "ABC456", "1", "4000", "2022.07.23"),
    createData("6543218", "Geethika", "ABC789", "2", "6000", "2022.07.24"),
    createData("5432198", "Anupama", "DEF123", "3", "10000", "2022.07.24")
];


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'rentId',
        numeric: false,
        disablePadding: true,
        label: 'RentId',
    },
    {
        id: 'pickUpDate',
        numeric: false,
        disablePadding: true,
        label: 'Pick_UP_Date',
    },
    {
        id: 'pickUpTime',
        numeric: false,
        disablePadding: true,
        label: 'Pick_Up_Time',
    },
    {
        id: 'returnDate',
        numeric: false,
        disablePadding: true,
        label: 'Return_date',
    },
    {
        id: 'returnTime',
        numeric: false,
        disablePadding: true,
        label: 'Return_time',
    },
    {
        id: 'slipFile',
        numeric: false,
        disablePadding: true,
        label: 'Slip_file',
    },
    {
        id: 'carType',
        numeric: false,
        disablePadding: true,
        label: 'Car_type',
    },

    {
        id: 'nicNo',
        numeric: false,
        disablePadding: true,
        label: 'NIC',
    },

    {
        id: 'isDriver',
        numeric: false,
        disablePadding: true,
        label: 'Is_Driver',
    },

    {
        id: 'update',
        numeric: false,
        disablePadding: true,
        label: 'Update',
    },
    {
        id: 'deleted',
        numeric: false,
        disablePadding: true,
        label: 'Delete',
    },
    {
        id: 'maintain',
        numeric: false,
        disablePadding: true,
        label: 'Maintain',
    },
];

function EnhancedTableHead(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const {numSelected} = props;

};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export const showToast = ( type = "success", msg, autoClose = 2000, className = "primaryColor", position = defaultPosition ) => {
    if (type === "success") {
        toast.success(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "primaryColor" : className,
            position: position,
        });
    } else if (type === "error") {
        toast.error(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "dangerColor" : className,
            position: position,
        });
    }
};
const ManageCustomer = ({}) => {

    const initialValues = {

        rentId:"",
        pickUpDate:"",
        pickUpTime:'',
        returnDate:"",
        returnTime:"",
        slipFile:"",
        carType:"",
        nicNo:"",
        /**
         * Exta data
         * */

        isDriver: false,
    };

    const statusObj = {
        alert: false,
        message: '',
        severity: '',
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('Add Customer');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitCustomer();
    }

    const clearFields = () => {

        setFormValues({
            rentId:"",
            pickUpDate:"",
            pickUpTime:'',
            returnDate:"",
            returnTime:"",
            slipFile:"",
            carType:"",
            nicNo:"",

        });
    };

    const submitCustomer = async () => {

        let dto = {};
        dto = formValues;

        if (btnLabel === "Add Customer") {
            let res = await CustomerService.addCustomer(dto);//customer service --> postCustomer()
            console.log(res.status)

            console.log("res Status", res.data)
            if (res.data.code === 200) {

                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'saved successfully !');

                loadData();
                clearFields();

            } else  {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
                console.log("not Equal")
                showToast('error', 'Not Saved');
            }
        } else {
            let res = await CustomerService.putCar(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',
                });
                loadData();
                showToast('success', 'update successfully !');
                setBtnLabel("Add Customer");
                setBtnColor('primary')
                clearFields();

            } else {
                setStatus({
                    alert: true,
                    message: "e",
                    severity: 'error'
                });
                showToast('error', 'Not Updated');
            }
        }
    };


    const loadData = async () => {
        CustomerService.fetchCustomer().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
            }
        });
    };

    const deleteCustomer = async (id) => {
        let params = {
            rentId: id
        }
        let res = await CustomerService.deleteCustomer(params);

        if (res.status === 200) {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            showToast('success', 'successfully Deleted!');
            loadData()
        } else {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
            showToast('error', 'Not Deleted');
        }
    };

    const updateCustomer = async (data) => {
        setBtnLabel("Update Customer");
        setBtnColor('secondary')
        setFormValues({
            rentId:data.rentId,
            pickUpDate: data.pickUpDate,
            pickUpTime: data.pickUpTime,
            returnDate: data.returnDate,
            returnTime: data.returnTime,
            slipFile: data.slipFile,
            carType: data.carType,
            nicNo: data.nicNo,

        });
    };


    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);


    const setDataToRows = (td) => {

        console.log("tablemap", td);
        const newArr2 = []
        for (let i = 0; i < td.length; i++) {
            newArr2.push((createData(
                td[i].rentId,
                td[i].pickUpDate, td[i].pickUpTime, td[i].returnDate, td[i].returnTime, td[i].slipFile, td[i].carType, td[i].nicNo
            )))
        }
        console.log("new Arra", newArr2)
        setRows(newArr2)


    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // car


    return (
        <div>
            <ToastContainer />
            <Grid>
                <AdminDashNav/>
            </Grid>
            <Divider/>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': {},
                }}
                noValidate
                autoComplete="off"
            >

                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5, mt: 5}}
                >
                    {/*<Grid item>*/}
                    {/*    <TextField id="outlined-basic" label="Rent Id" variant="outlined"*/}
                    {/*               helperText="Enter RentId" name="rentId"*/}
                    {/*               onChange={handleInputChange} validators={['required']}*/}
                    {/*               value={formValues.rentId}/>*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}

                    {/*    <TextField*/}
                    {/*        helperText="Enter Pick_UpDate"*/}
                    {/*        variant="outlined"*/}
                    {/*        id="outlined-basic"*/}
                    {/*        label="Pick_UpDate"*/}
                    {/*        name="pickUpDate"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.pickUpDate}*/}
                    {/*    />*/}

                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Pick_UpTime"*/}
                    {/*        id="outlined-basic"*/}
                    {/*        label="Pick_UpTime"*/}
                    {/*        name="pickUpTime"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.pickUpTime}*/}
                    {/*    />*/}
                    {/*</Grid>*/}

                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Return_date"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label=" Return_date"*/}
                    {/*        name="returnDate"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.returnDate}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Return_Time"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Return_Time"*/}
                    {/*        name="returnTime"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.returnTime}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Slip_File"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Slip_File"*/}
                    {/*        name="slipFile"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.slipFile}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Car Type"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Car Type"*/}
                    {/*        name="carType"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.carType}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter NIC"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="NIC"*/}
                    {/*        name="nicNo"*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        value={formValues.nicNo}*/}
                    {/*    />*/}
                    {/*</Grid>*/}


                </Grid>
                <InputBase
                    id="outlined-basic"
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search RentId"
                    inputProps={{'aria-label': 'search RentId'}}
                    variant="standard"
                />
                <IconButton type="submit" sx={{p: '20px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <div>
                    <div>
                        <Button color="secondary" size="medium" type="submit" variant="contained"
                                sx={{ml: 45, mt: -13}}>
                            Search
                        </Button>

                        {/*<Button color={btnColor} size="medium" type="submit" variant="contained"*/}
                        {/*        sx={{ml: 3, mt: -13}}>*/}
                        {/*    {btnLabel}*/}
                        {/*</Button>*/}

                        {/*<Button onClick={clearFields} type="reset" variant="contained" color="success"*/}
                        {/*        sx={{ml: 3, mt: -13}}>*/}
                        {/*    Reset*/}
                        {/*</Button>*/}
                    </div>
                    {/*cartable open*/}
                    <Box sx={{width: '100%'}}>
                        <Paper sx={{width: '100%', mb: 2}}>
                            <EnhancedTableToolbar numSelected={selected.length}/>
                            <TableContainer>
                                <Table
                                    sx={{minWidth: 750, marginTop: 5}}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.rentId);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.rentId}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell>
                                                        </TableCell>
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {row.rentId}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.pickUpDate}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.type}</TableCell>
                                                        <TableCell>{row.pickUpTime}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.returnDate}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.returnTime}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.slipFile}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.carType}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.nicNo}
                                                        </TableCell>

                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.isDriver}
                                                        </TableCell>
                                                        {/*<TableCell component="th"*/}
                                                        {/*           id={labelId}*/}
                                                        {/*           scope="row"*/}
                                                        {/*           padding="none">{row.update}*/}
                                                        {/*    <IconButton onClick={() => {*/}
                                                        {/*        updateCustomer(row);*/}
                                                        {/*    }} color="info" aria-label="update" component="label">*/}
                                                        {/*        <CreateIcon/>*/}
                                                        {/*    </IconButton>*/}

                                                        {/*</TableCell>*/}
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.delete}

                                                            <IconButton onClick={() => deleteCustomer(row.rentId)}
                                                                        color="error" aria-label="delete"
                                                                        component="label">
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                        </TableCell>

                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.maintain}
                                                            <IconButton color="secondary" aria-label="maintain"
                                                                        component="label">
                                                                <ConstructionIcon/>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Box>
                    {/*cartable close*/}

                </div>

            </Box>
        </div>
    )

}

export default ManageCustomer