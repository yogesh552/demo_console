import '../../../public/css/common/login.css'


const Login = () => {
    return(
        <div className="login-container">
            <div className="login-content">
                <div>
                    <h1>Login</h1>
                </div>
                <form>
                    <div>
                        <label htmlFor="user_name">User Name</label>
                        <input type="text" id="user_name"/>
                    </div>
                    <div>
                        <label htmlFor="user_password">Password</label>
                        <input type="password" id="user_password"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
        
    )
}

export default Login; 