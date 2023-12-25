import { useState } from "react";
import "../css/home.css";

import ActivityBtn from "../components/ActivityBtns";

const Home = () => {

  return (
    <>
      <div className="home-main">
        <div className="home-main-container">
          <div className="home-main-left">
            <div className="home-main-left-title">
              <p>누구나 자신만의 게임을</p>
              <p>만들 수 있습니다.</p>
            </div>
            <div className="home-main-left-subtext">
              <p>전국 게임개발 연합동아리 GameMakers는</p>
              <p>
                <span style={{ color: "#E63F37", fontWeight: "bold" }}>
                  프로그래머, 기획자, 아트 디자이너
                </span>
                가 한 팀이 되어
              </p>
              <p>게임 개발 프로젝트를 진행하는 동아리입니다.</p>
            </div>
          </div>
          <div className="home-main-right">
            <img
              className="home-main-right-image"
              alt="main_image"
              src={
                process.env.PUBLIC_URL + `/assets/home/Home_Main_Objects.png`
              }
            ></img>
          </div>
        </div>
      </div>
      <div className="home-statistics">
        <div className="home-statistics-container">
          <div className="home-statistics-title">
            <h2>국내 최대 규모의 전국 게임개발 연합동아리</h2>
            <span>( 2024년 1월 기준 )</span>
          </div>
          <div className="home-statistics-contents">
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">설립년도</div>
              <div className="home-statistics-item-number">2017년</div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">누적회원</div>
              <div className="home-statistics-item-number">250명+</div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">개발 게임</div>
              <div className="home-statistics-item-number">27개</div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">현재기수</div>
              <div className="home-statistics-item-number">8기</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wish">
        <div className="home-wish-container">
          <div className="home-wish-emoji">
            <img
              src={process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`}
              alt="이모지"
            ></img>
          </div>
          <div className="home-wish-title">
            <h2>혹시, 이런 고민들을 하고 계신가요?</h2>
          </div>
          <div className="home-wish-contents">
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Wish_Check.png`
                  }
                  alt="이모지"
                ></img>
                <span>
                  나만의 게임 아이디어를 실현시켜줄&nbsp;
                  <span>팀원을 구하고 싶다!</span>
                </span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Wish_Check.png`
                  }
                  alt="이모지"
                ></img>
                <span>
                  실제 앱 마켓에&nbsp;
                  <span>내가 만든 게임을 출시</span>해 보고 싶다!
                </span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Wish_Check.png`
                  }
                  alt="이모지"
                ></img>
                <span>
                  <span>게임 회사에 취업</span>해, 게임 개발자가 되고 싶다!
                </span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Wish_Check.png`
                  }
                  alt="이모지"
                ></img>
                <span>
                  내가 만든 게임으로 직접&nbsp;
                  <span>라이브 서비스</span>를 해보고 싶다!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-wish-baseline">
        <img
              alt="로고"
              src={
                process.env.PUBLIC_URL + `/assets/home/Home_Wish_BottomLine.png`
              }
        ></img>
      </div>
      <div className="home-benefits">
        <div className="home-benefits-container">
          <div className="home-benefits-title">
            <span>전국 게임개발 연합동아리</span>
            <h2>GameMakers에서 여러분들의 고민을 해결해 드립니다.</h2>
          </div>
          <div className="home-benefits-contents">
            <div className="home-benefits-item">
              <span>POINT 1.</span>
              <h3>프로젝트 팀 매칭</h3>
              <div className="home-benefits-item-explanation">
                기획, 아트 디자이너, 프로그래머가 한 팀이 되어
                게임을 개발할 수 있도록 팀을 매칭해 드립니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_1.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div>
            <div className="home-benefits-item">
              <span>POINT 2.</span>
              <h3>체계적인 팀 관리</h3>
              <div className="home-benefits-item-explanation">
              매주 활동 보고서를 통해, 프로젝트 상태를 점검하고 피드백 해드립니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_2.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div><div className="home-benefits-item">
              <span>POINT 3.</span>
              <h3>현업인 멘토링 시스템</h3>
              <div className="home-benefits-item-explanation">
                한 팀에 한 명의 현업 멘토가 배정되어, 팀의 방향성과 개발 노하우를 공유합니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_3.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div><div className="home-benefits-item">
              <span>POINT 4.</span>
              <h3>게임 디자인 에셋 지원</h3>
              <div className="home-benefits-item-explanation">
                게임의 퀄리티와 완성도를 위해, 유니티 에셋 디자인 에셋을 지원합니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_4.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div><div className="home-benefits-item">
              <span>POINT 5.</span>
              <h3>스터디 활동비 지원</h3>
              <div className="home-benefits-item-explanation">
                프로젝트를 통한 개발 능력 향상뿐만아니라, 추가적인 역량 강화를 위해
                스터디를 운영하고 지원합니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_5.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div><div className="home-benefits-item">
              <span>POINT 6.</span>
              <h3>활동 증명서 발급</h3>
              <div className="home-benefits-item-explanation">
                해당 기수에서 정해진 커리큘럼을 이수할 경우, GameMakers 활동 증명서를 발급해 드립니다.
              </div>
              <div className="home-benefits-item-img">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Benefits_6.png`
                  }
                  alt="benefits1"
                ></img>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-activity">
        <div className="home-activity-container">
          <div className="home-activity-title">
            <span>주요 활동</span>
            <h2>
              다양한 활동들을 통해서, 게임 개발자들과의 네트워크도 쌓고
              <br />
              게임 개발에 대한 시야도 넓혀 보세요!
            </h2>
          </div>
          <div className="home-activity-subtitle">
            <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Activity_Subtitle_Star.png`
                  }
                  alt="Subtitle_Star"
            ></img>
            <span>실제 7기에서 진행한 행사들입니다</span>
            <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Activity_Subtitle_Star.png`
                  }
                  alt="Subtitle_Star"
            ></img>
          </div>
          <div>
            <ActivityBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
