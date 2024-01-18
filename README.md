# Link-Manager

| HTTP method |   API endpoint   | Description              | Body   
|-------------|------------------|--------------------------|
| GET         | /links           | Get a list of all links. |
| GET         | /links/<link_id> | Get a single link.       |
| POST        | /links           | Create a new links       | url-required, tags-required, description-optional, name|
| PUT         | /links/<link_id> | Update a link            | url-required, tags-required, description-optional, name |
| DELETE      | /links/<link_id> | Delete a link            |