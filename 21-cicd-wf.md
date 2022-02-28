# A CICD Frontend Workflow
- [A CICD Frontend Workflow](#a-cicd-frontend-workflow)
  - [Create-React-App PreReqs](#create-react-app-prereqs)
    - [Testing](#testing)
    - [Building](#building)
  - [Surge PreReqs for deploying The static files](#surge-prereqs-for-deploying-the-static-files)
  - [Prettier PreReqs](#prettier-prereqs)
  - [A Workflow Overview](#a-workflow-overview)


Here, a frontend app will be passed through this ci-cd workflow.  
a demo `create-react-app`, for the sake of simplicity, will be used here.  

## Create-React-App PreReqs
### Testing
- to run tests in a c-r-a boilerplate, run `npm run test`
- to run tests in a c-r-a that ONLY run without watch mode, set a env var in the terminal `export CI=true`
  - this can be removed with `unset CI` #bashNotes
- to run tests in a c-r-a that spit out coverage report run `npm run test -- --coverage`

### Building
- `npm run build` puts the built output in a `build` dir
  - this `build` dir will need to be deployed in a prod environment

## Surge PreReqs for deploying The static files
- install it globally 
  - `npm i -g surge`
- register with a username + pw
- prior to running surge, the frontend needs to be built, use `npm run build` & cra will store frontend content in the build dir
- to run surge against a frontend repo, the `surge` command needs to be run in a terminal from within the frontend library
  - login or register
  - make sure the project dir is to the `build` dir - this will make surge use the built content
  - surge will auto-gen a url!

## Prettier PreReqs
- install prettier in the repo
  - `npm install --save-dev prettier`
- create a `.prettierrc` file
- ignore files to run prettier against in a `.prettierignore` file
  - things like `node_modules`, `build`, `coverage`, `package-lock.json`
- consider adding prettier scripts to a frontend repo
  - `"format:check": "prettier --check \"**/*.js\""`


## A Workflow Overview
- Master Branch
- Develop Branch
- In order for code to be added to EITHER of those branches, a pull-request needs to be made


When a new feature needs to be developed...
- Create a new branch (_feature branch strategy_)
- open a PR
- A workflow will run
  - code doesn't break tests
  - formatting matches
  - ON PASS, someone can review + approve + merge in to develop
  - wf in depth
    - install npm dependencies
    - check code formatting
    - run tests
    - upload coverage reports as artifact to be visible
    - _cache dependencies_
      - next time the workflow runs, this will reduce dependency-install-time
- When code gets pushed in develop
  - a workflow runs
  - same test + formatting checks run
  - ON PASS deploy to a staging server
  - wf in depth
    - install npm dependencies
    - check code formatting
    - run tests
    - upload coverage reports as artifact to be visible
    - build project
    - upload the built content as an artifact
    - deploy to staging server
    - _cache dependencies_
      - next time the workflow runs, this will reduce dependency-install-time
- On Pull-Request on Develop to Master
  - a workflow runs
  - same test + formatting checks run
  - ON PASS, can be merged t o master
  - wf in depth
    - install npm dependencies
    - check code formatting
    - run tests
    - upload coverage reports as artifact to be visible
    - _cache dependencies_
      - next time the workflow runs, this will reduce dependency-install-time
- ON MERGE-TO-Master
  - a workflow runs
  - same test + formatting checks run
  - ON PASS, can be merged t o master
  - wf in depth
    - install npm dependencies
    - check code formatting
    - run tests
    - upload coverage reports as artifact to be visible
    - build project
    - upload the built content as an artifact
    - create a release
    - deploy to prod server
    - upload coverage report to codecov


- On Job failure, create an issue
- On Issue-creation, send a msg to slack
- On release creation, send a slack msg