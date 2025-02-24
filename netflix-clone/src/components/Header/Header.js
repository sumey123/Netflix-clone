import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header1">
          <ul>
            <li>
              <img src={logo} alt="logo" width="100" />
            </li>
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div className="header2">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownCircleIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
