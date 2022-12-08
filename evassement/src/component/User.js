import React from "react";
import PropTypes from "prop-types";
import { Button, Container, ItemContainer, Table } from "./style";

const User = ({ users, refreshHandler }) => {
  return (
    <>
      <Container>
        <h2 style={{ color: "palevioletred", textDecoration: "underline" }}>
          User Details
        </h2>

        <ItemContainer>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>

              {users?.map((user, index) => {
                const { name, email } = user;
                const { title, first, last } = name;
                return (
                  <tr key={index}>
                    <td>{`${title} ${first} ${last}`}</td>
                    <td>{email}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </ItemContainer>
        <Button primary onClick={refreshHandler}>
          Refresh
        </Button>
      </Container>
    </>
  );
};
User.propTypes = {
  users: PropTypes.array,
  refreshHandler: PropTypes.func.isRequired,
};
export default User;
