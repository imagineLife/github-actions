# Implementing a Complex Workflow
- [Implementing a Complex Workflow](#implementing-a-complex-workflow)
  - [Create Codeowners](#create-codeowners)
  - [Create the Repo](#create-the-repo)
  - [Protect the Develop & Master Branches](#protect-the-develop--master-branches)
- [Create Workflow Steps](#create-workflow-steps)


## Create Codeowners
- Create a `CODEOWNERS` file in the `.github` dir
  - the `CODEOWNERS` will describe who...owns... the code. This file can categorize and/or define different owners for different files and/or directories in the project. See [Github Docs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) on codeowners for more details

## Create the Repo
This will include...
- a create-react-app frontend repo
- some simple tests to validate that testing functions

## Protect the Develop & Master Branches
In Github repo GUI
- settings (_tab_)
- branches (_sidebar list_)
- Branch Protection Rules
  - enter `master` as the pattern
  - require pull request reviews before merging (_1 review_)
  - dismiss stale PRs
  - Require reviews from Code Owners
  - Require status checks to pass
  - require branches to be up-to-date
  - include admins in the rules (_admins are not above the rules_)

Now, pushing directly to master will not work - a PR must be made.

# Create Workflow Steps
Create a new branch
```bash
git checkout init-workflow
```
Create the workflow file
```yaml
name: CI
# WHEN
on:
  pull_request:
    branches: [develop]

# WHAT
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # checkout the code
      - uses: actions/checkout@v2
      
      # THIS one is optional but better to be explicit
      - name: Specify Node Version
        uses: actions/setup-node@v1
        with:
          node-version: "16.17.x"
      
      # install mods 
      - run: npm ci

      # lint check
      - run: npm run format:check

      # test 
      - run: npm run test -- --coverage
        # env for create-react-app test interpretation
        env:
          CI: true
      
      
```