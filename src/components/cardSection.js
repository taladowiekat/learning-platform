import { LitElement, html, css } from 'lit';

export class CardsSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #1a1a2e;
      color: white;
      min-height: 100vh;
      padding: 50px 20px;
    }

    .container {
      width: 100%;
      max-width: 1200px;
    }

    .section-title {
      margin-bottom: 50px;
      text-align: left;
    }

    .section-title h3 {
      color: #7a55d3;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1em;
    }

    .section-title h1 {
      font-size: 2.5em;
      font-weight: bold;
      margin-bottom: 20px;
      color: white;
    }

    .section-title p {
      font-size: 1em;
      color: #ccc;
      max-width: 600px;
      line-height: 1.5;
    }

    .cards-container {
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      width: 100%;
    }

    .card-wrapper {
      transition: transform 0.3s ease-in-out;
      flex: 1 1 calc(25% - 20px); /* 4 cards per row */
      display: flex;
      justify-content: center;
    }

    /* Adjust positions */
    .card-wrapper:nth-child(1) {
      transform: translateY(30px);
    }
    .card-wrapper:nth-child(2) {
      transform: translateY(-30px);
    }
    .card-wrapper:nth-child(3) {
      transform: translateY(20px);
    }
    .card-wrapper:nth-child(4) {
      transform: translateY(-20px);
    }

    .card-wrapper:hover {
      transform: translateY(-15px);
    }

    .card {
      background-color: white;
      color: #26335d;
      width: 100%;
      max-width: 220px;
      padding: 30px 20px;
      text-align: left;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .card img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
      transition: transform 0.3s ease-in-out;
    }

    .card-wrapper:hover .card img {
      transform: scale(1.1);
    }

    .card h4 {
      font-size: 1em;
      color: #26335d;
      margin-bottom: 10px;
    }

    .card h3 {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .underline {
      display: block;
      width: 50px;
      height: 3px;
      background-color: #e74c3c;
      margin: 0 0 15px 0;
    }

    .card p {
      font-size: 0.9em;
      color: #555;
    }

    /* Responsive Breakpoints */
    @media (max-width: 1024px) {
      .card-wrapper {
        flex: 1 1 calc(50% - 20px); /* 2 cards per row */
      }
    }

    @media (max-width: 600px) {
      .cards-container {
        justify-content: center;
      }

      .card-wrapper {
        flex: 1 1 100%; /* Full width */
        transform: translateY(0); /* Remove vertical offset for mobile */
      }

      .section-title {
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="section-title">
          <h3>Practice Advice</h3>
          <h1>Every Client Matters</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms of 
            Classical physics: Newtonian mechanics.
          </p>
        </div>

        <div class="cards-container">
          <div class="card-wrapper">
            <div class="card">
              <img src="src/styles/icon cool-icon-l10.svg" alt="Training Courses" />
              <h4>Training Courses</h4>
              <h3>Training Courses</h3>
              <span class="underline"></span>
              <p>The gradual accumulation of information about...</p>
            </div>
          </div>

          <div class="card-wrapper">
            <div class="card">
              <img src="src/styles/icon cool-icon-l10.svg" alt="Online Courses" />
              <h4>Online Courses</h4>
              <h3>2,769 Online Courses</h3>
              <span class="underline"></span>
              <p>The gradual accumulation of information about...</p>
            </div>
          </div>

          <div class="card-wrapper">
            <div class="card">
              <img src="src/styles/icon cool-icon-l10.svg" alt="Books Library" />
              <h4>Books Library</h4>
              <h3>Books Library</h3>
              <span class="underline"></span>
              <p>The gradual accumulation of information about...</p>
            </div>
          </div>

          <div class="card-wrapper">
            <div class="card">
              <img src="src/styles/icon cool-icon-l10.svg" alt="Consulting Services" />
              <h4>Consulting Services</h4>
              <h3>2,769 Online Courses</h3>
              <span class="underline"></span>
              <p>The gradual accumulation of information about...</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('cards-section', CardsSection);
