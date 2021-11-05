---
title: "Cara Mudah Membuat Tabel HTML Menggunakan Text Editor"
date: 2019-10-24
slug: tabel-html
draft: false

description: "Berikut adalah panduan bagimana cara membuat tabel html murni tanpa css external dengan text editor seperti notepad dan lain sebagainya"

published: true
author: "Damas Amirul Karim"
tags: ['Web','HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Apakah anda pernah menggunakan microsoft excell? Mungkin seperti itulah sedikit gambaran tabel yang akan kita buat menggunakan markup html yaitu tag `table`.

Di dalam tag HTML `table` sendiri kita dapat menyisipkan elemen gambar, teks, dan link menjadi baris dan kolom atau yang kita sebut row dan coll.

Kemudian untuk membuat elemen tabel kita akan menggunakan tag `<tr>` dan `<td>`.

| Tag Awal | Keterangan |
| :------------- | :------------- |
| `<table>` | Mendefinisikan sebuah tebel dalam HTML. |
| `<tr>`  | Mendefinisikan baris pada tabel  |
| `<th>` |  Mendefinisikan sel header tabel  |
| `<td>`  |  Mendefinisikan sebuah sel data tabel |

## Table Of Contents

## #1 Struktur Tabel HTML

Berikut merupakan struktur penulisan dari tabel:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Tables</title>
   </head>

   <body>
      <table border = "1">
         <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
         </tr>

         <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
         </tr>
      </table>

   </body>
</html>
```

Dan berikut adalah hasilnya:

<table>
   <tr>
      <td>Baris 1, Kolom 1</td>
      <td>Baris 1, Kolom 2</td>
   </tr>

   <tr>
      <td>Baris 2, Kolom 1</td>
      <td>Baris 2, Kolom 2</td>
   </tr>
</table>

Dari tabel diatas dapat anda lihat bahwa kita membuat tabel dengan tag `<table>` kemudian didalmnya kita menambhakan tag `<tr>` untuk menambah baris (struktur kebawah)

Dan terakhir didalam baris kita membuat kolom dengan tag `<td>`.

## #2 Contoh Tabel HTML dengan Heading

Silahkan perhatikan kode berikut ini:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Header</title>
   </head>

   <body>
     <table border="1">
        <tr>
           <th>NPM</th>
           <th>Nama</th>
           <th>Jenis Kelamin</th>
           <th>IPK</th>
        </tr>
        <tr>
           <td>16.0504.0146</td>
           <td>Damas Amirul Karim</td>
           <td>Laki-Laki</td>
           <td>3.62</td>
        </tr>
     </table>
   </body>

</html>
```

Dan Hasilnya adalah sebagai berikut:

<table>
   <tr>
      <th>NPM</th>
      <th>Nama</th>
      <th>Jenis Kelamin</th>
      <th>IPK</th>
   </tr>
   <tr>
     <td>16.0504.0146</td>
     <td>Damas Amirul Karim</td>
     <td>Laki-Laki</td>
     <td>3.62</td>
   </tr>
</table>

Yang membedakan ada pada tag `<td>` digantikan tag `<th>` khusus untuk header kolom.

## #3 Atribut `Cellpadding` dan `Cellspacing`

Yang membedakan kedua atribut tersebut adalah:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Cellpadding</title>
   </head>

   <body>
      <table border = "1" cellpadding = "5" cellspacing = "5">
         <tr>
            <th>Nama</th>
            <th>Gaji</th>
         </tr>
         <tr>
            <td>Andi</td>
            <td>$5000/tahun</td>
         </tr>
         <tr>
            <td>Budi</td>
            <td>$7000/tahun</td>
         </tr>
      </table>
   </body>

</html>
```

Dalam kode diatas kita membuat sebuah file .html yang isinya berupa tabel dengan judul atau header nama dan gaji. Kemudian pada baris selanjutnya kita mengisi seperti biasa.

**Berkut catatan saya:**

| Atribut | Keterangan     |
| :------------- | :------------- |
| `cellspacing`       | untuk mengatur jarak antar cell     |
|  `cellpadding` | untuk memberi jarak antara cell border dengan konten di dalam cell  |

## #4 Perbedaan `collspan` dan `rowspan`

Langsung saja silahkan perhatikan kode berikut ini:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table Colspan/Rowspan</title>
   </head>

   <body>
      <table border = "1">
         <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
         <tr>
            <td rowspan="2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
         </tr>
         <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
         </tr>
         <tr>
            <td colspan="3">Row 3 Cell 1</td>
         </tr>
      </table>
   </body>

</html>
```

Sehingga anda akan mendapatkan hasil seperti ini:

<table>
   <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
   </tr>
   <tr>
      <td rowspan = "2">Row 1 Cell 1</td>
      <td>Row 1 Cell 2</td>
      <td>Row 1 Cell 3</td>
   </tr>
   <tr>
      <td>Row 2 Cell 2</td>
      <td>Row 2 Cell 3</td>
   </tr>
   <tr>
      <td colspan = "3">Row 3 Cell 1</td>
   </tr>
</table>

Dan berikut adalah sedikit catatan dari saya:

| Atribut | Keterangan     |
| :------------- | :------------- |
| `rowspan`       | Untuk menggabungkan 2 atau lebih baris       |
|  `collspan` | untuk menggabungkan 2 atau lebih kolom |

## #5 Beberapa Atribut Tambahan

Sama seperti tag html lainnya, kita dapat menambahkan beberapa atribut untuk elemen html:

| Atribut | Keterangan         |
| :------------- | :------------- |
| `bgcolor`       | Untuk Mengubah background elemen tabel       |
| `height`  | Untuk mengatur tinggi cell |
|  `width` |  Untuk mengatur lebar kolom  |
| `align` | Mengatur perataan text horizontal (left, center, right)|
| `valign`| Mengatur perataan text vertikal (top, middle, bottom)  |

## BONUS: Header, Body, and Footer

Tabel dalam html juga bisa dibagi menjadi 3 elemen yaitu `header`, `body` dan `footer`.

Berikut masing-masing fungsinya:

- `<thead>` − untuk membagi kepala tabel

- `<tbody>` − untuk mengindikasikan konten utama tabel

- `<tfoot>` − untuk membagi kaki Tabel

Untuk lebih jelasnya kita langsung ke contoh berikut:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>HTML Table</title>
   </head>

   <body>
      <table border = "1" width = "100%">
         <thead>
            <tr>
               <td colspan = "4">This is the head of the table</td>
            </tr>
         </thead>

         <tfoot>
            <tr>
               <td colspan = "4">This is the foot of the table</td>
            </tr>
         </tfoot>

         <tbody>
            <tr>
               <td>Cell 1</td>
               <td>Cell 2</td>
               <td>Cell 3</td>
               <td>Cell 4</td>
            </tr>
         </tbody>

      </table>
   </body>

</html>
```

Demikianlah penjelasan membuat tabel. Jangan lewatkan seri [panduan belajar html](/blog/belajar-html/) kami.
