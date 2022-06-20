import { Typography } from '@mui/material';
import { Colors, FontName } from '../styles/styles';

function TextHeading({ heading }: { heading: string }): JSX.Element {
  
    const headingStyles = {
        fontFamily: FontName.fontFamily,
        color: Colors.darkBlueGrey,
        fontWeight: 800,
        lineHeight: 1.26,
        marginInline: '1rem',
        fontSize: {
            xs: "1.25rem",
            lg: "1.5rem"
        }                
    }
    return (
        <Typography variant='h3' sx={headingStyles}>
            {heading}
        </Typography>
    )
}

export default TextHeading