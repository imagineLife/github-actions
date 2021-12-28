# Using Containers
see `t.yml` for an first example.  
Jobs defined in the yml file can have a `container` block.  
Each `container` can have "sub" contents - things like image, env vars, and more.  
To define a container to use, use the image name from dockerhub. in `t.yml`, the `node:14-alpine` image/tag combo is used.  

## Running steps in a container
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

## Run A Docker Compose setup in a workflow
A use-case, here, could be to ping an api during the workflow to assert that the api is, indeed, up & running, ready to receive requests. Maybe a `/health-check` type endpoint against the api could be useful.   

See `u.yml` for the workflow file in whole.  

See `simple-docker-nodejs-api` for an example api, one that will be used here for 2 endpoints:
- POST to create a user
- GET to get the created user

Those 2 endpoints will be hit during the github workflow. Creating a user && then checking that the user was created will run in the pipeline as a "sanity check" that the api is, indeed, up & running, ready to receive requests.  

### Workflow Overview
```yml
name: Use-Docker-Compose
on: push
jobs:
  run-compose:
    runs-on: ubuntu-latest
    services:
      app:
        image: alialaa17/node-api
        ports: 
          - "3001:3000"
      mongo:
        image: mongo
        ports:
          - "27017:27017"
    steps:
      - name: POST a user to the api
        run: 'curl -X POST http://localhost:3001/api/user -H ''Content-Type: application/json'' -d ''{"username": "joe", "address":"schmo"}'''
      - name: GET Users, Validate that post
        run: "curl http://localhost:3001/api/users"
```
- the workflow is named `use-docker-compose`
- the workflow runs on push
- the workflow has 1 job, `run-compose`
- the job...
  - runs on ubunti
  - runs some docker services: **NOTE** the syntax of the services block is identical to a docker-compose file!
    - one service called `app`
      - pulls a node api image from dockerhub
      - exposes port 3001 on the runner from 3000 in the container
  - one service called `mongo`
    - pulls the mongo image from dockerhub
    - exposes port 27017 from the container 27017
  - runs a step named `POST a user to the api`
    - curls against localhost, as the container is up in the runner
    - creates a user through the api endpoint
    - the workflow cli output should show `User created successfully!`, the success built-in to the api
  - runs a step named `GET Users, Validate that post`
    - curls against localhost, as the container is up in the runner
    - Gets list of users
    - the workflow cli output should show something like `[{"_id":"61cb08ec886e05595","username":"joe","address":"schmo","__v":0}]`, showing the user created