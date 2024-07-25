// import "./styles.css";

import { CSSProperties, ReactNode } from "react";
import DockLayout from "rc-dock";
import useDockData from "../../hooks/use-dock-data";
import * as S from "./styled";

const ROOT_STYLES: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 20,
};

function Home(): ReactNode {
  const { dockbox, groups, loadTab, onDockboxChange } = useDockData();

  return (
    <S.ContainerForDockLayout className="dockLayoutContainer">
      <DockLayout
        key={`${groups.shared.maximizable}`}
        layout={dockbox}
        loadTab={loadTab}
        onLayoutChange={onDockboxChange}
        groups={groups}
        style={ROOT_STYLES}
      />
    </S.ContainerForDockLayout>
  );
}

export default Home;
