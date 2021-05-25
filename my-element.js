import { LitElement, html } from '@polymer/lit-element';

export class MyElement extends LitElement {
  constructor() {
    super();
  }

  _render() {
    return html`
      <h1>Caraca [[title]]</h1>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String
      }
    };
  }

  ready() {
    super.ready();
    console.log('Ready');
  }
}

customElements.define('my=element', MyElement);
