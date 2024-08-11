import fs from 'fs';

const menu = [
  {
    id: 1,
    name: 'Shan Khout Swell',
    isAvailable: true,
  },
];
const first = fs.writeFileSync('menu.json', JSON.stringify(menu));
console.log(first);
