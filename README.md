# SCAMP - Assesment
Node Js Intermediate Assesment

- This is a Node Js Intermediate Assesment test from SCAMP - Cohort - 3, it is purely created with javascript(Node js), it is a back-end application with protected routes to be used by a shopping mart.
The repository is well documented and it's files are commented on to allow easy usage by the front-end developer; This repository uses the following language/technology

- JavaScript
- Node Js
- Mongoose
- Mongodb
- Express Js

The following is achieved with this project:

- Using an ORM to interact with a simple database model
- Creating a basic routing mechanism for HTTP requests
- Authenticating a user’s access to a route
- Responding to a request in a consistent and logical manner
- Security
- Scalability
- Consistency

## Requirements

For development, you will Node.js Mongodb, Mongoose(ORM supported by Mongodb) installed in your working environement.

### Node
- #### Node installation on Windows

Just go to [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it(You can find git [here](https://git-scm.com/)).

- #### Other Operating Systems
You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

```
If the installation was successful, you should be able to run the following command.

node --version
```
    
You should get v8.11.3 or the version you downloaded, else you don't have node Js installed in your working environment.

 ```
 npm--version
 ```
You should get v8.11.3 6.1.0 or the version you downloaded

If you need to update `npm`, you can do it using `npm`! Cool right ? 

```
npm install npm - g
```

After running the following command, just open the command line again and be happy.
    
## Install Project

To clone repository run the command below;

```
git clone https://github.com/hannydevelop/SCAMP-Assesment 
```

### Install Dependencies

To install dependencies run the command below;

```
npm install
```

Navigate to the scamp folder with this command ```cd SCAMP - Assesment```.

## Running the project

Use the command below to run the project in your local server;

```
node index.js
```
download postman to be able to test the backend application[official Postman website](https://www.postman.com/downloads/)
    use this link to register a new user on postman http://localhost:3000/users/register
    use this link to login a user on postman http://localhost:3000/users/login
    use this link to view all inventory on postman http://localhost:3000/invent. This route is protected therefore you should add the token recieved during login and set as headers.
   
  - #### please note that if the user's role is not fixed to admin or salesPerson, the user has no access to this route. Also note that only user whoose role is fixed to admin can add a new inventory.
  - #### If you encounter any abnormalities while using this project, feel free to make an issue or contact me via twitter [hannydevelop](https://twitter.com/hannydevelop)

## Register a new user
![ScreenShot](/screenShots/register.JPG)

## Add Token and Header
![ScreenShot](/screenShots/addtoken.JPG)

## Login with email and password
![ScreenShot](/screenShots/login.JPG)

## Since User is admin he can access protected route
![ScreenShot](/screenShots/true.JPG)

## Alter Token to get barred from route
![ScreenShot](/screenShots/false.JPG)
