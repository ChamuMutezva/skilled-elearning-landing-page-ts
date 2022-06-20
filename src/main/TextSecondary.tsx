import { Typography } from '@mui/material'
import { ParaStyles } from '../styles/styles'

function TextSecondary({ content }: { content: string }): JSX.Element {
    const padding = {
        paddingInline: '1rem'
    }
    return (
        <Typography variant='body2' sx={[ParaStyles, padding]}  >
            {content}
        </Typography>
    )
}

export default TextSecondary