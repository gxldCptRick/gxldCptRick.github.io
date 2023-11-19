---
layout: post
title: "Building More out of a Number Guessing Game"
date: 2023-11-19 17:19:52 +0000
author: Andres Hermilo Carrera Reynaga
categories: story,notes
tags: [python,demo,coding,programming,web dev]
---
Heyyoo,
Today I wanted to talk about demos and what stuff you can build with some basic ideas. I had the thought the other day that if people use the number gussing game as a project code kata then what if we could push the kata further then just practicing how quickly one can actually create it. What if we could go even further beyond and make the app more fun to build. Then I had this thought about what if we could start with a number guessing game that is running on a single computer and then push it to run on multiple computers. Have it run as a web server where there could be multiple instances of it going. What if we could make it in such a way that all one would need to do is hit api endpoints to retrieve game state messages for the game they are playing. What if we could even push that even further and just expose the data flow for the game to be api endpoints that would be actions. Then someone could build an entire web app to connect to your web server and play number guessing games from where ever however they wanted to develop it. Granted because the code is so simple you might not ever wanna really use it but what if that is just a good enough reason to build it.

I first started out with trying to figure out what sort of requirements would make sense for a simple number guessing game kata. Basically that there should be only one number that you are trying to guess. Your guesses probably shouldn't be counted down if you don't type a number or one that would make sense for the range of numbers you are guessing in. Then I was throwing around something cool to just make it customizeable from the beginning i.e. make it so you can configure what the number generation range is for the value you are trying to guess. Then I thought about it and I was thinking if the range is big enough it would make even more sense to add in a new message that would pop up when you get within a specific range of the value to let you know you are really close to it. And if we have this range we could expose it to be configureable so that we could make the application more interesting. Then I started working on this first basic app. It wasn't too hard. Luckily the `random` module in the std library for python had a randrange function that allows you to specify a min, max where the max is included in the possibilites. Then it was a simple case of trying to figure out a good way to define a range of values so I can make the message as I get closer to the value itself.

When working on figuring out the range I figured I would want to make it a percentage. I did that so that you can define like within 20% of the actual number we tell you you are close or whatever and it was easier to reason about. This is because I can use that number figure out the range is numbers between the min and the max then multiply the number by the float percentage and then round it up to get the magnitude of difference in which I would accept the difference. Basically if it was 1-10 and I take 10% of that, so 10- 1 = 9 so that would be 9 values between them and then I would multiply my modifier or range to get 0.1 * 9 =  0.9 and then round it to 1 which would mean the number would have to have a distance of at least 1 before I would give it a message that it is close to the value that they are guessing. But lets say I wanted to do 20% then it would be 2 because .2 * 9 = 1.8 and that rounded up would be 2 so then I could keep the expressions of ranges in magnitudes from the value. That would mean that when I am doing the calculation of messages I would need to normalize the difference to always be positive so I could just use this number I calculated on the fly when deciding if the value is close to the value they are trying to guess.

```
      guess
<--1--(2)--3--4--5--6--7--8--9--10-->
              ^
            number I picked
# difference
  |4 - 2| = 2
  |pick - guess| = magnitude

                  guess
<--1--2--3--4--5--(6)--7--8--9--10-->
            ^
            number I picked
# difference
  |4 - 6| = 2
  |pick - guess| = magnitude
```

Doing this allowed me to simplify the range stuff so that it could be easy to configure and change when someone wanted it too. But obviously this will run into issues when you are using a number greater then 1 because you would make all numbers be 'close' to the picked number but that is a choice I leave for the end user to decide.

With this stuff in place I was then thinking about how to build the web app. The first revision of the api involved returning a state message for an action performed with http status codes to describe the issues with any given actions. For instance we return 400's whenever you make a bad guess i.e. one that doesn't make sense in the confines of the application and the running game i.e. number is out of range of the numbers you are guessing between or if you try to apply changes to an already finished game. Otherwise you would get the same string that we provide for the console application to render when you commit an action. 

```python
    sessions = {}
    @app.post('/game')
    def start_game(req: StartGameRequest)
        game = NumberGuessingGame(req.min, req.max, req.max_guesses, req.close_range_percentage)
        session[game.id] = game
        return game.id
    
    @app.post('/game/{game_id}')
    def take_turn(game_id: str, req: TurnActionRequest)
        if game_id not in session:
            raise GameNotFound(game_id)

        game = session[game_id]

        result = game.guess_number(req.guess)

        return process_result(result) # transform the data into something that can be rendered as text

    
    @app.get('/game/{game_id}')
    def get_game_state(game_id: str):
        if game+id not in session:
            raise GameNotFound(game_id)
        
        game = session[game_id]

        return game.game_data # property to form the dictionary to send
```

This idea is cool because then any apps that use my api will be able to reuse all my words and phrases without having to do a lot more work and could just render what I give them directly the problem with this approach is that you can't make any decisions on the app and you are forced to be like the console app. So then I redesigned the api to instead expose the data behind that I am using to track the state of the application for any given game. With this I also wanted it so that clients when they are refreshing they have a place to get the starting point of their data including the different moves that they had already taken. The good thing is I could just append that to the existing status message I was already doing and so it was super easy to add.

```python
    sessions = {}
    @app.post('/game')
    def start_game(req: StartGameRequest)
        game = NumberGuessingGame(req.min, req.max, req.max_guesses, req.close_range_percentage)
        session[game.id] = game
        return game.id
    
    @app.post('/game/{game_id}')
    def take_turn(game_id: str, req: TurnActionRequest)
        if game_id not in session:
            raise GameNotFound(game_id)

        game = session[game_id]

        result = game.guess_number(req.guess)

        return result

    
    @app.get('/game/{game_id}')
    def get_game_state(game_id: str):
        if game+id not in session:
            raise GameNotFound(game_id)
        
        game = session[game_id]

        return game.game_data # property to form the dictionary to send

```

With these changes I am able to now offer an api to handle the logistics of a number guessing game and how it should operate without the need to reimplement this for other applications. I really liked fleshing this idea out more and because of what I did I want to see if I can find sometime to formally write out the requirements and stream me building the project from zero to full blown web app. But I need to figure out how I want to build a web app with this backend suppyling the data. I might even consider figuring out how to handle web sockets and maybe extend the app to be able to work over web socket connections and managing game sessions that way, Hopefully this can inspire you to look at the number guessing game differently and hopefully expirement with it to see what you could do with it. It is always nice to look at things that are simple and just see what complexity you could add to it to make it more fun to work on or even just more useful then just what it is. :)