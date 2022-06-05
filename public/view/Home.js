import { TangoStyled } from '../tango/index.js';
import { Hero, Card } from '../components/index.js';
import { cardsData } from '../data/cardsData.js';
const Home = () => {
    const heroInfo = {
        title: 'Hellow World',
        subtitle: 'First tango app',
    };
    /*template*/
    return `
    <div class='content-section'>
    ${Hero(heroInfo)}
      <div class='card-container'>
    ${cardsData
        .map((item) => {
        return Card(item);
    })
        .join('')}
      </div>
    </div>
 `;
};
// STYLES
const styles = [
    /*css*/ `
.card-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-content: center;
  gap:1rem;
  width: 100%;
  padding: 1rem;
  height: 100%;
}
`,
];
new TangoStyled(styles);
export default Home;
