import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './layout/blackoak-header.js';
import './layout/blackoak-footer.js';

@customElement('blackoak-starter-page')
export class BlackoakStarterPage extends LitElement {
  // We disable shadow DOM so it inherits global CSS cleanly
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <blackoak-header></blackoak-header>
<main class="main">

    <!-- Page Title -->
    <div class="page-title dark-background" data-aos="fade" style="background-image: url(assets/img/bg/bg-2.webp);">
      <div class="container position-relative">
        <h1>Starter Page</h1>
        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Starter Page</li>
          </ol>
        </nav>
      </div>
    </div><!-- End Page Title -->

    <!-- Starter Section Section -->
    <section id="starter-section" class="starter-section section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <span class="subtitle">Starter Section</span>
        <h2>Starter Section</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up">
        <p>Use this page as a starter for your own custom pages.</p>
      </div>

    </section><!-- /Starter Section Section -->

  </main>
      <blackoak-footer></blackoak-footer>
    `;
  }
}
