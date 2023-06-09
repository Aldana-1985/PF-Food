import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { CardDish } from "../../Components/CardDish";
import * as actions from "../../Redux/actions";
import styles from "./styles.module.css";

export default function Home() {
  const { dishes } = useSelector((state) => state);
  const [isActive, setIsActive] = useState();
  const [status, setStatus] = useState("");
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const restDataStorage = window.localStorage.getItem("UserLogVerificate");
  const restData = JSON.parse(restDataStorage);
  const restId = restData.id;

  let isRestorant = false;
  pathname === "/restorant" ? (isRestorant = true) : (isRestorant = false);

  useEffect(() => {
    dispatch(actions.getDish(restId));
  }, [dispatch, isActive, restId, status]);

  const removeFromMenu = (id) => {
    const dish = dishes.find((dish) => dish._id === id);
    dish.isActive = !dish.isActive;
    setIsActive(!isActive);
    axios
      .put(
        "https://pf-backend-production-83a4.up.railway.app/posts/" + dish._id,
        {
          isActive: isActive,
        }
      )
      .then((response) => {
        console.log("respuesta axios", response.status);
        setStatus(response.status);
        // Aquí puedes realizar cualquier acción adicional con la respuesta exitosa
      })
      .catch((error) => {
        console.error("error axios", error);
        // Aquí puedes manejar el error de la petición
      });
  };

  return (
    <>
      {isRestorant && (
        <div className={styles.container}>
          <div className={styles.cards}>
            {dishes.length ? (
              dishes.map((plate) => {
                return (
                  <CardDish
                    key={plate.id}
                    image={
                      plate.images ||
                      "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
                    }
                    title={plate.name}
                    tags={plate.tags}
                    cost={plate.cost || 0}
                    id={plate._id}
                    isActive={plate.isActive}
                    removeFromMenu={removeFromMenu}
                  />
                );
              })
            ) : (
              <p>No hay platos que mostrar...</p>
            )}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
