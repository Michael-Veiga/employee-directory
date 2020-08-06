import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="Table">
      <table className="table">
        <thead>
          <Table-Header />
          <Table-Data />
        </thead>
      </table>
    </div>
  );
}

export default Table;
