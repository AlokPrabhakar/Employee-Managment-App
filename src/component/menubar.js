import { ListGroup} from 'reactstrap';
import { Link } from "react-router-dom";
function MenuBar(){
    return(
        <>
        <ListGroup className="px-3 sticky-top mx-3">
            <Link className="text-center py-3 list-group-item list-group-item-action" tag="a" to="/"  >Home</Link>
            <Link className="text-center py-3 list-group-item list-group-item-action" tag="a" to="/add-employee/:id" >Add Course</Link>
            <Link className="text-center py-3 list-group-item list-group-item-action" tag="a" to="/employees" >View Course</Link>
            <Link className="text-center py-3 list-group-item list-group-item-action" tag="a" to="#" >About</Link>
            <Link className="text-center py-3 list-group-item list-group-item-action" tag="a" to="#" >Contact</Link>
    </ListGroup>
        </>
    )
}
export default MenuBar;