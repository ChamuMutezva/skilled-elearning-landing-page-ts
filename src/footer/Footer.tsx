import { Box, Button, Container, IconButton } from "@mui/material";
import { Colors } from "../styles/styles";
import Logo from "../assets/logo-light.svg";
import { BtnFooter } from "../styles/styles";

function Footer(): JSX.Element {
    const footerStyles = {      
        backgroundColor: Colors.darkBlueGrey,
    }
    const GridStyles = {
        marginBlockStart: '3rem',
        maxWidth: { lg: '69.375rem' }
    }
    return (
        <footer style={footerStyles}>
            <Container sx={GridStyles}>
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', paddingBlock: '2rem'
                }}>
                    <IconButton color='secondary' href='/' aria-label="skilled elearning" >
                        <Box component="img" src={Logo} alt="" />
                    </IconButton>
                    <Button variant='contained' href='/' sx={BtnFooter}>
                        Get started
                    </Button>
                </Box>
            </Container>
        </footer>
    )
}

export default Footer