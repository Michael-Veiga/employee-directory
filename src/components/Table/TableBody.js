import React, { useContext } from 'react';
import UserData from '../../utils/UserData';

const TableHeader = () => {
  const context = useContext(UserData);
  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined &&
      context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(
          ({ login, name, picture, phone, email }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={'Profile'}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  {email}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default TableHeader;
