import { Link } from "react-router-dom";
import React from "react";

// hof = hall of fame ( 명예의 전당 )

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <Link className="navbar-logo" to={"/"}>
              <img
                className="navbar-logo-img"
                alt="로고"
                src={process.env.PUBLIC_URL + `/assets/home/Navbar_GM_Logo_Black.png`}
              ></img>
            </Link>
          </div>
          <div className="navbar-menu-container">
            {/* <Link className="navbar-menu" to={"/project"}>
              프로젝트
            </Link>
            <Link className="navbar-menu" to={"/review"}>
              활동후기
            </Link> */}
            {/* <Link className="navbar-menu" to={"/hof"}>
              명예의 전당
            </Link>
            <Link className="navbar-menu" to={"/recruit"}>
              모집
            </Link> */}
            <Link className="navbar-menu" to={"/inquiry"}>
              문의
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
