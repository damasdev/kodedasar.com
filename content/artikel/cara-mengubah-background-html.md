---
title: "Cara Mengubah Background pada HTML"
date: 2020-10-07
slug: cara-mengubah-background-html

description: "Artikel ini akan membahas bagaimana cara mengubah background pada html dengan menambahkan warna maupun gambar pilihan.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Background adalah salah satu dari elemen terpenting yang harus diperhatikan oleh pemilik website agar tampilan website tersebut menjadi lebih menarik atau nyaman dilihat.

Pada artikel kali ini saya akan membahas tentang background dan bagaimana cara mengubahnya pada file html.

Untuk dapat mengganti background dari sebuah dokumen html maka anda bisa melakukannya dengan berbagai cara misalnya dengan mengubah warna ataupun menabahkan gambar.

## Table Of Contents

## #1 Mengubah Background dengan Warna

Untuk mengubah warna background kita akan menggunakan atribut `background-color`.

```html

<style type="text/css">
    body {
        background-color: yellow;
    }
</style>
```

Perhatikan contoh berikut:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Background Warna</title>
    <style> 
        body {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <!-- konten halaman -->
</body>
</html>
```

Pada contoh diatas kita mencoba untuk mengubah warna background dari body dengan warna kuning.

## #2 Mengubah Background dengan Gambar

Sedangkan untuk mengubah background dengan gambar menggunakan atribut `background-image`.

```html

<style type="text/css">
    body {
        background-image: url("nama_gambar.jpg");
    }
</style>
```

Untuk mengatur gambar anda bisa menambahkan beberapa atribut berikut:
- `background-repeat` : untuk mengatur jenis pengulangan gambar jika layar lebih lebar dari gambar.
- `background-position` : untuk mengatur tata letak gambar (top/left/right/bottom/center).
- `background-size` : untuk mengatur ukuran gambar. (auto/contain/cover).

Silahkan lakukan percobaan agar anda mengetahui perbedaanya.

Perhatikan contoh berikut:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh Background Warna</title>
    <style> 
        body {
            background-image: url("nama_gambar.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    </style>
</head>
<body>
    <!-- konten halaman -->
</body>
</html>
```

Demikian adalah ulasan tentang cara merubah background HTML semoga informasi diatas bermanfaat. Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

