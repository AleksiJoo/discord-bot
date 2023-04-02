const { Client, Events, GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const token = process.env.TOKEN

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.once(Events.ClientReady, e => console.log(`Logged in as ${e.user.tag}`))

client.login(token)