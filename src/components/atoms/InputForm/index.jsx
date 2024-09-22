import styles from "./style.module.css";
/**
 * @param {*} props
 * @returns
 * @constructor
 */
export const InputForm = ({
  disabled = false,
  value,
  placeholder,
  onChange,
  onKeyDown,
}) => (
  <input
    disabled={disabled}
    className={styles.input}
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
