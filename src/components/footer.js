import { LitElement, html, css } from 'lit';

class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #fff;
      color: #26335d;
      padding: 50px 20px;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-links {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      gap: 30px;
    }

    .footer-links div {
      min-width: 150px;
      text-align: center;
    }

    .footer-links h3 {
      font-size: 1em;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .footer-links a {
      color: #26335d;
      text-decoration: none;
      display: block;
      margin-bottom: 10px;
      font-size: 0.9em;
    }

    .footer-links a:hover {
      color: #7a55d3;
    }

    .get-in-touch a {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      margin-bottom: 15px;
    }

    .get-in-touch i {
      color: #7a55d3;
    }

    .social-icons {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-top: 20px;
    }

    .social-icons a {
      color: #7a55d3;
      font-size: 1.5em;
      text-decoration: none;
    }

    .footer-bottom {
      text-align: center;
      padding: 20px 0;
      width: 100%;
      border-top: 1px solid #eee;
    }

    .footer-bottom p {
      color: #6C6C72;
      font-size: 0.9em;
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer-links {
        flex-direction: column;
        align-items: center;
      }

      .footer-links div {
        min-width: 100%;
      }

      .get-in-touch a {
        justify-content: center;
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
          <div class="get-in-touch">
            <h3>Get In Touch</h3>
            <a href="#"><i class="fas fa-phone"></i>(480) 555-0103</a>
            <a href="#"><i class="fas fa-map-marker-alt"></i>4517 Washington Ave. Manchester, Kentucky 39495</a>
            <a href="mailto:debra.holt@example.com"><i class="fas fa-envelope"></i>debra.holt@example.com</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>Made With Love By Figmaland All Right Reserved</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
