console.log("hello, world");

let andi = "nama saya andi";
console.log(andi);

ando = "salam kenal, nama saya andi";
console.log(andi);

const namaaplikasi = "aplikasi belajar  javascript";
console.log(nama aplikasi);
namaaplikasi = "aplikasi test html";
console.log(namaaplikasi);


  function sapa(nama) {
      return 'halo, ${nama}';
  }

  const pesanmaul = sapa("maul");
  const pesanfatur = sapa("fatur");

  console.log(pesanmaul);
  console.log(pesanfatur);

  const pesan = document.querySelector('#pesan');
  pesan.textContent = 'pesan sudah berubah';


  const judul = document.getElementById('judul');
  const semuatekt = document.getElementsByClassName('teks');
  const paragraf = document.querySelector('teks');
  const semuaparagraf = document.querySelectorAll('.teks');

  const tombol = document.querySelector("#tombol");
  const hasil = document.querySelector('#hasil');
  
  tombol.addEventListener('click',()=> {
    hasil.textContent = "tombol diklik!";
  });


  const nama = document.querySelector("#nama");
  const preview = document.querySelector("#preview");

  nama.addEventListener('input', () => {
    preview.textContent = nama.value;
  });

  