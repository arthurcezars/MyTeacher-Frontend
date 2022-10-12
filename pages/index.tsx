import { Box, Dialog, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listaProfessores } = useIndex();

  return (
    <>
      <div>
        <Box sx={{ backgroundColor: 'secondary.main' }}>
          <Lista professores={listaProfessores}></Lista>
        </Box>

        <Dialog open={true} fullWidth PaperProps={{sx: {p: 5}}}>
          <Grid container>
            <Grid item>
              teste
            </Grid>
          </Grid>
        </Dialog>
      </div>
    </>
  )
}

export default Home
