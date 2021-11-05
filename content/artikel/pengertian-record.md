---
title: "Pengertian Record dan Contoh Program Sederhana pada Bahasa Pascal"
date: 2019-11-04
slug: pengertian-record

description: "Masih asing dengan istilah tipe data record? Pada panduan ini saya akan membantu anda memahaminya melalui beberapa contoh program sederhana dalam bahasa pascal"

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Setelah sekian lama tidak menulis disini saya ingin melengkapi [seri panduan belajar pascal](/blog/belajar-pascal).

Dan pada pembahasan kali kita akan belajar tentang tipe data record.

>Record merupakan jenis tipe data terstruktur yang berisi beberapa data, yang masing-
masing dapat berlainan tipe termasuk bertipe array.

Sebelum kita masuk ke dalam pembahasan, mungkin akan lebih mudah jika anda mengetahui struktur pendeklarasiannya terlebih dahulu. Perhatikah baris kode berikut ini:

```pascal

Record
  Data_field_1 : tipe_1;
  Data_field_2 : tipe_2;
  .........
  Data_field_n : tipe_n;
End;
```

**Penjelasan:**

Jadi secara sederhana record merupakan tipe data tersetruktur yang terdiri dari beberapa data.

Kemudian masing-masing data tersebut disebut sebagai field. Namun yang menarik adalah masing-masing data field dapat berupa satu atau beberapa nama pengenal.

## Table Of Contents

## #1 Deklarasi Record
Berikut ini merupakan cara pendeklarasioan tipe data record:

```pascal

Type
Data_Barang = Record
    Nama : string;
    Kualitas : char;
    Harga : longint;
    End;
Var Barang : Data_Barang;
```

**Penjelasan:**

Pada contoh diatas kita membuat deklarasi `record` yang menunjukkan bahwa variabel `barang` mengandung tiga buah field, yaitu : `Nama`, `Kualitas`, dan `Harga`.

Jadi yang kita lakukan adalah membuat tipe `Data_Barang` (record berisi: nama, kulitas, dan harga) yang kemudian kita deklarasikan ke dalam variabel `Barang`.

## #2 Field Record

Field dari suatu record dapat diakses dengan bentuk nama record dan nama field dipisahkan dengan tanda titik (.). Berikut adalah contoh bagaimana cara penulisannya:

```pascal

Vaiabel.field
```

Berikut adalah contoh dimana kita memiliki field `Nama` dari variabel record bernama `Barang`

```pascal

Barang.Nama
```

Sehingga untuk mencetak nilai dari dalam record anda hanya perlu menulis:

```pascal

writeln(Barang.Nama);
```

**Catatan:** Isi dari suatu record tidak dapat ditampilkan dengan `write` atau `writeln` secara langsung misal writeln(Barang). Melainkan harus melalui field recordnya.

## #3 Contoh Record pada Program Pascal

Pada contoh kali ini saya akan membuat program yang berisi data mahasiswa. Idenya adalah kita akan memaksukan nama dana npm kedalam record `mhs` dan mencetaknya:

Pertama kita akan mendeklarasikan tipe data `mhs`:

```pascal

Type mhs = record
  NPM : String[15];
  Nama : String[20];
  End;
Var data : mhs;
```

Kemudian kita harus memasukan nilai ke masing-masing field:

```pascal

Write('NPM : ');Readln(data.NPM);
Write('Nama : ');Readln(data.Nama);
```

Dan terakhir kita akan mencetak masing-masing field:

```Pascal

Writeln('NPM : ',data.NPM);
Writeln('Nama : ',data.Nama);
```

Sehingga jika digabung menjadi contoh prgram utuh akan menjadi seperti berikut:

```pascal

Program Data_Mahasiswa;
Uses crt;
Type mhs = record
  NPM : String[15];
  Nama : String[20];
  End;
Var data : mhs;
Begin
  Write('NPM : ');Readln(data.NPM);
  Write('Nama : ');Readln(data.Nama);
  Writeln;
  Writeln;
  Writeln('NPM : ',data.NPM);
  Writeln('Nama : ',data.Nama);
  Readln;
end.
```

## #4 Statemen Pernyataan WITH ... DO

Program Pascal menyediakan pernyataan With.....Do untuk mempermudah pengetikan dan mengurangi kesalahan dalam penggunaan tipe data record.

Bentuk pernyataan `with...do` adalah sebagai berikut :

```pascal

WITH nama_recrod DO
  Statemen;
```

Penggunaan statemen `with...do` mengakibatkan field-field yang terletak pada bagian statemen dapat dituliskan tanpa perlu menyertakan lagi nama record dan tanda titik.

Berikut Contoh penggunaan statemen `with ... do` pada program diatas:

```pascal

Program Data_Mahasiswa;
Uses crt;
Type mhs = record
  NPM : String[15];
  Nama : String[20];
  End;
Var data : mhs;
Begin
  With data do
    Begin
      Write('NIM : ');Readln(NIM);
      Write('Nama : ');Readln(Nama);
    End;

  Writeln('NPM : ',data.NPM);
  Writeln('Nama : ',data.Nama);
  Readln;
end.
```

Demikianlah penjelasan mengenai field dan record pada program pascal. Sekarang tugas anda adalalah mempraktikan kode diatas dan belajar memodifikasi program tersebut.
