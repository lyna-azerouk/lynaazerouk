
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('show_details');
  const fn_button = document.getElementById('show_fn_details');

  button.addEventListener('click', function () {
    const lip6_details = document.getElementById('lip6_details');
    if (lip6_details.style.display === 'none' || !lip6_details.style.display) {
      lip6_details.style.display = 'block';
    } else {
      lip6_details.style.display = 'none';
    }
  });

  fn_button.addEventListener('click', function () {
    const fn_details = document.getElementById('fn_details');
    if (fn_details.style.display === 'none' || !fn_details.style.display) {
        fn_details.style.display = 'block';
    } else {
        fn_details.style.display = 'none';
    }
  });

  const project1 = document.getElementById('project1');
  const project2 = document.getElementById('project2');
  const project3 = document.getElementById('project3');
  const project4 = document.getElementById('project4');
  const project5 = document.getElementById('project5');

  let currentIndex = 0;
  const Items = [project1, project2, project3, project4, project5];
  
  function showNext() {
    if (currentIndex < Items.length - 2) {
      Items[currentIndex].style.display = 'none';
      Items[currentIndex + 1].style.display = 'none';
      currentIndex++;
      Items[currentIndex].style.display = 'block';
      Items[currentIndex + 1].style.display = 'block';
      Items[currentIndex + 1].classList.add('ml-10');
      Items[currentIndex].classList.remove('ml-10');
      Items[currentIndex].classList.add('transition-all', '-translate-x-2', 'duration-900', 'ease-out');
      Items[currentIndex].style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
    }
  }
  
  function showPrev() {
    if (currentIndex > 0) {
      Items[currentIndex].style.display = 'none';
      Items[currentIndex + 1].style.display = 'none';
      Items[currentIndex].classList.add('transition-all', 'translate-x-2', 'duration-900', 'ease-out');
      Items[currentIndex].style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
      Items[currentIndex].classList.remove('ml-10');

      currentIndex--;
      Items[currentIndex].style.display = 'block';
      Items[currentIndex + 1].style.display = 'block';
      Items[currentIndex + 1].classList.add('ml-10');
    }
  }
  
  const prevButton = document.getElementById('slider-button-left');
  const nextButton = document.getElementById('slider-button-right');
  prevButton.addEventListener('click', showPrev);
  nextButton.addEventListener('click', showNext);

  Items[currentIndex].style.display = 'block';
  Items[currentIndex + 1].style.display = 'block';
  

});
