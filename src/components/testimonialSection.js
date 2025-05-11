import { LitElement, html, css } from 'lit';

export class TestimonialSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      background-color: #1a1a2e;
      color: white;
      padding: 20px 20px;
      min-height: 80vh;
    }

    .main-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
    }

    .section-subtitle {
      color: #7a55d3;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1em;
    }

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: white;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1em;
      color: #ccc;
      margin-bottom: 50px;
      max-width: 600px;
      line-height: 1.6;
    }

.testimonials-container {
  display: flex;
  justify-content: center; 
  gap: 40px;
  flex-wrap: wrap;
}


    .testimonial-card {
      background-color: white;
      color: #26335d;
      width: 400px;
      padding: 40px 20px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .testimonial-card img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
    }

    .testimonial-text {
      font-size: 0.95em;
      color: #555;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .rating {
      margin-bottom: 20px;
      color: #ffdd00;
      font-size: 1.2em;
    }

    .name {
      font-size: 1.1em;
      font-weight: bold;
      color: #26335d;
      margin-bottom: 5px;
    }

    .profession {
      font-size: 0.9em;
      color: #999;
    }

    @media (max-width: 768px) {
      .testimonials-container {
        flex-direction: column;
        align-items: center;
      }

      .testimonial-card {
        width: 90%;
      }
    }
  `;

  render() {
    return html`
      <div class="main-container">
        <div class="section-subtitle">Testimonials</div>
        <h1>Get Quality Education</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>

        <div class="testimonials-container">
          ${this.renderCard("src/styles/fixed-height sec-.png", "Regina Miles", "Designer", 5)}
          ${this.renderCard("src/styles/fixed-height sec-.png", "Regina Miles", "Designer", 4)}
        </div>
      </div>
    `;
  }

  renderCard(image, name, profession, rating) {
    return html`
      <div class="testimonial-card">
        <img src="${image}" alt="${name}">
        <div class="testimonial-text">
          Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
        </div>
        <div class="rating">
          ${"⭐ ".repeat(rating)}${rating < 5 ? "☆" : ""}
        </div>
        <div class="name">${name}</div>
        <div class="profession">${profession}</div>
      </div>
    `;
  }
}

customElements.define('testimonial-section', TestimonialSection);
