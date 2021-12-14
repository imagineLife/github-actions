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

## Another Example
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
This allows the logging of an input var, the _who-to-greet_ var, to the runner log. This is an intro to using a 3rd party action.  

## Another Example cloning the repo into the runner
```yaml
name: Run Checkout Action
on: [ push ]
jobs:
  run-github-checkout-action:  
    environment: logless-learning
    runs-on: ubuntu-latest
    steps:
      - name: List Files Before action
        run: |
          pwd
          ls -a
      - name: checkout action
        uses: actions/checkout@v1
      - name: List repo docs after checkout action
        run: |
          echo "-- pwd ->"
          pwd
          echo "-- ls -a ->"
          ls -a

```
### What this action does
According to the [action repo docs](https://github.com/actions/checkout), this action `...checks-out your repository under $GITHUB_WORKSPACE, so your workflow can access it.`
- fetches the repo for the runner to access the repo code
- allows for the success of the `ls -a` command to 
  - show the contents of the repository in the terminal output 
  - have access to the repository in the runner
  - checks out the COMMIT SHA that "triggered" the latest workflow to run

### Some env vars are already in the runner
Perhaps we want to checkout the repo ourselves. Some env vars are already available through the github runner:
- GITHUB_SHA
  - the sha of the commit
- GUTHUB_REPOSITORY
  - name of the repo
- $GITHUB_WORKSPACE
  - the `pwd` in the workspace