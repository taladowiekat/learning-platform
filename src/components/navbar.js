import { LitElement, html, css } from 'lit';

export class MyNavbar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      background-color: #1a1a2e;
      color: white;
      padding: 20px 0;
      position: relative;
    }

    .main-container {
      width: 100%;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .brand {
      font-size: 1.8em;
      font-weight: bold;
      color: #7a55d3;
    }

    nav {
      display: flex;
      gap: 30px;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1em;
      transition: color 0.3s;
    }

    a:hover {
      color: #7a55d3;
    }

    .buttons {
      display: flex;
      gap: 15px;
    }

    .button {
      padding: 10px 20px;
      background-color: #7a55d3;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .button:hover {
      background-color: #6c4ab2;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 5px;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: white;
      border-radius: 2px;
    }

    .sidebar {
      position: absolute;
      top: 60px;
      right: 20px;
      background-color: #7a55d3;
      padding: 20px;
      border-radius: 8px;
      display: none;
      flex-direction: column;
      gap: 15px;
    }

    .sidebar a {
      color: #26335d;
      font-weight: bold;
    }

    .sidebar.show {
      display: flex;
    }

    @media (max-width: 768px) {
      nav, .buttons {
        display: none;
      }

      .hamburger {
        display: flex;
      }
    }
  `;

  toggleMenu() {
    const sidebar = this.shadowRoot.querySelector('.sidebar');
    sidebar.classList.toggle('show');
  }

  render() {
    return html`
      <div class="main-container">
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
        <div class="hamburger" @click="${this.toggleMenu}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="sidebar">
          <a href="/login">Login</a>
          <a href="/">Home</a>
          <a href="/product">Product</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);
