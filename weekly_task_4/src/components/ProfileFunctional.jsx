import React, { useState, useEffect } from "react";

function ProfileFunctional({ name, job, email }) {
  // 🔹 STATE dengan useState
  const [age, setAge] = useState(25); // state 1: umur
  const [isOnline, setIsOnline] = useState(false); // state 2: status
  const [hobby, setHobby] = useState("Membaca"); // state 3: hobi

  // 🔹 LIFECYCLE: Mounting (pertama kali muncul)
  useEffect(() => {
    console.log("✅ Functional Component muncul");

    // Setelah 2 detik, ubah status jadi online
    const timer = setTimeout(() => {
      setIsOnline(true);
    }, 2000);

    // 🔹 LIFECYCLE: Unmounting (component dihapus dari layar)
    return () => {
      clearTimeout(timer);
      console.log("❌ Functional Component dihapus");
    };
  }, []); // [] artinya hanya jalan sekali saat pertama kali muncul

  // 🔹 LIFECYCLE: Updating (jika isOnline berubah)
  useEffect(() => {
    console.log("🔄 Status online berubah (Functional Component)");
  }, [isOnline]);

  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h2>⚡ Functional Component</h2>

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
      <button onClick={() => setAge(age + 1)}>Tambah Umur</button>
      <button onClick={() => setHobby("Belajar React Hooks")}>Ubah Hobi</button>
    </div>
  );
}

export default ProfileFunctional;
