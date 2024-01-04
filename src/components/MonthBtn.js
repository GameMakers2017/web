const MonthBtn = (props) => {
  const sendMonthBtnIndex = () => {
    props.btnHandler(props.btnIndex);
  };

  return (
    <div
      className={`home-curriculum-month-row ${
        props.isSelected ? "activated-curriculum" : "inActivated-curriculum"
      }`}
    >
      <button onClick={sendMonthBtnIndex}>
        <span>{props.month}</span>
        <div></div>
      </button>
    </div>
  );
};

export default MonthBtn;
