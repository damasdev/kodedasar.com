---
title: "Cara Membuat Tulisan Bergerak pada HTML"
date: 2020-10-05
slug: cara-membuat-tulisan-bergerak-html

description: "Apakah anda pernah melihat tulisan bergerak di sebuah website? Pada artikel kali ini saya akan membahas bagaimana cara membuat tulisan bergerak menggunakan html"

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Anda tentunya pernah melihat teks berjalan atau yang disebut running text di layar televisi..

..biasanya akan muncul di bawah layar pada saat acara berita mulai. 

Namun, teks berjalan ini juga banyak dipergunakan di website. 

Dalam artikel ini saya akan membahas bagaimana cara membuat tulisan bergerak menggunakan html:

Untuk membuat tulisan berjalan anda dapat menggunakan elemen khusus dari alternator atau yang biasa disebut dengan marquee. Format penulisannya sendiri sebagai berikut:

```html

<marquee> Isi pesan dari tulisan berjalan </marque>
``` 

## Table Of Contents

## #1 Teks Berjalan

Untuk mengatur arah teks berjalan anda bisa menambahkan atribut `direction`.

Sehingga akan terlihat seperti kode berikut ini:

```html
<!DOCTYPE html>
<html>
<head>
    <title> contoh teks berjalan </title>
</head>
<body>
    <marquee direction='right'> ini merupakan teks berjalan kekanan</marquee>
    <marquee direction='left'> ini merupakan teks berjalan kekiri</marquee>
<body>
<html>
```
 
Teks berjalan juga bisa Anda buat ke kanan dan juga ke kiri dengan menggunakan kode `direction=”right”` jika ke kanan dan menggunakan `direction=”left”` Jika Anda ingin mengarahkannya ke kiri.  

## #2 Teks berjalan memantul

Selain mengatur kemana arah tulisan berjalan, anda juga dapat menambahkan efek pantulan ketika text sudah mencapai ujung menggunakan atribut `behavior='alternate'`, yang mana pantulannya nanti ke kanan dan ke kiri.

Berikut adalah kodenya:

```html

<!DOCTYPE html>
<html>
<head>
    <title> Contoh tulisan bergerak memantul </title>
</head>
<body>
    <marquee behavior='alternate'> teks memantul </marquee>
<body>
<html>
```
 
**Penjelasan:** Teks akan berjalan dari kanan ke kiri, dan jika telah sampai ke sisi kiri maka akan memantulkannya kembali.

## #3 Teks berjalan stop

Pada teks berjalan ini nantinya teks akan berjalan sampai dengan ujung kemudian berhenti secara otomatis dengan mempergunakan `behavior='slide'`.

Berikut adalah kode lengkapnya:

```html
<!DOCTYPE html>
<html>
<head>
    <title> contoh slide</title>
</head>
<body>
    <marquee behavior='slide'> teks berjalan dan stop</marquee>
<body>
<html>
```

## #4 Teks berjalan dengan lambat

Selain `direction` dan `behavior` anda juga dapat mengatur kecepatan teks dalam bergerak menggunakan atribut `scrolldelay`.

Perhatikan contoh berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title> contoh teks berjalan </title>
</head>
<body>
    <marquee scrolldelay='300'> teks ini berjalan dengan kecepatan 300 mili detik</marquee>
<body>
<html>
```

**Penjelasan**: Apabila Anda tidak begitu suka dengan teks yang berjalan cepat maka bisa Anda kurangi kecepatan tersebut, dengan menggunakan mode `scrolldelay='kecepatan yang anda inginkan'`,  semakin tinggi angka yang dimasukkan maka Anda akan membuat text semakin lama juga berjalannya.  

## #5 Teks berjalan dengan menggunakan background warna

Dan terakhir anda juga bisa menambahkan background warna pada tulisan berjalan dengan atribut `bgcolor`.

```html
<!DOCTYPE html>
<html>
<head>
    <title> contoh teks berjalan </title>
</head>
<body>
    <marquee bgcolor='yellow'> Teks ini yang berjalan </marquee>
<body>
<html>
```

Demikian adalah ulasan tentang cara membuat tulisan bergerak di html. Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

