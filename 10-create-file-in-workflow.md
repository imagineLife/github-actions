# Create a file in workflow
Here, a random number will be created and written to a txt file.  
see `l.yml` for a complete example of this.  

## Creating a random number in shell
From a shell, a random number can be created with `$RANDOM`. Try with `echo $RANDOM`.  

## Writing to text file in shell
Writing a random number to a file could be dome with `echo $RANDOM >> randomNumber.txt`.  

The above 2 steps will happen on the runner vm.  

## performing the above in a workflow
Here
- on push a workflow will happen
- a job named `on_commit` will run, where...
  - permissions to write to issues are given
  - permissions to write contents are given
  - 1 step, `push rando tile` will be executed, which is a string of shell commands
    - show the `pwd` & list of current files (`ls -a`) in the runner
      - the files will be all files from the repo, including all of the markdown files
    - setup git in the runner to work with this repo
      - initialize, add origin, set some git config deets, fetch/checkout & pull the main branch
      - echo a random number to a new textfile
      - commit & push to the repo
      - 

```yml
name: Create Rando TxtFile

on: [ push ]

jobs:
  on_commit:
    runs-on: ubuntu-latest 
    permissions:
      issues: write 
      contents: write
    steps:
      - name: push rando file
        run: |
          pwd
          ls -a
          git init
          git remote add origin https://$GITHUB_ACTOR:${{secrets.GITHUB_TOKEN}}@github.com/$GITHUB_REPOSITORY.git
          git config --global init.defaultBranch main
          git config --global user.email "ericjlaursen@gmail.com"
          git config --global user.name "Jake"
          git config --list
          git fetch
          git checkout main
          git branch --set-upstream-to=origin/main
          git pull
          ls -a
          echo $RANDOM >> randoNumber.txt
          ls -a
          git add .
          git commit -m 'message from workflow'
          git push

```
