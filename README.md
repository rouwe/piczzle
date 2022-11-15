# Piczzle

**Picczle** is a SPA(Single Page Application) that allows its user to create and play puzzle games using their own picture.

## Overview

### Features

- Allows visitors to create and log in using a username or an email.
- Allows a user to upload a picture once. It will always be available in the settings saved tab.
- Users can create a puzzle by selecting any image in the saved tabs.
- Users can choose between a variety of difficulties.

## Front-end

The client side of the application has (5) main components/pages:

- Home (Visitor or User)
- Contact
- About
- Login
- Signup

### Dependencies

- _React_
- _TypeScript_
- _SASS/SCSS_
- _Webpack_

### Design

The design is created using low, mid and high fidelity wireframes.

#### Tools

- _Figma_

#### Screenshots

##### Mobile Screenshot (Visitor)

![Visitor Mobile Screenshot](./readme_assets/visitor-mobile-screenshot.png?raw=true)

##### Desktop Screenshot (Visitor)

![Visitor Desktop Screenshot](./readme_assets/visitor-desktop-screenshot.png?raw=true)

##### Mobile Screenshot (User)

![User Mobile Screenshot](./readme_assets/user-mobile-screenshot.png?raw=true)

##### Desktop Screenshot (User)

![User Desktop Screenshot](./readme_assets/user-desktop-screenshot.png?raw=true)

## Back-end

The server side is built using Express framework and Mongodb.

### Dependencies

- _Express_
- _TypeScript_
- _MongoDB_
- _Middlewares_

### Core Functionality

- **User Authentication** - users can register using an email or username and a password. The response sent back by the server contains a session cookie for identifying the user's identity.

- **Image Upload/Retrieval** - images uploaded by the users are stored using MongoDB's GridFS specification.
