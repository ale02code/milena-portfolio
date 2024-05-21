import BlobBackground from "../assets/icons/blobBackground.svg";
import FaceImg from "../assets/imgs/face.jpeg";
import "../styles/Home.css";

function home() {
  return (
    <section className="home">
      <section className="home__texts">
        <div>
          <b className="home__texts__b">Bienvenido, soy</b>
          <h1 className="home__texts__h1">milena Chacon</h1>
          <p className="home__texts__p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nulla, incidunt nemo consequatur ab labore accusantium deserunt
            aperiam? Libero lestiae tenetur.
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
