Exercise 1
==========
We currently have a monolithic application called `main-application` it is using angular routing to load in a 
checkout page. We want to make a new checkout service which has a different view and different logic. It should be
possible to deploy the services separate from each other. In this exercise we are going to integrate the new
 service using angular templates which are ajax'ed by angular by default.

A load balancer/reverse proxy has to be configured to ensure both service run on the same port. Load balancers
can do url rewriting as well.

1. Run `npm install` in main-application/ and proxy/
2. Run `npm start` in main-application
3. Browse to the clientside checkout tab on `localhost:3000`
4. Create a server serving an angular controller and a template (tip: look at the default placeholder, use `nws` to 
make a simple web server: `npm install -g nws`)
5. Edit `proxy/index.js` to ensure both application are running on the same port. It might be needed to do url rewriting.
6. Run the proxy with `npm start` in proxy/
*NOTE* that the server will reload automatically when index.js is changed.
7. See the results on `localhost:5000`
8. (optional) update the load balancer to load in a service from a different participant.

Exercise 2
==========
We realised that we need to integrate the checkout page using server side integration. We are going to use compoxure to
do this.

1. Add a compoxure include statement on the serverside checkout page
2. Configure compoxure in `compoxure-server`
3. Make sure redis is running
4. Start compoxure by running `node index.js`
5. Add the serverside checkout page to the proxy
6. See the results on `localhost:5000`
7. (optional) update the load balancer to load in a service from a different participant.
