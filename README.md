# node-twitter-test

## Instructions

1. Fork and clone this repository.  You can create a Cloud9 account and run this code on a virtual server!  Fork this repository to your own GitHub account.  Create a Cloud9 account and connect your GitHub account.  From your Cloud9 dashboard, click "Create a new workspace".  Give the project a name and paste the SSH key and passphrase from your forked repository.  Select the "Custom" template and create your workspace.
2. Create an env.js file in root folder and add the following code with your own Twitter & Mapbox access tokens:

```javascript
process.env['TWITTER_CONSUMER_KEY'] = "<YOUR CONSUMER KEY>";
process.env['TWITTER_CONSUMER_SECRET'] = "<YOUR CONSUMER SECRET>";
process.env['TWITTER_ACCESS_TOKEN_KEY'] = "<YOUR ACCESS TOKEN KEY>";
process.env['TWITTER_ACCESS_TOKEN_SECRET'] = "<YOUR ACCESS TOKEN SECRET>";
process.env['MAPBOX_ACCESS_TOKEN'] = "<YOUR ACCESS TOKEN>";
process.env['MAPBOX_MAP_ID'] = "<YOUR MAP ID>";
```

3. Run the npm install command in the bash console:

```
<username>:~/workspace (master) $ npm install
```

4. Run the bin/www command to run your app:

```
<username>:~/workspace (master) $ bin/www
```

5. Click the Preview button at the top of the screen and select Preview Running Application.
