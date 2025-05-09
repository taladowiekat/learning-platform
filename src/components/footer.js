import { LitElement, html, css } from 'lit';

class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #fff;
      color: #26335d;
      padding: 50px 20px;
      text-align: center;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .footer-container .footer-links {
      display: flex;
      justify-content: center;
      gap: 50px;
      width: 100%;
      max-width: 1200px;
    }

    .footer-container .footer-links div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-container .footer-links div a {
      color: #26335d;
      text-decoration: none;
    }

    .footer-container .footer-links div a:hover {
      color: #7a55d3;
    }

    .footer-container .footer-bottom {
      font-size: 1em;
      color: #7a55d3;
      margin-top: 40px;
    }

    .social-icons a {
      color: #7a55d3;
      font-size: 1.5em;
      margin: 0 10px;
      text-decoration: none;
    }

    .social-icons a:hover {
      color: #26335d;
    }

    @media (max-width: 768px) {
      .footer-container .footer-links {
        flex-wrap: wrap;
        justify-content: space-around;
      }
    }
  `;

  render() {
    return html`
      <div class="footer-container">
        <div class="footer-links">
          <div>
            <h3>Company Info</h3>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <h3>Features</h3>
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="#">IOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </div>
          <div>
            <h3>Get In Touch</h3>
            <a href="#">(480) 555-0103</a>
            <a href="#">4517 Washington Ave. Manchester, Kentucky 39495</a>
            <a href="mailto:debra.holt@example.com">debra.holt@example.com</a>
          </div>
        </div>

        <div class="social-icons">
          <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>

        <div class="footer-bottom">
          <p>Made With Love By Figmaland All Right Reserved</p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
