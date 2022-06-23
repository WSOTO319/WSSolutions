import React from "react";
import { Link } from "react-router-dom";

interface Properties {
  //using interface Properties to give type to the props in CardItem
  path: string;

  src: string;
  text: string;
}

function CardItem(props: Properties) {
  //in the parenthesis this is how you use the Properties interface from above

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap">
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
//data category explanation at 1:08:00
