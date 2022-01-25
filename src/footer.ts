export class Footer {
  footerText: string;
  constructor() {
    console.log("Footer constructor");
    this.footerText = "Webpack demo";

    this.logSomething("Hello");
    this.logSomething();
  }

  getFooterText(): string {
    return this.footerText;
  }

  logSomething(smth?: string): void {
    if (smth) {
      console.log(smth);
    } else {
      console.log("rien");
    }
  }

  log(): void {
    console.log("Footer log");
  }
}
