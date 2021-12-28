# Using Containers In Steps
Notes
- github workflows depend on the `entrypoint ['path', 'command']` syntax rather than the `entrypoint command`
- remember that a `CMD [...]` following an `ENTRYPOINT [...]` will append the `cmd` vals to the `entrypoint` arr  

See `v.yml` for a workflow example.  

## Workflow overview
```yaml
name: Use-Containers-In-Steps
on: push
jobs:
  containers-in-steps:
    runs-on: ubuntu-latest
    container:
      image: node:10.18.0-jessie
    steps:
      - name: log-node-v
        run: node --version
      - name: use-container-and-echo
        uses: docker://node:14-alpine
        with:
          entrypoint: '/bin/echo'
          args: 'Echo string from node:14 container'
      - name: use-container
        uses: docker://node:14-alpine
        with:
          entrypoint: '/bin/echo'
          args: 'Echo THIS string from node:14 container'
      - name: use-container-log-node-version
        uses: docker://node:14-alpine
        with:
          entrypoint: '/usr/local/bin/node'
          args: -v
```
The Step pattern here is something like
- leverage the `uses` key && reference a docker image from dockerhub
  - NOTE the specific syntax, `docker://<image-and-tag-here>`
- leverage the `with` key & sub-keys for a command to run against the container
  - `entrypoint` overrides the default entrypoint of the container, allowing a command defined in this workflow file to be run on the container
  - `args` represents the argument to be run in the container - above, a string is echoed to the runner logs, a string is logged from within a container, and the node version is logged from a container