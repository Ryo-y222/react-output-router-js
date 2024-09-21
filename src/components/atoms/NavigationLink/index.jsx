import { Link } from "react-router-dom";

export const NavigationLink = ({ title, linkPath }) => {
  return (
    <li>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};
