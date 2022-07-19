const express = require('express')
const app = express()
const PORT = 8001

const bookTitle = {
    "lost" : {
        "title": 'We Could Be Heroes',
        "author": 'Mike Chen',
	    "genre": 'Science Fiction',
        "summary": 'Jamie woke up in an empty apartment with no memory and only a few clues to his identity, but with the ability to read and erase other people\'s memories—a power he uses to hold up banks to buy coffee, cat food and books. Zoe is also searching for her past, and using her abilities of speed and strength…to deliver fast food. And she will occasionally put on a cool suit and beat up bad guys, if she feels like it. When the archrivals meet in a memory-loss support group, they realize the only way to reveal their hidden pasts might be through each other. As they uncover an ongoing threat, suddenly much more is at stake than their fragile friendship. With countless people at risk, Zoe and Jamie will have to recognize that sometimes being a hero starts with trusting someone else—and yourself.'
    },
    "peaceful" : {
        "title": 'The Stars and the Blackness Between Them',
        "author": 'Junauda Petrus',
	    "genre": 'Young Adult and Urban Fantasy',
        "summary": "Trinidad. Sixteen-year-old Audre is despondent, having just found out she is going to be sent to live in America with her father because her strictly religious mother caught her with her secret girlfriend, the pastors daughter. Audre\'s grandmother Queenie (a former dancer who drives a white convertible Cadillac and who has a few secrets of her own) tries to reassure her granddaughter that she will not lose her roots, not even in some place called Minneapolis. “America have dey spirits too, believe me,” she tells Audre. <p>Minneapolis. Sixteen-year-old Mabel is lying on her bed, staring at the ceiling and trying to figure out why she feels the way she feels about her ex Terrell, about her girl Jada and that moment they had in the woods, and about the vague feeling of illness that is plagued her all summer. Mabel\'s reverie is cut short when her father announces that his best friend and his just-arrived-from-Trinidad daughter are coming for dinner. Mabel quickly falls hard for Audre and is determined to take care of her as she tries to navigate an American high school. But their romance takes a turn when test results reveal exactly why Mabel has been feeling low-key sick all summer and suddenly it is Audre who is caring for Mabel as she faces a deeply uncertain future. Junauda Petrus\'s debut brilliantly captures the distinctly lush and lyrical voices of Mabel and Audre as they conjure a love that is stronger than hatred, prison, and death and as vast as the blackness between the stars."
    },
    "adventurous" : {
        "title": 'Gods of Jade and Shadow',
        "author": 'Silvia Moreno-Garcia',
	    "genre": 'Historical Urban Fantasy',
        "summary": "The Jazz Age is in full swing, but Casiopea Tun is too busy cleaning the floors of her wealthy grandfather\'s house to listen to any fast tunes. Nevertheless, she dreams of a life far from her dusty small town in southern Mexico. A life she can call her own. Yet this new life seems as distant as the stars, until the day she finds a curious wooden box in her grandfather\'s room. She opens it—and accidentally frees the spirit of the Mayan god of death, who requests her help in recovering his throne from his treacherous brother. Failure will mean Casiopea\s demise, but success could make her dreams come true. In the company of the strangely alluring god and armed with her wits, Casiopea begins an adventure that will take her on a cross-country odyssey from the jungles of Yucatán to the bright lights of Mexico City—and deep into the darkness of the Mayan underworld."
    },
    "awkward" : {
        "title": 'Fangirl',
        "author": 'Rainbow Rowell',
	    "genre": 'Young Adult Fiction',
        "summary": "A coming-of-age tale of fanfiction, family, and first-love. Cath and her twin start college where Cath has to learn to be independent. She\'s got a surly roommate with a charming, always-around boyfriend; a fiction-writing professor who thinks fanfiction is the end of the civilized world; a handsome classmate who only wants to talk about words... and she can\'t stop worrying about her dad, who\'s loving and fragile and has never really been alone."
    },
    "anxious" : {
        "title": 'Finding Audrey',
        "author": 'Sophie Kinsella',
	    "genre": 'Young Adult Fiction',
        "summary": "Audrey can't leave the house. she can't even take off her dark glasses inside the house. Then her brother\'s friend Linus stumbles into her life. With his friendly, orange-slice smile and his funny notes, he starts to entice Audrey out again - well, Starbucks is a start. And with Linus at her side, Audrey feels like she can do the things she\'d thought were too scary. Suddenly, finding her way back to the real world seems achievable."
    },
    "lovesick" : {
        "title": 'Peony in Love',
        "author": 'Lisa See',
	    "genre": 'Historical Fiction',
        "summary": 'In seventeenth-century China, three women become emotionally involved with The Peony Pavilion, a famed opera rumored to cause lovesickness and even death, including Peony, the cloistered daughter of a wealthy scholar, who succumbs to its spell only to return after her death as a "hungry ghost" to haunt her former fiancé, who has married another.'
    },
    "mypick" : {
        "title": 'Erotic Stories for Punjabi Widows',
        "author": 'Balli Kaur Jaswal',
	    "genre": 'Mystery and Adult Fiction',
        "summary": 'Nikki lives in cosmopolitan West London, where she tends bar at the local pub. The daughter of Indian immigrants, she\’s spent most of her twenty-odd years distancing herself from the traditional Sikh community of her childhood, preferring a more independent (that is, Western) life. When her father\’s death leaves the family financially strapped, Nikki, a law school dropout, impulsively takes a job teaching a "creative writing" course at the community center in the beating heart of London’s close-knit Punjabi community. Because of a miscommunication, the proper Sikh widows who show up are expecting to learn basic English literacy, not the art of short-story writing. When one of the widows finds a book of sexy stories in English and shares it with the class, Nikki realizes that beneath their white dupattas, her students have a wealth of fantasies and memories. Eager to liberate these modest women, she teaches them how to express their untold stories, unleashing creativity of the most unexpected—and exciting—kind. As more women are drawn to the class, Nikki warns her students to keep their work secret from the Brotherhood, a group of highly conservative young men who have appointed themselves the community\’s "moral police." But when the widows\’ gossip offers shocking insights into the death of a young wife—a modern woman like Nikki—and some of the class erotica is shared among friends, it sparks a scandal that threatens them all.'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:title', (request, response)=>{
    const bookName =request.params.title.toLowerCase()
    if (bookTitle[bookName]){
        response.json(bookTitle[bookName])
    }else{
        response.json(bookTitle['mypick'])
    }

})

app.listen(PORT , ()=>{
    console.log(`The server is now running on ${PORT}.`)
})