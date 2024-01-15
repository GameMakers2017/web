import "../css/inquiry.css";

const Inquiry = () => {
  return (
    <>
      <section id="inquiry-main">
        <div className="inquiry-main">
          <div className="inquiry-main-container">
            <div className="inquiry-image">
              <img
                  alt="inquiry_main_image"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/home/Home_Inquiry.png`
                  }
                ></img>
            </div>
            <div className="inquiry-title">
              <h2>무엇이든 물어보세요!</h2>
              <span>질문을 남겨주시면 빠른 시간내에 답변 드리겠습니다.</span>
            </div>
            <div className="inquiry-btn">
              <button onClick={()=>window.open("https://open.kakao.com/o/siPuAU1f")}>1:1 빠른 문의하기</button>
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
    </>
  );
};

export default Inquiry;
