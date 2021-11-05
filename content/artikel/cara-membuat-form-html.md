---
title: "Cara Membuat Form Input Data pada HTML"
date: 2020-10-01
slug: cara-membuat-form-html

description: "Artikel ini membahas apa itu form dan bagaimana cara membuat form pada html disertai dengan contohnya.."

published: true
author: "Damas Amirul Karim"
tags: ['Web', 'HTML']
series: false
cover_image: ./images/html5.png
canonical_url: true
---

Mungkin anda sudah menemui berbagai macam form seperti form login, pendaftaran user baru, atau mungkin formulir input data untuk dapat mengirimkan beberapa informasi yang dibutuhkan.

Namun sebelum kita membahas lebih lanjut, ada baiknya kita mengetahui apa itu form:

> Form merupakan sebuah komponen yang ada di html yang berguna untuk mengumpulkan data yang berasal dari pengunjung web.

Dengan kata lain, form berfungsi untuk mendapatkan semua informasi yang dimasukan oleh user. Sedangkan untuk mendapatkan informasi tersebut nantinya kita akan menggunakan beberapa tag html seperti `textarea`, `input`, `option`, dan `select`.

*Silahkan baca: [Pengertian tag html dan contohnya](/blog/tag-html/)*

Di bawah ini saya akan membahas bagaimana cara membuat form input data pada html.

## Table Of Contents

## #1 Format Penulisan Tag `<form>`

> Form adalah salah satu elemen dalam bahasa markup HTML, yang berada di dalam tag form. 

Penulisannya sendiri diawali dengan `<form>`, yang kemudian diakhiri dengan `</form>`.

```html

<form action="localhost/form-tujuan" method="post">
    <!-- di sini Anda bisa isi dengan form -->
</form>
```

Beberapa atribut memang dibutuhkan pada tag form, supaya bisa berfungsi dengan sebagaimana mestinya.

*Silahkan baca: [Pengertian atribut html dan fungsinya](/blog/atribut-html/)* 

**Attribut Action**

Atribut pertama ialah `action`, yang mana memiliki fungsi untuk menjelaskan kemanakah data dari form yang akan dikirim. 

Pada umumnya memang nilai yang dimiliki oleh atribut `action` ini merupakan alamat yang berasal dari sebuah halaman PHP yang memang yang dibuat untuk dapat memproses isi data form. 

**Atribut Method**

Atribut yang kedua adalah `method` yang berguna untuk mendeklarasikan bagaimanakah data isi yang berasal dari form nantinya dikirimkan oleh web browser. 

Adapun memang nilai dari atribut `method` ini dapat berupa `post` dan `get`. 

Untuk lebih jelasnya silahkan perhatikan contoh kode berikut:

```html

<!DOCTYPE html>
<html>
<head>
	<title>Belajar form</title>
</head>
<body>
	<form action="localhost/form-tujuan" method="post">
		<!-- di sini Anda bisa isi dengan form -->
	</form>
</body>
</html>
```

**Penjelasan:**
- Attribut `action` berfungsi untuk mengarah data ke file atau halaman `localhost/form-tujuan`
- Atribut `post` ini nantinya berfungsi untuk mengirimkan data atau nilai.

## #2 Tag `<input>`

Sebenarnya tag `input` sendiri masih terbagi menjadi berbagai macam jenis. Yang mebedakannya adalah format data yang akan menjadi inputan.

Anda dapat mencoba beberapa jenis inputan berikut ini untuk melihat perbedaannya:

```html
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text"> (default value)
<input type="time">
<input type="url">
<input type="week">
```

Namun dalam membuat form kita perlu menambahkan sebuat atribut bernama `name`.

Atribut `name` sendiri berfungsi sebagai indetifier atau nama variabel dari setiap tag input.

*Silahkan baca: [Pengertian Variabel dan Konstanta](/blog/pengertian-variabel/)* 

Sebagai contoh adalah sebagai berikut:

```html

<!DOCTYPE html>
<html>
<head>
	<title>Contoh Input</title>
</head>
<body>
	<form action="localhost/form-tujuan" method="post">
		<input type="text" name="nama">
        <input type="text" name="alamat">
	</form>
</body>
</html>
```

Pada contoh kode diatas saya mendeklarasikan dua buah form input yang nantinya berfungsi untuk memasukan nama dan alamat pelanggan.

## #2 Tag `<textarea>`

Tag textarea sendiri pada dasarnya akan sama penggunaan `input` type text. Namun bedanya, pada tag `textarea` memungkinkan kita untuk menggunakan tombol enter.

Tag ini biasa digunakan untuk mengisi biodata ataupun ulasan.

```html
    <textarea></textarea>
```

Untuk mengatur panjang baris dari textarea kita bisa menambahkan atribut `rows` dan `cols`. 

```html
<!DOCTYPE html>
<html>
<head>
	<title>Contoh Textarea</title>
</head>
<body>
    <form action="localhost/form-tujuan" method="post">
	    <textarea rows="5" cols="20" name="biodata"></textarea>
    </form>
</body>
</html>
```

Penjelasan kode program:

Di atas di sematkan attribut `<textarea>` dengan luas area text, dimana `rows="5"` sendiri mengartikan panjang `textarea` yang setara dengan 5 baris dan tinggi di tuliskan `cols="20"`, yang mengartikan textarea yang setara dengan kolom sebanyak 20.

## #3 Tag `<select>`

Tag ini dipergunakan untuk memilih sebuah inputan yang akan digunakan, yang mana telah tersedia nilainya dan user dapat menunjukkan bagian dari nilai yang ada tersebut. 

Penggunaan dari tag `select` adalah bersamaan dengan tag `option`, yang mana pembuatannya untuk box pilihan.

```html

<select>
    <option>pilih 1</option>
    <option>pilih 2</option>
    <option>pilih 3</option>
</select>
```

Contoh dari tag select bisa dilihat dari garis berikut ini

```html
<!DOCTYPE html>
<html>
<head>
	<title>Contoh Select Option</title>
</head>
<body>
    <form action="localhost/form-tujuan" method="post">
        <select name="bahasa">
            <option value="1">Javascript</option>
            <option value="2">PHP</option>
            <option value="3">Python</option>
        </select>
    </form>
</body>
</html>
```

Penjelasan dari kode program di atas
- `<select>` : pebungkus pilihan dropdown
- `<option>` : berisikan pilihan yang akan dipilih
- `Value=”1”` : mewakilkan nilai dari text dalam pembungkus `option`

Demikian adalah ulasan tentang pengertian dan cara membuat form pada HTML, semoga informasi diatas dapat bermanfaat. Jangan lewatkan [seri panduan belajar HTML](/blog/belajar-html/) kami.

