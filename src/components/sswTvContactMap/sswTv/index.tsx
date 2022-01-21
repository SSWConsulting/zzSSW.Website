import React, {useState} from 'react';
import * as styles from './index.module.css';


const TvSSW = ({video}) => {
    const [videoClicked, setVideoClicked] = useState(false);
    const videoId = video?.url?.split('v=')[1] ??'';
    console.log("videoId");
    console.log(video?.url);
    return(
        < article className = "col-sm-4 hidden-xs hidden-sm" >
        <h2>tv.ssw.com</h2>
       
            <div className={styles.videoplayer}>
                {videoClicked ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/2G7z2mF7Onk`}
                        allowFullScreen
                        ></iframe>
                ):(
                    <figure onClick={()=> setVideoClicked(true)}>
                         <img src="https://i.ytimg.com/vi/2G7z2mF7Onk/maxresdefault.jpg" alt="SSW Tv" />
                         <div className={styles.play}></div>
                    </figure>
                )
                
                }
               
              

            </div>
        
    </article >

    )};





export default TvSSW;


