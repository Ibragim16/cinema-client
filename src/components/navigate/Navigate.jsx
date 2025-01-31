import React from "react";
import Poster from "./Poster";
import styles from "./Navigate.module.css";
import Sessions from "./Sessions";
import News from "./News";
import Contacts from "./Contacts";
import Today from "./dateNavigation/Today";
import Tomorrow from "./dateNavigation/Tomorrow";
import { Link, Route, Routes } from "react-router-dom";
import DateNav from "./dateNavigation/DateNav";

const Navigate = () => {
  
  return (
    
    <div className={styles.navigate}>
  
  <div className={styles.wrapNavigate}>
    <div className={styles.navigateWrap}>
          {" "}
          <Poster />
          <Sessions />
          <News />
          <Contacts />
        </div>
   
  
        <div className={styles.singWrap}>
          
          <Link className={styles.singUp} to="/signup">Регистрация</Link>
          <Link to="/signin">вход</Link>
        </div>
  </div>
        
  
             {/* <SingIn />
        <SingUp />  ss*/}
  
        <div className={styles.navigateFromDates}>
          <div className={styles.navigateFromDatesWrap}>
        <Routes>
            <Route path ="/" element={<DateNav/>} />
    </Routes>
          </div>
        </div>
      </div>
    );
};

export default Navigate;
