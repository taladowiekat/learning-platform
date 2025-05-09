import { LitElement, html, css } from 'lit';

export class TestimonialSection extends LitElement {
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

    .testimonials-container {
      display: flex;
      justify-content: space-between;
      gap: 50px;
      width: 80%;
      max-width: 1200px;
    }

    .testimonial-card {
      background-color: #1e1e1e;
      color: white;
      width: 48%; 
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      position: relative;
    }

    .testimonial-card img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .testimonial-card .name {
      font-size: 1.5em;
      font-weight: bold;
      color: #7a55d3;
      margin-bottom: 10px;
    }

    .testimonial-card .profession {
      font-size: 1.2em;
      color: #bbb;
      margin-bottom: 15px;
    }

    .testimonial-card .rating {
      margin-bottom: 15px;
    }

    .testimonial-card .rating span {
      color: #ffdd00;
      font-size: 1.5em;
    }

    .testimonial-card .testimonial-text {
      font-size: 1em;
      color: #bbb;
      margin-bottom: 20px;
    }

    .testimonial-card .testimonial-text::before {
      content: '“';
      font-size: 2em;
      margin-right: 10px;
      color: #7a55d3;
    }

    .testimonial-card .testimonial-text::after {
      content: '”';
      font-size: 2em;
      margin-left: 10px;
      color: #7a55d3;
    }

    .testimonial-card .button {
      background-color: #7a55d3;
      color: white;
      padding: 10px 20px;
      border-radius: 5px
      text-decoration: none;
      cursor: pointer;
    }

    .testimonial-card .button:hover {
      background-color: #6c4ab2;
    }

    @media (max-width: 768px) {
      .testimonials-container {
        flex-direction: column;
        gap: 30px;
      }

      .testimonial-card {
        width: 100%;
      }
    }
  `;

  render() {
    return html`
      <div>
        <h1>Get Quality Education</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

        <div class="testimonials-container">
          <div class="testimonial-card">
            <img src="https://via.placeholder.com/120" alt="Person 1">
            <div class="name">Regina Miles</div>
            <div class="profession">Designer</div>
            <div class="rating">
              <span>⭐ ⭐ ⭐ ⭐</span>
            </div>
            <div class="testimonial-text">
              Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </div>
            <a href="#" class="button">Learn More</a>
          </div>

          <div class="testimonial-card">
            <img src="https://via.placeholder.com/120" alt="Person 2">
            <div class="name">Regina Miles</div>
            <div class="profession">Designer</div>
            <div class="rating">
              <span>⭐ ⭐ ⭐ ⭐</span>
            </div>
            <div class="testimonial-text">
              Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </div>
            <a href="#" class="button">Learn More</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('testimonial-section', TestimonialSection);
