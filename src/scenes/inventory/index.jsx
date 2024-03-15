import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockInventory";
import Header from "../../components/Header";

const Inventory = () => {
  const columns = [
    { field: "id", headerName: "item_id", flex: 1, headerClassName: "header-class" },
    { field: "image", headerName: "image", flex: 2, headerClassName: "header-class" },
    { field: "name", headerName: "name", flex: 1, headerClassName: "header-class" },
    { field: "price", headerName: "price", flex: 1, headerClassName: "header-class" },
    { field: "description", headerName: "description", flex: 1, headerClassName: "header-class" },
    { field: "location", headerName: "location", flex: 1, headerClassName: "header-class" },
    { field: "dateTime", headerName: "dateTime", flex: 1, headerClassName: "header-class" },
    { field: "item_status", headerName: "item_status", flex: 1, headerClassName: "header-class" },
  ];

  return (
    <Box m="20px">
      <Header
        title="Available items"
        subtitle="List of Available Items"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#630944",
            borderBottom: "none",
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "silver",
            color: "#FFFFFF",
          },
        }}
      >
      <Box
  m="40px 0 0 0"
  height="97vh"
  sx={{
  }}
>
  <DataGrid
    rows={mockDataContacts}
    columns={columns}
    components={{ Toolbar: GridToolbar }}
  />
</Box>
      </Box>
    </Box>
  );
};
 
export default Inventory;
 