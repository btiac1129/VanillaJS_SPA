import { Component } from "../core/component.js";

import LoginForm from "../component/login/form.js";
export default class Login extends Component {
  template() {
    return `
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div id="LoginForm"></div>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
    `;
  }

  mounted() {
    const $LoginForm = this.$el.querySelector("#LoginForm");

    new LoginForm($LoginForm, {});
  }
}
