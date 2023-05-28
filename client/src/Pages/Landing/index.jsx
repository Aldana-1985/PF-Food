import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardFilter_Landing from "../../Components/CardFilterLanding";
import CardLanding from "../../Components/CardLanding";
import { getRestorants } from "../../Redux/actions";
import { props } from "../../dataHardcodeo/constants";
import Carousel from "./Carrusel";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import Login_Register from "../../Components/Login";
import {RESTOS} from "../../dataHardcodeo/constants"
function Landing() {
  const { restorants } = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const [filterActivate, setFilterActivate] = useState(false)

  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));
  }, [dispatch, restorants.documents, restorants.length]);

const handleActivateFilter = () => {
  if(filterActivate === false ){
    setFilterActivate(true)
  }else {
    setFilterActivate(false)
  }
}

  return (
    <>
      {location.pathname === "/" && (
        <div className={styles.container}>
          <div className={styles.containerContent}>
            <div className={styles.containerTitle}>
              <h1>Bienvenido a FoodBook </h1>
            </div>
            <div className={styles.divLink}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button className={styles.button}>Explorar</button>
              </Link>
            </div>
            <div className={styles.popularCards}>
              <h3 className={styles.category}>Popular Category</h3>
            </div>
            <div className={styles.containerCards}>
              {props.map((el) => (
                  <CardLanding key={el.id}
                    className={styles.CardPopular}
                    image={el.image}
                    name={el.name}
                    onClick = {handleActivateFilter}
                  />
              ))}
            </div>
            {filterActivate && 
            <div className={styles.containerFilter}>
              <div className={styles.containerCardsFilter}>
              {RESTOS.map((el) => (
                <Link
                key={el.id}
                to={`/home/detail/${el.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <CardFilter_Landing
                  // className={styles.CardPopular}
                  image={el.image}
                  name={el.name}
                />
              </Link>
              ))}
              </div>
            </div>
          
            }
          </div>
          <div className={styles.containerImg}>
            <div className={styles.elementDesing}></div>
            <div className={styles.LoginRegister}>
              <Login_Register />
            </div>
            <div className={styles.container_carousel}>
              <Carousel />
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Landing;
