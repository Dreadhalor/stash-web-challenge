# Stash Code Challenge

## Software Engineer (Web)

Congratulations on applying to Stash! If you've made it this far, it means we think you're a great engineer, and we'd love to see you doing what you do best. 

At Stash, we present this code challenge to applicants before they come in to meet the team. We can't wait to see what you build!

## The challenge

Stash has decided to pivot from investing to the GIF-search-engine space, and needs your help to build out a web-app prototype for their new product.

**Create a GIF search engine using [Giphy's public API](https://developers.giphy.com/docs/).**

The app should have the following functionality:
1. The app serves a page consisting of a simple form with a text field and a button.
1. When the user enters text, use Javascript to request some GIFs from the Giphy API
1. When the API responds, populate the page with GIFs.

We've provided you with a simple wireframe to start building. If you'd like to showcase your CSS skills, feel free to design a visually appealing UI. 
![Stash GIFs wireframe image](./wireframe.png "Stash GIFs wireframe image")

## About the Giphy API

The url you hit should look like this:  
`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q={your_request_goes_here}`

For example, a request to `https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=baby+elephants` will return gifs of baby elephants.

Read more about the API [here](https://developers.giphy.com/docs/).

## Criteria: 
We're looking for a solution which follows best practices in:
 - Code quality and architecture
 - Modern JS standards (MVC, ES2017, etc)
 - Platform conventions
 - UI design
 - Robust testing
 - Page performance

**The app should install dependencies on `npm install` and start running locally on `npm start`.**

## Questions: 
**Can I use React/Vue/Ember/Babel/jQuery/LESS/SASS/etc?**

Yes! Feel free to use any tools you are comfortable with.

**The API isn't working.**

At the time of writing the API works with our API key `GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw`. 

If this changes or you're having any issues check the developers page: https://developers.giphy.com/docs/

Alternatively, feel free to use any other API. Doesn't have to be gifs, we're just looking for anything which demonstrates you can make network requests to an API.

## Submission: 
Please send your submissions back to your contact on our recruiting team. We'll get back to you as soon as possible. Good luck!
