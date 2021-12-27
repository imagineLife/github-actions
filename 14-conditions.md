# Conditions in workflows
Workflows can have built-in conditions. see `p.yml` as an example.  

## Syntax
To introduce conditions into the workflow doc, leverage an `if` key + val. The `if` key's value will need to something that returns a boolean, something like...
- `github.event_name == 'push'`, only running on push
- `failure()`, only running when previous step fails  
- `cancelled()`
- `always()`
**Jobs** can be conditional.    
**Steps** can be conditional. Steps take into account the previous step success. See [github docs on "Job status check functions"](https://docs.github.com/en/actions/learn-github-actions/expressions#job-status-check-functions) for more deets.  
