import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import Skilled from '../assets/logo-dark.svg';
import { H1Styles, ParaStyles, BtnPrimary, BtnAltenative } from '../styles/styles';
import Hero from './Hero';
import { GridStylesMain } from '../styles/styles';

function Header(): JSX.Element {
  const GridStyles = {
    position: 'relative',
    zIndex: '100',
  }
  const GridStyles2 = {
    marginBlockEnd: '3rem',
  }
  const GridStyles3 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center'
  }
  const BoxStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <header>
      <Container sx={[GridStylesMain, GridStyles]}>
        <Box sx={BoxStyles}>
          <IconButton color='secondary' href='/' >
            <Box component="img" src={Skilled} alt="" />
          </IconButton>
          <Button variant='contained' href='/'
            sx={BtnPrimary}> Get started
          </Button>
        </Box>
      </Container>
      <Container sx={[GridStylesMain, GridStyles2]}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}
            sx={GridStyles3}>
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
    </header >
  )
}

export default Header