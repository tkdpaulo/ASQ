import React, { Component } from "react";
import axios from 'axios';
import TableRow from './TableRow';

export default class Procedure extends Component {
  constructor(props) {
    super(props);
    this.state = {procedures: []};
  }
  componentDidMount(){
    axios.get('http://localhost:8080/api/procedures')
      .then(response => {
        this.setState({ procedures: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow(){
    return this.state.procedures.map(function(object, i){
        return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Lista de Procedimentos</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Número do Procedimento</th>
              <th>Idade</th>
              <th>Sexo</th>
              <th>Permissão</th>
              <th colSpan="2">Ação</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.onChangeProcedureNumber = this.onChangeProcedureNumber.bind(this);
  //   this.onChangeAge = this.onChangeAge.bind(this);
  //   this.onChangeGenre = this.onChangeGenre.bind(this);
  //   this.onChangePermission = this.onChangePermission.bind(this);
  //   this.getProcedure = this.getProcedure.bind(this);
  //   this.updateProcedure = this.updateProcedure.bind(this);
  //   this.deleteProcedure = this.deleteProcedure.bind(this);

  //   this.state = {
  //       id: null,
  //       procedureNumber: null,
  //       age: null, 
  //       genre: "",
  //       permission: "",
  
  //       submitted: false,
  //   };
  // }

  // componentDidMount() {
  //   this.getProcedure(this.props.match.params.id);
  // }

  // onChangeProcedureNumber(e) {
  //   const procedureNumber = e.target.value;

  //   this.setState(function(prevState) {
  //     return {
  //       currentProcedure: {
  //         ...prevState.currentProcedurel,
  //         procedureNumber: procedureNumber
  //       }
  //     };
  //   });
  // }

  // onChangeAge(e) {
  //   const age = e.target.value;
    
  //   this.setState(prevState => ({
  //     currentProcedure: {
  //       ...prevState.currentProcedure,
  //       age: age
  //     }
  //   }));
  // }

  // onChangeGenre(e) {
  //   const genre = e.target.value;
    
  //   this.setState(prevState => ({
  //     currentProcedure: {
  //       ...prevState.currentProcedure,
  //       genre: genre
  //     }
  //   }));
  // }

  // onChangePermission(e) {
  //   const perminisson = e.target.value;
    
  //   this.setState(prevState => ({
  //     currentProcedure: {
  //       ...prevState.currentProcedure,
  //       perminisson: perminisson
  //     }
  //   }));
  // }

  // getProcedure(id) {
  //   ProcedureDataService.get(id)
  //     .then(response => {
  //       this.setState({
  //         currentProcedure: response.data
  //       });
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // updateProcedure() {
  //   ProcedureDataService.update(
  //     this.state.currentProcedure.id,
  //     this.state.currentProcedure
  //   )
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         message: "O procedimento foi atualizado com sucesso!"
  //       });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // deleteProcedure() {    
  //   ProcedureDataService.delete(this.state.currentProcedure.id)
  //     .then(response => {
  //       console.log(response.data);
  //       this.props.history.push('/procedures')
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // render() {
  //   const { currentProcedure } = this.state;

  //   return (
  //     <div>
  //       {currentProcedure ? (
  //         <div className="edit-form">
  //           <h4>Procedure</h4>
  //           <form>
  //           <div className="form-group">
  //               <label htmlFor="procedureNumber">Numero do Procedimento</label>
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 id="procedureNumber"
  //                 required
  //                 value={this.state.procedureNumber}
  //                 onChange={this.onChangeProcedureNumber}
  //                 name="procedureNumber"
  //               />
  //             </div>
  
  //             <div className="form-group">
  //               <label htmlFor="age">Idade</label>
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 id="age"
  //                 required
  //                 value={this.state.age}
  //                 onChange={this.onChangeAge}
  //                 name="age"
  //               />
  //             </div>

  //             <div className="form-group">
  //               <label htmlFor="genre">Sexo</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="genre"
  //                 required
  //                 value={this.state.genre}
  //                 onChange={this.onChangeGenre}
  //                 name="genre"
  //               />
  //             </div>

  //             <div className="form-group">
  //               <label htmlFor="permission">Permissão</label>
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 id="permission"
  //                 required
  //                 value={this.state.permission}
  //                 onChange={this.onChangePermission}
  //                 name="permission"
  //               />
  //             </div>

  //           </form>

  //           <button
  //             className="badge badge-danger mr-2"
  //             onClick={this.deleteProcedure}
  //           >
  //             Deletar
  //           </button>

  //           <button
  //             type="submit"
  //             className="badge badge-success"
  //             onClick={this.updateProcedure}
  //           >
  //             Atualizar
  //           </button>
  //           <p>{this.state.message}</p>
  //         </div>
  //       ) : (
  //         <div>
  //           <br />
  //           <p>Clique no Procedimento</p>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}