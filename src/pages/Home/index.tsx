import "./styles.css";

import { CSSProperties } from "react";
import DockLayout from "rc-dock";
import useDockData from "../../hooks/use-dock-data";

const ROOT_STYLES: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
};

function Home(): React.ReactNode {
  const { dockbox, groups, loadTab, onDockboxChange } = useDockData();

  return (
    <div className="home">
      <DockLayout
        key={`${groups.shared.maximizable}`}
        layout={dockbox}
        loadTab={loadTab}
        onLayoutChange={onDockboxChange}
        groups={groups}
        style={ROOT_STYLES}
      />
    </div>
  );
}

export default Home;
