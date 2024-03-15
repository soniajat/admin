import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
 
const Topbar = () => {
  return (
    <Box position="absolute" top={0} right={0} p={2}>
      <Box display="flex" alignItems="center">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
 
export default Topbar;
 