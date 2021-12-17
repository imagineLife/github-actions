# Opening an Issue through a workflow
see [k.yml](./k.yml) for an example, and the [github docs](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#example-2-calling-the-rest-api) for a doc-driven explanation.   

Here, the `GITHUB_TOKEN` built-in env var gets used to send a github api request.  

## Output
- **creates a workflow** that can be seen in the `Actions` tab (_like all previous workflow examples_), here names `create issue on commit`  
- **sets to run on push**
- **creates a job named "on_commit"**
  - the job **sends a curl request to the github api**
    - a post request to `/issues`
    - uses built-in github env vars
      - `github.repository`
      - `secrets.GITHUB_TOKEN`
      - `github.sha`
    - sets a title & body in the `data` attr