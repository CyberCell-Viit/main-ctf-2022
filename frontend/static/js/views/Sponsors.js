import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vishwa CTF | Type of Questions");
  }

  async getHtml() {
    return `
    <div class="container">
    Sponsors
    </div>
    `;
  }
}
