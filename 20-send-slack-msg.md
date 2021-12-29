# Send a Slack Message from A Workflow
Here, a message to a slack app will be sent through a github workflow step.  
This is an example of integrating & using a 3rd part web-hook (_slack in this case_) into a Github Workflow.  

## Prerequisites
have a Slack App && create an `Incoming Webhooks` integration
- login to `api.slack.com/apps`
- Create an app if not already present
- Add `Incoming Webhooks` as a feature + functionality
  - enter the app settings
  - select the `Basic Information` sidebar item
  - Select the `Incoming Webhooks` options
  - Select the webhooks details that matter for the slack integration (_what channel the hook should post to etc_)
  - **Copy The Webhook URL**: this is what will be used in the github workflow


## Build the workflow
Create a step in a workflow
```yaml
- name: Send Slack Message
uses: docker://technosophos/slack-notify
env:
  - SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
  - SLACK_MESSAGE: "Text hard-coded string in workflow file - imagine some env vars here: branch, commit, action name (push, merge), ...and more?!"

```
NOTES:
- **The [Slack Notify Image](https://github.com/technosophos/slack-notify)** uses slack webhooks to send messages to a slack channel. This leverages some [Environment Variables](https://github.com/technosophos/slack-notify#environment-variables):
```bash  
# The Slack-assigned webhook
SLACK_WEBHOOK=https://hooks.slack.com/services/Txxxxxx/Bxxxxxx/xxxxxxxx
# A URL to an icon
SLACK_ICON=http://example.com/icon.png
# The channel to send the message to (if omitted, use Slack-configured default)
SLACK_CHANNEL=example
# The title of the message
SLACK_TITLE="Hello World"
# The body of the message
SLACK_MESSAGE="Today is a fine day"
# RGB color to for message formatting. (Slack determines what is colored by this)
SLACK_COLOR="#efefef"
# The name of the sender of the message. Does not need to be a "real" username
SLACK_USERNAME="github-workflow-automation"
```
- **ENV VARS**: Those env vars can be passed to the workflow file - if some of those env vars are hard-coded in the workflow file, github may block the running of the workflow due to security concerns - nice touch!
- 