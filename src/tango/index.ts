export class TangoStyled {
  styles: string[];
  constructor(styles: string[]) {
    this.styles = styles;
    const stylesheet = new CSSStyleSheet();
    this.styles.forEach((style: string) => {
      try {
        stylesheet.insertRule(style, stylesheet.cssRules.length);
      } catch (error) {
        console.log(error);
      }
    });

    (document as any).adoptedStyleSheets.push(stylesheet); // fix

    // let head = document.getElementsByTagName('head')[0];
    // let link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.innerHTML = this.styles;
    // console.log(typeof link);
    // console.log(link);
    // // link.href = 'data:text/css,' + escape(css); // IE needs this escaped
    // head.appendChild(link);
  }
}

// console.log(stylesheet.cssRules);
// // @ts-ignore: Unreachable code error
// stylesheet.replaceSync(this.styles);
// // @ts-ignore: Unreachable code error
// document.adoptedStyleSheets = [stylesheet.cssRules];

// You can insert a new stylesheet link with a data URI. Assuming your CSS rules are in a variable css, then:

// head = document.getElementsByTagName('head')[0];
// stylesheet = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = 'data:text/css,' + escape(css);  // IE needs this escaped
// head.appendChild(link);
// This works at least in the latest Chrome, Firefox and IE.

// Alternatively, you could add your rules one by one using insertRule and simply wrap each addition in a try block, so that the errors thrown by prefixed rules are ignored.
