import {Container,Row,Col} from 'reactstrap' 

import {BrowserRouter as Router,Route} from "react-router-dom";

import HeaderComponent from "./component/HeaderComponent";
import MenuBar from './component/menubar';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import FooterComponent from './component/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent.js';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
function App() {
  return (
    <div className="App">
      
      <Router>
       
        <Container>
         <HeaderComponent />
          <Row>
              <Col  xs={11} md={3}>
                
                <MenuBar />
              </Col>
              <Col  xs={11} md={9}>
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent} ></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
              </Col>
          </Row>
          <FooterComponent />
        </Container>
       </Router>
       
    </div>
  );
}

export default App;
