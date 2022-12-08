import React from "react";
import PropTypes from "prop-types";
import { Button, Container, ItemContainer, Table } from "./style";
import { Spinner, Wrapper } from "./style";

const User = ({ users, refreshHandler, loading, error }) => {
  return (
    <>
      <Container>
        {/* <h2 style={{ color: "palevioletred", textDecoration: "underline" }}>
          User Details
        </h2> */}
        {loading ? (
          <Wrapper>
            <Spinner />
          </Wrapper>
        ) : error ? (
          <Wrapper>
            <h2>{error}</h2>
          </Wrapper>
        ) : (
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
        )}
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
