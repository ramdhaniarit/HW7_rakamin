// membuat fungsi untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang,lebar) {
    hasilHitung = panjang*lebar
    console.log(hasilHitung)
  }
  // hasil luas persegi panjng
//   hitungLuasPersegiPanjang(4,5)

// // keliling persegipanjang
function hitungKelilingPersegiPanjang(panjang,lebar){
    rumusHitung = (panjang +lebar)*2
    console.log(rumusHitung)
}
// hasil keliling persegi panjang
// hitungKelilingPersegiPanjang(4,5)

 // membuat fungsi untuk menghitung luas persegi
function hitungPersegi(sisi,sisi){
    hasil = sisi*sisi
    console.log(hasil)
}
// hasil hitung persegi
// hitungPersegi(5,5)

// membuat fungsi untuk menghitung keliling persegi
function hitungKelilingPersegi(sisi,sisi){
    hasil = sisi*4
    console.log(hasil)
}

// hitungKelilingPersegi(5,5)

module.exports = {
    hitungKelilingPersegi,
    hitungKelilingPersegiPanjang,
    hitungLuasPersegiPanjang,
    hitungPersegi
}