import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
      axios.delete('http://localhost:8080/api/procedures/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.procedureNumber}
          </td>
          <td>
            {this.props.obj.age}
          </td>
          <td>
            {this.props.obj.genre}
          </td>
          <td>
            {this.props.obj.permission}
          </td>
          <td>
            <Link to={"/editProcedure/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger">Deletar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;