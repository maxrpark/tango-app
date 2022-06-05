import { TangoStyled } from '../tango/index.js';
const Card = (card) => {
    const { id, name, desc, img } = card;
    /*template*/
    return `
    <div class="card" id="${id}">
      <h3>${name}</h3>
      <img class="card-img" src="${img}" alt="${name}">
      <div class=card-info>
      <h4>${name}</h4>
      <p>${desc}</p>
      </div>
    </div>
 `;
};
// STYLES
const styles = [
    /*css*/
    `
  .card {
   display:flex;
   flex-direction:column;
   justify-content:center;
   box-shadow: var(--box-shadow-2);
   transition: var(--transition-1);
   border-radius: 5px;
   background: var(--main-dark-color-2);
   color:var(--main-color);

}`,
    /*css*/
    `
 .card:hover {
  box-shadow: var(--box-shadow-3);
  transform: translate(0, -2px) scale(1.01);
}`,
    /*css*/
    `
 .card h3 {
 text-align:center;
 padding: var(--padding-1);
}

`,
    /*css*/
    `
 .card-img {
  width:100%;
  height: 200px;
  object-fit:cover;
}

`,
    /*css*/
    `
  .card-info {
   width:100%;
   padding: .5rem
}`,
];
new TangoStyled(styles);
export default Card;
