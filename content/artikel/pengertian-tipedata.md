---
title: "Pengertian Tipe Data Primitive dan Composite dalam Pemrograman"
date: 2019-02-27
slug: pengertian-tipedata

description: "Ada dua tipe data yaitu: primitive dan composite. Berikut penjelasan lengkap mulai dari pengertian hingga perbedaan antara keduanya."

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Jika sebelumnya kita sudah membahas [apa yang dimaksud dengan variabel](/blog/pengertian-variabel), kemudian di artikel ini saya akan sedikit menyinggung perbedaan tipe data *primitive* dan *composite*.

Namun sebagai awalan, kita harus tahu apa itu tipe data.

Jika dilihat dari pengertiannya: tipe data adalah jenis data yang dapat diolah oleh komputer untuk memenuhi kebutuhan dalam pemrograman komputer.

Sehingga dapat kita simpulkan, jika variabel adalah *wadah* untuk menyimpan data atau nilai, maka tipe data adalah jenis data pada *wadah* yang akan kita gunakan.

## Table Of Contents

## #1 Jenis dan Macam Tipe Data

Ketika anda mendeklarasikan sebuah variabel atau konstanta, anda harus bisa menentukan tipe data apa yang cocok untuk program kita.

Ketepatan pemilihan tipe data pada variabel atau konstanta akan sangat menentukan pemakaian sumberdaya komputer (terutama memori komputer).

Salah satu tugas penting seorang programmer adalah memilih tipe data yang sesuai untuk menghasilkan program yang efisien dan berkinerja tinggi.

Ada banyak tipe data yang tersedia, tergantung jenis bahasa pemrograman yang anda pakai. Namun secara umum dapat dikelompokkan menjadi dua:

1. **Tipe data primitive** - adalah tipe data dasar yang tersedia secara langsung pada suatu bahasa pemrograman. Sebagai contoh tipe data integer dan char.

2. **Tipe data composite** - adalah tipe data bentukan yang terdiri dari dua atau lebih tipe data primitive. Contohnya tipe data string ( bentukan dari tipe data char ).

## #2 Tipe Data Primitive

Ada 3 jenis tipe data primitif dalam bahasa pemrograman:

- Tipe data Angka
  - Pecahan
  - Bilangan
- Tipe data Karakter
- Tipe data Boolean

Kemduain tipe data yang sering dipakai oleh pascal, meliputi: integer (bilangan bulat), real (bilangan pecahan), char (alphanumerik dan tanda baca), dan boolean (logika).

**Tipe data Integer** - Dalam bahasa pemrograman, tipe data integer adalah tipe data yang terdiri dari angka bulat (tidak mengandung nilai pecahan atau nilai desimal).
| Tipe data      | Ukuran Tempat  | Rentang Nilai                |
| -------------- | -------------- | ---------------------------- |
| Byte           | 1 Byte         | 0 s/d +255                   |
| Shortint       | 1 Byte         | -128 s/d +127                |
| Ineteger       | 2 Byte         | -32768 s/d +32767            |
| Word           | 2 Byte         | 0 s/d +65535                 |
| Longint        | 4 Byte         | -2147483648 s/d +2147483647  |

Tipe-tipe ini dibedakan berdasarkan jangkauan nilai dan kapasitas memory yang dibutuhkan. Berikut contoh program pascal dengan tipe data integer:

```pascal

program tipe_integer;
uses crt;
var
  angka:integer;
begin
  clrscr;
  angka:=100;
  writeln('angka: ',angka);

  readln;
end.
```

Dalam program diatas saya mendeklarasikan variabel angka dengan tipe data integer dan memberinya nilai 100 kemudian mencetak hasil ke layar.

**Tipe data real** - biasanya digunakan untuk angka desimal (pecahan, misalnya 3.14). Tipe data ini dikenal juga dengan tipe data float atau floating point.

