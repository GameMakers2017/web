import React from "react";

const ActivityBtn = (props) =>{

    const sendActivityBtnIndex = () => {
        console.log("isSelected : " + props.isSelected);
        props.btnHandler(props.btnIndex);
        
    };

    return (
        <>
            <button
                onClick={sendActivityBtnIndex}
                className={`home-activity-button ${props.isSelected ? "activated" : "inActivated"}`}
            >{props.btnText}
            </button>
        </>
    )
}

export default ActivityBtn;