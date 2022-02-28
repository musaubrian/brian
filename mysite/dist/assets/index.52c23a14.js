const n=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};n();const c=`
  
  <div class="landing"> 
    <nav>
      <div class="logo">
      </div>
      <div class="links">
        <ul class="hide-on-small-only">
          <li><a href="#" class="scrollspy">Home</a></li>
          <li><a href="#aboutme" class="scrollspy">About</a></li>
          <li><a href="#projects" class="scrollspy">Work</a></li>
        </ul>
        <li class="hide-on-med-and-up mobile">
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="fas fa-bars"></i>
        </a>
        </li>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav">  
      <li><a href="#" class="scrollspy">Home</a></li>
      <li><a href="#aboutme" class="scrollspy">About</a></li>
      <li><a href="#projects" class="scrollspy">Work</a></li>
    </ul>
    
    <div class="welcome-container">
      <div class="overlay">
        <div class="inner">
          <div class="pika-container"> 
          <img src="https://github.com/musaubrian/brian/blob/main/mysite/images/pikachugif.gif?raw=true" class="pika"/>
          </div>
          <h1>I'm Ernest</h1>
          <p class="description"> A software engineeer </p>
          <a href="#aboutme" class="button scrollspy">Reach me</a>
        </div>
      </div>
    </div>
  </div>

  <section class=""projects" id="projects"> 
    <div class="projects-container">
      <div class="card">
        <img src="https://raw.githubusercontent.com/musaubrian/brian/ac60b402a583c563f19579158cf08545ec146cbb/mysite/images/task.svg" />

        <div class="card-content">
          <p> To-do website that stores your tasks on firebase. View <span> <a href="https://github.com/musaubrian/To-do" target="blank">source code</a></span></p>
        </div>

        <a href="https://writtey.netlify.app" class="button" target="blank">Live Preview</a>
      </div>         
      
      <div class="card">
        <img src="https://raw.githubusercontent.com/musaubrian/brian/ac60b402a583c563f19579158cf08545ec146cbb/mysite/images/Finance%20analytics%20svg.svg" />

        <div class="card-content">
          <p> A finance logger built using <strong>Typescript</strong>. View <span> <a href="https://github.com/musaubrian/vite-projects" target="blank">source code</a></span> </p>
        </div>

        <a href="https://financeer.netlify.app"target="blank" class="button">Live Preview</a>
      </div> 

      <div class="card">
        <img src='https://raw.githubusercontent.com/musaubrian/brian/528209003bfde4e16e8c64c84956438c6c051b90/mysite/images/Python_Outline.svg' />

        <div class="card-content">
          <p> A simple typing speed tester GUI built using python.</p>
        </div>

        <a href="https://github.com/musaubrian/typing-speed-tester" target="blank" class="button">View Code</a>
      </div>                 
    </div>
  </section>

  <section class="aboutme scrollspy" id="aboutme">
    <div class="border">  
      <div class="about-me-image">
      <img src="https://raw.githubusercontent.com/musaubrian/brian/85f581954a80e817e0b78e79bfd404665152e5ec/mysite/images/call.svg" />
      </div>    
      <div class="about-me-content">
        <div>
          <p>
            It is a software development methodology which promotes adaptive planning and continuous improvement of the software being produced. Its main aim is to reduce overhead costs by minimizing documentation.
          </p>
          <p>
            The principles governing it are: customer involvement, embracing change, maintaining simplicity, incremental delivery and people not processes. It is mainly applicable in small to medium scale projects and time critical applications.
            <span>You can check out my projects <a href="#projects">here</a></span>
          </p>
        </div>
        <div class="about-me-buttons">
          <a href="mailto:musaubrian45@gmail.com"  class="button">
           Email
           <i class="fas fa-paper-plane"></i>
          </a>          
        </div>

      </div>
    </div>  
  </section>
  
  <footer>
    <div>
      <ul class="social">
        <li>
          <a href="https://twitter.com/nab__ri" target="blank">
          <i class="fab fa-twitter"></i>
          </a>
        </li> 

        <li>
          <a href="https://github.com/musaubrian" target="blank">
          <i class="fab fa-github"></i>
          </a>
        </li> 

        <li>
          <a href="https://www.linkedin.com/in/ernest-musau/" target="blank">
          <i class="fab fa-linkedin-in"></i>
          </a>
        </li>      
      </ul>
    </div>
    <div class="bottom">
      <span class="credits">Made with </span> <Span class="heart"><i class="far fa-heart"></i></Span> <span class="credits"> by \u{1D56D}\u{1D597}\u{1D58E}.\u{1D586}\u{1D593}</span>
    </div>  
  </footer>

`;document.querySelector("#app").innerHTML=c;
