import { LitElement, html, css } from 'lit';

export class PopularCourseSection extends LitElement {
 static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px 20px;
      background-color: #26335d;
      color: white;
      height: 100vh; 
    }

    .container {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 1200px;
    }

    .text-container {
      width: 50%;
      text-align: left;
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
    }

    .image-container {
      width: 40%;
    }

    .image-container img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .button {
      background-color: #7a55d3;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
      text-decoration: none;
      cursor: pointer;
    }

    .button:hover {
      background-color: #6c4ab2;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="image-container">
          <img src="https://via.placeholder.com/400x300" alt="Course Image">
        </div>
        <div class="text-container">
          <h1>Our Popular Courses</h1>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
          <a href="#" class="button">Learn More</a>
        </div>
      </div>
    `;
  }
}



customElements.define('popular-course', PopularCourseSection);


























