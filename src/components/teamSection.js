import { LitElement, html, css } from 'lit';

export class TeamSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 20px;
      background-color: #26335d;
      color: white;
      min-height: 100vh;
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
      text-align: center;
      width: 80%;
    }

    .team-container {
      display: flex;
      justify-content: space-between; 
      gap: 30px;
      width: 90%;
      max-width: 1200px;
    
    }

    .team-card {
      background-color: #1e1e1e;
      color: white;
      width: 20%;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      position: relative;
    }

    .team-card img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .team-card .name {
      font-size: 1.5em;
      font-weight: bold;
      color: #7a55d3;
      margin-bottom: 10px;
    }

    .team-card .profession {
      font-size: 1.2em;
      color: #bbb;
      margin-bottom: 15px;
    }

    .team-card .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .team-card .social-icons a {
      color: white;
      font-size: 1.2em;
    }

    @media (max-width: 768px) {
      .team-container {
        flex-direction: column;
        gap: 30px;
      }

      .team-card {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div>
        <h1>Watch our Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

        <div class="team-container">
          <div class="team-card">
            <img src="https://via.placeholder.com/120" alt="Person 1">
            <div class="name">Julian Jameson</div>
            <div class="profession">Profession</div>
            <div class="social-icons">
              <a href="#" class="social-icon">🌐</a>
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">💼</a>
            </div>
          </div>

          <div class="team-card">
            <img src="https://via.placeholder.com/120" alt="Person 2">
            <div class="name">Julian Jameson</div>
            <div class="profession">Profession</div>
            <div class="social-icons">
              <a href="#" class="social-icon">🌐</a>
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">💼</a>
            </div>
          </div>

          <div class="team-card">
            <img src="https://via.placeholder.com/120" alt="Person 3">
            <div class="name">Julian Jameson</div>
            <div class="profession">Profession</div>
            <div class="social-icons">
              <a href="#" class="social-icon">🌐</a>
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">💼</a>
            </div>
          </div>

          <div class="team-card">
            <img src="https://via.placeholder.com/120" alt="Person 4">
            <div class="name">Julian Jameson</div>
            <div class="profession">Profession</div>
            <div class="social-icons">
              <a href="#" class="social-icon">🌐</a>
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">💼</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('team-section', TeamSection);
