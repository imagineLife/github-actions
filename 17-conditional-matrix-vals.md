# Make Conditions of Matrix Combinations

## Example
```yaml
name: Node-Version-w-Conditional-Matrix
on: push
jobs:
  node-version-setup:
    strategy:
      matrix:
        # run this job 1x per listed node version
        node: [12,14,16]
        # run this job 1x per os
        os: [ubuntu-latest, windows-latest]
        # HERE is the conditional mix-match
        exclude:
          - os: ubuntu-latest
            node: 12
          - os: windows-latest
            node: 16
        # MORE conditions
        include:
          - os: ubuntu-latest
            node: 15
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