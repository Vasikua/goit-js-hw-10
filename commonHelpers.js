import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),w=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]"),d=document.querySelector("#datetime-picker"),a=document.querySelector("[data-start]");a.addEventListener("click",()=>{a.disabled=!0,d.disabled=!0,b()});a.disabled=!0;let n,s;const D={dateFormat:"Y-m-d",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=new Date(e[0]).getTime(),o=Date.now();t>=o?(a.disabled=!1,n=t-o,i(u(n))):p.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Please choose a date in the future"})}};y("#datetime-picker",D);function i({days:e,hours:t,minutes:o,seconds:c}){S.textContent=`${e}`,g.textContent=`${t}`,w.textContent=`${o}`,C.textContent=`${c}`}function b(){clearInterval(s),s=setInterval(k,1e3)}function k(){n>=0?(n-=1e3,i(u(n))):(clearInterval(s),d.disabled=!1)}function r(e){return String(e).padStart(2,"0")}function u(e){const l=r(Math.floor(e/864e5)),m=r(Math.floor(e%864e5/36e5)),f=r(Math.floor(e%864e5%36e5/6e4)),h=r(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map