import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Vishwa CTF | Type of Questions");
    }

    async getHtml() {
        return `
    <h2  class="pb-2 glitch" data-text="Type Of Questions" style="text-align: center;font-weight: 700; font-size: 4em;">Type Of <span style="color: #b00000;">Questions</span> </h2>
    <div style="margin-top:0" class="question-main container">
    <div  class="question-card">
    <img src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201906/Simpler-Cryptography_0.jpg?itok=sgZFQAH3"
        alt="vitateach" />
    <div class="question-card-body">
        <h6>Cryptography</h6>
        <p>Cryptography is the study of secure communications techniques that allow only the sender and intended
            recipient of a message to view its contents.Here, data is encrypted using a secret key, and then both
            the encoded message and secret key are sent to the recipient for decryption.</p>
    </div>
</div>

<div  class="question-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXiOB0HX78Vfm0dZIGWA5vT1ZXjvrn9kVA&usqp=CAU"
        alt="vitateach" style="height:200px;" />
    <div class="question-card-body">
        <h6>Reverse Engineering</h6>
        <p>The process of taking a piece of software or hardware and analyzing its functions and information flow so
            that its functionality and behavior can be understood. Malware is commonly reverse-engineered in cyber
            defense.</p>
    </div>
</div>
<div class="question-card">
    <img
        src="https://www.e-spincorp.com/wp-content/uploads/2016/03/TrendMicro-InterScan-Web-Security-IWSS-Product-Overview-by-E-SPIN-e1511926826459.jpg" />
    <div class="question-card-body">
        <h6>Web Exploitation</h6>
        <p>An exploit is a program, or piece of code, designed to find and take advantage of a security flaw or
            vulnerability in an application or computer system, typically for malicious purposes such as installing
            malware</p>
    </div>
</div>
</div>
    `;
    }
}