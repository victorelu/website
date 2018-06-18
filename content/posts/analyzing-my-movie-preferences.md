---
title: "Analyzing my movie preferences"
date: 2018-05-21T12:30:54+02:00
draft: false
slug: analyzing-my-movie-preferences
cover: https://victor.avasiloaei.com/img/cinestat-og.png
scripts:
  - Chart.min.js
---

Knowing that IMDb offers a CSV export of my movie ratings history, I decided to build a tool that analyzes this export and see if I can find patterns about my movie watching that arise from that.

That tool is [cinestat](https://cinestat.victor.avasiloaei.com) and my ratings are analyzed [here](https://cinestat.victor.avasiloaei.com/#/stats/5b029e82e6eab64216940a31).

The first stat that cinestat provides is just how much information there is in the dataset and the total duration of the movies watched. It was interesting to see that I haven't even spent half a year of my life on movies, but we're not counting TV-shows here.

{{< figure src="/img/movies-watched-duration.png" class="article-image" >}}

Next, it appears I have a tendency of rating movies higher than the average IMDb user.  
Which is interesting since I consider myself pretty picky and critical, but apparently not as much as I thought.

{{< figure src="/img/movies-rating-difference.png" class="article-image" >}}

Speaking of the rating difference, cinestat easily provides information about what movies I found overrated or underrated. Aka, where the difference between my rating and the average rating was very negative or very positive.

Quite interestingly, I found [Underworld](https://www.imdb.com/title/tt0320691/) to be the most overrated movie that I watched. I don't know if it's me being a Romanian and feeling insulted by their representation of vampires, but I apparently really didn't like that movie. Looking at the rating I gave, I think I might have been too harsh on it and will need to rewatch it with fresh eyes.

The rest of the list doesn't offer any large surprises other than [Mrs Doubtfire](https://www.imdb.com/title/tt0107614/). I do like Robin Williams quite a lot, but I did find that one too over the top. Another potential surprise is [Tombstone](https://www.imdb.com/title/tt0108358/?ref_=nv_sr_1), which was apparently pretty well liked in the IMDb community, but I found it rather dull - sorry! I do like modern westerns quite a lot, I promise.

{{< figure src="/img/movies-overrated.png" class="article-image width-3-4" >}}

On a more positive note, let's talk about movies I found to be *most* underrated.
The 1st place in the list is [Transylmania](https://www.imdb.com/title/tt0936471/?ref_=nv_sr_1), where my personal bias of being Romanian and caring about the vampire myth is most obvious. The average IMDb rating is 3.9, I rated it a 9 and it's ok to sue me for that if you want. But there's just no way I'm not going to enjoy a comedy which claims Romanians use blue jeans as currency while being shot in the [Corvin castle](https://en.wikipedia.org/wiki/Corvin_Castle).

A special shout on this list goes to the Spanish thriller [Secuestrados](https://www.imdb.com/title/tt1629377/), which is one of the most tense thrillers I've seen and is also technically impecable, with some amazing editing throughout the film.

{{< figure src="/img/movies-underrated.png" class="article-image width-3-4" >}}

Longest movies watched is a rather simple widget on cinestat and is probably mostly irrelevant. The thing is, most of the longer movies are pretty popular and have had a pretty high budget. It's very atypical and improbable for a movie that gets to 3 hours in length to have a small budget. Therefore, the longer the movie, the higher the budget.

The list of longest movies that I watched is full of popular movies and seem to mostly fall in 2 categories:

* Biography / History: Schindler's List, Titanic, Pearl Harbor, The Wolf of Wall Street
* Fantasy: The Lord of the Rings: The Two Towers, The Lord of the Rings: The Return of the King, The Hateful Eight, The Green Mile

There's also Grindhouse which should, in my humble opinion, be considered as 2 separate titles.

{{< figure src="/img/movies-longest.png" class="article-image width-3-4" >}}

Last, but not least, the list of directors of the movies I watched doesn't provide too many surprises. Spielberg tops the list, with Tarantino, Nolan and Scorsese coming in 2nd, 3rd and 4th. The rest of the top 10 is filled with very popular names, with the only surprise being [Renny Harlin](https://www.imdb.com/name/nm0001317/?ref_=nv_sr_1), who I had shamefully not even heard of before building cinestat.

{{< figure src="/img/movies-directors.png" class="article-image width-3-4" >}}

The year a movie was released does tend to weigh quite a bit in my choice of choosing what to watch. I do appreciate older flicks and their influence in the evolution of the film industry, but I feel few of them aged properly. My biggest issue with older films is the sound mixing which usually feels pretty bad and unimmerseful.

Being born in 1990, I lean towards watching films made within my lifetime, as can be seen in the following chart generated through cinestat.

{{< chartjs id="movies-year-release" data="/static/js/data/movies-year-release.js" >}}

The number of movies watched each year really depends on having rated a movie immediately after watching it, which I unfortunately only started doing in mid-2007. The spike of movies "watched" in 2007 is caused by my decision in March of that year to start religiously keep track of what I watch. I spent a couple of days of that month going through IMDb and rated movies that I knew for sure I had previously seen.

The inaccuracy of ratings given in that particular month is pretty annoying as it can skew the data considerably. That's because of the abnormally large number of movies qualified as watched in that month but also because of not having had rated movies right after seeing them. This is therefore both a quantity and a quality problem that can't be fixed.

It's also worth noting there's a couple of movies that I've seen twice but I have never updated their original rating.

{{< chartjs id="movies-year-watched" data="/static/js/data/movies-year-watched.js" >}}

The ratings I give are usually on the optimistic side, with the bell curve having a peak at a rating of 8. It's likely the overall IMDb average rating of films is lower, but I'm very picky of what I patch so it feels pretty normal for the bell curve to be situated on the higher range of the rating scale.

{{< chartjs id="movies-by-rating" data="/static/js/data/movies-by-rating.js" >}}

My favorite insight that I could determine from the ratings export that IMDb provides is what the best duration of a movie is.

I noticed that most of the movies I watch are between 90 and 110 minutes, which seems to be a pretty regular average duration. However, the ratings trend ascending - the longer a movie is, the higher the chances I rated it higher.

It appears the sweet-spot for a movie to be of my liking is between 160 and 169 minutes (2h40m - 2h50m). Anything longer and I become impatient.

{{< chartjs id="movies-by-duration" data="/static/js/data/movies-by-duration.js" >}}

[cinestat](https://cinestat.victor.avasiloaei.com) is free to use, [open source](https://github.com/victorelu/cinestat-frontend) and awaiting to be used!

Looking forward to hearing your thoughts, feedback and comments.