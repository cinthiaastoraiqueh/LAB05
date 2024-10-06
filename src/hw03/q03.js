const rootDiv = document.getElementById('root');

const link = document.createElement('a');
link.href = 'https://www.google.com'; 
link.target = '_blank'; 
link.textContent = 'Google';

rootDiv.appendChild(link);

const ul = document.createElement('ul'); 

const heading2 = document.createElement('h2');
heading2.textContent = 'MANIPULANDO EL DOM';
rootDiv.appendChild(heading2); 


const buyList = [
  "books",
  "bread",
  "eraser",
  "earphones",
  "collection-cards",
  "hdmi",
  "vga",
  "motherboard",
  "university-books",
];

buyList.forEach(item => {
    const li = document.createElement('li'); 
    li.textContent = item; 
    ul.appendChild(li);
  });
  
  rootDiv.appendChild(ul);