import { LitElement, html } from "./lit-element.js";

class MailerApp extends LitElement {
  render() {
    let nameErrorTemplate = html``;
    let emailErrorTemplate = html``;
    let sendMailTemplate = html``;
    if (this.isSendMail) {
      this.isSendMail = false;
      sendMailTemplate = html`
        </br></br><b>Mail send to ${this.name} at ${this.email}.</b>
      `;
    }
    if (this.isNameEmpty) {
      this.isNameEmpty = false
      nameErrorTemplate = html`<b>Enter your name.</b>`;
    }
    if (this.isEmailEmpty) {
      this.isEmailEmpty =false;
      emailErrorTemplate = html`<b>Enter your email.</b>`;
    }


    return html`
      <input id="name" placeholder="Name"></input>${nameErrorTemplate}</br></br>
      <input id="email" placeholder="Email"></input>${emailErrorTemplate}</br></br>
      <button @click="${this.onSendButtonClick}">Send Mail</button>
      ${sendMailTemplate}
    `;
  }

  onSendButtonClick() {
    const nameInput = this.shadowRoot.getElementById('name');
    this.name = nameInput.value;
    const emailInput = this.shadowRoot.getElementById('email');
    this.email = emailInput.value;
    if (this.name !== '' && this.email !== '') {
      this.isSendMail = true;
      nameInput.value = '';
      emailInput.value = '';
      this.sendMail(this.name, this.email);
    }
    if (this.name === '') {
      this.isNameEmpty = true;
    }
    if (this.email === '') {
      this.isEmailEmpty = true;
    }
  this.requestUpdate();
  }

  async sendMail(name, email) {
    await fetch(`http://localhost:8080/mail?name=${name}&email=${email}`);
  }
}

customElements.define('mailer-app', MailerApp);