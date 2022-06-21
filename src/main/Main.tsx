import { Container, Grid, Paper, Typography } from '@mui/material';
import GridComponent from './GridComponent';
import Animation from '../assets/icon-animation.svg';
import Design from '../assets/icon-design.svg';
import Photography from '../assets/icon-photography.svg';
import Crypto from '../assets/icon-crypto.svg';
import Business from '../assets/icon-business.svg';
import { H2Styles, PaperStyles2, GridStylesMain } from '../styles/styles';

function Main() {
   const GridStyles = {
      marginBlockEnd: { lg: "8rem" }    
   }

   return (
      <main>
         <Container sx={[GridStylesMain, GridStyles]} >
            <Grid container spacing={2} sx={{ rowGap: '2rem' }}>
               <Grid item xs={12} sm={6} lg={4} >
                  <Paper elevation={6} sx={PaperStyles2} >
                     <Typography variant='h2' sx={H2Styles}>
                        Check out our most popular courses!
                     </Typography>
                  </Paper>
               </Grid>
               <GridComponent
                  src={Animation}
                  heading="Animation"
                  content="Learn the latest animation techniques to
                     create stunning motion design and captivate your audience."/>
               <GridComponent
                  src={Design}
                  heading="Design"
                  content="Create beautiful,
                  usable interfaces to help shape the future of how the web looks."/>
               <GridComponent
                  src={Photography}
                  heading="Photography"
                  content="Explore critical fundamentals like
                  lighting, composition, and focus to capture exceptional photos."/>
               <GridComponent
                  src={Crypto}
                  heading="Crypto"
                  content="All you need to know to get started investing in crypto.
                  Go from beginner to advanced with this 54 hour course."/>
               <GridComponent
                  src={Business}
                  heading="Business"
                  content="A step-by-step playbook to help you start, scale,
                  and sustain your business without outside investment."/>
            </Grid>
         </Container>
      </main>
   )
}

export default Main