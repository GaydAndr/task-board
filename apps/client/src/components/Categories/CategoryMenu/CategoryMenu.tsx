import {Fade, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {deleteCategory} from "../../../store/category/categoryOperation.ts";


interface Prop {
  id: string
}

const CategoryMenu = ({id}: Prop) => {
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    dispatch(deleteCategory(id))
  };


  return (
    <>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DriveFileRenameOutlineIcon/>
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AddIcon/>
          </ListItemIcon>
          Add new card
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteOutlineIcon/>
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default CategoryMenu;