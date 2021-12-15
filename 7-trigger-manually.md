# Triggering an action manually
Through the `repository_dispatch`, an api can be used to trigger actions.
see `i.yml` for a yml example and [some of](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow) the [github docs](https://docs.github.com/en/rest/reference/actions#create-a-workflow-dispatch-event) for more explanations.
## Setting up a manual trigger
### The API
- get the url to send a post request to (_github api_) that will trigger the running of the action
  - looks like the url at time of writing is `https://api.github.com/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
  - NOTE: instead of the `workflow_id`, the workflow filename could be used instead, here `i.yml`
  - NOTE: the `workflow_id` can be discovered through another api, a GET at `https://api.github.com/repos/{owner}/{repo}/actions/workflows`
- adjust the headers of the request to match api specs
  - `Accept: application/vnd.github....`
  - `Content-Type: application/json`
- adjust the body
  - ` { event_type: "custom-event-type-string-here" }`
- adjust the authorization header
  - set to basic
  - set the value to be an access token
    - make the token though the github gui

## The yml
- update the action yml
  - set an `on` sub key
    - set to `repository_dispatch`
      - set another sub-key `types`
        - set the val to match the `custom-event-type-string-here` 
