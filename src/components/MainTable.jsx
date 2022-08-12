import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

const MainTable = () => {
  return (
    <Container>
      <Row className="text-center">
        <h4 className="text-uppercase">complete blood count</h4>
      </Row>
      <Row>
        <Col className="bg-none " xs="12">
          <Table borderless size="sm" className="m-5">
            <thead>
              <tr className="text-uppercase text-underline">
                <th>
                  <u>Test</u>
                </th>
                <th>
                  <u>result</u>
                </th>
                <th>
                  <u>units</u>
                </th>
                <th>
                  <u>normal values</u>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Haemoglobin</td>
                <td>15</td>
                <td>g%</td>
                <td>
                  Male- 14-16 g%
                  <br /> Female- 12-14 g%
                </td>
              </tr>
              <tr>
                <td>RBC Count</td>
                <td>5</td>
                <td>million/cu.mm.</td>
                <td>4.0-6.0 million</td>
              </tr>
              <tr>
                <td>PCV</td>
                <td>40</td>
                <td>%</td>
                <td>35-40 %</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={4}>RBC INDICES</th>
              </tr>
              <tr>
                <td>MCV</td>
                <td>80.00</td>
                <td>fl</td>
                <td>80 - 99 fl</td>
              </tr>
              <tr>
                <td>MCH</td>
                <td>40.00</td>
                <td>pg</td>
                <td>28 - 32 pg</td>
              </tr>
              <tr>
                <td>MCV</td>
                <td>80.00</td>
                <td>fl</td>
                <td>80 - 99 fl</td>
              </tr>
              <tr>
                <td>MCH</td>
                <td>40.00</td>
                <td>pg</td>
                <td>28 - 32 pg</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th colSpan={4}>RBC INDICES</th>
              </tr>
              <tr>
                <td>MCV</td>
                <td>80.00</td>
                <td>fl</td>
                <td>80 - 99 fl</td>
              </tr>
              <tr>
                <td>MCH</td>
                <td>40.00</td>
                <td>pg</td>
                <td>28 - 32 pg</td>
              </tr>
              <tr>
                <td>MCV</td>
                <td>80.00</td>
                <td>fl</td>
                <td>80 - 99 fl</td>
              </tr>
              <tr>
                <td>MCH</td>
                <td>40.00</td>
                <td>pg</td>
                <td>28 - 32 pg</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MainTable;
