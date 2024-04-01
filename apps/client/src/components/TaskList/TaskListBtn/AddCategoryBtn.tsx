import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {categoryAction} from "../../../store/category/categorySlice.ts";

const AddCategoryBtn = ({name}:{name:string}) => {
  const dispatch = useAppDispatch()
  const handlerAddCardBtn =()=>{
    dispatch(uiAction.toggleCardForm(true))
    dispatch(categoryAction.setCurrentCategory(name))
  }
  return (
    <>
      <Button
        variant="outlined"
        disableElevation
        size="large"
        fullWidth
        sx={{
          color: "#232323",
          mt:2,
          mb:2,
          borderStyle: 'dashed'
        }}
        startIcon={ <AddIcon/>}
        onClick={handlerAddCardBtn}
      >
        Add new card
      </Button>
    </>
  );
};

export default AddCategoryBtn;