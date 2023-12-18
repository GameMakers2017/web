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
              국내 최대 규모의 전국 게임개발 연합동아리dd
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
    </>
  );
};

export default Home;
