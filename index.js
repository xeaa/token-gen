
//     /$$               /$$                                                                            
//    | $$              | $$                                                                            
//   /$$$$$$    /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$                       /$$$$$$   /$$$$$$  /$$$$$$$ 
//  |_  $$_/   /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$       /$$$$$$       /$$__  $$ /$$__  $$| $$__  $$
//    | $$    | $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$      |______/      | $$  \ $$| $$$$$$$$| $$  \ $$
//    | $$ /$$| $$  | $$| $$_  $$ | $$_____/| $$  | $$                    | $$  | $$| $$_____/| $$  | $$
//    |  $$$$/|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$                    |  $$$$$$$|  $$$$$$$| $$  | $$
//     \___/   \______/ |__/  \__/ \_______/|__/  |__/                     \____  $$ \_______/|__/  |__/
//                                                                         /$$  \ $$                    
//                                                                        |  $$$$$$/                    
//                                                                         \______/              

const config = require("./config.json");

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
	checkUpdate: false,
});
const chalk = require("chalk");
    console.clear();
  
    console.log(
      chalk.green.bold("\n     /$$               /$$                                                                            \n    | $$              | $$                                                                            \n   /$$$$$$    /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$                       /$$$$$$   /$$$$$$  /$$$$$$$ \n  |_  $$_/   /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$       /$$$$$$       /$$__  $$ /$$__  $$| $$__  $$\n    | $$    | $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$      |______/      | $$  \ $$| $$$$$$$$| $$  \ $$\n    | $$ /$$| $$  | $$| $$_  $$ | $$_____/| $$  | $$                    | $$  | $$| $$_____/| $$  | $$\n   |  $$$$/|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$                    |  $$$$$$$|  $$$$$$$| $$  | $$\n     \___/   \______/ |__/  \__/ \_______/|__/  |__/                     \____  $$ \_______/|__/  |__/\n                                                                         /$$  \ $$                    \n                                                                        |  $$$$$$/                    \n                                                                         \______/              "),          chalk.red.bold("Made by xea#5288\n"),
      chalk.red.bold("Made by xea#5288\n"),
    chalk.white.bold("*Xea is released of any liabilities which your usage may entail.")

    );
    console.log("\n");
    
    console.log(chalk.blueBright(`Starting generating...`));
  
const fs = require('fs');
function savetkn(token) {
    fs.appendFileSync('tokens.txt', token + '\n');
}
let trys = 0;
let generated = 0;
async function generate() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
    var charactersLength = characters.length;
    for ( var i = 0; i < 59; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    try{
      if(config.check == "true"){
        trys++;
        console.clear();
    
        console.log(
          chalk.green.bold("\n     /$$               /$$                                                                            \n    | $$              | $$                                                                            \n   /$$$$$$    /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$                       /$$$$$$   /$$$$$$  /$$$$$$$ \n  |_  $$_/   /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$       /$$$$$$       /$$__  $$ /$$__  $$| $$__  $$\n    | $$    | $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$      |______/      | $$  \ $$| $$$$$$$$| $$  \ $$\n    | $$ /$$| $$  | $$| $$_  $$ | $$_____/| $$  | $$                    | $$  | $$| $$_____/| $$  | $$\n   |  $$$$/|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$                    |  $$$$$$$|  $$$$$$$| $$  | $$\n     \___/   \______/ |__/  \__/ \_______/|__/  |__/                     \____  $$ \_______/|__/  |__/\n                                                                         /$$  \ $$                    \n                                                                        |  $$$$$$/                    \n                                                                         \______/              "),          chalk.red.bold("Made by xea#5288\n"),
        chalk.white.bold("*Xea is released of any liabilities which your usage may entail.")
  
        );
        console.log("\n");
        
        console.log(chalk.blueBright(`Starting generating...`));
        console.log(chalk.red.bold(" -> Try: " +trys), chalk.green.bold(" -> Generated: " +generated))
  
        await client.login(result)
        console.log(client.user.tag)
        savetkn(result)
        generated++;
        trys++;
        
        client.logout()
        generate()

      }else{

        trys++;
        
        savetkn(result)
        generated++;
        
        generate()
      }
      


    }
    catch{
      if(config.check == "true"){
        
      generate()
      }else{
      console.clear();
  
      console.log(
        chalk.green.bold("\n     /$$               /$$                                                                            \n    | $$              | $$                                                                            \n   /$$$$$$    /$$$$$$ | $$   /$$  /$$$$$$  /$$$$$$$                       /$$$$$$   /$$$$$$  /$$$$$$$ \n  |_  $$_/   /$$__  $$| $$  /$$/ /$$__  $$| $$__  $$       /$$$$$$       /$$__  $$ /$$__  $$| $$__  $$\n    | $$    | $$  \ $$| $$$$$$/ | $$$$$$$$| $$  \ $$      |______/      | $$  \ $$| $$$$$$$$| $$  \ $$\n    | $$ /$$| $$  | $$| $$_  $$ | $$_____/| $$  | $$                    | $$  | $$| $$_____/| $$  | $$\n   |  $$$$/|  $$$$$$/| $$ \  $$|  $$$$$$$| $$  | $$                    |  $$$$$$$|  $$$$$$$| $$  | $$\n     \___/   \______/ |__/  \__/ \_______/|__/  |__/                     \____  $$ \_______/|__/  |__/\n                                                                         /$$  \ $$                    \n                                                                        |  $$$$$$/                    \n                                                                         \______/              "),          chalk.red.bold("Made by xea#5288\n"),
        chalk.red.bold("Made by xea#5288\n"),
      chalk.white.bold("*Xea is released of any liabilities which your usage may entail.")

      );
      console.log("\n");
      
      console.log(chalk.blueBright(`Starting generating...`));
      console.log(chalk.red.bold(" -> Try: " +generated), chalk.green.bold(" -> Generated: " +generated))
      console.log("\n")
      console.log(chalk.green.bold("Finished generating " + generated + " Tokens"))
      console.log(chalk.yellow.bold("Join https://discord.gg/kPc4xkmJTY now!"))

      }
    }
  }

  generate()
    

     
