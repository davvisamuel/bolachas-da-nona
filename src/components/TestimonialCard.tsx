import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

interface props {
  profileImg: string;
  testimony: string;
  rating: number;
  name: string;
}

function TestimonialCard({ profileImg, testimony, rating, name }: props) {
  return (
    <div className="carousel-card">
      <img src={profileImg} alt="Imagem perfil cliente" />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      <span className="rating">
        {[...new Array(5)].map((_, i) =>
          rating > i ? (
            <img src={Star} alt="ícone estrela" width={22} height={20} />
          ) : (
            <img
              src={StarOuter}
              alt="ícone estrela sem fundo"
              width={20}
              height={22}
            />
          ),
        )}
      </span>
      <span className="names">
        <p>{name}</p>
      </span>
    </div>
  );
}

export default TestimonialCard;
