# github-actions
Working with Github CI-CD &amp; Automation

## Terminology Overview
**Github Actions**  
A tool that allows automating a GitHub workflow for software development. Integrated into GitHub. Allow for writing individual tasks, called "actions". These actions can get combined into a more complete workflow of process automation.  

**Workflows**  
Workflows are a process: test, package, release, deploy a project. Workflows can happen based on "events": when code gets pushed, when merge-requests are "approved", on a schedule, something completely outside of GitHub, etc.   

Workflows run on servers, VMs. VMs get booted up for each _Job in the workflow_. VMs can be windows, linux, macOS,... can even run containers.  

**Jobs & Steps**  
Each Job has steps defined.  
Each step should either perform an action (_deploy code, etc_) OR run a shell command (_npm install, echo a val, etc_).  

Workflows can have multiple jobs, running on their own VM: in parallel, as dependencies of one another, etc.  

**An Example** could be do build an android version of an app on a windows vm, as well as building a macOS version of an app on a macOS VM.  

**Runner**  
A machine with the Github Actions runner installed.  
Runners run jobs. Runners run jobs when events happen.  
Runners get hosted by Github OR hosted elsewhere.  
**Github has hosted runners** with commonly-used software: curl, git, npm, yarn, pip, python, ruby, node, etc.  
**Self-hosting a runner** allows for more flexibility around the runner: which OS is on the machine, hardware limits, etc.  
