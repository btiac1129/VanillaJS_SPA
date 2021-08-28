import { ids } from "webpack";
import { Component } from "../../core/component.js";

export default class Input extends Component {
    setup() {
        const { type, id, name, addStyle} = this.$props;
    }

    template() {
        return `
        <input 
            type="${type}" 
            id="${id}" 
            name="${name}" 
            class="${addStyle} w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        `;
    }
}