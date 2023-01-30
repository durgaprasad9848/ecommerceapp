import React from "react";
 
import { Button, Col, Container, Row, Table, Form } from "react-bootstrap";

const SummaryPage = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
 
    <section className="h-50 h-custom">
      <Container className="py-5 h-50">
        <Row className="justify-content-center align-items-center h-50">
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th scope="col" className="h1">
                    Shopping Bag
                  </th>

                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>

              {cartElements.map((data) => (
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={data.imageUrl}
                          fluid
                          className="rounded-3"
                          style={{ width: "120px" }}
                          alt="Book"
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2">{data.title}</p>
                        </div>
                      </div>
                    </th>

                    <td className="align-middle">
                      <div class="d-flex flex-row align-items-center">
                        <Button className="px-2" color="link">
                          {"-"}
                        </Button>
                        <Form>
                          <input
                            min={0}
                            type="number"
                            size="sm"
                            style={{ width: "50px" }}
                            defaultValue={data.quantity}
                          />
                        </Form>

                        <Button className="px-2" color="link">
                          {"+"}
                        </Button>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: "500" }}>
                        {data.price}
                      </p>
                    </td>

                    <td className="align-middle">
                      <Button>Remove</Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>

          <Button>Close</Button>
        </Row>
      </Container>
    </section>
 
  );
};

export default SummaryPage;
