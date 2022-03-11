# A CICD Frontend Workflow
- [A CICD Frontend Workflow](#a-cicd-frontend-workflow)
  - [Create-React-App PreReqs](#create-react-app-prereqs)
    - [Testing](#testing)
    - [Building](#building)
  - [Surge PreReqs for deploying The static files](#surge-prereqs-for-deploying-the-static-files)
  - [Prettier PreReqs](#prettier-prereqs)
  - [A Workflow Overview](#a-workflow-overview)
    - [Branching Strategy](#branching-strategy)
  - [Workflow Details](#workflow-details)
    - [On Pull-Request](#on-pull-request)
    - [On Merge-To-Develop](#on-merge-to-develop)
    - [On PR from Dev To Master](#on-pr-from-dev-to-master)
    - [On Merge-To-Master](#on-merge-to-master)
- [Common Gotchas](#common-gotchas)
- [Terms](#terms)
  - [artifacts](#artifacts)


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
### Branching Strategy
- Master Branch
- Develop Branch
In order for code to be added to EITHER of those branches, a pull-request needs to be made.  
**Master** goes to production.  
**Development** has dev code, not-yet-ready for development.  


## Workflow Details
Devs open a branch that will be merge-able to the development branch, do work on their new branch, and make a pull-request to the develop branch.  

### On Pull-Request
- Dev Opens a pull req on a feature branch to get merged into dev branch
- Workflow runs
  - install npm deps (_** would be nice to do other stuff here_)
  - check code formatting (_prettier + eslint_)
  - run tests
  - upload coverage reports as an artifact
  - cache dependencies
    - caching will make installing the dependencies on a subsequent workflow MUCH faster

### On Merge-To-Develop
- dev approves + merges code to dev
- workflow runs
  - install npm deps (_** would be nice to do other stuff here_)
  - check code formatting (_prettier + eslint_)
  - run tests
  - upload coverage reports as an artifact
  - **build the repo**
  - **upload the build dir as an artifact**
  - **deploy to staging**
  - **cache dependencies**

### On PR from Dev To Master
- this is similar to PR from feat to dev
- Workflow runs
  - install npm deps (_** would be nice to do other stuff here_)
  - check code formatting (_prettier + eslint_)
  - run tests
  - upload coverage reports as an artifact
  - cache dependencies
    - caching will make installing the dependencies on a subsequent workflow MUCH faster
  
### On Merge-To-Master
- dev approves + merges code to dev
- this is similar to merge-to-dev
- workflow runs
  - install npm deps (_** would be nice to do other stuff here_)
  - check code formatting (_prettier + eslint_)
  - run tests
  - upload coverage reports as an artifact
  - **build the repo**
  - **upload the build dir as an artifact**
  - **Create a release**
  - **deploy to prod**
  - **upload coverage report to codecov**
  - **cache dependencies**

# Common Gotchas
- **On Job failure**, create & open a github issue
- **On Issue-creation**, send a msg to slack
- **On release creation**, send a slack msg



# Terms
## artifacts
Output from a job in a pipeline