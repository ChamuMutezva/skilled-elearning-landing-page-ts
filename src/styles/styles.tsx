export const Colors = {
    white: '#FFFFFF',
    black: '#000000',
    blueGrey: '#666CA3',
    lightGrey: '#83869A',
    darkBlueGrey: '#13183F',
    lightPink: '#FFA7C3',
    brightPink: '#F74780',
    gradPink: 'linear-gradient(hsl(13, 100%, 64%), hsl(322, 87%, 55%))',
    gradBluePink: 'linear-gradient(hsl(237, 100%, 64%), hsl(322, 87%, 55%))'
}

export const FontName = {
    fontFamily: "'Plus Jakarta Sans', sans-serif"
}

export const ParaStyles = {
    fontWeight: 500,
    fontFamily: FontName.fontFamily,
    color: Colors.lightGrey,
    paddingBlock: '1rem',
    lineHeight: 1.625,
    fontSize: {
        xs: "1rem",
        lg: "1.125rem"
    }
}

export const H1Styles = {
    color: Colors.darkBlueGrey,
    fontFamily: "inherit",
    fontWeight: 800,
    paddingBlockStart: '1.5rem',
    lineHeight: 1.25,
    fontSize: {
        xs: "2.5rem",
        lg: "3.5rem"
    }
}

export const H2Styles = {
    fontWeight: 800,
    fontFamily: FontName.fontFamily,
    lineHeight: 1.33,
    color: Colors.white,
    paddingInline: '1.5rem',
    paddingBlock: '1.5rem',
    textAlign: 'left',
    borderRadius: '10px',
    fontSize: {
        xs: "1.5rem",
        lg: "2rem"
    }
}

export const PaperStyles = {
    borderRadius: '10px',
    height: '100%'
}

export const PaperStyles2 = {
    display: 'flex',
    borderRadius: '10px',
    backgroundImage: Colors.gradPink,
    alignItems: 'center',
    height: {
        xs: "100%",
        lg: "80%",
    }

}

export const BtnPrimary = {
    backgroundColor: Colors.darkBlueGrey,
    fontFamily: FontName.fontFamily,
    lineHeight: 1.75,
    fontWeight: 700,
    borderRadius: '28px',
    paddingBlock: '.7rem',
    fontSize: '1rem',
}

export const BtnAltenative = {
    backgroundImage: Colors.gradPink,
    fontFamily: FontName.fontFamily,
    lineHeight: 1.75,
    fontWeight: 700,
    borderRadius: '28px',
    paddingBlock: '.7rem',
    marginBlock: '1rem',
    fontSize: '1rem',
}

export const BtnFooter = {
    backgroundImage: Colors.gradBluePink,
    fontFamily: FontName.fontFamily,
    lineHeight: 1.75,
    fontWeight: 700,
    borderRadius: '28px',
    paddingBlock: '.7rem',
    fontSize: '1rem',
}

export const GridStylesMain = {
    maxWidth: { lg: '69.375rem' }
}
