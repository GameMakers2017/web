import "../css/project.css";

const Project = () => {
  return (
    <section id="project-main">
      <div className="project-main">
        <div className="project-main-container">
          <div className="project-main-title">
            <h2>프로젝트</h2>
            <span>회원분들의 다양한 프로젝트를 구경해보세요.</span>
          </div>
          <div className="project-main-games">
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Simulator.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>조별과제 시뮬레이터</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Color.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>야! 이런 도형 색깔이</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Electroad.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>일렉트로드</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/LostLight.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>로스트 라이트</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/UnknownCity.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>언노운시티</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/LoveMadness.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>러브 매드니스</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/RoyalFreaks.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>로얄 프릭스</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Mizar.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>미자르와 알코르의 사건수첩</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/De'File.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>De'File</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Ideology.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>이데올로기</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/RBK.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>RBK</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/Testing.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>테스팅</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/GalvanicBride.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>갈바닉 브라이드</span>
                </div>
              </div>
            </div>
            <div className="proejct-main-item">
              <div className="project-main-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/project/DreamCatcher.png`
                  }
                  alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                  <span>드림캐쳐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
