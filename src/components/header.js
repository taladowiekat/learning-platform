import { LitElement, html, css } from 'lit';

export class MyHeader extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1a1a2e;
      color: white;
      padding: 50px 20px;
      min-height: 80vh;
    }

    .main-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1200px;
    }

    .left-section {
      flex: 1 1 50%;
      max-width: 50%;
      text-align: left;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
    }

    p {
      margin-top: 20px;
      font-size: 1.2em;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      margin-top: 30px;
      flex-wrap: wrap;
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

    .right-section {
      flex: 1 1 40%;
      max-width: 500px;
      display: flex;
      justify-content: center;
    }

    .right-section img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }

    @media (max-width: 768px) {
      .main-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .left-section, .right-section {
        max-width: 100%;
        flex: 1 1 100%;
        text-align: center;
      }

      h1 {
        font-size: 2em;
      }

      .cta-buttons {
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="left-section">
          <h1>Best Learning Opportunities</h1>
          <p>Every day brings with it a fresh set of learning possibilities.</p>
          <div class="cta-buttons">
            <a href="#quote" class="cta-button">Get Quote Now</a>
            <a href="#learn" class="cta-button">Learn More</a>
          </div>
        </div>
        <div class="right-section">
          <img src="src/styles/none.png" alt="Learning Illustration" />
        </div>
      </div>
    `;
  }
}

customElements.define('my-header', MyHeader);
