import BlobBackground from "../assets/icons/blobBackground.svg";
import FaceImg from "../assets/imgs/face.jpeg";
import "../styles/Home.css";

function home() {
  return (
    <section className="home" id="home">
      <section className="home__texts">
        <div>
          <b className="home__texts__b">Ahola, soy</b>
          <h1 className="home__texts__h1">milena Chacon</h1>
          <p className="home__texts__p">
            Tengo 23 años, y es un placer mostrarles un poco de mi esencia. Como
            ilustradora gráfica, en este portafolio veremos mi desempeño y
            habilidades que me definen como diseñadora gráfica.
          </p>
        </div>

        <button className="home__texts__button">
          <a href="">Más sobre mi</a>
        </button>
      </section>
      <section className="home__blobContainer">
        <figure className="home__blobContainer__figure">
          <img
            src={BlobBackground}
            alt=""
            className="home__blobContainer__figure__blob"
          />
          <img
            src={FaceImg}
            alt="Milena Chacón"
            title="Milena Chacón"
            className="home__blobContainer__figure__photo"
          />
        </figure>
      </section>
      {/* <section>
        <SocialButton link={"https://youtube.com"} img={InstagramIcon} />
        <SocialButton link={"https://youtube.com"} img={InstagramIcon} />
        <SocialButton link={"https://youtube.com"} img={InstagramIcon} />
      </section> */}
    </section>
  );
}

export default home;
