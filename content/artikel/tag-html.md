---
title: "Pengertian Tag HTML dan Contohnya"
date: 2019-10-21
slug: tag-html
draft: false

description: "Berikut adalah kumpulan tag html yang wajib anda ketahui. Baca selengkapnya untuk mengetahui contoh dan fungsinya dengan penjelasan lengkap.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Hai semuanya, pada artikel ini kita akan belajar tentang tag HTML.

Bagi yang belum tahu, tag adalah text khusus (markup) yang biasanya terdiri dari pembuka dan penutup. Untuk penulisan tag pembuka adalah `<nama>` sedangkan penutup dengan `</nama>`.

Jadi perbedaan antara tag pembuka dan penutup hanya terletak pada garis miring.

Sebagai contoh perhatikan struktur html berikut ini:

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

Jadi, kita memiliki tag `html` lalu didalamnya terdapat tag `head` dan `body`.

Sebagai catatan, semua kode html harus ditulis didalam tag `html`.

Lalu, tag `head` berfungsi untuk menyimpan informasi dari sebuah halaman misalnya `title` (Judul dari sebuah Halaman) dan `meta` (pengkodean karakter UFT-8).

Sedangkan bagian tag `body` akan ditampilkan ke browser.

Dan pada contoh diatas kita memasukan tag `h1` dan `p` didalam tag `body`.

Nah, seperti yang anda lihat. Hampir semua setiap tag pembuka memiliki tag penutup (contoh: `<h1>` tulisan `</h1>`). Sebagai tips, tulislah html dengan jarak menonjol antar tag..

Fungsinya: untuk memudahkan dalam melihat struktur html yang anda tulis.

Baiklah mari kita mulai untuk mengenal beberapa tag html dasar:

## Table Of Contents

## #1 Tag Heading / Judul

Markup ini digunakan sebagai judul dari halaman atau tanda dari awal tulisan. Misalnya `<h1>` digunakan untuk judul utama, `<h2>` untuk sub judul dari judul utama dan seterusnya.

Berikut adalah contohnya:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Contoh Heading</title>
   </head>

   <body>
      <h1>Ini adalah contoh heading 1</h1>
      <h2>Ini adalah contoh heading 2</h2>
      <h3>Ini adalah contoh heading 3</h3>
      <h4>Ini adalah contoh heading 4</h4>
      <h5>Ini adalah contoh heading 5</h5>
      <h6>Ini adalah contoh heading 6</h6>
   </body>

</html>
```

Jadi kita memberi judul halaman dengan "Contoh Heading" sedangkan di dalamnya kita menulis beberapa heading dari heading 1-6 dan tentunya akan berbeda pengunaanya.

## #2 Tag Paragraph / Konten

Jika heading digunakan untuk menunjukan judul dari halaman, maka pragraf merupakan konten atau isi dari halaman web. Silahkan perhatikan contoh berikut:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Contoh Paragraf</title>
   </head>

   <body>
      <p>Ini adalah contoh paragraf pertama.</p>
      <p>Ini adalah contoh paragrad kedua.</p>
      <p>Ini adalah contoh paragraf ketiga.</p>
   </body>

</html>
```

Selalu perhatikan bahwa anda menulis konten anda diantara tag `<p>` dan `</p>`.

## #3 Tag Line Break / Ganti Baris

Jika anda memerhatikan contoh penggunaan tag `<p>` diatas, setiap kita menggunakan markup tersebut pada dasarnya kita akan memulai baris atau paragraf baru.

Lalu apa yang membedakan dengan tag `<br/>` dengan `<p>`.

Sebenarnya tag `<br/>` digunakan hanya untuk ganti baris. Sedangkan tag `<p>` benar-benar digunakan untuk mengganti paragraf untuk memudahkan memahami isi dari halaman.

Berikut adalah contoh penggunaan tag `<br/>`:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Contoh Ganti Baris</title>
   </head>

   <body>
        <p>
           Kepada Yth<br />
           Damas Amirul Karim<br />
           di Tempat.
        </p>
   </body>

</html>
```

## #4 Perbedaan Tag dan Element

**Element** - Adalah isi dari tag yang berada diantara tag pembuka dan tag penutup. Elemen tidak hanya berisi text, namun juga bisa tag lain.

Berikut adalah contoh elemen yang berisi teks:

| Tag awal | konten | Tag akhir |
| ------------- | ------------- | ------------- |
|  `<p>` |	Ini adalah konten paragraf. |  `</p>`  |
|  `<h1>` |	Ini adalah konten judul |  `</h1>` |
|  `<div>` |	Ini adalah konten pembagi |   `</div>` |

Sedangkan berikut adalah contoh elemen yang berisi tag:

```html

<!DOCTYPE html>
<html>

   <head>
      <title>Tag didalam Tag HTML</title>
   </head>

   <body>
      <h1>Ini adalah <i>italic</i> heading</h1>
      <p>Ini adalah <u>underlined</u> paragraph</p>
   </body>

