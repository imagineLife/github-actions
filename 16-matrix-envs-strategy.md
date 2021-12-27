# Setup a Matrix
What is a matrix? A yml-defined set of values that duplicates the running of workflows/jobs based on the different variable values.  

## Why
- different OS's may be needed
- different dependency versions may be used


**NOTE**: Matrixes have exponential effects. In the below example, 9 jobs will run
- 3 per macos-latest, 1 per node version
- 3 per ubunt-latest, 1 per node version
- 3 per windows-latest, 1 per node version


## Example
```yaml
name: Node-Version-w-Matrix
on: push
jobs:
  node-version-setup:
    strategy:
      matrix:
        # run this job 1x per listed node version
        node: [12,14,16]
        # run this job 1x per os
        os: [macos-latest, ubuntu-latest, windows-latest]
    runs-on: ubuntu-latest
    steps:
      # log the current version of node
      - name: Log Node Version
        run: node --version
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - name: Log Node Version AFTER action
        run: node --version
      - name: Dump cur node version
        env:
          CUR_NODE_VERSION: ${{ matrix.node }}
        run: echo "$CUR_NODE_VERSION"
```