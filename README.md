# Playfinder Test

Written by David Roberts

Tested in NodeJS v12.16.3 & NPM v6.14.4


# Installation & running commands

To run application locally:

`$ npm install && npm start`

Navigate to http://localhost:4200

To test:

`$ npm test`


# Notes on further work:

## Caching search results

* This could be implemented through a `localStorage` solution with NGRX Effects

## Testing

* I have unit tested the most complex elements of the application
* Components could be snapshot tested in isolation from the main application component tree
* End to end test could be written to cover the user interactions with the application

## Form validation

* The search form at the top of the page could validate the input before submitting the search request

