# Project Overview

This is a React-based web application for an art studio specializing in Lippan art. The application is built with Vite, styled with Tailwind CSS, and uses React Router for navigation. It features a gallery, a product list, and a contact page.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server at `http://localhost:3000`.
3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` folder with the production-ready files.
4.  **Preview the production build:**
    ```bash
    npm run preview
    ```

# Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Customizations to the theme are defined in `tailwind.config.js`.
*   **Routing:** Routing is handled by `react-router-dom`. All routes are defined in `src/App.jsx`.
*   **Components:** Components are organized in the `src/components` directory.
*   **Pages:** Page components are located in the `src/pages` directory.
*   **Data:** The project uses JSON files for data, which can be found in the `src/data` directory.
