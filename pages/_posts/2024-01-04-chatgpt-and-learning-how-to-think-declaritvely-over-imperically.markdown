---
author:
- Andres Hermilo Carrera Reynaga
categories:
- dev
- ai
date: 2024-01-04 16:06:33 +0000
layout: post
tags:
- ChatGPT
- SQL
- Declaritive Programming
title: ChatGPT and Learning how to Think declaritvely over imperically
---

I have recently started looking at what I can do with ChatGPT and one day I was struggling to understand how I would be able to write a query using on SQL to remove the rows in a table where I have this unique identifier but it had multiple rows using the same value. It wasn't an primary key column and it probably should have been so I had to prep the table to add a UNIQUE index in its place. After banging my head on it for a few hours a friend had the bright idea to use ChatGPT and funnily enough I was able to understand declarative programming and SQL way more because of it.

When I put in my problem statement to ChatGPT I was suprised about how it went about doing the query. To me the problem was hard because the column in question was a foreign key to another table and I knew I wanted to keep the oldest reference to it which I was able to figure out because I had a column with a timestamp of when the record was created. The original way I was trying to do it was writing a script in an imperative languge, in this case python, and bascially create a read query to get the records that I have grouped by the foreign key and sorting the results on the timestamp and then pick the first record in the sorted list as the one to keep and issue a delete to remove the remaining records. Becuase I was so obsessed with needing to read the records in it never occured to me that another way I could write it without needing a read could be like.

````sql
DELETE FROM your_table
WHERE (id, date) NOT IN (
  SELECT id, MIN(date) AS min_date
  FROM your_table
  GROUP BY id
);
````

The beauty in this is that we still use the aggregation of the records and read the table but it is done in such a way that allows you to put this in a migration script to be able to cleanup the records in your table before applying a specific constraint. This allowed me to finish a migration to add a foreign key after wrapping this in a transaction and it was great for what I needed to do.
Because of this I will always see a sort field as a key that I can use. The only problem with this implementation is that if you have two records with the same timestamp you will still have duplication issues but at least you get one step closer to being able to cleanup your table and also if you have that problem you can probably do a reduction on the id afterwards or hopefully another column and hey, if that is an issue you can also ask ChatGPT to help you solve by giving it even more info on your table. 

All this stuff to say that sometimes having another engineer with you can help you look at code differently and if you happen to be solo doing stuff ChatGPT is a great stand in!!