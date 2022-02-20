import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vishwa CTF | Home");
  }

  async getHtml() {
    return `<div class="main-title-div">
        
            <h1 class="title" data-text="Cybercell VIIT" >Cybercell VIIT</h1>
            <h2 style="color:#b00000;">Presents</h2>
            <section id="ctf_logo"></section>

            <div class="button-div">
            <a class="a-n2" target="_blank" href="https://discord.gg/M4KwSDpE8t">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="play-button" style="display:"flex"; justify-content:"center"; align-items:"center; "white-space":"nowrap">
                Join Discord <i class="fab fa-discord"></i></p>
            </a>
            </div>
         
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


        
    </div>
    <div class="container px-4 py-5" id="custom-cards">
            <p class="glitch sponsor-title" data-text="Co-Powered By" style="text-align: center;font-weight: 700;">Co-Powered <span style="color: #b00000;">By</span> </p>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 justify-content-center">
                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                         <div class="col">
                    <div class="card card-cover h-100 announced-text overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div class="d-flex flex-column  h-100 py-5 text-center text-shadow-1">
                        To be Announced...
                        </div>
                    </div>
                </div>
            </div>
        </div>
                         
                        </div>
                    </div>
                </div>
            <p class="glitch sponsor-title" data-text="" style="text-align: center;font-weight: 700;">Prizes<span style="color: #b00000;"></span> </p>

                <div class="container mt-5 ">

              <center><h5>To be Announced...</h2></center>  
   
            </div>
        
        <div class="container my-5 custom-about">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 order-xs-2 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1"><span style="font-weight: 200;">About</span> <br> <span style="font-weight:900;padding-top:10px;">Cybercell  <span style="color:#b00000 ;">VIIT</span></span> </h1>
                    <p class="lead_1">CyberCell, VIIT is a tight-knit group of students aiming to study and learn more about the CyberSecurity domain, and with this aim, we are constantly trying to upgrade ourselves by working collaboratively on various activities. One of these is the annual CTF by the name VishwaCTF. And, this year we are also rolling out the VishwaCTF-Mini to help beginners get a try of the CTF Field before taking on the main VishwaCTF.
                    </p>
                    <p class="lead_2">CyberCell, VIIT has always been a group of highly energetic individuals since its inception in 2013. And, we have come under the umbrella of CyberCell, VIIT for a common purpose - To make the Indian CyberSecurity Scene more exciting, indigenuously. The VIshwaCTF-Mini also is an event undertaken for the same purpose. We want India to create lots of highly skilled CyberSecurity experts, and we want to be a part of that group too. So here we are, taking the first step towards that goal. Come Join Us!
                    </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <a class="sponsors_socials me-3 social_instagram " href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg></a>
                        <a class="sponsors_socials me-3 social_twitter" href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>
                    </div>
                </div>
                <div class="about-image order-xs-1 col-lg-5 offset-lg-0.5 p-0 overflow-hidden  shadow-lg">
                    <img class="rounded-lg-3" src="/static/images/cybercell logo.png" alt="" width="400"></img>
                </div>
            </div>
        </div>
        
        <br></br>
        
        <div class="custom-carousel">
            <p class="glitch past-event-title" data-text="Our Previous Events" style="text-align: center;font-weight: 700;">Our Previous <span style="color: #b00000;">Events</span> </p>

            <section id="slider">
                <input type="radio" name="slider" id="s1" checked></input>
                <input type="radio" name="slider" id="s2"></input>
                <input type="radio" name="slider" id="s3"></input>
                <input type="radio" name="slider" id="s4"></input>
                <input type="radio" name="slider" id="s5"></input>

                <label for="s1" id="slide1"><img src="../static/images/1.jpg" alt=""></img></label>
                <label for="s2" id="slide2"><img src="../static/images/2.jpg" alt=""></img></label>
                <label for="s3" id="slide3"><img src="../static/images/3.jpg" alt=""></img></label>
                <label for="s4" id="slide4"><img src="../static/images/4.jpg" alt=""></img></label>
        
            </section>
        </div>

        
        
        `;
  }
}
