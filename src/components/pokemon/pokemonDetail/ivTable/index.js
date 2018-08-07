import React from 'react';
import { TableWrapper, Table } from './styles';

export const IvTable = props => {
  const { data, title } = props;

  return (
    <React.Fragment>
      {data && data.length ? (
        <TableWrapper>
          {title ? <h2>{title}</h2> : null}
          <Table>
            <thead>
              <tr>{data.map((item, i) => <th key={`item-th-` + i}>{i === 0 ? 1 : i * 5}</th>)}</tr>
            </thead>
            <tbody>
              <tr>{data.map((item, i) => <td key={`item-` + i}>{item}</td>)}</tr>
            </tbody>
          </Table>
        </TableWrapper>
      ) : null}
    </React.Fragment>
  );
};
