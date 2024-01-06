import { useEffect, useRef, useState } from "react";

const LogoSlider = () => {
  return (
    <div className="logoslider">
      <div className="animation_list animation">
        <div className="logoslider-container">
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/cookapps_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/devsisters_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/ncsoft_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/neople_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/netmarble_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/nexon_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/npixel_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/pearlabyss_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/smilegate_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/supercent_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/treeplla_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/wemadeplay_logo.png`} alt="Subtitle_Star"></img>
        </div>
        <div className="logoslider-container">
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/cookapps_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/devsisters_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/ncsoft_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/neople_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/netmarble_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/nexon_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/npixel_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/pearlabyss_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/smilegate_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/supercent_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/treeplla_logo.png`} alt="Subtitle_Star"></img>
          <img className="img-box" src={process.env.PUBLIC_URL + `/assets/home/logo/wemadeplay_logo.png`} alt="Subtitle_Star"></img>
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
