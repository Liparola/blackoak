import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// Import subcomponents
import './layout/blackoak-header.js';
import './blackoak-main.js';
import './layout/blackoak-footer.js';

@customElement('blackoak-app')
export class BlackoakApp extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <blackoak-header></blackoak-header>
      <blackoak-main></blackoak-main>
      <blackoak-footer></blackoak-footer>
    `;
  }
}
