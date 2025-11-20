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
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Products</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Nuvogon-1318c9.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Ecoguard Nuvogon 480 EC</h5>
                      <p className="text-muted mb-2">R 1,306.07</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/complete-7ec3b8.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Complete 350sc Insecticide (l7959) 1l</h5>
                      <p className="text-muted mb-2">R11,299.00</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>

                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/vifn-4611ed.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Yara Fert Krista Mag (Mag Nitrate) 25kg</h5>
                      <p className="text-muted mb-2">R 343.50</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Stedfast-Packshot-720x720-37fc83.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Wenkem Insect Stedfast SC (L6464) 1L</h5>
                      <p className="text-muted mb-2"> R 1,130.00</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/actipron-f38811.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Ecoguard Actipron Super 5l</h5>
                      <p className="text-muted mb-2">R 373.75</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/yara-vita-2bf789.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Yara Vita Coptrac 500 5lt</h5>
                      <p className="text-muted mb-2">R 1,855.67</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Terbuweed-a97e2e.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Terbuweed Duo 900WDG 10kg</h5>
                      <p className="text-muted mb-2">R 1,535.09</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Alpha-0e7e72.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Alpha-thrin 100sc Insecticide(l7262) 1l</h5>
                      <p className="text-muted mb-2">R 11,399.99</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/complete-7ec3b8.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Complete 350sc Insecticide (l7959) 1l</h5>
                      <p className="text-muted mb-2">R11,299.00</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/paraquat-a0c1fc.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Farm Ag Paraquat 200 20l</h5>
                      <p className="text-muted mb-2">R 1,294.28</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/628310-ed682f.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Henchem Turbodor 5L - 628310</h5>
                      <p className="text-muted mb-2">R 899.99</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Termite-Stop-d7e66d.jpeg")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Henchem Plaagtermite Stop(l5437) 5kg</h5>
                      <p className="text-muted mb-2">R 331.05</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/seriess-5590fe-removebg-preview-b0705a.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Intel Onkruid Series 240ec (l8913) 5 Liter</h5>
                      <p className="text-muted mb-2">R 2,364.40</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/seriess-5590fe-removebg-preview-b0705a.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Protek Springbok 360SL Herbicide (l6719) 20L</h5>
                      <p className="text-muted mb-2">R 2,553.00</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/grab-7133d7.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Aeci Grab 500 Ec 1l</h5>
                      <p className="text-muted mb-2">R 808.90</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/yara-vita-2bf789.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">YaraVita Fert Tripholate Trace EL 20kg</h5>
                      <p className="text-muted mb-2">R 4,402.88</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Vantex-897e74.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Farmag Vantex Gama Cyhalothrin 60 Sc 1l</h5>
                      <p className="text-muted mb-2">R 1,030.00</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Moer-Tu-Super-01-bf5852-removebg-preview-5122d5.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Moer-tu Super Slakpille (l9671) 20</h5>
                      <p className="text-muted mb-2">R 1,420.25</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/Calmabon-Micro-Element-Mixes-FertAgChem-Hygrotech-600x600-06d06e.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Asg Calmabon Liquid 1l</h5>
                      <p className="text-muted mb-2">R 133.01</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="product-card text-center p-3 border rounded shadow-sm">
                      <img
                        src={require("../../assets/img/prod/ARYSTA-KAPUT-100-GEL-100PC-1KG-e88a72.webp")}
                        alt="Product"
                        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <h5 className="mt-3 mb-1">Arysta Kaput 100 Gel - 100pc 1kg</h5>
                      <p className="text-muted mb-2">R 250.47</p>
                      {/* <button className="btn btn-primary btn-sm">Buy Now</button> */}
                    </div>
                  </Col>
          
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
