(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(5210)}])},8434:function(e,t,n){"use strict";n.d(t,{T3:function(){return a},VY:function(){return r},hM:function(){return s}});var l=n(5893);function r(e){var t=e.children;return(0,l.jsx)("div",{className:"relative py-5 px-5 md:px-10 mt-20 w-full flex flex-col space-y-8 ",children:t})}function a(e){var t=e.children,n=e.id;return(0,l.jsx)("section",{id:n,className:"w-full ",children:t})}function s(e){var t=e.children,n=e.id;return(0,l.jsx)("section",{id:n,className:"w-full h-screen flex items-center ",children:t})}},5210:function(e,t,n){"use strict";n.r(t);var l=n(5893),r=n(8434);window.addEventListener("load",(function(){var e=document.getElementById("contact-form"),t=document.getElementById("Submit");e.addEventListener("submit",(function(n){n.preventDefault();var l=new FormData(e),r=n.target.action;t.disabled=!0,t.innerText="Sending...",fetch(r,{method:"POST",body:l,mode:"no-cors"}).then((function(){alert("Thanks, we'll get back to you soon!"),e.reset(),t.disabled=!1,t.innerText="Send"}))}))})),t.default=function(){return(0,l.jsx)(r.T3,{id:"contact",children:(0,l.jsx)(r.VY,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-5",children:[(0,l.jsx)("h2",{children:"Contact"}),(0,l.jsxs)("p",{className:"text-center",children:["Want to work with us on the next exciting product? Fill in the details or email at ",(0,l.jsx)("a",{className:"font-bold text-green-600 ",href:"mailto:hello@zero-1.studio",children:"hello@zero-1.studio"})]}),(0,l.jsxs)("form",{action:"https://script.google.com/macros/s/AKfycbzeqJfpQc3ckStHuiF2bOGZJxEj8QC0z_k56HmUn3RvxKxVNH0-ncpOFQPIMvrHIHYMYQ/exec",method:"post",className:"flex flex-col w-full md:w-1/2 xl:w-1/3",id:"contact-form",children:[(0,l.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,l.jsx)("input",{type:"text",id:"Name",name:"Name",placeholder:"Barry Allen",required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg"}),(0,l.jsx)("label",{htmlFor:"email",children:"Your email address"}),(0,l.jsx)("input",{type:"email",id:"Email",name:"Email",placeholder:"name@example.com",required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg"}),(0,l.jsx)("label",{htmlFor:"message",children:"Your message"}),(0,l.jsx)("textarea",{id:"Message",name:"Message",placeholder:"My exciting product idea..",rows:4,required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg resize-none"}),(0,l.jsx)("button",{id:"Submit",type:"submit",className:"p-3 bg-slate-700 w-full max-w-xs rounded-lg justify-center self-center",children:"Send"})]})]})})})}}},function(e){e.O(0,[774,888,179],(function(){return t=1382,e(e.s=t);var t}));var t=e.O();_N_E=t}]);