import { Component } from "../../core/component.js";

export default class Button extends Component {
    setup() {
        const { value } = this.$props;
    }
    
    template() {
        return `
        <button class="mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            ${value}
        </button>            
        `;
    }
}