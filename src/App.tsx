import { Box } from '@mui/material';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

function App() {
  return (
    <Box sx={{ paddingBlockStart: '2rem', overflow: 'hidden', 
     backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #F0F1FF 100%)' }}>
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
