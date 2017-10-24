/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = "amzn1.ask.skill.0743e59c-e1ba-4100-b394-9b5a8fc3165d";

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'It will be 140 million years before the length of a day will have increased to 25 hours due to Earth\'s rotation slowing.',
    'The Milky Way\'s diameter is estimated to be between 100,000 and 180,000 light years.',
    'In the past, the Earth was believed to be the center of the universe.',
    'Only one spacecraft has flown by Uranus, Voyager 2.',
    'Sagittarius A*, a supermassive black hole located at the central core of the Milky Way weights about 4.3 million Suns.',
    'The Earth is the densest planet in the Solar System.',
    'After the Moon, Venus is the second brightest object in the night sky.',
    'Mercury has the highest orbital eccentricity of all the planets.',
    'When passing by Pluto, the New Horizons spacecraft will have travelled 4.76 billion kilometres.',
    'The Milky Way moves through space at a speed of 552 kilometres per second.',
    'Uranus has two sets of very thin dark coloured rings.',
    'Jupiter has the shortest day of all the planets, lasting 9 hours and 55 minutes.',
    'Uranus is the coldest planet of the Solar System.',
    'Saturn can be seen with the naked eye.',
    'A day on the surface of Mercury lasts 176 Earth days.',
    'There is a point of no return around a black hole, called the “event horizon” from which not even light can escape.',
    'New Horizons is the fastest spacecraft launched, at a speed of about 16.26 kilometres a second.',
    'While in the vicinity of Pluto, a radio signal from New Horizons takes 4 and a half hours to reach Earth.',
    'There is almost a 15 million degrees difference between the Sun core and surface temperature.',
    'Pluto has five moons: Charon, Hydra, Nix, Kerberos and Styx.',
    'Saturn has 150 moons and smaller moonlets.',
    'The Great Red Spot on Jupiter is a huge storm.',
    'Mercury does not have any moons or rings.',
    'Only 18 missions to Mars have been successful.',
    'Saturn has the second largest moon in the Solar System, Titan.',
    'Light from the Sun takes eight minutes to reach Earth.',
    'In the next 20 to 40 million years Mars will have a ring.',
    'Olympus Mons, a 21-kilometer high voclcano located on Mars is the biggest of our Solar System.',
    'The Mars Science Laboratory mission that sent Curiosity on the red planet cost $2.5 billion.',
    'The Curiosity rover that went to Mars had a mobile organic chemistry lab and a laser to vaporise rocks.',
    'If squashed in, 1.3 million Earths could fit inside the Sun.',
    'The Sun will one day be about the size of Earth.',
    'Uranus is often referred to as an “ice giant” planet.',
    'Mars has the largest dust storms in the solar system.',
    'Mercury is the second hottest planet, despite being the closest to the Sun.',
    'Jupiter is large enough for the Earth to fit inside 1,000 times.',
    'Uranus was officially discovered by Sir William Herschel in 1781.',
    'Neptune orbits the Sun once every 165 years.',
    'Eventually, the Sun will expand to the point that it will engulf Mercury, Venus and the Earth.',
    'Atmospheric pressure on Venus is 92 times greater than the Earth’s.',
    'The Sun travels at 220 kilometres per second.',
    'Pieces of Mars have fallen to Earth.',
    'As the iron core of Mercure cooled and contracted, its surface became wrinkled.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
