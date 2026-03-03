import { Button as AntButton } from "antd";
import styled, { css } from "styled-components";

import { Severity } from "@/styles/theme.types";
import { colorTypeFrom } from "@/styles/theme.utils";

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  transition-duration: 0.3s;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  box-shadow: none;

  &.ant-btn-sm {
    font-size: ${({ theme }) => theme.fontSizes.md} !important;
  }

  &.ant-btn {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  &.ant-btn-lg {
    font-size: ${({ theme }) => theme.fontSizes.lg} !important;
  }

  .ant-btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.ant-btn-sm {
    gap: 0.5rem;
  }

  &.ant-btn-disabled,
  &[disabled] {
    &.ant-btn-primary {
      border: none !important;
    }
  }

  &.ant-btn-default.ant-btn-sm {
    border-radius: ${({ theme }) => theme.borderRadius.xxxs};
    color: ${({ theme }) => theme.textSecondarys};
  }

  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  ${(props) =>
    !props.danger &&
    css`
      &.ant-btn-background-ghost {
        color: ${props.theme.primary};
        border-color: ${props.theme.primary};

        &:disabled {
          background-color: ${props.theme.disabledBg};
        }
      }

      &.ant-btn-link {
        span,
        a {
          text-decoration: underline;
        }
      }

      &:focus,
      &:not(:disabled):hover {
        &.ant-btn-default,
        &.ant-btn-dashed {
          color: ${props.theme.collapseBackground};
          border-color: ${props.theme.collapseBackground};
        }
      }

      &:focus {
        &.ant-btn-link,
        &.ant-btn-background-ghost {
          color: ${props.theme.collapseBackground};
        }

        &.ant-btn-primary {
          background-color: ${props.theme.collapseBackground};
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: ${props.theme.collapseBackground};
        }
      }

      &:not(:disabled):hover {
        &.ant-btn-primary {
          background-color: ${props.theme.collapseBackground};
        }

        &.ant-btn-text,
        &.ant-btn-background-ghost {
          color: ${props.theme.collapseBackground};
          background-color: transparent;
        }

        &.ant-btn-primary,
        &.ant-btn-background-ghost {
          border-color: ${props.theme.collapseBackground};
        }
      }

      ${props.$severity &&
      css`
        background-color: rgba(
          ${props.theme.rgb[colorTypeFrom(props.$severity)]},
          0.2
        );
        border-color: ${props.theme[colorTypeFrom(props.$severity)]};
        color: ${props.theme[colorTypeFrom(props.$severity)]};

        &.ant-btn-default {
          &:focus,
          &:not(:disabled):hover {
            background-color: ${props.theme.background};
            border-color: rgba(
              ${props.theme.rgb[colorTypeFrom(props.$severity)]},
              0.9
            );
            color: rgba(
              ${props.theme.rgb[colorTypeFrom(props.$severity)]},
              0.9
            );
          }
        }
      `}
    `}
`;
