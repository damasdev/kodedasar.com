---
title: "Belajar Pascal: Logika Pemrograman Dasar dan Algoritma untuk Pemula"
date: 2019-11-03
slug: belajar-pascal

description: "Pedoman bagi pemula untuk belajar Algoritma. Panduan ini menjelaskan konsep logika pemrograman dan algoritma komputer dasar secara lengkap menggunakan bahasa pemrograman Pascal."

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true

---

Jika anda adalah mahasiswa jurusan informatika, mungkin teman-teman sudah pernah mendapat materi perkuliahan yang membahas algoritma pemrograman. Namun...

**Masalahnya adalah:** Kita tidak tahu betapa pentingnya sebuah logika dan algoritma dalam pemrograman komputer, bahkan sering kali kita mengabaikannya.

Padahal algoritma adalah dasar utama yang kita butuhkan sebelum masuk ke dunia pemrograman. Jika anda belum paham apa itu algoritma maka tidak akan mudah.

*Inilah salah satu alasan mengapa Anak IT belum tentu bisa koding*.

Kita ibaratkan saat kita belajar bahasa pemrograman kita sedang membuat rumah, jika dasarnya tidak kuat maka untuk bisa berdiri tegakpun bukalah hal yang mudah.

Benarkah demikian, mari kita bahas pada praktiknya:

Seorang programmer pada umumnya mendapatkan tugas berdasarkan permasalahan. Kemudian tugas kita sebagai programmer adalah menyelesaikan masalah tersebut.

Yang perlu anda ketahui yaitu: *Programmer tidak melakukan pengkodean program secara begitu saja, namun mengikuti perencanaan dan metodologi yang terstruktur.*

Setelah kita mengetahui dengan baik dan jelas mengenai permasalahan yang ingin diselesaikan, langkah selanjutnya yaitu membuat rumusan algoritma.

## Table Of Contents

## #1 Apa itu Algoritma Pemrograman?

Secara sederhana pengertian algoritma dapat disimpulkan sebagai berikut:

> **Algoritma** adalah aturan atau langkah-langkah yang sistematis dan juga logis untuk memecahkan sebuah permasalahan. Logis menjadi kunci dari sebuah algoritma.

Jika masih bingung, maksudnya seperti ini:

Kita pasti tahu bahwa komputer akan memroses intruksi sesuai dengan urutan. Misalnya ketika kita ingin mencetak halaman menggunakan printer tentunya akan berurutan.

Maksudnya kita tidak mungkin mendapat nomor halaman secara acak.

Oleh karena itu dalam pemrograman komputer, penyelesaian masalah juga didefinisikan dalam bentuk sebuah aturan logis atau lebih mudahnya sebuah langkah demi langkah.

Yang dimaksud logis adalah: Harus bernilai benar (TRUE) atau salah (FALSE).

Langkah-langkah tersebutlah yang kita gunakan untuk memecahkan sebuah masalah.

Jadi intinya adalah: sebuah algoritma kita butuhkan untuk memerintah komputer supaya mengambil langkah-langkah tertentu dalam menyelesaikan suatu masalah.

**Contoh Algoritma dalam kehidupan Sehari-hari:**

Meskipun tidak kita sadari, namun sebenarnya dalam kehidupan sehari-hari kita sudah menggunakan algoritma untuk melakukan sesuatu. Apapaun itu...

Berikut contoh algoritma dalam kehidupan sehari-hari yang mungkin tidak anda sadari. Ada rangkaian autran atau langkah-langkah yang harus kita lakukan.

Misalahnya Algoritma berangkat ke sekolah.

>Langkah 1 - Memakai sepatu dan seragam sekolah  

>Langkah 2 - Berpamitan kepada orang tua

>Langkah 3 - Jika cuaca hujan maka memakai jas hujan. Jika tidak, lanjut langah 4

>Langkah 4 - Menuju ke Sekolah

>Sampai di Tempat Sekolah
Langkah-langkah diatas disebut Algoritma.

Ketika manusia berusaha memecahkan sebuah masalah, maka metode atau teknik yang digunakan masing-masing orang bisa berbeda dalam memecahkan  masalah tersebut.

