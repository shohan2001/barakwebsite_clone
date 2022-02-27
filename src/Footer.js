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
                <div className={footCss.wrapper}></div>
                <img src={iitgLogo} alt="" className={footCss.iitgLogo} />
            </div>
        </div>
    );
};

export default Footer;
