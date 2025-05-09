import { LitElement, html, css } from 'lit';

export class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      background-color: #1a1a2e;
      color: white;
      text-align: center;
      background-image: url('https://via.placeholder.com/1200x800');
      background-size: cover;
      background-position: center;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    .cta-button {
      padding: 15px 30px;
      background-color: #7a55d3;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      text-decoration: none;
    }

    .cta-button:hover {
      background-color: #6c4ab2;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Best Learning Opportunities</h1>
        <p>Every day brings with it a fresh set of learning possibilities.</p>
        <div class="cta-buttons">
          <a href="#quote" class="cta-button">Get Quote Now</a>
          <a href="#learn" class="cta-button">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-header', MyHeader);
