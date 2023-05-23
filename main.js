
// Lấy danh sách các menu item có sub-menu
const menuItems = document.querySelectorAll('.menu-item-has-children');

// Duyệt qua từng menu item
menuItems.forEach((menuItem) => {
    // Lắng nghe sự kiện hover vào menu item
    menuItem.addEventListener('mouseenter', () => {
        // Thêm class "active" vào sub-menu của menu item được hover
        const subMenu = menuItem.querySelector('.sub-menu');
        subMenu.classList.add('active');
    });

    // Lắng nghe sự kiện hover ra khỏi menu item
    menuItem.addEventListener('mouseleave', () => {
        // Loại bỏ class "active" khỏi sub-menu của menu item
        const subMenu = menuItem.querySelector('.sub-menu');
        subMenu.classList.remove('active');
    });
});


const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

window.addEventListener('scroll', () => {
if (window.pageYOffset > 200) {
scrollToTopBtn.classList.add('show');
} else {
scrollToTopBtn.classList.remove('show');
}
});




// response
const openBtn = document.getElementById('open-btn');
const overlay = document.getElementById('overlay');
const box = document.getElementById('box');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
overlay.style.opacity = '1';
overlay.style.pointerEvents = 'auto';
box.classList.add('show');
});

closeBtn.addEventListener('click', () => {
overlay.style.opacity = '0';
overlay.style.pointerEvents = 'none';
box.classList.remove('show');
});


// box

const moreLink = document.querySelector('.more-link');
const boxSubMenu = document.querySelector('.box-sub-menu');
const boxChildren = document.querySelector('.box-children');

moreLink.addEventListener('click', () => {
boxChildren.classList.toggle('open');
});



const moreLink2 = document.querySelector('.more-link-2');
  const boxSubMenu2 = document.querySelector('.box-sub-menu-2');
  const boxChildren2 = document.querySelector('.box-children-2');

  moreLink2.addEventListener('click', () => {
    boxChildren2.classList.toggle('open');
  });

// lịch 
  var currentDate = new Date();
  var selectedDate = new Date();
  var numDays = 9;

  function handleResponsiveChange(mq) {
  if (mq.matches) {
    
    numDays = 5;
  } else {
   
    numDays = 9; 
  }
  
  displayDates(); 
}
  

  var mediaQuery = window.matchMedia('(max-width: 600px)');
mediaQuery.addListener(handleResponsiveChange);
handleResponsiveChange(mediaQuery);



  function displayDates() {
    var dates = getDatesInRange(selectedDate, numDays);

    var output = '<div class="date-container">';
    dates.forEach(function (date) {
      output += generateDateElement(date);
    });
    output += '</div>';

    document.getElementById('dates').innerHTML = output;
  }

  function getDatesInRange(startDate, numDays) {
    var dates = [];
    for (var i = -Math.floor(numDays / 2); i <= Math.floor(numDays / 2); i++) {
      var date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  function generateDateElement(date) {
    var dateNumber = formatDate(date);
    var weekday = formatWeekday(date);

    var className = 'date';
    if (date.getTime() === selectedDate.getTime()) {
      className += ' selected-date';
    }

    var element = '<div class="' + className + '" onclick="selectDate(\'' + date.toISOString() + '\')">';
    element += '<span class="date-number">' + dateNumber + '</span>';
    element += '<span class="weekday">' + weekday + '</span>';
    element += '</div>';

    return element;
  }

  function formatDate(date) {
    var options = { day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  function formatWeekday(date) {
    var options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
  }

  function selectDate(dateString) {
    selectedDate = new Date(dateString);
    displayDates();
  }

  function selectDateFromInput() {
    
    var inputDate = document.getElementById('input-date').value;
    selectedDate = new Date(inputDate);
    displayDates();
  };




const openBtn2 = document.getElementById('open-btn-2');
const overlay2 = document.getElementById('overlay-2');
const box2 = document.getElementById('box-2');
const closeBtn2 = document.getElementById('close-btn-2');

openBtn2.addEventListener('click', () => {
  overlay2.classList.add('active');
  box2.classList.add('active');
});

closeBtn2.addEventListener('click', () => {
  overlay2.classList.remove('active');
  box2.classList.remove('active');
});









