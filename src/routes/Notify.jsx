import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const Notify = ({ass}) => {
    
    return (
        <li className="flex gap-1">
          <Link to={`/assignmentDetails/${ass._id}`}>{ass.title}</Link>
        </li>
    );
};

export default Notify;
Notify.propTypes = {
    ass : PropTypes.object,
    ind : PropTypes.array
}
