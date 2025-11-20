/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import { Bar } from "react-chartjs-2";
// import { chartOptions, chartExample2 } from "../../variables/charts.js";
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>

              {/* LIMIT HEIGHT */}
              <CardBody style={{ maxWidth: "250px", overflowY: "auto", padding: 0 }}>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Provinces</th>
                      <th scope="col">Buyers</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th scope="row">Gauteng</th>
                      <td>4,569</td>
                    </tr>
                    <tr>
                      <th scope="row">Limpopo</th>
                      <td>3,985</td>
                    </tr>
                    <tr>
                      <th scope="row">free state</th>
                      <td>3,513</td>
                    </tr>
                    <tr>
                      <th scope="row">Mpumalanga</th>
                      <td>2,050</td>
                    </tr>
                    <tr>
                      <th scope="row">Western cape</th>
                      <td>1,795</td>
                    </tr>
                    <tr>
                      <th scope="row">KZN</th>
                      <td>1855</td>
                    </tr>
                    <tr>
                      <th scope="row">North West</th>
                      <td>1795</td>
                    </tr>
                    <tr>
                      <th scope="row">Eastern cape</th>
                      <td>195</td>
                    </tr>
                    <tr>
                      <th scope="row">Northern cape</th>
                      <td>795</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>

          </Col>
          <Col xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Sales per category</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>

              <div className="chart">
                <Bar
                  data={{
                    labels: ["pesticides", "insecticide", "herbicides", "seeds", "fertilizers", "tool"],
                    datasets: [
                      {
                        label: "Sales",
                        data: [50, 30, 40, 60, 20, 35],
                        backgroundColor: "rgba(72, 72, 176, 0.6)",
                        borderColor: "rgba(72, 72, 176, 1)",
                        borderWidth: 2,
                        maxBarThickness: 12,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions().defaults.global,
                    scales: {
                      yAxes: [
                        {
                          ticks: { beginAtZero: true },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Index;
