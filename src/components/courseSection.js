import { LitElement, html, css } from 'lit';

export class CourseSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px 20px;
      background-color: #26335d;
      color: white;
      min-height: 100vh;
      text-align: center;
    }

   
    h1 {
      font-size: 3em;
      font-weight: bold;
      color: #7a55d3;
      margin-bottom: 20px;
      text-align: left;
      width: 100%;
    }

    p {
      font-size: 1.2em;
      color: white;
      margin-bottom: 50px;
      text-align: left;
      width: 100%;
    }

    .cards-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: nowrap;
      width: 100%;
      max-width: 1200px;
    }

    .card {
      background-color: #1e1e1e;
      color: white;
      width: 250px;  
      height: 400px; 
      margin: 20px;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      position: relative;
      transition: transform 0.3s ease-in-out;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    .sale-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: red;
      color: white;
      padding: 5px 10px;
      font-weight: bold;
      border-radius: 5px;
    }

    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
    }

    .card h3 {
      font-size: 1.5em;
      font-weight: bold;
      color: #7a55d3;
      margin-top: 10px;
    }

    .card p {
      font-size: 1em;
      color: #bbb;
      margin-top: 10px;
    }

    .card .price {
      font-size: 1.2em;
      color: #7a55d3;
      font-weight: bold;
      margin-top: 15px;
    }

    .card .old-price {
      text-decoration: line-through;
      color: #bbb;
      margin-left: 10px;
    }

    .card .stars {
      margin-top: 10px;
    }

    .card .stars span {
      color: #ffdd00;
      font-size: 1.2em;
    }

    .card .button {
      background-color: #7a55d3;
      color: white;
      padding: 10px;
      border-radius: 5px;
      margin-top: 15px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }

    .card .button:hover {
      background-color: #6c4ab2;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Most Popular Courses</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div class="cards-container">
          <div class="card">
            <div class="sale-badge">Sale</div>
            <img src="https://via.placeholder.com/250x150" alt="Course Image">
            <h3>Expert Instruction</h3>
            <p>We focus on ergonomics and meeting you...</p>
            <div class="stars">
              <span>⭐ ⭐ ⭐ ⭐ 4.9</span>
            </div>
            <div class="price">
              $6.48 <span class="old-price">$16.48</span>
            </div>
            <a href="#" class="button">Learn More</a>
          </div>

          <div class="card">
            <div class="sale-badge">Sale</div>
            <img src="https://via.placeholder.com/250x150" alt="Course Image">
            <h3>2,769 Online Courses</h3>
            <p>We focus on ergonomics and meeting you...</p>
            <div class="stars">
              <span>⭐ ⭐ ⭐ ⭐ 4.9</span>
            </div>
            <div class="price">
              $6.48 <span class="old-price">$16.48</span>
            </div>
            <a href="#" class="button">Learn More</a>
          </div>

          <div class="card">
            <div class="sale-badge">Sale</div>
            <img src="https://via.placeholder.com/250x150" alt="Course Image">
            <h3>Training Courses</h3>
            <p>We focus on ergonomics and meeting you...</p>
            <div class="stars">
              <span>⭐ ⭐ ⭐ ⭐ 4.9</span>
            </div>
            <div class="price">
              $6.48 <span class="old-price">$16.48</span>
            </div>
            <a href="#" class="button">Learn More</a>
          </div>

          <div class="card">
            <div class="sale-badge">Sale</div>
            <img src="https://via.placeholder.com/250x150" alt="Course Image">
            <h3>Lifetime Access</h3>
            <p>We focus on ergonomics and meeting you...</p>
            <div class="stars">
              <span>⭐ ⭐ ⭐ ⭐ 4.9</span>
            </div>
            <div class="price">
              $6.48 <span class="old-price">$16.48</span>
            </div>
            <a href="#" class="button">Learn More</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('course-section', CourseSection);