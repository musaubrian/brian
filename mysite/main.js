import './style.css'

const insertHtml = `
  <div class="landing"> 
    <div class="overlay">
      <div class="inner">
        <h1>Hi 👋, there I'm Ernest</h1>
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

`
document.querySelector('#app').innerHTML = insertHtml
