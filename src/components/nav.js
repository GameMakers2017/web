import { Link } from "react-router-dom";
import React from "react";

// hof = hall of fame ( 명예의 전당 )

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_Container">
          <div className="navbar_Logo_Container">
            <Link className="navbar_Logo" to={"/"}>
              <img
                className="navbar_Logo_Img"
                alt="로고"
                src={process.env.PUBLIC_URL + `/assets/GM_Logo_Black.png`}
              ></img>
            </Link>
          </div>
          <div className="navbar_Menu_Container">
            <Link className="navbar_Menu" to={"/project"}>
              프로젝트
            </Link>
            <Link className="navbar_Menu" to={"/review"}>
              활동후기
            </Link>
            <Link className="navbar_Menu" to={"/hof"}>
              명예의 전당
            </Link>
            <Link className="navbar_Menu" to={"/recruit"}>
              모집
            </Link>
            <Link className="navbar_Menu" to={"/inquiry"}>
              문의
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
