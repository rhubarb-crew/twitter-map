# twitter-map

This project was made for the __Civic Hack Hours__ held by [Hack For LA](http://www.hackforla.org/) and [Hacker Fund](https://hacker.fund/).  Civic Hack Hours are a weekly session held in downtown Los Angeles aimed at teaching high school students how to code and how to think about civic issues.  Our goal is to empower the students to actively improve their communities through civic hacking.


## Learning Goals

* How to access [Twitter's REST API](https://dev.twitter.com/rest/public)
* How to display Twitter's JSON data as content on a webpage as well as markers on a webmap.
* How to use [Mapbox Studio](https://www.mapbox.com/studio/) to create map styles.
* How to embed a webmap into a webpage and have it use the custom styles we created.


## Frameworks/Libraries/Modules Used

* [Node](https://nodejs.org/) - because the Twitter API uses OAuth authentication, which needs to be done server-side.
* [Express](http://expressjs.com/) - because it's easier to use an established framework than come up with your own confusing mess.
* [Jade](http://jade-lang.com/) - because it's the default templating language installed by Express.
* [Mapbox-GL](https://www.mapbox.com/mapbox-gl-js/api/) - because this will build our webmap with our own custom Mapbox styles.
* _[Leaflet.js](http://leafletjs.com/)_ - technically we're using Mapbox-GL instead of Leaflet, but some of the code for Leaflet is still there (just commented out).  Leaflet pulls Mapbox tilesets and I switched to Mapbox-GL to use Mapbox styles instead.


## Accounts Needed

* [GitHub](http://github.com/)
* [Cloud9](http://c9.io/)
* [Twitter](http://twitter.com)
* [Mapbox](http://mapbox.com)


## Instructions

1. Fork and clone this repository - you can create a Cloud9 account and run this code on a virtual server!

    Create a Cloud9 account and connect your GitHub account.

    From your Cloud9 dashboard, click "Create a new workspace".

    Give the project a name and paste the SSH key and passphrase from your forked repository.

    Select the "Custom" template and create your workspace.

2. Use your Twitter account to create a Twitter app for developer access to the Twitter APIs.

    Log into your Twitter account and go to https://apps.twitter.com/

    Click the "Create New App" button.

    Give your app a Name (must be unique), Description, and Website (can be just a placeholder).  Agree to the terms and click the button to create your 
    app.

    Now that your app has been created, go to the "Keys and Access Tokens" tab.  Note that your Consumer Key and Consumer Secret already exist.

    Scroll down to the Your Access Token section and click the "Create my access token" button.  Now you will have an Access Token and an Access Token Secret.

3. Create a Mapbox account - on the Home page you will have an automatically generated default access token.

    Go to your Styles tab to view your Tilesets tab to view your tilesets.  Mapbox gives you 3 default tilesets.  Click the button on the right side to get their Map IDs.

    You can use Mapbox to style your own Tilesets, upload them to your Mapbox account, and then access them in your maps!

    To get started - Go to the Style tab and create a new style using one of Mapbox's starting templates.

    Mapbox will take you to its style editor where you can modify any part of the map styles.

4. Wherever you cloned your files to - create an env.js file in the root folder and add the following code with your own Twitter & Mapbox access tokens:

    ```javascript
    process.env['TWITTER_CONSUMER_KEY'] = "<YOUR CONSUMER KEY>";
    process.env['TWITTER_CONSUMER_SECRET'] = "<YOUR CONSUMER SECRET>";
    process.env['TWITTER_ACCESS_TOKEN_KEY'] = "<YOUR ACCESS TOKEN KEY>";
    process.env['TWITTER_ACCESS_TOKEN_SECRET'] = "<YOUR ACCESS TOKEN SECRET>";
    process.env['MAPBOX_ACCESS_TOKEN'] = "<YOUR ACCESS TOKEN>";
    process.env['MAPBOX_MAP_ID'] = "<YOUR MAP ID>";
    process.env['MAPBOX_STYLE_ID'] = "<YOUR STYLE ID>";
    ```

5. Run the npm install command in the bash console:

    ```
    $ npm install
    ```

6. Run the bin/www command to run your app:

    ```
    $ bin/www
    ```

7. Click the Preview button at the top of the screen and select Preview Running Application.
