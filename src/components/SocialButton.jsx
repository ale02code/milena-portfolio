import "../styles/SocialButton.css";

function SocialButton({ link, img }) {
  return (
    <a href={link}>
      <button className="socialButton">
        <img src={img} alt="Social Network" />
      </button>
    </a>
  );
}

export default SocialButton;
