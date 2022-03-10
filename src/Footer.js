import footCss from "./footer.module.css";
import instagram from "./Instagram.png";
import facebook from "./facebook.png";
import barakLogo from "./barakLogo.png";
import Barak2 from "./Barak2.png";
import iitgLogo from "./iitgLogo.png";

const Footer = () => {
    return (
        <div className={footCss.content}>
            <div className={footCss.mainwrapper}>
                <img src={barakLogo} alt="" className={footCss.barakLogo} />
                <div className={footCss.icons}>
                    <img src={Barak2} alt="" className={footCss.Barak2} />

                    <div className={footCss.socialmedia}>
                        <a href="\">
                            {" "}
                            <img src={facebook} alt="" />
                        </a>
                        <a href="\">
                            {" "}
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
                <div className={footCss.wrapper}>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                    <div className={footCss.list}>
                        <h1>IIT GUWAHATI</h1>
                        <h2>Hostel Affairs Board</h2>
                        <h2>Academic Section</h2>
                    </div>
                </div>
                <img src={iitgLogo} alt="" className={footCss.iitgLogo} />
            </div>
            <div className={footCss.bottom}>
                <ul>
                    <li>
                        <a href="/"> Terms of Use </a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="/">Cookies </a>
                    </li>
                    <li>|</li>
                    <li>
                        {" "}
                        <a href="/">Privacy </a>
                    </li>
                    <li>|</li>
                    <li>
                        {" "}
                        <a href="/">About Us</a>
                    </li>
                    <li>|</li>
                    <li>
                        {" "}
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
