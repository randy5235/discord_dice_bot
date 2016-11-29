const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('./generator.js');


client.on('ready', () => {
  console.log('I am ready!');
  let id = client.channels.find("name","general").id;
  // console.log(client);
  let channel = client.channels.find('id', `${id}`);
  channel.sendMessage("Please type **/r help** for more information");
});

client.on('message', message => {
  if (message.content.match(/^\/r help$/)){
    message.reply(`Dice Roller accepts simple dice expressions starting with */r* followed by *d6* or *3d20* or *2d10+5*`);
  } else if (message.content.match(/^\/r.*/)) {
    message.reply(generator.diceRoller(message.content));
  }

});

client.login('MjUzMDIxNjY1MTg3OTg3NDU3.Cx6dCQ.R1vG4XmJy3dAOuacR0NxS7EkQGs');
