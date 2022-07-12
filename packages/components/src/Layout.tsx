import { FunctionComponent, PropsWithChildren } from "react";
import { DEFAULT_COLOR } from "@workspace/shared/constants/client";

interface Props {
  color?: "red" | "blue";
}

const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  color = DEFAULT_COLOR,
}) => {
  return (
    <div id="layout" style={{ color }}>
      {children}
    </div>
  );
};

export default Layout;
