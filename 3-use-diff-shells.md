# Using Different shells for each step
see `b.yml` for the code example and [these docs](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell) for github's notes on this topic.  

## specifying a shell
Each `step` in the workflow yml file can have a `shell: <val-here>`. This tells the runner which shell to use. The shell is dependent on which platform the runner is using.  
```yaml
# a slimmed down yaml example
name: Shell Commands With Alternate Shell  
on: [ push ]
jobs:
  run-shell-command:  
    environment: learning
    runs-on: ubuntu-latest
    steps:
      - name: echo a string
        run: echo "first workflow done-zo!!"
      - name: multiline echo
        run: |
          echo "node version:"
          node -v
          echo "npm version"
          npm -v
      - name: python Command
        run: |
          import platform
          print(platform.processor())
        shell: python
```