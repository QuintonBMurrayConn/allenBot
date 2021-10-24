///////////////////////////////

//what if user changes their name (probably dont need this if I just use their discord username)
//changes something about their profile
//maping DISCORD usersnames to nicknames in json 
//mappping functionality within json objects I think? users.map

//Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, 
//above intents are priviligied and will require verifying bot with discord

//move channel IDs to json
//keep track of channels being added/removed in that file

//////////////////////////////

const TOKEN = '';
const { users } = require('./users.json');


const { Client, Intents, InteractionCollector, Channel } = require('discord.js');
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILDS);



const client = new Client({ intents: myIntents });

var fs = require('fs');
var data = fs.readFile('users.json', () => {});
var parsedData = JSON.parse(data);


let usersJson = {
  "userName" : "",
  "Balance" : ""
}



usersJson["userName"] = "Quinton";
usersJson["Balance"] = "0";



//fs.writeFile('users.json', usersJson, () => {});




function onMessageReceived(message){
  if(message.content.includes("titans") || message.content.includes("Titans") || message.content.includes("titan") || message.content.includes("titans")){
    message.reply("No profanity. Go Bills!");
  }

}

function onMessageReceived2(message){
  if(message.content === 'josh'){
    message.reply('allen');
  }
  
}

function onClientReady(){
  console.log('Josh Allen is Online');
  const channel101 = client.channels.cache.find(channel => channel.id === "900198774129971202");
  //channel101.send("Josh is Online");

  client.on("messageCreate", (message) => onMessageReceived(message));
  client.on("messageCreate", (message) => onMessageReceived2(message));
}



client.once('ready', () => onClientReady());



client.login(TOKEN);
