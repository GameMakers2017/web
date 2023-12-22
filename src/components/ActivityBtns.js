import ActivityBtn from "./ActivityBtn";
import { useState } from "react";

const ActivityBtns = () =>{
    
    const [activatedNum, setActivityData] = useState(false);

    const btnIndex = 0;

    const ActivityBtnHandler = (idx) => {
        console.log("idx : " + idx);
        //const newArr = Array(activityDataList.length).fill(false);
        //newArr[idx] = true;
        //setActivityData(newArr);
    };

    const activityDataList = [
        {
            id: 1,
            text: [
            "한 기수동안 게임 개발 프로젝트를 진행하기위한 팀을 결성합니다.\n한 팀에 프로그래머, 기획자, 아트 디자이너가 최소 1명씩 배정됩니다."
            ],
            img : process.env.PUBLIC_URL + `/assets/home/Home_Benefits_1.png`
        },
        {
            id: 2,
            text: "팀과의 대면 만남을 통해 게임 개발 프로젝트를 진행합니다.",
            img : process.env.PUBLIC_URL + `/assets/home/Home_Benefits_2.png`
        },
        {
            id: 3,
            text: "정기적인 발표회를 통해서 각 팀의 진행상황을 공유하고 멘토의 피드백을 받는 활동입니다.",
            img : process.env.PUBLIC_URL + `/assets/home/Home_Benefits_3.png`
        },
        {
            id: 4,
            text: "GameMakers 뿐만아니라, 타 게임 개발 동아리와의 교류를 위해 정기적인 연합 발표회를 진행합니다.",
            img : process.env.PUBLIC_URL + `/assets/home/Home_Benefits_4.png`
        },
        {
            id: 5,
            text: "게임 개발 프로젝트 외에 회원분들간의 친목을 위해 번개모임을 진행합니다.",
            img : process.env.PUBLIC_URL + `/assets/home/Home_Benefits_5.png`
        }
    ]
    
    return (
        <>
            {activityDataList.map(e => <ActivityBtn key={e.id}
                test={ActivityBtnHandler} btnIndex={e.id} />)
            }
        </>
    );
}

export default ActivityBtns;