const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();
const ms = require('ms');


client.on("message", async message => {

  client.user.setPresence({ activity: { name: '$help' }, status: 'online' })
 if(message.author.bot) return;


 if (message.content.toLowerCase() === `${prefix}inputtest`) {
    message.channel.send("output");
  }

 if (message.content.toLowerCase() === `${prefix}wsib`) {
    message.channel.send("Want purchase advice for your next iOS device? It's best to head over to <#722186483699810345> so that your question doesn't get lost in chat!");
  }


  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];

  if (cmd === 'blacklist'){
       if(message.member.hasPermission('MUTE_MEMBERS')){
         var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
         if(!args[0]) return message.channel.send('Specify a user.')
         let role = message.guild.roles.cache.find(role => role.name === "Support Blacklist");
         if (!role) return message.channel.send('Couldn\'t find the blacklist role')
         let time = args[1];
         if (!time) {
             return message.channel.send('Specify a duration.');
         }
         member.roles.add(role.id);
         message.channel.send(`**${member.user.tag}** has been blacklisted from the Genius Bar for ${ms(ms(time))}`)
         setTimeout( function () {
             member.roles.remove(role.id);
             message.channel.send(`**${member.user.tag}** is no longer blacklisted from the Genius Bar.`)
         }, ms(time));
       } else {
           return message.channel.send(`Permissions available.`)
       }

  }

  if (cmd === 'clear'){
    if(message.member.hasPermission('MUTE_MEMBERS')){
      var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!args[0]) return message.channel.send('Specify a user.')
      let role = message.guild.roles.cache.find(role => role.name === "Support Blacklist");
      if (!role) return message.channel.send('Couldn\'t find the blacklist role')
      member.roles.remove(role.id);
      message.channel.send(`**${member.user.tag}** is no longer blacklisted from the Genius Bar.`)
}
}

// HELP COMMANDS

// CENTRAL HELP

 if (message.content.toLowerCase() === `${prefix}help`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "Genius Assistant",
      fields: [{
          name: "All help topics:",
          value: "\n`$help ios` \n`$help mac` \n`$help ipod` \n`$help iphone` \n`$help jailbreak` \n`$help other`\n\n[Support Server](https://discord.gg/iphone) | [Docs](https://discord.gg/iphone)"
        }
      ],
      footer: {
        text: "By tank#0001 | Build 0X8902"
    }
  }
});
}

// IPOD

if (message.content.toLowerCase() === `${prefix}help ipod`) {
  message.channel.send({embed: {
    color: 14723837,
    title: "iPod Assistance",
    fields: [{
        name: "All iPod commands:",
        value: "\n`$ipod classic [GEN]`\n`$ipod mini [GEN]`\n`$ipod nano [GEN]`\n`$ipod shuffle [GEN]`\n`$ipod touch [GEN]`\n`$ipod timeline`\n\n Ex: `$ipod shuffle 3`"
      }
    ],
    footer: {
      text: "$help for main menu"
  }
}
});
}

if (message.content.toLowerCase() === `${prefix}fortnite`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "Epic v. Apple",
      fields: [{
          name: "1. Epic's lawsuit",
          value: "Apple, Inc. removed Epic Games' *Fortnite* following a breach of contract and App Store guidelines. Epic proceeded by filing a [complaint for injunctive relief](https://cdn2.unrealengine.com/apple-complaint-734589783.pdf), citing the 30% \"tax\" on Apps & In-App-Purchases (IAPS)."
        },
        {
         name: "2. Epic's Developer Account Termination",
         value: "Following a breach of contract, Apple has given Epic Games notice to comply with universal guidelines or have Epic's [Developer Account](https://developer.apple.com/) terminated. Epic followed this with a [motion for a temporary restraining order](https://cdn2.unrealengine.com/epic-v-apple-8-17-20-768927327.pdf)."
        },
        {
         name: "What should I believe?",
         value: "1. [App stores, trust and anti-trust (Benedict Evans)](https://www.ben-evans.com/benedictevans/2020/8/18/app-stores)\n2. [Apple's Developer Program License Agreement (John Gruber)](https://daringfireball.net/linked/2020/08/17/apple-developer-program-license-agreement)"
      }
        
      ],
      footer: {
        text: "Spamming \#FreeFortnite will result in a ban."
    }
  }
  });
  }

// IOS

 if (message.content.toLowerCase() === `${prefix}help ios`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iOS Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat"
        },
        {
         name: "Guide help topics:",
         value: "\n`$ios 2fa` - iOS 2FA\n`ios bypass` - iCloud bypass\n`$ios backuprestore` - Restore from backup\n`$ios faceid` - iOS Face ID\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios faceid guide`"
      }
        
      ],
      footer: {
        text: "Build 0X8902"
    }
  }
  });
  }

// MAC

 if (message.content.toLowerCase() === `${prefix}help mac`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "macOS Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$macOS` - macOS version\n`$mac beta` - should I install?\n`$mac battery` - Battery health\n`$mac bootcamp` - macOS Bootcamp\n`$mac SMC` - reset SMC\n`$mac shortcuts` - Accessibility\n`$mac thunderbolt` - Thunderbolt 3\n`$mac applecare` - AppleCare!`$mac displays` - Display mirroring\n`$mac GPU` - GPU & eGPU\n`$mac nvram` - NVRAM reset\n`$mac migration` - Migration Assistant\n`$mac recovery` - macOS Recovery\n`$mac reinstall` - macOS Reinstall\n`$mac restore` - macOS Restore\n`$mac storage` - Storage trimming\n`$mac timemachine` - Time Machine"
        }
      ],
      footer: {
        text: "$help for main menu"
    }
  }
  });
  }

// IPHONE

 if (message.content.toLowerCase() === `${prefix}help iphone`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "Archive",
      fields: [{
          name: "iPhones (1)",
          value: "\n`$iPhone 5S`\n`$iPhone 6`\n`$iPhone 6 Plus`\n`$iPhone iPhone 6S`\n`$iPhone 6S Plus`\n`$iPhone SE`\n`$iPhone 7`\n`$iPhone 7 Plus`\n`$iPhone 8`\n",
          inline: true
        },
        {
          name: "iPhones (2)",
          value: "\n`$iPhone 8 Plus`\n`$iPhone X`\n`$iPhone XS`\n`$iPhone XS Max`\n`$iPhone XR`\n`$iPhone 11`\n`$iPhone 11 Pro`\n`$iPhone 11 Pro Max`\n`$iPhone SE 2020`\n",
          inline: true
        },
        {
          name: "Available Information",
          value: "Contains: Model No. (`AXXXX`), Release Dates, Storage Options\n& Colour Options. Use `$iPhone DFU` for a DFU guide.\nWiki links contain known hardware issues.",
        },
        {
          name: "iPhone Battery & Screen Repair Costs",
          value: "For battery repair costs, type `$iphone battery xy`\nFor screen repair costs, type `$iphone screen xy`\nReplace `xy` with your country code (e.g. `us`, `gb`).",
        }
      ],
      footer: {
        text: "$help for main menu"
    }
  }
  });
  }

  // JAILBREAK

 if (message.content.toLowerCase() === `${prefix}help jailbreak`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "Jailbreak Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$jailbreak` - jailbreak info\n`$checkrain` - checkra1n tool\n`$uncover` - unc0ver tool"
        }
      ],
      footer: {
        text: "$help for main menu"
    }
  }
  });
  }

  // OTHER

 if (message.content.toLowerCase() === `${prefix}help other`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "Genius",
      fields: [{
          name: "Miscellaneous",
          value: "\n`$info`\n`$help`\n`$version`\n`$invite`\n`$credits`"
        }
      ],
      footer: {
        text: "$help for main menu"
    }
  }
  });
  }


 if (message.content.toLowerCase() === `${prefix}samsscreenrepair`) {
    message.channel.send("Whether you've cracked your iPhone screen, need help setting up some new tech, or just need some advice, we've got you covered. We'll pick up your device or repair it right in front of you! Visit **Sam's Screen Repair** @ <https://www.samsscreenrepair.com/> and <https://www.instagram.com/samsscreenrepair/>");
  }

