export class TangoStyled {
    constructor(styles) {
        this.styles = styles;
        const stylesheet = new CSSStyleSheet();
        stylesheet.insertRule(this.styles, stylesheet.cssRules.length);
        document.adoptedStyleSheets.push(stylesheet); // fix
    }
}
