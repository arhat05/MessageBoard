# MessageBoard
## Video Demo
https://github.com/arhat05/MessageBoard/assets/105883673/1fcfbee3-e82d-42bb-880c-58c7160aa6f7

## Overview
The Message Board App is a simple web application designed for users to post messages on a shared board. It features a front-end built with React and a back-end powered by Node.js and Express. Messages are stored in a MongoDB database, allowing users on different computers to interact with the same message board.

## Components and Interactions
### Front-End (React)
#### App.js
- Manages the overall structure of the application.
- Utilizes state hooks to manage the messages.
- Provides a message form and message list for user interaction.
#### MessageForm.js
- Presents a form for users to type and submit messages.
- Performs client-side validation for non-empty and short messages.
- Triggers a POST request to the server to add messages.
- Invokes the updateMessages prop to refresh messages after posting.
#### MessageList.js
- Retrieves and displays messages from the server.
- Fetches messages in descending order based on timestamp.
- Renders each message along with its timestamp.

### Back-End (Node.js with Express)
#### conn.js and config.env
- Connection string to MongoDB and other env vars
#### server.js
- Sets up backend
#### msg.js
- Defines API endpoints for retrieving and adding messages.

## Requirements
#### 1. Users can type and post messages:
- The MessageForm component allows users to input and submit messages.
- Messages are validated for non-empty and short content.
#### 2. Messages are non-empty and at most 128 characters long:
- Client-side validation in MessageForm enforces non-empty and short messages.
#### 3. Messages are displayed from most to least recent:
- The MessageList component fetches messages in descending order based on timestamp.
#### 4. Users on different computers can post and view messages:
- The back-end API (/msgs and /msgs/add) supports posting and retrieving messages from different clients.

## Outcomes
I decided to use this project not only to showcase my ability, but also as a way for me to learn a new framework. This is my first time working with the MERN stack, and I decided this would be a cool way for me to get my hands dirty and learn. 

## How to run/start the application
### Prerequisites
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

##### Clone this repository
```
git clone https://github.com/arhat05/MessageBoard
cd MessageBoard
```
Or clone from github desktop

### Start the backend server
```
cd server
```
##### Install dependencies
```
npm install
```
##### Start the server
```
node server.js
```
You should see the following message in your terminal:
```
Server running on port 5000
```
##### View the API
Open http://localhost:5000/msgs to view the messages in the browser.

### Start the frontend app
Open a new terminal window and navigate to the root directory of the project.
```
cd ..
```
##### Install dependencies
```
npm install
```
##### Start the React app
```
npm start
```
##### View the app
Open http://localhost:3000 to view it in the browser.




