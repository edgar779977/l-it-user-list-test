# Test Project

## Overview
This is a test project that includes custom, reusable UIKit components designed for dynamic usage across various parts of the application. Each component is modular and highly configurable, providing flexibility to handle different use cases efficiently. The project is optimized for performance and maintainability.

## Key Features

### Frameworks & Tools:
- **Vue 2**: The primary framework used to build the application.
- **Vuex**: State management is implemented using a modular Vuex store, which enhances scalability and maintainability.
- **Vue Router**: Manages routing for smooth navigation within the application.
- **TypeScript**: Ensures type safety and improves maintainability of the codebase, preventing potential runtime errors.

### Dynamic Components:
- **Lazy-loaded Components**: All components are lazy-loaded to enhance application performance by reducing initial loading time.
- **Highly Configurable**: Components are designed to be easily reused across different parts of the app with various configuration options.

### Global Axios Instance:
- **Custom Axios Instance**: A custom Axios instance is used to handle API requests efficiently.
- **Global Configuration**: Global headers and request interceptors are configured for consistent API interactions, allowing easy customization and management of requests.

### Search with Debounce:
- **Debounce Mechanism**: A debounce mechanism is implemented on search inputs to minimize excessive API calls while the user is typing.
- **Dynamic Data Fetching**: Data is dynamically fetched and displayed based on the search input, ensuring a smooth user experience without unnecessary network requests.

## Project Setup

### Prerequisites:
Make sure you have the following installed before setting up the project:
- **Node.js**: Version 22.13.1 (or compatible versions).

### Installation:
Run the following command to install the project dependencies:

> **Note**: The `--legacy-peer-deps` flag is used because Vue 2 relies on older peer dependencies that may conflict with the latest versions of some packages. By using `--legacy-peer-deps`, npm bypasses strict dependency checks, ensuring smooth installation without breaking compatibility.

```bash
npm install --legacy-peer-deps
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
