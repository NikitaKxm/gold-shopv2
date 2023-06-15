let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
function toggleDropdown() {
  let dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

let currentDateElement = document.getElementById('copyright');

  // Оновлюємо дату в елементі футера
  function updateCurrentDate() {
    let currentDate = new Date();
    currentDateElement.textContent = currentDate.getFullYear() + " website by rayane saada"; // 
  }
  updateCurrentDate();
