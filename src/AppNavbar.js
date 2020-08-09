import React from 'react'
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

class AppNavbar extends React.Component{

    render(){
        return(
            <React.Fragment>
              <div className="nav-color d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3  border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/">Cert Guru</a></h5>
                  <nav className="nav-color my-2 my-md-0 mr-md-3">
                    <a className="p-2" href="/mylist">My Certificates</a>
                    <a className="p-2" href="/mylist">Documentation</a>
                    <a className="p-2" href="#">Support</a>
                  </nav>
                <a className="btn btn-primary" href="#" onClick={() => {this.props.auth.logout()}}>Logout</a>
              </div>
              <div className="fixed-bottom">  
                <section className='section-main'>
                  <div className='no-margin'>Copyright @Cert Guru</div>
                </section>
              </div>

            </React.Fragment>
        )  
    }
}

export default AppNavbar;