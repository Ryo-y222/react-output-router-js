import { NAVIGATION_PATH } from "../../../constants/navigation";
import { NavigationLink } from "../../atoms/NavigationLink";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavigationLink
          title="TOP"
          linkPath={NAVIGATION_PATH.TOP}
        ></NavigationLink>
        <NavigationLink
          title="Create"
          linkPath={NAVIGATION_PATH.CREATE}
        ></NavigationLink>
      </ul>
    </nav>
  );
};
