# Rockar Tech Test

## Reqirements

1. nodejs
2. postgres

## Set up

### asdf for NodeJS version management

Please ensure you have [asdf](https://asdf-vm.com/) installed on your machine. 

You can then install the [nodeJS plugin](https://github.com/asdf-vm/asdf-nodejs) for asdf:

``asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git``

cd into the project and install the version of Node required for this project with:

``asdf install``

You might have to do ```asdf install nodejs lts-hydrogen``` but who knows ¯\_(ツ)_/¯
I should probably check that before handing this over

### Installing dependencies

To install all dependencies for the project run

``npm install``

### Creating a database

It's possible to manage versions of postgres with asdf, but honestly it can be a right pain to set up, so I won't do that to you today.

Ensure you have postgres installed on your machine, using homebrew is a good option if you don't already.

``psql postgres``

``
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
``

## Getting started

``cp .env.example .env``

## Testing

Tests are on this project are managed with [Jest](https://jestjs.io/).

To run tests on this project run:

``npm test``