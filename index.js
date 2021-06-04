const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NzMwODk0MjEwOTExMzA1ODkx.XweIRw.nFNMBO1G6CCUyaXOdbSOKGceEA0';

client.on('message', msg => {
   const args = msg.content.split(' ');
   if (msg.content.startsWith('!')) {
      if(args[0] === '!vana') {
         msg.channel.send('Kdo se vysral do té vany <:patrikCD:695584938845798400>.');
      } else if(args[0].toLowerCase() === '!dick') {
            const num = Math.floor(Math.random() * 49) + 1;
            const message = `Velikost pérka ${msg.author.username} je ${num}cm`;
            msg.channel.send(message);
      } else if(args[0].toLowerCase() === '!ignite') {
         msg.channel.send('Jan Hus cosplay 🔥');
      } else if(args[0].toLowerCase() === '!morskymuz') {
         msg.channel.send('OCEAN MAN :ocean: :heart_eyes: Take me by the hand :raised_hand: lead me to the land that you understand :raised_hands: :ocean: OCEAN MAN :ocean: :heart_eyes: The voyage :bike: to the corner of the :earth_americas: globe is a real trip :ok_hand: :ocean: OCEAN MAN :ocean: :heart_eyes: The crust of a tan man :person_wearing_turban: imbibed by the sand :thumbsup: Soaking up the :sweat_drops: thirst of the land :100:');
      } else if (args[0].toLowerCase() === '!randomfact') {
         msg.channel.send(`${msg.author.username} je zasraný kokot`);
      }
   } else {
      if (msg.content.toLowerCase().includes('jhin')) {
         msg.reply(' podle xnapiho jsou to džíny ty píčo');
      }
      if (msg.content.toLowerCase().includes('akali')) {
         msg.reply(' podle xnapiho je to akaláj ty píčo');
      }
      if (msg.content.toLowerCase().includes('elise')) {
         msg.reply(' podle xnapiho je to Eliška ty píčo');
      }
      if (msg.content.toLowerCase().includes('gulag')) {
         msg.reply(' podle xnapiho je to guláš ty píčo');
      }
      if (msg.content.toLowerCase().includes('morello')) {
         msg.reply(' podle xnapiho je to morelláček ty píčo');
      }
      if (msg.content.toLowerCase().includes('rabadon')) {
         msg.reply(' podle Rouchala je to buřinka ty píčo');
      }
      if (msg.content.toLowerCase().includes('samira')) {
         msg.reply(' podle xnapiho je to simír ty píčo');
      }
      if (msg.content.toLowerCase().includes('sterak')) {
         msg.reply(' podle xnapiho je to stěrač ty píčo');
      }
      if (msg.content.toLowerCase().includes('yasuo')) {
         msg.reply(' podle xnapiho je to josef ty píčo');
      }
      if (msg.content.toLowerCase().includes('yone')) {
         msg.reply(' podle xnapiho je to jonáš ty píčo');
      }


   }
  if(msg.author.id === '353249112914788353' || msg.author.id === '353249112914788353') {
   if (msg.content.startsWith('/smazat')) {
      msg.channel.messages.cache.forEach(m => {
         if(m.author.id === client.user.id) {
            m.delete();
         }
      });
   }
}
})

client.login(token);