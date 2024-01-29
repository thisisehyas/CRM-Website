import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import "../styles/badge.css";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const ProductsCols = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchAllProducts = () => {
    const apiUrl = `http://127.0.0.1:8000/machine/`;

    console.log("Fetching all products...");

    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Response from the API:", response);

        // Filter products based on the category ID
        const filteredProducts = response.data.results.filter(
          (product) => product.category === props.categoryId
        );

        setProducts(filteredProducts);
        setLoading(false);

        // Since we fetched all products, there's no need to check for next
        setHasMoreData(false);
      })
      .catch((error) => {
        console.error("Error fetching all products:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log(
      `Fetching initial set of products for category ${props.categoryId}...`
    );
    fetchAllProducts();
  }, [props.categoryId]); // Re-fetch when category ID changes

  const handleScroll = () => {
    if (
      hasMoreData &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
    ) {
      console.log(
        `Reached the bottom of the page. Fetching more products for category ${props.categoryId}...`
      );
      setLoading(true);
      fetchAllProducts(); // You may adjust this function if server-side pagination is needed
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("Cleanup: Removing scroll event listener");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products, hasMoreData, props.categoryId]);

  return (
    <>
      <Container className="text-center">
        <Badge className="mx-auto text-center myBadge">{props.badgeName}</Badge>
      </Container>
      <Container>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 mb-5 mt-5">
              <Card
                style={{
                  backgroundColor: "#D9D9D9",
                  border: "none",
                  width: "60%",
                  height: "140%",
                  margin: "auto",
                }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "100%" }}
                >
                  <Card.Img
                    className="cardImage"
                    variant="top"
                    src={product.picture}
                    alt={product.title}
                  />
                </div>
              </Card>

              {props.containName ? (
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  {product.title}
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        {loading && (
          <div className="text-center mt-5">
            <Spinner animation="grow" variant="success" size="lg" />
            <p className="mt-2">Loading...</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductsCols;
