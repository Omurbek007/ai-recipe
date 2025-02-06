import logo from "../assets/chef-logo.png"
export default function Header() {
    return (
         <header>
                <nav className='navbar'>
                  <img src={logo} alt="logo" />
                  <h1>Chef Claude</h1>
                </nav>
              </header>
    )
}