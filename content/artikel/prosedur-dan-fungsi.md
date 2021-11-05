---
title: "Pengertian Prosedur dan Fungsi Beserta Contoh & Perbedaanya"
slug: prosedur-dan-fungsi
date: 2019-03-08

description: "Disini anda akan belajar apa yang dimaksud dengan prosedur dan fungsi untuk mengetahui apa persamaan dan perbedaan dari dua hal tersebut."

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Dalam pemrograman pascal tingkat akhir kita akan mengenal dua istilah baru bernama prosedur dan fungsi. Tentunya akan sangat berguna untuk program bersekala besar.

Berikut pengertian dari prosedur dan fungsi:

> Prosedur dan fungsi adalah sebuah program terpisah ( sub program diluar program utama) dalam blok tersendiri yang berfungsi untuk menyelesaikan masalah khusus.

Itu artinya, kita akan mulai menggunakan konsep modular yaitu: dengan memecah sebuah program yang rumit menjadi beberapa subprogram yang lebih sederhana.

Dari segi efisiensi, dapat kita lihat dimana prosedur dan fungsi cukup dituliskan sekali namun dapat dipanggil kapan saja atau digunakan berulang-ulang.

## Table Of Contents

## #1 Perbedaan Fungsi dan Prosedur

Karena keduanya memiliki kesamaan yang cukup besar yaitu sebagai subprogram, maka banyak dari kita masih sulit membedakan antara prosedur dan fungsi.

Berikut perbedaan keduanya:

- Prosedur dideklarasikan menggunakan sintaks procedure, sedangkan fungsi dideklarasikan menggunakan sintaks function.

- Prosedur bisa dibentuk dengan parameter maupun tanpa parameter, sedangka fungsi harus dibentuk menggunakan parameter.

- Nalai yang dihasilkan fungsi akan disimpan pada nama fungsi itu sendiri dan dapat dipindah alihkan kedalam variabel, sedangkan prosedur tidak bisa.

Untuk membuktikannya silahkan lakukan pemindahan nilai prosedur dan fungsi:

```pascal

namaVariabel:=hitung(x,y);
```

Meskipun menggunakan parameter yang sama namun saya jamin anda akan mendapatkan pesan error jika memaksa memindah nilai dari prosedur.

## #2 Contoh Prosedur pada Program Pascal

Prosedur memiliki dua bentuk, yang pertama dinamakan procedure sederhana karena tidak menerima argumen (nilai atau data) ketika dieksekusi atau tanpa parameter.

Berikut cara pendeklarasiannya:

```pascal

Program Judul_Program;
   Procedure Judul_Prosedur;
   Begin
   ........
   ........
   End;
Begin
.........
.........
End.
```

Dalam penerapannya, procedure sederhana dipakai untuk menampilkan pilihan menu, dsb. Berikut contoh programnya:

```pascal

Program Procedure_Sederhana ;
uses crt;
   PROCEDURE MENU;
   begin
      writeln('Pilihan Menu');
      writeln(' 1: Statemen Percabangan');
      writeln(' 2: Statemen Perulangan');
      writeln(' 3: Statemen Array');
   end;
Begin
   writeln('Sebelum prosedur');
   MENU;
   writeln('Sesudah prosedur');
   readln;
end.
```

**TIPS:** untuk memanggil procedure sederhana anda hanya perlu mengetikan nama prosedur lalu diakhiri dengan tanda titik koma (;)

Kemudian prosedur yang kedua bernama procedure kompleks karena menerima nilai yang diproses ketika dieksekusi. Silahkan perhatikan contoh berikut:

```pascal

Program KenalanYuk;
uses crt;
var hasil: integer;
   Procedure Perkenalan(var nama:string;umur:integer);
   Begin
      writeln('Hai nama saya ', nama, ' dan umur saya ', umur);
   End;
Begin
   Perkenalan('Andi', 21);
   Perkenalan('Budi', 23);
   readln;
end.
```

Dalam program diatas, kita menggunakan prosedur kompleks dimana kita membutuhkan sebuah parameter untuk mendapatkan nilai untuk variabel `nama` dan `umur`.

Cara penggunaan prosedur kompleks seperti ini:

```pascal

Procedure Namaprosedur (parameter:tipedata);
```

Jadi kita memanggil prosedur `Perkenalan` dengan menyertakan parameter `nama` dan `umur`, kemudian nilai tersebut akan disimpan pada variabel `nama` dan `umur`.

Kemudian akan kita tampilkan ke layar menggunakan perintah `writeln`.

## #3 Contoh Fungsi dalam Program Pascal

Untuk mendeklarasikan Function (fungsi) dalam pascal hampir sama dengan deklarasi procedure kompleks, namun fungsi harus dideklarasikan dengan tipenya.

Berikut cara pendeklarasian fungsi:

```Pascal

Function judul_fungsi(daftar_parameter): type;
```

Fungsi juga memakai variabel saat dieksekusi, namun mempunyai kemampuan untuk menghasilkan nilai pada procedure atau program yang memanggilnya.

Perhatikan contoh program berikut ini:
```pascal

Program FungsiPenjumlahan;
uses crt;
   Function hitung(Var A,B : integer):integer;
   begin
      hitung:=A+B;
   end;

Var x,y : integer;
Begin
   Writeln('Silahkan masukan Angka (1-10):');
   write('Nilai X : ');readln(x);
   write('Nilai Y : ');readln(y);
   writeln;
   write(x,' + ',y,' = ',hitung(x,y));
   readln;
end.
```

Pada program diatas kita menggukan fungsi `hitung` bertipe `integer` dengan parameter `A` dan `B` sebagai variabel lokal kemudian `x` dan `y` sebagai variabel global.

Untuk pemanggilan fungsi pun sama dengan prosedur yaitu dengan cara mengetikan nama fungsi diikuti parameter dan diakhiri dengan titik koma.

## Menarik Kesimpulan

Baik prosedur maupun fungsi dapat kita gunakan untuk memecah program kita menjadi bagian-bagian yang lebih sederhana. Biasanya digunakan untuk program skala besar.

Dengan sistem modular maka program anda akan semakin fleksibel.

Dibandingkan anda harus menulisakan baris program sekian kali untuk cara kerja yang sama, tentunya akan lebih efektif jika anda menggunakan prosedur maupun fungsi.

Intinya kita membagi program besar menjadi subprogram dengan tugas masing-masing. Baiklah, saya rasa cukup jelas penjelasanya.

Jangan lewatkan [seri belajar pascal](/blog/belajar-pascal/) kami.