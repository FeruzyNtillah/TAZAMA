import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = ({ children }) => {
  return (
    <Box 
      display="flex" 
      height="100vh" 
      overflow="hidden"
      sx={{
        transition: "all 0.3s ease",
      }}
    >
      {/* Sidebar Column (now part of the flex layout) */}
      <Sidebar />
      
      {/* Main Content Column */}
      <Box 
        component="main"
        flex={1}
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Topbar (fixed height) */}
        <Box 
          position="sticky" 
          top={0} 
          zIndex={1100}
          sx={{ 
            flexShrink: 0,
            backdropFilter: "blur(8px)",
          }}
        >
          <Topbar />
        </Box>

        {/* Scrollable Content Area */}
        <Box 
          flex={1}
          overflow="auto"
          p={3}
          sx={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'primary.light',
              borderRadius: '3px',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;