| Tipe data      | Ukuran Tempat     | Rentang Nilai                    |
| -------------- | ----------------- | -------------------------------- |
| single         | 4 byte            | 1.5 x 10^45 s/d 1.7 x 10^38      |
| real           | 6 byte            | 2.9 x 10^-39 s/d 1.7 x 10^38     |
| double         | 8 byte            | 5.0 x 10^-324 s/d 1.7 x 10^308   |
| comp           | 8 byte            | -9.2 x 10^18 s/d 9.2 x 10^18     |
| extended       | 10 byte           | 3.4 x 10^-4932 s/d 1.1 x 10^4932 |

Sama halnya seperti Integer, Pascal mendukung beberapa tipe data yang termasuk kategori float, yakni: Real, Single, Double, Extended, Comp.

Berikut contoh program pascal menggunakan tipe data real:

```pascal

program tipe_real;
uses crt;
var
  pi,luas:real;
begin
  clrscr;
  pi:=3.14;

  luas:=pi*10*10;

  writeln('Luas Lingkaran: ',luas);
  readln;
end.
```

**Tipe Data Char** adalah tipe data yang hanya bisa diisi dengan 1 karakter saja. Karakter ini (alpanumerik) harus ditulis diantara tanda kutip.

Karena hanya bisa diisi dengan 1 karakter saja, tipe data char hanya membutuhkan 1 byte memory (1 byte = 8 bit).

Berikut contoh program pascal dengan tipe data char:

```pascal

program tipe_char;
uses crt;
var
  a:char;
begin
  clrscr;
  a:='8';
  writeln('Nilai Varibale A: ',a);

  readln;
end.
```

**Catatan:** Meskipun tipe data char dapat diisi angka namun nilai tersebut tidak dapat dilakukan operasi artimetika kedalam program.

**Tipe Data Boolean** - tipe data ini merupakan tipe data logika, yang berisi dua kemungkinan nilai: TRUE (benar) atau FALSE (salah).

Tipe data boolean banyak digunakan untuk percabangan kode program, atau untuk memutuskan apa yang mesti dijalankan ketika sebuah kondisi terjadi.

Sebagai bilangan ordinal boolean TRUE mempunyai nilai 1(satu), sedangkan FALSE nilainya adalah 0 (nol). Berikut contoh Boolean dalam Pascal:

```pascal

program tipe_boolean;
uses crt;
var
  benar:boolean;
begin
  clrscr;

  benar:= true;
  writeln('benar: ',benar);

  readln;
end.
```
Penggunaan tipe data boolean akan berguna ketika anda telah mempelajari kondisi percabangan program seperti IF (yang akan saya jelaskan pada tutorial selanjutnya).

Untuk sementara anda hanya perlu memahami bahwa tipe data boolean adalah tipe data yang hanya memiliki 2 isi: TRUE atau FALSE.

## #3 Tipe Data Composite

Jika tipe data prmitive adalah tipe data murni yang ada dalam bahasa pemrograman maka tipe data composite adalah bentukan dari dua atau lebih dari tipe data primitive.

Sebagi contohnya yaitu tipe data string dan array.

**Tipe Data String** merupakan tipe data yang menyimpan array dari suatu karakter, sebagai contoh 'ABCDEF' merupakan konstanta string yang berisikan 6 byte karakter.

Ukuran tempat untuk tipe data ini adalah 2 s/d 256 byte, dengan jumlah elemen 1 s/d 255. String dideklarasikan dengan string [ konstanta ] atau string.

Bila ukuran string tidak didefinisikan maka akan banyak memakan ruang, karena ukuran string menyesuaikan dengan defaultnya.

Contoh penulisan string dalam pascal:

```pascal

program tipe_string;
uses crt;
var
  a:string;
begin
  clrscr;

  a:= ‘Belajar Pemrograman Pascal’;
  writeln('a: ',a);

  readln;
end.
```

Demikianlah pembahasan mengenai pengertian tipe data dan jenis-jenisnya, sekarang anda tahu bagaimana memilih tipe data yang cocok untuk program anda.

Jangan lewatkan seri [belajar pascal](/blog/belajar-pascal) kami.
