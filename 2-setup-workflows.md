# Setting up workflows
Github workflows needs a specific directory structure:
`.github > workflows > files-here.yml`  
in this project, the order of files go in alphabetical order for ease of tracking a progress through building github workflows.  

## a.yml
in `a.yml`, some echo commands are run.  
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