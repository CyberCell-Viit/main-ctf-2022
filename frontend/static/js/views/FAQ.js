import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vishwa CTF | Type of Questions");
  }

  async getHtml() {
    return `
    <div class="container FAQ-main">
    <h1 class="mt-5 py-5">FAQ! Need Help?</h1>
    <h2 class="mt-2">We got you covered</h2>
    <br>
    <br>
    <div class="move">
      <div class="question">
        <b>What is CTF?</b><br>
        <hr size="10" style="color:black">
        CTF stands for "Capture the Flag". CTFs are a type of computer security competition.
        Certain pieces of information, called "flags", are placed on servers, encrypted, hidden,
        or otherwise stored somewhere difficult to access. During the competition, different challenges
        are released which allow the participants to reverse engineer, break, hack, decrypt, and do whatever
        it takes to capture that flag. When a team submits this flag to a scoring page, they will get points for the
        submission.
        To learn more, <a href="https://www.meusec.com/ctf/capture-the-flags-in-cybersecurity/">Click here</a>
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>What is VishwaCTF?</b><br>
        <hr size="10" style="color:black">
        VishwaCTF is the Flagship event of CyberCell, VIIT. At its inception, it was the first CTF from Maharashtra, India
        and also, the second one from India organized independently by any college.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>When is VishwaCTF scheduled?</b><br>
        <hr size="10" style="color:black">
        VishwaCTF 2022 will start on 19th March 4:00 PM IST(Indian Standard Time i.e. +5:30 GMT) and will go on
        live for 48 hours and end on 21st March 4:00 PM (IST).
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>Who can participate?</b><br>
        <hr size="10" style="color:black">
        The competition is designed specially for beginners to be able to learn various new concepts while enjoying the
        competition, not being too overwhelmed with it. As such, anyone in High-School or a higher form of education
        should be able to cope fairly easily. Otherwise, any person can participate with a basic knowledge of using a
        computer and the internet for searching stuff.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>Why play/organize a CTF?</b><br>
        <hr size="10" style="color:black">
        We love Computer Science and CTFs. Competing in CTFs is one of our favorite things to do. Unfortunately, there
        aren't many CTFs out there designed for beginners. We found that we learned a lot about computer security very
        quickly by particating in CTFs. VishwaCTF will teach participants about other areas of computer science as
        well.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>Will it be difficult?</b><br>
        <hr size="10" style="color:black">
        Challenges will vary widely in difficulty. We expect some challenges to be solved by every team, and others to be
        solved by only a few teams. All teams have the potential of performing very well in this competition even with no
        CTF experience. We hope VishwaCTF-mini will be a fun, learning experience for all the participants.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>What resources do I need to compete?</b><br>
        <hr size="10" style="color:black">
        Full participation in the competition requires only a computer with a Web Browser (Firefox, Chrome, Opera, Safari,
        Internet Explorer 9+, etc.), an internet connection and the ability to install applications.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>How is it scored?</b><br>
        <hr size="10" style="color:black">
        There will be several dozen challenges, each worth an appropriate number of points based on its difficulty. The
        points of a challenge are determined by the number of participants able to solve that challenge. For example, a
        challenge with 100 solves will have lower points than one with just 10 solves. You may read more about the Dynamic
        Scoring of the CTFd platform <a href="https://github.com/CTFd/DynamicValueChallenge">Click here</a>
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>What constitutes cheating?</b><br>
        <hr size="10" style="color:black">
        Participants in the CTF must abide by a few common sense rules that ensure the competition is fair. These rules
        are copied from picoCTF's FAQ: Attacking the scoring server, other teams, or machines not explicitly designated as
        targets is cheating. This includes both breaking into such machines and denying others access to them (for
        example, by altering a key or ping-flooding). Sharing keys or providing overly-revealing hints with other teams is
        cheating, as is being directly assisted by personnel outside the team (using tools from the internet is OK; asking
        people on the internet to help you solve the problem is not). We encourage you to solve problems in novel and
        creative ways using all available resources, but we do require that you solve them yourselves.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>Who is organizing VishwaCTF?</b><br>
        <hr size="10" style="color:black">
        VishwaCTF is organized by students of Vishwakarma Institute of Information Technology, Pune, India as part of
        the CyberCell club of the college.
      </div>
    </div>
    <div class="move">
      <div class="question">
        <b>Are there any related competitions?</b><br>
        <hr size="10" style="color:black">
        we host VishwaCTF in mid March, so you can participate in the same!! Also,Look at picoCTF, organized by Carnegie
        Mellon University, or CSAW RED, organized by the New York University Tandon School of Engineering, or HSCTF,
        organized by the West Windsor-Plainsboro High School North, New Jersey.
      </div>
    </div>
    </div>
    `;
  }
}
