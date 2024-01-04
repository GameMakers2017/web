import { useState, useEffect } from "react";

const curriculumData = [
  {
    id: 1,
    month: 2,
    week: "1주",
    content: "8기 OT, MT",
  },
  {
    id: 1,
    month: 2,
    week: "2주",
    content: "동아리 휴무",
  },
  {
    id: 1,
    month: 3,
    week: "3주",
    content: "프로젝트 발표 및 팀 빌딩",
  },
  {
    id: 1,
    month: 3,
    week: "4주",
    content: "팀별 단합 행사",
  },
  {
    id: 1,
    month: 4,
    week: "5주",
    content: "멘토 네트워킹 데이",
  },
  {
    id: 1,
    month: 4,
    week: "6주",
    content: "프로토타입 발표회",
  },
];

const Curriculum = () => {
  const [monthCounter, setMonthCounter] = useState({
    month: 2,
  });
  const { month } = monthCounter;
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(true);

  const [leftImageSrc, setLeftImageSrc] = useState(
    "assets/home/Home_Curriculum_Left_Inactivated.png"
  );
  const [rightImageSrc, setRightImageSrc] = useState(
    "assets/home/Home_Curriculum_Right_Activated.png"
  );

  const DecreaseMonth = () => {
    setMonthCounter({
      ...monthCounter,
      month: month - 1,
    });
  };

  const IncreasMonth = () => {
    setMonthCounter({
      ...monthCounter,
      month: month + 1,
    });
  };

  useEffect(() => {
    if (month === 2) {
      /* Left버튼 비활성화 */
      setLeftDisable(true);
      setLeftImageSrc("assets/home/Home_Curriculum_Left_Inactivated.png");
    } else {
      setLeftDisable(false);
      setLeftImageSrc("assets/home/Home_Curriculum_Left_Activated.png");
    }
    if (month === 7) {
      setRightDisable(true);
      setRightImageSrc("assets/home/Home_Curriculum_Right_Inactivated.png");
    } else {
      setRightDisable(false);
      setRightImageSrc("assets/home/Home_Curriculum_Right_Activated.png");
    }
  }, [month]);

  return (
    <div className="home-curriculum">
      <div className="home-curriculum-container">
        <div className="home-curriculum-title">
          <img
            src={
              process.env.PUBLIC_URL + `/assets/home/Home_Curriculum_Logo.png`
            }
            alt="Subtitle_Star"
          ></img>
          <h2>2024년 8기 커리큘럼</h2>
          <span>
            동아리의 운영상황에 따라서 일정의 변동이 생길 수 있습니다.
          </span>
        </div>
        <div className="home-curriculum-contents">
          <button
            className={`${
              leftDisable
                ? "home-curriculum-btn-disabled"
                : "home-curriculum-btn-enabled"
            }`}
            onClick={DecreaseMonth}
            disabled={leftDisable}
          >
            <img
              src={process.env.PUBLIC_URL + leftImageSrc}
              alt="Left_Button"
            ></img>
          </button>
          <span>{month}월</span>
          <button
            className={`${
              rightDisable
                ? "home-curriculum-btn-disabled"
                : "home-curriculum-btn-enabled"
            }`}
            onClick={IncreasMonth}
            disabled={rightDisable}
          >
            <img
              src={process.env.PUBLIC_URL + rightImageSrc}
              alt="Right_Button"
            ></img>
          </button>
        </div>
        <div className="home-curriculum-table">
          <table>
            <thead>
              <tr>
                <th className="home-curriculum-table-date">기간</th>
                <th className="home-curriculum-table-content">활동내용</th>
              </tr>
            </thead>
            <thead>
              {curriculumData.map((e) => {
                if (e.month === month) {
                  return (
                    <tr>
                      <td>{e.week}</td>
                      <td>{e.content}</td>
                    </tr>
                  );
                }
              })}
              {/* <tr>
                <td>1주</td>
                <td>8기 OT, MT, 프로젝트 기획 발표</td>
              </tr>
              <tr>
                <td>2주</td>
                <td>동아리 휴무</td>
              </tr> */}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
