---
title: "Pengertian Tipe Data Array dalam Konsep Pemrograman Komputer"
date: 2019-03-05
slug: pengertian-array

description: "Tipe data array adalah salah satu tipe data composite dalam bahasa pemrograman. Berikut penjelasan dan contoh penggunaannya dalam program."

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Di artikel sebelumnya kita telah belajar apa itu [variabel](/blog/pengertian-variabel/) dan [tipe data](/blog/pengertian-tipedata/).

Nah kali ini kita akan belajar hal baru yang berhubungan dengan kedua hal tersebut yaitu tipe data array yang merupakan salah satu contoh tipe data composite atau bentukan.

Tipe data array digunakan untuk menyimpan kumpulan data. Ketika kita berhubungan dengan data yang besar, maka kita membutuhkan banyak variabel yang terpisah.

Misalnya apabila kita memiliki 10 data nama mahasiswa, maka dibutuhkan 10 variabel untuk menyimpan nama tersebut. Bisa dengan alfabet `a - j` atau `nama1 - nama10`.

Lalu bagaimana jika data yang disimpan lebih besar? Contoh ada 100 nama mahasiswa, apakah kita juga akan membuat 100 variabel untuk menyimpan data tersebut?

Tentu saja tidak, maka dari itu kita membutuhkan sebuah tipe data array.

## Table Of Contents

## #1 Apa itu Array?

**Secara pengertian:** Array atau larik (dalam Bahasa Indonesia) adalah sebuah tipe data bentukan yang terdiri dari sejumlah komponen dengan tipe yang sama.

Artinya, kita dapat menyimpan banyak data dalam satu variabel.

*Analoginya seperti ini:*

Mari kita bayangkan bahwa array merupakan sebuah hotel yang memiliki beberapa kamar. Kemudian setiap kamar dikenal dengan index atau urutan angka.

Intinya adalah: kita akan menyiapkan kamar dalam hotel dengan nomor index 0-sekian. Untuk penggunaanya sendiri pengunjung dibagi berdasarkan nomor kamar hotel.

Jika kita lihat lagi masalah diatas, kita tidak lagi membutuhkan banyak variabel untuk menyiman data yang sama. Namun kita hanya membutuhkan satu variabel saja.

Ada beberapa hal yang perlu anda ketahu tentang array:

- Nomor index pada Array dimulai dari nol (0).

- Array hanya mampu menyimpan data dengan tipe yang sama.

- Artinya, semua isi array memiliki tipe data sama.

Jika anda sudah paham mari kita lanjutkan.

## #2 Syntax Array

Ketika kita mendeklarasikan array ke *compiler*, maka sama saja dengan menciptakan sebuah hotel dengan masing-masing nomor kamar yang tersedia.

Setelah kita berhasil mendeklarasikan array, maka kita dapat mulai memberikan nilai untuk setiap kamar-kamar yang tersedia dalam hotel yang tadi kita deklarasikan.

Tipe data array yang dapat digunakan antara lain: int, char, double, string, dan boolean.

Berikut cara mendeklarasikan array dalam program pascal.

```pascal

nama_Array: array[panjang_indeks] of tipe_Array
```

Contoh pendeklarasian array berdimensi 1 (satu):

```pascal

X : array [0..9] of integer;
```

Pada contoh diatas kita telah mendeklarasikan variabel X bertipe Array yang memiliki indeks 0-9 (10 larik) dengan tipe data integer. Artinya kita dapat menyimpan 10 angka.

Berikut cara memberikan nilai pada array:

```pascal

X[0] := 9; X[1] := 8; X[2] := 7; X[3] := 10; X[4] := 8;
X[5] := 7; X[6] := 9; X[7] := 7; X[8] := 8; X[9] := 10;
```

**TIPS:** `X[0] := 9` menunjukkan bahwa `X` adalah nama larik, `0` adalah nilai indeks, `10` menunjukkan nilai integer. Sedangkan untuk mengakses nilai dari variabel:

...menggunakan namaVariabel[nomorIndeks], contoh:

```pascal

Writeln(X[0]);
```

Dalam penggunaannya, array dipasangkan dengan sebuah fungsi perulangan.

## #3 Macam-Macam Array

Ada dua jenis tipe data array:

- Array 1 dimensi

- Array 2 dimensi (multi dimensi)

Jika array satu dimensi kita asumsikan sebagai deretan data maka array berdimensi dua mewakili suatu bentuk tabel atau matrik dimana indeks yang pertama menunjukkan baris kemudian indeks yang kedua menunjukkan kolom dari tabel atau matriks.

Berikut bentuk umumnya:

```pascal

Nama_larik : Array [indeks_baris,Indeks_Kolom] of Tipe_Array;
```

## #4 Contoh Array dalam Program Pascal

Berikut contoh array dimensi satu dalam pascal dengan fungsi `for to do`:

```pascal

Program ContohArray;
uses crt;
var data:array[0..4] of integer;
m,n,i : integer;
Begin
   n:=4;
   Write('Masukan 5 buah angka (1-10): ');
   for i:=0 to n do
   begin
     write ('Data ke-',i+1,' = ');readln(data[i]);
   end;

   Write('data ke berapa yang ingin anda lihat? (1-5) : ');readln(m);

   Write('Data Ke-',m,' = ',data[m-1]);
   readln;
end.
```

Berikut contoh array berdimensi dua:

```Pascal

Program Matriks;
uses crt;
var A:array[1..3,1..3] of integer;
i,j,m,n,k,l : integer;
Begin
   Writeln('Program input matriks A');
   writeln('-----------------------');
   write('Banyaknya baris : ');readln(m);
   write('Banyaknya kolom : ');readln(n);
   for i:=1 to m do
   begin
      for j:=1 to n do
      begin
         write('A [',i,',',j,'] : ');readln(A[i,j]);
      end;
      writeln;
   end;

   writeln('Melihat Elemen Matrik A');
   write('Baris ke-');readln(k);
   write('Kolom ke-');readln(l);
   Write('Elemen Matrik A baris ke-',k,' kolom ke-',l,' =',A[k,l]);
   readln;
end.
```

Maaf karena harusnya saya menggunakan indeks dari 0, namun hal ini hanya untuk mempermudah pemahaman anda mengenai konsep array berdimensi dua.

Untuk mengakses array berdimensi dua kita menggunakan *nested loop* atau perulangan bersarang. *Silahkan baca: [Algoritma fungsi perulangan](/blog/algoritma-perulangan/)*

## Menarik Kesimpulan

Keunggulan `array` dibandingkan `variabel biasa` akan anda rasakan dalam fleksibilitas program, sebagai contoh ketika anda ingin menampung daftar nama mahasiswa.

Dibandingkan anda membuat banyak variabel misalnya: `nama1`, `nama2`, `nama2`, dan seterusnya. Akan lebih baik jika kita menggunakan tipe data array.

Karena kita dapat menyimpan data-data tersebut menjadi satu nama variabel.

Selain mudah diingat, tentu lebih efektif dalam pembuatan program. Baiklah sekarang anda tahu apa itu tipe data array dan bagaimana penggunaanya dalam program.

Jangan lewatkan seri panduan [belajar pascal](/blog/belajar-pascal/) kami.
