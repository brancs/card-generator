// list of unique forest creature names
const names = [  'Crimson Serpent', 'Radiant Juggernaut', 'Wild Chimera', 'Infernal Phoenix',  'Aurora Hydra', 'Shimmering Kaiju', 'Thunder Wyrm', 'Divine Gorgon',  'Shadow Colossus', 'Ancient Maelstrom', 'Majestic Sphinx', 'Vengeful Leviathan',  'Violet Roc', 'Chaos Behemoth', 'Noble Zephyr', 'Silver Dragon',  'Mighty Thunderbird', 'Blazing Basilisk', 'Dark Yeti', 'Savage Kraken',  'Eternal Ouroboros', 'Frost Drake', 'Crystal Unicorn', 'Golden Manticore',  'Storm Wyrm', 'Arcane Hydrac', 'Zephyr Leviathan', 'Radiant Maelstrom',  'Majestic Gorgon', 'Divine Juggernaut', 'Shadow Roc', 'Chaos Dragon',  'Ancient Hydra', 'Vengeful Chimera', 'Violet Serpent', 'Silver Phoenix',  'Mighty Behemoth', 'Blazing Colossus', 'Dark Thunderbird', 'Savage Yeti',  'Eternal Kraken', 'Frost Ouroboros', 'Crystal Zephyr', 'Golden Unicorn',  'Storm Basilisk', 'Arcane Dragon', 'Zephyr Manticore', 'Radiant Leviathan',  'Majestic Phoenix', 'Divine Chimera', 'Shadow Serpent', 'Chaos Roc']


// generate 10 objects with random stats and names
function makeCreaturesList() {
  const creaturesList = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const hp = Math.floor(Math.random() * 51) + 50; // random number between 50-100
    const power = Math.floor(Math.random() * 21) + 10; // random number between 10-30
    const defense = Math.floor(Math.random() * 16) + 5; // random number between 5-20
    const creature = { name, hp, power, defense };
    creaturesList.push(creature);
  }

  return creaturesList;
}

function setCodeText(creaturesList) {
  const response = Prism.highlight(JSON.stringify(creaturesList), Prism.languages.javascript, 'javascript');
  const codeContainer = document.querySelector("#code");

  codeContainer.innerHTML = response;
}

const handleWindowLoad = () => {
  window.removeEventListener("load", handleWindowLoad);
}

window.addEventListener("load", handleWindowLoad);