---
title: It's a Secret, Github Secret
layout: post
date: 2025-02-23T11:17:00-0700
author:
  - Andres H. Carrera
categories:
  - cicd
  - tutorial
tags:
  - github
  - cicd
  - automation
  - security
---
When you build applications and you are following good coding principles and guidelines you will eventually find the need to store secrets. Secrets are the key to allow you to build apps and deploy them and even run them in some cases and because of that we need to have ways to store them. Any CI/CD tool that is useful will provide you a platform to store and organize them so that your runners would be able to access them while denying access to other collaborators since they don't need them but still would want to be able to invoke the CI/CD. This month I want to take a deep dive into github secrets and how we can use them in our CI/CD and the different levels of which you can define them.

## How it works

<https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions>

Github Secrets are the mechanism that Github Provides to propagate secrets to your Github Action workers. They come in two flavors: Organization Level and Repo Level. 

Organization Level secrets are secrets that you can use across multiple github repos. These are useful for using a shared resource like AWS Credentials or Docker Login Credentials since you will likely re-use a single CI/CD account when using those actions and this will also simplify the setup of new repos since you can reference these secrets immediately. These secrets are the ones that I find myself reaching for more often then not because it allows me to build more generic workflows and actions that can set once per org.

Repo Level secrets are ones that are specific to a repo. This can be useful when first working on actions and are not sure what secrets you will use for the workflow you are building or even just experimenting with new tooling that you may not want to commit to just yet by storing it as an organization secret.

Both of these tools has a lot more details then I can comfortably share but I would urge you to look into all you can do with them in terms of scoping and permissions via the official documentation that I have linked above. It has so useful to be able to manage critical secrets you need in your build/deployment pipelines that I would recommend you dig deeper if you find yourself wanting to make your applications more secure. 

## Setting Up Secrets

### Organization Secrets

To be able to configure your organization secrets you will need to navigate to your organizations on your side panel and click on the org you want to configure secrets for.

![Select Organizations on your right side panel.](/images/uploads/screenshot-2025-02-23-083246.png "Navigate to organization Page")

Then you will go to settings > secrets > actions

![Organization Secrets Page](/images/uploads/screenshot-2025-02-23-103520.png "Organization Secrets Page")

From here it is just a simple push of a button filling out a form with a key and the secret you wanna store and voila you have now created an organization level secret that your repos can now reference in your github actions. 

### Repo Secrets

First navigate to your repo you wish to go add secrets to.

![Side Panel with Repos](/images/uploads/screenshot-2025-02-23-104024.png "Side Panel listing Repos")

Navigate to the settings > secrets > actions

![Settings page for adding secrets to actions](/images/uploads/screenshot-2025-02-23-104125.png "Settings page for adding secrets to actions")

Then just click the button and then set the key and value as the secret. And you can start referencing them in your actions.

## Using them in Actions

Using github secrets in your actions is really easy. We expose them with the `secrets` interpolation variable exposed in your actions.

```yaml 
# github/workflows/publish.yaml 
# ... other setup code to define triggers and other actions specific stuff ...
jobs:
  publish-docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Docker buildx
        uses: docker/setup-buildx-action@v3
      - name: Docker Login
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }} # Pull secret here for logging in
          password: ${{ secrets.DOCKERHUB_PASSWORD }}  # Pull secret here for logging in
      - name: Build and push image
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          target: runner
          tags: |
            ${{ env.IMAGE_NAME }}
            ${{ env.LATEST_IMAGE_NAME }}
# ... Other jobs you have run when you want to publish things ...
```

As you can see you just use `secrets`.`VARIABLE_NAME` as you wrote it in the form to create your variable and then you will pull the secret if your action has been granted access. This allows you to easily build your workflows without needing to have everything set yet but it does also mean that figuring out what config you didn't set is a bit of a pain especially with simple typos but that is a problem for another day and a thing you can configure your ide to try and help you see.
