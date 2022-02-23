import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
   constructor() {
       super();
       this.setTitle("Vishwa CTF | Sponsors");
   }

async getHtml() {
    return (
        `
        <div class="container spons-container">
        <div class="row spons-row">
          <h1 class="text-center fifth">Title Sponsors</h1>
          <div class="d-flex justify-content-center title-spons">
            <div>
              <i>To Be Announced</i>
              <!-- <img src="/static/images/ctf logo.png" alt="sponsor" /> -->
            </div>
            <div>
              <!-- <img src="/static/images/ctf logo.png" alt="sponsor" /> -->
            </div>
          </div>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
  
        <div class="row spons-row">
          <h1 class="text-center fifth">Gold Sponsors</h1>
  
          <div class="d-flex justify-content-center gold-spons">
            <i>To Be Announced</i>
            <div class="">
              <!-- <img src="/static/images/ctf logo.png" alt="sponsor" /> -->
            </div>
            <div>
              <!-- <img src="/static/images/ctf logo.png" alt="sponsor" /> -->
            </div>
          </div>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
        <div class="row spons-row">
          <h1 class="text-center fifth">Silver Sponsors</h1>
  
          <div class="d-flex justify-content-center gold-spons">
            <div class="">
              <img
                height="100"
                src="/static/images/sponsors-logo/silver/EPIC_LOGO_Small.png"
                alt="sponsor"
              />
            </div>
          </div>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
        <div class="row spons-row">
          <h1 style="font-size: 30px" class="text-center fifth">
            Comunity Sponsors
          </h1>
          <div class="d-sm-flex justify-content-center gold-spons">
            <center class="">
              <img
                src="/static/images/sponsors-logo/community/darkArmy.png"
                alt="sponsor"
              />
            </center>
            <center class="mx-5 mt-3 spons-comunity-mid">
              <img
                src="/static/images/sponsors-logo/community/infosec-logo.jpeg"
                alt="sponsor"
              />
            </center>
            <center class="mt-4">
              <img
              style="background-color: white; padding: 10px; width: 200px"
                src="/static/images/sponsors-logo/community/musec.png"
                alt="sponsor"
              />
            </center>
          </div>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
        <div class="">
          <center class="d-sm-flex justify-content-center gold-spons">
            <center class="col-sm-3">
              <h1 style="font-size: 20px" class="fifth">Certificate Sponsor</h1>
              <img
                style="background-color: white"
                class="mt-3"
                height="40px"
                src="/static/images/sponsors-logo/certificate/GMC_logo.png"
                alt="sponsor"
              />
            </center>
            <center class="col-sm-3 spons-infra">
              <h1 style="font-size: 20px" class="fifth">
                Infrastructure Sponsor
              </h1>
              <img
                style="background-color: white"
                src="/static/images/sponsors-logo/infrastructure/logo-11_1.png"
                alt="sponsor"
              />
            </center>
          </center>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
        <div class="row spons-row">
          <h1 style="font-size: 30px" class="text-center fifth">
            marketing Sponsors
          </h1>
          <div class="d-flex justify-content-center gold-spons">
            <i>To Be Announced</i>
            <!-- <div class="">
                      <img src="/static/images/sponsors-logo/marketing/" alt="sponsor" />
                  </div>
                  <div class="mx-5">
                      <img src="/static/images/sponsors-logo/community/infosec-logo.jpeg" alt="sponsor" />
                  </div>
                  <div  class="mt-4">
                      <img   src="/static/images/sponsors-logo/community/musec.png" alt="sponsor" />
                  </div> -->
          </div>
          <center>
            <div class="my-hr"></div>
          </center>
        </div>
      </div>
   `
    );
        
            
        
    
}
}