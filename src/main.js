

const images = [ './src/2.jpeg', './src/3.jpeg','./src/4.jpeg','./src/5.jpeg','./src/6.jpeg']; // Add as many as you want
let currentIndex = 0;
const head = ['Do you find your man handsome?', 
  'you are the reason behind his smile and his happiness 🥰',
  'Accha maaf bhi krdo na husband ko apne, please mann jao 😭',
  'I love you soo soooo soooooo much. Ek din aise hi same pic click krenge saath mein ❤️',
  'At last, I am gonna make you my wife for sure, we are gonna marry each other. I promise you.💍💑 '
];
let Index = 0;

document.querySelector('.yes').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to first
  document.getElementById('images').src = images[currentIndex];

  Index = (Index + 1) % head.length; // Loop back to first
  document.getElementById('desc').textContent= head[Index];
  
});

