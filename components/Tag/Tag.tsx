import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cb from "classnames";

export const Tag = ({
  size = "m",
  children,
  className,
  color = "ghost",
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cb(styles.tag, className, {
        [styles.m]: size === "m",
        [styles.s]: size === "s",
        [styles.ghost]: color === "ghost",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
