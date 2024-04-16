import {Box, Container} from "@mui/material";
import TaskList from "../TaskList/TaskList.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import AddColumn from "../AddColumn/AddColumn.tsx";
import { useAppSelector} from "../../hooks/hooks.ts";

const MainGrid = () => {
  const categoryList=useAppSelector(
    state => state.category.categoryList
  )

  return (
    <Container maxWidth={"xl"}>
      <Box
        mt={2}
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          pb: 2
        }}
        maxWidth={'95vw'}

      >
        <Grid
          wrap={"nowrap"}
          container
          spacing={2}
        >
          {
            categoryList?.map(category=>(
              <Grid
                key={category.id}
                xs={10}
                md={3}
                minWidth={300}
              >
                <TaskList
                  id={category.id}
                  name={category.name}
                  amount={categoryList.length}
                />
              </Grid>
            ))
          }
          <Grid
            xs={10}
            md={3}
            minWidth={300}
          >
            <AddColumn/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainGrid;