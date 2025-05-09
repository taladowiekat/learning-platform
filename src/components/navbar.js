import { LitElement, html, css } from 'lit';

export class MyNavbar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background-color: #1a1a2e;
      color: white;
    }

    .brand {
      font-size: 24px;
      font-weight: bold;
    }

    nav {
      display: flex;
      gap: 30px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
    }

    .buttons {
      display: flex;
      gap: 20px;
    }

    .button {
      padding: 10px 20px;
      background-color: #7a55d3;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
    }

    .button:hover {
      background-color: #6c4ab2;
    }
  `;

  render() {
    return html`
      <div class="brand">BrandName</div>
      <nav>
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="buttons">
        <a href="/login" class="button">Login</a>
        <a href="/join" class="button">Join Us</a>
      </div>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);
