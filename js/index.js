const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector('nav');
nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector('.cta');
let div = cta.querySelector('.cta-text');
div.querySelector('h1').textContent = siteContent['cta']['h1'];
div.querySelector('button').textContent = siteContent['cta']['button'];

let ctaImg = cta.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content section

//top content section
let topContent = document.querySelector('.top-content')
//features section
let textContent = topContent.querySelector('.text-content');
textContent.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textContent.querySelector('p').textContent = siteContent['main-content']['features-content'];

//about section
let textContent2 = topContent.querySelector('.text-content:nth-child(2)');
textContent2.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textContent2.querySelector('p').textContent = siteContent['main-content']['about-content'];

//middle image section
let mainContent = document.querySelector('.main-content');
let middleImg = mainContent.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content section
let bottomContent = document.querySelector('.bottom-content');

//services section
let textContent3 = bottomContent.querySelector('.text-content');
textContent3.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
textContent3.querySelector('p').innerHTML = siteContent['main-content']['services-content'];

//product section
let textContent4 = bottomContent.querySelector('.text-content:nth-child(2)');
textContent4.querySelector('h4').innerHTML = siteContent['main-content']['product-h4'];
textContent4.querySelector('p').innerHTML = siteContent['main-content']['product-content'];

//vision section
let textContent5 = bottomContent.querySelector('.text-content:last-child');
textContent5.querySelector('h4').innerHTML = siteContent['main-content']['vision-h4'];
textContent5.querySelector('p').innerHTML = siteContent['main-content']['vision-content'];

//contact section
let contact = document.querySelector('.contact');
let contactH4 = contact.querySelector('h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let contactAddress = contact.querySelector('p');
contactAddress.innerHTML = siteContent['contact']['address'];

let contactPhone = contact.querySelector('p:nth-child(3)');
contactPhone.innerHTML = siteContent['contact']['phone'];

let contactEmail = contact.querySelector('p:nth-child(4)');
contactEmail.innerHTML = siteContent['contact']['email']

//footer section
let footer = document.querySelector('footer');
let footerP = footer.querySelector('p');
footerP.innerHTML = siteContent['footer']['copyright'];

