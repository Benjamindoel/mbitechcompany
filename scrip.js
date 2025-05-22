document.querySelectorAll('nav a').forEach(function (anchor) { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); target.scrollIntoView({ behavior: 'smooth' }); }); }); 
    const darkModeToggle = document.getElementById("dark-mode-toggle"); darkModeToggle.addEventListener("click", () => { document.body.classList.toggle("dark-mode"); localStorage.setItem
        ("darkMode",document.body.classList.contains("dark-mode")); }); // Keep user preference on page reload if (localStorage.getItem("darkMode") === "true") { document.body.classList.add("dark-mode"); } 
        
        document.querySelectorAll('nav a').forEach(function (anchor) { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); target.scrollIntoView({ behavior: 'smooth' }); }); }); 
            
            