import React, { useContext } from 'react';
import UserData from '../../utils/UserData';

const Search = () => {
  const context = useContext(UserData);

  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />

        <button className="btn my-2 my-sm-0" type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
