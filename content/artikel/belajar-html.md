---
title: "Belajar HTML Lengkap untuk Pemula dari A-Z"
date: 2019-10-18
slug: belajar-html

description: "Seri panduan belajar HTML lengkap untuk pemula mulai dari A sampai Z. Tutorial ini berdasarkan pengalaman saya pribadi sebelum masuk dunia pemrograman web."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Selamat datang di seri panduan belajar HTML. Meskipun HTML bukan bahasa pemrograman, namun html menjadi dasar yang wajib anda kuasai sebelum memasuki Pemrograman Web.

Karena, html berfungsi untuk menyusun kerangka halaman web yang akan anda buat.

Namun, sebelum membahas lebih lanjut akan lebih baik jika anda mengetahui apa yang dimaksud dengan html terlebih dahulu. Berikut merupakan pengertian dari HTML:

>HTML atau *Hyper-Text Markup Language* merupakan sebuah bahasa markah yang digunakan untuk membuat sebuah halaman website.

Jadi intinya kita membutuhkan HTML untuk menyusun element website.

**Sebagai catatan:** Modul ini akan berbeda dengan lainnya karena tutorial ini saya buat berdasarkan pengalaman pribadi dalam belajar HTML.

Jadi disini saya hanya akan mengajarkan hal-hal penting dari HTML supaya anda bisa dengan cepat memahami penulisan kode html. Dan nantinya kita akan mengenal beberapa tag HTML5.

Untuk anda yang belum tahu apa itu HTML5:

Sebenarnya HTML sudah mengalami banyak pembaharuan sejak pertama kali dibuat pada tahun 1990 oleh *Tim Berners-Lee*. Sedangkan versi terbaru saat ini adalah HTML5.

HTML5 menjadi bahasa markup primadona saat ini dan telah memiliki penambahan banyak fitur dari HTML biasa serta menghilangkan beberapa kekakuan yang ada pada XHTML.

Perbedaan utama antara HTML dan HTML5 dapat anda temukan pada fitur audio atau video.

## Table Of Contents

## #1 Persiapan Awal - Text Editor

Hal pertama yang anda butuhkan untuk mempelajari HTML adalah sebuah text editor. Karena, nantinya kita akan menulis kode didalamnya dan memyimpannya dalam ekstensi **.html**

Silahkan download dan install terlebih dahulu program yang dibutuhkan.

Sebagai informasi, Text editor yang saya pakai adalah **Sublime Text 3** karena super ringan. Namun anda juga bisa menggunakan text editor lainnya seperti **VS Code** dan **Atom**.

Jika semuanya sudah siap, mari kita mulai masuk ke html.

## #2 Istilah dalam HTML

Hal pertama yang wajib anda ketahui adalah istilah dalam HTML.

Untuk membantu pemahaman anda dalam belajar HTML maka disini saya akan menjelaskan beberapa  hal penting mengenai istilah paling dasar yang wajib anda ketahui:

- **Tag** - Adalah teks khusus (markup) yang berupa suatu pasangan yang terdiri 2 bagian yang disebut tag awal (bentuknya: `<nama tag>`) dan tag akhir (bentuknya: `</nama tag>`).

- **Element** - Adalah isi dari tag yang berada diantara tag pembuka dan tag penutup. Elemen tidak hanya berisi text, namun juga bisa tag lain.

- **Atribut** - adalah informasi tambahan yang diberikan kepada tag (contoh: `charset="utf-8"`). Informasi ini
bisa berupa instruksi untuk warna dari text, besar huruf dari text.

- **Komentar** - HTML juga memiliki komentar yang dapat digunakan untuk menjelaskan bagian-bagian dari isi web dokumen. Cara penulisannya: `<!-- Isi komentar -->`

Jangan dihafal, namun cukup dipahami dengan seksama.

## #3 Aturan Penulisan HTML

Setelah anda memahami beberapa istilah pada html kini saatnya anda mengetahui bagaimana cara penulisannya. Apakah anda sudah siap? Mari kita mulai..

Dokumen HTML disusun oleh elemen-elemen seperti : `head`, `body`, `table`, `paragraf` dan `list`. Dan untuk menandai berbagai elemen dalam suatu dokumen HTML, kita menggunakan tag.

Biasanya penulisan elemen terdiri dari tag **pembuka, konten**, dan tag **penutup**.

Berikut adalah struktur elemen HTML:

```html

<Tag_Pembuka> Konten </Tag_Penutup>
```

**Catatan:** Perbedaan kedua tag tersebut hanya pada tanda garis miring di tag penutup.

## #4 Struktur Penulisan HTML

Berikut merupakan elemen dasar dari HTML:

```html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Judul Halaman Website</title>
  </head>
  <body>
    <p>Konten Halaman</p>
  </body>
</html>
```

Berikut penjelasannya:

- **`<!DOCTYPE html>`** – Merupakan deklarasi dari type dokumen HTML5.

