---
title: "Cara Menambahkan Gambar pada HTML"
date: 2020-10-08
slug: cara-menambahkan-gambar-html

description: "Artikel ini akan membahas bagaimana cara menambahkan gambar pada html.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Mungkin akan terasa membosankan jika sebuah halaman website tidak memiliki gambar sama sekali di dalamnya.

Hal ini akan sama terasa seperti ketika anda membaca sebuah halaman buku tanpa gambar sedikitpun.

Padahal, gambar juga dapat memudahkan kita untuk memaparkan informasi, misalnya berupa infografis.

Pada artikel kali ini saya ingin berbagi kepada anda bagaimana cara menambahkan gambar kedalam halaman html menggunakan tag `<img>`.

## Table Of Contents

## #1 Format Penulisan Tag Image

Berikut adalah format penulisan tag img:

```html

<img scr="nama_file.jpg" alt="Nama File"/>
```

**Penjelasan:**

- Atribut `src` merupakan singkatan dari source, yang mana atribut ini berguna untuk mengisikan alamat asal dari gambar yang akan ditampilkan.
- Atribut `alt` merupakan singkatan dari alternatif description, digunakan untuk menjelaskan informasi dari gambar.

Anda bisa menempatkan gambar tersebut ke dalam satu folder, yang mana gambar tersebut bisa berekstensi PNG, JPG ataupun GIF. Namun pada contoh kali ini saya menggunakan file jpg.

Sehingga, jika ditulis lengkap akan seperti berikut: 

```html
<!DOCTYPE html>
<html>
<head>
  	<title>Contoh Gambar</title>
</head>
<body>
    <img src="nama_file.jpg" alt="Nama File" />
</body>
</html>
```

Penjelasan kode:
- Tag `<img>` dengan atribut `src` yang mengambil gambar dengan nama nama_file.jpg

Seperti yang anda ketahui, bahwa tag `<img>` tidak mempunyai elemen..

..sehingga bisa langsung Anda tutup dengan />

## #2 Atribut height dan width di dalam tag <img>

Untuk menentukan panjang dan lebar gambar kita dapat menggunakan atribut `width` dan `height`.

Contoh:

```html

<img scr="nama_file.jpg" alt="Nama File" height="300" width="600"/>
```

Disini saya ingin menampilkan gambar dengan tinggi 300 pixel dan lebar 600 pixel.

Sehingga jika ditulis dalam html akan seperti berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Gambar dengan Pengaturan Lebar dan Tinggi</title>
</head>
<body>
    <img alt="keterangan gambar" src="nama_gambar.jpg" height="300" width="600" />
</body>
</html>
```

Demikian adalah ulasan tentang cara membuat image pada HTML terima kasih telah membantu. 

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

