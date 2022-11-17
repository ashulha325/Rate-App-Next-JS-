import { PProps } from "./P.props";
import styles from "./P.module.css";
import cb from "classnames";
export const P = ({
  size = "m",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cb(styles.p, className, {
        [styles.m]: size === "m",
        [styles.s]: size === "s",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
