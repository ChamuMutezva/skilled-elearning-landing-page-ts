import { css } from '@emotion/css';
import Desktop2xWebp from "../assets/image-hero-desktop@2x.webp"
import Desktop2xPng from "../assets/image-hero-desktop@2x.png"
import DesktopWebp from "../assets/image-hero-desktop.webp"
import DesktopPng from "../assets/image-hero-desktop.png"

import Tablet2xWebp from "../assets/image-hero-tablet@2x.webp"
import Tablet2xPng from "../assets/image-hero-tablet@2x.png"
import TabletWebp from "../assets/image-hero-tablet.webp"
import TabletPng from "../assets/image-hero-tablet.png"

import Mobile2xWebp from "../assets/image-hero-mobile@2x.webp"
import Mobile2xPng from "../assets/image-hero-mobile@2x.png"
import MobileWebp from "../assets/image-hero-mobile.webp"
import MobilePng from "../assets/image-hero-mobile.png"

function Hero(): JSX.Element {
    const imgStyles = css(
        `
        position: relative;
        display: block;
        min-width: 100%;
        height: 100%;
        @media (min-width: 600px) {      
          top: -2rem;     
          right: -5rem;   
          transform: scale(1.5)    
        }
        @media (min-width: 1200px) {      
          top: 0.5rem;     
          right: -16.5rem;  
          transform: scale(2) 
        }
        `
    )
    const picStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <picture style={picStyles}>
            {/*Desktop images */}
            <source media="(min-width: 75rem)" type="image/webp"
                srcSet={`${DesktopWebp}, ${Desktop2xWebp} 2x`}
            />
            <source media="(min-width: 75rem)"
                srcSet={`${DesktopPng}, ${Desktop2xPng} 2x`}
            />

            {/*tablet images */}
            <source media="(min-width: 37.5rem)" type="image/webp"
                srcSet={`${TabletWebp}, ${Tablet2xWebp} 2x`}
            />
            <source media="(min-width: 37.5rem)"
                srcSet={`${TabletPng}, ${Tablet2xPng} 2x`}
            />

            {/*Mobile images */}
            <source type="image/webp"
                srcSet={`${MobileWebp}, ${Mobile2xWebp} 2x`}
            />
            <img className={imgStyles}
                srcSet={`${MobilePng}, ${Mobile2xPng} 2x`}
                src={`${MobilePng}`}
                alt=""
            />
        </picture>
    )
}

export default Hero