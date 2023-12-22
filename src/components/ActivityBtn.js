import React from "react";

const ActivityBtn = (props) =>{

    console.log(props.btnIndex);
    const sendActivityBtnIndex = () => {
        console.log("sendActivity");
        props.test(props.btnIndex);
        
    };

    return (
        <>
            <button onClick={sendActivityBtnIndex}>테스트 버튼입니다.</button>
        </>
    )
}

export default ActivityBtn;