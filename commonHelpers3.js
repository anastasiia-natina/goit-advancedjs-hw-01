import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l}from"./assets/vendor-78be7656.js";const r=document.querySelector(".feedback-form"),t=r.querySelector('input[name="email"]'),o=r.querySelector('textarea[name="message"]'),s="feedback-form-state",m=l(()=>{const e={email:t.value,message:o.value};localStorage.setItem(s,JSON.stringify(e))},500),n=()=>{const e=localStorage.getItem(s);if(e)try{const a=JSON.parse(e);t.value=a.email,o.value=a.message}catch(a){console.error("Error parsing stored data:",a)}};r.addEventListener("input",m);window.addEventListener("load",n);r.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(s),t.value="",o.value="";const a={email:t.value,message:o.value};console.log(a)});
//# sourceMappingURL=commonHelpers3.js.map