# Send a Slack Message from A Workflow
Here, a message to a slack app will be sent through a github workflow step.  
This is an example of integrating & using a 3rd part web-hook (_slack in this case_) into a Github Workflow.  

## Prerequisites
A Slack App
- login to `api.slack.com/apps`
- Create an app if not already present
- Add `Incoming Webhooks` as a feature + functionality
  - enter the app settings
  - select the `Basic Information` sidebar item
  - 