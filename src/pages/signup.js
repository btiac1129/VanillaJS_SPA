// const Signup = {
//   render: async () => {
//     return /*html*/ `
//             <section class="section">
//                 <div class="field">
//                     <p class="control has-icons-left has-icons-right">
//                         <input class="input" id="email_input" type="email" placeholder="Enter your Email">
//                         <span class="icon is-small is-left">
//                             <i class="fas fa-envelope"></i>
//                         </span>
//                         <span class="icon is-small is-right">
//                             <i class="fas fa-check"></i>
//                         </span>
//                     </p>
//                 </div>
//                 <div class="field">
//                     <p class="control has-icons-left">
//                         <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
//                         <span class="icon is-small is-left">
//                             <i class="fas fa-lock"></i>
//                         </span>
//                     </p>
//                 </div>
//                 <div class="field">
//                     <p class="control has-icons-left">
//                         <input class="input" id="repeat_pass_input" type="password" placeholder="Enter the same Password again">
//                         <span class="icon is-small is-left">
//                             <i class="fas fa-lock"></i>
//                         </span>
//                     </p>
//                 </div>
//                 <div class="field">
//                     <p class="control">
//                         <button class="button is-primary" id="register_submit_btn">
//                         Register
//                         </button>
//                     </p>
//                 </div>

//             </section>
//         `;
//   },
//   // All the code related to DOM interactions and controls go in here.
//   // This is a separate call as these can be registered only after the DOM has been painted
//   after_render: async () => {
//     document
//       .getElementById("register_submit_btn")
//       .addEventListener("click", () => {
//         let email = document.getElementById("email_input");
//         let pass = document.getElementById("pass_input");
//         let repeatPass = document.getElementById("repeat_pass_input");
//         if (pass.value != repeatPass.value) {
//           alert(`The passwords dont match`);
//         } else if (
//           (email.value == "") |
//           (pass.value == "") |
//           (repeatPass == "")
//         ) {
//           alert(`The fields cannot be empty`);
//         } else {
//           alert(`User with email ${email.value} was successfully submitted!`);
//         }
//       });
//   },
// };

// export default Signup;

import { Component } from "../core/component.js";
export default class Signup extends Component {
  template() {
    return `
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
    `;
  }
}
