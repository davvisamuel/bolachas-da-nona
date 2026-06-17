interface props {
  img: string;
  alt: string;
  title: string;
  text: string;
}

function Card({ img, alt, title, text }: props) {
  return (
    <div className="card">
      <span>
        <img src={img} alt={alt} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <hr />
      </div>
    </div>
  );
}

export default Card;
