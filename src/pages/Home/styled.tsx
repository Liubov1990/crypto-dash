import "rc-dock/dist/rc-dock.css";

import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

export const ContainerForDockLayout = styled.section`
  height: 100%;
  width: 100%;

  & .dock-layout {
    /* min-height: calc(100vh - 100px); */
    /* height: 100%; */
    margin: 0 30px;
    overflow: auto;

    @media ${device.lg} {
      margin-left: 20px;
      margin-right: 20px;
    }
    @media ${device.sm} {
      margin-left: 10px;
      margin-right: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.sharedColors.accentColor};
      border-radius: 10px;
    }

    .dock-vbox > .dock-divider {
      transform: scaleY(1);
    }

    .dock.dock-top {
      background: transparent;
    }

    .dock-divider {
      flex: 0 0 20px;
      transform: initial;
    }

    .dock-drop-indicator {
      border: solid 1px ${({ theme }) => theme.sharedColors.accentColor};
      box-shadow: inset 0 0 10px
        ${({ theme }) => theme.sharedColors.accentColor}; 
      border-radius: 20px;
      background: ${({ theme }) => theme.sharedColors.dropIndicator};
    }

    .dock-drop-layer {
      &:has(.dock-drop-square-dropping) .dock-drop-square {
        border-color: ${({ theme }) => theme.sharedColors.searchText};
      }

      .dock-drop-square {
        color: ${({ theme }) => theme.sharedColors.accentLight};
        border-color: ${({ theme }) => theme.sharedColors.searchText};
        background: ${({ theme }) => theme.sharedColors.btnIcon};
        border-radius: 4px;
        box-shadow: inset 2px 2px 2px;
        box-shadow: inset 0 0 2px;

        .dock-drop-square-box {
          border-color: ${({ theme }) => theme.sharedColors.searchText};
          border-radius: 4px;
          border-width: 2px;
          box-shadow: inset 2px 2px 2px;
        }
      }

      .dock-drop-square-dropping {
        color: ${({ theme }) => theme.sharedColors.accentLight};
        background: ${({ theme }) => theme.sharedColors.dropIndicator};
        border: ${({ theme }) => theme.sharedColors.searchText};
        border-width: 2px;
        box-shadow: 0 0 2px;
      }
    }

    .dock-panel *::-webkit-scrollbar-thumb {
      background: #261e35;
      border-radius: 10px;
    }

    .dock-panel.dock-style-shared {
      border-radius: 20px;
      border: 1px solid ${({ theme }) => theme.sharedColors.textSecondary};
      background: ${({ theme }) => theme.color.boxBackground};
      overflow: hidden;

      &:focus-within {
        border: 1px solid ${({ theme }) => theme.sharedColors.accentLight};
      }

      .dock-bar {
        background: ${({ theme }) => theme.color.boxBackground};
        border-bottom: none;
        margin-bottom: 10px;
      }

      .dock-tab {
        color: ${({ theme }) => theme.color.textMain};
        background: transparent;
        transition: color 0.3s ease-out;
        border-bottom: none;

        &-active,
        &:hover {
          color: ${({ theme }) => theme.sharedColors.accentColor};
        }

        & > div {
          padding-top: 7px;
          padding-bottom: 7px;
        }

        .dragging {
          background: transparent;
          padding-top: 7px;
          padding-bottom: 7px;
        }
      }

      .dock-panel-max-btn,
      .dock-panel-min-btn {
        margin: 2px 9px 2px 0;
        padding: 8px 8px 4px 2px;

        &:hover {
          transform: none;
          &::before {
            color: ${({ theme }) => theme.sharedColors.accentLight}; 
            border-color: ${({ theme }) => theme.sharedColors.accentLight}; 
          }
        }

        &:focus::before {
          color: ${({ theme }) => theme.sharedColors.accentLight}; 
          border-color: ${({ theme }) => theme.sharedColors.accentLight}; 
        }

        &:before {
          color: ${({ theme }) => theme.sharedColors.searchText};
          border-color: ${({ theme }) => theme.sharedColors.searchText};
        }
      }

      .dock-ink-bar.dock-ink-bar-animated {
        background: transparent;
      }
    }
  }

  &:has(.dock-mbox-show) .dock-layout {
    border-radius: 20px;
    overflow: hidden;
  }

  @-moz-document url-prefix() {
    .dock-layout {
      scrollbar-color: ${({ theme }) => theme.sharedColors.accentColor};
        transparent;
    }
  }
`;
