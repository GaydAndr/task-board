import {Box, Container} from "@mui/material";
import TaskList from "../TaskList/TaskList.tsx";
import Grid from '@mui/material/Unstable_Grid2';
import AddColumn from "../AddColumn/AddColumn.tsx";


const MainGrid = () => {
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
          sx={{
          }}
          container
          spacing={2}
        >
          <Grid
            xs={10}
            md={3}
            minWidth={300}
          >
            <TaskList/>
          </Grid>

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