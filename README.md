# Grocery Neighbors - REACT20K BCH, May 2020

Grocery Neighbors is a web app built in the end of Intro to Node.js and Intro to React courses at Business College Helsinki. The app is meant as a platform where users can ask for help or offer help with doing grocery shopping. Users can put their shopping list in the system and other users will pick up the order and bring it to the ordering user's address.

## Installation

After forking, run

```bash
npm install
```

The code on master branch stores data in local json-server file, so to have that server running, you need a separate terminal to run the commands

```bash
cd neighbors-help
npm run server
```

The code on bea-dev branch connects to the backend and MongoDB database, so no need for setting up json-server.

To open the app in browser, run

```bash
cd neighbors-help
npm start
```

## Built With:

- React
- axios
- React Bootstrap
- [json-server](https://www.npmjs.com/package/json-server)

## Authors:

- [bea94k](https://github.com/bea94k)
- [makiyo-ronkko](https://github.com/makiyo-ronkko)
- [sarfojoe](https://github.com/sarfojoe)
