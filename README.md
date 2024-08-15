## evrms.next
This is a web app created to fulfill the technical test for Evermos using React and Next.js.

## Tech Stack
- React
- NextJs 14
- Zustand for state management
- Fetch API for http client
- SCSS for CSS pre processor

## Mock API Server
The API is created using My JSON Server. There is a limitation related to the total size in KB for creating the API using My JSON Server. Due to this, the API contains only one detailed product and two endpoints to show the list of products.

- https://my-json-server.typicode.com/hystolytc/evrms-mock-data/products
This URL is used to show the list of products.
- https://my-json-server.typicode.com/hystolytc/evrms-mock-data/productsbmV4dHBhZ2U9Mg==
This URL is used to simulate pagination to show the rest of the product list.
- https://my-json-server.typicode.com/hystolytc/evrms-mock-data/slug-example-detail-product
This URL is used to get the product details based on the slug.

## Features

- Product listing
- Pagination to display the product list
- Product details
- Add to cart
- All pages are responsive
- The Product List page is rendered as CSR
- The Product Details page is rendered as SSR