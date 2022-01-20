if((CMD_NAME === 'hug')){
			const hugged= message.mentions.members.first();

			var hugs = [
				"https://cdn.weeb.sh/images/Sk80wyhqz.gif",
				"https://cdn.weeb.sh/images/HkQs_dXPZ.gif",
				"https://cdn.weeb.sh/images/Hk4qu_XvZ.gif",
				"https://cdn.weeb.sh/images/r1kC_dQPW.gif",
				"https://cdn.weeb.sh/images/ry6o__7D-.gif",
				"https://cdn.weeb.sh/images/Hy4hxRKtW.gif",
				"https://cdn.weeb.sh/images/Sk2gmRZZG.gif",
			]

			var sendHugs = hugs[Math.floor(Math.random() * hugs.length)]
			
			if(hugged){
				const hugEmbed = new MessageEmbed()
				.setColor('BLURPLE')
				.setDescription(`**${message.author} HUGGED ${hugged.displayName} AWW <333**`)
				.setImage(sendHugs);

				message.channel.send({ embeds: [hugEmbed]}).catch(error => {
					message.channel.send(":x: Permission denied: Make sure giving me permission for sending embed messages!");
				});
			}

			else{
				message.channel.send(`${message.author} Sorry, You need to mention someone to hug!`);
			}
		}
