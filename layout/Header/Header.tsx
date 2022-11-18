import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cb from "classnames";
export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <>
      <header {...props}>Header</header>
    </>
  );
};
