# Beaker.Next Dashboard

This repository contains code for the next version of Beaker's Web Interface.

Currently in early development stage. Any kind of change in code / content / behavior may change anytime.

## Running it in a container:

To run the Web Interface in your favorite container environment, use the provided Dockerfile. We recommend `podman`.
Build the container image with:

```shell
$ podman build . -t beaker-next-ui
```

After building is completed, you can run it, mapping port 80 to some local port:

```shell
$ podman run -d -p 8081:80 beaker-next-ui
```

The Interface should now be available in the address `http://localhost:8081`
