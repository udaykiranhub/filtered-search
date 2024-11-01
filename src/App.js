import React, { useState } from 'react';
import axios from 'axios';

const ProductSearch = () => {
  // State for form inputs
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [Product_Name, setProduct_Name] = useState('');
  const [products, setProducts] = useState([]); // State for search results
  const [error, setError] = useState(null); // State for error handling

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    // Create the request payload with non-empty fields
    const searchCriteria = {};
    if (category) searchCriteria.Category = category;
    if (company) searchCriteria.Company = company;
    if (Product_Name) searchCriteria.Product = Product_Name;

    try {
      const response = await axios.post('https://punsatva.onrender.com/search', searchCriteria);
      console.log("searchCriteria", searchCriteria)
      console.log("response", response)

      setProducts(response.data); // Update products with search results
      setError(null); // Reset any error
    } catch (error) {
      setError('Error retrieving products');
      setProducts([]);
    }
  };

  return (
    <div>
      <h2>Product Search</h2>
      
      {/* Search form */}
      <form onSubmit={handleSearch}>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company"
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={Product_Name}
            onChange={(e) => setProduct_Name(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {/* Display error message if there's any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display search results */}
      <div>
        <h3>Search Results</h3>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <strong>Category:</strong> {product.Category}, 
                <strong> Company:</strong> {product.Company}, 
                <strong> Product_Name:</strong> {product.Product_Name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
