---
author:
- Andres Hermilo Carrera Reynaga
categories:
- devops docker k8s
date: 2023-09-08 06:02:01 +0000
layout: post
tags:
- infra
- docker
- k8s
title: Setting up a K8's cluster using KIND
---

Today we will be discussing K.I.N.D, a tool for being able to setup a kubernetes cluster inside a docker host.
I will be exploring why someone would want to do that and what things you can do with a K.I.N.D cluster.


For context here is an excerpt directly from the [kind website](https://kind.sigs.k8s.io/)

> kind is a tool for running local Kubernetes clusters using Docker container “nodes”.
> kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

That second part is super useful for a budding developer like me because that means I can create an entire infrastructure stack without having to do any more work then what I did to setup docker.
This means that now since I have a machine running docker I can download their tooling to install and run a kind kubernetes cluster. A kubernetes cluster allows me to test out ideas to build applications that can scale based on load. 
Kubernetes is primarly a tool to manage a bunch of containers by putting them together in this thing called a Pod. A pod can have multiple containers but each of them represent a unit of work.
For example if you want to web app with its own database and maybe even a server to host your images so that you don't have to manage the filesystem from the backend server.
All you need to do is then define a few pods

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: backend
spec:
  containers:
  - name: backend
    image: backend:1.14.2
    ports:
    - containerPort: 80
---
apiVersion: v1
kind: Pod
metadata:
  name: images
spec:
  containers:
  - name: images
    image: images:1.14.2
    ports:
    - containerPort: 80
---
apiVersion: v1
kind: Pod
metadata:
  name: backend-db
spec:
  containers:
  - name: backend-db
    image: mysql:1.14.2
    ports:
    - containerPort: 80
```

And then kubernetes handles how to order your container to ensure that those pods are spun up and then ran until their eventual completion.
This idea is powerful because now we can define what it takes to deploy our app through yaml and then also how to handle scaling through yaml as well. 
But setting up a kubernetes cluster is a lot of work.

K.I.N.D makes setting up kuberenetes super quick and easy so you don't have to try and wrangle a bunch of nodes together and a control plane to manage them.
Which then allows someone like me to build an app that can run on k8s infrastructure and test its viablity incase I want to explore paying for a cluster through a hosted service like AWS.

So how do you install K.I.N.D to be able to run your cluster? Just follow their [quick guide here](https://kind.sigs.k8s.io/docs/user/quick-start)
But it is just an executable and running your cluster is as easy as running `kind create cluster` after which depending on your platform you can either directly communicate with the pods in your cluster 
or if you are running MacOS/Windows you can interact with it via your Docker Daemon VM.
That being said you will probably want to run something on it to be able to view some useful stats on your cluster such as this [Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)

This dashboard tool is created an maintained by kubernetes and it allows you to visualize and explore the containers in your system. However if you are like me and running on windows you can't just directly hit your dashboard without doing a little bit of extra work.
In order to view the dashboard you need to expose a port forward from your pods in the DockerVM to your host machine is run the

```bash
kubectl proxy
```
This then causes your kuberentes cluster to forward all your ports over the interface on localhost:8001 which is a little tricky to navigate but luckliy I found some stuff online so you just need to go to this url.
`http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/namespace?namespace=default`

After navigating there you should see a login screen and the only way to be able to actually view your dashboard is by authenticating through the kubernetes cli which you can run
```bash
kubectl -n kubernetes-dashboard create token admin-user > login-token
```

After running that you should see a file called login-token that has a jwt that you can then copy paste into the dashboard app and then be able to view all the information about your cluster. 
With this you can then start playing around with it look up some kuberenetes books/articles/resources.
My favorite author is [Nigel Poulton](https://nigelpoulton.com/). His words helped inspire me to figure out exactly what kinds of applications we could be running in k8s and he is a great leader in the kuberenetes space.

You should also checkout one of my favorite tech-tubers on youtube [TechWorld with Nana!!](https://www.youtube.com/@TechWorldwithNana) Here is her primer on [K8s](https://www.youtube.com/watch?v=s_o8dwzRlu4). The way she breaks down the concepts for kubernetes and really all sorts of devops technology is top tier and whenever I need want to dig deeper into topics I go to her channel first to checkout if she has anything to get me pointed in the right direction.

Overall this is an awesome tool that you should use if you want to get started in the devops space and I couldn't recommend K.I.N.D enough if you want to get started working with kuberenetes.