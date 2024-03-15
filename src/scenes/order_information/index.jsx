import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Order_Information = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 1, headerClassName: "header-class" },
    { field: "orderId", headerName: "Order ID", headerClassName: "header-class", flex: 1 },
    { field: "itemId", headerName: "Item ID", headerClassName: "header-class", flex: 1 },
    { field: "orderItemId", headerName: "Order Item ID", headerClassName: "header-class", flex: 1 },
    { field: "totalPrice", headerName: "Total Price", headerClassName: "header-class", flex: 1 },
    { field: "roomId", headerName: "Room ID", headerClassName: "header-class", flex: 1 },
    { field: "expectedTime", headerName: "Expected Time", headerClassName: "header-class" , flex: 1},
    { field: "dateTime", headerName: "Date Time", headerClassName: "header-class", flex: 1 },
    { field: "stage", headerName: "Stage", headerClassName: "header-class", flex:2 },
  ];
 
  return (
    <Box m="20px">
      <Header
        title="Order Information"
        subtitle="Order summary"
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
  />
</Box>
      </Box>
    </Box>
  );
};
 
export default Order_Information;
 