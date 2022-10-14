import "../Style/Footer.css";
import { SiFacebook, SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";


function Footer () {
    return <div className="f-container">
        <div className="social-container">
            <SiFacebook className="f-icon"></SiFacebook>
            <SiInstagram className="f-icon"></SiInstagram>
            <SiTwitter className="f-icon"></SiTwitter>
            <SiLinkedin className="f-icon"></SiLinkedin>
        </div>
        <div className="footer-cr">
            <p>© 2022. KindWork is a 501(c)(3) non-profit corporation</p>
        </div>
    </div>
}

export default Footer;