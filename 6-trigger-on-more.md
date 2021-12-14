# Triggering actions on more actions
the `on` key can include more actions than `push`.
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