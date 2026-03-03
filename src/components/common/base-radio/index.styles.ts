import { Radio as AntRadio } from "antd";
import styled, { css } from "styled-components";

import { RadioSize } from ".";

const radioSizeStyle = {
  small: css`
    font-size: ${({ theme }) => theme.fontSizes.xxs};

    &.ant-radio-wrapper {
      .ant-radio-inner,
      .ant-radio-inner::after {
        width: 0.875rem;
        height: 0.875rem;
      }

      .ant-radio-inner::after {
        transform: scale(0.45);
        margin-block-start: -0.5rem;
        margin-inline-start: -0.5rem;
      }
    }
  `,

  medium: css`
    font-size: ${({ theme }) => theme.fontSizes.xs};

    &.ant-radio-wrapper {
      .ant-radio-inner,
      .ant-radio-inner::after {
        width: 1.25rem;
        height: 1.25rem;
      }

      .ant-radio-inner::after {
        transform: scale(0.4);
        margin-block-start: -0.625rem;
        margin-inline-start: -0.625rem;
      }
    }
  `,

  large: css`
    font-size: ${({ theme }) => theme.fontSizes.md};

    &.ant-radio-wrapper {
      .ant-radio-inner,
      .ant-radio-inner::after {
        width: 1.25rem;
        height: 1.25rem;
      }

      .ant-radio-inner::after {
        transform: scale(0.6);
        margin-block-start: -0.625rem;
        margin-inline-start: -0.625rem;
      }
    }
  `,
};

export const Radio = styled(AntRadio)<{ size?: RadioSize }>`
  color: ${({ theme }) => theme.textMain};
  line-height: 1.25rem;
  margin-inline-end: 0;

  &.ant-radio-wrapper {
    margin-inline-end: 0;
  }

  .ant-radio-checked .ant-radio-inner {
    background: ${({ theme }) => theme.textMain};
    border-color: ${({ theme }) => theme.textMain};
  }

  .ant-radio-inner::after {
    background-color: ${({ theme }) => theme.white};
  }

  .ant-radio-input:focus-visible + .ant-radio-inner {
    box-shadow: ${({ theme }) => theme.radioBoxShadow};
  }

  .ant-radio-disabled + span {
    color: ${({ theme }) => theme.disabled};
  }

  &.ant-radio-wrapper-disabled {
    .ant-radio {
      &,
      &.ant-radio-checked {
        .ant-radio-inner {
          background: ${({ theme }) => theme.borderCheckBox};
          border-color: ${({ theme }) => theme.border};
        }
      }
    }

    span {
      color: ${({ theme }) => theme.textTertiary};
      opacity: 0.8;
    }
  }

  ${({ size = "medium" }) => radioSizeStyle[size]}
`;

export const RadioGroup = styled(AntRadio.Group)<{ horizontal?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.paddings.xxxs};
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
`;

export const RadioButton = styled(AntRadio.Button)`
  &.ant-radio-button-wrapper:has(:focus-visible) {
    box-shadow: ${({ theme }) => theme.radioBoxShadow};
  }

  &.ant-radio-button-wrapper-disabled {
    color: ${({ theme }) => theme.disabled};
  }
`;
