import Styled from "styled-components";

export const TableWrapper = Styled.div`
  display: block;
  position: relative;
  border-bottom: 2px solid #EEEEEE;
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 15px;

  .table-wrapper {
    overflow: scroll;
  }
`;

export const Table = Styled.table`
  color: #333;
  background: white;
  border: 1px solid #CCCCCC;
  font-size: 14px;
  border-collapse: collapse;
  width: 100%;

  thead th {
    background: #EEEEEE;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #CCCCCC;
    text-align: center;
  }

  th {
   color: #4d6472;
  }

  td {
    color: #a6b0b6;
  }
`;
