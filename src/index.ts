import Article from "./class/article";
import Warehouse from "./class/warehouse";

const xbox = new Article("XB-SX", 5, 500);
const ps5 = new Article("PS-5", 1, 550);
const gamingComputer = new Article("GAMING-CPT", 10, 1000);

const warehouse = new Warehouse([xbox, ps5, gamingComputer]);
warehouse.render();

const addForm: HTMLFormElement = document.getElementById(
  "add-article"
) as HTMLFormElement;

const searchInput: HTMLInputElement = document.getElementById(
  "search"
) as HTMLInputElement;

searchInput.addEventListener("keyup", (e) => {
  const target: HTMLInputElement = e.target as HTMLInputElement;
  const val = target.value;
  if (val) {
    try {
      const article = warehouse.find(val);
      warehouse.render(article);
    } catch (e) {
      console.error(e);
      warehouse.render();
    }
  }
});

addForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addForm);

  const data = {
    ref: formData.get("ref") as string,
    qty: parseInt(formData.get("qty") as string),
    price: parseFloat(formData.get("price") as string),
  };

  console.log(data);

  if (data.ref == null || data.qty == null || data.price == null) {
    alert("Forbidden null element");
  }

  const article = new Article(data.ref, data.qty, data.price);

  warehouse.addArticle(article);
  warehouse.render();
});
