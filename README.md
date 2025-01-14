# myspa
Base template SPA with TailwindCSS and VueUse

This is a Vue 3 Single Page Application (SPA) template using Vite as the build tool. The template comes preconfigured with TailwindCSS for styling and VueUse for a set of useful composition API utilities.

## Features
- Vue 3 (with Composition API)
- TailwindCSS for utility-first CSS styling
- VueUse for various useful hooks and utilities
- Vite as the build tool

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.8 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
  
You can check if you have these installed by running:

```bash
node -v
npm -v
```
## Installation

```bash
npm install
npm run dev
```


Open http://localhost:5173 in your browser


## Configuration

In the vite.config.js file, you can configure the server proxy for your backend API. For example, the default configuration proxies requests to /api to a local backend server:

```bash
server: {
    proxy: {
      '/api': {
        target: 'http://localhost', // Адрес вашего backend
      },
    },
  },
```

You can customize the target property to point to your backend URL. The /api endpoint is provided as an example, with the endpoint structure inspired by the Bagisto API for eCommerce applications (v1).
