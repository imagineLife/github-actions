# A CICD Frontend Workflow
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

