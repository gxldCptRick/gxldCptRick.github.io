---
layout: post
title: "Making a loot system"
date: 2023-09-04 04:46:40 +0000
author: Andres Hermilo Carrera Reynaga
categories: python game-dev web-dev
---
Heyyoo!! I haven't written in a while so I wanted to talk about some work I found myself doing for the Yugioh Card Puller project.
It was really fun because it had to do with building out a system in which I would be able to have a weighted list of items and 
select one randomly where the weight was correlated with the likely hood they would be selected. For example lets say I have a
game where I want players to be able to get items randomly. The items range from really basic stuff that should be dropping frequently
to things that are game breaking so you want to limit the supply of them. So I have lets say a small health potion and a large mana potion.
Because the small health potion is so common I want it to appear with a frequency of 9 out of 10 times when pulling from the chest I generate.
The large mana potion is really powerful because there are a bunch of things that consume large amounts of mana and this potion allows you to overcharge 
yourself so any extra mana sticks with you as bonus to pull from. Because the mana potion is so strong, I want to have it show up 1 out of 10 times my 
chest generates.

- Small Health Potion (Weight 0.9)
- Large Mana Potion (Weight 0.1)

Total weight: 1

So then taking this information in I can then say I want to generate a random number between 0-1 since there are exactly 1 weight in total for the item 
pool that I have described above. So then if the number is less then 0.1 that should be the same as finding a Large Mana Potion. Otherwise if the value ends up 
being either 0.1 or greater then it should give back a Small Health Potion

This means to codify the solution would be like this.

````python
def random_item(bag_with_items: list[dict], random_func):
    # this gives me the total amount of range I wanna work with
    total_in_bag = sum(item['weight'] for item in bag_with_items)  
    # we want something between zero and the total which in our case would be 1 
    selected_value = random_func(0, total_in_bag)  # this should return a non-inclusive for the max
    current_weight = 0
    # we sort so that we can control where the rare items are on the scale but it isn't needed
    for item in sorted(bag_with_items, lambda i: i['weight']): 
        current_weight += item['weight']
        if current_weight > selected_value:
            return item
    return None # this should only be the case of an empty bag

````

As you can see we add up the items