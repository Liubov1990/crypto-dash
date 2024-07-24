import { useWindowWidth } from "@react-hook/window-size";

function useIsMobileView() {
  const windowWidth = useWindowWidth();
  return windowWidth <= 1200;
}

export default useIsMobileView;
