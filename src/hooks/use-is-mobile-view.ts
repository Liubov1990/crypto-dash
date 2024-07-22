import { useWindowWidth } from "@react-hook/window-size";

function useIsMobileView() {
  const windowWidth = useWindowWidth();
  return windowWidth <= 1024;
}

export default useIsMobileView;
