import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, } from "react-router-dom";
import CardLanding from "../../Components/CardLanding";
import { getRestorants} from "../../Redux/actions";
import { props } from "../../dataHardcodeo/constants";
import Carousel from "./Carrusel";
import { Outlet } from 'react-router-dom';
import styles from "./styles.module.css";
import { useLocation } from 'react-router-dom';
import Login_Register from '../../Components/Login';
function Landing() {
  const { restorants } = useSelector(state => state);
  const dispatch = useDispatch();

const location = useLocation()




  useEffect(() => {
    if (!restorants.documents) dispatch(getRestorants({}));

  }, [dispatch, restorants.documents, restorants.length]);
  

  return (
    <>
 {
      location.pathname === "/"  &&

      <div className={styles.container}>
      <div className={styles.containerContent}>
        <div className={styles.containerTitle}>
          <h1>Bienvenido a FoodBook </h1>
        </div>
        <div className={styles.divLink}>
          
          <Link to="/home"   style={{ textDecoration: "none" }}>
            <button className={styles.button}>Explorar</button>
          </Link>
        </div>
        <div className={styles.popularCards}>
          <h3 className={styles.category}>Popular Category</h3>
        </div>
        
          <div className={styles.containerCards}>
            {props.map((el) => (
              <Link key={el.id} to ="/home" style = {{ textDecoration: "none" , color:"black"}}>
               <CardLanding className={styles.CardPopular}  image={el.image} name={el.name} />
              </Link>
              
            ))}
          </div>
        
      </div>
      <div className={styles.containerImg}>
        <div className={styles.elementDesing}></div>
          <div className={styles.LoginRegister}>
            <Login_Register />
          </div>
        <div className={styles.container_carousel}>
          <Carousel/>
        </div>           
        
      </div>
    </div>

    }
    <Outlet/>
    </>
  );
}

export default Landing;