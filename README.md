# Link-Manager

| HTTP Method | API Endpoint       | Description               | Body                                                     |
|-------------|--------------------|---------------------------|----------------------------------------------------------|
| GET         | `/links`           | Get a list of all links.  |                                                          |
| GET         | `/links`           | Get a paginated list of all links.  |                                                          |
| GET         | `/links/<link_id>`  | Get a single link.     |                                                          |
| POST        | `/links`           | Create a new link     | `url` (required), `tags` (required), `description` (optional), `name` (required)|
| PUT         | `/links/<link_id>`  | Update a link        | `url` (required), `tags` (required), `description` (optional), `name` (required)|
| DELETE      | `/links/<link_id>`  | Delete a link         |                                                          |


**Additional Considerations:**
- **Validation and Error Handling:** Implement validation for input parameters and clear error messages.
- **Search and Filtering:** Add support for searching and filtering in the `GET /links` endpoint.
- **Versioning:** Consider versioning for future changes.
