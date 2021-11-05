---
title: "Cara Menambahkan CSS pada HTML"
date: 2020-10-04
slug: cara-menambahkan-css-html

description: "Artikel ini membahas bagaimana cara menambahkan css pada html dan perbedaan atara inline-css, internal-css, dan external-css beserta contohnya"

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Sampai dengan saat ini terdapat dua teknologi utama yang dipergunakan untuk dapat membuat halaman web yaitu CSS dan HTML.

Kedua elemen ini memegang peranan yang berbeda tapi tidak terpisahkan dalam pembuatan laman web modern.

Pada sebuah halaman web, HTML memiliki peranan sebagai tipe dan struktur konten. Misalnya saja heading, paragraf, list dan lain sebagainya.

Sedangkan CSS sendiri lebih ke dalam penyajian konten dan struktur supaya lebih menarik lagi seperti layaknya layout,  `color`, `padding`, `margin`,  `alignment` dan `font-family`.

*(Silahkan baca: [Cara Mengubah Font pada HTML](/blog/cara-mengubah-font-html/))*

Tanpa mempergunakan CSS maka Anda tentunya masih bisa menyajikan konten di laman web..

..tapi dengan tampilan yang kurang menarik.

Jadi, secara sederhana HTML dapat kita analogikan sebagai kerangka atau tubuh manusia. Sedangkan CSS dapat kita analogikan seperti make up atau pakaian kita.

CSS memang telah sengaja di desain untuk dapat dipergunakan dengan bahasa markup HTML. Terdapat tiga cara cara yang berbeda ketika menggunakan CSS dengan html yaitu Inline CSS, internal CSS,  dan external CSS.

## Table Of Contents

## #1 Inline CSS

Pegertian dari Inline-css:

>Inline CSS merupakan CSS yang dipergunakan untuk memberikan gaya atau style pada elemen atau tag elemen html tertentu.  

Anda bisa mempergunakan atribut `style` untuk dapat memberi style pada tag HTML.

Style yang terdapat di dalam Inline CSS sendiri mempunyai prioritas yang paling utama dan bisa dipergunakan atau rendering walaupun tag html tersebut nantinya telah diberi style melalui internal CSS ataupun external CSS nya.  

Penggunaan dari pada metode ini sebenarnya tidak begitu direkomendasikan karena setiap tag html harus diberi stylenya sendiri-sendiri.

Sebagai contoh adalah di bawah ini:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Inline Css</title>
</head>
<body style='background-color:yellow'>
    <h2 style='color:red'>Contoh Heading Warna Merah</h2>
    <p style='color:blue'>Ini adalah contoh text berwarna biru menggunakan style color blue</p>
</body>
</html>
```
 
Penjelasan:
-	`style='background-color:yellow'` – dipergunakan untuk mengubah warna background pada `body`
-	`style='color:red'` - dipergunakan untuk mengubah warna font menjadi merah pada heading
-	`style='color:blue'` - dipergunakan untuk mengubah warna font paragraf menjadi biru pada paragraf

## #2 Internal CSS

Pegertian dari Internal-css:

>Internal CSS adalah kode CSS yang ditulis di dalam tag `<style>` dan kode HTML dituliskan di bagian atas (header) file HTML.

Style  yang diberikan nantinya diletakkan di bagian elemen head atau tag `<head>` yang ada di halaman web.

Kelebihan dari internal css dibanding inline-css adalah, pemberian style akan bekerja pada seluruh element dalam halaman tersebut dan tidak terbatas pada masing-masing tag seperti inline-css.

Anda bisa menggunakan internal CSS jika kode untuk style tersebut tidak terlalu besar atau kompleks.

Contoh: 

```html
<!DOCTYPE html>
<html>
<head>
   <style type="text/css">
        body {background-color:blue;}
        h2 {color:black;}
        p {color:green;}
   </style>
</head>
<body>
    <h2>Contoh heading</h2>
    <p>Contoh paragraf</p>
</body>
</html>
```

Penjelasan: 
- `<style type="text/css">` - menjelaskan bahwa ini merupakan deklarasi css
- `body {background-color:blue;}` – mengartikan jika warna background diganti menjadi biru
- `h2 {color:black;}` – mengartikan font h2 dengan warna hitam
- `p {color:green;}` – mengganti warna font dengan warna hijau
- `<p></p>` - untuk mendeklarasikan teks paragraf

## #3 External CSS

Pegertian dari External-css:

> External CSS ini merupakan file ekstensi .css  yang berisikan kode-kode style dengan tujuan penggunaannya adalah untuk memisahkan kode style dengan struktur dan tipe content halaman web.

Cara ini lebih sederhana dan simpel daripada menambahkan kode CSS di setiap elemen HTML yang ingin Anda atur tampilannya. 

Sebagai contoh saya membuat file CSS dengan nama style.css berikut isi kode style.css.

```css
body {background-color:yellow;}
h2 {color:red;}
p {color:blue;}
```

Kemudian untuk menggunakan file style.css dalam HTML, Anda perlu menambahkannya ke dalam file HTML. Dengan menggunakan tag `<link>` berikut contohnya.

```html

<link rel="stylesheet" type="text/css" href="style.css">
```

## Menarik Kesimpulan

Setiap metode penulisan kode CSS memiliki kelebihan, kekurangan, serta manfaatnya yang berbeda-beda.

Untuk itu, disini saya akan merangkum sedikit untuk anda:

**Kelebihan Inline Css**
- Mudah dan cepat dalam penerapan kode

**Kekurangan Inline Css**
- Tidak efisien karena Inline CSS hanya bisa diterapkan pada satu elemen HTML.

**Kelebihan Internal Css**
- Perubahan pada Internal CSS hanya berlaku pada satu halaman saja.
- Anda tidak perlu melakukan upload beberapa file karena HTML dan CSS berada dalam satu file.

**Kekurangan Internal Css**
- Tidak efisien apabila Anda ingin menggunakan CSS yang sama dalam beberapa file.

**Kelebihan External Css**
- File CSS dapat digunakan di beberapa halaman website sekaligus. 

**Kekurangan External Css**
- Harus membuat file terpisah

Demikian adalah cara menambahkan css pada html dan perbedaan atara inline-css, internal-css, dan external-css beserta contohnya semoga informasi di atas dapat  bermanfaat. 

Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

