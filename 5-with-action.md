# With Actions
Workflow steps can do a bunch more than steps, specifically run "actions".

## Actions
Actions are...well.... code.  
There are 2 "types" of actions: custom or opc. Such is life.  
In `e.yml`, the action called `hello-world-javascript-action` is used. This takes a variable from the yml input and writes some text to the workflow console.  

### Actions in yml
- actions are leveraged in named steps
- actions can take variables in the `with` key

### Referencing other steps
- steps can reference other steps using `${{}}` syntax

## An Example
Here is a brief example. for a yaml with more comments, see `e.yml`.  
For simplicity sake, this is 14 lines long.  
The commented `e.yml` gives some explanation for the lines in the file. 

```yaml
name: Run Actions
on: [ push ]
jobs:
  run-github-actions:  
    environment: logless-learning
    runs-on: ubuntu-latest
    steps:
      - name: js action
        id: helloworld
        uses: actions/hello-world-javascript-action@main
        with:
          who-to-greet: "Joesiph Schmo-sif"
      - name: Logging Greeting Time
        run: echo "${{ steps.helloworld.outputs.time }}"
```
### What this action does
According to the [action repo docs](https://github.com/actions/checkout), this action `...checks-out your repository under $GITHUB_WORKSPACE, so your workflow can access it.`
- fetches the repo for the runner to access the repo code
- 