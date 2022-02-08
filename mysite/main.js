import './style.css'

const insertHtml = `
  <div class="landing"> 
    <div class="overlay">
      <div class="inner">
        <div class="pika-container"> 
        <img src="https://github.com/musaubrian/brian/blob/main/mysite/images/pikachugif.gif?raw=true" class="pika"/>
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

  <section class="aboutme" id="aboutme">
    <div>
      <h2>About me section</h2>
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
      <span class="credits">Made with </span> <Span class="heart"><i class="far fa-heart"></i></Span> <span class="credits"> by 𝕭𝖗𝖎.𝖆𝖓</span>
    </div>  
  </footer>

`
document.querySelector('#app').innerHTML = insertHtml
