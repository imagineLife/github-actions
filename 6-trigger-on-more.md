# Triggering actions on more actions
the `on` key can include more actions than `push`.  
see the [github docs](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows) for more deets on what events can trigger workflows:
- scheduled events
- manual events
- workflow reuse events
- webhook events


## Trigger on pull request
see `g.yml` for details.  
- make a new branch `test_workflow-on-pr`
- add to the `on` arr the `pull_request` val
- add some code changes to some text

## can be extended
```yml
on: [push, pull_request]
```
can be adjusted to be more granular:
```yaml
on: 
  push:
  pull_request:
    [closed, assigned, opened, reopened]
```