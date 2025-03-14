document.body.scrollTo(0, 0);

const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.navbar__hamburger');
const menu = document.querySelector('.mobile__menu');
const body = document.querySelector('body');
const toggleCheckbox = document.querySelector('.toggleCheckbox');
const closeModal = document.querySelector('.close');

const localStorage = window.localStorage;

const editMode = localStorage.getItem('edit_mode');
const isEditMode = editMode == 'true' ?? false;
const editModeContainer = document.querySelector('.editMode');

const changeBodyBackground = document.querySelector('.changeBodyBackground');
const targetBodyBackground = document.getElementsByClassName('target-body-background');
const selectedBodyBackground = localStorage.getItem('target-body-background');

const changeFontColor = document.querySelector('.changeFontColor');
const targetFontColor = document.getElementsByClassName('target-font-color');
const selectedFontColor = localStorage.getItem('target-font-color');

const changeFontStyle = document.querySelector('.changeFontStyle');
const targetFontStyle = document.getElementsByClassName('target-font-style');
const selectedFontStyle = localStorage.getItem('target-font-style');

const backgroundClasses = ['bg-secondary', 'bg-dark', 'bg-basic', 'bg-primary',  'bg-tertiary'];
const fontClasses = ['text-basic', 'text-primary', 'text-secondary', 'text-tertiary', 'text-dark'];
const fontStyles = ['poppins', 'rubik', 'nunito', 'calistoga', 'autowide'];

if (selectedBodyBackground === null) {
  addClass(targetBodyBackground, 'bg-secondary');
  addClass(targetFontColor, 'text-basic');
} else {
  addClass(targetBodyBackground, selectedBodyBackground);
  addClass(targetFontColor, selectedFontColor);
}

addClass(targetFontStyle, selectedFontStyle);

document.getElementById('toggle').checked = isEditMode;

function toggleMenu() {
  hamburger.classList.toggle('navbar__hamburger--active');
  menu.classList.toggle('mobile__menu--active');
  body.classList.toggle('body-scroll-lock');
}

function addClass(elements, className) {
  if (className === null) {
    return;
  }

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
	}
}

