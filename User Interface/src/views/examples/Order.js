/*!
=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim
=========================================================
*/

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Table,
  Col,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Order = () => {
  return (
    <>
      <Header /> {/* background banner same as other pages */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0 bg-transparent">
                <h3 className="mb-0">Orders Purchased</h3>
              </CardHeader>
              <CardBody>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  hover
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#001</td>
                      <td>John Smith</td>
                      <td>Ecoguard Nuvogon 480 EC</td>
                      <td>2</td>
                      <td>R 2,612.14</td>
                      <td>
                        <span className="text-success font-weight-bold">
                          Delivered
                        </span>
                      </td>
                      <td>2025-11-15</td>
                    </tr>
                    <tr>
                      <td>#002</td>
                      <td>Mary Jones</td>
                      <td>Yara Vita Coptrac 500</td>
                      <td>1</td>
                      <td>R 1,855.67</td>
                      <td>
                        <span className="text-warning font-weight-bold">
                          Pending
                        </span>
                      </td>
                      <td>2025-11-16</td>
                    </tr>
                    <tr>
                      <td>#003</td>
                      <td>Michael Brown</td>
                      <td>Farm Ag Paraquat 200</td>
                      <td>5</td>
                      <td>R 6,471.40</td>
                      <td>
                        <span className="text-danger font-weight-bold">
                          Cancelled
                        </span>
                      </td>
                      <td>2025-11-18</td>
                    </tr>
                    <tr>
                      <td>#004</td>
                      <td>Sarah Williams</td>
                      <td>Alpha-thrin 100sc</td>
                      <td>3</td>
                      <td>R 34,199.97</td>
                      <td>
                        <span className="text-info font-weight-bold">
                          Processing
                        </span>
                      </td>
                      <td>2025-11-19</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
