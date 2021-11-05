---
title: "3+ Macam Algoritma Perulangan Beserta Contoh Programmnya"
date: 2019-03-04
slug: algoritma-perulangan

description: "Berikut adalah algoritma perulangan dalam pemrograman dan contoh program sederhana pemanfaatan looping untuk efisiensi kode"

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true

---

Pernahkah anda dihukum guru anda untuk menuliskan sebuah kalimat perjanjian tidak akan mengulangi perbuatan tidak baik sampai papan tulis tersebut penuh?

Misalnya menulis:

>Saya tidak akan bolos sekolah lagi

>……………………………………….

>……………………………………….

>……………………………………….

Saya tidak akan bolos sekolah lagi

**Catatan:** Anggaplah bagian titik-titik merupakan tulisan yang sama.

Seperti yang bisa anda lihat diatas, kita diminta untuk menulis kalimat yang sama sebanyak (contoh: 50 kali). Tentunya hal ini menjadi pekerjaan yang melelahkan.

Kabar baiknya, kita mengenal fungsi perulangan atau looping. Anda bisa menghemat sekian banyak baris kode yang pada dasarnya cukup diketik satu kali.

## Table Of Contents

## Pengertian dan Fungsi Perulangan

Dalam pemrograman kita tidak mungkin menuliskan puluhan baris kode yang sama untuk output yang sama. Tentunya sangat merepotkan tanpa fungsi perulangan.

>***Looping*** ( atau perulangan ) adalah fungsi pada bahasa pemrograman untuk menjalankan baris kode secara berulang-ulang selama kondisi masih terpenuhi.

Dalam contoh diatas kita diminta untuk mencetak tulisan sebanyak 50 kali, jadi selama jumlah tulisan belum mencapai 50 (terpehui atau true) program akan terus berjalan.

Lalu setelah tulisan yang kita cetak telah berjumlah 50, maka program akan berhenti karena kondisi sudah tidak lagi terpenuhi. Karena batas kita adalah 50.

Kita ingat lagi [algoritma percabangan](/blog/algoritma-percabangan/): Jika jumlah <= 50 maka cetak tulisan, jika tidak berhenti mencetak. Jadi kita hanya mencetak sebanyak 50 kali tidak lebih dan kurang.

Untuk fungsi maupun penggunaan looping dalam program sendiri anda akan banyak melihatnya jika kita sudah berurusan dengan [tipe data array](/blog/pengertian-array).

**Macam-Macam Perulangan pada Pascal**

Terdapat tiga macam bentuk pengulangan dalam bahasa pemrograman Pascal, yaitu dengan menggunakan statemen `For`, `While...do`, `Repeat....Until`.

## #1 Statemen For

Bentuk pengulangan dengan statemen `For` dapat berbentuk pengulangan positif (`For....to....do`) dan pengulangan negatif (`For....Downto....do`).

**1.1 Pengulangan For...to...do**

Pengulangan `For...to...do` adalah pengulangan dengan penghitung (counter) dari kecil ke besar atau disebut juga pertambahannya positif.

Sintaksnya adalah sebagai berikut :

```pascal

For variabel:=kondisiAwal to kondisiAkhir do statemen;
```

Berikut contoh program perulangan menggunakan `for to do`:

```pascal

Program Loop1;
uses crt;
var i:integer;
Begin
   For i:=1 to 100 do
   Begin
      writeln('Nama Saya');
   End;
   Readln;
end.
```

**1.2 Pengulangan For....downto...do**

Pengulangan `For....downto...do` adalah pengulangan dengan penhitung (counter) dari besar ke kecil atau disebut juga pertambahannya negatif.

Sintaksnya adalah sebagai berikut :

```pascal

For variabel:=kondisiAwal downto kondisiAkhir do statemen
```

Berikut contoh program perulangan menggunakan `for downto do`:

```pascal

Program Loop2;
uses crt;
var i:integer;
Begin
   For i:=100 downto 1 do
   Begin
      writeln('Nama Saya');
   End;
   Readln;
end.
```

**PENTING:** Ada dua kondisi pada perulangan `For` (yaitu: kondisi awal, dan kondisi akhir), program ini akan terus berjalan selama kondisi akhir belum terpenuhi.

## #2 Statemen While....Do

Statemen `while...do` digunakan untuk melakukan proses pengulangan suatu statemen atau blok statemen terus menerus selama kondisi bernilai benar.

Statemen `while`...`do` biasa dipakai untuk melakukan pengulangan yang jumlahnya tidak diketahui di depan atau selang pencacahannya tidak sebesar 1 atau -1.

Bentuk statemen `while...do` adalah sebagai berikut:

```pascal

While kondisi Do
   Statemen;
```

Jadi statemen setelah kata `Do` akan terus dikerjakan selama kondisi bernilai benar.

Jika kondisi bernilai FALSE di awal (sebelum while) maka statemen tidak akan pernah dikerjakan. Berikut contoh program sederhana menggunakan `while do`:

```pascal

Program Loop3;
uses crt;
var i:integer;
Begin
   i:=0;
   while i<4 do
   begin
      writeln(i);
      i:=i+1;
   end;
   Readln;
end.
```

## #3 Statemen Repeat.....Until

`Repeat`.....`until` adalah statemen digunakan untuk mengulang statemen atau blok statemen sampai kondisi bernilai TRUE...

..Jadi pengulangan justru dilakukan selama kondisi bernilai salah.

Pemeriksaan kondisi pada pengulangan `Repeat...until` dilakukan belakangan (diakhir), berbeda dengan `While...do`. Lalu apa artinya? Itu artinya...

Hal ini mengakibatkan statemen pada pengulangan `Repeat.....until` paling sedikit akan diproses satu kali. Bentuk statemen `Repeat....until` adalah sebagai berikut :

```pascal

Repeat
   Statemen1;
   Statemen2;
   ...
   Statemen;
Until kondisi;
```

Berikut contoh program sederhana perulangan menggunakan `repeat until`:

```pascal

Program Loop4;
uses crt;
var i:integer;
Begin
   i:=0;
   Repeat
      i:=i+1;
      writeln(i);
   until i=4;
   Readln;
end.
```

## Menarik Kesimpulan

Jadi kapan kita menggunakan perulangan `for`, `repeat`, mupun `while`?

Saya akan memberi acuannya saja. Jadi anda dapat memilih salah satu fungsi diatas berdasarkan kondisi tertentu. Perhatikan aturan mainnya sebagai berikut:

- Gunakan `for` selama kita mengetahui berapa jumlah peulangan yang diinginkan, misalnya telah ditentukan dari angka 1-100 ataupun dari angka 200-100.

- Gunakan `repeat` selama kita tidak tahu berapa banyak perulangan akan terjadi, dan selama kondisi bernilai salah.

- Gunakan `while` selama kita tidak tahu berapa banyak perulangan akan terjadi , dan selama kondisi bernilai benar.

Jadi yang membedakan `repeat` dan `while` hanyalah kondisi mereka.

Jika `repeat` akan berjalan selama kondisi masih tidak terpenuhi (FALSE atau salah), sedangkan `while` akan berjalan selama kondisi masih terpenuhi (TRUE atau benar).

Jangan lewatkan seri panduan [belajar pascal](/blog/belajar-pascal/) kami.
