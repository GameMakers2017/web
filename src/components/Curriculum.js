import { useState, useEffect } from "react";

const curriculumData = [
  {
    id: 1,
    month: 2,
    week: "02.17",
    content: "8기 OT, MT",
  },
  {
    id: 2,
    month: 2,
    week: "02.24",
    content: "동아리 휴무",
  },
  {
    id: 3,
    month: 3,
    week: "03.02",
    content: "프로젝트 발표 및 팀 빌딩",
  },
  {
    id: 4,
    month: 3,
    week: "03.09",
    content: "팀별 단합 행사",
  },
  {
    id: 5,
    month: 3,
    week: "03.16",
    content: "멘토 네트워킹 데이",
  },
  {
    id: 6,
    month: 3,
    week: "03.23",
    content: "프로토타입 발표회",
  },
  {
    id: 7,
    month: 3,
    week: "03.30",
    content: "프로젝트 간담회",
  },
  {
    id: 8,
    month: 4,
    week: "04.06",
    content: "보드게임 단합 행사",
  },
  {
    id: 9,
    month: 4,
    week: "04.13",
    content: "알파버전 발표회",
  },
  {
    id: 10,
    month: 4,
    week: "04.20",
    content: "동아리 휴무",
  },
  {
    id: 11,
    month: 4,
    week: "04.27",
    content: "동아리 휴무",
  },
  {
    id: 12,
    month: 5,
    week: "05.04",
    content: "프로젝트 간담회",
  },
  {
    id: 13,
    month: 5,
    week: "05.11",
    content: "OB, YB 네트워킹 MT",
  },
  {
    id: 14,
    month: 5,
    week: "05.18",
    content: "베타 버전 발표회",
  },
  {
    id: 15,
    month: 5,
    week: "05.25",
    content: "프로젝트 간담회",
  },
  {
    id: 16,
    month: 6,
    week: "06.01",
    content: "게임잼",
  },
  {
    id: 17,
    month: 6,
    week: "06.08",
    content: "동아리 휴무",
  },
  {
    id: 18,
    month: 6,
    week: "06.15",
    content: "동아리 휴무",
  },
  {
    id: 19,
    month: 6,
    week: "06.22",
    content: "소프트런칭 발표회",
  },
  {
    id: 20,
    month: 6,
    week: "06.29",
    content: "프로젝트 간담회",
  },
  {
    id: 21,
    month: 7,
    week: "07.06",
    content: "중간 출시 발표회",
  },
  {
    id: 22,
    month: 7,
    week: "07.13",
    content: "E-Sports 대회",
  },
  {
    id: 23,
    month: 7,
    week: "07.20",
    content: "최종 발표회",
  },
  {
    id: 24,
    month: 7,
    week: "07.27",
    content: "8기 수료식",
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
                <th className="home-curriculum-table-date">일자</th>
                <th className="home-curriculum-table-content">활동내용</th>
              </tr>
            </thead>
            <thead>
              {curriculumData.map((e) => {
                if (e.month === month) {
                  return (
                    <tr key={e.id}>
                      <td>{e.week}</td>
                      <td>{e.content}</td>
                    </tr>
                  );
                }
                else {
                  return (null)
                }
              })}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
