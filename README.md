README Documentation
API Documentation
Overview

This API allows you to manage Ambassador, Estacao, and Projeto entities. Below you'll find the available routes, their descriptions, and examples of how to interact with the API.
Base URL

arduino

http://your-api-url.com/api

Authentication

No authentication is required for these routes.
Routes
Ambassador Routes
Get All Ambassadors

    Endpoint: /ambassadors

    Method: GET

    Description: Retrieves a list of all ambassadors.

    Response:

    json

    [
      {
        "id": 1,
        "title": "Ambassador Title",
        "desc": "Description of the ambassador",
        "estacaoId": 1
      },
      ...
    ]

Create a New Ambassador

    Endpoint: /ambassadors

    Method: POST

    Description: Creates a new ambassador.

    Request Body:

    json

    {
      "title": "New Ambassador",
      "desc": "Description of the new ambassador",
      "estacaoId": 1
    }

    Response: 201 Created

Update an Ambassador

    Endpoint: /ambassadors/:id

    Method: PUT

    Description: Updates an existing ambassador by ID.

    Request Body:

    json

    {
      "title": "Updated Ambassador",
      "desc": "Updated description",
      "estacaoId": 2
    }

    Response: 200 OK

Delete an Ambassador

    Endpoint: /ambassadors/:id
    Method: DELETE
    Description: Deletes an ambassador by ID.
    Response: 204 No Content

Estacao Routes
Get All Estacoes

    Endpoint: /estacoes

    Method: GET

    Description: Retrieves a list of all estacoes.

    Response:

    json

    [
      {
        "id": 1,
        "name": "Estacao Name",
        "desc": "Description of the estacao",
        "city": "City Name"
      },
      ...
    ]

Create a New Estacao

    Endpoint: /estacoes

    Method: POST

    Description: Creates a new estacao.

    Request Body:

    json

    {
      "name": "New Estacao",
      "desc": "Description of the new estacao",
      "city": "City Name"
    }

    Response: 201 Created

Update an Estacao

    Endpoint: /estacoes/:id

    Method: PUT

    Description: Updates an existing estacao by ID.

    Request Body:

    json

    {
      "name": "Updated Estacao",
      "desc": "Updated description",
      "city": "Updated City"
    }

    Response: 200 OK

Delete an Estacao

    Endpoint: /estacoes/:id
    Method: DELETE
    Description: Deletes an estacao by ID.
    Response: 204 No Content

Projeto Routes
Get All Projetos

    Endpoint: /projetos

    Method: GET

    Description: Retrieves a list of all projetos.

    Response:

    json

    [
      {
        "id": 1,
        "title": "Projeto Title",
        "desc": "Description of the projeto",
        "estacaoId": 1
      },
      ...
    ]

Create a New Projeto

    Endpoint: /projetos

    Method: POST

    Description: Creates a new projeto.

    Request Body:

    json

    {
      "title": "New Projeto",
      "desc": "Description of the new projeto",
      "estacaoId": 1
    }

    Response: 201 Created

Update a Projeto

    Endpoint: /projetos/:id

    Method: PUT

    Description: Updates an existing projeto by ID.

    Request Body:

    json

    {
      "title": "Updated Projeto",
      "desc": "Updated description",
      "estacaoId": 2
    }

    Response: 200 OK

Delete a Projeto

    Endpoint: /projetos/:id
    Method: DELETE
    Description: Deletes a projeto by ID.
    Response: 204 No Content

Error Handling

    400 Bad Request: The request was invalid or cannot be otherwise served.
    404 Not Found: The requested resource could not be found.
    500 Internal Server Error: The server encountered an unexpected condition.