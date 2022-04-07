import logo from './logo.svg';
import './App.css';
import {Home, About, Events, Products, Contact, Page404, Service} from './Pages'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="home" element={<Home />}
        >
          {/* <Redirect
            from="service"
            to="about/service"
          /> 
            // react-router-dom delete the Redirect component
          */}
        </Route>
        <Route
          path='/' element={<Navigate replace to="home"/>}
        />
        {
          /* the latest version of react-router-dom repace #Redirect# to #Navigate#  */
        }
        <Route
          path='about' element={<About/>}
        >
          <Route 
            path="service" element={<Service/>}
          />
        </Route>
        <Route 
          path='events' element={<Events/>}
        />
        <Route
          path='products' element={<Products/>}
        />
        <Route
          path='contact' element={<Contact/>}
        />
        <Route
          path="*" element={<Page404/>}
        />
      </Routes>
    </div>
  );
}

export default App;