// ALL IOS COMMANDS ($ios command)


 if (message.content.toLowerCase() === `${prefix}ios bypass guide`) {
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

 if (message.content.toLowerCase() === `${prefix}ios passcode`) {
    message.channel.send("For better security, set a passcode that needs to be entered to unlock iPhone when you turn it on or wake it. Setting a passcode turns on data protection, which encrypts your iPhone data with 256-bit AES encryption. (Some apps may opt out of using data protection.) <https://support.apple.com/en-ca/guide/iphone/iph14a867ae/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios faceid`) {
    message.channel.send("Use Face ID (supported models: ) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by simply glancing at your iPhone. To use Face ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph6d162927a/ios>");
  }
  
 if (message.content.toLowerCase() === `${prefix}ios touchid`) {
    message.channel.send("Use Touch ID (supported models) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by pressing the Home button with your finger or thumb. To use Touch ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph672384a0b/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios 2fa`) {
    message.channel.send("Two-factor authentication helps prevent others from accessing your Apple ID account, even if they know your Apple ID password. Two-factor authentication is built into iOS 9, iPadOS 13, OS X 10.11, or later. <https://support.apple.com/en-ca/guide/iphone/iphd709a3c46/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios alock`) {
    message.channel.send("See <https://support.apple.com/en-us/HT201441>. If the __Activation Lock__ placed on a device you have purchased or one that has come into your possession **cannot** be removed by the previous owner, you must contact AppleCare with the appropriate documentation. ");
  }

 if (message.content.toLowerCase() === `${prefix}ios appdl`) {
    message.channel.send("If you want to update apps, you can update them manually or turn on automatic updates (<https://support.apple.com/en-ca/HT202180>) But if your app won't update or is interrupted while it's downloading, try the steps at <https://support.apple.com/en-us/HT207165>.");
  }
  
 if (message.content.toLowerCase() === `${prefix}ios ar`) {
    message.channel.send("Account recovery is a process designed to get you back into your Apple ID account when you don’t have enough information to reset your password. For security reasons, it might take several days or longer before you can use your account again. <https://support.apple.com/en-us/HT204921>");
  }

 if (message.content.toLowerCase() === `${prefix}ios backuprestore`) {
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

 if (message.content.toLowerCase() === `${prefix}ios battery`) {
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded (Apple recommendation) \n\n*From experience this seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }

 if (message.content.toLowerCase() === `${prefix}ios bypass`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

 if (message.content.toLowerCase() === `${prefix}ios bypasshack`) {
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

 if (message.content.toLowerCase() === `${prefix}ios downgrade`) {
    message.channel.send("iOS Developer & Public __Betas__ can be uninstalled by following the instructions at <https://support.apple.com/en-us/HT203282#beta>. An __iCloud backup__ is highly recommended.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone dfu`) {
    message.channel.send("**DFU** or **Device Firmware Upgrade** mode allows all devices to be restored from any state. Learn more how to enter DFU mode on any device at <https://www.theiphonewiki.com/wiki/DFU_Mode>");
  }

 if (message.content.toLowerCase() === `${prefix}ios dfu`) {
    message.channel.send("**DFU** or **Device Firmware Upgrade** mode allows all devices to be restored from any state. Learn more how to enter DFU mode on any device at <https://www.theiphonewiki.com/wiki/DFU_Mode>");
  }


 if (message.content.toLowerCase() === `${prefix}ios factoryrestore`) {
    message.channel.send("A __factory restore__ erases the information and settings on your iPhone, iPad, or iPod and installs the latest version of iOS, iPadOS, or iPod software. Follow the steps at <https://support.apple.com/en-us/HT201252>.");
  }

 if (message.content.toLowerCase() === `${prefix}ios other`) {
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finder as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
  }

 if (message.content.toLowerCase() === `${prefix}ios beta`) {
    message.channel.send("Sign up for the **iOS 14 Developer & Public Betas** at <https://beta.apple.com/sp/betaprogram/>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 5s`) {
    message.channel.send("The **iPhone 5S** (`A1457 (Middle East); A1518, A1528 (China); A1530 (Asia Pacific); A1533 (North America, China); A1453 (North America, Japan)`) is Apple's 7th Generation smartphone released on **September 20, 2013**. Predecessor: **iPhone 5**, Successor: **iPhone 6, iPhone 6 Plus**. Colours: Space Gray, Silver, Gold. Storage configurations: 16, 32, 64 GB. <https://en.wikipedia.org/wiki/IPhone_5S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6`) {
    message.channel.send("The **iPhone 6** (`A1549 (North America);  A1586 (Global);  A1589 (China)`) is Apple's 8th Generation smartphone released on **September 19, 2014**. Predecessor: **iPhone 5S, iPhone 5C**, Successor: **iPhone 6S, iPhone 6S Plus**. Colours: Space Grey, Silver, Gold. Storage configurations: 16, 32, 64, 128 GB. <https://en.wikipedia.org/wiki/IPhone_6>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6 plus`) {
    message.channel.send("The **iPhone 6 Plus** (`A1522 (North America);  A1524 (Global);  A1593 (China)`) is Apple's 8th Generation smartphone released on **September 19, 2014**. Predecessor: **iPhone 5S, iPhone 5C**, Successor: **iPhone 6S, iPhone 6S Plus**. Colours: Space Grey, Silver, Gold. Storage configurations: 16, 64, 128 GB. <https://en.wikipedia.org/wiki/IPhone_6>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6s`) {
    message.channel.send("The **iPhone 6S** (`A1633 (North America) A1688 (International) A1700 (China)`) is Apple's 9th Generation smartphone released on **September 25, 2015**. Predecessor: **iPhone 6, iPhone 6 Plus**, Successor: **iPhone 7, iPhone 7 Plus**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_6S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6s plus`) {
    message.channel.send("The **iPhone 6S Plus** (`A1634 (North America) A1687 (International) A1699 (China)`) is Apple's 9th Generation smartphone released on **September 25, 2015**. Predecessor: **iPhone 6, iPhone 6 Plus**, Successor: **iPhone 7, iPhone 7 Plus**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_6S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone se`) {
    message.channel.send("The **iPhone SE** (`A1662 (US model) A1723 (Sprint and in most countries) A1724 (China Mobile model)`) is Apple's 9th Generation smartphone released on **March 31, 2016**. Predecessor: **iPhone 5S**, Successor: **iPhone SE**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_SE_(1st_generation)>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 7`) {
    message.channel.send("The **iPhone 7** & **iPhone 7 Plus** are plagued with multiple issues that make it a less than economic choice in the current phone climate. It's affected by these __two issues__: \n\n__1__) '**No Service**' recall, which you can read about at <https://support.apple.com/iphone-7-no-service>. This recall is about to expire, leaving many people soon to have to pay for their own repair. \n\n__2__) The poor design of the iPhone 7 has caused a **defect with the Audio IC**, causing it to become separated from the board. This could result in loss of multiple  audio features such as calls, speaker phone, voice memos, Siri, etc. The difference between this issue and the last is that Apple refuses to recognize the design flaw, and on top of that, even if you get it repaired, it will happen again. There is __no permanent solution__. \n\n*In short, if you're looking for a budget solution, the iPhone SE 2020 or a used iPhone 8 is an infinitely better choice for your money.*\n\n[The **iPhone 7** (`A1660 (with Qualcomm modem) A1778 (with Intel modem)  A1779 (sold in Japan)`) is Apple's 10th Generation smartphone released on **September 16, 2016**. Predecessor: **iPhone 6S, iPhone 6S Plus**, Successor: **iPhone 8, iPhone 8 Plus**. Colours: Black, Jet Black, Silver, Gold, Rose Gold, (Product) RED. Storage configurations: 32, 128, or 256 GB. <https://en.wikipedia.org/wiki/IPhone_7>.]");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 7 plus`) {
    message.channel.send("The **iPhone 7** & **iPhone 7 Plus** are plagued with multiple issues that make it a less than economic choice in the current phone climate. It's affected by these __two issues__: \n\n__1__) '**No Service**' recall, which you can read about at <https://support.apple.com/iphone-7-no-service>. This recall is about to expire, leaving many people soon to have to pay for their own repair. \n\n__2__) The poor design of the iPhone 7 has caused a **defect with the Audio IC**, causing it to become separated from the board. This could result in loss of multiple  audio features such as calls, speaker phone, voice memos, Siri, etc. The difference between this issue and the last is that Apple refuses to recognize the design flaw, and on top of that, even if you get it repaired, it will happen again. There is __no permanent solution__. \n\n*In short, if you're looking for a budget solution, the iPhone SE 2020 or a used iPhone 8 is an infinitely better choice for your money.*\n\n[The **iPhone 7 Plus** (`A1661 (with Qualcomm modem) A1784 (with Intel modem)  A1785 (sold in Japan)`) is Apple's 10th Generation smartphone released on **September 16, 2016**. Predecessor: **iPhone 6S, iPhone 6S Plus**, Successor: **iPhone 8, iPhone 8 Plus**. Colours: Black, Jet Black, Silver, Gold, Rose Gold, (Product) RED. Storage configurations: 32, 128, or 256 GB. <https://en.wikipedia.org/wiki/IPhone_7>.]");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 8`) {
    message.channel.send("The **iPhone 8** (`A1863 (with Qualcomm modem) A1905 (with Intel modem) A1906 (sold in Japan)`) is Apple's 11th Generation smartphone released on **September 22, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone X, iPhone SE 2020**. Colours: Space Gray, Silver, Gold, (Product) RED. Storage configurations: 62, 128, 246 GB [Discontinued 09/10/19]. <https://en.wikipedia.org/wiki/IPhone_8>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 8 plus`) {
    message.channel.send("The **iPhone 8 Plus** (`A1864 (with Qualcomm modem) A1897 (with Intel modem) A1898 (sold in Japan)`) is Apple's 11th Generation smartphone released on **September 22, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone X, iPhone SE 2020**. Colours: Space Gray, Silver, Gold, (Product) RED. Storage configurations: 62, 128, 246 GB [Discontinued 09/10/19]. <https://en.wikipedia.org/wiki/IPhone_8>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone x`) {
    message.channel.send("The **iPhone X** (`A1865 (with Qualcomm modem) A1901 (with Intel modem) A1902 (sold in Japan`) is Apple's 11th Generation smartphone released on **November 3, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone XS, iPhone XS Max**. Colours: Space Gray, Silver. Storage configurations: 64, 256 GB. <https://en.wikipedia.org/wiki/IPhone_X>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone xs`) {
    message.channel.send("The **iPhone XS** (`A1920, A2097, A2098 (Japan), A2100 (China)`) is Apple's 12th Generation smartphone released on **September 21, 2018**. Predecessor: **iPhone X**, Successor: **iPhone 11 Pro, iPhone 11 Pro Max**. Colours: Silver, Space Gray, Gold. Storage configurations: 64, 256, or 512 GB. <https://en.wikipedia.org/wiki/IPhone_XS>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone xs max`) {
    message.channel.send("The **iPhone XS Max** (`A1921, A2101, A2102 (Japan), A2104 (China)`) is Apple's 12th Generation smartphone released on **September 21, 2018**. Predecessor: **iPhone X**, Successor: **iPhone 11 Pro, iPhone 11 Pro Max**. Colours: Silver, Space Gray, Gold. Storage configurations: 64, 256, or 512 GB. <https://en.wikipedia.org/wiki/IPhone_XS>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone xr`) {
    message.channel.send("The **iPhone XR** (`A1984 A2105 A2106 (Sold in Japan) A2107 (Sold in China) A2108 (Sold in China, Hong Kong and Macao)`) is Apple's 12th Generation smartphone released on **October 26, 2018**. Predecessor: **iPhone 8, iPhone 8 Plus**, Successor: **iPhone 11**. Colours: Black, White, Blue, Yellow, Coral, (Product) RED. Storage configurations: 64, 128, 256 GB [Discontinued 09/10/19]. <https://www.apple.com/ca/shop/buy-iphone/iphone-xr>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone 11`) {
    message.channel.send("The **iPhone 11** (`A13 Bionic`) is Apple's 13th Generation smartphone released on **September 20, 2019**. Predecessor: **iPhone XR**, Successor: **None**. Colours: Black, White, Purple, Yellow, Gree, (Product) RED. Storage configurations: 64, 128, or 256 GB. <https://www.apple.com/ca/iphone-11/>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone 11 pro`) {
    message.channel.send("The **iPhone 11 Pro** (`A2160 A2217 A2215`) is Apple's 13th Generation smartphone released on **September 20, 2019**. Predecessor: **iPhone XS, iPhone XS Max**, Successor: **None**. Colours: Silver, Space Gray, Gold, Midnight Green. Storage configurations: 64, 256, or 512 GB. <https://www.apple.com/ca/iphone-11-pro/>.");
  }
  
  if (message.content.toLowerCase() === `${prefix}iphone 11 pro max`) {
    message.channel.send("The **iPhone 11 Pro Max** (`A2161 A2220 A2218`) is Apple's 13th Generation smartphone released on **September 20, 2019**. Predecessor: **iPhone XS, iPhone XS Max**, Successor: **None**. Colours: Silver, Space Gray, Gold, Midnight Green. Storage configurations: 64, 256, or 512 GB. <https://www.apple.com/ca/shop/buy-iphone/iphone-11-pro>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone se 2020`) {
    message.channel.send("The **iPhone SE 2020** (`A2275 (United States/Canada) A2296 (Global) A2298 (China)`) is Apple's 13th Generation smartphone released on **April 24, 2020**. Predecessor: **iPhone SE (1st Gen)**, Successor: **None**. Colours: Black, White, (Product) RED. Storage configurations: 64, 128, or 256GB. <https://www.apple.com/ca/iphone-se/>.");
  }

  if (message.content.toLowerCase() === `${prefix}broccoli`) {
    message.channel.send("https://i.imgur.com/62YjqRN.png");
  }

  if (message.content.toLowerCase() === `${prefix}itunes`) {
    message.channel.send("If you're having trouble connecting to your device to iTunes on your Windows PC, it might be because you downloaded iTunes from the Microsoft Store instead of from Apple's website.\n\nYou can download iTunes here by clicking 'Windows' and then choosing either 32 or 64 bit, depending on what your machine requires @ <https://www.apple.com/itunes/>");
  }

// ALL iPHONE COMMON-ISSUE COMMANDS ($iphone commands)

 if (message.content.toLowerCase() === `${prefix}iphone battery us`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (USA)",
      fields: [{
          name: "$0 (in-warranty, AppleCare+) or $69 (out of warranty)",
          value: "iPhone X, iPhone XS, iPhone XS Max, iPhone XR, \niPhone 11 Pro Max, iPhone 11 Pro, iPhone 11"
        },
        {
          name: "$0 (in-warranty, AppleCare+) or $49 (out of warranty)",
          value: "iPhone SE (2020), iPhone SE, iPhone 6, iPhone 6 Plus, iPhone 6S, \niPhone 6S Plus, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, \nand all other (earlier) eligible iPhone models."
        }
      ],
      footer: {
        text: "All prices in $USD"
    }
  }
  });
  }

  if (message.content.toLowerCase() === `${prefix}iphone battery ca`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (CA)",
      fields: [{
          name: "$0 (in-warranty, AppleCare+) or $89 (out of warranty)",
          value: "iPhone X, iPhone XS, iPhone XS Max, iPhone XR, \niPhone 11 Pro Max, iPhone 11 Pro, iPhone 11"
        },
        {
          name: "$0 (in-warranty, AppleCare+) or $65 (out of warranty)",
          value: "iPhone SE (2020), iPhone SE, iPhone 6, iPhone 6 Plus, iPhone 6S, \niPhone 6S Plus, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, \nand all other (earlier) eligible iPhone models."
        }
      ],
      footer: {
        text: "All prices in $CAD"
    }
  }
  });
  }


  if (message.content.toLowerCase() === `${prefix}iphone battery gb`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (GB)",
      fields: [{
          name: "£0 (in-warranty, AppleCare+) or £69 (out of warranty)",
          value: "iPhone X, iPhone XS, iPhone XS Max, iPhone XR, \niPhone 11 Pro Max, iPhone 11 Pro, iPhone 11"
        },
        {
          name: "£0 (in-warranty, AppleCare+) or £49 (out of warranty)",
          value: "iPhone SE (2020), iPhone SE, iPhone 6, iPhone 6 Plus, iPhone 6S, \niPhone 6S Plus, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, \nand all other (earlier) eligible iPhone models."
        }
      ],
      footer: {
        text: "All prices in £GBP"
    }
  }
  });
  }

  if (message.content.toLowerCase() === `${prefix}iphone battery aus`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (AUS)",
      fields: [{
          name: "AUD 0 (in-warranty, AppleCare+) or A$ 109 (out of warranty)",
          value: "iPhone X, iPhone XS, iPhone XS Max, iPhone XR, \niPhone 11 Pro Max, iPhone 11 Pro, iPhone 11"
        },
        {
          name: "AUD 0 (in-warranty, AppleCare+) or A$ 79 (out of warranty)",
          value: "iPhone SE (2020), iPhone SE, iPhone 6, iPhone 6 Plus, iPhone 6S, \niPhone 6S Plus, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, \nand all other (earlier) eligible iPhone models."
        }
      ],
      footer: {
        text: "All prices in AUD"
    }
  }
  });
  }

  if (message.content.toLowerCase() === `${prefix}iphone battery eu`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (GB)",
      fields: [{
          name: "£0 (in-warranty, AppleCare+) or £69 (out of warranty)",
          value: "iPhone X, iPhone XS, iPhone XS Max, iPhone XR, \niPhone 11 Pro Max, iPhone 11 Pro, iPhone 11"
        },
        {
          name: "£0 (in-warranty, AppleCare+) or £49 (out of warranty)",
          value: "iPhone SE (2020), iPhone SE, iPhone 6, iPhone 6 Plus, iPhone 6S, \niPhone 6S Plus, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, \nand all other (earlier) eligible iPhone models."
        }
      ],
      footer: {
        text: "All prices in £GBP"
    }
  }
  });
  }

// TEMPLATE INPUT EMBED COMMAND

  if (message.content.toLowerCase() === `${prefix}commandinput`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Battery Replacement (GB)",
      fields: [{
          name: "input",
          value: "input"
        },
        {
          name: "input",
          value: "input"
        }
      ],
      footer: {
        text: "input"
    }
  }
  });
  }

// SCREEN REPAIR COSTS

  if (message.content.toLowerCase() === `${prefix}iphone screen us`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Screen Repair (USA)",
      fields: [{
          name: "Screen repairs (out of warranty)",
          value: "iPhone 11 Pro Max (`$329`), iPhone 11 Pro (`$279`), iPhone 11 (`$199`)\niPhone XS Max (`$329`), iPhone XS, X (`$279`), iPhone XR (`$199`)\niPhone 6, 6S, 7, 8 Plus (`$169`), iPhone 6S, 7, 8 (`$149`)\niPhone 6, SE, 5C, 5S (`$129`)"
        },
        {
          name: "Is your iPhone covered by AppleCare+?",
          value: "AppleCare+ plans include up to 2 incidents of accidental damage coverage \nevery 24 months. Each incident has a service fee or a deductible.\nThe AppleCare+ fee for all models is `$29`. Read more [here](https://support.apple.com/iphone/repair/service/screen-replacement)"
        }
      ],
  }
  });
  }

  if (message.content.toLowerCase() === `${prefix}iphone screen ca`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Screen Repair (CA)",
      fields: [{
          name: "Screen repairs (out of warranty)",
          value: "iPhone 11 Pro Max (`$429`), iPhone 11 Pro (`$365`), iPhone 11 (`$259`)\niPhone XS Max (`$429`), iPhone XS, X (`$365`), iPhone XR (`$259`)\niPhone 6, 6S, 7, 8 Plus (`$219`), iPhone 6S, 7, 8 (`$195`)\niPhone 6, SE, 5C, 5S (`$179`)"
        },
        {
          name: "Is your iPhone covered by AppleCare+?",
          value: "AppleCare+ plans include up to 2 incidents of accidental damage coverage \nevery 24 months. Each incident has a service fee or a deductible.\nThe AppleCare+ fee for all models is `$39`. Read more [here](https://support.apple.com/en-ca/iphone/repair/service/screen-replacement)"
        }
      ],
  }
  });
  }


  if (message.content.toLowerCase() === `${prefix}iphone screen gb`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "iPhone Screen Repair (GB)",
      fields: [{
          name: "Screen repairs (out of warranty)",
          value: "iPhone 11 Pro Max (`$429`), iPhone 11 Pro (`$365`), iPhone 11 (`$259`)\niPhone XS Max (`$429`), iPhone XS, X (`$365`), iPhone XR (`$259`)\niPhone 6, 6S, 7, 8 Plus (`$219`), iPhone 6S, 7, 8 (`$195`)\niPhone 6, SE, 5C, 5S (`$179`)"
        },
        {
          name: "Is your iPhone covered by AppleCare+?",
          value: "AppleCare+ plans include up to 2 incidents of accidental damage coverage \nevery 24 months. Each incident has a service fee or a deductible.\nThe AppleCare+ fee for all models is `$39`. Read more [here](https://support.apple.com/en-ca/iphone/repair/service/screen-replacement)"
        }
      ],
  }
  });
  }


