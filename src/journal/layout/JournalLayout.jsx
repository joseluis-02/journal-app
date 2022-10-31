import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { SideBar } from "../components";
import { NavBar } from "../components/NavBar"

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/*Navbar */}
        <NavBar drawerWidth={ drawerWidth } />
        {/*Sidebar */}
        {/*<SideBar drawerWidth={ drawerWidth } />*/}

        {/*La parte central de layout para cargar las pantallas hijos */}
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            {/*Toolbar */}
            <Toolbar />

            {/*Aqui se renderiza las pantallas de Journal App */}
            {children}
        </Box>
    </Box>
  )
}