Mari lihat lagi masalah kita diatas adalah kita ingin berangkat ke sekolah.

Dan untuk mencapai ke sekolah bisa saja cara atau langkah-langkah yang saya tulis diatas berbeda dengan cara yang anda lakukan sebelum berangkat ke sekolah.

Dengan kata lain, algoritma memungkinkan suatu permasalahan dipecahkan dengan metode dan logika yang berlainan. Seperti pepatah *"banyak jalan menuju roma"*.

**Syarat-syarat Algoritma:**

Berikut syarat-Syarat Algoritma menurut *Donald E. Knuth*, yaitu:

- **Finiteness (Keterbatasan)** - Algoritma harus berakhir setelah melakukan sejumlah langkah proses.

- **Definiteness (Kepastian)** - Setiap langkah algoritma harus didefinisikan dengan tepat dan tidak
menimbulkan makna ganda.

- **Input (Masukan)** - Sebuah algoritma memiliki nol atau lebih masukan (input) yang
diberikan kepada algoritma sebelum dijalankan.

- **Output (Keluaran)** - Setiap algoritma memberikan satu atau beberapa hasil keluaran.

- **Effectiveness (Efektivitas)** - Langkah-langkah algoritma dikerjakan dalam waktu yang “wajar”.

Dengan mempelajari algoritma berarti kita bisa belajar bagaimana cara penyelesaian suatu masalah berdasarkan tahapan-tahapan yang sistematis dan logis.

Namun, inti dari algoritma adalah untuk mencari metode mana yang terbaik dari metode-metode lain yang ada berdasarkan perbandingan waktu muat dan penggunaan memori.

## #2 Bahasa Pemrograman Pascal

Sebuah algoritma dapat dibuktikan kebenarannya melalui komputer setelah algoritma tersebut ditranslasikan kedalam sebuah program menggunakan bahasa pemrograman.

Lalu, bahasa pemrograman yang kita gunakan adalah Pascal.

Saat ini banyak sekolah maupun universitas di Indonesia yang masih menggunakan bahasa pascal sebagai pengantar pemrograman komputer dasar dan algoritma.

Saya sendiri menggunakan pemrograman pascal saat menempuh mata kuliah *algorithm* sebagai media pembelajaran untuk mengasah logika dan algoritma di awal perkuliahan.

Jangan khawatir meskipun saat ini anda sama sekali belum memahami sedikitpun bahasa pemrograman, saya berjanji anda dapat mengikuti panduan ini.

Pada dasarnya bahasa pascal relatif mudah dipelajari, karena perintah-perintahnya mirip dengan bahasa inggris sehari-hari misalnya: *begin, end, write,* dan *read*.

Selain itu, pascal juga memiliki aturan pemrograman yang terstruktur sehingga cocok digunakan untuk mempelajari bahasa pemrograman terutama bagi pemula.

Tujuan kita belajar bahasa pascal adalah memahami dasar pemrograman yang nantinya dapat anda terapkan dalam bahasa pemrograman lain seperti C++, Java, dan lain-lain.

**Download Compiler: Free Pascal atau Turbo Pascal**

Untuk membuat program menggunakan bahasa pascal kita memerlukan compiler yang bernama Free Pascal. Sebenarnya anda juga bisa menggunakan Turbo Pascal, namun disini saya akan menggunakan program Free Pascal IDE sebagai compiler.

Khusus untuk pengguna linux silahkan ketikan di Terminal:

```linux

root@kodedasar ~$ sudo apt-get install fp-compiler fp-ide
```

Dan untuk menjalakannya:

```

root@kodedasar ~$ fp
```

Informasi tambahab: **IDE** adalah singkatan dari *Integrated Development Environment*, yakni sebuah lingkungan pengembangan software yang terintegrasi.

Sebuah aplikasi IDE biasanya terdiri dari *code editor, compiler, debugger*, dan beberapa fasilitas lain untuk memudahkan pembuatan program komputer.

