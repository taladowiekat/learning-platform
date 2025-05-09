import { LitElement, html, css } from 'lit';

export class CardsSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 50px 20px;
      background-color: #26335d;
      color: white;
      text-align: center;
      min-height: 100vh;
      overflow: auto;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: #7a55d3;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2em;
      color: white;
      margin-bottom: 50px;
    }

    .cards-container {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      flex-wrap: wrap;
      width: 100%;
      position: relative;
      justify-content: center;
       margin-top: 200px;
      
    }

    .card {
      background-color: white;
      color: #26335d;
      width: 220px;
      margin: 20px;
      padding: 30px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .card h3 {
      font-size: 1.5em;
      font-weight: bold;
      color: #7a55d3;
    }

    .card p {
      font-size: 1em;
      color: #555;
      margin-top: 10px;
    }

    .card .icon {
      font-size: 3em;
      color: #7a55d3;
    }

 
    .card:nth-child(1) {
      transform: translateY(30px);
    }

    .card:nth-child(2) {
      transform: translateY(-30px); 
    }

    .card:nth-child(3) {
      transform: translateY(20px); 
    }

    .card:nth-child(4) {
      transform: translateY(-20px); 
    }
  `;

  render() {
    return html`
      <div>
        <h1>Every Client Matters</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div class="cards-container">
          <div class="card">
            <div class="icon">💻</div>
            <h3>Training Courses</h3>
            <p>The gradual accumulation of information about...</p>
          </div>
          <div class="card">
            <div class="icon">🧪</div>
            <h3>2,769 Online Courses</h3>
            <p>The gradual accumulation of information about...</p>
          </div>
          <div class="card">
            <div class="icon">📚</div>
            <h3>Books Library</h3>
            <p>The gradual accumulation of information about...</p>
          </div>
          <div class="card">
            <div class="icon">💬</div>
            <h3>Consulting Services</h3>
            <p>The gradual accumulation of information about...</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('cards-section', CardsSection);
