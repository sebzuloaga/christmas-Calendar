const calendarData = [
    {
        date: "01/12/2019",
        day: "1st",
        category: "Message",
        clue: 'Tune in on the 1st of December for the grand reveal!',
        title: 'Joshua\'s Christmas Calendar',
        description: `This is my gift to you Joshie. This Christmas I will not be in Australia.
                        I'm excited to see my family, but I am very sad I won't get to spend 
                        the time with you. I made this calendar to make it up to you. This 
                        calendar will give you something different every day so I can still 
                        be with you every day!`,
        phrase: 'A gift a day for Joshua.',
        opened: false
    },
    {
        date: "02/12/2019",
        day: "2nd",
        category: "Gift",
        clue: 'How to take care of Joshua...',
        title: 'Joshua\s Care Package',
        description: `I will be away for 3 weeks, and I can\'t have you getting sick or not having 
                        your essentials! I have prepared a small care package so that I am sure you 
                        will be covered at least for a little bit. It is a weird mix of things to be 
                        added to a care package, function over form here.`,
        phrase: 'Bring some popcorn stat!',
        opened: false
    },
    {
        date: "03/12/2019",
        day: "3rd",
        category: "Message",
        clue: 'Across the Pacific...',
        title: 'A message from the plane',
        description: `Today I am getting on the flight back to Ecuador and I will be sad to not see you 
                        for a while, but I also will be thinling of the many trips that are in our future.
                        I want to go to Japan and New Zealand with you. Take you to the UK so you can see
                        Simon, maybe Fiji, endless possibilities!`,
        phrase: 'Can we become part of the mile high club one day?',
        opened: false
    },
    {
        date: "04/12/2019",
        day: "4th",
        category: "Message",
        clue: 'Jetlag...',
        title: 'Still Flying!',
        description: `Believe it or not, I am probably still on an airport or airplane. Not much to say 
                        aside from the fact that I am probably very tired and that I am wishing you would 
                        be sitting next to me on the plane so I could rest my head on your shoulder. Hope 
                        are having a wonderful Wednesday!`,
        phrase: 'I farted a lot on the plane',
        opened: false
    },
    {
        date: "05/12/2019",
        day: "5th",
        category: "Message",
        clue: 'La tierra donde naci...',
        title: 'Welcome to Ecuador!',
        description: `I am home! But let's be honest, I am probably napping with the air con turned on.
                        Prepare yourself for my mediocre photgraphy skills as I try to show you a little
                        bit of Ecuador (mainly the food of course). Maybe one day you might be able to see 
                        all of it in real life.`,
        phrase: 'It is f**cking hot here!',
        opened: false
    },
    {
        date: "06/12/2019",
        day: "6th",
        category: "Gift",
        clue: 'May luck be in your side today...',
        title: 'Will Joshua live the life?',
        description: `Something really funny that we have been doing lately is playing the lottery. It's 
                        not something I imagined myself doing, but it's something we started doing together 
                        and that makes it great. So here are two lotto tickets, one for you and one for me 
                        so we can try to live the life!`,
        phrase: 'Money, Dick, Power!',
        opened: false
    },
    {
        date: "07/12/2019",
        day: "7th",
        category: "Message",
        clue: 'Long distance communication...',
        title: 'New Phone who dis?',
        description: `This is just a friendly reminder that if we have not arranged a video chat yet, we
                        definitely should. Time difference can be am evil bitch, but who needs sleep 
                        anyways`,
        phrase: `Sorry if I fall asleep over video chat!`,
        opened: false
    },
    {
        date: "08/12/2019",
        day: "8th",
        category: "Message",
        clue: 'One more of these, we are at three now...',
        title: 'Happy three months!',
        description: `It did not come to my attention until recently that people in Australia do not 
                        necessarily celebrate months inside of a relationship, but this is actually 
                        very normal back in Ecuador. We don't need a big celebration, but I do like to 
                        bring up another wonderful month with you <kiss kiss>`,
        phrase: 'A quarter of a year! Our relationship is old!',
        opened: false
    },
    {
        date: "09/12/2019",
        day: "9th",
        category: "IOU",
        clue: 'Take of your clothes and put the a towel on...',
        title: `A massage for Joshua`,
        description: `Closing the year, I bet it must be really stressful on you. So this is me trying 
                        to help out. I can't do anything while I am not there, but I would like to extend 
                        this offer for a 20 minute back and shoulders massage as soon as I come back. Some 
                        rules apply (rules TBD)!`,
        phrase: 'This is mainly so I can rub your muscles.',
        opened: false
    },
    {
        date: "10/12/2019",
        day: "10th",
        category: "Gift",
        clue: 'Time to get a bit slutty...',
        title: 'Lightning Sluggers',
        description: `I wouldn't tease you about these cute swim briefs and then not give them to you! Also 
                        I would not pass the opportunity to see you wearing them as well. I am not there to 
                        see you wear them for the first time, but I request you go to a pool / beach and that 
                        you take photos and send them to me (this is an order)`,
        phrase: 'Release your inner pool slut',
        opened: false
    },
    {
        date: "11/12/2019",
        day: "11th",
        category: "Message",
        clue: 'P.S ...',
        title: 'I love you!',
        description: 'That is all! Not much to say today!',
        phrase: `Coming up with 25 things for each was hard!`,
        opened: false
    },
    {
        date: "12/12/2019",
        day: "12th",
        category: "Message",
        clue: 'A place for friends',
        title: 'Meeting friends',
        description: `I am looking forward to next year, when we will be able to keep meetings each others'
                        friends. Why you may ask? Well I am still wanting to find out all of those stories 
                        I keep hearing about. Maybe you might find some stories from my friends... that is 
                        if I allow it.`,
        phrase: 'Friends know how to best embarras you',
        opened: false
    },
    {
        date: "13/12/2019",
        day: "13th",
        category: "Gift",
        clue: 'More space for you...',
        title: `Joshua's spot in my room`,
        description: `You are the holder of a massage gift certificate to be redeemed to alleviate stress. 
                        However, if we really want to better address things. It is time for Joshua to stop 
                        carrying so many things around, so now I am happy to offer you more space in my room 
                        for you to keep things here.`,
        phrase: 'We get to be disoragnised togeher now!',
        opened: false
    },
    {
        date: "14/12/2019",
        day: "14th",
        category: "Message",
        clue: 'More to come...',
        title: 'The Christmas keeps on giving!',
        description: `It is getting closer to Christmas, which means the frequency of gifts is going up! 
                        I know, I know. You said"Sebastian, don't spend too much money on me. But where is 
                        the fun in that? I love giving you presents and surprising you, because you are 
                        definitely worth it.`,
        phrase: 'Treat yo self, or better yet let Seb do it.',
        opened: false
    },
    {
        date: "15/12/2019",
        day: "15th",
        category: "Gift",
        clue: `You get home, but don't want to cook...`,
        title: 'Uber great!',
        description: `TWe have a lot of food when we are together... like a lot. Often we have it from 
                        Uber Eats. While I am not today, I still want to treat you to a solid meal that will 
                        leave you full! Don't forget the dessert. The gift card also works with normal Ubers 
                        in case yo were wanting to avoid the sun when going to Hames Street`,
        phrase: 'Food = happiness',
        opened: false
    },
    {
        date: "16/12/2019",
        day: "16th",
        category: "Message",
        clue: 'When in Ecuador for Christmas...',
        title: '4 Sundays before Christmas',
        description: `I think I have mentioned this to you, but 4 Sundays before Christmas my family gathers 
                        together on one of my aunts / uncles houses and we celebrate together. Now, you may 
                        not be able to be here for this one but I can't wait for you to be involved and for us 
                        to make our own Christmas traditions`,
        phrase: `It's the most wonderful time, of the year`,
        opened: false
    },
    {
        date: "17/12/2019",
        day: "17th",
        category: "IOU",
        clue: 'In a Galaxy Far Far Away...',
        title: 'Star Wars Episode 9 Tix!',
        description: `The new movie is coming out soon, and I want to watch it with you. I do not have 
                        availability at hand and could not ask it to keep the surprise, but I owe you 
                        a full movie experiences when we are back together in Brisbane! Disclaimer: I 
                        might watch the moie in Ecuador so you can watch it before without me as well!`,
        phrase: 'Do or do not, there is no try!',
        opened: false
    },
    {
        date: "18/12/2019",
        day: "18th",
        category: "Message",
        clue: 'You tell me...',
        title: 'Receiving is also good!',
        description: `I will be honest, this giving thing is a bit exhausting. For this day, I am 
                        actuallu not going to give you anything and instead I want you to send me the 
                        sweetest message you can think of. The catch is that it is Twiter style, limited 
                        to 140 characters! No pressure!`,
        phrase: 'Tell me more, tell me more, how much dough did he spend?',
        opened: false
    },
    {
        date: "19/12/2019",
        day: "19th",
        category: "Gift",
        clue: 'Work it real good...',
        title: 'Tank top',
        description: `Another excuse to get Joshua to show his muscles. I have procured a nice little tank 
                        top for you. Not to worry! It is not of a colour you already have, and I must admit 
                        I wanted to get a medium sized one so that it fit me as well but I went with the 
                        small because I am a nice boyfriend`,
        phrase: 'Suns out, guns out!',
        opened: false
    },
    {
        date: "20/12/2019",
        day: "20th",
        category: "Message",
        clue: 'I am full...',
        title: 'Christmas belly',
        description: `I have to inform you, that it is extremely possible that at this stage I may have a 
                        Christmas belly. I request assitance when I am back in Brisbane to shed the 
                        Christmas food off. Thank you very much.`,
        phrase: 'Eat all the foods',
        opened: false
    },
    {
        date: "21/12/2019",
        day: "21st",
        category: "Message",
        clue: 'Thank you...',
        title: 'Being Grateful!',
        description: `Anoter Sunday approaches which means more family time. Sometimes as part of the 
                        traditions, every member of the family says something that they are grateful for. 
                        At this moment I am very grateful that I met you and that I have grown to love 
                        you so much!`,
        phrase: 'Thank you x1000',
        opened: false
    },
    {
        date: "22/12/2019",
        day: "22nd",
        category: "IOU",
        clue: 'Step aside Netflix...',
        title: 'Disney+',
        description: `Now, this is not so much a gift for you, but you will benefit from it. I am planning 
                        on getting a Disney+ subscription, which means that there is endless new movies and 
                        shows we will be able to watch (including "The Mandalorian"!) Get ready for snuggle 
                        time Mr. (sweaty snuggles cause it will be warm).`,
        phrase: '',
        opened: false
    },
    {
        date: "23/12/2019",
        day: "23rd",
        category: "Message",
        clue: 'Call me maybe...',
        title: 'Another chat!',
        description: 'Nothing much happening today, just proposing another video call!',
        phrase: 'Miss you!',
        opened: false
    },
    {
        date: "24/12/2019",
        day: "24th",
        category: "Gift",
        clue: 'Picture perfect...',
        title: 'Photo frame',
        description: `I recently just told you what my favorite picture of you is. While 
                        we do not have a lot of pictures together, I still have a favorite one. The one we 
                        took in the Gold Coast because we were lame and said "we actually haven't taken any 
                        pictures together!". I will forever remember that moment!`,
        phrase: 'You look great in pictures!',
        opened: false
    },
    {
        date: "25/12/2019",
        day: "25th",
        category: "Message",
        clue: 'The day is here...',
        title: 'Christmas Day',
        description: `I love you and I hope you are having the nicest Christmas ever Joshua! Can't wait to 
                        be back and hug you and kiss you. I am looking forward to a 2020 filled with special 
                        momemnts. 2019 brought me to you, and I can't wait for what's to come now!`,
        phrase: 'Here is to a 2020 filled with happiness',
        opened: false
    },
    {
        date: "26/12/2019",
        day: "26th",
        category: "Message",
        clue: 'Bonus...',
        title: 'Coming Back Bitch!',
        description: `Just wanted to let you know that by the time you wake up on the 27th I will be one my 
                        way back :)`,
        phrase: `Can't stay away for too long!`,
        opened: false
    }
]

export default calendarData;