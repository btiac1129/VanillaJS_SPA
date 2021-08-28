import { Component } from "../../core/component.js";

import Input from "../common/input.js";
import Button from "../common/button.js";
export default class LoginForm extends Component {
    template() {
        return `
            <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                <input id="input">
            </div>
            <button id="button"></button> 
        `;
    }

    mounted() {
        const $input = this.$el.querySelector("#input");
        const $button = this.$el.querySelector("#button");

        new Input($input, {
            $props: {
                type: "text",
                id: "full-name",
                name: "full-name",
                addStyle: ""
            }
        })
        new Button($button, {
            $props: { value: "Login"},
        });
    }
}