Padlock Client 
=============

### Prerequisites 

The application depends on **Padlock API** in order to run. See the 
[link](https://github.com/gvassallo/padlock) to install and run the API.  

### Running the app

#### Development mode 

  1. `npm install` to install the dependencies
  2. `webpack app.js` to build the application 
  3. `npm start` to start the server 

#### Production mode

  1. `npm install` to install the dependencies
  2. `NODE_ENV='production' webpack --config=webpack-production.config.js` to build 
      the application 
  3. `NODE_ENV='production' npm start` to start the server 

Enjoy! ;) 

