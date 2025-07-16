
//hamburger menu 
function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //document means targeting an element and using it 
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//dark and light mode 
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.darkmode-toggle');
  const savedMode = localStorage.getItem('mode');
  const isDark = savedMode === 'dark';

  // Apply saved mode on load
  document.body.classList.toggle('dark-mode', isDark);
  toggles.forEach(toggle => {
    toggle.checked = isDark;

    toggle.addEventListener('change', () => {
      const isDarkNow = toggle.checked;
      document.body.classList.toggle('dark-mode', isDarkNow);
      localStorage.setItem('mode', isDarkNow ? 'dark' : 'light');

      // Optional: sync all toggles to match the checked state
      toggles.forEach(t => t.checked = isDarkNow);
    });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.getElementById('darkmode-toggle');

//   if (toggle) {
//     toggle.addEventListener('change', () => {
//       document.body.classList.toggle('dark-mode');
//     });
//   }
// });

// //stays in whichever mode it was in when refreshed 
// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.getElementById('darkmode-toggle');

//   //load saved mode on refresh
//   if (localStorage.getItem('mode') === 'dark') {
//     document.body.classList.add('dark-mode');
//     toggle.checked = true;
//   }

//   toggle.addEventListener('change', () => {
//     if (toggle.checked) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('mode', 'dark');
//     } else {
//       document.body.classList.remove('dark-mode');
//       localStorage.setItem('mode', 'light');
//     }
//   });
// });
