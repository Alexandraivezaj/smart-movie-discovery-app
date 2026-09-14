# Smart Movie Discovery

A movie discovery application I built to make searching for movies and getting recommendations more interactive. The backend is built with Node.js and Express and includes user authentication, movie search, and AI-powered movie recommendations.

## Features

- User registration and login
- Movie search and movie details
- AI-powered movie search
- Personalized movie recommendations based on a user's prompt
- REST API built with Express
- Environment variables used to securely manage API keys

## AI Movie Recommendations

I integrated the OpenAI API to add two AI features to the application. Users can search for movies through natural language or enter what they're in the mood for and receive a movie recommendation.

The API includes:

- `/llm/search` - searches for movies based on a user's query
- `/llm/recommend` - generates a movie recommendation from a user's prompt

## API Endpoints

### Authentication
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

### Movies
- `GET /movies`
- `GET /movies/:id`

### AI
- `POST /llm/search`
- `POST /llm/recommend`

## Technologies

- JavaScript
- Node.js
- Express
- OpenAI API
- REST APIs
- Git & GitHub

## What I Worked On

I worked on the backend functionality of this project, including the API structure, movie functionality, authentication, and the LLM-based search and recommendation features. This project gave me experience connecting an external AI API to a Node.js application and building REST endpoints around it.
