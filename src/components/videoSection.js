import { LitElement, html, css } from 'lit';

export class VideoSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      padding: 100px 20px;
      background-color: #1a1a2e;
      color: white;
      align-items: center;
      justify-content: space-between;
      height: 100vh;
    }

    .video-thumbnail {
      position: relative;
      width: 50%;
      height: 350px;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 20px;
      border-radius: 50%;
      font-size: 2em;
      cursor: pointer;
    }

    .content {
      width: 35%;
      padding: 0 20px;
    }

    .content h2 {
      font-size: 3em;
      font-weight: bold;
    }

    .content p {
      font-size: 1.4em;
      margin-top: 20px;
      line-height: 1.5;
    }

    .content a {
      font-size: 1.2em;
      color: #7a55d3;
      text-decoration: none;
      font-weight: bold;
      margin-top: 20px;
      display: inline-block;
    }
  `;

  render() {
    return html`
      <div class="video-thumbnail" style="background-image: url('https://via.placeholder.com/800x600');">
        <div class="play-button">▶</div>
      </div>
      <div class="content">
        <h2>Our Experts Teacher</h2>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
        <a href="#">Learn More &rarr;</a>
      </div>
    `;
  }
}

customElements.define('video-section', VideoSection);
