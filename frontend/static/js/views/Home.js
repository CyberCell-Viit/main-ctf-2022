import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("VishwaCTF | Home");
    }

    async getHtml() {
        return `<div>
        <div class="main-title-div">

            <h1 style="font-family: unset;" class="title" data-text="Cybercell VIIT">Cybercell VIIT</h1>
            <h2 class="presents" style="color:#b00000;">Presents</h2>
            <section id="ctf_logo"></section>
            <h4>Co-Powered By</h4>
            <img height="50px" src="/static/images/sponsors-logo/title/BurpBounty.png"/>
            

            <div class="event-duration">
                <p>19th March 04:00pm IST <span class="mx-2 text-center" style="color:#b00000; font-size: 18px; 
                letter-spacing: 5px; display:block;">TO</span> 21st March 04:00pm IST</p>
            </div>

            <center class="">
            <div class='duo-buttons'>
            <a target="_blank" href="https://play.vishwactf.com/register">
            <div class="button2 button2-register">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            play ctf
          </div></a>
            <a  target="_blank" href="https://discord.gg/M4KwSDpE8t"
            <div class="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Join Discord
          </div></a></div>
          <div class='threat-royale-button'>
          <a   href="/the-threat-royale"
            <div class="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            THREAT ROYALE
          </div></a></div>
            </center>
        </div>



    <p class="glitch sponsor-title" data-text="Prizes" style="text-align: center; color: #b00000;font-weight: 700;">
    Prizes</p>
<div class="prizes-container">
    <center class="">
        <h1 class="">
            Total prize pool of
            <a href="" class="typewrite tot-prize" data-period="2000" data-type='[ "??? 75,000", "$1000" ]'>
                <span class="wrap "></span>
            </a>
        </h1>
        <hr width="50%" style="color: white" />
        <div class="first-prize">
    <p><i>1<sup>st</sup></i> <span> ???18,000 and 1 Burp Bounty Pro License for 4 members</span></p>  
        </div>
        <div  class="second-prize">
        <p><i>2<sup>nd</sup></i> <span> ???13,000 and 1 Burp Bounty Pro License for 4 members</span></p>  
            </div>
            <div class="third-prize">
            <p><i>3<sup>rd</sup></i> <span> ???8,000 and 1 Burp Bounty Pro License for 4 members</span></p>  
                </div>
            <div style="font-size: 22px" class="third-prize">
                <p style="width:300px" class="d-flex justify-content-around">
                <d><i>4<sup style="font-size:14px">th</sup></i> <span> ???5,000</span></d>
                <d>   <i style="margin-left:30px">5<sup style="font-size:14px">th</sup></i> <span> ???2,500</span></d>
                </p>  
            </div>
            <div style="font-size: 18px" class="third-prize">
            <p><i>6<sup  style="font-size:12px">th</sup>-10<sup  style="font-size:12px">th</sup></i>&nbsp;&nbsp;???1,500</p>
        </div>
    </center>
</div>

    <center>
    <p class="glitch sponsor-title" data-text="The Threat Royale" style="text-align: center;font-weight: 700;">
    The Threat <span style="color: #b00000;">Royale</span></p>
    <h2>A Cybersecurity Event</h2>
    <h5>Prize pool of Rs. 1 Lakh and Internship Opportunities to the Top Performers</h5>
    <div class='container'>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div class="col card-left-info order-2 order-md-1 order-lg-1">
      <div class="card card-cover overflow-hidden text-white  rounded-5 shadow-lg" style="background-image: url('unsplash-photo-1.jpg');"> 
        <img class='threat-left-card rounded-4' src='/static/images/threat-left.png'></img>
      </div>
    </div>

    <div class="col order-1 order-md-2 order-lg-2">
      <div class="card  card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-2.jpg');">
      <img class='threat-center-card rounded-4' src='/static/images/threat-center.png'></img>
      </div>
    </div>

    <div class="col card-left-info order-3">
      <div class="card card-cover  overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('unsplash-photo-3.jpg');">
      <img class='threat-left-card rounded-4' src='/static/images/threat-right.png'></img>
      </div>
    </div>
  </div>
    </div>
    </center>
    <div class="container px-4 py-5" id="custom-cards">
        <p class="glitch sponsor-title" data-text="Our Sponsors" style="text-align: center;font-weight: 700;">
            Our <span style="color: #b00000;">Sponsors</span> </p>

        <div class="row justify-content-center">
        <center class="">
        <h1 class="text-center fifth">Title Sponsors</h1>
      <a href="https://burpbounty.net/" target="_blank">
        <img class="title-img" src="/static/images/sponsors-logo/title/BurpBounty.png" alt="sponsor" /> </div>
      
      </a>
      </center>
        </div>
    </div>
    </div>


    <center>
    <div class="my-hr"></div>
  </center>

    <div class="container spons-container">
    <div class="row spons-row">
      <h1 class="text-center fifth">Gold Sponsors</h1>

      <div class="d-sm-flex mt-3  justify-content-center gold-spons">
      <center class="mx-5 cloud-sek">
      <a target="_blank" href="https://cloudsek.com/">
                  <img style=" background-color: #fff;padding:20px"
                  class="mt-2"
       src="/static/images/sponsors-logo/gold/cloudsek.png"
       alt="sponsor"
     /></a>
   </center>
   <center class="mr-5">
    <a target="_blank" href="https://www.viit.ac.in/">
                  <img
                  style="height: 150px; background-color: #fff;"
     src="/static/images/sponsors-logo/gold/vi.png"
     alt="sponsor"
   /></a>
 </center>
 <center class="mx-5">
 <a target="_blank" href="https://www.viitalumni.org/">
               <img
               style="height: 150px; background-color: #fff;"
  src="/static/images/sponsors-logo/gold/viitaa.png"
  alt="sponsor"
/></a>
</center>
      </div>
      <center>
        <div class="my-hr"></div>
      </center>
    </div>
    <div class="row spons-row ">
      <h1 class="text-center fifth">Silver Sponsors</h1>

      <div class="d-sm-flex mt-3   justify-content-center gold-spons">
      <center class="mx-5 mb-3">
      <a target="_blank" href="">
                  <img
                  style="background: #fff; padding: 10px;"
       src="/static/images/sponsors-logo/silver/csi.png"
       alt="sponsor"
     /></a>
   </center>
   
   <center class="mt-4">
    <a target="_blank" href="">
                  <img
                  height="90px"
                  widght="180px"
     src="/static/images/sponsors-logo/silver/EPIC_LOGO_Small.png"
     alt="sponsor"
   /></a>
 </center>
 
   <center class="mx-5 mt-3 spons-comunity-mid">
      <a target="_blank" href="">
                  <img
       src="/static/images/sponsors-logo/silver/acm-logo.png"
       alt="sponsor"
     /></a>
   </center>
   <center class=" cloud-sek">
      <a target="_blank" href="https://hacktify.in/">
                  <img
       src="/static/images/sponsors-logo/silver/hacktify1.png"
       alt="sponsor"
     /></a>
   </center>
    
    </div>
    <center>
    <div class="my-hr"></div>
  </center>
    <div class="row spons-row">
      <h1 style="font-size: 20px" class="text-center fifth">
      community Sponsors
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
<td>21st March'22 4:00 PM IST</td>
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
