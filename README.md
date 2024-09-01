# Documentation

## API Documentation

### Overview

This API allows you to manage Ambassador, Estacao, and Projeto entities. Below you'll find the available routes, their descriptions, and examples of how to interact with the API.

### Base URL

<http://your-api-url.com/api>

### Authentication

No authentication is required for these routes.

## Routes

### Ambassador Routes

#### Get All Ambassadors

- **Endpoint**: `/ambassadors`
- **Method**: `GET`
- **Description**: Retrieves a list of all ambassadors.
- **Response**:
  
  ```json
  [
    {
      "id": 1,
      "title": "Ambassador Title",
      "desc": "Description of the ambassador",
      "estacaoId": 1
    }
    // More items
  ]

#### Create a New Ambassador

- **Endpoint**: `/ambassadors`
- **Method**: `POST`
- **Description**: Creates a new ambassador.
- **Response**:
  
  ```json
    {
        "title": "New Ambassador",
        "desc": "Description of the new ambassador",
        "estacaoId": 1
    }

- Response: `201 Created`

#### Update an Ambassador

- **Endpoint**: `/ambassadors/:id`
- **Method**: `PUT`
- **Description**: Updates an existing ambassador by ID.
- **Response**:
  
  ```json
    {
        "title": "Updated Ambassador",
        "desc": "Updated description",
        "estacaoId": 2
    }

 Response: `200 OK`

