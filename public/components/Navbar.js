import { TangoStyled } from '../tango/index.js';
const Navbar = () => {
    /*template*/
    return `
     <nav class='nav'>
      <ul class='navbar'>
        <li class='logo'><a href="#">Tango-JS</a></li>
        <li><a href="about.html">source code</a></li>
      </ul>
    </nav>
 `;
};
const styles = [
    /*css*/
    `
.links {
 display: flex;
 align-items: center;
 gap: .5rem;
}
`,
];
new TangoStyled(styles);
export default Navbar;
