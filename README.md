# Crypto Portfolio
This is a simple web page application, which allows the user to create a
portfolio for the crypotcurrencies they are invested in. As well, helping them
to keep track on all the times they bought in to the coin, thus the user could
keep a better eye when applying dollar cost averaging to a coin. If the user
wants save the data on there computer, they will be able to by exporting
the portfolio into a excel file, as well being able to import any changes
made on excel file to the webpage.

![Crypto Portfolio](https://i.imgur.com/dAK4aTT.png)

## Github Links
[Client Repo](https://github.com/gandreottola/crypto-portfolio-client)
[Server Repo](https://github.com/gandreottola/crypto-portfolio-server)

## Deployed Sites
[Webpage](https://gandreottola.github.io/crypto-portfolio-client/)
[Heroku](https://crypto-portfolio-server.herokuapp.com/)

## Technologies Used
  * React (Frontend Framework)
  * CSS
  * Boostrap
  * JAVASCRIPT(ES6, JSX) -> axios(API)
  * Mongoose
  * MongoDB
  * Express
  * Node.js
  * Heroku
  * Git

Used curl scripts to test out API in terminal before testing API on browser
to ensure the CRUD requests were working properly.

Used CRUD requests to have basic functions for storing data in API.

CRUD:
Create
Read
Update
Destroy

## Development Process

  Day 1
      - Drew out Wireframe and ERD
      - Made Frontend and Backend repo's
      - Installed and setup react, express, heroku, MongoDB
      - Worked on getting Backend working

  Day 2
    - Worked on creating record on Frontend
    - Worked on Indexing records on Frontend
    - Tested create and index

  Day 3
    - Worked on Updating record on Frontend
    - Worked on deleting record on Frontend
    - Tested update and delete

  Day 4
    - Completed all CRUD actions
    - Final testing CRUD on test and production
    - Worked on README
    - Worked on exporting data to excel file
    - Worked on importing data from excel to webpage

Created the backend with Express powering database MongoDB and Mongoose, while
using Node.js for scripting.
- Made one to many relationship between user and record
- Made RESTful routes for GET, PATCH, POST, and DELETE requests.
- Tested CRUD requests using curl scripts.

Created the Fronted with React using JSX and ES6 scripting.
- Tested connection to backend API with axios.
- Styled webpage with bootstrap.

Used Version Control git to push to Github and heroku, also to merge,
and branch on terminal.

Heroku was used to create and deploy a backend URL, also staying connected
to MongoDB database.

## User Stories
As a user, I want to sign in.
As a user, I want to see message for successful sign in.
As a user, I want to see message for failed sign in.

As a user, I want to sign out.
As a user, I want to see message for successful sign out.
As a user, I want to see message for failed sign out.

As a user, I want to change password.
As a user, I want to see message for successful change password.
As a user, I want to see message for failed change pasword.

As a user, I want to sign up.
As a user, I want to see message for successful sign up.
As a user, I want to see message for failed sign up.

As a user, I want to add crypto to portfolio.
As a user, I want to see message for successful adding.
As a user, I want to see message for failed adding.

As a user, I want to update crypto on portfolio.
As a user, I want to see message for successful upate.
As a user, I want to see message for failed update.

As a user, I want to remove crypto from portfolio.
As a user, I want to see message for successful delete.
As a user, I want to see message for failed delete.

As a user, I want to see all my cryptos, when signed in.
As a user, I want to see message for successful show.
As a user, I want to see message for failed show.

As a user, I want don't want to see other users cryptos.
As a user, I want form parameters to be crypto name, buy price,
buy date, and amount bought.
As a user, I want to export portfolio to excel.
As a user, I want to import excel file to webpage portfolio.

## React Setup And Installation
1. [Download](../../archive/master.zip) this template.
2. Unzip and rename the template directory (`unzip ~/Downloads/react-auth-template-master.zip`).
3. Move into the new project and `git init`.
4. Empty [`README.md`](README.md) and fill with your own content.
5. Replace `react-auth-template` in `package.json` with your
   projects name.
6. Replace the `"homepage"` field in `package.json` with your (public) Github
   account name and repository name.
7. Install dependencies with `npm install`.
8. `git add` and `git commit` your changes.
9. Run the development server with `npm start`.

  ### Deployment

    Before deploying, you first need to make sure the `homepage` key in your
    `package.json` is pointing to the correct value. It should be the url of your
    deployed application.

    To deploy you should first make sure you are on the `master` branch with a
    clean working directory, then you can run `npm run deploy` and wait to see if
    it runs successfully.

## Frontend Wireframe
![Wireframe](https://i.imgur.com/qzhNYZP.jpg?1)

## Express Setup And Installation
1.  [Download](../../archive/master.zip) this template.
2.  Move the .zip file to your `wdi/projects/` directory and Unzip it (creating a folder) -- **NOTE:** if the folder was already unzipped, use the `mv` command line to move it to the `wdi/projects/` directory.
3.  Rename the directory from express-api-template -> your-app-name.
4.  Empty [`README.md`](README.md) and fill with your own content.
5.  Move into the new project and `git init`.
6.  Replace all instances of `'express-api-template'` with your app name.
7.  Install dependencies with `npm install`.
8.  Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
9.  Ensure the API is functioning properly by running `npm run server`.
10.  Once everything is working, make an initial commit.
11.  Follow the steps in [express-api-deployment-guide](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Crypto
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/cryptos`             | `cryptos#Create`  |
| GET    | `/cryptos`             | `cryptos#Index`   |
| GET    |  `/cryptos/:id`        | `cryptos#Show`    |
| PATCH  | `/cryptos/:id`         | `cryptoss#Update` |
| DELETE | `/cryptos/:id`         | `cryptoss#Destroy`|

## Backend ERD
![Entity Relationship Diagram (ERD)](https://i.imgur.com/EAtTaHp.jpg?1)

## Future Iterations
 - Add real-time crypto charts for each cryptocurrency
 - Add button feature to add more data to each already created crypto.
 - Dollar-cost averaging helper guide
