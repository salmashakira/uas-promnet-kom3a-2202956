import React, { Component } from "react";
import UserService from "../services/UserService";
import NumberSelector from "../components/NumberSelector";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nama: "",
      usia: 0,
      jenis_kelamin: "",
      alamat: "",
      deskripsi: "",
    };

    this.changeNama = this.changeNama.bind(this);
    this.changeJenisKelamin = this.changeJenisKelamin.bind(this);
    this.changeAlamat = this.changeAlamat.bind(this);
    this.changeDeskripsi = this.changeDeskripsi.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  } 

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          nama: user.nama,
          usia: user.usia,
          jenis_kelamin: user.jenis_kelamin,
          alamat: user.alamat,
          deskripsi: user.deskripsi,
        });
      });
    }
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();
    let user = {
      nama: this.state.nama,
      usia: this.state.usia,
      jenis_kelamin: this.state.jenis_kelamin,
      alamat: this.state.alamat,
      deskripsi: this.state.deskripsi,
    };

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
      });
    }
  };

  changeNama = (event) => {
    this.setState({ nama: event.target.value });
  };

  changeUsia = (newUsia) => {
    this.setState({ usia: newUsia });
  };

  changeJenisKelamin = (event) => {
    this.setState({ jenis_kelamin: event.target.value });
  };

  changeAlamat = (event) => {
    this.setState({ alamat: event.target.value });
  };

  changeDeskripsi = (event) => {
    this.setState({ deskripsi: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Tambah Data</h3>;
    } else {
      return <h3 className="text-center">Update Data</h3>;
    }
  }

  render() {
    return (
      <div>
        {/* Form Input */}
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Nama:</label>
                    <input
                      placeholder="Nama"
                      name="nama"
                      className="form-control"
                      value={this.state.nama}
                      onChange={this.changeNama}
                    />
                  </div>
                  <div className="form-group">
                    <label>Usia :</label>
                    {/* Integrasikan komponen NumberSelector */}
                    <NumberSelector
                      number={this.state.usia}
                      onChangeNumber={this.changeUsia}
                    />
                  </div>
                  <div className="form-group">
                    <label>Jenis Kelamin :</label>
                    <div className="gender-radio">
                      <label>
                        <input
                          type="radio"
                          name="jenis_kelamin"
                          value="l"
                          checked={this.state.jenis_kelamin === "l"}
                          onChange={this.changeJenisKelamin}
                        />
                        Laki-Laki
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="jenis_kelamin"
                          value="p"
                          checked={this.state.jenis_kelamin === "p"}
                          onChange={this.changeJenisKelamin}
                        />
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Alamat:</label>
                    <input
                      placeholder="Alamat"
                      name="alamat"
                      className="form-control"
                      value={this.state.alamat}
                      onChange={this.changeAlamat}
                    />
                  </div>
                  <div className="form-group">
                    <label>Deskripsi:</label>
                    <textarea
                      placeholder="Deskripsi"
                      name="deskripsi"
                      className="form-control"
                      value={this.state.deskripsi}
                      onChange={this.changeDeskripsi}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                    style={{ backgroundColor: '#0b8457' }}
                  >
                    Simpan
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Batal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
