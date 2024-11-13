import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Container, Form, Button ,Spinner} from 'react-bootstrap';
import axios from 'axios';
import Helmet from "react-helmet"
import "./products.css"


const ProductSearch = () => {

const [products, setProducts] = useState([]);
const [error, setError] = useState(null);
const [searchQuery, setSearchQuery] = useState("");
const [categoryFilter, setCategoryFilter] = useState("");

 const [companyFilter, setCompanyFilter] = useState("");

 const [message,setMessage]=useState('')

 const [loading,setLoading]=useState(false);


 useEffect(() => {
const fetchProducts = async () => {
 try {
 //setting data 
 const response = await axios.get('https://dummyjson.com/products');
     setProducts(response.data.products); 
      console.log("data is:",response.data.products)
     
} catch (error) {
        setError('Error fetching products: ' + error.message);
        console.log("Error +",error)
  }
    };

    fetchProducts();
  }, []);


function BuyNow(key){
    setLoading(true); // Start loading spinner
  
setTimeout(() => {
 //async from database
alert(key+ "  product is purchased   ");
   
    }, 2000);
    setLoading(false);
    setLoading(false); 
  }

  const handleSearch = (product) => {
    const query = searchQuery.toLowerCase();
    console.log("query is:",query)
    return (
        //any one
      (product.title && product.title.toLowerCase().includes(query)) ||

      (product.category && product.category.toLowerCase().includes(query)) ||

      (product.brand && product.brand.toLowerCase().includes(query)) 
 
    );
  };

const filteredProducts = products.filter(product => {

const matchesSearch = handleSearch(product);

const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
const matchesCompany = companyFilter ? product.brand === companyFilter : true;
//returngs
console.log("matche caterory:",matchesCategory);
return matchesSearch && matchesCategory && matchesCompany;
  });

  return (
    <Container className='cont'>
        {/* Meta descriopton to my component */}
          <Helmet>
        <title>Product Search | Shop Your Favorite Items</title>
        <meta name="description" content="Browse and purchase from a wide selection of products across different categories and brands." />
        <meta name="keywords" content="products, shopping, buy now, ecommerce, brands, categories, electronics, beauty" />
        <link rel="canonical" href="https://www.localhost.com" />
      </Helmet>

      <h2 className="my-4" >Products Search</h2>

    
      {error && <div className="alert alert-danger">{error}</div>}
      
      {/* Search and Filter Inputs */}
      <Form>
        <Row>
        <Col md={4}>
     <Form.Control type="text"  placeholder="Search by name, category, brand..." 
 value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='field'
            />
          </Col>
          <Col md={4}>
            <Form.Control 
              as="select" 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
                  className='field'
            >
              <option value="">Select Category</option>
              <option value="beauty">Beauty</option>
 
              <option value="furniture">Furniture</option>
              <option value="fragrances">Fragrances</option>
              {/* Add more categories here */}
            </Form.Control>
          </Col>
          <Col md={4}>
            <Form.Control 
              as="select" 
              value={companyFilter} 
              onChange={(e) => setCompanyFilter(e.target.value)}
                  className='field'
            >
              <option value="">Select Brand</option>
              <option value="Essence">Essence</option>
          
              <option value="Gucci"> Gucci</option>
   
              {/* Add more brands here */}
            </Form.Control>
          </Col>
        </Row>
      </Form>
      
 <Row className="my-4">
 {filteredProducts.length > 0 ? (

filteredProducts.map((item, key) => (
    <Col key={key} xs={12} md={3} className="mb-4">
<Card className='card'>
    <Card.Img variant="top" src={item.thumbnail} alt={item.title} />
 <Card.Body>
         <Card.Title>{item.title}</Card.Title>
     <Card.Text>{item.description}</Card.Text>
    <Card.Text><strong>Price: ${item.price}</strong></Card.Text>
        <Card.Text><strong>Category: </strong>{item.category}</Card.Text>
        <Card.Text><strong>Rating: </strong>{item.rating}</Card.Text>
            <Card.Text><strong>Brand: </strong>{item.brand}</Card.Text>
            <Card.Text><strong>Stock: </strong>{item.stock}</Card.Text>
            <Button variant="info" onClick={() => BuyNow(key)} >
  {loading==true ? (
<p>loading.......</p>
  ) : (
    'Buy Now'
  )}
</Button>

                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
    <h1>No products found</h1>
        )}




</Row>
    </Container>
  );
};

export default ProductSearch;
