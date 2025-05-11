import { LitElement, html, css } from 'lit';

export class TeamSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      margin-top : 0;
      background-color: #1a1a2e;
      color: white;
     
      min-height: 100vh;
    }

    .main-container {
      width: 100%;
      max-width: 1200px;

      text-align: left;
    }

    .section-subtitle {
      color: #7a55d3;
      font-weight: bold;

      font-size: 1em;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: white;
  
    }

    p {
      font-size: 1.1em;
      color: #ccc;
  
      max-width: 600px;
      line-height: 1.6;
    }

    .team-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }

    .team-card {
      background-color: white;
      color: #26335d;
      width: 250px;
      border-radius: 16px;
      overflow: hidden;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .team-card img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .team-card .info {
      padding: 20px;
    }

    .name {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .profession {
      font-size: 0.9em;
      color: #999;
      margin-bottom: 15px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .social-icons a {
      color: #7a55d3;
      font-size: 1.4em;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .team-container {
        flex-direction: column;
        align-items: center;
      }

      .team-card {
        width: 90%;
      }
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="section-subtitle">Team</div>
        <h1>Watch our Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>

        <div class="team-container">
          ${this.renderCard("src/styles/fixed-height sec-.png", "Julian Jameson", "Professor")}
          ${this.renderCard("src/styles/user-cover-4.png", "Julian Jameson", "Professor")}
          ${this.renderCard("src/styles/fixed-height sec-.png", "Julian Jameson", "Professor")}
          ${this.renderCard("src/styles/user-cover-4.png", "Julian Jameson", "Professor")}
        </div>
      </div>
    `;
  }

  renderCard(image, name, profession) {
    return html`
      <div class="team-card">
        <img src="${image}" alt="${name}">
        <div class="info">
          <div class="name">${name}</div>
          <div class="profession">${profession}</div>
          <div class="social-icons">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Instagram">📸</a>
            <a href="#" title="Twitter">🐦</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('team-section', TeamSection);
