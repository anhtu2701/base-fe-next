import { Pagination as AntdPagination } from "antd";
import styled, { css } from "styled-components";

export const Pagination = styled(AntdPagination)`
  ${(props) =>
    !props.disabled &&
    css`
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 20px;

      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        min-width: 2rem;
        width: 2rem;
        height: 2rem !important;
        line-height: 2.5rem !important;
        border-radius: 6px;
        font-size: ${({ theme }) => theme.fontSizes.xs};
      }

      .ant-pagination-item {
        background: transparent;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          color: ${({ theme }) => theme.textQuaternary};
          font-weight: ${({ theme }) => theme.fontWeights.medium};
        }

        &:hover a,
        &:focus-visible a {
          color: ${({ theme }) => theme.primary6};
        }
      }

      .ant-pagination-item-active {
        border: none;
        background: ${({ theme }) => theme.textMain};

        a {
          color: ${({ theme }) => theme.white};
          font-weight: ${({ theme }) => theme.fontWeights.bold};
        }
      }

      .ant-pagination-prev,
      .ant-pagination-next {
        .ant-pagination-item-link {
          border: none;
          background: transparent;
          color: ${({ theme }) => theme.textQuaternary};
          border-radius: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        &:not(.ant-pagination-disabled) .ant-pagination-item-link:hover,
        &:not(.ant-pagination-disabled)
          .ant-pagination-item-link:focus-visible {
          color: ${({ theme }) => theme.primary6};
          background: transparent;
        }
      }

      .ant-pagination-disabled {
        opacity: 0.4;
        .ant-pagination-item-link,
        .ant-pagination-item a {
          color: ${({ theme }) => theme.textQuaternary};
          opacity: 0.4;
        }

        .ant-pagination-item-link svg {
          color: ${({ theme }) => theme.textQuaternary};
          opacity: 0.4;
        }
      }

      .ant-pagination-item-ellipsis {
        color: ${({ theme }) => theme.textQuaternary};
      }

      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        pointer-events: none;
        cursor: default;

        .ant-pagination-item-link {
          pointer-events: none;
        }

        .ant-pagination-item-link-icon {
          display: none !important;
        }

        .ant-pagination-item-ellipsis {
          display: inline !important;
          color: ${({ theme }) => theme.textQuaternary};
        }
      }
    `}
`;
