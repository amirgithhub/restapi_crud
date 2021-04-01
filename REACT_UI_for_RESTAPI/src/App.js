import React, { Component } from "react";
import ReactDOM from 'react-dom'; // this is recommended 
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";

 class Entities extends React.Component {
  render() {
      return (
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>CreateTime</th>
                  </tr>
              </thead>
              <tbody>
                  {this.props.entities && this.props.entities.map(entity => {
                      return <tr key={entity.id}>
                          <td>{entity.id}</td>
                          <td>{entity.name}</td>
                          <td>{entity.type}</td>
                          <td>{entity.description}</td>
                          <td>{entity.creationTime}</td>
                      </tr>
                  })}
              </tbody>
          </table>
      );
  }

}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entities: [],
      name: '',
      id: '',
      type:'',
      description: '',
      creationTime:''
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const url = "http://127.0.0.1:8080/jpa/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ entities: data, loading: false });
    
  }

  async create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    const url = "http://127.0.0.1:8080/jpa/users";
    const response = await fetch(url,{
      "method": "POST",
      headers: { 'Content-Type': 'application/json' },
      "body": JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        type:this.state.type,
        creationTime:this.state.creationTime
    
      })


    });
    const data = await response.json();
    console.log(data);
   
  
  }

  async update(e) {
    // update entity - PUT
    e.preventDefault();
    const url = `http://127.0.0.1:8080/jpa/users/update/${this.state.id}`;
    const response = await fetch(url,{
      "method": "POST",
      headers: { 'Content-Type': 'application/json' },
      "body": JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        type:this.state.type,
        creationTime:this.state.creationTime
    
      })


    });
    const data = await response.json();
    console.log(data);
   


  }

  async delete(e) {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
    const url = `http://127.0.0.1:8080/jpa/users/${this.state.id}`;
    const response = await fetch(url,{
      "method": "DELETE",
      headers: { 'Content-Type': 'application/json' },
    
    });
    const data = await response.json();
    console.log(data);
   
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="h5 text-center">React UI for Rest APIs</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">CRUD for Entity</legend>
                <label htmlFor="name">
                  Entity Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="description">
                  Entry description:
                  <input
                    name="description"
                    id="description"
                    type="text"
                    className="form-control"
                    value={this.state.description}
                    onChange={(e) => this.handleChange({ description: e.target.value })}
                    required
                    />
                </label>
                             
                <label htmlFor="type">
                  Entity Type:
                  <input
                    name="type"
                    id="type"
                    type="text"
                    className="form-control"
                    value={this.state.type}
                    onChange={(e) => this.handleChange({ type: e.target.value })}
                    />
                </label>
                <label htmlFor="creationTime">
                  Entity CreationTime:
                  <input
                    name="creationTime"
                    id="creationTime"
                    placeholder="yyyy-MM-dd HH:mm:ss"
                    type="text"
                    className="form-control"
                    value={this.state.creationTime}
                    onChange={(e) => this.handleChange({ creationTime: e.target.value })}
                    />
                </label>
                <label htmlFor="name">
                  Entity Id:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    placeholder="For Delete (the only input used) and Update"
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    required
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-success" type='button' onClick={(e) => this.update(e)}>
                    Update By ID
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete By ID
                </button>
              </form>
              <Entities entities={this.state.entities} />
            </div>
          </div>
        </div>
    );
  }
}


let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);

export default App;