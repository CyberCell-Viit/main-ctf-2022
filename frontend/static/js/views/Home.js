import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Vishwa CTF | Home");
    }

    async getHtml() {
        return `<div>
        <div class="main-title-div">

            <h1 style="font-family: unset;" class="title" data-text="Cybercell VIIT">Cybercell VIIT</h1>
            <h2 class="presents" style="color:#b00000;">Presents</h2>
            <section id="ctf_logo"></section>
            <div class="time ">
                <div id="day-box" class="time-box ">
                    <div id="days"> </div>
                    <p>Days</p>
                </div>
                <div class="time-box">
                    <div id="hours"> </div>
                    <p>Hours</p>
                </div>
                <div class="time-box">
                    <div id="min"> </div>
                    <p>Minutes</p>
                </div>
                <div class="time-box">
                    <div id="sec"> </div>
                    <p>Seconds</p>
                </div>
            </div>

            <div class="event-duration">
                <p>19th March 04:00pm IST <span class="mx-2 text-center" style="color:#b00000; font-size: 18px; 
                letter-spacing: 5px; display:block;">TO</span> 21st March 04:00pm IST</p>
            </div>

            <div class="button-div">
                <a class="a-n2" target="_blank" href="https://discord.gg/M4KwSDpE8t">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p class="play-button" style="margin:0 auto">
                        Join Discord <i class="fab fa-discord"></i></p>
                </a>
            </div>
        </div>

    </div>
    <div class="container px-4 py-5" id="custom-cards">
        <p class="glitch sponsor-title" data-text="Co-Powered By" style="text-align: center;font-weight: 700;">
            Co-Powered <span style="color: #b00000;">By</span> </p>

        <div class="row justify-content-center">
        <center class="">
      <a href="https://burpbounty.net/" target="_blank">
        <img class="title-img" src="/static/images/sponsors-logo/title/BurpBounty.png" alt="sponsor" /> </div>
      </center>
      </a>
        </div>
    </div>
    </div>

    <div class="container spons-container">
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
    <div class="row spons-row ">
      <h1 class="text-center fifth">Silver Sponsors</h1>

      <div class="d-flex  justify-content-center gold-spons">
        <div class="">
        <i>To Be Announced</i>
        </div>
      </div>
      <center>
        <div class="my-hr"></div>
      </center>
    </div>
    <div class="row spons-row">
      <h1 style="font-size: 20px" class="text-center fifth">
        Comunity Sponsors
      </h1>
      <div class="d-sm-flex mt-3 justify-content-center gold-spons">
        <center class="mx-5 mb-3">
           <a target="_blank" href="">
                       <img
            src="/static/images/sponsors-logo/community/noobArmy.jpeg"
            alt="sponsor"
          /></a>
        </center>
        <center class="">
         <a target="_blank" href="">
                       <img
          src="/static/images/sponsors-logo/community/darkArmy.png"
          alt="sponsor"
        /></a>
      </center>
        <center class="mx-5 mt-3 spons-comunity-mid">
           <a target="_blank" href="">
                       <img
            src="/static/images/sponsors-logo/community/infosec-logo.jpeg"
            alt="sponsor"
          /></a>
        </center>
        <center class="mt-4">
           <a target="_blank" href="">
                       <img
          style="background-color: white; padding: 10px; width: 200px"
            src="/static/images/sponsors-logo/community/musec.png"
            alt="sponsor"
          /></a>
        </center>
      </div>
      <center>
        <div class="my-hr"></div>
      </center>
    </div>
    <div class="">
      <center class="d-sm-flex justify-content-center gold-spons">
        <center class="col-sm-2">
          <h1 style="font-size: 17px" class="fifth">Certificate Sponsor</h1>
          <a target="_blank" href="https://givemycertificate.com/">
          <img
            style="background-color: white"
            class="mt-3"
            height="40px"
            src="/static/images/sponsors-logo/certificate/GMC_logo.png"
            alt="sponsor"
          /></a>
        </center>
        <center class="col-sm-3 spons-infra">
          <h1 style="font-size: 17px" class="fifth">
            Infrastructure Sponsor
          </h1>
           <a target="_blank" href="http://code-gurukul.com/">
                       <img
            style="background-color: white"
            src="/static/images/sponsors-logo/infrastructure/logo-11_1.png"
            alt="sponsor"
          /></a>
        </center>
        <center class="col-sm-2 spons-infra">
          <h1 style="font-size: 17px" class="fifth">
            Youth Partner
          </h1>
           <a target="_blank" href="https://yinforchange.in/">
                       <img
            style="background-color: white"
            src="/static/images/sponsors-logo/youth/yinSakal.jpeg"
            alt="sponsor"
          /></a>
        </center>
      </center>
      <center>
        <div class="my-hr"></div>
      </center>
    </div>
      </div>
  </div>
  <p class="glitch sponsor-title" data-text="About VishwaCTF" style="text-align: center;font-weight: 700;">
  About Vishwa<span style="color: #b00000;">CTF</span> </p>
  <center>
  <table class="ctf-details-table">
<tr>
<td class="table-entry">Style :</td>
<td>Jeopardy Style</td>
</tr>
<tr>
<td class="table-entry">Duration :</td>
<td>48 Hour Long </td>
</tr>
<tr>
<td class="table-entry">Team Participation :</td>
<td>1-4 players</td>
</tr>
<tr>
<td class="table-entry">Start time :</td>
<td>19th March'22 4:00 PM IST</td>
</tr>
<tr>
<td class="table-entry">End time :</td>
<td>21th March'22 4:00 PM IST</td>
</tr>

<tr>
<td class="table-entry">Timezone :</td>
<td>IST | GMT + 05:30</td>
</tr>

<tr>
<td class="table-entry">Intended Audience :</td>
<td>Beginners in CyberSecurity</td>

</tr>
</table></center>

  <p class="glitch sponsor-title" data-text="Prizes" style="text-align: center; color: #b00000;font-weight: 700;">
  Prizes</p>

    <div class="container mt-5 ">

        <center>
            <h5>To be Announced...</h2>
        </center>

    </div>
        
        
    <br></br>

    <div class="custom-carousel">
        <p class="glitch past-event-title" data-text="Our Previous Events" style="text-align: center;font-weight: 700;">
            Our Previous <span style="color: #b00000;">Events</span> </p>
        <section id="slider">
            <input type="radio" name="slider" id="s1" checked></input>
            <input type="radio" name="slider" id="s2"></input>
            <input type="radio" name="slider" id="s3"></input>
            <input type="radio" name="slider" id="s4"></input>
            <label for="s1" id="slide1"><img src="../static/images/1.jpg" alt=""></img></label>
            <label for="s2" id="slide2"><img src="../static/images/2.jpg" alt=""></img></label>
            <label for="s3" id="slide3"><img src="../static/images/3.jpg" alt=""></img></label>
            <label for="s4" id="slide4"><img src="../static/images/4.jpg" alt=""></img></label>

        </section>
    </div>
    </div>`
        
        
        ;
    }
}
