# Introduction
This repository contains two apps - one containing the API (stored in the `server` directory), and one containing the SPA (stored in the `client` directory).

You will need to run `npm install` in both folders. The `server` app will require you to have mongodb installed on your machine.

# Starting the application(s)
1) Once dependencies have been installed for both projects, start mongodb by running `mongod` in a terminal.
2) CD into the `server` directory and run `node server`. This should start the app on port 3050.
3) CD into the `client` directory and run `npm start`. This should start the app on an available port.

# Using the app
This is an administration panel, and as such, should only be available to authorised administrators. You'll first need to `sign up` to create an administrator account.

Once you have an account, you'll be prompted to log in. Authorization is done using a JWT token, which is valid for one hour.

You should now be able to add, view and delete jokes.

Note: There's an endpoint for update, but you said 4 hours so I ran out of time to add this functionality to the UI.
