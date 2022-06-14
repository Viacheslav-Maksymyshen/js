// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potionIndex = this.potions[i].name.indexOf(potionName);
//       console.log(potionIndex);
//       if (potionIndex !== -1) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       const potionIndex = potion.name.indexOf(oldName);
//       if (potionIndex !== -1) {
//         potion.name = newName;
//       }
//     }
//     return console.log(`Potion ${oldName} is not in inventory!`);
//   },
// };

// atTheOldToad.getPotions(); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }); //в масиві potions останнім елементом буде цей об'єкт
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 }); //в масиві potions останнім елементом буде цей об'єкт

//atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); //масив potions не змінюється
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // массив potions не змінюється
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }); // "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }); // "Error! Potion Stone skin is already in your inventory!"

// atTheOldToad.removePotion('Dragon breath'); //у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.removePotion('Speed potion'); //у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'); //у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
console.table(atTheOldToad.getPotions());
