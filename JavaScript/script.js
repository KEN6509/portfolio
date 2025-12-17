// Typing design
var typed = new Typed(".typing",{
    strings:["","Programmer","Web Developer","Software Devoloper"],
    typeSpeed: 100,
    BackSpped: 60,
    loop: true
})
// Navigation
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                     addBackSection(j);
                    // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target=element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active");
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector('.aside');
            navTogglerBtn.addEventListener('click', () =>
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }

// Contact
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      Subject = document.getElementById('contact-subject'),
      Message = document.getElementById('message'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Subject.value === '' || Message.value === '')
    {
        // add and remove color
        contactMessage.classList.remove('color');
        contactMessage.classList.add('messagecolor1');

        contactMessage.textContent = 'Write all the input fields. ';
    }
    else
    {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_zjvnoju','template_7qg0m4l','#contact-form','8GG_bwPustmU3fetg')
        .then(
            () => {
                // show message and add color
                contactMessage.classList.add('messagecolor2');
                contactMessage.textContent = 'Message sent ✓';

                // remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            },
            (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            }
        );
        
        contactName.value = '';
        contactEmail.value = '';
        Subject.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

