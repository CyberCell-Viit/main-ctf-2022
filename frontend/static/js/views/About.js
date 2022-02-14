import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Vishwa CTF | About");
    }

    async getHtml() {
        return `
         <div class="about-us-main">
         <h1 class="heading m-5 p-5">About VishwaCTF </h1>
         <div class="row data">
             <div class="col-12 content">VishwaCTF is the Flagship event of CyberCell, VIIT. At its inception, it was the
                 first CTF from Maharashtra, India. And also, the second one from India organized independently by any
                 college. Now, we again aim for higher heights going global with the 3rd Edition of VishwaCTF.</div>
             <div class="properties col-6">
                 <p class="text-center"><mark class="text-markup">Style :</mark> Jeopardy Style</p><br>
                 <p class="text-center"><mark class="text-markup">Duration :</mark> 36 Hour Long </p><br>
                 <p class="text-center"><mark class="text-markup">Team Participation :</mark> 1 - 4 players</p><br>
                 <p class="text-center"><mark class="text-markup">Start time :</mark> 13th March'21 3:30PM IST</p><br>
                 <p class="text-center"><mark class="text-markup">End time :</mark> 15th March'21 3:30AM IST</p><br>
                 <p class="text-center"><mark class="text-markup">Timezone :</mark> IST | GMT + 05:30</p><br>
                 <p class="text-center"><mark class="text-markup">Intended Audience :</mark> Beginners in CyberSecurity</p>
                 <br>
             </div>
         </div>
         <div class="container">
             <h1> Prizes</h1>
             <h2>lorem ipsum dimsum i am bhuka i need maggi</h2>
             <div class="row">
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-1">
                             </div>
                             <div class="card-back">
                                 <p>5-10</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-2">
                             </div>
                             <div class="card-back">
                                 <p>Card Backside</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-3">
     
                             </div>
                             <div class="card-back">
                                 <p>5-10</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <!-- the name and designation of sponsers -->
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-4">
     
                             </div>
                             <div class="card-back">
                                 <p>5-10</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-5">
     
                             </div>
                             <div class="card-back">
                                 <p>5-10</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div class="card">
                         <div class="inner-box">
                             <div class="card-front front-6">
     
                             </div>
                             <div class="card-back">
                                 <p>5-10</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     
         <h2 class="heading prizes-heading m-4 p-2">Discounted cyber security internships with BluefireRedteam to the Top
             Teams.</h2>
         <h2 class="heading prizes-heading m-5 p-1">2 T-Shorts & Swags for the Top 5 teams in the Indian territory</h2>
     
         </div>
         </div>
    `;
    }
}