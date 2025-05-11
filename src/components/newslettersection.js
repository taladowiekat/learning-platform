import { LitElement, html, css } from 'lit';

class NewsletterSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      background-color: #1a1a2e;
      color: white;
      padding: 100px 20px;
    }

    .main-container {
      text-align: center;
      max-width: 800px;
      width: 100%;
    }

    .section-subtitle {
      color: #7a55d3;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1em;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: white;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1em;
      color: #ccc;
      margin-bottom: 50px;
      line-height: 1.6;
    }

    .newsletter-form {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .newsletter-form input[type="email"] {
      flex: 1;
      padding: 15px;
      font-size: 1em;
      border: none;
      outline: none;
      color: #26335d;
    }

    .newsletter-form button {
      padding: 0 30px;
      background-color: #7a55d3;
      color: white;
      font-size: 1em;
      border: none;
      cursor: pointer;
    }

    .newsletter-form button:hover {
      background-color: #6c4ab2;
    }

    @media (max-width: 600px) {
      .newsletter-form {
        flex-direction: column;
      }

      .newsletter-form input[type="email"] {
        width: 100%;
        margin-bottom: 10px;
      }

      .newsletter-form button {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="section-subtitle">Newsletter</div>
        <h1>Our Popular Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        
        <div class="newsletter-form">
          <input type="email" placeholder="Your Email" />
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
