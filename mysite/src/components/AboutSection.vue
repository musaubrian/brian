<script setup>
    import { ref } from 'vue';
    import { useMotion } from '@vueuse/motion';

    const targetEl = ref();
    useMotion(targetEl, {
        initial: {
            opacity: 0,
            x: -150
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1000,
                delay: 200             
            }
        }
    })

</script>

<template>
    <div class="about" ref="targetEl">
        <div class="about-image">
            <img src="../assets/avataaars.png" alt="">
        </div>
        <div class="about-me">
            <p>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Omnis, tempora. Fugiat
                sapiente sequi quis culpa, corporis 
                repellat libero quam fugit similique, 
                consequuntur quod ex nesciunt sed, nihil 
                necessitatibus quidem distinctio qui tempore esse 
                laboriosam atque nostrum! Facere nemo hic est
                blanditiis obcaecati dolor impedit exercitationem, 
                tenetur voluptatibus molestiae minima maiores.
            </p>
            <hr/>
            <div class="large-view-btn">
                <RouterLink to="/contact" class="button">
                    Reach me
                </RouterLink>
            </div>
            <div class="mobile-btn-container">
                <div class="mail">
                    <span class="mb-sp">Email me:</span>
                    <a href="mailto: musuabrian45@gmail.com" class="mobile-btn"> 
                        <font-awesome-icon icon="fa-envelope" />
                    </a>
                </div>
                <div class="call">
                    <span class="mb-sp">Call me:</span>
                    <a href="tel: +254792810299" class="mobile-btn">
                        <font-awesome-icon icon="fa-solid fa-phone" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <style>
  
      @import '@/assets/base.css';
  
  .about {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      padding: 1rem;
  }
  
  .about-me {
      width: 50%;
      padding: 1rem;
      display: flex;
      margin: auto;
      flex-direction: column;
      align-items: center;
      justify-content: safe;
  }
  .about-image {
      width: 50%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .about-image img {
      width: 80%;
      padding: 2rem;
  }
  
  .about-me p {
      padding: 1rem;
      font-size: 1.3rem;
      text-align: justify;
  }
  .large-view-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .button {
      width: 50%;
      padding: 0.9rem;
      border: none;
      font-size: 1.3rem;
      font-weight: 650;
      border-radius: 20px;
      border: 3px solid var(--color-text-black);
      background-color: transparent;
      text-decoration: none;
      color: var(--color-text-black);
      display: flex;
      justify-content: center; 
      transition: 400ms;
  }
  
  .button:hover {
      background-color: var(--color-background-black);
      color: var(--color-text-white-soft);
      transition: 400ms;
  }
  .mobile-btn-container {
    display: none;
  }
  
  @media screen and (max-width: 790px) {
      .about {
      flex-direction: column;
      }
      .about-image {
      display: none;
      }
      .about-me {
      width: 100%;
      padding: none;
      }
      .about-me p {
        padding: 0;
      }
      .large-view-btn {
        display: none;
      }
      .mobile-btn-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
      }
      .mail,
      .call {
        display: flex;
        width: 50%;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
      .mobile-btn {
        width: 80%;
      padding: 0.9rem;
      margin-bottom: 1rem;
      border: none;
      font-size: 1.3rem;
      font-weight: 650;
      border-radius: 20px;
      border: 3px solid var(--color-text-black);
      background-color: transparent;
      text-decoration: none;
      color: var(--color-text-black);
      display: flex;
      justify-content: center; 
      align-items: center;
      transition: 400ms;
      }
      .mobile-btn:hover {
        background-color: var(--color-background-black);
      color: var(--color-text-white-soft);
      transition: 400ms;
      }
      .mb-sp {
        font-weight: 600;
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
      }
  }
  </style>  