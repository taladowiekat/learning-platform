import { LitElement, html, css } from 'lit';

export class StatsSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      padding: 50px 20px;
      background-color: #1a1a2e;
      color: white;
      text-align: center;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }

    .stat h2 {
      font-size: 3em;
      font-weight: bold;
      color: #7a55d3;
    }

    .stat p {
      font-size: 1.2em;
      color: white;
    }
  `;

  render() {
    return html`
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
    `;
  }
}

customElements.define('stats-section', StatsSection);
