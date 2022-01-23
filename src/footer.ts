export class Footer {
  footerText: string;
  constructor() {
    console.log("Footer constructor");
    this.footerText = "Webpack demo";
  }

  getFooterText(): string {
    return this.footerText;
  }
}
