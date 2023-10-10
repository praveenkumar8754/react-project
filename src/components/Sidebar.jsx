import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Sidebar() {
  let tableData = [
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
  ];
  return (
    <>
      {/* Side Bar */}
      <Container>
        <Row>
          <Col md={3}>
            <div className="d-flex flex-column p-4">
              <h2 style={{ color: "blue" }}>Medico Sales</h2>
            </div>
            <div className="d-flex flex-column mb-3 mt-5">
              <Container>
                <Row>
                  <Col md={1}>
                    {" "}
                    <div className="blueLine m-2 ms-0">
                      <img
                        src="/images/search-normal.png"
                        width="5px"
                        height="25px"
                      />
                    </div>
                  </Col>
                  <Col md={10}>
                    <div className="dashboard d-flex mb-3 ms-0 p-2 gap-3">
                    <img src= "/images/Dashboard.png" />
                      <span style={{ color: "blue" }}>Dashboard</span>
                    </div>

                    <div className="labtest d-flex mb-3 p-2 gap-3 ">
                      <img src="/images/clipboard-tick.png" />
                      <span>Lab Test</span>
                    </div>

                    <div className="appointment d-flex mb-3 p-2 gap-3">
                      <img src="/images/calendar-tick.png" />
                      <span>Appointment</span>
                    </div>

                    <div className="medicineorder d-flex mb-3 p-2 gap-3">
                      <img src="/images/bag-tick-2.png" />
                      <span>Medicine Order</span>
                    </div>

                    <div className="message d-flex mb-3 p-2 gap-3">
                      <img src="/images/sms.png" />
                      <span>Message</span>
                    </div>

                    <div className="payment d-flex mb-3 p-2 gap-3">
                      <img src="/images/empty-wallet.png" />
                      <span>Payment</span>
                    </div>

                    <div className="setting d-flex mb-3 p-2 gap-3">
                      <img src="/images/setting-2.png" />
                      <span>Setting</span>
                    </div>
                  </Col>
                </Row>
              </Container>
            
            <div className="help d-flex gap-2 mt-5 ms-5">
              <img
                src="/images/Question.png"
                width="25px"
                height="25px"
              />
              <span> Help</span>
            </div>
          </div>
          </Col>

          {/* End of the Side Bar */}

          {/* Main Content */}
          <Col md={9}>
            <div className="bg-light shadow-5 text-dark">
              {/* Search Box Section */}
              <div className="d-flex flex-row justify-content-between">
                <Card border="secondary mt-5 ms-4 w-50">
                  <div className="d-flex flex-row gap-3 bg-white p-3">
                    <img src="/images/search-normal.png" />
                    <span> Search</span>
                  </div>
                </Card>

                <div className="notification mt-5 me-3">
                  <img src="/images/Notification.png" />
                </div>
              </div>

              {/* Sales Information Section */}
              <div className="d-flex flex-column mt-5 ms-4">
                <div className="h3">
                  <h3>Sales Information</h3>
                </div>

                <div className="d-flex flex-row mt-4 gap-4">
                  <Form>
                    <Form.Group className="mb-3 p-1">
                      <Form.Label>Customer</Form.Label>
                      <br />
                      <Form.Control
                        type="text"
                        placeholder="Enter Customer Name"
                      />
                    </Form.Group>
                  </Form>

                  <Form>
                    <Form.Group className="mb-3 p-1">
                      <Form.Label>Invoice Id</Form.Label>
                      <br />
                      <Form.Control
                        type="text"
                        placeholder="Enter Invoice ID"
                      />
                    </Form.Group>
                  </Form>

                  <Form>
                    <Form.Group className="mb-3 p-1">
                      <Form.Label>Start Date</Form.Label>
                      <br />
                      <Form.Control type="number" placeholder="Start Date" />
                    </Form.Group>
                  </Form>

                  <Form>
                    <Form.Group className="mb-3 p-1">
                      <Form.Label>End Date</Form.Label>
                      <br />
                      <Form.Control type="number" placeholder="End Date" />
                    </Form.Group>
                  </Form>
                </div>
              </div>

              {/* Table Section  */}

              <div className="row m-4 bg-white border-spacing-3">
                <Table>
                  <thead>
                    <tr>
                      <th className="p-3">
                        <img src="/images/minus-square.png" />
                      </th>
                      <th className="p-3">Invoice ID</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Payable Amount</th>
                      <th className="p-3">Paid Amount</th>
                      <th className="p-3">Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td className="p-3">
                            <img src="/images/minus-square.png" />
                          </td>
                          <td className="p-3"><a href='#' style={{textDecoration:'none'}}>{e.invoiceId}</a> </td>
                          <td className="p-3">{e.date}</td>
                          <td className="p-3">{e.customer}</td>
                          <td className="p-3">{e.payableAmount}</td>
                          <td className="p-3">{e.paidAmount}</td>
                          <td className="p-3">{e.due}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sidebar;