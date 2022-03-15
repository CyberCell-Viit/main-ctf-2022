import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("VishwaCTF | Rules");
  }

  async getHtml() {
    return `
        <div class="container rules">
        <p class="glitch sponsor-title" data-text="Rules" style="text-align: center; color: #b00000;font-weight: 700;">
    Rules</p>
    <ul>
    <li>The flag format is vishwaCTF{}, unless specified otherwise.</li>
    <li>Attacking the web server is strictly prohibited and will get you disqualified.</li>
    <li>Brute forcing flags on this platform is not allowed and will not lead to success.</li>
    <li>Any questions regarding challenges or the platform should be asked via our Discord server.</li>
    <li>Teams of minimum 1 and maximum 4 members are allowed.</li>
    <li>There is no restriction so as to who can participate in the CTF.</li>
    <li>Posting flags in any channel is strictly prohibited.</li>
    <li>Do not post write-ups until the CTF is over.</li>
    <li>Do not advertise other CTFs/Discord servers/events without asking an organizer/admin.</li>
    <li>Violation of any of the rules may lead to deletion of the messages, or even getting banned from the Discord server and vishwaCTF 2022.</li>
    <li>Regarding all disputes, the decision by admins is final.</li>
    <li>IMPORTANT: Have fun!</li>
</ul>
        </div>
        `;
  }
}
