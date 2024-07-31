function Navbar() {
    return(
        <nav> 
            <div class="navbar">
         <div class="navbar__s1">
         <h1 class="navbar__s1__title">Udemy</h1>
          </div>
          <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for anything here, Tech,Business,Art..."/>
          </div>
          <div class="navbar__s3">
         <p>Courses</p>
         <div class="mylearning">
         <p>My Learning</p>
          <div class="mylearning__popup">
          <P>You did not purchase Anything Yet</P>
          </div>
           </div>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>
          </div>
           <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
          </div>
         </div>

        </nav>
    );
}
export default Navbar
