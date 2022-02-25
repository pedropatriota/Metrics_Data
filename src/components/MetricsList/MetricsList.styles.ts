import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  table {
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;

    thead tr {
      background: #706ee1;
      color: #fff;
      font-size: 14px;
    }

    th,
    td {
      padding: 15px;
      width: fit-content;
      display: table-cell;
      vertical-align: inherit;
      border-top: 1px solid #ccc;
      text-align: left;
    }

    tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    Tbody {
      display: block;
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 400px;

      tr {
        cursor: pointer;
      }

      &::-webkit-scrollbar {
        background: #fff;
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background: #444;
        border-radius: 8px;
      }

      &::-webkit-scrollbar-button {
        height: 12px;
      }

      td {
        background: #fff;
      }
    }
  }
`;

export const Content = styled.tr`
  padding: 20px 10px;
  border: 5px solid #fff;

  td {
    background-color: #ddd !important;
  }
`;
