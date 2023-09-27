import { Outlet } from "react-router-dom"

const Layouts = () => {
    return <div>
          <nav>
              <ul>
                  <li>
                    <link to="./"> Home</link>
                  </li>
                  <li></li>
                  <li></li>
              </ul>
          </nav>
          <Outlet/>
    <div/>;
}

  export default Layouts;