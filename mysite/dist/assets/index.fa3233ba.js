const n=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};n();const o=`
  <div class="landing"> 
    <div class="overlay">
      <div class="inner">
        <div class="pika-container"> 
        <img src="./images/pikachugif.gif" class="pika"/>
         </div>
        <h1>I'm Ernest</h1>
        <p class="description"> A software engineeer </p>
        <a href="#aboutme" class="button">Reach me</a>
      </div>
    </div>
  </div>

  <section class=""projects"> 
    <div class="projects-container">
      <div class="card">
        <img src="./images/task.svg" />

        <div class="card-content">
          <p> To-do website that stores your tasks on firebase. View <span> <a href="https://github.com/musaubrian/To-do" target="blank">source code</a></span></p>
        </div>

        <a href="https://writtey.netlify.app" class="button" target="blank">Live Preview</a>
      </div>         
      
      <div class="card">
        <img src="./images/Finance analytics svg.svg" />

        <div class="card-content">
          <p> A finance logger built using <strong>Typescript</strong>. View <span> <a href="https://github.com/musaubrian/vite-projects" target="blank">source code</a></span> </p>
        </div>

        <a href="https://financeer.netlify.app"target="blank" class="button">Live Preview</a>
      </div> 

      <div class="card">
        <img src='./images/Python_Outline.svg' />

        <div class="card-content">
          <p> A simple typing speed tester GUI built using python.</p>
        </div>

        <a href="https://github.com/musaubrian/typing-speed-tester" target="blank" class="button">View Code</a>
      </div>                                   
                 
    </div>
  </section>

  <section class="aboutme" id="aboutme">
    <div>
      <h2>About me section</h2>
    </div>  
  </section>


`;document.querySelector("#app").innerHTML=o;
