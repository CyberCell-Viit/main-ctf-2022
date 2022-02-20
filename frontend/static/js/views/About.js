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
                 <p class="text-center"><mark class="text-markup">Style :</mark> &nbsp; Jeopardy Style</p><br>
                 <p class="text-center"><mark class="text-markup">Duration :</mark>&nbsp; 48 Hour Long </p><br>
                 <p class="text-center"><mark class="text-markup">Team Participation :</mark> &nbsp; 1 - 4 players</p><br>
                 <p class="text-center"><mark class="text-markup">Start time :</mark> &nbsp; 19th March'22 4:00 PM IST</p><br>
                 <p class="text-center"><mark class="text-markup">End time :</mark>&nbsp; 21th March'22 4:00 PM IST</p><br>
                 <p class="text-center"><mark class="text-markup">Timezone :</mark> &nbsp; IST | GMT + 05:30</p><br>
                 <p class="text-center"><mark class="text-markup">Intended Audience :</mark>&nbsp; Beginners in CyberSecurity</p>
                 <br>
             </div>
         </div>
         

     
         </div>
         </div>
    `;
  }
}
