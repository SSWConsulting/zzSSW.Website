import React from 'react'
import SSWLogo from './images/SSWLogo.svg'
import { 
    logoTagLine,
    socialsBar,
    tagLine,
    topBar
} from './top-bar.module.css'

const TopBar = () => {
    return(
        <div id={topBar}>
            <div id={logoTagLine}>
                <a href="/ssw/" id="SSWLogo">
                    <img src={SSWLogo} alt="SSW - Enterprise Software Development"/> 
                </a>
                <div id={tagLine}>Enterprise Software Development</div>         
            </div>            
            <div id={socialsBar}>
                :)
            </div>
        </div>
    )
}

export default TopBar