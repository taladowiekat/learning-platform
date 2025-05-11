import { LitElement, html, css } from 'lit';

export class VideoSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 100px 20px;
      background-color: #1a1a2e;
      color: white;
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

    .video-thumbnail {
      position: relative;
      width: 450px;
      max-width: 100%;
      aspect-ratio: 3 / 2; /* ✅ Keeps a consistent aspect ratio */
      background-size: cover;
      background-position: center;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #7a55d3;
      color: white;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.5em;
      cursor: pointer;
    }

    .content {
      max-width: 500px;
      padding-left: 50px;
      text-align: left;
      flex: 1;
    }

    .content h2 {
      font-size: 2.5em;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .underline {
      display: block;
      width: 50px;
      height: 4px;
      background-color: #e74c3c;
      margin-bottom: 20px;
    }

    .content p {
      font-size: 1.1em;
      line-height: 1.6;
      color: #ccc;
    }

    .content a {
      font-size: 1.1em;
      color: #7a55d3;
      text-decoration: none;
      font-weight: bold;
      margin-top: 30px;
      display: inline-block;
    }

    .content a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .content {
        padding-left: 0;
        text-align: center;
      }

      .content h2 {
        font-size: 2em;
      }

      .video-thumbnail {
        width: 100%;
        max-width: 400px;
        aspect-ratio: unset;
        height: 250px; /* ✅ Ensures visible image on small screens */
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="video-thumbnail" style="background-image: url('src/styles/Video.png');">
          <div class="play-button">▶</div>
        </div>
        <div class="content">
          <span class="underline"></span>
          <h2>Our Experts Teacher</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms 
            of Classical physics: Newtonian mechanics.
          </p>
          <a href="#">Learn More &rarr;</a>
        </div>
      </div>
    `;
  }
}

customElements.define('video-section', VideoSection);
