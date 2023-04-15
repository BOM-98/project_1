// Get the chapter-sidebar element
const chapterSidebar = document.querySelector('.chapter-sidebar');
const blogContent = document.querySelector('.blog-content');
const formPosition = window.scrollY + document.querySelector('.contact_section').getBoundingClientRect().top;

/**
 * Checks the window scroll position and toggles the 'sidebar-sticky' class on the
 * 'chapterSidebar' element based on specified conditions.
 * If the window scroll is below 400px and above (formPosition - 400)px, the
 * 'sidebar-sticky' class is added to the 'chapterSidebar' element. Otherwise,
 * the class is removed.
 */
function checkScroll() {
  // Check if window scroll is below 400px and above (formPosition - 400)px
  if (window.pageYOffset >= 400 && window.pageYOffset <= formPosition - 400) {
    chapterSidebar.classList.add('sidebar-sticky');
  } else {
    chapterSidebar.classList.remove('sidebar-sticky');
  }
}

// Attach the checkScroll function to the window scroll event
window.addEventListener('scroll', checkScroll);