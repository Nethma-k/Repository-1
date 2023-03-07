import React from 'react';
class Home extends React.Component{
    render(){
        return(
        <div>
     <nav class="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ">
            <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-white">
                        <i class="fa-sharp fa-solid fa-house"></i>
                      
                    </a>
                  </div>
                </div>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item p size">
                <strong>Education </strong>
            </a>
            <br/>
            
            <a class="navbar-item p size">
                <strong>Awards</strong> 
            </a>
        

            <a class="navbar-item p size">
                <strong>Contact Me</strong> 
               </a>
      
            
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark">
                    <i class="fa-brands fa-github mr-2"></i> 
                    GitHub
                </a>
                <a class="button is-info">
                    <i class="fa-brands fa-facebook mr-2"></i>
                    Facebook
                </a>
              </div>
            </div>
          </div>
      </nav>

      <div class="Home Hero c">
        <div class="columns">
            <div class="column is-6 ">
                <figure class="image im  ">
                    <img class="is-rounded" src="Pictures/Picture 1.jpg"/>
                  </figure>
            </div>
            <div class="column is 6 is-align-self-center has has-text-centered">
                <h5 class = "ml-6 title is-1 has-text-weight-bold is-size-1"><b>ABOUT ME</b> </h5>
        
                <h5 class = "ml-6 title is-4">Hello I’m Nethma Karunaratne a 1st year undergraduate currently studying  information systems.</h5>
            </div>

            

        </div>
        </div>

      <section class="section is-medium m ">
          <div class="columns">
          <div class="column is-6 m  ">
            <h5 class="title is-1 has-text-centered "><b>EDUCATION</b></h5>
            <br/>
            <br/>
            <br/>
            <ul class="steps is-narrow is-large is-centered has-content-centered ">
              <li class="steps-segment">
                <a href="#" class="has-text-dark">
                  <span class="steps-marker">
                    <span class="icon">
                      <i class="fa-sharp fa-solid fa-school"></i>
                    </span>
                  </span>
                  <div class="steps-content">
                    <p class="heading"><strong>Bishop's College (2006-2020)</strong></p>
                  </div>
                </a>
              </li>
              <li class="steps-segment">
                <a href="#" class="has-text-dark">
                  <span class="steps-marker">
                    <span class="icon">
                      <i class="fa-sharp fa-solid fa-school"></i>
                    </span>
                  </span>
                  <div class="steps-content">
                    <p class="heading"><strong>Bsc. Applied Accounting (2021-)</strong></p>
                  </div>
                </a>
              </li>
              <li class="steps-segment is-active has-gaps">
                <span class="steps-marker">
                  <span class="icon">
                    <i class="fa-sharp fa-solid fa-school"></i>
                  </span>
                </span>
                <div class="steps-content">
                  <p class="heading"><strong>Bsc. Information Systems (2022-)</strong></p>
                </div>
              </li>
              </ul>
            </div>
            <div class="column is-6  ">
            <div class="card n">
              <header class="card-header">
                <p class="card-header-title">
                  SCHOOL EDUCATION
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  I completed my GCE A/L in the commerce stream with 2A's and 1B and my GCE O/L with 9 A's
                </div>
              </div>
              
            </div>
            <br/>
            <div class="card n">
              <header class="card-header">
                <p class="card-header-title">
                  HIGHER EDUCATION
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  I am currently pursuing a Bsc in Information Systems at University of Colombo School of Computing and a Bsc in Applied Accounting at CA Sri Lanka.
                </div>
              </div>
              
            </div>
           </div>
  
          </div>
              
            
            
           
              
        </section>

        <section class="section c is-medium">
          <h5 class="title is-1 has-text-centered "><b>CONTACT ME</b></h5>
          
              <div class='card equal-height'>
                <div class="card-image has-text-centered pt-5">
                    <figure class="image is-128x128 is-inline-block">
                        <img class="is-rounded" src="Pictures/picture 2.png"/>
                    </figure>
                </div>
                <div class='card-content'>
                <div class="card-content has-text-centered">
                  <h5 class = "title is-2 ">0711234567</h5>
                </div>
              </div>

                <div class='card equal-height'>
                  <div class="card-image has-text-centered pt-5">
                      <figure class="image is-128x128 is-inline-block">
                          <img class="is-rounded" src="Pictures/picture 3png.png"/>
                      </figure>
                  </div>
                  </div>
                  <div class='card-content'>
                  <div class="card-content has-text-centered">
                    <h5 class = "title is-2 ">Nethma123@gmail.com</h5>
                  </div>
                </div>

                  <div class='card equal-height'>
                  <div class="card-image has-text-centered pt-5">
                      <figure class="image is-128x128 is-inline-block">
                          <img class="is-rounded" src="Pictures/picture 4.png"/>
                      </figure>
                  </div>
                  </div>
                  <div class='card-content'>
                  <div class="card-content has-text-centered">
                    <h5 class = "title is-3 ">www.linkedin.com/in/nethma-karunaratne-845920244</h5>
                  </div>
                  </div>
                  </div>
                
              
            
        </section>

        </div>

        

        
        );
    }
}

export default Home;
