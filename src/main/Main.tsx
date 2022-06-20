import { Container, Grid, Paper, Typography } from '@mui/material';
import ButtonSecondary from './ButtonSecondary';
import TextHeading from './TextHeading';
import TextSecondary from './TextSecondary';
import DecorativeImgs from './DecorativeImgs';
import Animation from '../assets/icon-animation.svg';
import Design from '../assets/icon-design.svg';
import Photography from '../assets/icon-photography.svg';
import Crypto from '../assets/icon-crypto.svg';
import Business from '../assets/icon-business.svg';
import { H2Styles, PaperStyles , PaperStyles2 } from '../styles/styles';

function Main() {
  
   return (
      <main>
         <Container sx={{ marginBlockEnd: { lg: "8rem" } }} >
            <Grid container spacing={2} sx={{ rowGap: '2rem' }}>
               <Grid item xs={12} sm={6} lg={4} >
                  <Paper elevation={6} sx={PaperStyles2} >
                     <Typography variant='h2' sx={H2Styles}>
                        Check out our most popular courses!
                     </Typography>
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={6} lg={4} >
                  <Paper elevation={6} sx={PaperStyles} >
                     <DecorativeImgs src={Animation} />
                     <TextHeading heading="Animation" />
                     <TextSecondary content="Learn the latest animation techniques to
                     create stunning motion design and captivate your audience."/>
                     <ButtonSecondary />
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <Paper elevation={6} sx={PaperStyles} >
                     <DecorativeImgs src={Design} />
                     <TextHeading heading="Design" />
                     <TextSecondary content="Create beautiful,
                     usable interfaces to help shape the future of how the web looks." />
                     <ButtonSecondary />
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <Paper elevation={6} sx={PaperStyles} >
                     <DecorativeImgs src={Photography} />
                     <TextHeading heading="Photography" />
                     <TextSecondary content="Explore critical fundamentals like
                      lighting, composition, and focus to capture exceptional photos." />
                     <ButtonSecondary />
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <Paper elevation={6} sx={PaperStyles} >
                     <DecorativeImgs src={Crypto} />
                     <TextHeading heading="Crypto" />
                     <TextSecondary content="All you need to know to get started investing in crypto.
                        Go from beginner to advanced with this 54 hour course." />
                     <ButtonSecondary />
                  </Paper>
               </Grid>
               <Grid item xs={12} sm={6} lg={4}>
                  <Paper elevation={6} sx={PaperStyles} >
                     <DecorativeImgs src={Business} />
                     <TextHeading heading=" Business" />
                     <TextSecondary content="A step-by-step playbook to help you start, scale,
                        and sustain your business without outside investment." />
                     <ButtonSecondary />
                  </Paper>
               </Grid>
            </Grid>
         </Container>
      </main>
   )
}

export default Main