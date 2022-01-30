const s=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};s();const c=`
  <div class="landing"> 
    <div class="overlay">
      <div class="inner">
        <h1>Hi \u{1F44B}, there I'm Ernest</h1>
        <p class="description"> I am a software engineeer </p>
        <button>Reach me</button>
      </div>
    </div>
  </div>

  <section class="aboutme">
    <div>
      <h2>About me section</h2>
    </div>
  
  </section>
  <section class=""projects"> 
    <div class="card">
      <h2>Contain projects cards and their links</h2>    
    </div>
  </section>

`;document.querySelector("#app").innerHTML=c;
