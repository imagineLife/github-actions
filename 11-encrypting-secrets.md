# Encrypting Secrets
## A Sample Situation
Say we have a `secrets.json` file, which has a few values we want secret included (_see 'm-secrets.json' as an example_), something like

```json
{
  "db": {
    "un": "horse",
    "pw": "cat"
  },
  "api-server": {
    "un": "dog",
    "pw": "fish"
  }
}
```
This could store...
- vars to authenticate to 3rd party apis
- vars to login to dbs

## A Way to protect the values
use a tool to encrypt & decrypt values 
- encrypt the values locally
- push to repo encrypted
- when using, in workflow, decrypt the vals & use them

## In Action
- Download `GnuPG` module onto the host
- build the json file that stores secrets
  - here, `m-secrets.json` is the example

### Use GPG
