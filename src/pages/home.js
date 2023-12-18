import  "../css/home.css"

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
              <p><span style={{ color: "#E63F37", fontWeight: "bold" }}>프로그래머, 기획자, 아트 디자이너</span>
                가 한 팀이 되어</p>
              <p>게임 개발 프로젝트를 진행하는 동아리입니다.</p>
            </div>
          </div>
          <div className="home-main-right">
            <img
                className="home-main-right-image"
                alt="로고"
                src={process.env.PUBLIC_URL + `/assets/home/Home_Main_Objects.png`}
              ></img>
          </div>
        </div>
      </div>
      <div className="home-statistics">
        <div className="home-statistics-container">
          <div className="home-statistics-title">
            <h2>
              국내 최대 규모의 전국 게임개발 연합동아리
            </h2>
            <span>
              ( 2024년 1월 기준 )
            </span>
          </div>
          <div className="home-statistics-contents">
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">
                설립년도
              </div>
              <div className="home-statistics-item-number">
                2017년
              </div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">
                누적회원
              </div>
              <div className="home-statistics-item-number">
                250명+
              </div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">
                개발 게임
              </div>
              <div className="home-statistics-item-number">
                27개
              </div>
            </div>
            <div className="home-statistics-item">
              <div className="home-statistics-item-title">
                현재기수
              </div>
              <div className="home-statistics-item-number">
                8기
              </div>
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
                src={process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`}
                alt="이모지"
                ></img>
                <span>나만의 게임 아이디어를 실현시켜줄
                   <span>팀원을 구하고 싶다!</span>
                </span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                src={process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`}
                alt="이모지"
                ></img>
                <span>실제 앱 마켓에 내가 만든 게임을 출시해 보고 싶다!</span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                src={process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`}
                alt="이모지"
                ></img>
                <span>게임 회사에 취업해, 게임 개발자가 되고 싶다!</span>
              </div>
            </div>
            <div className="home-wish-item">
              <div className="home-wish-item-container">
                <img
                src={process.env.PUBLIC_URL + `/assets/home/Home_Wish_Emoji.png`}
                alt="이모지"
                ></img>
                <span>내가 만든 게임으로 직접 라이브 서비스를 해보고 싶다!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
