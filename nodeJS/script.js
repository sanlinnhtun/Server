// const getMenu = document.getElementsByClassName('menu');
const createMenuBtn = document.getElementById('create-menu');
const menuContainer = document.querySelector('.menu-conatainer');
const createMenu = async () => {
  const menuName = document.querySelector('input[name=name]');
  const menuPrice = document.querySelector('input[name=price]');
  const menu = {
    name: menuName.value,
    price: menuPrice.value,
  };
  const response = await fetch('http://localhost:3000/menu', {
    method: 'POST',
    body: JSON.stringify(menu),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  const menuDiv = document.createElement('div');
  const ul = document.createElement('ul');
  data.forEach((menu) => {
    const li = document.createElement('li');
    li.textContent = data.name;
    ul.appendChild(li);
  });
  menuDiv.append(ul);
  menuContainer.innerHTML = '';
  console.log('data form server', data);
};
createMenuBtn.addEventListener('click', createMenu);
// console.log('#########', createMenu);
