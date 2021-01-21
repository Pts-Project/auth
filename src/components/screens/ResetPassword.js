import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import reset from '../../reset.jpeg'



const ResetPassword = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const PostData = () => {

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" })
      return
    }
    fetch("/changePassword", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" })
          history.push('/login')
        }
      }).catch(err => {
        console.log(err)
      })

  }
  return (
    <div className="mycard">
      <div className="card auth-card " style={{ backgroundImage: `url(${reset})`, minWidth: "100%", minHeight: "100%", backgroundPosition: "centre", backgroundSize: "cover" }}>
        <h6 style={{ letterSpacing: "2px" }}>RESET PASSWORD</h6><br />
        <h4 style={{ letterSpacing: "2px" }}><bold>PLATFORM</bold></h4>

        <div class="input-field col s12" style={{ marginTop: "15%" }}>
          <input id="email" type="email" class="validate"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email" style={{ textAlign: "center", color: "black" }}>YOUR EMAIL</label>
        </div>


        <button style={{ borderRadius: "50px", marginTop: "100px", marginBottom: "30px", letterSpacing: "2px" }} className="btn waves-effect #212121 grey darken-4" name="action" type="submit"
          onClick={() => PostData()}
        >
          <strong>  RESET PASSWORD</strong>
        </button>


        <p>Don't have an account?</p>

        <Link to="/signup"> <p style={{ color: "#6CD4CA" }}><strong>Sign Up Now</strong></p></Link>

        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}

export default ResetPassword