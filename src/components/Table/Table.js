import React from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { INVALID_CELL } from '../../configs/constants';
import BTable from 'react-bootstrap/Table';
import columns from '../../configs/columns';
import validator from '../../utils/table-cell-validator';

function Table() {
  const data = useSelector((state) => state.data);

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <BTable bordered hover {...getTableProps()}>
      <thead className="thead-dark">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const { id: header } = cell.column;
                const { value } = cell;
                let isValid = validator(value, header, cell.row.original);
                const cellProps = { ...cell.getCellProps() };
                if (!isValid) {
                  if (cellProps.hasOwnProperty('className')) {
                    cellProps.className = `${cellProps.className} ${INVALID_CELL}`;
                  } else {
                    cellProps.className = INVALID_CELL;
                  }
                }
                return <td {...cellProps}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

export default Table;
