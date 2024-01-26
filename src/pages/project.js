import "../css/project.css";
import GameList from "../components/GameList";

const gameDataList = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + `/assets/home/project/Simulator.png`,
    title: "조별과제 시뮬레이터"
  },{
    id: 2,
    img: process.env.PUBLIC_URL + `/assets/home/project/Electroad.png`,
    title: "일렉트로드"
  },{
    id: 3,
    img: process.env.PUBLIC_URL + `/assets/home/project/MonkeySwing.png`,
    title: "몽키스윙"
  },{
    id: 4,
    img: process.env.PUBLIC_URL + `/assets/home/project/CodeName.png`,
    title: "코드네임"
  },{
    id: 5,
    img: process.env.PUBLIC_URL + `/assets/home/project/TT.png`,
    title: "TT"
  },{
    id: 6,
    img: process.env.PUBLIC_URL + `/assets/home/project/AngelParadise.png`,
    title: "천사의 낙원"
  },{
    id: 7,
    img: process.env.PUBLIC_URL + `/assets/home/project/Flytodream.png`,
    title: "Fly to dream"
  },{
    id: 8,
    img: process.env.PUBLIC_URL + `/assets/home/project/OfficeWorkerRunning.png`,
    title: "오피스 워커 러닝"
  },{
    id: 9,
    img: process.env.PUBLIC_URL + `/assets/home/project/MonkeyIsland.png`,
    title: "몽키아일랜드"
  },{
    id: 10,
    img: process.env.PUBLIC_URL + `/assets/home/project/Bubble.png`,
    title: "버블러쉬"
  },{
    id: 11,
    img: process.env.PUBLIC_URL + `/assets/home/project/Liquid.png`,
    title: "액체진입"
  },{
    id: 12,
    img: process.env.PUBLIC_URL + `/assets/home/project/Cosmos.png`,
    title: "코스모스"
  },{
    id: 13,
    img: process.env.PUBLIC_URL + `/assets/home/project/DreamingPet.png`,
    title: "Dreaming Pet"
  },{
    id: 14,
    img: process.env.PUBLIC_URL + `/assets/home/project/CookiePang.png`,
    title: "쿠키팡"
  },{
    id: 15,
    img: process.env.PUBLIC_URL + `/assets/home/project/Strike.png`,
    title: "스트라이크"
  },{
    id: 16,
    img: process.env.PUBLIC_URL + `/assets/home/project/Ideology.png`,
    title: "나선 이데올로기"
  },{
    id: 17,
    img: process.env.PUBLIC_URL + `/assets/home/project/De'File.png`,
    title: "De'File"
  },{
    id: 18,
    img: process.env.PUBLIC_URL + `/assets/home/project/Mizar.png`,
    title: "미자르와 알코르의 사건수첩"
  },{
    id: 19,
    img: process.env.PUBLIC_URL + `/assets/home/project/RBK.png`,
    title: "RBK"
  },{
    id: 20,
    img: process.env.PUBLIC_URL + `/assets/home/project/Testing.png`,
    title: "Testing"
  },{
    id: 21,
    img: process.env.PUBLIC_URL + `/assets/home/project/GalvanicBride.png`,
    title: "갈바닉 브라이드"
  },{
    id: 22,
    img: process.env.PUBLIC_URL + `/assets/home/project/DreamCatcher.png`,
    title: "드림캐쳐"
  },{
    id: 23,
    img: process.env.PUBLIC_URL + `/assets/home/project/RoyalFreaks.png`,
    title: "로얄 프릭스"
  },{
    id: 24,
    img: process.env.PUBLIC_URL + `/assets/home/project/UnknownCity.png`,
    title: "언노운시티"
  },{
    id: 25,
    img: process.env.PUBLIC_URL + `/assets/home/project/LostLight.png`,
    title: "Lost Light"
  },{
    id: 26,
    img: process.env.PUBLIC_URL + `/assets/home/project/LoveMadness.png`,
    title: "LoveMadness"
  },{
    id: 27,
    img: process.env.PUBLIC_URL + `/assets/home/project/Color.png`,
    title: "야! 이런 도형 색깔이"
  }
  
]

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
            {gameDataList.map((e) => (
              <GameList
                key={e.id}
                img={e.img}
                title={e.title}
              ></GameList>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
