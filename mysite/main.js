import './style.css'

const insertHtml = `
  <div class="landing"> 
    <div class="overlay">
      <div class="inner">
        <h1>Hi 👋, there I'm Ernest</h1>
        <p class="description"> I am a software engineeer </p>
        <a href="#aboutme" class="button">Reach me</a>
      </div>
    </div>
  </div>

  <section class=""projects"> 
    <div class="projects-container">
      <div class="card">
        <img src="https://raw.githubusercontent.com/musaubrian/brian/5507596eb2b87ed518d7e4be51cbff8232d30cba/mysite/images/design.svg" />

        <div class="card-content">
          <p> This is a simple description of the project that has possibly two to three or even five lines but testing for either justify or align center. View <span> <a href="https://github.com/musaubrian/musaubrian" target="blank">source code</a></span></p>
        </div>

        <a href="#" class="button">Live Preview</a>
      </div>         
      
      <div class="card">
        <img src="https://raw.githubusercontent.com/musaubrian/brian/5507596eb2b87ed518d7e4be51cbff8232d30cba/mysite/images/css.svg" />

        <div class="card-content">
          <p> This is a simple description of the project that has possibly two to three or even five lines but testing for either justify or align center. View <span> <a href="https://github.com/musaubrian/musaubrian" target="blank">source code</a></span> </p>
        </div>

        <a href="#" class="button">Live Preview</a>
      </div> 

      <div class="card">
        <img src="https://raw.githubusercontent.com/musaubrian/brian/5507596eb2b87ed518d7e4be51cbff8232d30cba/mysite/images/Coding%20_Monochromatic.svg" />

        <div class="card-content">
          <p> This is a simple description of the project that has possibly two to three or even five lines but testing for either justify or align center. View the <span> <a href="https://github.com/musaubrian/musaubrian" target="blank">source code</a></span></p>
        </div>

        <a href="#" class="button">Live Preview</a>
      </div>                  
    </div>
  </section>

  <section class="aboutme" id="aboutme">
    <div>
      <h2>About me section</h2>
    </div>  
  </section>


`
document.querySelector('#app').innerHTML = insertHtml
