import { Checkbox as AntdCheckbox } from "antd";
import styled from "styled-components";

export const Checkbox = styled(AntdCheckbox)`
  width: fit-content;

  & .ant-checkbox-inner {
    border-radius: ${({ theme }) => theme.borderRadius.xxxxs};
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid ${({ theme }) => theme.borderCheckBox};
    background-color: ${({ theme }) => theme.white};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.textMain};
    border-color: ${({ theme }) => theme.textMain};
  }

  .ant-checkbox-inner::after {
    width: 6px;
    height: 10px;
    border: 2.1px solid ${({ theme }) => theme.white};
    border-top: 0;
    border-left: 0;
    inset-inline-start: 30%;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.borderBase};
    background-color: ${({ theme }) => theme.white};
  }

  &.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: ${({ theme }) => theme.disabled};
  }
`;

export const CheckboxGroup = styled(AntdCheckbox.Group)`
  .ant-form-vertical &.ant-checkbox-group {
    display: inline-block;
  }

  & .ant-checkbox-inner {
    border-radius: ${({ theme }) => theme.borderRadius.xxxs};
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid ${({ theme }) => theme.borderCheckBox};
    background-color: ${({ theme }) => theme.white};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.textMain};
    border-color: ${({ theme }) => theme.textMain};
  }

  .ant-checkbox-inner::after {
    width: 6px;
    height: 10px;
    border: 2.1px solid ${({ theme }) => theme.white};
    border-top: 0;
    border-left: 0;
  }
`;
