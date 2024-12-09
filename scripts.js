// Função que busca os dados dos arquivos HTML
function fetchData(endpoint) {
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.text();
    });
}

// Seleção de botões na página com base em seus IDs
const homeButton = document.getElementById("back_home_button");
const aboutMeButton = document.getElementById("about_me_button");
const formationButton = document.getElementById("formation_button");
const portfolioButton = document.getElementById("portfolio_button");
const contactButton = document.getElementById("contact_button");
const knowMoreButton = document.getElementById("know_more");

// Seleção do elemento de conteúdo da página
const pageContent = document.querySelector(".page");
const navContent = document.querySelector("nav");
const mainContent = document.getElementById("main_content");

// Atribuindo funções de evento aos botõess
homeButton.onclick = homeContent;
aboutMeButton.addEventListener("click", aboutMeContent);
knowMoreButton.addEventListener("click", aboutMeContent);
formationButton.onclick = formationContent;
portfolioButton.onclick = portfolioContent;
contactButton.onclick = contactContent;

// Função para carregar o conteúdo da página// Função que carrega o conteúdo da página inicial
async function homeContent() {
  const response = await fetchData("home.html");

  pageContent.classList.remove("about_me", "formation", "portfolio", "contact");

  pageContent.classList.add("home");

  navContent.classList.remove("about_me", "formation", "portfolio", "contact");

  mainContent.innerHTML = response;
};


// Função que carrega o conteúdo da página "Sobre mim"
async function aboutMeContent() {
  const response = await fetchData("about_me.html");

  pageContent.classList.remove("home", "formation", "portfolio", "contact");
  pageContent.classList.add("about_me");
  navContent.classList.remove("formation", "portfolio", "contact");
  navContent.classList.add("about_me");
  mainContent.innerHTML = response;
};

// Função que carrega o conteúdo da página "Formação"
async function formationContent() {
  const response = await fetchData("formation.html");

  pageContent.classList.remove("home", "about_me", "portfolio", "contact");
  pageContent.classList.add("formation");
  navContent.classList.remove("about_me", "portfolio", "contact");
  navContent.classList.add("formation");
  mainContent.innerHTML = response;
}

// Função que carrega o conteúdo da página "Portfólio"
async function portfolioContent() {
  const response = await fetchData("portfolio.html");

  pageContent.classList.remove("home", "about_me", "formation", "contact");
  pageContent.classList.add("portfolio");
  navContent.classList.remove("about_me", "formation", "contact");
  navContent.classList.add("portfolio");
  mainContent.innerHTML = response;
}

// Função que carrega o conteúdo da página "Contato"
async function contactContent() {
  const response = await fetchData("contact.html");

  pageContent.classList.remove("home", "about_me", "formation", "portfolio");
  pageContent.classList.add("contact");
  navContent.classList.remove("about_me", "formation", "portfolio");
  navContent.classList.add("contact");
  mainContent.innerHTML = response;
}



