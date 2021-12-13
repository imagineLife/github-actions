# Setting up workflows
Github workflows needs a specific directory structure:
`.github > workflows > files-here.yml`  
in this project, the order of files go in alphabetical order for ease of tracking a progress through building github workflows.  

## a.yml
in `a.yml`, some echo commands are run.  

## environment requirement 
There needs to be an "environment" key under the job name in order to leverage secret vars in the runner (_see below for more deets on secrets_).  

## seeing actions in github gui
- go to github
- open the project
- go to the `actions` tab
- see a few things
  - **the sidebar**
    - show the named workflows, found by the `name: workflow-name-here` line in the workflow yml file
    - select one to see the output of that specific workflow
  - **the list of line-items**
    - the commit message text & sha are present for each workflow
    - select one of the commit texts to see details & output of the workflow 
    - details of the workflow can be viewed by "drilling down" through the gui
    - **NOTE** jobs are cancellable
    - **NOTE** jobs can fail - try changing `echo` to `echoo` and the job will fail

## Built-In Secrets
Github actions allows for secrets that the runners can use during the workflow.  
To add secrets to the runner
- go to the project in github
- go to the settings tab
- go to the left sidebar and find + select the `Secrets` link
- 
Github comes with "built-in" secrets that the runner already knows how to interpret. [see here for some monitoring & troubleshooting examples](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging), but as examples...
- **ACTIONS_RUNNER_DEBUG** enables runner diagnostic logs
- **ACTIONS_STEP_DEBUG** enables debugging the steps