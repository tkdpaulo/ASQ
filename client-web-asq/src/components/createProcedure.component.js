import React, { Component } from "react";
import axios from 'axios';
export default class CreateProcedure extends Component {

  constructor(props) {
    super(props);
    this.onChangeProcedureNumber = this.onChangeProcedureNumber.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangePermission = this.onChangePermission.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      procedureNumber: '',
      age: '', 
      genre: '',
      permission: '',
    };
  } 


  onChangeProcedureNumber(e) {
    this.setState({
      procedureNumber: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }

  onChangePermission(e) {
    this.setState({
      permission: e.target.value
    });
  }

  onSubmit(e) {
    console.log("onSubmit")
    e.preventDefault();
    const obj = {
      procedureNumber: this.state.procedureNumber,
      age: this.state.age,
      genre: this.state.genre,
      permission: this.state.permission,
    };
    console.log("aqui");
    axios.post('http://localhost:8080/api/procedures', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      procedureNumber: '',
      age: '', 
      genre: '',
      permission: '',
    })
  }
 

  render() {
    console.log("render");
    return (
      <div style={{marginTop: 10}}>
          <h3>Criar novo Procedimento</h3>
          <form onSubmit={this.onSubmit}> 
            <div className="form-group">
              <label>Numero do Procedimento</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.procedureNumber}
                  onChange={this.onChangeProcedureNumber}
                />
            </div>
  
            <div className="form-group">
              <label>Idade</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
            </div>

            <div className="form-group">
              <label>Sexo</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.genre}
                  onChange={this.onChangeGenre}
                />
            </div>

            <div className="form-group">
              <label>Permissão</label>
                <input
                  type="text"
                  className="form-control"
                  id="permission"
                  required
                  value={this.state.permission}
                  onChange={this.onChangePermission}
                />
            </div>
            <div className="form-group">
              <input type="submit" value="Criar" className="btn btn-primary"/>
            </div>
          </form>
      </div>
    )
  }
}
