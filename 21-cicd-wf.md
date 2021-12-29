# A CICD Workflow
Here, a frontend app will be passed through this ci-cd workflow.  
a demo `create-react-app`, for the sake of simplicity, will be used here.  

## Create-React-App PreReqs
- to run tests in a c-r-a boilerplate, run `npm run test`
- to run tests in a c-r-a that ONLY run without watch mode, set a env var in the terminal `export CI=true`
  - this can be removed with `unset CI` #bashNotes
- to run tests in a c-r-a that spit out coverage report run `npm run test -- --coverage`