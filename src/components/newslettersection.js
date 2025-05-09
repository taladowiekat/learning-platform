import { LitElement, html, css } from 'lit';

class NewsletterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #26335d;
      color: white;
      text-align: center;
      padding: 100px 20px;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: white;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2em;
      color: white;
      margin-bottom: 40px;
      text-align: center;
      width: 80%;
      margin: 0 auto;
    }

    .newsletter-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 0 auto;
    }

    .newsletter-container input[type="email"] {
      padding: 15px;
      font-size: 1.1em;
      width: 50%;
      border: none;
      border-radius: 5px;
      color: #26335d;
    }

    .newsletter-container button {
      padding: 15px 30px;
      background-color: #7a55d3;
      color: white;
      font-size: 1.1em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .newsletter-container button:hover {
      background-color: #6c4ab2;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Our Popular Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        
        <div class="newsletter-container">
          <input type="email" placeholder="Your Email">
          <button @click="${this.handleSubmit}">Subscribe</button>
        </div>
      </div>
    `;
  }

  handleSubmit() {
    const emailInput = this.shadowRoot.querySelector('input[type="email"]');
    alert(`Subscribed with email: ${emailInput.value}`);
  }
}

customElements.define('newsletter-section', NewsletterSection);
