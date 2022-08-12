import React from "react";
import { Container, Row,Col, Table } from "reactstrap";

const UserIdentity = () => {
  return (
    <Container>
      <Row>
        <Col className="bg-none " xs="6">
          <Table borderless size="sm" className="m-5">
            <thead>
              <tr>
                <th>Patient Name</th>
                <td>Sounak Das</td>
                {/* <th>Username</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Lab No.</th>
                <td>123</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th>Reff. By Doctor</th>
                <td>Dr. R.N Kumar</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <th>Sample Lab:</th>
                <td>Lab A</td>
                {/* <td>@twitter</td> */}
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="bg-none " xs="6">
          <Table borderless size="sm" className="m-5">
            <thead>
              <tr>
                <th>Phone</th>
                <td>9988415654</td>
                {/* <th>Username</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Gender</th>
                <td>Male</td>
                {/* <td>@mdo</td> */}
              </tr>
              <tr>
                <th>Sample Date</th>
                <td>22/08/2022</td>
                {/* <td>@fat</td> */}
              </tr>
              <tr>
                <th>Report Date</th>
                <td>12/09/2022</td>
                {/* <td>@twitter</td> */}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserIdentity;
