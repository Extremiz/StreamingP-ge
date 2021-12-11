const column = document.querySelectorAll(".column");
const tab = document.querySelectorAll(".tab");

column.forEach((cadaCol, i) => {
  column[i].addEventListener('click',()=>{
    column.forEach((cadaCol, i) => {
      column[i].classList.remove('is-selected')
      tab[i].classList.remove('is-selected')
    });
    column[i].classList.add('is-selected')
    tab[i].classList.add('is-selected')
  })
});
