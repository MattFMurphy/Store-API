## Store API
Just a simple getter api using node, express and mongoDB as an experiment.  (MONGO_URI in .env needs to be set with a connection string to work properly.)

Provides one api method at {host}/api/v1/products.

### Available Query Params

#### `name={name}`: (String) Filter based off of name property.

#### `featured={boolean}`: (boolean) Filter based off of whether featured or not.

#### `sort={field}`: (String) Sort by any available field.

#### `numericFilters={expression}`: (comparator expression) Filter by a numeric expression - IE 'numericFilters=price>100'.  >, <, >=, <= are available.
