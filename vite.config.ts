import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/crypto-dash/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("hookform/resolvers")) {
            return "@hookform";
          }
          if (id.includes("react-hook/window-size")) {
            return "@react-hook";
          }
          if (id.includes("classnames")) {
            return "@classnames";
          }
          if (id.includes("react")) {
            return "@react";
          }
          if (id.includes("react-redux")) {
            return "@react-redux";
          }
          if (id.includes("react-dom")) {
            return "@react-dom";
          }
          if (id.includes("react-hook-form")) {
            return "@react-hook-form";
          }
          if (id.includes("d3-format")) {
            return "@d3-format";
          }
          if (id.includes("moment")) {
            return "@moment";
          }
          if (id.includes("rc-dock")) {
            return "@rc-dock";
          }
          if (id.includes("firebase")) {
            return "@firebase";
          }
          if (id.includes("react-router-dom")) {
            return "@react-router-dom";
          }
          if (id.includes("use-resize-observer")) {
            return "@use-resize-observer";
          }
          if (id.includes("victory")) {
            return "@victory";
          }
          if (id.includes("yup")) {
            return "@yup";
          }
        },
      },
    },
  },
  plugins: [react()],
});
