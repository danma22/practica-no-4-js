const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remover seleccionados
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // mostrar otros articulos
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");

    const imgTab = document.getElementById("imgTab");
    imgTab.src = "imgs/"+id+".jpg"
  }
});

const imgs = document.querySelectorAll('.imgs');
imgs.forEach((img) => {
  img.addEventListener("click", function(e){
    let imgModal = document.getElementById("imgModal");
    imgModal.src = "imgs/"+img.id+".jpg";
  })
});