# Using Containers
see `t.yml` for an first example.  
Jobs defined in the yml file can have a `container` block.  
Each `container` can have "sub" contents - things like image, env vars, and more.  
To define a container to use, use the image name from dockerhub. in `t.yml`, the `node:14-alpine` image/tag combo is used.
```yml
name: Use-Docker-Container
on: push
jobs:
  pull-node-img:
    runs-on: ubuntu-latest
    container: 
      image: node:14-alpine
    # steps run IN container
    steps:
      - name: log node and os
        run: |
          node --version
          cat /etc/os-release
```  
The subsequent `steps` run _from the container_, not on the host. Above, the `log node and os` step should show `alpine` as the os, not ubuntu.  