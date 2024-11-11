# Product Management Dashboard - Frontend

This repository contains the frontend code for the **Product Management Dashboard**, an interactive interface allowing users to search and filter product data based on criteria like Category, Company, Product Name, and Packing. This frontend connects to a backend API that handles data storage and retrieval (the backend code is hosted in a separate repository).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The **Product Management Dashboard** frontend provides an easy-to-use interface for users to search and filter product data stored in a MongoDB database via a Node.js/Express backend API. This application is perfect for managing and displaying products by Category, Company, Product Name, and Packing.

## Features

- **Search & Filter Options**: Search products by Category, Company, Product Name, and Packing.
- **Real-Time Filtering**: Responsive filtering to display relevant products in real-time.
- **User-Friendly Interface**: Clean and intuitive dashboard design for efficient browsing.

## Technologies Used

- **Frontend**: React.js, Axios for API communication, CSS/SASS for styling
- **Backend API**: Node.js and Express (hosted separately)
- **API Communication**: Axios for making HTTP requests to the backend

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or above)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kushal023/punsatva_frontend.git
   cd punsatva_frontend
   npm install


# Product Management Dashboard - Frontend

This repository contains the frontend code for the **Product Management Dashboard**, an interactive interface that allows users to search and filter product data based on criteria such as Category, Company, Product Name, and Packing. This frontend connects to a backend API responsible for data storage and retrieval (the backend code is hosted in a separate repository).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The **Product Management Dashboard** frontend provides a user-friendly interface to search and filter product data stored in a MongoDB database, accessed through a Node.js/Express backend API. This application is ideal for managing and displaying products by Category, Company, Product Name, and Packing.

## Features

- **Search & Filter Options**: Search products by Category, Company, Product Name, and Packing.
- **Real-Time Filtering**: Responsive filtering displays relevant products instantly.
- **User-Friendly Interface**: Clean and intuitive dashboard design for efficient browsing.

## Technologies Used

- **Frontend**: React.js, Axios for API communication, CSS/SASS for styling
- **Backend API**: Node.js and Express (hosted separately)
- **API Communication**: Axios for making HTTP requests to the backend

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or above)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/product-management-dashboard-frontend.git
   cd product-management-dashboard-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure API Endpoint:**

   In `src/services/api.js` (or the appropriate configuration file), specify the backend API URL. Replace `BACKEND_API_URL` with your backend server URL (e.g., `http://localhost:3001`).

   ```javascript
   const BASE_URL = "BACKEND_API_URL"; // Set this to your backend server's URL
   ```

4. **Start the frontend server:**

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## Usage

1. **Dashboard Interface**: Access the search and filter options on the main dashboard to find products based on Category, Company, Product Name, and Packing.
2. **Real-time Results**: The interface updates dynamically to show filtered products matching the selected criteria.

## Folder Structure

```
product-management-dashboard-frontend/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable UI components (e.g., SearchBar, ProductTable)
│   ├── pages/              # Main dashboard page
│   ├── services/           # API call setup (Axios instance)
│   ├── App.js              # Root component
│   └── index.js            # Entry point
└── README.md
```

## API Endpoints

The frontend relies on the following backend API endpoints (assuming the backend server is running separately):

1. **Search Products**

   - **Endpoint**: `POST /search`
   - **Description**: Search for products based on various fields.
   - **Request Body** (example):
     ```json
     {
       "Category": "Beverages",
       "Company": "ABC Corp",
       "Product_Name": "Green Tea"
     }
     ```

## Contributing

1. **Fork** this repository.
2. **Create** a branch for your feature (`git checkout -b feature-name`).
3. **Commit** your changes (`git commit -m 'Add feature'`).
4. **Push** to the branch (`git push origin feature-name`).
5. **Create** a pull request.

## License

This project is licensed under the MIT License.
