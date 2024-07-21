import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { LayoutData, TabBase } from "rc-dock";
import { useWindowWidth } from "@react-hook/window-size";
import { useAppSelector } from "./use-store";
import { DOCKBOX_DESKTOP, DOCKBOX_MOBILE } from "../constants/dockbox";
import { getDockboxContent } from "../helpers/getDockboxContent";
import { setSerializedDockbox } from "../redux/slices/configSlice";

function useDockData() {
  const windowWidth = useWindowWidth();
  const isMobileView = windowWidth <= 1024;
  const initialDockbox = (
    isMobileView ? DOCKBOX_MOBILE : DOCKBOX_DESKTOP
  ) as LayoutData;

  const dispatch = useDispatch();
  const serializedDockbox = useAppSelector(
    (state) => state.config.serializedDockbox
  );
  const dockboxStore = JSON.parse(String(serializedDockbox));
  const [dockbox, setDockbox] = useState<LayoutData>(
    dockboxStore || initialDockbox
  );

  const tabsContent = getDockboxContent(!isMobileView);
  const groups = useMemo(
    () => ({
      shared: {
        floatable: false,
        maximizable: true,
        disableDock: isMobileView,
      },
    }),
    [isMobileView]
  );

  const loadTab = useCallback(
    ({ id }: TabBase) => tabsContent[id as keyof typeof tabsContent],
    [tabsContent]
  );

  const onDockboxChange = useCallback((newLayout: LayoutData) => {
    setDockbox(newLayout);
    dispatch(setSerializedDockbox(JSON.stringify(newLayout)));
  }, []);

  useEffect(() => {
    if (isMobileView) {
      setDockbox(DOCKBOX_MOBILE as LayoutData);
    } else {
      const predefinedDockbox = dockboxStore || DOCKBOX_DESKTOP;
      setDockbox(predefinedDockbox);
      dispatch(setSerializedDockbox(JSON.stringify(predefinedDockbox)));
    }
  }, [isMobileView]);

  useEffect(() => {
    if (!serializedDockbox) {
      setDockbox(initialDockbox);
    }
  }, [serializedDockbox]);

  return {
    dockbox,
    groups,
    loadTab,
    onDockboxChange,
  };
}

export default useDockData;
