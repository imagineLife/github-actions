# Run Multiple Jobs
see `c.yml` and `d.yml` for examples.  
Multiple jobs can be triggered.  
Multiple "keys" one level "below" the `jobs` key each will represent a single job.  
Below, there are 2 jobs: `run-shell-command` and `first-parallel-job` ->
```yaml
name: for notes
on: [ push ]
jobs:
  # job name, must me kebab cased && val is an object
  run-shell-command:  
    # run on the "learning" environment
    environment: learning
    # type of vm to run on
    runs-on: ubuntu-latest
    # arr of objs, representing steps
    steps:
      - name: echo a string
        run: echo "first workflow done-zo!!"
  first-parallel-job:
    environment: learning
    runs-on: windows-latest
    steps:
      - name: Output Dir in Powershell
        run: pwd
      - name: Output dir in Bash
        run: pwd
        shell: bash
```

## Run jobs synchronously
Declare in a job a `needs` key with a list of other jobs to "wait" on...
(_see d.yml for the example_)  

```yaml
name: for notes
on: [ push ]
jobs:
  # job name, must me kebab cased && val is an object
  run-shell-command:  
    # run on the "learning" environment
    environment: learning
    # type of vm to run on
    runs-on: ubuntu-latest
    # arr of objs, representing steps
    steps:
      - name: echo a string
        run: echo "first workflow done-zo!!"
  first-parallel-job:
    environment: learning
    runs-on: windows-latest
    needs: ["run-shell-command"]
    steps:
      - name: Output Dir in Powershell
        run: pwd
      - name: Output dir in Bash
        run: pwd
        shell: bash
```