---
title: "Dasar Input & Output (I/O) pada C++ dengan Fungsi cin dan cout"
date: 2019-03-15
slug: io-cpp

description: "Dasar input dan output pada c++ sangatlah penting, karena akan lebih menarik jika kita dapat berinteraksi dengan program kita."

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Pada bab ini kita akan mempelajari operasi input output (I/O) paling dasar yang umum dibutuhkan pada pemrograman C++. Sintaks: `cin` untuk input dan `cout` untuk output.

Secara sederhana *Input* dapat diartikan sebagai berikut:

 **Input** adalah aktifitas pengguna dengan program komputer yang memungkinkan kita memberikan data kedalam program. Misalnya dari *keyboard*, *mouse*, dll.

Sedangkan *Output* dapat diartikan sebagai berikut:

 **Output** adalah aktifiktas program komputer untuk mengeluarkan data kepada pengguna. Data tersebut dapat berupa text, file, gambar dan lain-lain.

Nah, kali ini kita akan belajar mengenai dasar proses input & output pada C++

Operasi Input dan Output dapat kita lakukan dengan menggunakan fungsi-fungsi yang berada pada Stream dan salah satunya ada pada library `iostream`.

**Stream** adalah nama umum untuk menampung aliran data (contoh : file, keyboard, mouse), maupun untuk keluaran (contoh : layar, printer).

Dalam C++ input berarti membaca dari stream & output berarti menulis ke stream.

## Table Of Contents

## #1 Output pada C++ (sintaks: cout)

Dalam pemrograman c++ kita akan sering menggunakan sintaks `cout` untuk menampilkan data ke alat output khususnya data berupa teks.

Untuk menggunakan keyword `cout` kita membutuhkan *Insertion Operator*:

yaitu 2 buah tanda lebih kecil `<<` di antara keyword dengan ekspresi.

Berikut contoh programnya:

```cpp

#include <iostream>
using namespace std;

int main()
{
    string selamat="Welcome to C++"
    cout << selamat;

    return 0;   
}
```

Pada contoh kode diatas kita mendeklarasikan sebuah variabel bernama 'selamat' dengan tipe data string. Kemudian kita mecetaknya dengan keyword `cout`.

Anda hanya perlu menulikan variabelnya setelah *Insertion Operator*.

Namun jika kita ingin langsung menampilakan sebaris kalimat (string), kita dapat menambahkan sepasang tanda petik dua di awal kalimat dan di akhir kalimat.

Berikut contoh programnya:

```cpp

#include <iostream>
using namespace std;

int main()
{
    cout << "Welcome to C++";

    return 0;   
}
```

Seperti yang anda lihat kita hanya perlu membungkus teks didalam dua tanda kutip.

## #2 Input pada C++ (sintaks: cin)

Jika fungsi `cout` kita gunakan untuk menampilkan output maka bisa ditebak bahwa fungsi `cin` akan kita gunakan untuk melakukan perintah input dasar text.

Untuk menggunakan keyword `cin` kita membutuhkan *Extraction Operator* dengan 2 buah tanda lebih dari `>>` yang diletakan di antara keyword `cin` dan memori.

Untuk itu, kita harus mendeklarasikan variabel terlebih dahulu.

Karena nantinya, data yang diberikan oleh pengguna dalam operasi pemasukan (input) akan disimpan di dalam memori variable yang telah kita deklarasikan.

Silahan perhatikan baris kode berikut:

```cpp

#include <iostream>
using namespace std;

string nama;

int main()
{
    cout << "Masukan Nama: ";
    cin >> nama;

    cout << "Nama saya adalah " << nama;    
}
```

Akan saya jelaskan dari awal.

Dari contoh program diatas, kita telah mendeklarasikan variabel `nama` bertipe `string`. Sedangkan `cin` untuk meyimpan nilai masukan dari pengguna ke variabel nama.

Lalu nilai/value dari variabel `nama` ditampilkan dengan menggunakan fungsi `cout`.

## Menarik Kesimpulan

Baiklah akan saya rangkum kembali untuk kesimpulan, dalam program c++ kita akan mengenal dua fungsi bernama `cin` untuk input teks dan `cout` untuk output teks.

Untuk menggunakannya, kita mebutuhkan sebuah tambahan *operator*:

- **Operator Insertion** `<<` *(2 buah tanda kurang dari)* untuk `cout`.

- **Operator Extraction** `>>` *(2 buah tanda lebih dari)* untuk `cin`.

Khusus untuk `cout` anda juga bisa langsung mecetak teks string yang dibungkus dengan double quotes tanpa harus menggunakan variabel tambahan.

Lihat juga [panduan belajar c++ disini](/blog/belajar-cpp/).
