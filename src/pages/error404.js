import { Component } from "../core/component.js";

export default class Error404 extends Component {
  template() {
    return `
    <section>
      <h1 class="text-center">Error 404. Page not found.</h1>
    </section>
    `;
  }
}
