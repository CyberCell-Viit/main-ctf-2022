import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("VishwaCTF | Type of Questions");
  }

  async getHtml() {
    return `
    <div class="container">Find </div>
    `;
  }
}
