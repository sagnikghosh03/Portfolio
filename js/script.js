let menuIcon = document.querySelector("#menuicon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu if it's open
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    });
});

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove the 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add the 'active' class to the link associated with the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
        }
    });

    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Check if the header is sticky
    if (header.classList.contains("sticky")) {
        // Set color for icons when header is sticky (dark mode)
        navLinks.forEach(link => {
            link.style.color = "var(--text-color)";
        });
        darkModeicon.style.color = "var(--text-color)";
        // Add more icon color adjustments if needed
    } else {
        // Set color for icons when header is not sticky (light mode)
        navLinks.forEach(link => {
            link.style.color = "var(--white-color)";
        });
        darkModeicon.style.color = "var(--white-color)";
        // Add more icon color adjustments if needed
    }

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let darkModeicon = document.querySelector("#darkmodeicon");

darkModeicon.onclick = () => {
    darkModeicon.classList.toggle("bx-sun");
    document.body.classList.toggle('darkmode');
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal(".homecontent, .heading", { origin: 'top' });

ScrollReveal().reveal('.home-img img,.skills-container,.projects-box,.certificate-wrapper,.contact-form', { origin: 'bottom' })

ScrollReveal().reveal('.homecontent h1,.about-img img', { origin: 'left' })

ScrollReveal().reveal('.homecontent h3,.homecontent p,.about-content,.profession-container', { origin: 'right' });

let upArrow = document.querySelector(".footer-iconTop a");

upArrow.addEventListener('click', function (e) {
    e.preventDefault();

    document.body.scrollIntoView({
        behavior: 'smooth'
    });
});

function emailSend(){

    var name = document.getElementById('sender_name').value;
    var email = document.getElementById('sender_email').value;
    var number = document.getElementById('sender_number').value;
    var subject = document.getElementById('email-subject').value;
    var message = document.getElementById('sender_message').value;
    var body = "Name : " + name + "<br/> Email : " + email + "<br/> Number : " + number + "<br/> Subject : " + subject + "<br/> Message : " + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sagnikghosh333@gmail.com",
        Password : "96CB941BE59C5B043E1601EC540C8AE69475",
        To : 'sagnikghosh333@gmail.com',
        From : "sagnikghosh333@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => {
          if(message=='OK'){
             swal("Thank You!", "Your message has been sent!", "success"); 
          }
          else{
              swal("Error!", "Something went wrong!", "error");
          }
      }
    );
}