function removeClass(elements, className) {
  if (className === null) {
    return;
  }

	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

const hideInfo = localStorage.getItem('hide-info');

if (hideInfo === null) {
  setTimeout (function (){
    document.getElementById('info').click();
  }, 3000)
}

closeModal.addEventListener('click', function (e) {
  localStorage.setItem('hide-info', true);
});

menu.addEventListener('click', function (e) {
  if (e.target.matches('.mobile__links a')) {
    toggleMenu();
  }
});

toggleCheckbox.addEventListener('click', function (e) {
  let toggle = document.getElementById('toggle');
  let key = 'edit_mode';
  localStorage.removeItem(key);
  if (toggle.checked) {
    localStorage.setItem(key, true);
    editModeContainer.style.display = 'block';
    body.style.padding = '0 0 100px 0';
  } else {
    localStorage.setItem(key, false);
    editModeContainer.style.display = 'none';
    body.style.padding = '0';
  }
});

if (isEditMode) {
  editModeContainer.style.display = 'block';
  body.style.padding = '0 0 100px 0';
} else {
  editModeContainer.style.display = 'none';
  body.style.padding = '0';
}

document.querySelector('.reset').addEventListener('click', function (e) {
  localStorage.clear();
  window.location.reload();
});


changeBodyBackground.addEventListener('click', function (e) {
  let value = e.target.classList.value;
  let key = 'target-body-background';
  
  if (value != '') {
    backgroundClasses.forEach(function (i){
      removeClass(targetBodyBackground, i);
    });
    localStorage.setItem(key, value);
    addClass(targetBodyBackground, value);
  }
});

changeFontColor.addEventListener('click', function (e) {
  let value = e.target.classList.value;
  let key = 'target-font-color';
  
  if (value != '') {
    fontClasses.forEach(function (i){
      removeClass(targetFontColor, i);
    });
    localStorage.setItem(key, value);
    addClass(targetFontColor, value);
  }
});

changeFontStyle.addEventListener('click', function (e) {
  let value = e.target.classList.value;
  let key = 'target-font-style';
  
  if (value != '') {
    fontStyles.forEach(function (i){
      removeClass(targetFontStyle, i);
    });
    localStorage.setItem(key, value);
    addClass(targetFontStyle, value);
  }
});

let width = window.screen.width;
let hobbies = document.getElementById('hobbies-bottom');
let hobbiesClasses = document.getElementsByClassName('hobbies');
hobbies.style.transform = 'translateY(100%)';
hobbies.style.bottom = '0';

if (width <= 768) {
  document.getElementById('hobbies-container').style.marginTop = '0';
  document.getElementById('hobbies').innerHTML = hobbies.innerHTML;
}

window.addEventListener('scroll', function(ev) {

  let title = document.getElementById('hobbies-title');  
  let footer = document.getElementById('contact');

  let footerDistance = footer.getBoundingClientRect().top;
  let distanceToTop = title.getBoundingClientRect().top;

  let main = document.getElementById('main');
  let mainImg = document.getElementById('main-img');
  let scrollTop = document.body.scrollTop;
  
  let leftContainer = document.getElementById('left-container');
  

  let distance;

  if (width > 900) {
    distance = 500;
  } else {
    distance = 550;
  }

  

  if (width > 768) {
    if (scrollTop <= 100) {
        main.classList.remove('sticky');
        hobbies.style.transform = 'none';
        hobbies.style.marginBottom = '-500px';
    }
    
    if (scrollTop > 100 && scrollTop < 1300) {
        main.classList.add('sticky');
        main.style.transform = 'translateY(0%)';
        hobbies.style.transform = 'translateY(0%)';
        hobbies.style.marginBottom = '0';
    }

    if (footerDistance < 600) {
      hobbies.style.transform = 'translateY(-100%)';
      hobbies.style.opacity = '0'; 
    }

    if (footerDistance > 600) {
      hobbies.style.transform = 'translateY(0)';
      hobbies.style.opacity = '1';
    }
  }



  if (distanceToTop < distance) {
      if (width > 768) {
        main.style.transition = '1s';
        main.style.transform = 'translateY(-100%)';

        mainImg.style.transition = '1s';
        mainImg.style.transform = 'translateX(100%)';

        leftContainer.style.transition = '1s';
        leftContainer.style.opacity = '0';
        leftContainer.style.transform = 'translateX(-100%)';
        
        hobbies.style.transition = '1s';
        hobbies.classList.add('fixed');
      }
  } else {
      if (width > 425) {
        main.style.transition = '1s';
        main.style.transform = 'translateY(0)';

        mainImg.style.transition = '1s';
        mainImg.style.transform = 'translateX(0)';

        leftContainer.style.transition = '1s';
        leftContainer.style.opacity = '1';
        leftContainer.style.transform = 'translateX(0)';

        hobbies.style.transition = '1s';
        hobbies.classList.remove('fixed');
      }
  }
});


const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

function toggleModal(target) {

  if (target === 'info-value') {
    var editBtn = document.getElementById('edit-button');
    var resetBtn = document.getElementById('reset-button');
    let resetBtnContainers = document.querySelectorAll('.reset-button-container');
    
    resetBtnContainers.forEach((i) => {
      i.innerHTML = resetBtn.innerHTML;
    });

    document.getElementById('edit-button-container').innerHTML = editBtn.innerHTML;
  }

  modal.style.display = "block";
  let modalContent = document.getElementById('modal-content');
  let targetContent = document.getElementById(target);
  modalContent.innerHTML = targetContent.innerHTML;
}

span.onclick = function() {
  modal.style.display = "none";
}
