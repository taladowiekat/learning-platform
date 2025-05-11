import { LitElement, html, css } from 'lit';

export class StatsSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 20px;
      background-color: #1a1a2e;
      color: white;
      text-align: center;
    }

    .container {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1200px;
    }

    .stat {
      flex: 1 1 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .stat h2 {
      font-size: 3em;
      font-weight: bold;
      color: #7a55d3;
      margin: 0 0 10px 0;
    }

    .stat p {
      font-size: 1.2em;
      color: #ccc;
      margin: 0;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .stat h2 {
        font-size: 2.5em;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="stat">
          <h2>15K</h2>
          <p>Happy Customers</p>
        </div>
        <div class="stat">
          <h2>150K</h2>
          <p>Monthly Visitors</p>
        </div>
        <div class="stat">
          <h2>15</h2>
          <p>Countries Worldwide</p>
        </div>
        <div class="stat">
          <h2>100+</h2>
          <p>Top Partners</p>
        </div>
      </div>
    `;
  }
}

customElements.define('stats-section', StatsSection);
