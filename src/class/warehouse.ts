import Article from "./article";

export interface IWarehouse {
  addArticle(article: Article): void;
  find(ref: string): Article;
  render(article?: Article): void;
  getArticles: Article[];
}

class Warehouse implements IWarehouse {
  private readonly articles: Article[] = [];

  constructor(initialArticles?: Article[]) {
    if (initialArticles) {
      this.articles = initialArticles;
    }
  }

  get getArticles(): Article[] {
    return this.articles;
  }

  addArticle(article: Article): void {
    const hasArticle = this.articles.some((el) => {
      return el.ref === article.ref;
    });
    if (hasArticle) {
      throw new Error("Article already exists");
    }
    this.articles.push(article);
  }

  find(ref: string): Article {
    const article = this.articles.filter((el) => {
      return el.ref === ref;
    });
    if (article.length > 0) {
      return article[0];
    } else {
      throw new Error("Article not found");
    }
  }

  render(article?: Article): void {
    const warehouse = document.getElementById("warehouse");
    if (warehouse === null) {
      throw new Error("No table found");
    }
    const tbody = warehouse.querySelector("tbody");
    if (tbody === null) {
      throw new Error("Body found");
    }
    tbody.innerHTML = "";

    if (article) {
      const tableRow = article.toHTMLTableRow();
      tbody.appendChild(tableRow);
    } else {
      this.articles.forEach((el) => {
        const tableRow = el.toHTMLTableRow();
        tbody.appendChild(tableRow);
      });
    }

    console.log("Table generated");
  }
}
export default Warehouse;
