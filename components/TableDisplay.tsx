import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, {useState} from "react";

interface Column {
    id: 'sepal_length' | 'sepal_width' | 'petal_length' | 'petal_width' | 'specie';
    label: string;
    align?: 'right';
    minWidth?: number;
}

const columns: readonly Column[] = [
    { id: 'sepal_length', label: 'Sepal Length' },
    { id: 'sepal_width', label: 'Sepal Width' },
    { id: 'petal_length', label: 'Petal Length' },
    { id: 'petal_width', label: 'Petal Width' },
    { id: 'specie', label: 'Specie' }
]

export default function TableDisplay(props: { dataset: object[] }){
    const {dataset} = props
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 440}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ bgcolor: 'lightgray' }}>SN</TableCell>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                    sx={{ bgcolor: 'lightgray' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataset
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((flower, index) => (// @ts-ignore
                                <TableRow key={flower.name} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell>{index + 1}</TableCell>
                                    {columns.map((column) => {
                                        // @ts-ignore
                                        const value = flower[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{ bgcolor: 'lightgray' }}
                rowsPerPageOptions={[10, 30, 50, 100]}
                component="div"
                count={dataset.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}