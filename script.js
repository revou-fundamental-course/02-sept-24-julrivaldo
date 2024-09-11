// Fungsi untuk menampilkan form sesuai dengan tombol yang dipilih
function showSection(section) {
    // Sembunyikan semua section
    document.getElementById('luas').classList.add('hidden');
    document.getElementById('keliling').classList.add('hidden');
    
    // Tampilkan section yang dipilih
    document.getElementById(section).classList.remove('hidden');
}

// Fungsi untuk menghitung luas segitiga
function hitungLuas() {
    // Ambil nilai alas dan tinggi dari input
    const base = document.getElementById('alas').value;
    const height = document.getElementById('tinggi').value;

    // Pastikan input tidak kosong atau negatif
    if (base <= 0 || height <= 0) {
        document.getElementById('hasilLuas').innerText = 'Input tidak valid. Masukkan nilai yang lebih besar dari 0.';
        return;
    }

    // Hitung luas segitiga
    const luas = 0.5 * base * height;

    // Tampilkan langkah-langkah perhitungan
    const proses = `
      L = 1/2 x a x t <br>
      L = 1/2 x ${base} x ${height} <br>
      L = ${luas}
    `;

// Tampilkan proses perhitungan
document.getElementById('hasilLuas').innerHTML = proses;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
    // Ambil nilai tiga sisi dari input
    const sisi1 = document.getElementById('sisi1').value;
    const sisi2 = document.getElementById('sisi2').value;
    const sisi3 = document.getElementById('sisi3').value;

    // Pastikan input tidak kosong atau negatif
    if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        document.getElementById('hasilKeliling').innerText = 'Input tidak valid. Masukkan nilai yang lebih besar dari 0.';
        return;
    }

    // Hitung keliling segitiga
    const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);

    // Tampilkan langkah-langkah perhitungan
    const proses = `
      S1 = S1 + S2 + S3 <br>
      S2 = ${sisi1} + ${sisi2} +${sisi3} <br>
      S3 = ${keliling}
    `;

    // Tampilkan hasil perhitungan
    document.getElementById('hasilKeliling').innerHTML = proses;;
}
// Fungsi untuk mereset hasil perhitungan dan input
function resetAll(resultId, inputIds) {
    // Menghapus hasil perhitungan
    document.getElementById(resultId).innerHTML = '';

    // Mengosongkan semua input
    inputIds.forEach(function(id) {
        document.getElementById(id).value = '';
    });
}
//Luas Jajar Genjang
function hitungLuasjajargenjang(){
    // Ambil nilai alas dan tinggi dari input
    const alasj = document.getElementById('alasjajar').value;
    const atasj = document.getElementById('tinggijajar').value;

    // Pastikan input tidak kosong atau negatif
    if (alasj <= 0 || atasj <= 0) {
        document.getElementById('hasiljajargenjang').innerText = 'Input tidak valid. Masukkan nilai yang lebih besar dari 0.';
        return;
    }

    // Hitung luas segitiga
    const luas = alasj * atasj;

    // Tampilkan langkah-langkah perhitungan
    const proses = `
      L = a x t <br>
      L = ${alasj} x ${atasj} <br>
      L = ${luas}
    `;
    // Tampilkan proses perhitungan
    document.getElementById('hasiljajargenjang').innerHTML = proses;
}
function hitungKelilingjajargenjang(){
        // Ambil nilai dua sisi dari input
        const sisike1 = document.getElementById('sisike1').value;
        const sisike2 = document.getElementById('sisike2').value;
    
        // Pastikan input tidak kosong atau negatif
        if (sisike1 <= 0 || sisike2 <= 0) {
            document.getElementById('keljajargenjang').innerText = 'Input tidak valid. Masukkan nilai yang lebih besar dari 0.';
            return;
        }
    
        // Hitung keliling jajargenjang
        const kelilingj = 2 * (parseFloat(sisike1) + parseFloat(sisike2));
    
        // Tampilkan langkah-langkah perhitungan
        const proses = `
          Rumuas = 2 x (sisi1 + sisi2) <br>
          K = 2 x (${sisike1} + ${sisike2}) <br>
          Hasil = ${kelilingj}
        `;
    
        // Tampilkan hasil perhitungan
        document.getElementById('keljajargenjang').innerHTML = proses;
    
}

// Fungsi untuk menampilkan konten segitiga
function tampilkanSegitiga() {
    document.getElementById('segitiga').style.display = 'block';
    document.getElementById('keliling').style.display = 'block';
    document.getElementById('jajargenjang-luas').style.display = 'none';
    document.getElementById('jajargenjang-kel').style.display = 'none';
  }
  
  // Fungsi untuk menampilkan konten jajar genjang
  function tampilkanJajargenjang() {
    document.getElementById('segitiga').style.display = 'none';
    document.getElementById('keliling').style.display = 'none';
    document.getElementById('jajargenjang-luas').style.display = 'block';
    document.getElementById('jajargenjang-kel').style.display = 'block';
  }