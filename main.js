let humbrger = document.querySelector(".humbrger");
let navMenu = document.querySelector(".nav-menu");
humbrger.addEventListener("click", () => {
  humbrger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const select = (s) => document.querySelector(s);
const btn = select(".expandable-button");
btn.addEventListener("click", () => {
  btn.classList.toggle("expanded");
});

let navLink = document.querySelector(".nav-link");
navLink.addEventListener("click", () => {
  let animate = document.querySelector("#titleAbout");
  animate.classList.add("animate__animated animate__fadeInUp");
});

function showAbout() {
  aboutPage = document.querySelector(".about");
  aboutPage.style.left = "0";
}

function closeAbout() {
  aboutPage = document.querySelector(".about");
  aboutPage.style.left = "-100%";
}

function showResume() {
  resumePage = document.querySelector(".resume");
  resumePage.style.left = "0";
}

function closeResume() {
  resumePage = document.querySelector(".resume");
  resumePage.style.left = "-100%";
}

function showPortofolio() {
  portofolioPage = document.querySelector(".portofolio");
  portofolioPage.style.left = "0";
}

function closePortofolio() {
  portofolioPage = document.querySelector(".portofolio");
  portofolioPage.style.left = "-100%";
}

function showContact() {
  contactPage = document.querySelector(".contact");
  contactPage.style.left = "0";
}

function closeContact() {
  contactPage = document.querySelector(".contact");
  contactPage.style.left = "-100%";
}

let theData = {
  name: "YOUSEEF",
  description: "Coding is Cool Art Challenging",
};
let mainName = document.createElement("h1");
mainName.innerHTML = theData.name;
document.body.appendChild(mainName);
mainName.style.position = "absolute";
mainName.style.top = "40%";
mainName.style.left = "41%";
mainName.style.fontSize = "60px";
mainName.style.color = "#fff ";
mainName.classList.add("main-name");

async function init() {
  const node = document.querySelector("#type-text");

  await sleep(1000);
  node.innerText = "";
  await node.type("Graphic Design , ");

  while (true) {
    await node.type("Fantastic!");
    await sleep(2000);
    await node.delete("Fantastic!");
    await node.type("Art!");
    await sleep(2000);
    await node.delete("Art!");
  }
}
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
  get typeInterval() {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character;
      await sleep(this.typeInterval);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1);
      await sleep(this.typeInterval);
    }
  }
}
customElements.define("type-async", TypeAsync, { extends: "span" });
init();

const cardData = [
  {
    icon: `<i class="fa-brands fa-discord icon"></i>`,
    heading: "Design Trends",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: `<i class="fa-solid fa-images icon"></i>`,
    heading: "PSD Design",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: `<i class="fa-solid fa-comments icon"></i>`,
    heading: "Customer Support",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: `<i class="fa-brands fa-dribbble icon"></i>`,
    heading: "Web Development",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: `<i class="fa-brands fa-wordpress icon"></i>`,
    heading: "Fully Responsive",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: `<i class="fa-solid fa-star icon"></i>`,
    heading: "Branding",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

let postContainer = document.querySelector(".card-container");

let postMethod = () => {
  cardData.map((postData) => {
    let postElemnt = document.createElement("div");
    postElemnt.classList.add("card");
    postElemnt.innerHTML = `
            ${postData.icon}
            <h1 class="card-title">${postData.heading}</h1>
            <p class="card-body">${postData.body}</p>
        `;
    postContainer.appendChild(postElemnt);
  });
};
postMethod();

const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

planContainer = document.querySelector(".plan-container");

const planData = [
  {
    icon: `<i class="fa-solid fa-cloud icon"></i>`,
    heading: "Standard",
    price: "$19/month",
    body: `
        <ul class="advantages">
            <li>Mobile App Design</li>
            <li>Responsive Design</li>
            <li>DataBase Development</li>
            <li>Web Design</li>
            <li>24/7 Support</li>
        </ul>
        `,
    button: `Get`,
  },
  {
    icon: `<i class="fa-solid fa-ghost"></i>`,
    heading: "Professional",
    price: "$22/month",
    body: `
        <ul class="advantages">
            <li>Mobile App Design</li>
            <li>Responsive Design</li>
            <li>DataBase Development</li>
            <li>Web Design</li>
            <li>24/7 Support</li>
        </ul>
        `,
    button: `Get`,
  },
  {
    icon: `<i class="fa-solid fa-fire"></i>`,
    heading: "Business",
    price: "$30/month",
    body: `
        <ul class="advantages">
            <li>Mobile App Design</li>
            <li>Responsive Design</li>
            <li>DataBase Development</li>
            <li>Web Design</li>
            <li>24/7 Support</li>
        </ul>
        `,
    button: `Get`,
  },
];

let planMethod = () => {
  planData.map((planPost) => {
    let plan = document.createElement("div");
    plan.classList.add("plan");
    plan.innerHTML = `
        ${planPost.icon}
        <h1>${planPost.heading}</h1>
        <h3>${planPost.price}</h3>
        ${planPost.body}
        <button class="butt">${planPost.button}</button>
        `;
    planContainer.appendChild(plan);
  });
};
planMethod();

let spans = document.querySelectorAll(".progress-bar span");
spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});

function addClass() {
  let video = document.getElementsByClassName(".video");
  video.classList.add("show");
}

let liFilter = document.querySelectorAll(".gallery-heading li");
let imgs = document.querySelectorAll(".products img");
liFilter.forEach((li) => {
  li.onclick = function () {
    liFilter.forEach((li) => {
      li.className = "";
    });
    li.className = "active";
    imgs.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") == li.textContent.toLowerCase() ||
        li.textContent == "All"
      ) {
        img.style.display = "block";
      }
    });
  };
});

// const products = [
//     {
//         itemName: "Pizaa",
//         itemPhoto: "/css/images/pizza.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
//     {
//         itemName: "Burger",
//         itemPhoto: "/css/images/burger.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
//     {
//         itemName: "Chicken",
//         itemPhoto: "/css/images/chicken.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
//     {
//         itemName: "Shesh",
//         itemPhoto: "/css/images/shesh.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
//     {
//         itemName: "Crespy",
//         itemPhoto: "/css/images/crespy.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
//     {
//         itemName: "Potato",
//         itemPhoto: "/css/images/potato.png",
//         itemPrice: "40$",
//         itemButton: `<button class="butt">Add To Cart</button>`
//     },
// ]
// let productsContainer = document.querySelector(".products");

// let productsMethod = () => {
//     products.map((itemPost) => {
//         let item = document.createElement("div")
//         item.classList.add("item");
//         item.innerHTML = `
//         <img class="item-photo" src="${itemPost.itemPhoto}"/>
//         <h3 class="item-title">${itemPost.itemName}</h3>
//         <span class="item-price">${itemPost.itemPrice}</span>
//         `
//         productsContainer.appendChild(item);
//     })
// }
// productsMethod();
