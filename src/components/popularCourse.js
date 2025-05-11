import { LitElement, html, css } from 'lit';

export class PopularCourseSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background-color: #1a1a2e;
      color: white;
      min-height: 80vh;
      padding: 50px 20px;
      padding-bottom:100px;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      gap: 40px;
      flex-wrap: wrap;
    }

    .image-container {
      flex: 1 1 45%;
      display: flex;
      justify-content: center;
    }

    .image-container img {
      max-width: 100%;
      height: auto;
    }

    .text-container {
      flex: 1 1 45%;
      text-align: left;
    }

    .underline {
      display: block;
      width: 50px;
      height: 4px;
      background-color: #e74c3c;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 2.5em;
      font-weight: bold;
      margin-bottom: 20px;
      color: white;
    }

    p {
      font-size: 1em;
      color: #ccc;
      margin-bottom: 30px;
      line-height: 1.5;
    }

    .button {
      background-color: transparent;
      color: #7a55d3;
      font-weight: bold;
      text-decoration: none;
      font-size: 1em;
      position: relative;
    }

    .button::after {
      content: "→";
      margin-left: 8px;
      transition: margin-left 0.3s;
    }

    .button:hover::after {
      margin-left: 15px;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        text-align: center;
      }

      .text-container {
        text-align: center;
      }

      h1 {
        font-size: 2em;
      }

      .image-container,
      .text-container {
        flex: 1 1 100%;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="image-container">
          <img src="src/styles/col-md-6.png" alt="Popular Courses" />
        </div>
        <div class="text-container">
          <span class="underline"></span>
          <h1>Our Popular Courses</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms of 
            Classical physics: Newtonian mechanics.
          </p>
          <a href="#" class="button">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define('popular-course', PopularCourseSection);