- **`<html></html>`** – Semua elemen html harus ditulis didalam tag `html` (Elemen Utama).

- **`<head></head>`** – Element ini berfungsi untuk memasukkan konten informasi halaman. Konten tersebut dapat berupa keyword, deskripsi, CSS, judul, dan lain-lain.

- **`<meta charset=”utf-8″>`** – Berfungsi untuk memberitahu browser mengenai pengkodean karakter yang sesuai dengan ketentuan UTF-8.

- **`<title></title>`** – Merupakan judul dari halaman yang muncul pada bagian tab browser.

- **`<body></body>`** – Berisi konten yang ditampilkan pada browser ketika pengunjung mengakes halaman tersebut, contohnya seperti artikel yang sedang Anda baca saat ini.

**Intinya:** Kita akan menulis semua konten dan elemen htmlnya di dalam tag `body`.

## #5 Hello World HTML

Sebagai pemanasan, silahkan buka text editor anda dan ketikan kode berikut:

```html

<!DOCTYPE html>
<html lang="id" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Selamat Belajar HTML</title>
  </head>
  <body>
    <h1>Belajar HTML</h1>
    <p>Hai semuanya, nama saya Damas dari Kodedasar.com</p>
  </body>
</html>
```

Lalu simpan file dengan nama `hello.html`.

Terakhir, buka file tersebut dengan menggunakan browser.

Sekarang tugas anda adalah: menulis kembali dan simpan kode diatas dengan ekstensi `.html` lalu buka file tersebut menggunakan browser untuk melihat hasilnya.

## #6 Materi Panduan Belajar HTML

Untuk memudahkan panduan belajar html ini, disini saya akan membuat daftar isi halaman:

**Dasar**

- **Tag HTML** - [Pengertian Tag HTML Lengkap dengan Penjelasan dan Fungsinya](/blog/tag-html/)
- **Atribut HTML** - [Pengertian Atribut HTML dan Fungsinya](/blog/atribut-html/)

**Menengah**

- **Tabel HTML** - [Cara Mudah Membuat Tabel HTML Menggunakan Text Editor](/blog/tabel-html/)
- **Form HTML** - [Cara Membuat Form Input Data pada HTML](/blog/cara-membuat-form-html/)
- **Link HTML** - [Cara Membuat Link pada HTML](/blog/cara-membuat-link-html/)
- **Gambar HTML** - [Cara Menambahkan Gambar pada HTML](/blog/cara-menambahkan-gambar-html/)
- **List HTML** - [Cara Membuat List pada HTML](/blog/cara-membuat-list-html/)

**Lanjut**

- **CSS HTML** - [Cara Menambahkan Csspada HTML](/blog/cara-menambahkan-css-html/)
- **Font HTML** - [Cara Mengubah Font pada HTML](/blog/cara-mengubah-font-html/)
- **Background HTML** - [Cara Mengubah Background pada HTML](/blog/cara-mengubah-background-html/)
- **Tulisan Bergerak HTML** - [Cara Membuat Tulisan Bergerak pada HTML](/blog/cara-membuat-tulisan-bergerak-html/)

## Tambahan: Pemformatan Text

Setelah anda berhasil membuat file `html`, kini saatnya anda mengenal beberapa tag html yang digunakan untuk melakukan pemformatan text atau tulisan.

Berikut adalah beberapa tag yang dimaksud:

| Tag Awal | Keterangan |
| :------------- | :------------- |
| `<b>` atau `<strong>`       | Mendefinisikan teks yang ditebalkan.       |
| `<big>`   |  Mendefinisikan teks yang besar ukurannya. |
| `<em>` | Mendefinisikan teks yang ditekankan – emphasis |
| `<i>` | Mendefinisikan teks yang dimiringkan – Italic |
| `<small>` | Mendefinisikan teks yang kecil ukurannya |
| `<sub>`  | Mendefinisikan teks yang dijadikan subscript.  |
| `<sup>` |  Mendefinisikan teks yang dijadikan superscript. |
|  `<u>` | Mendefinisikan teks yang digaris bawahi – Underline  |
| `<s>`  | Mendefinisikan teks yang di coret – strikethrough  |
|  `<mark>` | Membuat teks yang di highlight |
|  `<dfn>` |  Menyatakan suatu definisi – Definition  |
| `<cite>`  |  Menyatakan suatu kutipan – Citation |

Dan berikut adalah contoh penulisannya dalam HTML:

```html

<!DOCTYPE html>
<html lang="id" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>FORMAT TULISAN</title>
  </head>
  <body>
    <h1>Belajar HTML</h1>
    <p>Hai <s>semuanya</s>, nama saya <b>Damas</b> dari <i>Kodedasar.com</i> </p>
  </body>
</html>
```
Silahkan anda coba praktikan beberapa tag diatas dan temukan bagaimana penggunaannya.

**Catatan:** Halaman ini akan terus saya update.
