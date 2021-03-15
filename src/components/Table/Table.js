import React from 'react';
import { useSelector } from 'react-redux';
import BTable from 'react-bootstrap/Table';
import { useTable } from 'react-table';
import columns from '../../configs/columns';

function Table() {
  // TODO: useMemo to not recalculate on every single render

  const data = useSelector((state) => state.data);

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // const thead = (
  //   <thead>
  //     <tr>
  //       {data.length !== 0
  //         ? Object.keys(data[0]).map((key) => <th>{key}</th>)
  //         : null}
  //       {/* {Object.keys(data[0]).forEach((key) => {
  //         console.log(key);
  //       })} */}
  //     </tr>
  //   </thead>
  // );
  // const tbody = (
  //   <tbody>
  //     <tr>
  //       <th>1</th>
  //       <th>2</th>
  //     </tr>
  //   </tbody>
  // );

  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}>
      <thead>
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

export default Table;
