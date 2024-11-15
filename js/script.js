// NAVBAR
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navItems = navbar.querySelectorAll("li");
  
    navItems.forEach(item => {
      item.addEventListener("mouseover", function () {
        // Hapus kelas 'scale-x-100' dari semua elemen span di navbar
        navItems.forEach(nav => {
          nav.querySelector("span").classList.remove("scale-x-100");
        });
  
        // Tambahkan kelas 'scale-x-100' pada elemen span di item yang diklik
        this.querySelector("span").classList.add("scale-x-100");
      });
    });
  });
  

  // SIDE NAVBAR
  const sideNav = document.querySelector('aside');

    function openNavbar(){
      sideNav.classList.add('translate-y-0');
      sideNav.classList.remove('-translate-y-full');
    }

    function closeNavbar(){
      sideNav.classList.remove('translate-y-0')
      sideNav.classList.add('-translate-y-full')
    }