import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} bgcolor={colors.primary[400]}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[300]}
        borderRadius="5px"
        p="5px 10px"
        sx={{
          "&:hover": {
            backgroundColor: colors.primary[300],
          },
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1, color: colors.grey[100] }} placeholder="Search" />
        <IconButton>
          <SearchIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ color: colors.grey[100] }} />
          ) : (
            <LightModeOutlinedIcon sx={{ color: colors.grey[900] }} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      
        <IconButton>
          <PersonOutlinedIcon sx={{ color: colors.grey[100] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
