# Smart Mental Health Assistant - Backend

The backend for the **Smart Mental Health Assistant** is a RESTful API that powers an AI-driven chatbot and mood tracking system. It integrates sentiment analysis, user authentication, and role-based access to deliver an intelligent and personalized mental health support service.

---

## Table of Contents
1. [Features](#features)  
2. [Technologies Used](#technologies-used)  
3. [Setup and Installation](#setup-and-installation)  
4. [Environment Variables](#environment-variables)  
5. [Future Improvements](#future-improvements)  

---

## Features
- AI-powered chatbot for mental health support.  
- Sentiment analysis for user interactions and mood tracking.  
- Mood logging with user-specific historical data retrieval.  
- JWT-based authentication and role-based access control.  
- Scalable and modular design for ease of extension.

---

## Technologies Used
- **Backend Framework**: Node.js with Express.js  
- **Database**: MongoDB with Mongoose  
- **AI Integration**: OpenAI API for responses and sentiment analysis  
- **Authentication**: JSON Web Tokens (JWT)  
- **Error Handling**: Centralized error middleware  
- **Logging**: Winston logger for system and error logs  

---

## Setup and Installation

### Prerequisites:
- Node.js (v14 or higher)  
- MongoDB (local or cloud-based)  
- OpenAI API key  

### Steps:
1. Clone the repository:  
   ```bash
   git clone https://github.com/topzyray/smart-health.git
   cd smart-health
   cd backend

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
-  Create a .env file in the root directory and add the required variables following the structure (See here: [Environment Variables](#environment-variables))


4. Start the server:
* Development:
    ```bash
    npm run dev
    ```

* Production:
    ```bash
    npm run prod
    ```

5. Access the API at http://localhost:5000

### Environment Variables

Create a .env file in the root directory with the following keys:

    PORT=5000
    MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/db
    JWT_SECRET=your_jwt_secret
    OPENAI_API_KEY=your_openai_api_key
    

## Future Improvements
Expand AI functionality for deeper mental health insights.
Add analytics for mood patterns and trends.
Integrate voice-to-text for seamless user interaction.

## Contributors
- Name: Tope Taiwo - Full-Stack Software Engineer
- Email: topzyray009@gmail.com