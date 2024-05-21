import TargetContact from "./TargetContact";
import SocialButton from "./SocialButton";
import PinterestBlackIcon from "../assets/icons/pinterest-black.png";
import PdfBlackIcon from "../assets/icons/pdf-black.png";
import BookBlack from "../assets/icons/book-black.png";
import InstagramIcon from "../assets/icons/instagram.png";
import WhatsAppIcon from "../assets/icons/whatsapp.png";
import "../styles/Footer.css";
import Credits from "./Credits";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__text">
        <h3 className="footer__text__title">¡Contactame!</h3>
        <p className="footer__text__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          saepe deleniti sapiente minima corporis doloremque recusandae ipsa
          facilis enim exercitationem?
        </p>
        <div className="footer__text__social">
          <SocialButton link={"https://youtube.com"} img={PdfBlackIcon} />
          <SocialButton
            link={"https://heyzine.com/flip-book/780568255e.html"}
            img={BookBlack}
          />
          <SocialButton link={"https://youtube.com"} img={PinterestBlackIcon} />
        </div>
      </section>
      <section className="footer__target">
        <TargetContact
          img={InstagramIcon}
          text="@milenacristabel"
          link="https://www.instagram.com/milenacristabel/"
        />
        <TargetContact
          img={WhatsAppIcon}
          text="@cristabel.avalos"
          link="https://api.whatsapp.com/send?phone=50375707425"
        />
      </section>
      <Credits />
    </footer>
  );
}

export default Footer;
