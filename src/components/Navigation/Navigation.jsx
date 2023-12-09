import { NavLink } from "react-router-dom"

const Navigation = ()=> {
    return(
        <nav>
      <NavLink to="/"><p>Home</p></NavLink>
      <NavLink to="/catalog"><p>Catalog</p></NavLink>
      <NavLink to="/favorites"><p>favorites</p></NavLink>
              </nav>
    )
}

export default Navigation;