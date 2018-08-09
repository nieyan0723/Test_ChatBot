'use strict'

let Wit = null;
let interactive = null;

var Config = require('./config')
  Wit = require('node-wit').Wit;
  interactive = require('node-wit').interactive;

// LETS SAVE USER SESSIONS
var sessions = {}

const accessToken = (() => {
	console.log(">>>>>>>wit token>>>>>>>" + Config.WIT_TOKEN);
  return Config.WIT_TOKEN;
})();

var firstEntityValue = function (entities, entity) {
	var val = entities && entities[entity] &&
		Array.isArray(entities[entity]) &&
		entities[entity].length > 0 &&
		entities[entity][0].value;
    console.log(">>>>>>>val>>>>>>>");
     console.log(val);
	if (!val) {
		return null;
	}
return val;
}

const printWikidataDescription = (celebrity, sender, reply) => {
  var responsewiki;
  const wikidataID = celebrity.external && celebrity.external.wikidata;
  if (!wikidataID) {
    // in case wikidata id isn't available
    console.log(`I recognize ${celebrity.name}!`);
    responsewiki = "I recognize ${celebrity.name}!";
  }
  const fullUrl = `https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&ids=${wikidataID}&props=descriptions&languages=en`;
  return fetch(fullUrl, {
    method: 'GET',
    headers: new Headers({
      'Api-User-Agent': 'wit-ai-example'
    })
  })
    .then(response => Promise.resolve(response.json()))
    .then(data => {
      console.log(`ooo yes I know ${celebrity.name} -- ${data.entities[wikidataID].descriptions.en.value}`);
      responsewiki = "ooo yes I know " + celebrity.name + " -- " + data.entities[wikidataID].descriptions.en.value;
    })
    .then(()=>{
    console.log(">>>>>>>>>>Before return>>>>>>>>");
    console.log(responsewiki);
    reply(sender,responsewiki);
    })
    .catch(err => console.error(err))


};


var findOrCreateSession = function (fbid) {
  var sessionId

  // DOES USER SESSION ALREADY EXIST?
  Object.keys(sessions).forEach(k => {
    if (sessions[k].fbid === fbid) {
      // YUP
      sessionId = k
    }
  })

  // No session so we will create one
  if (!sessionId) {
    sessionId = new Date().toISOString()
    sessions[sessionId] = {
      fbid: fbid,
      context: {
        _fbid_: fbid
      }
    }
  }

  return sessionId
}

var read = function (sender, message, reply) {
		const client = new Wit({accessToken})

    client.message(message).then(({entities}) => {
              // You can customize your response to these entities
              console.log(">>>>>>>entities>>>>>>>");
              console.log(entities);
              // For now, let's reply with another automatic message
              //reply(sender, `We've received your message: ${message}.`);
              const greetings = firstEntityValue(entities, 'greetings');
              console.log(">>>>>>>greetings>>>>>>>");
              console.log(greetings);
              const wps = firstEntityValue(entities, 'wps');
              console.log(">>>>>>>wps>>>>>>>");
              console.log(wps);
              const free = firstEntityValue(entities, 'free');
              console.log(">>>>>>>free>>>>>>>");
              console.log(free);
              const pdf = firstEntityValue(entities, 'pdf');
              console.log(">>>>>>>pdf>>>>>>>");
              console.log(pdf);
              const download = firstEntityValue(entities, 'download');
              console.log(">>>>>>>download>>>>>>>");
              console.log(download);
              const celebrity = firstEntityValue(entities, 'notable_person');
              console.log(">>>>>>>celebrity>>>>>>>");
              console.log(celebrity);
             if (celebrity) {
             // We can call wikidata API for more info here
              printWikidataDescription(celebrity, sender, reply)
             } else if (greetings) {
             console.log("Hi!");
             reply(sender, "Hi! Welcome to WPS Office Bot!");
             }else if (wps) {
             reply(sender, "WPS Office is an office suite, perfectly compatible with Microsoft office (word, excel, powerpoint) for Microsoft Windows, Linux, iOS and Android OS."); 
             }else if (free) {
             reply(sender, "Yes, it is free and compatible with Microsoft Office but we also provide premium membership for advanced usage. Check our website https://www.wps.com/ for more complete information."); 
             }else if (pdf) {
             reply(sender, "PDF editing function is coming soon. Please check our website to keep you updated. We also have PDF to Word Converter. Check here https://www.wps.com/pdf-to-word"); 
             } else if (download) {
             reply(sender, "You can click https://www.wps.com/download/ to download."); 
             } else {
             console.log("Umm. I don't recognize that words.");
             reply(sender, "Umm. I am sorry. I don't understand what you are saying. You can ask me something about 'WPS'");
               }
            })
	
}




module.exports = {
	findOrCreateSession: findOrCreateSession,
	read: read,
}