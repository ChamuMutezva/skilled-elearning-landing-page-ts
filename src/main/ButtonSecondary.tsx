import { Button } from '@mui/material'
import { Colors } from '../styles/styles'

function ButtonSecondary() {
    const btnSecondary = {
        color: Colors.lightPink,
        fontWeight: 700,
         fontFamily: 'inherit', 
         textTransform: 'capitalize',
         paddingInline: '1rem',
         fontSize: '1.125rem',
         marginBlockStart: '1rem',
         marginBlockEnd: '2.5rem',
    }
    return (
        <Button variant='text' href='/'
            sx={btnSecondary} >
            Get started
        </Button>
    )
}

export default ButtonSecondary