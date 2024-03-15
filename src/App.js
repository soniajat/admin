import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import OrderInformation from "./scenes/order_information";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {useMode } from "./theme";
import AddItem from "./scenes/add_item";
import Inventory from "./scenes/inventory";
import Logout from "./scenes/logout";
 
function App() {
  const [theme] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/order_information" element={<OrderInformation />} />
              <Route path="/add_item" element={<AddItem />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
  );
}
export default App;
 