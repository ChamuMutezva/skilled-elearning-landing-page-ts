import { Avatar } from "@mui/material"

function DecorativeImgs({ src }: { src: string }): JSX.Element {
    const styles = { 
        minHeight: '3.5rem', 
        minWidth: '3.5rem',   
        top: "-1.75rem",
        left: "1rem"
    }
    return (
        <Avatar src={src} alt="" sx={styles} />
    )
}

export default DecorativeImgs