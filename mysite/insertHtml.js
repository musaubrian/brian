export const insertHtml = `
  
  <div class="landing"> 
    <nav>
      <div class="logo">
      </div>
      <div class="links">
        <ul class="hide-on-small-only">
          <li><a href="#" class="scrollspy">Home</a></li>
          <li><a href="#aboutme" class="scrollspy" onclick="Blank">About</a></li>
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
      <li><a href="#">Home</a></li>
      <li><a href="#aboutme" >About</a></li>
      <li><a href="#projects">Work</a></li>
    </ul>
    
    <div class="welcome-container">
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
  </div>

  <section class=""projects scrollspy" id="projects"> 
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

  <section class="aboutme">
    <div class="border scrollspy" id="aboutme">  
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
            <span>You can check out my projects <a href="#projects" class="scrollspy">here</a></span>
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
    <div class="top">
      <div class="left">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#projects">Work</a>
          <a href="#aboutme">About</a>

      </div>
      <div class="right">
      <h4>Connect</h4>
      <ul class="social">
        <li>
          <a href="https://twitter.com/nab__ri" target="blank" class="twitter">
          <i class="fab fa-twitter"></i>
          </a>
        </li> 

          <li>
            <a href="https://github.com/musaubrian" target="blank">
            <i class="fab fa-github"></i>
            </a>
          </li> 

          <li>
            <a href="https://www.linkedin.com/in/ernest-musau/" target="blank" class="linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li> 
        </ul>
      </div>
      
    </div>
    <div class="bottom">
      <span class="credits">Made with </span> <Span class="heart"><i class="far fa-heart"></i></Span> <span class="credits"> by ????????????.????????</span>
    </div>  
  </footer>
`;