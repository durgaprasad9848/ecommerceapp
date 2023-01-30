import react from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

const Products = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="Card align-middle" >
      <Card.Title>
        <center>
          <h1>Music</h1>{" "}
        </center>
      </Card.Title>
      <Card>
        <Row md={2} xs={1} lg={3} className="g-3">
          {productsArr.map((data) => (
            <Col className="col-md-10">
              <Card style={{ width: "18rem" }}>
                <center>
                  <Card.Header><h4>{data.title}  </h4></Card.Header>
                </center>
                <Card.Img variant="top" src={data.imageUrl} />
                <Card.Body>
                  <Card>
                    <Card.Subtitle>
                      <center>
                        <h3 className="ms-2 "> {data.price} </h3>
                      </center>
                    </Card.Subtitle>
                    <Button variant="primary">Add to Cart</Button>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
export default Products;
