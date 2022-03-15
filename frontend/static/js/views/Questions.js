import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vishwa CTF | Type of Questions");
  }

  async getHtml() {
    return `
    <div class="">
    <div >
        <h2
        class="pb-3 glitch"
        data-text="Type Of Questions"
        style="text-align: center; font-weight: 700; font-size: 3.5em"
      >
        Type Of <span style="color: #b00000">Questions</span>
      </h2>
      </div>
      <div class="d-sm-flex justify-content-center">
        <div class="question-card">
          <img
            src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201906/Simpler-Cryptography_0.jpg?itok=sgZFQAH3"
            alt="vitateach"
          />
          <div class="question-card-body">
            <h6>Cryptography</h6>
            <p>
              Cryptography is the study of secure communications techniques that
              allow only the sender and intended recipient of a message to view
              its contents.Here, data is encrypted using a secret key, and then
              both the encoded message and secret key are sent to the recipient
              for decryption.
            </p>
          </div>
        </div>
        <div class="question-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXiOB0HX78Vfm0dZIGWA5vT1ZXjvrn9kVA&usqp=CAU"
            alt="vitateach"
            style="height: 200px"
          />
          <div class="question-card-body">
            <h6>Reverse Engineering</h6>
            <p>
              The process of taking a piece of software or hardware and analyzing
              its functions and information flow so that its functionality and
              behavior can be understood. Malware is commonly reverse-engineered
              in cyber defense.
            </p>
          </div>
        </div>
        <div class="question-card">
          <img
          
            src="https://www.e-spincorp.com/wp-content/uploads/2016/03/TrendMicro-InterScan-Web-Security-IWSS-Product-Overview-by-E-SPIN-e1511926826459.jpg"
          />
          <div class="question-card-body">
            <h6>Web Exploitation</h6>
            <p>
              An exploit is a program, or piece of code, designed to find and take
              advantage of a security flaw or vulnerability in an application or
              computer system, typically for malicious purposes such as installing
              malware
            </p>
          </div>
        </div>
        <div class="question-card">
        <img
        style="height: 200px"
          src="/static/images/osint.jpeg"
        />
        <div class="question-card-body">
          <h6>OSINT</h6>
          <p>
          Open-source intelligence (OSINT) is the collection and analysis of data gathered from open sources (overt and publicly available sources) to produce actionable intelligence type.
          </p>
        </div>
      </div>
      <div class="question-card">
      <img
      style="height: 200px"
        src="/static/images/stegno.jpeg"
      />
      <div class="question-card-body">
        <h6>Steganography </h6>
        <p>
        Steganography is the practice of concealing a message within another message or a physical object. In computing/electronic contexts, a computer file, message, image, or video is concealed within another file, message, image, or video        </p>
      </div>
    </div>

    </div>
      </div>
    `;
  }
}