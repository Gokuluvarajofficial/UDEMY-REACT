

function navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
          <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
          <i class="fa-solid fa-magnifying-glass" style={{color: '#000000'}} />
          <input placeholder="Search for anything here. Tech, Business, Art ..." />
        </div>
        <div class="navbar__s3">
          <p>Courses</p>
          {/* <p>My Learning</p> */}
          <div class="mylearning">
            <p>My Learning</p>
            <div class="mylearning__popup">
              <p>You did not purchase anything yet</p>
            </div>
          </div>
          <i class="fa-solid fa-cart-shopping" style={{color: '#000000'}} />
          <i class="fa-solid fa-bell" style={{color: '#000000'}} />
          <i class="fa-solid fa-user" style={{color: '#000000'}} />
        </div>
        <div class="navbar__s4">
          <i class="fa-solid fa-bars" style={{color: '#000000'}} />
        </div>
      </div>

    )
    }

 export default navbar