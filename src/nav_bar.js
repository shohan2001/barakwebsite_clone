import Nav from "./navbar.module.css";
import Logo from "./Vector.png";
import Logo2 from "./LOGONAV.png";
import { useState } from "react";

const NavBar = () => {
    const [fg, setfg] = useState(0);
    return (
        <div className={Nav.NavBar}>
            <div className={Nav.Title}>
                {" "}
                <img src={Logo2} alt="" />
                <img src={Logo} alt="" className={Nav.Logo1} />{" "}
            </div>
            <ul className={fg === 0 ? Nav.NavLinks : Nav.NavLinks2}>
                <li>
                    {" "}
                    <a href="/">Home</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Facilities</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Gallery</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Hostel map</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Contact</a>
                </li>
            </ul>
            <div className={Nav.Login}>
                <a href="/">Login</a>
            </div>

            <div
                className={Nav.burger}
                onClick={() => {
                    if (fg == 0) {
                        setfg(1);
                    } else {
                        setfg(0);
                    }
                }}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default NavBar;
