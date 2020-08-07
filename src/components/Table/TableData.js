import React, { useContext } from 'react';
import TableHeader from './TableBody';
import UserData from '../../utils/UserData';

const TableData = () => {
  const context = useContext(UserData);
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-dark table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <TableHeader />
      </table>
    </div>
  );
};

export default TableData;