*( Download disini: [https://www.freepascal.org/download.var](https://www.freepascal.org/download.var) )*

## #3 Dasar-Dasar Pemrograman

Pada bagian ini saya menyarankan anda untuk memahami beberapa dasar yang wajib anda kuasai sebelum menghadapi program pascal yang lebih kompleks.

Ada dua istilah yang mungkin sering akan anda dengar yaitu:

- **Variabel dan Konstanta** - [Perbedaan Variabel dan Konstanta](/blog/pengertian-variabel)

- **Tipe Data** - [Perbedaan Tipe Data Primitive dan Composite](/blog/pengertian-tipedata)

Saya harap sebelum masuk ke bab selanjutnya, anda paham mengenai konsep dasar variabel dan dapat menentukan tipe data yang paling cocok untuk variabel anda.

**Struktur Program Pascal:**

Mari kita mulai dari hal yang paling dasar. Struktur dari program pascal terdiri dari sebuah judul program dan suatu blok program atau badan program.

Kemudian blok program dibagi lagi menjadi dua bagian yaitu bagian deklarasi dan bagian pernyataan. Silahkan perhatikan struktur program pascal berikut ini:

```

1. Judul Program
2. Blok Program
   2.1. Deklarasi
        - deklarasi label
        - deklarasi konstanta
        - deklarasi tipe
        - deklarasi variable
        - deklarasi prosedur
        - deklarasi fungsi
   2.2. Peryataan
```
Keterangan:

**1. Judul Program**

Judul program digunakan untuk memberi nama program dan sifatnya optional. Jika ditulis harus terletak pada awal dari program dan diakhiri dengan titik koma (;).

Contoh penulisan judul program yang benar (jangan gunakan spasi):

```pascal

Program BelajarPascal;
Program Khusus_Pemula;
Program Latihan;
```

**2. Blok Program**

Bagian kedua adalah blok program, disini anda akan berkreasi dengan bahasa pemrograman pascal yang akan anda pelajari lewat panduan ini.

**2.1. Deklarasi**

Bagian ini menjelaskan secara rinci semua data yang akan digunakan pada suatu program. Berikut macam-macam deklarasi pada pascal.

- **Deklarasi Label** - Digunakan jika pada penulisan program akan menggunakan statemen GOTO (untuk meloncat ke suatu statemen tertentu).

- **Deklarasi Konstanta** - Digunakan untuk mengidentifikasikan data yang nilainya sudah ditentukan dan pasti, tidak dapat dirubah dalam program.

- **Deklarasi Tipe** - Digunakan untuk menyebutkan tipe setiap data yang akan digunakan pada program Pascal.

- **Deklarasi variabel** - Berisi data-data yang bisa berubah-ubah nilainya di dalam program. Deklarasi variabel harus diletakkan setelah deklarasi tipe (jika ada).

**2.2. Bagian Peryataan / Terproses**

Bagian ini diawali dengan BEGIN dan diakhiri dengan END, setiap statamen yang merupakan instruksi program diakhiri dengan tanda titik koma (;)

Berikut contoh blok program:

```pascal

BEGIN
..............
statemen;
..................
END.
```
**Statemen** adalah perintah untuk pengerjaan program pascal. Statemen terletak di bagian deklarasi statemen dengan diawali oleh kata cadangan BEGIN dan diakhiri dengan kata cadangan END.

Akhir dari setiap statemen diakhiri dengan titik koma [;].

**Contoh Program Pascal:**

Berikut merupakan contoh baris kode program belajar pascal:

```pascal

Program BelajarPascal;
uses crt;
Label satu;
CONST a = 15;
TYPE nyata = real;

VAR b : integer;
    c : nyata;
Begin
   b:=1;
   c:=a+b;
   writeln ('Hasil = ',c:3:2);
   writeln(c);
   WRITELN('Latihan');
   GOTO SATU;
   WRITELN('Pemrograman');
   satu:
   WRITELN('Pascal');
End.
```

Output program tersebut adalah:

```

Hasil = 16.00
Latihan
Pascal
```

Tenang saja itu hanyalah contoh, anda tidak harus langsung memahaminya.

Namun diakhir bab, saya berjanji anda akan memahami kode program diatas.

**Operasi Input Output:**

Setelah anda paham apa itu variabel dan tipe data, sekarang kita akan belajar dasar input output pada pascal menggunakan `write` dan `read`.

**1. Perintah Output**

Perintah `write` dan `writeln` digunakan untuk menampilkan output di layar. Bedanya jika menggunakan writeln (ln = line) akan mencetak dengan mengganti baris.

Sedangkan, perintah writeln yang tidak diikuti argument hanya mencetak baris kosong.

**2. Perintah Input**

Perintah input `Read/Readln` digunakan untuk memasukkan input data lewat keyboard ke dalam suatu variabel. Sama seperti write dan writeln...

...Perintah read akan membaca masukan dari keyboard tanpa memindahkan posisi kursor setelah pembacaan, sedangkan readln akan membaca masukan sekaligus memindahkan posisi kursor.

Berikut contoh program sederhana pascal dengan input output:
```pascal

Program inputOutput;
Uses wincrt;
Var nama, npm : String;
Begin
   Clrscr;
   Write ('masukkan nama dan NPM \n');
   Write ('------------------------------\n');
   Write ('nama anda : ');
   Readln (nama);
   Write ('NPM anda : '); Readln (npm);
   Write ('------------------------------\n');
   Write ('Nama anda', nama, ' dan npm anda ', npm);
   Readln;
End.
```

Pada contoh program diatas, saya mendeklarasikan dua variabel yaitu nama dan npm kemudian menggunakan beberapa fungsi input output untuk mendapat nilai.

Lalu di akhir program saya mencetak data yang tersimpan pada variabel nama dan npm.

Kode `readln` di akhir program untuk tetap menangkap layar. Jika tidak maka program hanya akan berkedip. Lalu menutup secara otomatis karena program selesai.

## #4 Algoritma Percabangan

Pada bab ini anda akan belajar konsep percabangan dalam program.

Dalam kehidupan sehari-hari terkadang kita sering dihadapkan pada kondisi dimana kita harus memilih suatu tindakan atau bahkan pilihan yang rumit (bercabang).

Sebagai contohnya ketika kita ingin berangkat sekolah.

**Jika** cuaca sedang hujan **maka** kita akan memakai jas hujan.

Nah seperti yang bisa dilihat, contoh diatas merupakan percabangan paling sederhana, anda hanya dihadapkan dengan dua kondisi antara **ya** dan **tidak** (Benar atau Salah).

Begitu juga dalam membuat program, kita akan sedikit banyak berurusan dengan pilihan.

Namun sayangnya kita tidak selamanya dihadapkan dengan percabangan yang mudah seperti contoh diatas. Untuk itu, kita harus paham algoritma percabangan.

Ada dua macam percabangan yaitu `if then else` dan `switch case`.

*( Silahkan baca: [Algoritma Percabangan](/blog/algoritma-percabangan) )*

## #5 Algoritma Perulangan

Pernahkah anda dihukum guru anda untuk menuliskan sebuah kalimat perjanjian tidak akan mengulangi perbuatan tidak baik sampai papan tulis tersebut penuh?

Misalnya menulis:

>Saya tidak akan bolos sekolah lagi

>..............................................

>..............................................

>..............................................

>Saya tidak akan bolos sekolah lagi
**Catatan**: Anggaplah bagian titik-titik merupakan tulisan yang sama.

Seperti yang bisa anda lihat diatas, kita diminta untuk menulis kalimat yang sama sebanyak (contoh: 50 kali). Tentunya hal ini menjadi pekerjaan yang melelahkan.

Kabar baiknya, kita mengenal fungsi perulangan atau *looping*.

Dalam bahasa pemrograman kita akan membutuhkan fungsi perulangan untuk melakukan hal yang sama. Dalam contoh diatas mencetak tulisan 50 kali.

Dengan perulangan, anda bisa menghemat sekian banyak baris kode yang pada dasarnya cukup diketik satu kali. Untuk itulah program perulangan digunakan.

biasanya algoritma perulangan digunakan untuk mengurutkan angka atau *sorting*.

*( Silahkan baca: [Algoritma Perulangan](/blog/algoritma-perulangan/) )*

## #6 Tipe Data Array

Di awal bab anda sudah membaca perbedaan tipe data *Primitive* dan *Composite*.

Lalu pada bab ini kita akan membahas lebih lanjut contoh tipe data Composite pada kasus kali ini adalah tipe data Array. Apa untungnya memakai tipe data array?

Jika sebelumnya anda telah belajar bagaimana cara menyimpan nilai kedalam variabel. Contohnya kita kita membuat variabel `uang` untuk menyimpan angka.

Dimana jika anda ingin menjumlahkan dua data atau lebih anda juga harus membuat variabel terlebih dahulu. Contoh `totalUang` = `uang1` + `uang2` + `uang3`.

**Ingat:** Variabel hanya mampu menyimpan sebuah nilai.

Hal ini tentu sangat tidak efektif karena untuk membuat program sederhana tersebut kita harus menyiapkan 4 variabel dengan nama yang mungkin sulit untuk kita hafalkan.

Nah tipe data array sendiri digunakan untuk menyimpan banyak data dalam satu nama variabel. Jadi kita dapat menghemat variabel sehingga program lebih efisien.

*( Silahkan Baca: [Pengertian Tipe Data Array](/blog/pengertian-array/) )*

## #7 Prosedur dan Fungsi

Selamat, ini adalah bab terakhir yang akan kita pelajari dalam seri panduan belajar pascal, semua ini adalah dasar kita sebelum memasuki bahasa C++ dan Java.

Pada dasarnya inti dari ide pembuatan prosedur maupun fungsi adalah: kita ingin membuat program kita menjadi bagian-bagian kecil atau yang lebih sederhana.

Jadi bagian program tersebut hanya akan dijalankan ketika kita membutuhkannya. Menariknya lagi, kita dapat menggunakan fungsi tersebut selama berkali-kali.

*( Silahkan baca: [Perbedaan Prosedur dan Fungsi](/blog/prosedur-dan-fungsi/) )*

## #8 Tipe Data Record

Record adalah jenis tipe data terstruktur yang berisi beberapa data, yang masing- masing dapat berlainan tipe termasuk bertipe array. Masing-masing data tersebut disebut sebagai field.

Masing-masing data field dapat berupa satu atau beberapa nama pengenal. Jika data field berisi lebih dari satu maka antar data field dipeisahkan dengan tanda koma.

Perhatikan contoh berikut:

```pascal

Type
Data_Barang = Record
    Nama : string;
    Kualitas : char;
    Harga : longint
    End;
Var Barang : Data_Barang;
```
Deklarasi record seperti di atas menunjukkan bahwa variabel barang mengandung tiga buah field, yaitu : Nama, Kualitas, Harga.

*( Silahkan baca: [Pengertian Record dan Contoh Program Sederhana pada Bahasa Pascal](/blog/pengertian-record) )*

## BONUS: Studi Kasus Program Pascal

**PT “TIRTA KENCANA”** yang bergerak di bidang pengadaan air mineral sedang melakukan uji coba untuk mengetahui seberapa banyak produksi mereka dipakai.

Perusahaan tersebut menurunkan beberapa tim survey untuk menjaring data terkait kualitas produk dengan membagikan questioner.

**Kategori 1**, Data terkait rasa dari produk air mineral: Pahit, Manis, dan Segar.

**Kategori 2**, Packaging dari produk air mineral : Bagus, Elegan, dan Menarik.

**Kategori 3**, Volume produk air mineral : 50 ml, 120 ml, 250 ml, dan 1,5 liter.

Dari sekian data yang diambil agar dapat diolah dalam sekali compile untuk mengambil rata-rata dari masing-masing kategori.

Bantulah manajemen PT “TIRTA KENCANA” agar bisa merealisasikan idenya.

*( Silahkan  [Baca/Download disini](https://www.academia.edu/34758129/Analisis_Kualitas_Produk_Berdasarkan_Survey_dengan_Bantuan_Program_Pascal_Studi_Kasus_PT_TIRTA_KENCANA_) )*

**Catatan:** Halaman ini akan saya update terus.
