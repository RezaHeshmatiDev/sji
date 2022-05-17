import { FC } from "react";
import styles from "./Card.module.css";

type CardPropsType = {
  name: string;
  flag: string;
  capital: string;
  region: string;
};
const Card: FC<CardPropsType> = ({ name, flag, capital, region }) => {
  return (
    <div className={styles.card_wrapper}>
      <header>
        <img className={styles.card_flag} src={flag} alt={name + " flag"} />
      </header>
      <div className={styles.card_details}>
        <p>
          <strong>{`${name} `}</strong>
          <span>{capital}</span>
        </p>
        <p>
          <span className={styles.card_extra_details}>{region}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
