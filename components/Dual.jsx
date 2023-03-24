const Dual = () => {
    return(
        <>
            <section className="mon"> 
    <div class="containerslider" id="containerslider">
    <div class="form-container register-container">
    <form action="#">
    <h1>Register hire.</h1>
    <input type="text" placeholder="Name"/>
    <input type="email" placeholder="Email"/>
    <input type="password" placeholder="Password"/>
    <button>Register</button>
    <span>or use your account</span>
    <div class="social-container">
        <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
        <a href="#" class="social"><i class="lni lni-google"></i></a>
        <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
    </div>
    </form>
    </div>
        
    <div class="form-container login-container">
    <form action="#">
    <h1>Login hire.</h1>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <div class="content">
        <div class="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label>Remember me</label>
        </div>
        <div class="pass-link">
        <a href="#">Forgot password?</a>
        </div>
    </div>
    <button className="buttonslider">Login</button>
    <span>or use your account</span>
    <div class="social-container">
        <a href="#" class="social"><i class="lni lni-facebook-fill"></i></a>
        <a href="#" class="social"><i class="lni lni-google"></i></a>
        <a href="#" class="social"><i class="lni lni-linkedin-original"></i></a>
    </div>
    </form>
    </div>


    <div class="overlay-container">
    <div class="overlay">
    <div class="overlay-panel overlay-left">
        <h1 class="title">Hello <br/> friends</h1>
        <p>if Yout have an account, login here and have fun</p>
        <button class="buttonghost" id="login">Login
        <i class="lni lni-arrow-left login"></i>
        </button>
    </div>
    
    <div class="overlay-panel overlay-right">
        <h1 class="title">Start yout <br/> journy now</h1>
        <p>if you don't have an account yet, join us and start your journey.</p>
        <button class="buttonghost" id="register">Register
        <i class="lni lni-arrow-right register"></i>
        </button>
    </div>
    </div>
    </div>
    </div>
    </section>
        </>
    )
}

export default Dual;