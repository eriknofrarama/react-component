import React, { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);

    // 🔹 STATE = data internal milik component
    this.state = {
      age: 20, // state 1: umur
      isOnline: false, // state 2: status online/offline
      hobby: "Coding", // state 3: hobi
    };
  }

  // 🔹 LIFECYCLE: Dipanggil sekali saat pertama kali component muncul
  componentDidMount() {
    console.log("✅ Class Component muncul pertama kali");

    // Contoh: setelah 2 detik, ubah state "isOnline" jadi true
    setTimeout(() => {
      this.setState({ isOnline: true });
    }, 2000);
  }

  // 🔹 LIFECYCLE: Dipanggil setiap ada perubahan state atau props
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOnline !== this.state.isOnline) {
      console.log("🔄 Status online berubah (Class Component)");
    }
  }

  // 🔹 LIFECYCLE: Dipanggil ketika component dihapus dari layar
  componentWillUnmount() {
    console.log("❌ Class Component dihapus");
  }

  render() {
    // 🔹 PROPS = data dari luar (dikirim oleh App.jsx)
    const { name, job, email } = this.props;

    // 🔹 STATE = data internal
    const { age, isOnline, hobby } = this.state;

    return (
      <div
        style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}
      >
        <h2>👤 Class Component</h2>

        {/* PROPS */}
        <p>
          <b>Nama:</b> {name}
        </p>
        <p>
          <b>Pekerjaan:</b> {job}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>

        <hr />

        {/* STATE */}
        <p>
          <b>Umur:</b> {age}
        </p>
        <p>
          <b>Status:</b> {isOnline ? "Online" : "Offline"}
        </p>
        <p>
          <b>Hobi:</b> {hobby}
        </p>

        {/* TOMBOL UNTUK UBAH STATE */}
        <button onClick={() => this.setState({ age: age + 1 })}>
          Tambah Umur
        </button>
        <button onClick={() => this.setState({ hobby: "Ngoding React" })}>
          Ubah Hobi
        </button>
      </div>
    );
  }
}

export default ProfileClass;
