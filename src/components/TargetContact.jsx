import "../styles/TargetContact.css";

function TargetContact({ img, text, link }) {
  return (
    <div className="container">
      <img src={img} alt="contact" title="Contactame!" />
      <p>
        <a href={link}>{text}</a>
      </p>
    </div>
  );
}

export default TargetContact;
