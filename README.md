Exercise 1
We currently have a monolithic application called `main-application` it is using angular routing to load in a checkout page. We want to make a new checkout service which has a different view and differet logic. It should be possible to deploy the services separate from each other. In this exercise we are going to integrate the new service using angular templates which are ajax'ed by angular by default.

A load balancer/reverse proxy has to be configured to ensure both service run on the same port. Load balancers can do url rewriting as well.

1. Run `npm intall` in main-application and proxy
2. Run `gulp serve` in main-application
3. Browser to the clientside checkout tab
4. Create a server serving an angular controller and a template (tip: look at the default placeholder, use `nws` to make a simple web server)
5. Edit `proxy/index.js` to ensure both application are running on the same port. It might be needed to do url rewriting.
6. (optional) update the load balancer to load in a service from a different participant.
