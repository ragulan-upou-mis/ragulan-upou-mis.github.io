const navbar = document.querySelector('.navbar');
const hamburger = navbar.querySelector('.navbar__hamburger');
const menu = document.querySelector('.mobile__menu');
const body = document.querySelector('body');
const toggleCheckbox = document.querySelector('.toggleCheckbox');

const localStorage = window.localStorage;
// localStorage.clear();

const editMode = localStorage.getItem('edit_mode');
const isEditMode = editMode == 'true' ?? false;
const editModeContainer = document.querySelector('.editMode');

const changeBodyBackground = document.querySelector('.changeBodyBackground');
const targetBodyBackground = document.getElementsByClassName('target-body-background');
const selectedBodyBackground = localStorage.getItem('target-body-background');

const changeBackground = document.querySelector('.changeBackground');
const targetBackground = document.getElementsByClassName('target-background');
const selectedBackground = localStorage.getItem('target-background');

const changeFontColor = document.querySelector('.changeFontColor');
const targetFontColor = document.getElementsByClassName('target-font-color');
const selectedFontColor = localStorage.getItem('target-font-color');

const changeFontStyle = document.querySelector('.changeFontStyle');
const targetFontStyle = document.getElementsByClassName('target-font-style');
const selectedFontStyle = localStorage.getItem('target-font-style');

const backgroundClasses = ['bg-dark', 'bg-basic', 'bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-quaternary'];
const fontClasses = ['text-basic', 'text-primary', 'text-secondary', 'text-tertiary', 'text-quaternary', 'text-dark'];
const fontStyles = ['poppins', 'rubik', 'nunito', 'calistoga', 'autowide'];

addClass(targetBackground, selectedBackground);
addClass(targetBodyBackground, selectedBodyBackground);
addClass(targetFontColor, selectedFontColor);
addClass(targetFontStyle, selectedFontStyle);

document.getElementById('toggle').checked = isEditMode;

function toggleMenu() {
  hamburger.classList.toggle('navbar__hamburger--active');
  menu.classList.toggle('mobile__menu--active');
  body.classList.toggle('body-scroll-lock');
}

function addClass(elements, className) {
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
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

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

changeBackground.addEventListener('click', function (e) {
  let value = e.target.classList.value;
  let key = 'target-background';
  
  if (value != '') {
    backgroundClasses.forEach(function (i){
      removeClass(targetBackground, i);
    });
    localStorage.setItem(key, value);
    addClass(targetBackground, value);
  }
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

window.addEventListener('scroll', function(ev) {

  let hobbies = document.getElementById('hobbies');
  let title = document.getElementById('hobbies-title');
  let distanceToTop = hobbies.getBoundingClientRect().top;
  let rightContainer = document.getElementById('right-container');
  let leftContainer = document.getElementById('left-container');
  let width = window.screen.width;
  let distance;

  if (width > 900) {
    distance = 300;
  } else {
    distance = 550;
  }

  if (distanceToTop < distance) {
      if (width > 425) {
        leftContainer.style.transition = '1s';
        rightContainer.style.transition = '1s';
        rightContainer.style.transform = 'translateX(100%)';
        leftContainer.style.transform = 'translateX(-100%)';
        leftContainer.style.opacity = '0';
      }
      

      hobbies.innerHTML = rightContainer.innerHTML;
      hobbies.style.transition = '1s';
      hobbies.style.transform = 'translateX(0)';

      title.style.transition = '1s';
      title.style.transform = 'translateY(0)';
      title.style.opacity = '1';
  } else {
      if (width > 425) {
        rightContainer.style.transition = '1s';
        rightContainer.style.transition = '1s';
        rightContainer.style.transform = 'translateX(0)';
        leftContainer.style.transform = 'translateX(0)';
        leftContainer.style.opacity = '1';
      }

      hobbies.style.transition = '1s';
      hobbies.style.transform = 'translateX(100%)';

      title.style.transition = '1s';
      title.style.transform = 'translateX(-100%)';
      title.style.opacity = '0';
  }
});




const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];

const contents = {
  'eat': `
    <section>
      <center>
      <img src="images/eat.png" alt="Eat">
      <h1>We love to eat!</h1>
      </center>
      <br />
      <p>Who doesn't, right?</p>
      <br />
      <p>
        I love to go out and eat with my girlfriend &#x2665;&#xfe0f;
      </p>
      <br />
      <p>
        Because of my always busy schedule, my girlfriend and I only meet once or twice a week, usually during weekends, so we make the most out of it.
        We eat fast food, we go to coffee shops, but our always go to place is anywhere unlimited Korean Barbecue! Nothing will beat unli samgyupsal! lol &#128517;
      </p>
      <br />
      <p class="fun-fact">
        <b>Fun Fact!</b> My girlfriend is always on a diet, but she knows that food is my love language so she loves and hates me at the same time when we go out to eat &#128517;
      </p>
    </section>
  `,
  'unwind': 'I love to unwind',
  'travel': `
    <section>
      <center>
      <img src="images/motorcycle.png" alt="Eat">
      <h1>Travel is a must!</h1>
      </center>
      <br />
      <p>We work hard so we also deserve to relax sometimes right?</p>
      <br />
      <p>
        When me and my friends wants to catch up, we travel.
      </p>
      <br />
      <p>
        Sometimes we do breakfast rides but, mostly, our go to destinations are mountain viewpoints or beaches. Aside from the relaxation and the ambience, it's always the 
        stories and the laughs we share with each others.
      </p>
      <br />
      <p class="fun-fact">
        <b>Fun Fact!</b> We hate planned travels. We don't plan anything 'coz, for us, planned travels are always not happening. 
        For example, we want to go somewhere, we invite each other at 8 o'clock in the evening, we take off at 4am the next day. That's what I love in our circle. Unplanned but always the best.
      </p>
    </section>
  `
};

function toggleModal(target) {
  modal.style.display = "block";
  document.getElementById('modal-content').innerHTML = contents[target];
}

span.onclick = function() {
  modal.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
