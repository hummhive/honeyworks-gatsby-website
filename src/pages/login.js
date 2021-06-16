import React, { useState } from "react"
import PropTypes from "prop-types"
import { navigate, Link } from "gatsby"
import { HummContext } from "gatsby-plugin-hummhive-react-web-data"
import { FiHexagon } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

function Login() {
  const { state, actions } = React.useContext(HummContext)
  const { hive } = state
  const [base64KeySet, setBase64KeySet] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await actions.login(base64KeySet)
      navigate("/")
    } catch (err) {
      setError(err.message || JSON.stringify(err))
    }
  }

  // if (
  //   isLoggedIn() ||
  //   JSON.parse(
  //     typeof window !== "undefined" && window.localStorage.getItem("data")
  //   )
  // ) {
  //   navigate(`/`)
  // }
  return (
    <Layout header="no">
      <SEO title="Access Hive" />
      <div className="d-flex w-100 min-vh-100 login-page">
        <div className="custombg"></div>
        <div className="d-flex flex-column flex-grow-1 mt-5 text-center align-items-center">
          <div style={{ maxWidth: "500px", width: "100%" }} className="mx-auto">
            <h1>
              <Link className="hiveName" to="/">
                <FiHexagon />
              </Link>
            </h1>
            <div>
              <form onSubmit={handleSubmit}>
                <h2 className="mt-5 pt-5">
                  Sign in to{" "}
                  <span className="highlight">
                    {(hive && hive.name) || ""}
                    {"'s"}
                  </span>{" "}
                  Hive
                </h2>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <p className="login-subtitle">
                  Not a member yet? <Link to="/join">Join this hive</Link>
                </p>
                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="login-form-shadow"
                    id="base64KeySet"
                    placeholder="Enter Your Private Key"
                    value={base64KeySet}
                    onChange={e => setBase64KeySet(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-highlight d-grid gap-2 w-50 mt-2"
                  value="Access"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
Login.propTypes = {
  location: PropTypes.object,
}
export default Login
