import Nav from "./navbar.module.css";
import Logo from "./Vector.png";
import Logo2 from "./LOGONAV.png";

const NavBar = () => {
    return (
        <div className={Nav.NavBar}>
            <div className={Nav.Title}>
                {" "}
                <img src={Logo} alt="" />{" "}
            </div>
            <ul className={Nav.NavLinks}>
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
                {" "}
                <a href="/">Login</a>
            </div>
            <div className={Nav.burger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default NavBar;
