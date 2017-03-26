let count = 0

function narwhalClicks(){
  count ++;
  clicks.textContent = count
};

const frank = document.getElementById('frank');

frank.addEventListener('click', narwhalClicks);

const clicks = document.getElementById('clicks');

clicks.textContent = count