import "../css/home.css";

import ActivityBtn from "../components/ActivityBtns";
import Curriculum from "../components/Curriculum";
import LogoSlider from "../components/LogoSlider";

const Home = () => {
  return (
    <>
      <main>
        <section id="home-main">
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
                    process.env.PUBLIC_URL +
                    `/assets/home/Home_Main_Objects.png`
                  }
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section id="home-statistics">
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
        </section>
        <section id="home-wish">
          <div className="home-wish">
            <div className="home-wish-container">
              <div className="home-wish-emoji">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`
                  }
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
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Wish_Check.png`
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
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Wish_Check.png`
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
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Wish_Check.png`
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
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Wish_Check.png`
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
        </section>
        <section id="home-wish-baseline">
          <div className="home-wish-baseline">
            <img
              alt="로고"
              src={
                process.env.PUBLIC_URL + `/assets/home/Home_Wish_BottomLine.png`
              }
            ></img>
          </div>
        </section>
        <section id="home-benefits">
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
                    기획, 아트 디자이너, 프로그래머가 한 팀이 되어 게임을 개발할
                    수 있도록 팀을 매칭해 드립니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_1.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
                <div className="home-benefits-item">
                  <span>POINT 2.</span>
                  <h3>체계적인 팀 관리</h3>
                  <div className="home-benefits-item-explanation">
                    매주 활동 보고서를 통해, 프로젝트 상태를 점검하고 피드백
                    해드립니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_2.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
                <div className="home-benefits-item">
                  <span>POINT 3.</span>
                  <h3>현업인 멘토링 시스템</h3>
                  <div className="home-benefits-item-explanation">
                    한 팀에 한 명의 현업 멘토가 배정되어, 팀의 방향성과 개발
                    노하우를 공유합니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_3.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
                <div className="home-benefits-item">
                  <span>POINT 4.</span>
                  <h3>게임 디자인 에셋 지원</h3>
                  <div className="home-benefits-item-explanation">
                    게임의 퀄리티와 완성도를 위해, 유니티 에셋 디자인 에셋을
                    지원합니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_4.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
                <div className="home-benefits-item">
                  <span>POINT 5.</span>
                  <h3>스터디 활동비 지원</h3>
                  <div className="home-benefits-item-explanation">
                    프로젝트를 통한 개발 능력 향상과, 추가적인 역량 강화를 위해
                    스터디를 운영하고 지원합니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_5.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
                <div className="home-benefits-item">
                  <span>POINT 6.</span>
                  <h3>활동 증명서 발급</h3>
                  <div className="home-benefits-item-explanation">
                    해당 기수에서 정해진 커리큘럼을 이수할 경우, GameMakers 활동
                    증명서를 발급해 드립니다.
                  </div>
                  <div className="home-benefits-item-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Benefits_6.png`
                      }
                      alt="benefits1"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-activity">
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
                    process.env.PUBLIC_URL +
                    `/assets/home/Home_Activity_Subtitle_Star.png`
                  }                  
                  alt="Subtitle_Star"
                ></img>
                <span>실제 7기에서 진행한 행사들입니다</span>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/home/Home_Activity_Subtitle_Star.png`
                  }
                  alt="Subtitle_Star"
                ></img>
              </div>
              <ActivityBtn />
            </div>
          </div>
        </section>
        <section id="home-ability">
          <div className="home-ability">
            <div className="home-ability-container">
              <div className="home-ability-title">
                <span>능력치 상승</span>
                <h2>활동 수료 후, 이런 것들을 얻을 수 있어요!</h2>
              </div>
              <div className="home-ability-contents">
                <div className="home-ability-item">
                  <div className="home-ability-item-text">
                    <div className="home-ability-item-number">
                      <span>01</span>
                    </div>
                    <div className="home-ability-item-title">
                      <span>
                        게임이 개발되는 과정에 대한
                        <br />
                        전반적인 프로세스 이해
                      </span>
                    </div>
                    <div className="home-ability-item-explanation">
                      <span>
                        기획부터 출시까지 모든 과정을 직접 경험하며, 게임 개발에
                        대한 전반적인 과정을 이해할 수 있습니다.
                      </span>
                    </div>
                  </div>
                  <img
                    className="home-ability-item-image"
                    src={
                      process.env.PUBLIC_URL + `/assets/home/Home_Ability_1.png`
                    }
                    alt="Subtitle_Star"
                  ></img>
                </div>
                <div className="home-ability-item">
                  <div className="home-ability-item-text">
                    <div className="home-ability-item-number">
                      <span>02</span>
                    </div>
                    <div className="home-ability-item-title">
                      <span>
                        프로젝트 관리 역량,
                        <br />
                        문제 해결능력, 커뮤니케이션 능력
                      </span>
                    </div>
                    <div className="home-ability-item-explanation">
                      <span>
                        프로젝트를 진행하며 발생하는 여러 문제들을 팀원과
                        소통하며 해결해 나아가는 능력을 기를 수 있습니다.
                      </span>
                    </div>
                  </div>
                  <img
                    className="home-ability-item-image"
                    src={
                      process.env.PUBLIC_URL + `/assets/home/Home_Ability_2.png`
                    }
                    alt="Subtitle_Star"
                  ></img>
                </div>
                <div className="home-ability-item">
                  <div className="home-ability-item-text">
                    <div className="home-ability-item-number">
                      <span>03</span>
                    </div>
                    <div className="home-ability-item-title">
                      <span>자신만의 게임을 출시한 경험</span>
                    </div>
                    <div className="home-ability-item-explanation">
                      <span>
                        직접 개발한 게임을 앱 마켓에 출시하는 경험을 통해 유저의
                        평가를 받고 개선하는 라이브 서비스를 직접 경험해 볼 수
                        있습니다.
                      </span>
                    </div>
                  </div>
                  <img
                    className="home-ability-item-image"
                    src={
                      process.env.PUBLIC_URL + `/assets/home/Home_Ability_3.png`
                    }
                    alt="Subtitle_Star"
                  ></img>
                </div>
                <div className="home-ability-item">
                  <div className="home-ability-item-text">
                    <div className="home-ability-item-number">
                      <span>04</span>
                    </div>
                    <div className="home-ability-item-title">
                      <span>
                        게임업계의 회원분들과의
                        <br />
                        네트워킹 기회
                      </span>
                    </div>
                    <div className="home-ability-item-explanation">
                      <span>
                        3N 뿐만 아니라 게입업게 전반적으로 포진되어 있는
                        게임업계 선배들과 네트워킹을 할 수 있는 기회가 있습니다.
                      </span>
                    </div>
                  </div>
                  <img
                    className="home-ability-item-image"
                    src={
                      process.env.PUBLIC_URL + `/assets/home/Home_Ability_4.png`
                    }
                    alt="Subtitle_Star"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-games">
          <div className="home-games">
            <div className="home-games-container">
              <div className="home-games-left">
                <span>프로젝트 결과물</span>
                <h1>
                  GameMakers의
                  <br />
                  게임들이 궁금하다면?
                </h1>
                <p>
                  BIC, GIGDC 등 각종 행사에서 수상한 작품과
                  <br />
                  Google TOP 20에 선정된 게임들이 있습니다.
                </p>
                <a
                  href="https://gamemakers.oopy.io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  프로젝트 더보기
                </a>
              </div>
              <div className="home-games-right">
                <img
                  src={
                    process.env.PUBLIC_URL + `/assets/home/Home_Games_Games.png`
                  }
                  alt="Subtitle_Star"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section id="home-curriculum">
          <Curriculum />
        </section>
        <section id="home-review">
          <div className="home-review">
            <div className="home-review-container">
              <div className="home-review-title">
                <h2>OB 회원분들의 생생한 후기</h2>
              </div>
              <LogoSlider />
              <div className="home-review-contents">
                <div className="home-review-box">
                  <div className="home-review-information">
                    <img
                      className="home-review-memoji"
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Review_KangWoo.png`
                      }
                      alt="Subtitle_Star"
                    ></img>
                    <div className="home-review-profile">
                      <div className="home-review-profile-top">
                        <span>이강우</span>
                        <div className="home-review-profile-role">
                          <span className="text-bg-lightgray">3기</span>
                          <span className="text-bg-lightgreen">프로그래머</span>
                        </div>
                      </div>
                      <div className="home-review-profile-bottom">
                        <span>
                          현&#41; 엔씨소프트 / 클라이언트 프로그래머
                          <br />
                          전&#41; 위메이드플레이 / 클라이언트 프로그래머
                        </span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="home-review-divider"></div>

                  <div className="home-review-detail">
                    <div className="home-review-detail-title">
                      저에게 GameMakers란
                      <br />
                      "인생의 전환점" 이라고 말하고 싶습니다.
                    </div>
                    <div className="home-review-detail-content">
                      GameMakers를 하는 동안 팀 해체, 팀원 간의 갈등, 산으로
                      가는 프로젝트 등 우여곡절이 있엇지만 그 속에서 많은 걸
                      경험하고 배울 수 있었습니다. 그리고 이 때 얻은 경험을
                      토대로 좋은 팀원들과 Electroad라는 게임을 만들어 인디게임
                      페스티벌에도 나갈 수 있었고요. 그래서 저는 GameMakers를
                      통해 잊지 못할 추억과 경험을 얻을 수 있었고 좋은
                      시간이었다고 생각합니다.
                    </div>
                  </div>
                </div>
                <div className="home-review-box">
                  <div className="home-review-information">
                    <img
                      className="home-review-memoji"
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/home/Home_Review_Hojin.png`
                      }
                      alt="Subtitle_Star"
                    ></img>
                    <div className="home-review-profile">
                      <div className="home-review-profile-top">
                        <span>정호진</span>
                        <div className="home-review-profile-role">
                          <span className="text-bg-lightgray">5기</span>
                          <span className="text-bg-lightgreen">프로그래머</span>
                        </div>
                      </div>
                      <div className="home-review-profile-bottom">
                        <span>현&#41; 넥슨코리아 / 클라이언트 프로그래머</span>
                        <span></span>
                      </div>
                    </div>
                  </div>

                  <div className="home-review-divider"></div>

                  <div className="home-review-detail">
                    <div className="home-review-detail-title">
                      저에게 GameMakers란
                      <br />
                      "인생의 전환점" 이라고 말하고 싶습니다.
                    </div>
                    <div className="home-review-detail-content">
                      GameMakers를 하는 동안 팀 해체, 팀원 간의 갈등, 산으로
                      가는 프로젝트 등 우여곡절이 있엇지만 그 속에서 많은 걸
                      경험하고 배울 수 있었습니다. 그리고 이 때 얻은 경험을
                      토대로 좋은 팀원들과 Electroad라는 게임을 만들어 인디게임
                      페스티벌에도 나갈 수 있었고요. 그래서 저는 GameMakers를
                      통해 잊지 못할 추억과 경험을 얻을 수 있었고 좋은
                      시간이었다고 생각합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-review-button">
                <a
                  href="https://gamemakers.oopy.io"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  OB들의 활동후기 더보기
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="home-faq">
          <div className="home-faq">
            <div className="home-faq-container">
              <div className="home-faq-title">
                <h2>자주 묻는 질문</h2>
              </div>
              <div className="home-faq-contents">
                <div className="home-faq-accordion">
                  <input type="checkbox" id="answer01"></input>
                  <label htmlFor="answer01">
                    <span>Q.</span>&nbsp;&nbsp; 챌린저와 일반회원의 차이가
                    무엇인가요?<em></em>
                  </label>
                  <div>
                    <p>
                      A. 챌린저는 동아리의 운영을 담당하는 회원을 칭하며,
                      일반회원은 게임 개발을 담당하는 회원을 칭합니다.
                    </p>
                  </div>
                </div>
                <div className="home-faq-accordion">
                  <input type="checkbox" id="answer02"></input>
                  <label htmlFor="answer02">
                    <span>Q.</span>&nbsp;&nbsp; 한 기수에 몇 명의 회원을
                    모집하나요?<em></em>
                  </label>
                  <div>
                    <p>A. 보통 40~50명 정도의 회원을 선발하고 있습니다.</p>
                  </div>
                </div>
                <div className="home-faq-accordion">
                  <input type="checkbox" id="answer03"></input>
                  <label htmlFor="answer03">
                    <span>Q.</span>&nbsp;&nbsp; 정기 모집 일정이 어떻게 되나요?
                    <em></em>
                  </label>
                  <div>
                    <p>A. 매년 1월과 6월에 정기 모집을 진행하고 있습니다.</p>
                  </div>
                </div>
                <div className="home-faq-accordion">
                  <input type="checkbox" id="answer04"></input>
                  <label htmlFor="answer04">
                    <span>Q.</span>&nbsp;&nbsp; 졸업생은 지원 못하나요?<em></em>
                  </label>
                  <div>
                    <p>
                      A. GameMakers는 게임 개발에 관심이 많은 성인 누구나 지원이 가능합니다.
                    </p>
                  </div>
                </div>
                <div className="home-faq-accordion">
                  <input type="checkbox" id="answer05"></input>
                  <label htmlFor="answer05">
                    <span>Q.</span>&nbsp;&nbsp; 두 가지 이상의 직군에 지원할 수
                    있나요?<em></em>
                  </label>
                  <div>
                    <p>
                      A. 두 가지 직군에는 지원이 불가능합니다. 한 가지의 직군으로 합격하신 후,
                      팀 프로젝트 활동 시, 팀 내에서 팀원과의 상의 후 두 가지 직군의 역할을 하시는 것은 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-inquiry">
          <div className="home-inquiry">
            <div className="home-inquiry-container">
              <div className="home-inquiry-title">
                <h2>
                  <span>궁금한 것이 있으세요?</span>
                  <br />
                  신속하게 해결해 드리겠습니다.
                </h2>
              </div>
              <div className="home-inquiry-image">
                <img
                  src={process.env.PUBLIC_URL + `/assets/home/Home_Inquiry.png`}
                  alt="benefits1"
                ></img>
                <a
                  href="https://open.kakao.com/o/siPuAU1f"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  문의하러 가기
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="home-partners">
          <div className="home-partners">
            <div className="home-partners-container">
              <div className="home-partners-title">
                <h2>GameMakers와 함께하는 파트너</h2>
              </div>
              <div className="home-partners-item-box">
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Unity.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>유니티</span>
                </div>
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Asus.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>에이수스</span>
                </div>
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Gongun.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>곤군게임즈</span>
                </div>
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Rog.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>로그</span>
                </div>
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Intech.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>인텍앤컴퍼니</span>
                </div>
                <div className="home-partners-item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/home/Home_Partner_Minimap.png`
                    }
                    alt="benefits1"
                  ></img>
                  <span>미니맵</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
};

export default Home;
