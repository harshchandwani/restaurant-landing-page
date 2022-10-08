/*import {React, useState} from 'react';
import { MdVideoCameraFront } from 'react-icons/md';
import {BsFillPlayFll, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  const handleVideo= () =>{
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    if(playVideo){
        vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return(
    <div className='app__video'>
      <video > 
        src={meal}
        type="video/mp4" 
        loop controls={false} 
        muted 
        ref={vidRef}

      </video>
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center'
      onClick={handleVideo}>
        {playVideo  
        ? <BsPauseFill color= "#fff" fontSize= {30}/> : <BsFillPlayFll color= "#fff" fontsize={30}/>
      }
      </div>
    </div>
  </div>
  )
  
 }

export default Intro;
*/