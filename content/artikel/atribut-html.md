---
title: "Pengertian Atribut HTML dan Fungsinya Yang Tidak Banyak Diketahui"
date: 2019-10-22
slug: atribut-html

description: "Mau tahu apa yang dimaksud dengan atribut html? Berikut adalah penjelasan lengkap dan contoh beserta fungsi dalam penggunaannya.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Jika sebelumnya kita telah belajar [apa itu tag html](/blog/tag-html/) dan elemen seperti `<h1>`, `<p>`, dan `<div>`. Maka kali ini kita akan memahami apa yang dimaksud dengan atribut html.

Nah atribut sendiri maksudnya adalah informasi tambahan yang diberikan kepada tag. Informasi ini bisa berupa instruksi untuk warna dari text, besar huruf dari text.

Cara penulisannya pun cukup menambahkan `name` dan `value`:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Tata Letak Tulisan</title>
   </head>

   <body>
      <p align="left">Tulisan dengan format rata kiri</p>
      <p align="center">Tulisan dengan format rata tengah</p>
      <p align="right">Tulisan dengan format rata kanan</p>
   </body>

</html>
```

Dalam contoh diatas, kita mendeklarasikan name `align` dan value `left`, `center`, atau `right`.

Penulisan atribut berada dalam tag pembuka.

## Table Of Contents

## #1 Atribut Inti

Ada empat atribut penting yang sering digunakan dalam tag HTML:

- `Id`
- `Class`
- `Title`
- `Style`

**Pertama** - Atribut `Id` berfungsi untuk mengidentifikasi keunikan dari setiap elemen yang ada dalam satu halaman web. Artinya dalam sebuah halaman hanya akan ada satu nama `Id`.

Nah nantinya atribut `Id` akan kita gunakan saat bermain dengan css.

Berikut adalah contoh penulisan atribut `Id`:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Tulisan</title>
   </head>

   <body>
      <p id="pertama">Ini adalah tulisan pertama</p>
      <p id="kedua">Ini adalah tulisan kedua</p>
   </body>

</html>
```

**Kedua** - Atribut `title` ini biasanya digunakan untuk tooltips dari judul ataupun gambar dari sebuah elemen website. Berfungsi untuk menjelaskan lebih detail.

Berikut adalah contoh penggunaan atribut `title`:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Selamat Datang di Kodedasar.com</title>
   </head>

   <body>
      <h3 title="Hai nama saya Damas Amirul Karim">Damas Amirul Karim</h3>
   </body>

</html>
```

Untuk percobaan, silahkan sorotkan kursor tepat diatas judul `Damas Amirul Karim`.

**Ketiga** - Atribut `style` banyak digunakan untuk mengubah tampilan dasar dari elemen html.

Jadi disini kita bisa menambahkan kode css didalam atribut `style`.

Perhatikan contoh penggunaan atribut style berikut:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Atribut Style</title>
   </head>

   <body>
      <p style="font-family:arial; color:#FF0000;">Contoh tulisan...</p>
   </body>

</html>
```

**Keempat** - Atribut `class` hampir sama dengan atribut `Id` namun yang membedakannya adalah:

Atribut `Id` bersifat unik sedangkan `class` tidak demikian.

Anda bisa menambahkan banyak `class` di dalam sebuah elemen html.

Nantinya akan sangat berguna saat kita mempelajari css.

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Atribut Class</title>
   </head>

   <body>
      <p class="satu dua tiga">Contoh tulisan dengan class...</p>
   </body>

</html>
```

Pada contoh diatas saya menambahkan tiga buah `class` dalam sebuah tag html.

## #2 Atribut Internasional

Ada dua atribut Internasional khusus untuk tag HTML antara lain:

- `dir`
- `lang`

**Atribut Dir** digunakan untuk mengindikasikan kepada browser bagaimana urutan penulisannya.

| Value | Penjelasan     |
| :------------- | :------------- |
| ltr  |  Left to Right (Dibaca dari kiri ke kanan) |
| rtl       | Right to Left (untuk tulisan arab - mulai dari kanan ke kiri)       |

Berikut contoh penggunaan tag `dir`:

```html

<!DOCTYPE html>
<html dir="rtl">

   <head>
      <title>Arah Membaca</title>
   </head>

   <body>
      Inilah cara IE 5 membaca tulisan dari kanan ke kiri.
   </body>

</html>
```

**Atribut Lang** digunakan untuk mengidikasikan bahasa utama dari halaman website.

Berikut cara penulisan tag `lang`:

```html

<!DOCTYPE html>
<html lang="id">

   <head>
      <title>Halaman Bahasa Indonesia</title>
   </head>

   <body>
      Halaman ini menggunakan bahasa indonesia.
   </body>

</html>
```

## #3 Tambahan: Atribut Bawaan

Berikut adalah beberapa atribut yang secara umum bisa anda gunakan:

| Atribut        | Pilihan        | Fungsinya     |
| :------------- | :------------- | ------------- |
| `align`        |  `right`, `left`, `center`	 |	Rata secara horizontal |
| `valign` |  `top`, `middle`, `bottom`	|	Rata secara vertikal  |
|  `bgcolor` |  `numeric, hexidecimal, RGB values`	|	Memberi warna latar elemen |
| `background` |	`URL`	|  Memberikan background gambar elemen. |
|  `id` |	`User Defined` |	Nama khusus sebuah elemen untuk CSS |
| `class` | `User Defined`  | Nama untuk pengklasifikasian CSS |
|  `width` |	`Numeric Value` |	Biasanya untuk lebar `table` dan `img`  |
|  `height` |	`Numeric Value` |	Biasanya digunakan untuk  tinggi `table` dan `img`.
|  `title` |  `User Defined`	|	Judul dari elemen "Pop-up" |

Demikianlah penjelasan mengenai atribut pada HTML. Jangan lewatkan [seri belajar html](/blog/belajar-html/) kami.
