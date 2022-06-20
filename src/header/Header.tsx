import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import Skilled from '../assets/logo-dark.svg';
import { H1Styles, ParaStyles, BtnPrimary, BtnAltenative } from '../styles/styles';
import Hero from './Hero';

function Header(): JSX.Element {
  return (
    <header>
      <Container sx={{ position: 'relative', zIndex: '100' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton color='secondary' href='/' >
            <Box component="img" src={Skilled} alt="" />
          </IconButton>
          <Button variant='contained' href='/'
            sx={BtnPrimary}> Get started
          </Button>
        </Box>
      </Container>
      <Container sx={{ marginBlockEnd: '3rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center' }}>
            <Typography variant='h1' sx={H1Styles}>
              Maximize skill, minimize budget
            </Typography>
            <Typography variant='body2' sx={ParaStyles}>
              Our modern courses across a range of in-demand skills will
              give you the knowledge you need to live the life you want.
            </Typography>
            <Button variant='contained' href='/'
              sx={BtnAltenative}>
              Get started
            </Button>

          </Grid>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Box sx={{ width: "100%" }}>
              <Hero />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header