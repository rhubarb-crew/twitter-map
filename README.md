# node-twitter-test

## Instructions

1. Fork and clone this repository.  You can create a Cloud9 account and run this code on a virtual server!

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
