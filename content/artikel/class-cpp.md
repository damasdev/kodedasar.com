---
title: "Contoh Program Sederhana C++ Menggunakan Class dan Object"
date: 2019-03-22
slug: class-cpp

description: "Berikut adalah contoh program sederhana menggunakan class dan object pada bahasa pemrograman c++ yang wajib anda pelajari sebelum memasuki konsep OOP."

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Diawal pembahasan kita telah mengetahui bahwa bahasa C++ adalah pengembangan dari bahasa C. Lalu C++ menggunakan konsep pemrograman berorientasi objek.

Mari kita baca penjelasannya:

>**Pemrograman Berbasis Objek** atau *Object Oriented Programming* (OOP) adalah sebuah tata cara pembuatan program dengan menggunakan konsep objek yang memiliki data atau atribut dan prosedur yang dikenal dengan method.

OOP mengikuti model yang telah ada pada kehidupan sehari-hari...

Misalnya manusia memiliki tinggi, berat badan, dan warna kulit sebagai atribut (variabel) lalu manusia dapat berjalan, berlari, dan tertawa sebagai method.

Secara sederhana, OOP adalah konsep pembuatan program dengan memecah permasalahan program menggunakan objek yang berinteraksi satu sama lain.

Objek dapat diumpamakan dengan ‘fungsi khusus’ yang bisa berdiri sendiri. Untuk membuat aplikasi, berbagai objek saling bertukar data untuk mencapai hasil akhir.

## Table Of Contents

## #1 Pengertian Class dan Objek

Pada dasarnya class adalah sebuah *bluepint* (cetak biru) atau yang bisa disebut arsitektur dari object. Artinya, kita bisa membuat banyak objek dari suatu class.

Kelas (sintaks: class) adalah konsep struktur data yang diperluas: seperti struktur data, data tersebut dapat berisi data anggota, namun juga berisi fungsi sebagai anggota.

Sedangkan, objek adalah sebuah instantiasi sebuah kelas.

Objek sendiri mempunyai indentitas (nama), pada umumnya memiliki pengetahuan baik tentang dirinya maupun objek  lain dan memiliki ketrampilan untuk melakukan sesuatu.

Dalam program, pengetahuan dari suatu objek disebut dengan state atau attribute atau field. Sedang ketrampilan dan perilakunya disebut dengan behaviour / function / method.

JIka kita ingat variabel, maka kelas akan menjadi tipe data lalu objek akan menjadi nama variabelnya. Namun intinya: kelas adalah representasi benda(object) dari dunia nyata.

## #2 Struktur Penulisan Class pada C++

Kelas didefinisikan menggunakan kata kunci class:

```cpp

class class_name {
  access_specifier_1:
    member1;
  access_specifier_2:
    member2;
  ...
} object_names;
```

Dimana `class_name` adalah identifier yang valid untuk kelas, lalu `object_names` adalah daftar nama pilihan untuk objek kelas tersebut.

## #3 Contoh Program Class & Objek

Berikut adalah contoh class dalam program c++:

```cpp

#include <iostream>
using namespace std;

class Rectangle {
    int width, height;
  public:
    void set_values (int,int);
    int area() {return width*height;}
};

void Rectangle::set_values (int x, int y) {
  width = x;
  height = y;
}

int main () {
  Rectangle rect;
  rect.set_values (3,4);
  cout << "area: " << rect.area();
  return 0;
}
```

Jika anda perhatikan kode diatas, kita telah membuat kelas bernama `Rectangle`. Lalu, didalam kelas tersebut kita mendeklarasikan variabel dan method.

Pelajari **konsep dasar** yang ada dalam program diatas:

- Variabel  `width` dan `height` untuk menyimpan nilai.
- Method `set_values` untuk memberi nilai pada variabel.
- Method `area` untuk mendapat nilai dari `width*height` (luas).

Pada contoh diatas kita menggunakan operator `::` (dua titik dua).

Itu artinya kita mendefinisikan method bahwa fungsi `set_values` merupakan anggota kelas `Rectangle` meskipun penulisan kodenya di luar kelas itu sendiri.

Kemudian di program utama kita membuat object dengan cara `NamaKelas namaObject;`

```cpp

Rectangle rect;
```

Setelah itu kita akan memberikan nilai 3 dan 4 untuk variabel `width` dan `height` menggunakan method `set_value`. Berikut caranya: `namaObject.namaMethod;`

```cpp

rect.set_values (3,4);
```

Terakhir kita menampilkan hasil dari perkalian (`width` dan `height`) dengan method `area`.

Demikianlah sedikit pembahasan mengenai class dalam c++ sebelum memasuki pemrograman yang lebih lanjut. Lihat juga seri [belajar pemrograman c++](/blog/belajar-cpp/) disini.
