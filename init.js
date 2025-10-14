const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("Connection established");
    })
    .catch((err) => {
        console.log(err);
    })

async function main()  {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
};

let allChats = [
    {
        from: 'yogesh',
        to: 'Jitesh',
        msg: "Let's play PUBG",
        created_at: new Date(),
    },
    {
    from : "anil",
    to : "surender",
    msg : "I'll not come tommorow",
    created_at : new Date()
    },
    {
    from : "sachin",
    to : "boby",
    msg : "Let's plan a trip to mountains!",
    created_at : new Date()
    },
    {
    from : "kapil",
    to : "lokesh",
    msg : "I hit 100Kg benchpress PR today!",
    created_at : new Date()
    },
    {
    from : "lalita",
    to : "manisha",
    msg : "Wanna play LUDO?",
    created_at : new Date()
    },
    {
    from : "mohit",
    to : "Self",
    msg : "I am a successful Trader and enjoying my life.",
    created_at : new Date()
    },
    {
    from : "bobby",
    to : "lokesh",
    msg : "So you have some weed?",
    created_at : new Date()
    }
];

Chat.insertMany(allChats);