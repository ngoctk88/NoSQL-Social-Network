# NoSQL Social Network

## Description
This is an API for a social network web application where users can share thoughts, react and create a friend list. Express.js is used for routing. MongoDB is used for the database along with Mongoose ODM

## Table of Contents
- [NoSQL Social Network](#NoSQL-Social-Network)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
- [User Story](#user-story)
- [Installation and Usage](#installation-and-usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
  - [Georgia Tech Staff](#Georgia-Tech-Staff)
  - [Example Code](#example-code)
  - [Tutorials](#tutorials)
  - [Node Dependencies](#node-dependencies)
  - [Badges](#badges)

## User Story

'''
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
'''

## Installation and Usage

1. Clone this repository to your local computer.
2. Open the repo in VS Code.
3. Open the index.js file in the Integrated Terminal.
4. Type the following in the command line: ```npm i```
5. Create your own ```.env``` file with the following content:
```
MONGODB_URI = '(mongodbconnection)/mydatabase'
```
6. Replace the content between the single quotation marks ```' '``` in your MongoDB URL connection in the ```.env``` file.
7. Type the following in the command line: ```node index.js```
8. Use Insomnia to test the application functionality. Below are all routes to test:
  - ```/api/users```
    - ```GET``` all users
    - ```GET``` a single user by its ```_id```
    - ```POST``` a new user (See example data for new user)
    - ```PUT``` to update a user by its ```_id```
    - ```DELETE``` to remove a user by its ```_id```
```
// example data for new user
{
  "username": "lernantino",
  "email": "lernantino@email.com"
}
```

  - ```/api/users/:userId/friends/:friendId```
    - ```POST``` to add a new friend to a user's friend list
    - ```DELETE``` to remove a friend from a user's friend list

  - ```/api/thoughts```
    - ```GET``` to get all thoughts
    - ```GET``` to get a single thought by its ```_id```
    - ```POST``` to create a new thought (See example data for new thought)
    - ```PUT``` to update a thought by its ```_id```
    - ```DELETE``` to remove a thought by its ```_id```

```
// example data for new thought
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

  - ```/api/thoughts/:thoughtId/reactions```
    - ```POST``` to create a reaction stored in a single thought's ```reactions``` array field
    - ```DELETE``` to pull and remove a reaction by the reaction's ```reactionId``` value

## Demo

## Contributing

## License

[MIT](https://img.shields.io/badge/License-MIT-blue.svg)
This project is licensed under MIT.

## Credits

### Georgia Tech Staff
- My instructor, [Saurav Khatiwada](https://github.com/khatiwadasaurav).

### Example Code

### Tutorials

### Node Dependencies

Click links to read the documentation for each dependency:

- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)

### Badges


![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)