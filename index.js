import { LitElement, html } from '@polymer/lit-element/lit-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class Element1 extends LitElement {
  render() {
    return html`
      <style>
        paper-card {
          --paper-card-header-text: {
            color: blue;
          }
        }
      </style>
      <paper-card heading="Emmental" alt="Emmental">
        <div class="card-content">
          Emmentaler or Emmental is a yellow, medium-hard cheese that originated
          in the area around Emmental, Switzerland. It is one of the cheeses of
          Switzerland, and is sometimes known as Swiss cheese.
        </div>
        <div class="card-actions">
          <paper-button>Share</paper-button>
          <paper-button>Explore!</paper-button>
        </div>
      </paper-card>
      <my-element title="Polymer is GREAT"></my-element>
    `;
  }
}

customElements.define('element-1', Element1);
