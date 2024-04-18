import {Fade, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import {useDeleteCategoryMutation} from "../../../services/category.ts";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";


interface Prop {
  id: string
}

const CategoryMenu = ({id}: Prop) => {
  const dispatch = useAppDispatch();
  const [deleteCategory] = useDeleteCategoryMutation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    deleteCategory(id)
    setAnchorEl(null);
  };

  const handleEdit = () => {
    dispatch(uiAction.toggleCategoryInp({id,value: true}))
    setAnchorEl(null);
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
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <DriveFileRenameOutlineIcon color={'info'}/>
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EastIcon color={'success'}/>
          </ListItemIcon>
          Right
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <WestIcon color={'success'}/>
          </ListItemIcon>
         Left
        </MenuItem>
        <MenuItem onClick={handleDelete}  >
          <ListItemIcon >
            <DeleteOutlineIcon color={'error'}/>
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default CategoryMenu;