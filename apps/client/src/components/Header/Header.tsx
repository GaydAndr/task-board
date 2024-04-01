import {FC} from "react";
import {AppBar, Box, CssBaseline, IconButton, Toolbar} from "@mui/material";
import TitleBoard from "./Title/TitleBoard.tsx";
import BoardBtn from "./BoardBtn/BoardBtn.tsx";
import MenuIcon from '@mui/icons-material/Menu';
import BoardSelector from "./BoardSelector/BoardSelector.tsx";

const Header: FC = () => {

  return (
    <>
      <CssBaseline/>
      <AppBar
        component="nav"
        color={'transparent'}

      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Box sx={{flexGrow: 1, textAlign: 'left', display: 'flex'}}>
            <TitleBoard/>
            <BoardSelector/>
          </Box>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <BoardBtn/>
          </Box>
        </Toolbar>
      </AppBar>
    </>

  )
    ;
};

export default Header;