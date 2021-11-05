---
title: "Cara Membuat List pada HTML"
date: 2020-10-10
slug: cara-membuat-list-html

description: "Artikel ini akan membahas bagaimana cara membuat button pada html.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Pada kesempatan kali ini saya akan membahas bagaimana cara membuat list pada html.

Namun sebelum memulai pembahasan, ada baiknya kita mengetaui apa itu list:

> List atau yang biasa kita sebut dengan daftar berurutan adalah salah satu struktur html yang digunakan untuk menyajikan data secara berurutan dari atas ke bawah dalam bentuk daftar. 

Sedangkan, salah satu penerapan dari list sendiri yaitu daftar isi konten.
## Table Of Contents

## Macam-Macam List pada HTML

Pada dasarnya ada tiga macam list pada html, yaitu:

- Ordered List adalah list yang terurut (tag `<ol>`)

- Unordered List adalah list yang tak terurut (tag `<ul>`)

- dan Description List adalah list yang berisi definisi. (tag `<dl>`)

Lalu apa perbedaanya?

Mari kita bahas lebih lanjut...

## #1 Ordered List

Untuk membuat ordered list kita akan menggunakan tag `<ol>`. 

Lalu didalamnya kita membutuhkan tag `<li>` sebagai item-item yang ada didalam list tersebut.

Berikut format penulisan ordered list pada html:

```html

<ol>
  <li>Item Pertama</li>
  <li>Item Kedua</li>
  <li>dan Seterusnya</li>
</ol>
```

Silahkan perhatikan contoh berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Membuat Ordered List</title>
</head>
<body>
  <ol>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Java</li>
  </ol>
</body>
</html>
```

List diatas akan diurutkan berdasarkan angka `1` hingga `3`. 

Namun anda bisa menambahkan atribut `type` pada tag `ol` untuk mengubahnya:

- `a` untuk alfabet a, b, c, dan seterusnya;
- `A` untuk alfabet A, B, C, dan seterusnya;
- `i` untuk angka romwari i, ii, iii, dan seterusnya;
- `I` untuk angka romwari I, II, III, dan seterusnya.

Contoh:

```html

<ol type="a">
  <li>Javascript</li>
  <li>Python</li>
</ol>
```

## #2 Unordered List

> Unordered list adalah list yang tak terurut yang menggunakan simbol-simbol pada item-nya. 

Untuk membuat Unordered list kita membutuhkan tag `<ul>` dan untuk item-nya menggunakan tag `<li>`.

Berikut format penulisannya:

```html

<ul>
  <li>Item Pertama</li>
  <li>Item Kedua</li>
  <li>Item Selanjutnya</li>
</ul>
```

Sehingga jika kita tulis kedalam html akan seperti berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Membuat Unordered List</title>
</head>
<body>
  <ul>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Java</li>
    <li>Python</li>
  </ul>
</body>
</html>
```

Secara default simbol yang digunakan oleh unordered list adalah lingkaran kecil (disc)..

..namun kita bisa menggantinya dengan atribut `type`.

Berikut ini nilai yang bisa diberikan untuk atribut `type`:

- `square` untuk simbol persegi;
- `disc` (default) untuk simbol lingkaran disc;
- `none` tidak memakai simbol;
- `circle` untuk simbol lingkaran;

Contoh:

```html

<ol type="square">
  <li>PHP</li>
  <li>Java</li>
</ol>
```

## #3 Description List

> Description List adalah list yang berisi deksripsi atau penjelasan dari sesuatu.

Ada tiga tag yang digunakan untuk membuat description list:

- `<dl>` (description list) tag untuk memulai description list;
- `<dt>` (description term) tag untuk membuat kata yang akan dideskripsikan;
- `<dd>` (description description) tag untuk membuat penjelasan dari kata.

Format penulisannya seperti ini:

```html

<dl>
  <dt>Kata 1</dt>
  <dd>Deskripsi dari Kata 1</dd>
  <dt>Kata 2</dt>
  <dd>Deskripsi dari Kata 2</dd>
</dl>
```

Sehingga jika ditulis dalam html akan sepeti contoh berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Membuat Unordered List</title>
</head>
<body>
  <dl>
    <dt>Java</dt>
    <dd>Java adalah Bahasa pemrograman turunan dari Bahasa C</dd>
    <dt>Flutter</dt>
    <dd>Flutter adalah Bahasa pemrograman turunan dari Bahasa Dart</dd>
  </dl>
</body>
</html>
```

## Tambahan: Nested List

Sedikit tambahan, yang dimaksud dari nested list adalah:

..kita analogikan ingin membuat daftar isi dari sebuah buku.

```html

<!DOCTYPE html>
<html>
<head>
    <title>Membuat Unordered List</title>
</head>
<body>
  <ol>
    <li>Bahasa C
      <ul>
        <li>Bahasa C++</li>
        <li>Bahasa C#</li>
        <li>Bahasa Java</li>
      </ul>
    </li>
    <li>Dart
      <ul>
        <li>Flutter</li>
      </ul>
    </li>
  <ol>
</body>
</html>
```

## Penutup

Dalam praktiknya, penggunaan tag list di dalam html sendiri tidak hanya digunakan untuk membuat daftar saja..

..namun bisa juga digunakan sebagai navigasi.

Demikian informasi terkait cara membuat list html semoga informasi diatas bermanfaat 

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

