import styles from "./style.module.css";
import { Link } from "react-router-dom";

export const NavigationLink = ({ title, linkPath }) => {
  return (
    <li className={styles.li}>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};
