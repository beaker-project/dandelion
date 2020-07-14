# Dandelion

This repository contains code to serve as base for a React/PatternFly project.

It has some predefined structure, boilerplate code, and examples to start with. Currently, it implements:
- React Hooks in functional components
- Patternfly 4
- TypeScript
- React-router for route management
- Redux for state management
- Redux-saga for side-effects handling
- Jest + React Testing Library for tests
- Prettier for code style validation
- ESLint for code checking
- Commitlint for commit message checking

## Running it in a container:

To run the Web Interface in your favorite container environment, use the provided Dockerfile. We recommend `podman`.
Build the container image with:

```shell
$ podman build . -t dandelion
```

After building is completed, you can run it, mapping port 80 to some local port:

```shell
$ podman run -d -p 8081:80 dandelion
```

The Interface should now be available in the address `http://localhost:8081`
