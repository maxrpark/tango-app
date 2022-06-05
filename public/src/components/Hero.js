import { TangoStyled } from '../tango/index.js';
const Hero = (props) => {
    const { title, subtitle } = props;
    /*template*/
    return `
    <div class="hero">
      <h1>${title}</h1>
      <h1>${subtitle}</h1>
    </div>
 `;
};
// STYLES
const styles = [
    /*css*/ `
.hero{
  text-align:center;
  height: 20vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap: 1rem;
  background-color: var(--main-dark-color-1);
  color:var(--main-color)
}
`,
];
new TangoStyled(styles);
export default Hero;
