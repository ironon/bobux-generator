//IMPORTS
const frenIcon = require('./assets/fren.png');
const generatorIcon = require('./assets/generator.png');
const bobuxmineIcon = require('./assets/bobuxmine.png');
const laboratoryIcon = require('./assets/laboratory.png');
const snailworshipIcon = require('./assets/snailworship.png');
const garfgarficon = require('./assets/garfgarf.png');
const jessIcon = require('./assets/jess.png');
const skyblockIcon = require('./assets/skyblock.png');
const noodlebirdIcon = require('./assets/noodlebird.png');
const daydayIcon = require('./assets/dayday.png');
const daydayHarvesterIcon = require('./assets/daydayHarvester.png');
const capitalismIcon = require('./assets/capitalism.png');
const communismIcon = require('./assets/communism.png');
const daydayismIcon = require('./assets/daydayism.png');




//IMPORT ENDS


let Buyables = {
    fren: Buyable('fren', "whats the point of frens if not to work for you eternally? these frens will roll in the bobux for you :D", frenIcon, 20, 1),
    generator: Buyable('Bobux Generator', "this generator will generate bobux for you :D", generatorIcon, 500, 10),
    bobuxmines: Buyable('Bobux Mine', "the vast caverns of Daydayland are filled with untouched bobux! we will harvest it.", bobuxmineIcon, 2000, 100),
    secretbobuxlaboratory: Buyable('Secret Bobux Laboratory', `hidden from even the CIA, this secret laboratory converts "willing" test subjects into massive amounts of bobux!`, laboratoryIcon, 15000, 1000),
    snailworship: Buyable('Snail Worship', `it has been discovered that snails rule all. you are privilaged to even know they exist. they will bless you with vast bobux for worshipping them.`, snailworshipIcon, 100000, 5000),
    garfgarf: Buyable('GarfGarf', `garfield controls all. he produces so much bobux that it's somehow bigger than ur mum`, garfgarficon, 1000000, 15000),
    jess: Buyable("Jess", "coolest person he love among us among us among us and among us ඞඞඞඞඞඞඞඞඞඞඞඞ help i got peer pressureed to add this", jessIcon, 10000000, 25000),
    skyblock: Buyable("Skyblock Portal", "Opens a portal to the skyblock universe and undoes inflation by converting coins to bobux.", skyblockIcon, 100000000, 40000),
    noodlebird: Buyable("Noodlebird", "Noodlebird is a bird that loves noodles. He will give you bobux for every noodle you give him.", noodlebirdIcon, 1000000000, 90000),
    dayday: Buyable("The Dayday", "Dayday is the creator of bobux. He lives in bobux. He breaths bobux. Laying your eyes on him will drown you in bobux. If only we could harvest this power more efficently..", daydayIcon, 10000000000, 150000),
    daydayharvester: Buyable("Dayday Harvester", "We've done it! We can now harvest the full potential of The Dayday. Unfortunately it inflicts massive amounts of pain to him, but who cares? Not me, i didn't even ask bro", daydayHarvesterIcon, 10000000000, 150000),
    capitalism: Buyable("Capitalism", "with the power of capitalism, anything is possible. We can now convert government corruption into bobux.", capitalismIcon, 1000000000000, 300000),
    communism: Buyable("Communism", "sharing is caring sharing is caring sharing is caring sharing is caring sharing is caring sharing is caring sharing is caring", communismIcon, 10000000000000, 350000),
    daydayism: Buyable("Daydayism", "Abandon the cruel concepts of government and embrace the power of Daydayism. With Daydayism, anything is possible.", daydayismIcon, 100000000000000, 400000),

  }








  function Buyable(name, description, icon, price, bobuxPerSec) {
    return {
      name: name,
      description: description,
      icon: icon,
      price: price,
      bobuxPerSec: bobuxPerSec
        
    }
  }
  export default Buyables;