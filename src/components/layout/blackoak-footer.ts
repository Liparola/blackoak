import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('blackoak-footer')
export class BlackoakFooter extends LitElement {
<<<<<<< HEAD
=======
  // We disable shadow DOM so it inherits global CSS cleanly
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
  createRenderRoot() {
    return this;
  }

  render() {
<<<<<<< HEAD
  return html`
<footer id="footer" class="footer" style=" background-color: #27b47a !important; color: #ffffff !important; padding: 60px 0 20px; ">
  <div class="container">
    <div class="row gy-5" style="color: #ffffff;">

      <!-- Newsletter -->
      <div class="col-lg-4">
        <div class="newsletter-form">
          <h5>Stay Updated</h5>
          <form class="php-email-form">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Enter your email" required>
              <button type="submit" class="btn-subscribe">
                <i class="bi bi-send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Company Links -->
      <div class="col-lg-2 col-6">
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#"><i class="bi bi-chevron-right"></i> About</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Careers</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Press</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Blog</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Contact</a></li>
          </ul>
        </div>
      </div>

      <!-- Solutions -->
      <div class="col-lg-2 col-6">
        <div class="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Digital Strategy</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Cloud Computing</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Data Analytics</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> AI Solutions</a></li>
            <li><a href="#"><i class="bi bi-chevron-right"></i> Cybersecurity</a></li>
          </ul>
        </div>
      </div>

      <!-- Contact -->
      <div class="col-lg-4">
        <div class="footer-contact">
          <h4>Get in Touch</h4>

          <div class="contact-item">
            <i class="bi bi-geo-alt"></i>
            <p>
              Maseru West, Kingsway Road<br>
              Maseru 100<br>
              Lesotho
            </p>
          </div>

          <div class="contact-item">
            <i class="bi bi-telephone"></i>
            <p>+266 63876283</p>
          </div>

          <div class="contact-item">
            <i class="bi bi-envelope"></i>
            <p>info@blackoak.co.ls</p>
          </div>

          <div class="social-links">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
            <a href="#"><i class="bi bi-github"></i></a>
          </div>

        </div>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-6">
          <p>
            © <strong>BlackOak Technologies</strong> All Rights Reserved
          </p>
        </div>

        <div class="col-lg-6">
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
=======
    return html`
<footer id="footer" class="footer dark-background">

    <div class="container">
      <div class="row gy-5">

        <div class="container">
      <div class="row gy-5">

        
            <div class="newsletter-form">
              <h5>Stay Updated</h5>
              <form action="forms/newsletter.php" method="post" class="php-email-form">
                <div class="input-group">
                  <input type="email" name="email" class="form-control" placeholder="Enter your email" required="">
                  <button type="submit" class="btn-subscribe">
                    <i class="bi bi-send"></i>
                  </button>
                </div>
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Thank you for subscribing!</div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#"><i class="bi bi-chevron-right"></i> About</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Careers</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Press</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Blog</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-6">
          <div class="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Digital Strategy</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Cloud Computing</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Data Analytics</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> AI Solutions</a></li>
              <li><a href="#"><i class="bi bi-chevron-right"></i> Cybersecurity</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="footer-contact">
            <h4>Get in Touch</h4>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="contact-info">
                <p>Maseru West, Kingsway Road<br>
Maseru 100<br>
Lesotho</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-telephone"></i>
              </div>
              <div class="contact-info">
                <p>+266 63876283</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-envelope"></i>
              </div>
              <div class="contact-info">
                <p>info@blackoak.co.ls</p>
              </div>
            </div>

            <div class="social-links">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="#"><i class="bi bi-twitter-x"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
              <a href="#"><i class="bi bi-youtube"></i></a>
              <a href="#"><i class="bi bi-github"></i></a>
            </div>
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
          </div>
        </div>

      </div>
    </div>
<<<<<<< HEAD
  </div>

</footer>
`;
}
}
=======

    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copyright">
              <p>© <span>Copyright</span> <strong class="px-1 sitename">blackoak Consultancy</strong> <span>All Rights Reserved</span></p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you've purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> | <a href="https://bootstrapmade.com/tools/">DevTools</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
    `;
  }
}
>>>>>>> 77c7940670cf908e0a98b58e6884360ce230b1d4
