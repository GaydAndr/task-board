import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {categoryCreateNew} from "../../../store/category/categoryOperation.ts";
import {Button, Stack, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CategoryAddNew = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(false)
  const [categoryTitle, setCategoryTitle] = useState('');
  const boardId = useAppSelector(
    state => state.board.currentBoard?.id
  )

  const handleCreateClick = () => {
    if (active && boardId) {
      dispatch(categoryCreateNew({id: boardId, name: categoryTitle}))
    }
    setActive(!active);
  };

  return (
    <>
      {active ?
        <Stack
          direction={"row"}
          component="form"
          spacing={1}
          sx={{
            '& > :not(style)': {width: '15ch'},
          }}

          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="Controlled"
            value={categoryTitle}
            size="small"


            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCategoryTitle(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={handleCreateClick}
            size="small"
          >
            Create
          </Button>
        </Stack>
        :
        <Button
          variant="outlined"
          disableElevation
          size="large"
          fullWidth
          sx={{
            color: "#232323",
            borderStyle: 'dashed'
          }}
          onClick={handleCreateClick}
          startIcon={<AddIcon/>}
        >
          Create new category
        </Button>
      }
    </>
  );
};

export default CategoryAddNew;