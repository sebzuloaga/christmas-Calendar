import React from 'react';
import Gift from '../assets/gift.svg';

function DayOverview() {
    return (
        <main>
            <figure>
                <figcaption className="noShow">
                    <p><span>Hint:</span> We might not be rich, but we could be!</p>
                </figcaption>
                <img src={Gift} />
            </figure>
            <section>
                <aside className ="noShow">
                    <button>I want my gift!</button>
                </aside>
                <h1>The day is 7, the word is luck.</h1>
                <h3>7th of December of 2019</h3>
                <p>
                    You are a man with fine taste, and I wish that I was able to help out
                    get all those fancy things things that are on your list. Though I might
                    not be able to help you out with a lot of money, I would like to gift 
                    you 4 lotto tickets hoping that they might get you closer to crossing out 
                    some of the things on your list!
                </p>
                <blockquote>
                    <p className="phrase">
                        <span>Today's phrase:</span> If there are no winnings, they definitely
                        gave me the wrong tickets at the store...
                    </p>
                </blockquote>
            </section>
        </main>
    )
}

export default DayOverview;