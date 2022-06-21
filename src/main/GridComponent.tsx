import { Grid, Paper } from '@mui/material'
import { PaperStyles } from '../styles/styles'
import ButtonSecondary from './ButtonSecondary'
import DecorativeImgs from './DecorativeImgs'
import TextHeading from './TextHeading'
import TextSecondary from './TextSecondary'

function GridComponent({ src, heading,  content }: {src: string, heading: string, content: string}) {
    return (
        <Grid item xs={12} sm={6} lg={4} >
            <Paper elevation={6} sx={PaperStyles} >
                <DecorativeImgs src={src} />
                <TextHeading heading={heading} />
                <TextSecondary content={content}/>
                <ButtonSecondary />
            </Paper>
        </Grid>
    )
}

export default GridComponent