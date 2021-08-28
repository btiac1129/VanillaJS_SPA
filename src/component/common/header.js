import { Component } from "../../core/component.js";

export default class Header extends Component {
  template() {
    return `
    <header class="text-gray-700 body-font border-b border-gray-200">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://mertjf.github.io/tailblocks/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Vanilla Movie</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-5 hover:text-gray-900">Home</a>
        <a href="#dksldks" class="mr-5 hover:text-gray-900">detail</a>
        <a href="#signup" class="mr-5 hover:text-gray-900">Sign up</a>
      </nav>
      <button class="inline-flex items-center bg-purple-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        <a href="#login">Login</a>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    </header>
    `;
  }
}
