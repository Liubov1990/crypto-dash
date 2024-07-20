import "./styles.css";

import { CSSProperties } from "react";
import cn from "classnames";
import DockLayout from "rc-dock";
import useDockData from "../../hooks/use-dock-data";

const ROOT_STYLES: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 23,
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
