---
title: "Cara Mengubah Font pada HTML"
date: 2020-10-02
slug: cara-mengubah-font-html

description: "Artikel ini membahas apa itu font dan bagaimana cara mengubah font pada html mulai dari jenis, ukuran, dan warna font disertai dengan contohnya"

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Ketika kita membuka sebuah halaman website, tak jarang kita menemukan ukuran dan bentuk huruf atau tulisan dari masing-masing website tersebut.

Lalu, bagaimana hal ini bisa terjadi?

> Font adalah jenis huruf yang ada pada sebuah dokumen

Berbagai jenis font dan bisa dipergunakan sesuai dengan desain yang diinginkan tapi memang font yang akan ditampilkan pada web browser sepertinya adalah berasal dari komputer user atau pengunjung web.  

Apabila font yang dipilih tersebut tidak standar, maka desain yang telah dirancang serapih mungkin kemungkinan akan kacau dikarenakan font  tersebut yang dipilih tadi tidak tersedia. 

Pada artikel kali ini saya ingin membahas bagaimana cara mengubah font pada html:

## Table Of Contents

## #1 Cara Mengubah Jenis Font

Agar Anda dapat menentukan jenis font dari sebuah teks html maka Anda dapat mempergunakan salah satu dari pada property CSS yaitu `font-family`. Adapun penulisannya bisa dilihat dari contoh berikut:

```css

<style type="text/css">;
    body { font-family: Arial; }
    p { font-family: Courier, monospace; }
    div { font-family: Duru Sans, Verdana, sans-serif; }
</style>
```

Seperti yang bisa anda lihat, disana terdapat nilai yang didukung oleh properti family berupa nama-nama font yang diinginkan oleh developer.  

**Contoh Penggunaan Font-Family**

Berikut adalah contoh penggunaan properti font-family dalam CSS:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mengubah Jenis Font</title>
    <style type="text/css">
        body { font-family: Calibri, Helvetica, Arial, sans-serif; }
        h3 { font-family: Cambria,"Times New Roman",serif; }
        #paragraf2 { font-family: Georgia, serif; }
    </style>
</head>
<body>
    <h3>Belajar</h3>
    <p>
        <strong>HTML & CSS</strong> Ini adalah contoh text untuk paragram pertama.
    </p>
    <p id="paragraf2">
        Ini adalah contoh paragraf kedua dengan menambagkan font yang berbeda
    </p>
</body>
</html>
```

Dari kode diatas maka akan menghasilkan  halaman program seperti gambar di bawah ini
 
Penjelasan:
- Pada tag `body` ini terdapat font-family dengan type font Calibri, Helvetica, Arial, sans-serif
- Pada tag `h3` mempunyai jenis font Cambria,"Times New Roman",serif;
- `#paragraf2 { font-family: Georgia, serif; }` – mengartikan jika id dengan nama `paragraf2` mempunyai pengaturan font-family dengan format Georgia, serif;

## #2 Cara Mengubah Warna Font

Untuk mengubah warna kita membutuhkan atribut `color`. Berikut contoh penulisannya:

```css

<style type="text/css">;
    h3 { color: red }
    p { color: blue }
</style>
```

Pada contoh diatas saya ingin meberikan beberapa warna untuk masing-masing element. Semua text yang berapa didalam tag `h3` nantinya akan berwarna merah. Sedangkan semua tulisan yang berada didalam tag `p` akan berwarna biru.

Silahkan coba kode berikut ini:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mengubah Warna Font</title>
    <style type="text/css">;
        h3 { color: red }
        p { color: blue }
    </style>
</head>
<body>
    <h3>Contoh Tulisan Warna Merah</h3>
    <p>
        <strong>Contoh Tulisan</strong> Berwarna Biru
    </p>
</body>
</html>
```

## #3 Cara Mengubah Ukuran Font

Sedangkan untuk mengubah ukuran font kita membutuhkan atribut `font-size`. Berikut contoh penulisannya:

```css

<style type="text/css">;
    h3 { font-size: red }
    p { font-size: blue }
</style>
```

Pada contoh diatas saya ingin meberikan beberapa warna untuk masing-masing element. Semua text yang berapa didalam tag `h3` nantinya akan berwarna merah. Sedangkan semua tulisan yang berada didalam tag `p` akan berwarna biru.

Silahkan coba kode berikut ini:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mengubah Warna Font</title>
    <style type="text/css">;
        h3 { font-size: 12px }
        p { font-size: 16px }
    </style>
</head>
<body>
    <h3>Contoh tulisan berukuran 12px</h3>
    <p>
        <strong>Contoh Tulisan</strong> berukuran 16px
    </p>
</body>
</html>
```

## Menarik Kesimpulan

Jadi untuk mengubah warna font kita memerlukan atribut `color`, untuk mengubah jenis font kita memerlukan atribut `font-family`, sedangkan untuk mengubah ukuran font kita mebutuhkan `font-size`.

Mari kita rangkum kode diatas menjadi contoh sebagai berikut:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Mengubah Warna Font</title>
    <style type="text/css">;
        h3 {
            font-size: 12px;
            color: red;
            font-family: Calibri, Helvetica, Arial, sans-serif;
        }
        p {
            font-size: 16px;
            color: blue;
            font-family: Cambria,"Times New Roman",serif;
        }
    </style>
</head>
<body>
    <h3>Contoh tulisan berukuran 12px berwarna merah menggunakan font calibri</h3>
    <p>
        <strong>Contoh Tulisan</strong> berukuran 16px berwarna biru menggunakan font cambria
    </p>
</body>
</html>
```

**Catatan:** dalam artikel ini saya menggunakan internal css untuk mengubah font, sebenarnya anda juga bisa menggunakan external css, maupun inline-css.

*(Silahkan Baca: [Perbedaan Internal-css, External-css, dan Inline-css](/blog/cara-menambahkan-css-html/))*

Demikian adalah ulasan tentang cara mengubah font di html semoga informasi di atas dapat  bermanfaat. Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

