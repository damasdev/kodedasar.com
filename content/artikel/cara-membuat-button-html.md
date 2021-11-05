---
title: "Cara Membuat Button pada HTML"
date: 2020-10-09
slug: cara-membuat-button-html

description: "Artikel ini akan membahas bagaimana cara membuat button pada html.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Kali ini saya akan membahas bagaimana cara membuat button pada HTML.

Seperti yang kita ketahui bahwa:

> Button adalah salah satu dari komponen pada html yang sering kita jumpai pada halaman website. Biasanya digunakan ketika kita ingin mengirim data dari form di HTML.

Namun selain untuk meng-submit data, ternyata button juga dapat digunakan sebagai fungsi lain yaitu mereset isian pada form yang sudah di-input oleh user.

## Table Of Contents

## Format Penulisan Button

Sebernarnya ada dua cara membuat button:

Pertama menggunakan tag `<button>`:

```html

<button type="submit">Tombol</button>
```

Sehingga akan menjadi:

```html

<!DOCTYPE html> 
<html> 
<head> 
    <title>Membuat Tombol dengan Tag Button</title>
</head>
<body>
    <button type="submit">Tombol</button>
</body>
</html>
```

Yang kedua, menggunakan tag `<input>`

```html

<input type="submit" value="Tombol"/>
```

Sehingga akan menjadi:

```html

<!DOCTYPE html> 
<html> 
<head> 
    <title>Membuat Tombol dengan Tag Input</title>
</head>
<body>
    <input type="submit" value="Tombol"/>
</body>
</html>
```

Lalu apa yang membedakan kedua tombol tersebut? Sebenarnya tidak yang berbeda dari segi fungsi, namun tag `input` menawarkan lebih banyak atribut.

Nantinya anda akan menemukan kegunaanya saat memasuki pemrograman javascript.

*(Silahkan baca: [Cara Membuat Form Input Data pada HTML](/blog/cara-membuat-form-html/))*

## Cara Membuat Tombol Reset

Seperti yang telah saya singgung sebelumnya. Button tidak hanya berfungsi untuk mengirim data namun bisa digunakan untuk mereset input pada form.

Untuk membuat tombol reset anda cukup mengubah atribut `type` dari `submit` menjadi `reset`.

**Penjelasan:**

- Submit - dikenal sebagai jenis button yang digunakan untuk melakukan submit nilai di dalam form. Nantinya akan diproses langsung ke server misalnya menggunakan bahasa pemrograman web PHP.

- Reset - berfungsi untuk mengulang atau mereset ke dalam kondisi inputan user pada sebuah form sehingga nilai yang terdapat dalam inputan tersebut akan kosong kembali.

```html

<input type="reset" value="Reset"/>
```

atau

```html

<button type="submit">Tombol</button>
```

Sebagai contoh disini kita akan membuat sebuah form login:

```html
<form>
    <input type="text" name="username"/>
    <input type="password" name="password"/>
    <input type="submit" value="Login"/> 
    <input type="reset" value="Reset"/>
</form>
```

Sehingga jika ditulis lengkap akan menjadi seperti berikut:

```html

<!DOCTYPE html>
<html>
<head>
	<title>Contoh Form Submit dan Reset</title>
</head>
<body>
	<form action="localhost/form-tujuan" method="post">
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="submit" value="Masuk"/> 
        <input type="reset" value="Reset"/>
	</form>
</body>
</html>
```

**Catatan:** anda juga bisa mengganti `input` (reset dan submit) menggunakan tag `button`.

## Cara Membuat Tombol Tidak Berfungsi 

Yang dimaksud tidak berfungi ini artinya, user tidak bisa melakukan aksi terhadap tombol tersebut.

Hal ini biasa dilakukan untuk mencegah user melakukan submit sebelum melengkapi seluruh input form.

Dalam praktiknya, nantinya masih memerlukan bantuan dari javascript.

Namun, disini saya ingin sedikit mengulas atribut pada button bernama `disabled`.

Fungsi dari pada atribut ini adalah untuk melakukan pengaturan supaya nantinya tombol bisa diklik oleh user atau sebaliknya.  

```html

<button disabled>Masuk</button>
```

Demikianlah cara membuat button pada html, semoga bermanfaat untuk anda. 

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

