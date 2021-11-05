---
title: "Pengertian Variabel dan Konstanta Beserta Contoh Programnya"
date: 2019-02-27
slug: pengertian-variabel

description: "Tahukah anda apa yang dimaksud dengan variabel dan konstanta? Panduan ini akan membantu anda memahaminya lewat analogi sederhana"

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true

---

Mungkin saat ini anda masih merasa asing mendengar istilah *variable* maupun *konstanta* ketika memulai belajar bahasa pemrograman, bahkan tidak bisa membedakannya.

Hal ini wajar-wajar saja karena saya pun juga demikian, pada awalnya.

Saya pernah merasa kesulitan untuk memahami apa yang dimaksud dengan variabel dan masih belum paham bagaimana fungsi penggunaannya didalam program.

Karena pada awalnya, saya hanya membaca modul dari dosen saya.

## Table Of Contents

## #1 Apa yang dimaksud dengan variabel?

Berikut adalah pengertian variabel dalam pemrograman:

>**Variabel** adalah suatu tempat yang digunakan untuk menampung data atau konstanta di memori yang mempunyai nilai yang dapat berubah–ubah selama proses program.

Untuk memudahkan pemahaman anda mengenai variabel, mari kita asumsikan bahwa varibel adalah sebuah wadah yang akan kita pesan ( misalnya: sebuah gelas ).

Ketika anda mendeklarasikan sebuah variabel, hal itu berarti anda sedang memesan sebuah *wadah* ke dalam memori untuk anda gunakan kedalam program.

Lalu, anda dapat mengisi wadah tersebut dengan air ( sebagai data atau nilai ).

**Catatan**: sifat dari variabel adalah sementara atau tidak permanen, artinya data atau nilai yang tersimpan dalam variabel akan hilang ketika program dimatikan.

Berikut adalah aturan atau sifat yang dimiliki variabel:

- Variabel hanya digunakan untuk menyimpan data sementara

- Variabel hanya mampu menyimpan satu data atau nilai

Lalu seperti apa yang dimaksud?

Mari kita asumsikan vaiabel seperti peringkat 1 kelas, dimana posisi 1 dapat digantikan oleh orang lain namun posisi 1 hanya untuk 1 orang. Kira-kira seperti itu konsepnya.

Selanjutnya, sebuah variabel atau yang kita analogikan sebuah wadah harus memiliki *identifier* atau nama yang unik. Mari kita analogikan wadah tadi menjadi sebuah loker.

Ketika kita menyimpan sepatu kedalam loker, bagaimana cara kita mengetahui isi dari tiap-tiap loker yang tersedia? Jawaban-nya adalah dengan nomor loker.

Apakah semua nomor loker adalah sama? Jawaban-nya tentu tidak, karena jika semua nomor loker sama, kita pasti akan mengalami kebingungan.

Kasus ini juga berlaku sama dalam bahasa pemograman, komputer akan mengalami kebingungan jika terdapat 2 variable dengan nama yang sama.

Oleh karena itu, setiap variabel harus bersifat *unique*.

## #2 Perbedaan Variabel dan Konstanta

Kini anda pasti sudah paham apa yang dimaksud dengan variabel.

Konstanta pada dasarnya sama seperti variabel, hanya saja nilai yang tersimpan dalam konstanta tidak dapat dirubah dalam proses program. Dengan kata lain: bersifat tetap.

Jadi yang mebedakan variabel dan konstanta adalah sifat dari *wadah* tersebut. Jika variabel memiliki nilai yang dapat berubah-ubah maka konstanta bersifat tetap.

## #3 Struktur Penulisan Variabel

Bagaimana cara penulisan variabel dalam program pascal yang benar?

```pascal

var namaVariabel : tipedata;
```

Untuk membuat variabel kita harus men-deklarasikan-nya sebelum main program dan sebuah variabel di dalam pascal harus ditulis sesuai dengan aturan berikut:

- Karakter pertama harus berupa huruf

- Karakter kedua dan seterusnya dapat berupa angka atau underscore ( _ )

- Tidak boleh menggunakan spasi

**Catatan:** Hal ini berlaku untuk bahasa pemrograman lain.

Berikut contoh nama variabel yang benar:

```

VariabelPascal
Nama_Variabel
Contoh77
```

Contoh penulisan variabel dalam bahasa pascal:

```pascal

var
  nama, alamat : string;
  umur : integer;
```

Sebagai catatan: anda dapat mendeklarasikan beberapa variabel sekaligus dengan menambahkan koma (,) selama [tipe data](/blog/pengertian-tipedata) variabel tersebut sama.

## #4 Cara Memberi Nilai pada Variabel

Setelah variabel dideklarasikan, berikutnya adalah men-input nilai kedalam variabel tersebut. Berikut format penulisannya:

```

nama_variabel := nilai;
```

Untuk memberikan nilai, pascal menggunakan karakter `:=` ‘titik dua sama dengan’.

Dalam pemrograman, proses pemberian nilai ini dikenal dengan istilah assignment, dan tanda “ := ” disebut dengan operator assignment di dalam pascal.

Proses assignment dibaca dari kanan ke kiri.

**PENTING:** Konsep ini berlaku untuk semua bahasa pemrograman.

Perhatikan kode berikut:

```

nama:='Damas';
umur:=17;
```
Jika kita terjemahkan kedalam tulisan kode diatas berarti kita memberikan nilai 'Damas' kedalam variabel `nama` dan 17 kedalam variabel `umur`.

## Menarik Kesimpulan

Berdasarkan penjelasan diatas, dapat kita simpulkan bahwa variable merupakan salah satu konsep media penyimpanan pada bahasa pemograman.

Setiap variable dalam bahasa pemograman akan memiliki identifier atau nama yang unique, ukuran / size, tipe dan nilai atau value yang disimpan.

Jangan lewatkan seri [belajar bahasa pascal](/blog/belajar-pascal) kami.
