import style from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <header>
      <div className={style.centerDiv}>
    <div className={style.logo}>
        <a href="">Wounder trip</a>
    </div>
    <div className={style.navMenu}>
         <a href="">About us</a>
         <a href="">Find trip</a>
         <a href="">Services</a>
         <a href="">Contact</a>
    </div>

</div>
    </header>
  );
};
