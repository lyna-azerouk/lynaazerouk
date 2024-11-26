
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
  const projects = document.getElementById('projects');

  let currentIndex = 0;
  const Items = [project1, project2, project3, project4]

  function showNext() {
    Items[currentIndex].remove();
    Items[currentIndex+2].style.display = 'block'
    currentIndex = currentIndex + 1;
  }

  function showPrev() {
    Items[currentIndex + 1].remove();
    projects.insertBefore(Items[currentIndex -1], Items[currentIndex])
    currentIndex = currentIndex - 1;
  }

  const prevButton =  document.getElementById('slider-button-left');
  const nextButton =  document.getElementById('slider-button-right');
  prevButton.addEventListener('click', showPrev);
  nextButton.addEventListener('click', showNext);

});
