const Command = require("../../structures/Command.js");

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: "setprefix",
            enabled: true,
            aliases: [ "configprefix" ],
            clientPermissions: [ "EMBED_LINKS" ],
            permLevel: 2
        });
    }

    async run (message, args, data) {
        const prefix = args[0];
        if (!prefix) return message.error("config/setprefix:MISSING");
         if(prefix.length > 5) message.error("config/setprefix:TOOLONG");
        await data.guild.setPrefix(prefix);
        message.success("config/setprefix:SUCCESS");
    }
};
