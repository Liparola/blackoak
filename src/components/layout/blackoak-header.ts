import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('blackoak-header')
export class BlackoakHeader extends LitElement {
  // We disable shadow DOM so it inherits global CSS cleanly
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
<header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="110 80 830 290" style="height: 1.5em; width: auto; vertical-align: middle;">
            <defs>
              <style>
                .title { font-family: 'Georgia', 'Times New Roman', serif; fill: currentColor; font-size: 76px; letter-spacing: 6px; }
                .subtitle { font-family: 'Georgia', 'Times New Roman', serif; fill: currentColor; font-size: 32px; letter-spacing: 5px; }
              </style>
            </defs>
            <g transform="translate(-140, 27.5)">
              <circle cx="400" cy="200" r="135" fill="none" stroke="currentColor" stroke-width="8" />
              <circle cx="400" cy="200" r="118" fill="none" stroke="currentColor" stroke-width="3" />
              <path d="M 400 90 C 420 85, 435 95, 440 105 C 455 100, 470 105, 475 120 C 490 115, 510 130, 505 155 C 525 160, 520 185, 505 195 C 515 215, 490 235, 470 220 C 465 240, 440 245, 425 230 C 415 235, 395 235, 400 220 C 395 235, 375 235, 365 230 C 350 245, 325 240, 320 220 C 300 235, 275 215, 285 195 C 270 185, 265 160, 285 155 C 280 130, 300 115, 315 120 C 320 105, 335 100, 350 105 C 365 85, 385 85, 400 90 Z" fill="currentColor" />
              <path d="M 324 290 C 345 285, 360 270, 370 255 C 370 240, 360 235, 345 225 C 360 220, 375 225, 390 235 C 400 240, 400 240, 405 235 C 420 225, 435 220, 450 225 C 435 235, 425 240, 425 255 C 435 270, 450 285, 476 290 C 450 295, 420 300, 400 300 C 380 300, 350 295, 324 290 Z" fill="currentColor" />
              <path d="M 476 290 A 118 118 0 0 1 324 290 L 400 305 Z" fill="currentColor" />
            </g>
            <g>
              <text x="440" y="215" class="title">BLACK OAK</text>
              <text x="445" y="275" class="subtitle">CONSULTANCY</text>
            </g>
          </svg>
        </h1>
      </a>


      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>    
            <li><a href="#calendar">Calendar</a></li>


            <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>

              <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
         <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>
    
  </header>
    `;
  }
}
