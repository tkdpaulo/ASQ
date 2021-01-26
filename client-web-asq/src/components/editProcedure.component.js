import React, { Component } from "react";
import axios from 'axios';

export default class EditProcedure extends Component {
    constructor(props) {
        super(props);
        this.onChangeProcedureNumber = this.onChangeProcedureNumber.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangePermission = this.onChangePermission.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          procedureNumber: "",
          age: "", 
          genre: "",
          permission: "",
        };
      }

    componentDidMount() {
        axios.get('http://localhost:8080/api/procedures/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                    id: response.data.id,
                    procedureNumber: response.data.procedureNumber,
                    age: response.data.age,
                    genre: response.data.genre,
                    permission: response.data.permission, });
            })
            .catch(function (error) {
                console.log(error);
            })
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
        e.preventDefault();
        const obj = {
          person_name: this.state.person_name,
          business_name: this.state.business_name,
          business_gst_number: this.state.business_gst_number
        };
        axios.put('http://localhost:8080/api/editprocedure/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/procedures');
    }
     
      render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Editar Procedimento</h3>
            <form>
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
                <input type="submit" value="Atualizar" className="btn btn-primary"/>
              </div>
            </form>
        </div>
        )
    }
}