</html>
```

Jadi elemen `<i>` berada dalam tag `<h1>` sedangkan elemen `<u>` berada dalam tag `<p>`.

Nah, itulah beberapa contoh penulisan tag html dasar. Tujuannya supaya anda mengetahui apa yang dimaksud dengan tag html. Jika penasaran dengan macam-macam tag html, simak:

## CRLT + F : Kumpulan Tag HTML

Bagian ini spesial bagi pelajar yang diberikan tugas oleh gurunya untuk mencari contoh tag html dan penjelasan fungsinya. Namun bagi anda yang juga penasaran, tidak masalah kok...

Semoga bermanfaat..

| Kumpulan_Tag_HTML  | Keterangan     |
| :------------- | :------------- |
| `<!-- Komentar -->` | Digunakan untuk memberi sebuah komentar atau keterangan. |
| `<!DOCTYPE >` | 	Digunakan untuk mendefinisikan informasi tipe dokumen |
|  `<a>` |	Digunakan untuk mendefinisikan sebuah anchor, intinya untuk menautkan antara satu dokumen HTML ke dokumen HTML lainnya |
| `<abbr>`	| Digunakan untuk menguraikan satu ungkapan yang disingkat dan Anda dapat memberikan informasi bermanfaat kepada penelusur-penulusur page source(halaman sumber kode) / pembaca layar, sistem terjemahan dan mesin pencari yang berasal dari singkatan yang sudah diuraikan, tetapi saat di browser uraian tersebut tidak akan tampil dan hanya sebagai informasi saja |
|  `<acronym>` |	Mendefinisikan akronim / fungsi tag ini kurang lebih sama dengan tag `<abbr>`  |
|  `<address>` |	Mendefinisikan informasi kontak untuk penulis/pemilik dokumen |
|  `<applet>` |	Digunakan untuk memasukan file java kedalam dokumen HTML |
|  `<area />` |	Mendefinisikan daerah yang dapat diklik (link) pada peta gambar |
|  `<b>` |	Membuat teks tebal |
|  `<base />` |	Mendefinisikan URL dasar/target untuk semua URL relatif dalam dokumen
| `<basefont />`  |	Membuat atribut teks default, seperti warna, ukuran, jenis font untuk semua teks dalam dokumen |
|  `<bdo>` |	Digunakan untuk menimpa arah teks |
| `<big>` |	Memperbesar ukuran teks sebesar satu point dari defaultnya  |
|  `<blink>` |	Membuat teks berkedip |
|  `<blockquote>` |	Mendefinisikan sebuah kutipan panjang. Pada saat di browser teks akan tampil menjorok kedalam |
|  `<body>` |	Mendefinisikan body/isi dokumen HTML, berfungsi untuk menentukan bagaimana isi suatu dokumen ditampilkan di web browsernya. Isi dokumen tersebut dapat berupa teks, gambar, animas, link dan seterusnya |
|  `<br />` |	Memberi baris baru/pindah baris |
|  `<button>` |	Mendefinisikan sebuah tombol diklik |
|  `<caption>` |	Membuat caption pada tabel |
|  `<center>` |	Untuk perataan tengah terhadap teks atau gambar |
|   `<cite>`|	Mendefinisikan kutipan |
|  `<code>` |	Mendefinisikan sebuah bagian dari kode komputer |
|  `<col />` |	Mendefinisikan nilai atribut dari satu kolom atau lebih dalam sebuah tabel |
|  `<colgroup>` |	Menentukan kelompok dari satu kolom atau lebih dalam sebuah tabel untuk performatan |
|  `<dd>` |	Mendefinisikan deskripsi dari item dalam daftar definisi |
|  `<del>` |	Untuk memberi garis tengah pada teks/mencoret teks |
|  `<dfn>` |Mendefinisikan sebuah istilah definisi |
|  `<dir>` |	Mendefinisikan sebuah daftar direktori |
|  `<div>` |	Mendefinisikan sebuah section dalam dokumen |
|  `<dl>` |	Mendefinisikan sebuah daftar definisi |
|  `<dt>` |	Mendefinisikan istilah (item) dalam daftar definisi |
|  `<em>` |	Membuat teks miring. Fungsi tag ini sama dengan tag `<i>` tetapi tag `<em>` yang lebih dianjurkan/ditekankan pada penggunaan untuk teks miring |
|  `<embed>` |	Digunakan untuk memasukkan file video atau file musik |
|  `<fieldset>` |	Untuk mengelompokkan elemen-elemen yang terkait dalam form / membuat seperti frame-box di dalam form |
|  `<font>` |	Mendefinisikan jenis font, warna dan ukuran untuk teks |
|  `<form>` |	Mendefinisikan sebuah form HTML untuk input form |
|  `<frame />` |	Mendefinisikan frame dalam fremeset |
|  `<frameset>` |	Mendefinisikan satu set frame |
| `<h1> to <h6>`|	Digunakan untuk menunjukkan awal dari suatu header/judul dari dokumen HTML tersebut. |
| `<head>`|	Digunakan untuk memberikan informasi tentang dokumen tersebut |
|  `<hr />` |	Membuat garis horisontal |
| `<html>`|	Mendefinisikan root dari suatu dokumen HTML |
|  `<i>` |	Membuat teks miring |
|`<iframe>`|	Mendefinisikan sebuah inline frame |
| `<img />` |	Berfungsi untuk menampilkan gambar pada dokumen HTML |
| `<input />` |	Mendefinisikan input field pada form |
| `<ins>` | 	Membuat teks bergaris bawah |
|  `<kbd>` |	Mendefinisikan teks yang di input dari keyboard |
|  `<label>` |	Mendefinisikan label untuk sebuah elemen `<input>` |
| `<legend>` |	Mendefinisikan sebuah caption untuk elemen `<fieldset>` |
|  `<li>` |	Digunakan untuk menampilkan informasi dalam bentuk item daftar |
| `<link />`  |	Mendefinisikan hubungan antara dokumen dan sumber eksternalnya |
|  `<listing>` |	Fungsi tag ini sama dengan tag `<pre>` dan dianjurkan menggunakan tag `<pre>` karena tag `<listing>` tidak layak/diprotes |
|  `<map>` |	Mendefinisikan client-side peta gambar |
|  `<marquee>` | 	Membuat teks berjalan secara vertikal atau horisontal |
|  `<menu>` |	Mendefinisikan sebuah daftar menu |
|  `<meta />` |	Mendefinisikan metadata tentang sebuah dokumen HTML |
|  `<nobr>` |	Mencegah ganti baris pada teks atau gambar |
|  `<noframes>` |	Jika browser user tidak mendukung frame |
|  `<noscript>` |	Jika browser user tidak mendukung client-side scripts |
| `<object>` |	meletakkan embed sebuah objek |
|  `<ol>` |	Mendefinisikan daftar dalam format penomoran |
|  `<optgroup>` |	Menampilkan beberapa pilihan yang sudah dikelompokkan dalam bentuk sebuah daftar drop-down |
|  `<option>` |	Menampilkan beberapa pilihan yang berbentuk dalam sebuah daftar drop-down |
|  `<p>` |	Membuat sebuah paragraf |
|  `<param />` |	Mendefinisikan sebuah parameter untuk objek |
|  `<pre>` |	Membuat teks dengan ukuran huruf yang sama |
|  `<q>` |	Mendefinisikan sebuah kutipan singkat |
|  `<s>` |	Untuk memberi garis tengah pada teks/mencoret teks, fungsi tag ini sama dengan tag `<del>` tetapi tag `<s>` tidak dianjurkan sebagai gantinya menggunakan tag `<del>` |
|  `<samp>` |	Mendefinisikan contoh keluaran dari program komputer |
|  `<script>` |	Mendefinisikan client-side script |
|   `<select>` |	Membuat daftar drop-down |
|  `<small>` |	Memperkecil ukuran teks dari ukuran defaultnya |
|  `<span>` |	Mendefinisikan sebuah section dalam dokumen |
|  `<strike>` |	Untuk memberi garis tengah pada teks/mencoret teks, fungsi tag ini sama dengan tag `<del>` |
|`<strong>`|	Membuat teks tebal, fungsi tag ini sama dengan tag `<b>` |
|  `<style>` |	Mendefinisikan informasi style untuk dokumen HTML |
|`<sub>`|	Memberikan efek subscript pada teks|
| `<sup>`|	Memberikan efek superscript pada teks |
|  `<table>` |	Membuat tabel |
|  `<tbody>` |	Untuk mengelompokkan isi body di dalam sebuah tabel |
|  `<td>` |	Mendefinisikan sel di dalam sebuah tabel |
|  `<textarea>` |	Mendefinisikan sebuah kontrol input multiline |
|  `<tfoot>` |	Untuk mengelompokkan isi footer di dalam sebuah tabel |
| `<th>` |	Mendefinisikan sel header di dalam  sebuah tabel |
|  `<thead>` |	Untuk mengelompokkan isi header di dalam sebuah tabel |
| `<title>`|	Membuat judul untuk dokumen HTML |
| `<tr>` |	Membuat baris di dalam sebuah tabel |
| `<tt>` |	Mendefinisikan teletype text |
| `<u>` |	Membuat teks bergaris bawah, fungsi tag ini sama dengan tag `<ins>` tetapi tag `<u>` tidak dianjurkan untuk kategori HTML text formatting melainkan termasuk kategori HTML Style |
|  `<ul>` |	Mendefinisikan daftar dalam format bullet |
| `<var>`|	Mendefinisikan sebuah variabel |
| `<xmp>` |	Mendefinisikan preformatted text, fungsi tag ini sama dengan tag `<pre>`|

Demikianlah kumpulan tag HTML disertai dengan penjelasannya.

Materi Referensi:

```

Adi Wijaya Kusuma - http://komputerdynamic.blogspot.com/2014/12/macam-macam-tag-html-dan-fungsinya.html
```

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.
