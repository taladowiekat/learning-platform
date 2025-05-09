import { html, LitElement } from 'lit';
import './components/navbar.js';
import './components/header.js';
import './components/statsSection.js';  // إضافة الإحصائيات
import './components/videoSection.js';  // إضافة قسم الفيديو
import './components/cardSection.js';
import './components/courseSection.js';
import './components/popularCourse.js';
import './components/testimonialSection.js';
import './components/teamSection.js';
import './components/newslettersection.js';
import './components/footer.js';
class MyApp extends LitElement {
  render() {
    return html`
      <my-navbar></my-navbar>
      <my-header></my-header>
      
      <stats-section></stats-section> 
      <video-section></video-section>
      <cards-section></cards-section>
      <course-section></course-section>
      <popular-course></popular-course>
      <testimonial-section></testimonial-section>
      <team-section></team-section>
      <newsletter-section></newsletter-section>
      <footer-section></footer-section>
      
    `;
  }
}

customElements.define('my-app', MyApp);
