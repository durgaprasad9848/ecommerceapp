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
    <div className="Card" >
        <div>
            <center><h1>Music</h1> </center>
            </div>
        <Card> 
      <div className="row" >
        {productsArr.map((data) => (
           
            <div className="col-md-5">
          <Card style={{ width: "18rem" }}>
            <center> 
            <Card.Title>{data.title} </Card.Title>
            </center>
            <Card.Img variant="top" src={data.imageUrl} />
            <Card.Body>

              <Card>
                <Card.Title>
                  <center>
                  <h4> {data.price} </h4>
                  </center>
                </Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card>
            </Card.Body>
          </Card>
          </div>
        
        ))}
      </div>
      </Card>
    </div>
  );
};
export default Products;
