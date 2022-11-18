import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cb from "classnames";
export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <footer {...props}>Footer</footer>;
};
