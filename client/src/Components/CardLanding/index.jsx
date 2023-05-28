import styles from "./styles.module.css";

export default function CardLanding({id ,image, name, onClick}) {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
        <div className={styles.imgContainer}>
          <img src={image} alt = {name} />
        </div>
        <h3>{name}</h3>
    </div>
  );
}
