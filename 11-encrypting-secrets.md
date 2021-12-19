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
### Setup
- Download `GnuPG` module onto the host
- build the json file that stores secrets
  - here, `m-secrets.json` is the example

### Use GPG
- open a terminal that is in the same dir as the secrets file
- run a gpg command that will encrypt the secrets json file && create a new encrypted version of the file
  - here, the command will be `gpg --symmetric --cipher-algo AES256 m-secrets.json`
  - this will encrypt the `m-secrets.json` and create a sibling file called `m-secrets.json.gpg`

## Setup the Workflow file to leverage gpg 
The first step here is to store the _same_ secret-key used in pgp on the host machine now inside github as a secret. Github allows a name for the secret, so name it well :)  

the `gpg` tool is installed in the github runner already - epic.  

- build a job
  - run it on `ubuntu:latest`
  - give it a step
    - use the checkout action to pull the repo into the runner, which will include the encrypted file
    - add a named step
      - pass the env var from github `secrets` object
      - run gpg & pass an env var
    - add another step
      - print the decrypted file