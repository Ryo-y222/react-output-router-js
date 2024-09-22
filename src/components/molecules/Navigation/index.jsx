import { NAVIGATION_PATH } from "../../../constants/navigation";
import { NavigationLink } from "../../atoms/NavigationLink";
import styles from "./style.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <NavigationLink title="TOP" linkPath={NAVIGATION_PATH.TOP} />
        <NavigationLink title="Create" linkPath={NAVIGATION_PATH.CREATE} />
      </ul>
    </nav>
  );
};
