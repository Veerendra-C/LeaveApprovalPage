import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "StudentName", headerName: "Student Name", width: 200 },
  { field: "FromDate", headerName: "From Date", width: 200 },
  {
    field: "ToDate",
    headerName: "To Date",
    type: "number",
    width: 200,
  },
  {field: "Reason",headerName:"Reason",width: 200},
  {field: "Permission",headerName:"Permission",width: 100},
];

const rows = [
  { id: 1, StudentName: "Snow", FromDate: "19/3/2025",ToDate: "23/3/2025",Reason:"sick leave",Permission: "Granted"},
  { id: 2, StudentName: "John", FromDate: "1/3/2025",ToDate: "5/3/2025",Reason:"Personal",Permission: "Denied"},
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Table() {
  return (
    <Paper sx={{ height: 800, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0, backgroundColor: "transparent" }}
      />
    </Paper>
  );
}
