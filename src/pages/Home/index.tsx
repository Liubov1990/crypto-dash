import "./index.css";

import { CSSProperties } from "react";
import cn from "classnames";
import DockLayout from "rc-dock";
import useDockData from "../../hooks/use-dock-data";

const ROOT_STYLES: CSSProperties = {
  position: "absolute",
  left: 30,
  top: 30,
  right: 30,
  bottom: 30,
};

function Home(): React.ReactNode {
  const { layout, groups, isActive, loadTab, onLayoutChange } = useDockData();

  return (
    <div className={cn("home", { "home--static": !isActive })}>
      <DockLayout
        layout={layout}
        loadTab={loadTab}
        onLayoutChange={onLayoutChange}
        groups={groups}
        style={ROOT_STYLES}
      />
    </div>
  );
}

export default Home;