// ALL JAILBREAK COMMANDS ($jailbreak command)
  if (message.content.toLowerCase() === `${prefix}jailbreak`) {
    message.channel.send("__Jailbreaking__ is a method by which your iOS device can bypass Apple's stock restrictions through __hardware__ and __software__-based exploits, unlocking the true potential of your iPhone beyond Apple's closed environment. For tools, type `$checkrain` or `$uncover`.");
  }

  if (message.content.toLowerCase() === `${prefix}checkrain`) {
    message.channel.send("**checkra1n** is a jailbreak tool that relies on the `checkm8` hardware exploit. It is currently working on all iOS versions 12.3 and higher, on devices 5S to X. Current version: `0.10.2`. Install at <https://checkra.in/>");
  }

  if (message.content.toLowerCase() === `${prefix}uncover`) {
    message.channel.send("**unc0ver** is a jailbreak tool that relies on a patchable software exploit. It is currently working on all iOS versions between 11.0 and 13.5, on all devices. Current version: `5.3.1`. Install at <https://unc0ver.dev/>");
  }

// ALL IPOD COMMANDS ($ipod command)
  if (message.content.toLowerCase() === `${prefix}ipod classic 1`) {
    message.channel.send("The **iPod Classic (Gen 1)** was released by Apple on **October 23, 2001**. Capacity: 5, 10 GB. Connection: Firewire. Battery: 10h (audio). (First model, with mechanical scroll wheel. 10 GB model released later.) <https://en.wikipedia.org/wiki/IPod_Classic>");
  }

  if (message.content.toLowerCase() === `${prefix}ipod classic 2`) {
    message.channel.send("The **iPod Classic (Gen 2)** was released by Apple on **July 17, 2002**. Capacity: 10, 20 GB. Connection: Firewire. Battery: 10h (audio). (Touch-sensitive wheel. FireWire port had a cover. Hold switch revised. Windows compatibility through Musicmatch.) <https://en.wikipedia.org/wiki/IPod_Classic> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod classic 3`) {
    message.channel.send("The **iPod Classic (Gen 3)** was released by Apple on **April 28, 2003**. Capacity: 10, 15, 20, 30, 40 GB. Connection: Firewire. Battery: 8h (audio). (First complete redesign with all-touch interface, dock connector, 4-pin remote connector and slimmer case. Musicmatch support dropped with later release of iTunes 4.1 for Windows.) <https://en.wikipedia.org/wiki/IPod_Classic> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod classic 4`) {
    message.channel.send("The **iPod Classic (Gen 4, Standard)** was released by Apple on **July 19, 2004** (Photo, with colour display). Capacity: v. Connection: Firewire or USB. Battery: 12h (audio). (Adopted Click Wheel from iPod Mini, added charging through USB in addition to FireWire.) \n\nThe **iPod Classic (Gen 4, Photo)** has capacities of 30, 40, 60 GB, while the **(Gen 4, Colour Display)** has capacities 20, 60 GB, with battery 15h (audio), 5h (slidewshow). (Premium spin-off of 4th generation iPod with color screen, plus picture viewing. Later reintegrated into main iPod line.) <https://en.wikipedia.org/wiki/IPod_Classic> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod classic 5`) {
    message.channel.send("The **iPod Classic (Gen 5)** was released by Apple on **October 12, 2005**. Capacity: 30, 60, 80 GB. Connection: USB. Battery: 12/20h (audio), 2/3/6.5h (video). (Second full redesign with a slimmer case, and larger screen with video playback. Remote connector near the headphone jack was omitted as was syncing through FireWire. Offered in black or white. Hardware and firmware updated with 60 GB model replaced with 80 GB model on September 12, 2006.) <https://en.wikipedia.org/wiki/IPod_Classic> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod classic 6`) {
    message.channel.send("The **iPod Classic (Gen 6)** was released by Apple on **September 5, 2007**. Capacity: 80, 120, 160 GB. Connection: USB. Battery: 30/36/40h (audio), 5/6/7h (video). (Introduced the 'Classic' suffix. New interface and anodized aluminum front plate. Silver replaces white. In September 2008 the hardware and firmware was updated with a 120 GB model replacing the 80 GB model and the 160 GB model was discontinued. In September 2009, the 120 GB model was replaced with a 160 GB model. Discontinued on September 9, 2014.) <https://en.wikipedia.org/wiki/IPod_Classic> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod mini 1`) {
    message.channel.send("The **iPod Mini (Gen 1)** was released by Apple on **January 6, 2004**. Capacity: 4GB. Connection: USB, Firewire. Battery: 8 (audio). (New smaller model, available in 5 colors. Introduced the 'Click Wheel'.) <https://en.wikipedia.org/wiki/IPod_Mini> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod mini 2`) {
    message.channel.send("The **iPod Mini (Gen 2)** was released by Apple on **February 22, 2005**. Capacity: 4, 6 GB. Connection: USB, Firewire. Battery: 18h (audio). (Brighter color variants with longer battery life. Click Wheel lettering matched body color. Gold color discontinued. *Later replaced by iPod Nano*.) <https://en.wikipedia.org/wiki/IPod_Mini> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 1`) {
    message.channel.send("The **iPod Nano (Gen 1)** was released by Apple on **September 7, 2005**. Capacity: 1, 2, 4 GB. Connection: USB. Battery: 14h (audio), 2h (slideshow). (Replaced Mini. Available in black or white and used flash memory. Color screen for picture viewing. 1 GB version released later.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 2`) {
    message.channel.send("The **iPod Nano (Gen 2)** was released by Apple on **September 12, 2006**. Capacity: 2, 4, 8 GB. Connection: USB. Battery: 24h (audio), 5h (slideshow). (Anodized aluminum casing and 6 colors available.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 3`) {
    message.channel.send("The **iPod Nano (Gen 3)** was released by Apple on **September 5, 2007**. Capacity: 4, 8 GB. Connection: USB. Battery: 24h (audio), 5h (slideshow). (2 inch QVGA screen, colors refreshed with chrome back, new interface, video capability, smaller Click Wheel.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 4`) {
    message.channel.send("The **iPod Nano (Gen 4)** was released by Apple on **September 9, 2008**. Capacity: 4, 8, 16 GB. Connection: USB. Battery: 24h (audio), 4h (slideshow). (Reverted to tall form factor and all-aluminum enclosure with nine color choices, added accelerometer for 'shake to shuffle' functionality and horizontal viewing. 4 GB model limited release in selected markets.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 5`) {
    message.channel.send("The **iPod Nano (Gen 5)** was released by Apple on **September 9, 2009**. Capacity: 8, 16 GB. Connection: USB. Battery: 24h (audio), 5h (slideshow). (First iPod to include a video camera; also included a larger screen, FM radio, speaker, pedometer, and a polished exterior case while retaining similar colors to the 4th generation model.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 6`) {
    message.channel.send("The **iPod Nano (Gen Gen 6)** was released by Apple on **September 1, 2010**. Capacity: 8, 16 GB. Connection: USB. Battery: 24h (audio). (First iPod Nano to include multi-touch screen; clip from iPod Shuffle added. Video playback, speakers and camera removed.) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod nano 7`) {
    message.channel.send("The **iPod Nano (Gen 7)** was released by Apple on **September 12, 2012**. Capacity: 16 GB. Connection: USB. Battery: 30h (audio), 3.5h (video). (Reverted to tall form factor with larger 2.5 inch multi-touch screen. Clip removed. Video playback restored and Bluetooth added. Replaced 30-pin dock connector with new Lightning connector. Discontinued July 27, 2017.[1]) <https://en.wikipedia.org/wiki/IPod_Nano> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod shuffle 1`) {
    message.channel.send("The **iPod Shuffle (Gen 1)** was released by Apple on **January 11, 2005**. Capacity: 512 MB, 1 GB. Connection: USB. Battery: 12h (audio). (New entry-level model. Uses flash memory and has no screen.) <https://en.wikipedia.org/wiki/IPod_Shuffle> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod shuffle 2`) {
    message.channel.send("The **iPod Shuffle (Gen 2)** was released by Apple on **September 12, 2006**. Capacity: 1, 2 GB. Connection: USB. Battery: 12h (audio). (Smaller clip design with anodized aluminum casing. 4 color options added later. Colors were changed in 2007 and 2008.) <https://en.wikipedia.org/wiki/IPod_Shuffle> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod shuffle 3`) {
    message.channel.send("The **iPod Shuffle (Gen 3)** was released by Apple on **March 11, 2009**. Capacity: 1, 2 GB. Connection: USB. Battery: 10h (audio). (Smaller design with controls relocated to right earbud cable. Introduced with two colors, and featured VoiceOver. More colors and 2 GB model added in September 2009.) <https://en.wikipedia.org/wiki/IPod_Shuffle> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod shuffle 4`) {
    message.channel.send("The **iPod Shuffle (Gen 4)** was released by Apple on **September 1, 2010**. Capacity: 2 GB. Connection: USB. Battery: 15h (audio). (Controls returned to the body of the iPod. Introduced with five colors, and featured VoiceOver. Discontinued July 27, 2017.) <https://en.wikipedia.org/wiki/IPod_Shuffle> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 1`) {
    message.channel.send("The **iPod Touch (Gen 1)** was released by Apple on **September 5, 2007**. Capacity: 8, 16, 32 GB. Connection: USB. Battery: 22h (audio), 5h (video). (First iPod with Wi-Fi and a Multi-touch interface. Features Safari browser and wireless access to the iTunes Store and YouTube. 32 GB model later added. iOS 2.0 and App Store access required an upgrade fee.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 2`) {
    message.channel.send("The **iPod Touch (Gen 2)** was released by Apple on **September 9, 2008**. Capacity: 8, 16, 32 GB. Connection: USB. Battery: 36h (audio), 6h (video). (New tapered chrome back with Nike+ functionality, volume buttons, and built-in speaker added. iOS 2.0 and App Store access standard. Bluetooth support added but not made active until iOS 3.0, which required an upgrade fee.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 3`) {
    message.channel.send("The **iPod Touch (Gen 3)** was released by Apple on **September 9, 2009**. Capacity: 32, 64 GB. Connection: USB. Battery: 30h (audio), 6h (video). (Updated to include the upgraded internals from the iPhone 3GS; included Voice Control support and bundled remote earphones.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 4`) {
    message.channel.send("The **iPod Touch (Gen 4)** was released by Apple on **September 1, 2010**. Capacity: 8, 16, 32, 64 GB. Connection: USB. Battery: 40h (audio), 7h (video). (New thinner design including two cameras for FaceTime and HD video recording, hold button moved to top right corner, Retina Display similar to iPhone 4, Apple A4 chip. White-colored version added on October 4, 2011.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 5`) {
    message.channel.send("The **iPod Touch (Gen 5)** was released by Apple on **September 12, 2012**. Capacity: 16, 32, 64 GB. Connection: USB. Battery: 40h (audio), 8h (video). (New aluminum design with colored case options. Featured improved cameras along with A5 processor, Siri, and taller 4 inch Retina Display. First 16 GB models released have no color choices and no iSight camera, In early 2014 16 GB models were released that featured iSight cameras and color choices.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 6`) {
    message.channel.send("The **iPod Touch (Gen 6)** was released by Apple on **July 15, 2015**. Capacity: 16, 32, 64, 128 GB. Connection: USB. Battery: 40h (audio), 8h (video). (Updated with a new lineup of six colors, a new 128 GB model, and improved internals. The improved internals feature new cameras and the A8 processor with M8 motion coprocessor, 1 GB of RAM (twice the amount of the previous generation), and 802.11ac Wi-Fi.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod touch 7`) {
    message.channel.send("The **iPod Touch (Gen 7)** was released by Apple on **May 28, 2019**. Capacity: 32, 128, 256 GB. Connection: USB. Battery: 40h (audio), 8h (video). (Updated with a new 256 GB model, and an upgraded SoC from the A8 to the A10 Fusion. Also added support for features not previously supported on the 6th generation iPod touch, like AR and Group FaceTime.) <https://en.wikipedia.org/wiki/IPod_Touch> ");
  }

  if (message.content.toLowerCase() === `${prefix}ipod timeline`) {
    message.channel.send("https://i.imgur.com/0lWmXTU.png");
  }


// ALL MACOS COMMANDS


  if (message.content.toLowerCase() === `${prefix}mac thunderbolt`) {
    message.channel.send("Thunderbolt 3 uses a USB-C connector, but the type of connection is different from USB.\nThunderbolt 3 is a high bandwidth, PCIe-based data connection developed by Intel and Apple, allowing for 40 Gbps transfer speeds on each Thunderbolt 3 Bus. It also includes the DisplayPort protocol for video, up to two streams, as well as power delivery. A Thunderbolt 3 cable will always have a lightning bolt printed on the connector to differentiate it from USB-C.\n\nMacBook Pros that have four Thunderbolt 3 ports have two Thunderbolt busses, so the MacBook Pro supports a max of two Thunderbolt 3 connections at once. However, you can daisy chain up to 6 devices per connection. The two Thunderbolt 3 busses can be accessed from any of the four ports at any time.\n\nThere are two types of Thunderbolt 3 cables. Active Thunderbolt 3 cables support Thunderbolt at 40Gbps data transfer at lengths of up to 2m. Passive Thunderbolt 3 cables are only capable of 20Gbps data transfer at 1m or 2m lengths, but can achieve the full 40Gbps at a shorter cable length of 0.5m, and are generally less expensive than Active cables.\n\n");
  }

  if (message.content.toLowerCase() === `${prefix}mac shortcuts`) {
    message.channel.send("By pressing certain key combinations, you can do things that normally need a mouse, trackpad, or other input device.\n\nHere’s a list of keyboard shortcuts for Mac: <https://support.apple.com/en-us/HT201236>\n\n*On keyboards made for Windows PCs, use the Alt key instead of Option, and the Windows logo key instead of Command.*");
  }

  if (message.content.toLowerCase() === `${prefix}mac beta`) {
    message.channel.send("Should you install a Beta on your main macOS system?\n\nThe answer is no. Betas can have major issues that could render your system unusable. There is no way to roll it back without erasing your Mac’s internal drive, reinstalling macOS, then restoring from a Time Machine backup. It is always a better idea to install it onto an external drive and boot from it. That way you are leaving your main system untouched.\n\nAlso, do not install a Beta without a Time Machine Backup of your system from the previous version of macOS. EVER. You could lose all of your data if you need to restore to an earlier version of macOS.\n\nEnter `$mac timemachine` to learn about how to back up your Mac with Time Machine.");
  }

  if (message.content.toLowerCase() === `${prefix}mac smc`) {
    message.channel.send("Resetting the **system management controller (SMC)** can resolve certain issues related to power, battery, fans, and other features. Here is a guide for how to reset SMC on different Macs: <https://support.apple.com/en-us/HT201295>\n\nNOTE: The process is different depending on whether your Mac has the T2 Security Chip or not, and whether it is a notebook or a desktop. Read the guide CAREFULLY and follow the correct procedure for your Mac.");
  }

  if (message.content.toLowerCase() === `${prefix}mac bootcamp`) {
    message.channel.send("Boot Camp is a utility that comes with your Mac and lets you dual-boot with macOS and Windows. Download your copy of Windows 10, then let Boot Camp Assistant walk you through the installation steps. More info on how to get started here: <https://support.apple.com/en-us/HT201468>\n\nHere’s a guide for how to download and install the latest AMD graphics drivers for Windows on Mac models that use AMD graphics: <https://support.apple.com/en-us/HT208908>\n\nHere’s a guide for using Boot Camp Control Panel within Windows to change Boot Camp options and configure hardware: <https://support.apple.com/guide/bootcamp-control-panel/get-started-with-boot-camp-control-panel-bcmp1c70f878/6.1/mac/10.15>\n\nHere’s the main Boot Camp Support Page: <https://support.apple.com/boot-camp>");
  }


  if (message.content.toLowerCase() === `${prefix}mac battery`) {
    message.channel.send("macOS Catalina 10.15.5 introduces battery health management, a feature designed to improve the lifespan of your Mac notebook's battery.\n\nBased on the measurements that it collects, battery health management may reduce your battery's maximum charge when in this mode. (Your battery will discharge to about 90% while the power adapter is plugged in). More info here: <https://support.apple.com/en-us/HT211094>");
  }


  if (message.content.toLowerCase() === `${prefix}mac displays`) {
    message.channel.send("You can make all of your displays mirror each other, or extend your workspace with different apps and windows on each display. If you use an external display with your Mac notebook, you can also use closed-display mode (clam-shell mode)\n\nHere’s an overview of the types of arrangements and connections possible: <https://support.apple.com/en-us/HT202351>\nHere are some troubleshooting tips for external display issues: <https://support.apple.com/en-us/HT201177>\nHere’s how to use closed-display or clamshell mode: <https://support.apple.com/en-us/HT201834>");
  }


  if (message.content.toLowerCase() === `${prefix}mac applecare`) {
    message.channel.send("Your Mac purchase includes AppleCare, which is 90 days of complimentary technical support and a standard 1 year limited  warranty. This warranty covers any manufacturing defects or hardware problems not caused by the user.\n\nIt’s strongly recommended that you purchase Apple’s extended warranty, AppleCare+, which extends your coverage to 3 years from the purchase date, and also includes two incidents of accidental damage for an additional fee. You can buy AppleCare+ for your Mac within 60 days of your purchase, or at the time of purchase.\n\nMore info on AppleCare+ for Mac: <https://www.apple.com/support/products/mac/>\n\nCheck your coverage status here: <https://checkcoverage.apple.com/>");
  }


  if (message.content.toLowerCase() === `${prefix}mac gpu`) {
    message.channel.send("Your Thunderbolt 3-equipped Mac running macOS High Sierra 10.13.4 or later can access additional graphics performance by connecting to an external graphics processor (also known as an eGPU), using Thunderbolt 3. Here’s a guide for how to get started, and which GPUs are supported by macOS: <https://support.apple.com/en-us/HT208544>\n\n**Important note**: Nvidia GPUs are NOT supported by macOS at this time, only AMD. Windows via Boot Camp also does not support eGPUs reliably. There are some workarounds, but no guarantees that Windows on your Mac will reliably use the eGPU.\nHere is a very involved guide that may get an eGPU working in Boot Camp: <https://egpu.io/boot-camp-egpu-setup-guide/> (recommended for advanced users only)");
  }

  if (message.content.toLowerCase() === `${prefix}mac nvram`) {
    message.channel.send("**NVRAM** controls sound volume, display resolution, startup-disk selection, time zone, and recent kernel panic information. If you experience issues related to these settings or others, resetting NVRAM might help. For example, if your Mac starts up from a disk other than the one selected in Startup Disk preferences, or a question mark icon briefly appears before your Mac starts up, you might need to reset NVRAM.\n\nShut down your Mac, then turn it on and immediately press and hold these four keys together: Option, Command, P, and R. You can release the keys after about 20 seconds, during which your Mac might appear to restart.\n\nOn Mac computers that play a startup sound, you can release the keys after the second startup sound. On Mac computers that have the Apple T2 Security Chip, you can release the keys after the Apple logo appears and disappears for the second time. (<https://support.apple.com/en-us/HT204063>)");
  }


  if (message.content.toLowerCase() === `${prefix}mac migration`) {
    message.channel.send("Migration Assistant copies all of your files to your new Mac so that you don't have to copy your files manually. You can copy all of your documents, apps, user accounts, and settings from another Mac, a Time Machine backup, other startup disk, or even a Windows PC. Here’s how: <https://support.apple.com/en-us/HT204350>");
  }


  if (message.content.toLowerCase() === `${prefix}mac recovery`) {
    message.channel.send("The utilities in macOS Recovery help you restore from Time Machine, reinstall macOS, get help online, repair or erase a hard disk, and more. macOS Recovery is part of the built-in recovery system of your Mac. You can start up from macOS Recovery and use its utilities to recover from certain software issues or take other actions on your Mac.\n\nMore info here: <https://support.apple.com/en-us/HT201314>");
  }


  if (message.content.toLowerCase() === `${prefix}mac reinstall`) {
    message.channel.send("macOS Recovery makes it easy to reinstall the Mac operating system, even if you need to erase your startup disk first. Here’s how: <https://support.apple.com/en-us/HT204904>");
  }
  

  if (message.content.toLowerCase() === `${prefix}mac restore`) {
    message.channel.send("If you used Time Machine to create a backup of your Mac, you can restore your files from that backup or a local snapshot on your startup disk. Here’s how: <https://support.apple.com/en-us/HT203981>");
  }

  if (message.content.toLowerCase() === `${prefix}mac storage`) {
    message.channel.send("With macOS Sierra or later, your Mac automatically takes these additional steps to save storage space:\n- Detects duplicate downloads in Safari, keeping only the most recent version of the download\n- Reminds you to delete used app installers\n- Removes old fonts, languages, and dictionaries that aren't being used\n- Clears caches, logs, and other unnecessary data when storage space is needed\n\nmacOS also offers some other tools that can help you manage your storage. If your internal storage is getting full, your own User data is usually taking up most of the storage. Try to get into the habit of deleting old files and documents you no longer need. Here’s a guide to the different storage management options in macOS: <https://support.apple.com/en-us/HT206996>");
  }

  if (message.content.toLowerCase() === `${prefix}mac timemachine`) {
    message.channel.send("You can use Time Machine, the built-in backup feature of your Mac, to automatically back up all of your files, including apps, music, photos, email, documents, and system files. When you have a backup, you can restore files from your backup if the original files are ever deleted from your Mac, or the hard disk (or SSD) in your Mac is erased or replaced.\n\nTo create backups with Time Machine, all you need is an external storage device. After you connect the device and select it as your backup disk, Time Machine automatically makes hourly backups for the past 24 hours, daily backups for the past month, and weekly backups for all previous months. The oldest backups are deleted when your backup disk is full. More info here: <https://support.apple.com/en-us/HT201250>\n\n*Note: Every Mac user should take advantage of Time Machine. It is 100% the best way to backup your Mac.*");
  }



// ALL OTHER COMMANDS ($info, $help, $version, $credits, $invite)

  if (message.content.toLowerCase() === `${prefix}info`) {
    message.channel.send("**Genius**™️ is an Apple support archive assistant with frequently asked questions available upon request. Written in Discord.js by `tank#0001`. For a list of commands, type `$help`.");
  }

  if (message.content.toLowerCase() === `${prefix}credits`) {
    message.channel.send("Contributors: **Isaac#0004**, **Fudge#0001**, **samsscreenrepair#0001**, **FoxRunTime#0346**, **sapphic wallflower#5186**, **Ber#0107**, **BytesAndCoffee#2233**, **mattyjoe#2748**, **ThatTonybo#0001**, **iliyan61#0001**.");
  }

  if (message.content.toLowerCase() === `${prefix}invite`) {
    message.react('732342713055182898');
    message.author.send("Invite **Genius** to your server through <https://discord.com/oauth2/authorize?client_id=731603315032326235&scope=bot&permissions=51264>.");
  }

  if (message.content.toLowerCase() === `${prefix}version`) {
    message.channel.send("Running V `3.0.1` (stable)");
  }

});

// BEGIN REACTION EMBED PAGES

// functions
const reactionPages = async (message, author, options, page, retries) => {
    const filter = (reaction, user) => {
      if (options.allowOtherUserReactions) {
          return Object.values(options.emojis).includes(reaction.emoji.name);
      } else {
          return Object.values(options.emojis).includes(reaction.emoji.name) && user.id === author.id;
      }
    }
  
    const collectorOptions = {
        max: 1,
        time: (options.timeLimit * 999999),
        errors: ['time']
    }
  
  
    // THEN LOOP
    message.awaitReactions(filter, collectorOptions)
        .then(async (collected) => {
            const reaction = collected.first();
            const minPage = 0;
            const maxPage = (options.pages.length - 1);
            const restartLoop = async () => { await reactionPages(message, author, options, page, retries); }
  
            if (reaction.emoji.name === options.emojis.previousPage) {
                if (page === minPage) return restartLoop();
  
                page--;
                message = await message.edit(options.pages[page]);
                return restartLoop();
            }
  
            if (reaction.emoji.name === options.emojis.nextPage) {
                if (page === maxPage) return restartLoop();
  
                page++;
                message = await message.edit(options.pages[page]);
                return restartLoop();
            }
  
        })
  
  
  
  // CATCH LOOP (NOT USING)
        .catch(async (error) => {
        });
  
  }
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  // START PAGES CMD
  
  client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.toLowerCase() === `${prefix}ios backuprestore guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $backuprestore" }, color: 14723837, title: 'Restore your device from an iCloud backup', description: '__Learn how to restore your device from a backup in iCloud or on your computer.__ \n\n`1.` Turn on your device. You should see a Hello screen. If you already set up your device, you need to erase all of its content before you can use these steps to restore from your backup. \n\n`2.` Follow the onscreen setup steps until you reach the Apps & Data screen, then tap Restore from iCloud Backup. \n\n`3`. Sign in to iCloud with your Apple ID. \n\n`4`. Choose a backup. Look at the date and size of each and pick the most relevant. After you choose, the transfer starts. If a message says that a newer version of software is required, follow the onscreen steps to update (If you don\'t see onscreen steps to help you update, [learn what to do](https://support.apple.com/en-ca/HT203434)). \n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $backuprestore" }, color: 14723837, title: 'Restore your device from an iCloud backup (2)', description: '`5.` When asked, sign in with your Apple ID to restore your apps and purchases (If you\'ve purchased iTunes or App Store content using multiple Apple IDs, you\'ll be asked to sign in to each). If you can’t remember your password, you can tap Skip this Step and sign in later. But you won\'t be able to use the apps until you sign in with your Apple ID.\n\n`6.` Stay connected and wait for a progress bar to appear and complete. Depending on the size of the backup and the network speed, the progress bar might need a few minutes to an hour to complete. If you disconnect from Wi-Fi too soon, the progress will pause until you reconnect.\n\n`7.` Now you can finish setup and enjoy your device. Content like your apps, photos, music, and other information will continue to restore in the background for the next several hours or days, depending on the amount of information there is. Try to connect often to Wi-Fi and power to let the process complete.\n\n[Get help with restoring from your iCloud backup](https://support.apple.com/en-ca/HT203516).\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
  
        await reactionPages(msg, message.author, options, currentPage, currentRetries);
  
    }
  });
  
  // END PAGES CMD
  

// GUIDE COMPRESSION IN VSCODE

  // $ios passcode guide
  
  client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.toLowerCase() === `${prefix}ios passcode guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios passcode" }, color: 14723837, title: 'Set a passcode on iPhone', description: '__Set or change the passcode__ \n\n`1.` Go to Settings , then do one of the following:\n- On an iPhone with Face ID: Tap Face ID & Passcode.\n- On an iPhone a Home button: Tap Touch ID & Passcode.\n\n`2.` Tap Turn Passcode On or Change Passcode.\n\nTo view options for creating a password, tap Passcode Options. The most secure options are Custom Alphanumeric Code and Custom Numeric Code.\n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios passcode" }, color: 14723837, title: 'Set a passcode on iPhone (2)', description: 'After you set a passcode, you can [use Face ID](https://support.apple.com/en-ca/guide/iphone/iph6d162927a/13.0/ios/13.0) or [Touch ID](https://support.apple.com/en-ca/guide/iphone/iph672384a0b/13.0/ios/13.0) to unlock iPhone (depending on your model). For additional security, however, you must always enter your passcode to unlock your iPhone under the following conditions:\n- You turn on or restart your iPhone.\n- You haven’t unlocked your iPhone for more than 48 hours.\n- You haven’t unlocked your iPhone with the passcode in the last 6.5 days, and you haven’t unlocked it with Face ID or Touch ID in the last 4 hours.\n- Your iPhone receives a remote lock command.\n- There are five unsuccessful attempts to unlock your iPhone with Face ID or Touch ID.\n- An attempt to use Emergency SOS is initiated ([see Make emergency calls on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3c99374c/13.0/ios/13.0)).\n- An attempt to view your Medical ID is initiated ([see Create and share your Medical ID in Health on iPhone](https://support.apple.com/en-ca/guide/iphone/iphec639eb15/13.0/ios/13.0)).\n\n[Set a passcode on iPhone](https://support.apple.com/en-ca/guide/iphone/iph14a867ae/ios)\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
  
        await reactionPages(msg, message.author, options, currentPage, currentRetries);
  
    }
  
  // $ios faceid guide
  
    if (message.content.toLowerCase() === `${prefix}ios faceid guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios faceid" }, color: 14723837, title: 'Set up Face ID or add an alternate appearance', description: '`1.` If you didn’t set up Face ID when you first set up your iPhone, go to Settings  > Face ID & Passcode > Set up Face ID, then follow the onscreen instructions.\n\n`2.` To set up an additional appearance for Face ID to recognize, go to Settings > Face ID & Passcode > Set Up an Alternate Appearance, then follow the onscreen instructions.\n\nIf you have physical limitations, you can tap Accessibility Options during Face ID set up. When you do this, setting up facial recognition doesn’t require the full range of head motion. Using Face ID is still secure, but it requires more consistency in how you look at iPhone.\n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios faceid" }, color: 14723837, title: 'Set up Face ID or add an alternate appearance (2)', description: 'Face ID also has an accessibility feature you can use if you’re blind or have low vision. If you don’t want Face ID to require that you look at iPhone with your eyes open, go to Settings > Accessibility, then turn off Require Attention for Face ID. This feature is automatically turned off if you turn on VoiceOver when you first set up iPhone. See [Change Face ID and attention settings on iPhone.](https://support.apple.com/en-ca/guide/iphone/iph646624222/13.0/ios/13.0)\n\n[User Guide - Face ID, Apple](https://support.apple.com/en-ca/guide/iphone/iph6d162927a/ios)\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
  
        await reactionPages(msg, message.author, options, currentPage, currentRetries);
  
    }
  
    // $ios touchid guide
  
      if (message.content.toLowerCase() === `${prefix}ios touchid guide`) {
    
          const emojis = {
            previousPage: '⬅️',
            nextPage: '➡️',
          }
        
          const pages = [
              {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios touchid" }, color: 14723837, title: 'Set up Touch ID on iPhone', description: 'Turn on fingerprint recognition\n\n`1.` If you didn’t turn on fingerprint recognition when you first set up your iPhone, go to Settings  > Touch ID & Passcode.\n\n`2.` Turn on any of the options, then follow the onscreen instructions.\n\nIf you turn on iTunes & App Store, you’re asked for your Apple ID password when you make your first purchase from the App Store, Apple Books, or iTunes Store. When you make your next purchases, you’re asked to use Touch ID.\n\nNote: If you can’t add a fingerprint or unlock your iPhone using Touch ID, see the Apple Support article [If Touch ID isn’t working.](https://support.apple.com/HT207537)\n\nUse the ➡️ button to proceed to page 2.\n' } },
              {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios touchid" }, color: 14723837, title: 'Set up Touch ID on iPhone (2)', description: '__**Add a fingerprint**__\n\n`1.` Go to Settings  > Touch ID & Passcode.\n\n`2.` Tap Add a Fingerprint.\n\n`3.` Follow the onscreen instructions.\n\n__**Name or delete a fingerprint**__\n\n`1.` Go to Settings  > Touch ID & Passcode. If you added more than one fingerprint, place a finger on the Home button to identify its print.\n\n`2`. Tap the fingerprint, then enter a name (such as “Thumb”) or tap Delete Fingerprint.\n\nUse the ⬅️ button to return to page 1.\n' } }
          ]
          
          const defaultPage = 0;
          
          const timeLimit = 15;
          
          const maximumRetries = 3;
          
          const allowOtherUserReactions = false;
          
          let currentPage = 0;
          let currentRetries = 0;
          
          const msg = await message.channel.send(pages[defaultPage]);
    
          await msg.react(emojis.previousPage);
          await msg.react(emojis.nextPage);
    
          const options = {
            emojis,
            pages,
            timeLimit,
            maximumRetries,
            allowOtherUserReactions
          }
    
          await reactionPages(msg, message.author, options, currentPage, currentRetries);
    
      }
  
      // $ios 2fa guide
  
      if (message.content.toLowerCase() === `${prefix}ios 2fa guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios 2fa" }, color: 14723837, title: 'title', description: 'enterdesc\n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios 2fa" }, color: 14723837, title: 'title (2)', description: 'enterdesc\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
      }
  
  
    // GUIDE COMMAND TEMPLATE
  
    if (message.content.toLowerCase() === `${prefix}version3guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $parent" }, color: 14723837, title: 'title', description: 'enterdesc\n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $parent" }, color: 14723837, title: 'title (2)', description: 'enterdesc\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
  
        await reactionPages(msg, message.author, options, currentPage, currentRetries);
  
    }
  
    
  
  
  });
  
  // END $ios passcode guide 
  
// OS STATUS COMMANDS

client.on("message", async message => {
    if(message.author.bot) return;


    if (message.content.toLowerCase() === `${prefix}ios`) {
      message.channel.send({embed: {
      color: 14723837,
      title: "iOS Status",
      fields: [{
          name: "Current distribution",
          value: "iOS `13.6.1` (`17G80`) R. Aug. 12, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_13#Updates). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Distribution 13 Betas",
          value: "iOS `13.6.1 GM` (`17G80`) R. Aug. 12, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_13#Updates). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next iOS release",
          value: "iOS `14.0 (6)` (`18A5357e`) R. Aug. 25, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_14#Updates). ([Official](https://developer.apple.com/news/releases/))"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "Last refresh Aug 25, 2020"
      }
    }
  });
  }
  
      if (message.content.toLowerCase() === `${prefix}macos`) {
      message.channel.send({embed: {
      color: 14723837,
      title: "macOS Status",
      fields: [{
          name: "Current distribution",
          value: "macOS `10.15.6` (Catalina) (`19G73`) R. Jul. 15, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/MacOS_Catalina#Release_historys). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next macOS release",
          value: "macOS `11.0 (4)` (Big Sur) (`20A5343i`) R. Aug. 4, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/MacOS_Catalina#Release_history). ([Official](https://developer.apple.com/news/releases/))"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "Last refresh August 4, 2020"
      }
    }
  });
  }

  if (message.content.toLowerCase() === `${prefix}watchos`) {
    message.channel.send({embed: {
      color: 14723837,
      title: "watchOS Status",
      fields: [{
          name: "Current distribution",
          value: "watchOS `6.2.8` (`17U63`) R. Jul. 15, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Distribution V6 Betas",
          value: "watchOS `6.2.8 (4) GM` (`17U63`) R. Jul. 9, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next watchOS release",
          value: "watchOS `7.0 (3)` (`18R5340d`) R. Jul. 22, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_7). ([Official](https://developer.apple.com/news/releases/))"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "Last refresh July 22, 2020"
      }
    }
  });
  }
});

  client.login(process.env.ID);
