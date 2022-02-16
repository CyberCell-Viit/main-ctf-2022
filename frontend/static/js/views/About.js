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
         

     
         </div>
         </div>
    `;
  }
}
