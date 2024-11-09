---
title: "Prompt Engineering: Cognitive Verifier Pattern"
layout: post
date: 2024-11-09T11:50:00-0700
author:
  - Andres H. Carrera
categories:
  - Patterns
  - AI
tags:
  - AI
  - Prompt-Engineering
  - Programming-Patterns
  - Cognitive-Verifier
---
This month I wanted to take some time and reflect on things I have learned in my masters program. I have been currently studying and trying to get my degree in AI Development. Most of this course has been me learning the fundamentals elements of what makes an LLM and what AI even is. With this I have learned a lot more about the theory without going into full detail of it and the legacy of the work that has been done. This month I want to go over one of those elements of Prompt Engineer specifically the Cognitive Verifier Pattern and how that can be used to create better responses from your LLM's that are more relevant and useful then just asking the question.

The Cognitive Verifier Pattern is a Prompt Engineering pattern that is focused on getting the LLM to ask questions to build additional context before responding to a request. The idea is to instead of asking the LLM to respond to your prompt you prime the LLM to build a new workflow to be able to respond to a request and then get it to make sure to start an instance of that workflow. 

The Structure is as follows:

* First Prime it with a workflow template explanation

  * When asked to create a study plan,...
* Then give it the context questions you want it to ask

  * Ask questions about the study session length, what we are studying, and what we are hoping to gain after finishing the study plan.
* And bring it all together to make a plan.

  * Then use those answers to build a study plan.

This is a simple structure that when all put together into your prompt will something like this:

> When asked to create a study plan, Ask questions about the study session length, what we are studying, and what we are hoping to gain after finishing the study plan, Then use those answers to build a study plan.

After you do you will see the LLM instead of immediately giving you a study plan it will first ask your questions to help it build context to then be able to respond to your request and build you a more relevant plan using those answers as the basis for it. This is awesome because it can be used as an extended template builder because you don't need to fill in parts of a template study plan and instead just answer a few questions and get a draft to look over and be able to extend and edit as you please. This helps me because then it creates a new point of which I can jump off from and be able to keep improving. I hope that if you ever find a case where your LLM is giving you a response that doesn't feel as useful you can use this pattern to help prime it and tease out better more relevant results for you.

For additional information you I used these links to study and found them super useful:

* [Prompt Patterns: What They Are and 16 You Should Know](https://www.prompthub.us/blog/prompt-patterns-what-they-are-and-16-you-should-know)
* [🤔 What is Cognitive Verifier Pattern In Prompt Engineering?](https://www.linkedin.com/posts/sourav-pati-a2909228_what-is-cognitive-verifier-pattern-in-activity-7151226289540993025-Rcbe/)[](https://academy.constructor.org/blog/top-chatgpt-prompt-engineering-patterns-for-life-and-business-productivity)
* [Top ChatGPT prompt engineering patterns for life and business productivity](https://academy.constructor.org/blog/top-chatgpt-prompt-engineering-patterns-for-life-and-business-productivity)
* [Generative AI & Legal Research: What is a prompt pattern?](https://libguides.law.widener.edu/c.php?g=1342893&p=10038411#:~:text=The%20Cognitive%20Verifier%20Pattern%20instructs,response%20to%20your%20original%20question)
