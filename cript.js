function kirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("nim").value
    var Jurusan = document.querySelector("input[name=Jurusan]:checked").value
    var Alamat = document.getElementById("alamat").value
    var dropdown = document.getElementById("angkatan");
    var selectedAngkatan = dropdown.options[dropdown.selectedIndex].text;
    var tanggal = document.getElementById("tanggal").value;

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nJurusan : " + Jurusan +
        "\nAlamat : " + Alamat +
        "\nAngkatan : " + selectedAngkatan +
        "\nTanggal : " + tanggal
    )
}