import { LitElement, html, css } from 'lit';

export class CourseSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: flex-start;
       padding-bottom: 100px;
      background-color: #1a1a2e;
      color: white;
      min-height: 80vh;
      
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
      
      
      width: 100%;
    }

    p {
      font-size: 1.1em;
      color: #ccc;
      width: 100%;
      max-width: 600px;
    }

    .cards-container {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1200px;
    }

    .card {
      background-color: white;
      color: #26335d;
      width: 260px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease-in-out;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .sale-badge {
      position: absolute;
      top: 15px;
      left: 15px;
      background-color: #e74c3c;
      color: white;
      padding: 5px 10px;
      font-size: 0.8em;
      font-weight: bold;
      border-radius: 5px;
    }

    .card-header {
      position: relative;
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .icons-bar {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin: 15px 0;
    }

    .icon-btn {
      background-color: #f0f0f0;
      border-radius: 50%;
      padding: 10px;
      font-size: 1.2em;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .icon-btn:hover {
      background-color: #ddd;
    }

    .card-content {
      padding: 15px;
      text-align: left;
    }

    .category {
      color: #7a55d3;
      font-weight: bold;
      font-size: 0.9em;
      margin-bottom: 8px;
    }

    .rating {
      background-color: #26335d;
      color: white;
      padding: 3px 8px;
      border-radius: 15px;
      font-size: 0.8em;
      margin-left: 8px;
    }

    .title {
      font-size: 1.2em;
      font-weight: bold;
      margin: 10px 0;
    }

    .description {
      font-size: 0.9em;
      color: #555;
      margin-bottom: 15px;
    }

    .sales-info {
      font-size: 0.9em;
      color: #555;
      margin-bottom: 10px;
    }

    .price {
      font-size: 1em;
      font-weight: bold;
    }

    .old-price {
      text-decoration: line-through;
      color: #bbb;
      margin-left: 10px;
      font-size: 0.9em;
    }

    .learn-more-btn {
      display: inline-block;
      margin-top: 15px;
      color: #7a55d3;
      text-decoration: none;
      font-weight: bold;
    }

    .learn-more-btn::after {
      content: " →";
      transition: margin-left 0.3s;
    }

    .learn-more-btn:hover::after {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <div>
        <div class="section-subtitle">Courses</div>
        <h1>Most Popular Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>

        <div class="cards-container">
          ${this.renderCard("Expert Instruction", "Welcome", "src/styles/fixed-height.png", "15 Sales", "$16.48", "$6.48")}
          ${this.renderCard("2,769 Online Courses", "Welcome", "src/styles/fixed-height.png", "15 Sales", "$16.48", "$6.48")}
          ${this.renderCard("Training Courses", "For Better Future", "src/styles/fixed-height.png", "15 Sales", "$16.48", "$6.48")}
          ${this.renderCard("Lifetime Access", "Welcome", "src/styles/fixed-height.png", "15 Sales", "$16.48", "$6.48")}
        </div>
      </div>
    `;
  }

  renderCard(title, category, imageUrl, sales, oldPrice, newPrice) {
    return html`
      <div class="card">
        <div class="card-header">
          <span class="sale-badge">Sale</span>
          <img src="${imageUrl}" alt="Course Image">
        </div>
        <div class="icons-bar">
          <div class="icon-btn">♡</div>
          <div class="icon-btn">🛒</div>
          <div class="icon-btn">👁️</div>
        </div>
        <div class="card-content">
          <div>
            <span class="category">${category}</span>
            <span class="rating">4.9 ★</span>
          </div>
          <div class="title">${title}</div>
          <div class="description">We focus on ergonomics and meeting you...</div>
          <div class="sales-info">📦 ${sales}</div>
          <div class="price">${newPrice}<span class="old-price">${oldPrice}</span></div>
          <a href="#" class="learn-more-btn">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define('course-section', CourseSection);
