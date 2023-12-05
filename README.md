# Rockar Tech Test

This is my little app that will optionally retrieve data by CSV or by a database connection.

## Requirements

1. nodejs
2. postgres

## Set up

### asdf for NodeJS version management

Please ensure you have [asdf](https://asdf-vm.com/) installed on your machine. 

You can then install the [nodeJS plugin](https://github.com/asdf-vm/asdf-nodejs) for asdf:


    asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git


cd into the project and install the version of Node required for this project with:


    asdf install


### Installing dependencies

To install all dependencies for the project run

    npm install


### Creating a database

It's possible to manage versions of postgres with asdf, but honestly it can be a right pain to set up, so I won't do that to you today.

Ensure you have postgres installed on your machine, using homebrew is a good option if you don't already.

    psql postgres

    CREATE DATABASE rockar_test;

    \c rockar_test

    CREATE TABLE customers (
        email VARCHAR(255),
        forename VARCHAR(255),
        surname VARCHAR(255),
        contactNumber VARCHAR(255),
        postcode VARCHAR(255)
    );

    CREATE TABLE products (
        vin VARCHAR(255),
        colour VARCHAR(255),
        make VARCHAR(255),
        model VARCHAR(255),
        price INTEGER
    );

    COPY customers(email, forename, surname, contactNumber, postcode)
    FROM '/Users/youruser/rockar-tech-test/src/data/customer.csv' #replace this to your path
    DELIMITER ','
    CSV HEADER;

    COPY products(vin, colour, make, model, price)
    FROM '/Users/youruser/rockar-tech-test/src/data/customer.csv' #replace this to your path
    DELIMITER ','
    CSV HEADER;


## Getting started

Copy the .env.example file:


    cp .env.example .env


The default env variables should be enough to get this project running, but do check them out incase you have a password set for local postgres.

To start the server, run:


    npm run dev


Once the server is up and running, navigate to http://localhost:3000/graphql, and you will be able to fetch product and customer data using these graphQl queries: 


    query {
        getCustomers {
            email
            forename
            surname
            contactNumber
            postcode
        }
        getProducts {
            vin
            colour
            make
            model
            price
        }
    }



## Testing

Tests are on this project are managed with [Jest](https://jestjs.io/).

To run tests on this project run:

    npm test


## @to-do

1. Create model and make classes
2. Write additional tests for ensure graphQL is returning the correct data for product/customer
3. fix ``npm run start``