# Opening an Issue through a workflow
see [k.yml](./k.yml) for an example, and the [github docs](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#example-2-calling-the-rest-api) for a doc-driven explanation.   

Here, the `GITHUB_TOKEN` built-in env var gets used to send a github api request.  