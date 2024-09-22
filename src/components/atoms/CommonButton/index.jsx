/**
 * CommonButton
 *
 * @package components
 */
import styles from "./styles.module.css";

//CommonButtonボタンに渡すpropsを省略形で定義
/**
 * @param {*} label
 * @param {*} type
 * @param {*} onClick
 * @returns
 */
export const CommonButton = ({ label, type, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);
