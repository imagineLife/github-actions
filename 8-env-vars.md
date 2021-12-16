# Including environment variables
There are a few ways to add environment variables in a yaml file that the runner can interpret.  
see `j.yml` for some examples.  

## built-In Vars 
Github comes with a bunch of [built-in environment variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) that are available in the runner, variables about the workflow, runner, job, action, file-system, repo, git details, and more.
## Scoping
Environment variables can be scoped
- "globally" 
- to a job
  - under the job name key, adding an `env` block with sub key-values will scope the vars to the job
- to a step
  - under the step name key, adding an `env` block with sub key-values will scope the vars to the step