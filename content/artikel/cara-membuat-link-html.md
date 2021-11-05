---
title: "Cara Membuat Link pada HTML"
date: 2020-10-06
slug: cara-membuat-link-html

description: "Artikel ini akan membahas bagaimana cara menyisipkan link menggunakan html kedalam halaman web untuk menghubungkan satu halaman ke halaman lainnya"

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Seperti yang kita ketahui bahwa:

> Link adalah sebuah elemen di dalam HTML yang menjadi tujuan dari kata hiperteks yang berasal dari HTML. 

Dengan kata lain, link berfungsi untuk menghubungkan satu halaman ke halaman lainnya.

Namun, bagaimana cara membuat link tersebut? Pada artikel kali ini saya akan membahas bagaimana cara menyisipkan link menggunakan html kedalam halaman web.

## Table Of Contents

## #1 Cara membuat link di HTML

Untuk membuat link kita memerlukan tag `<a>` seperti berikut:

```html

<a href="https://www.kodedasar.com">Kode Dasar. com</a>
```

Atau jika ditulis lebih lengkap akan seperti berikut:

```html
<!DOCTYPE html>
<html>
<head>
  	<title>praktik tag link </title>
</head>
<body>
    <h1>Contoh Memasang Link</h1>
    <p>Untuk belajar web programming silahkan <a href="https://www.kodedasar.com">klik disini</a></p>
</body>
</html>
```

Nantiknya ketika anda mengklik tautan tersebut maka anda akan diarahkan ke halaman web kodedasar.com.
 
Keterangan:
- Tag `<a>` merupakan singkatan dari cari anchor atau jangkar
- Sedangkan `href` sendiri merupakan singkatan dari *hypertext reference*.

## #2 Alamat Absolut dan Alamat Relatif

Apa yang dimaksud dengan alamat absolut?

> Alamat Absolut sendiri merupakan sebuah tata cara penulisan alamat email yang mana nama website yang dituju dituliskan di dalamnya.

Sebagai contoh adalah:

```html

<a href="https://kodedasar.com/belajar-html/">Belajar HTML</a>
```

Jika dilihat dari contoh di atas.. 

..ketika anda menuliskan alamat link secara lengkap dengan bagian `http://` maka disebut absolut. 

Namun, jika link yang dituju merupakan situs yang sama maka anda tidak perlu menuliskan link secara lengkap. Anda cukup mencantumkan alamat file yang dituju relatif kepada file yang ada.

Contoh:

```html

<a href="/belajar-html/">
```

Adapun jenis alamat ini disebut dengan alamat relatif.

## #3 Atribut target _blank

Bisa dibilang jika ini merupakan atribut penting yang lainnya.

Atribut target biasanya dipergunakan oleh seorang developer untuk dapat menentukan apa link yang ditutup tersebut memang bisa dibuka di jendela browser saat ini atau kah dibuka di jendela yang baru.

Jika dilihat memang secara default nya link-link yang ada tersebut ditulis nantinya akan terbuka pada jendela yang sama. 

Jadi akan menimpa pada halaman web yang ada saat ini. 

Sebagai contoh adalah sebagai berikut:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Link menggunakan target _blank</title>
</head>
<body>
    <p><a href="https://www.kodedasar.com" target="_blank">klik disini</a> untuk membuka tab baru</p>
</body>
</html>
```
 
Penggunaan atribut ini (`target="_blank"`) memungkinkan anda untuk membuka tab baru kita mengklik link tersebut. Demikian adalah ulasan tentang cara membuat link html, semoga informasi diatas dapat bermanfaat. 

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

