export interface IArticle {
  ref: string;
  qty: number;
  price: number;
  toString: () => string;
}

class Article implements IArticle {
  ref: string;
  qty: number;
  price: number;

  constructor(ref: string, qty: number, price: number) {
    this.ref = ref;
    this.qty = qty;
    this.price = price;
  }

  toString(): string {
    return `${this.ref} x${this.qty} : ${this.linePrice}`;
  }

  get linePrice(): number {
    return this.price * this.qty;
  }

  toHTMLTableRow(): HTMLElement {
    const HTMLRow = document.createElement("tr");
    const HTMLRef = document.createElement("td");
    HTMLRef.innerText = this.ref;
    const HTMLQty = document.createElement("td");
    HTMLQty.innerText = this.qty.toString();
    const HTMLPrice = document.createElement("td");
    HTMLPrice.innerText = this.linePrice.toString();

    HTMLRow.appendChild(HTMLRef);
    HTMLRow.appendChild(HTMLQty);
    HTMLRow.appendChild(HTMLPrice);

    return HTMLRow;
  }
}
export default Article;
