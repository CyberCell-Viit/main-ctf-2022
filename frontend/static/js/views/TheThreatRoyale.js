import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("VishwaCTF | The Threat Royale");
  }

  async getHtml() {
    return `
    <div class="container">
    <center>
    <h1 style="font-family: unset; font-size:65px" class="title" data-text="Cybercell VIIT">Cybercell VIIT</h1>
    <h2 class="presents" style="color:#b00000; font-size: 20px;letter-spacing:2px;">In Association with</h2>    
  <div class='cloudsek-div'>
  <img
  class="mt-2"
src="/static/images/sponsors-logo/gold/cloudsek.png"
alt="sponsor"
/></div>
<h2 class="presents" style="color:#b00000; font-size: 20px;letter-spacing:2px;">Presents</h2>   

<div class='container form-div'>
<div class="ttr-form">
<iframe class='responsive-iframe' src="https://docs.google.com/forms/d/e/1FAIpQLSf4-Ichj18S-t0d-wN2bvDq4L6wG84SAZefvFtjB69ZNjYh7w/viewform?embedded=true" width="640" height="1865" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>   </div>
    </center>
</div>
<div>
    `;
  }
}
