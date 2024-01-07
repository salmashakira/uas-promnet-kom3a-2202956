import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontWeight: 'bold', color: "#0b8457", marginTop: "20px", marginBottom: "25px", fontSize: '65px' }}> + PUSKESMAS SEHAT +</h1>
        <h2 className="text-center pt-5" style={{ fontWeight: 'bold', fontSize: '45px' }}>DAFTAR PASIEN</h2>
        <div className="row justify-content-end pr-3">
          <button className="btn btn-primary" onClick={this.addUser} style={{ backgroundColor: '#0b8457' }}>
            Tambah Data Pasien
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >ID</th>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >Nama</th>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >Usia</th>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >Jenis Kelamin</th>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >Alamat</th>
                <th style={{ backgroundColor: '#0b8457', color: '#fff' }} >Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div>{user.id}</div>
                  </td>
                  <td>
                    <div>{user.nama}</div>
                  </td>
                  <td>
                    <div>{user.usia}</div>
                  </td>
                  <td>
                    <div>{user.jenis_kelamin}</div>
                  </td>
                  <td>
                    <div>{user.alamat}</div>
                  </td>
                  <td>
                    <div>{user.deskripsi}</div>
                  </td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-info"
                      style={{ backgroundColor: '#0b8457' }}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "50px", backgroundColor: '#0b8457'}}
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-info"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
