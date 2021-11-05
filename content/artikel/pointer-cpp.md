---
title: "Contoh Program Sederhana C++ Menggunakan Pointer"
date: 2020-10-21
slug: pointer-cpp

description: "Berikut penjelasan mengenai pengertian pointer beserta contoh penerapannya dalam program menggunakan bahasa pemrograman c++"

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Pada artikel kali ini saya akan membahas mengenai pointer.

Secara pengertian:

> Pointer adalah sebuah variabel atau object yang merunjuk ke variabel atau object lainnya.

Nantinya, Pointer digunakan untuk mengetahui dan menggunakan alamat memori dari suatu variabel.

Jadi pointer tidak berisi nilai data, melainkan berisi suatu alamat memori. 

y memori tersebut bisa diwakili sebuah variabel atau juga berupa alamat memori secara langsung.

Dua hal paling mendasar yang harus dipahami dalam pointer adalah `reference` yang dilambxn dengan simbol asterisk (*) dan `dereference` yang dilambxn dengan simbol ampersand (&).

## Table Of Contents

## Operator Reference (*) pada Pointer

Reference digunakan untuk mengetahui alamat memori variabel. 

Perhatikan contoh di bawah ini :

```cpp
#include <iostream>
using namespace std;
 
int main(){
    int x = 9;
    int y = *x;

    cout << y << endl;
    return 0;
}
```

Di baris pertama, kita mendeklarasikan variabel bernama `x` dengan nilai 9. Kemudian, kita mendeklarasikan variabel lain bernama `y` dengan nilai berupa alamat memori dari variabel `x`.

Jika Anda menjalankan program di atas, Anda akan mendapatkan alamat memori dari variabel `x` yang disimpan ke variabel `y`. 

Untuk selanjutnya, mari kita asumsikan bahwa alamat memori dari variabel `x` adalah 1775.

x ini hanya sekadar asumsi untuk memudahkan Anda dalam memahami materi seputar pointers.

Pada praktiknya, kita tidak akan pernah tahu alamat memori dari suatu variabel sebelum program dijalankan.

Alamat memori juga terus berubah. Jika Anda menjalankan program di atas sebanyak dua kali, alamat memori variabel `x` pada percobaan pertama sangat mungkin berbeda dari percobaan kedua.

## Operator Deference (&) pada Pointer

Dereference digunakan untuk mendapatkan nilai dari suatu variabel dengan mengakses alamat memori dari variabel tersebut. Silahkan perhatikan contoh di bawah ini :

```cpp
#include <iostream>
using namespace std;
 
int main(){
    int x = 9;
    int y = *x;

    int z = &y
    cout << y << endl;
    cout << z << endl;
    return 0;
}
```

Baris pertama dan kedua sudah kita bahas di bagian reference. 

Pada baris ketiga, variabel `z` dideklarasikan dengan nilai dereference dari variabel `y`.

Karena variabel `y` menyimpan alamat memori dari variabel `x`, maka variabel `z` akan mendapatkan nilai yang sama dengan variabel `x` yaitu 9.

Dengan asumsi bahwa variabel `x` disimpan di alamat memori 1775, maka nilai dari variabel `y` adalah 1775 sebagai reference dari variabel `x`. 

Kemudian, nilai dari variabel `z` adalah nilai yang disimpan di alamat memori 1775 sebagai dereference dari variabel `y`, Maka nilai variabel `z` pasti sama dengan variabel `x` yaitu 9.

## Cara Mendeklarasikan Pointer pada Bahasa Pemrograman C++

Untuk mendeklarasikan variabel pointer, kita harus menggunakan asterisk (*) dan mencantumkan tipe data dari variabel yang akan diakses seperti contoh berikut :

```cpp
int * bulat;
char * karakter;
float * desimal;
```

Ketiga baris kode di atas adalah contoh deklarasi variabel pointer. 

Tipe data yang digunakan bukanlah tipe data variabel itu sendiri, melainkan tipe data dari variabel yang akan diakses oleh pointer tersebut.

Implementasi lengkap dari variabel pointer bisa Anda lihat pada kode di bawah :

```cpp
#include <iostream>
using namespace std;
 
int main(){
    
    int tunggal, ganda;
    int * x;

    x = &tunggal;
    *x = 1;

    x = &ganda;
    *x = 2;

    cout << tunggal << endl;
    cout << ganda << endl;
    return 0;
}
```

Baris pertama pada kode di atas adalah deklarasi variabel `tunggal`, dan `ganda` seperti deklarasi variabel pada umumnya. 

Pada baris kedua, kita mendeklarasikan variabel pointer bernama `x`. 

Lalu, variabel `x` kita isi dengan nilai dereference dari variabel `tunggal`. 

Sehigga ketika kita beri nilai 1 pada reference dari variabel `x`.

Secara otomatis, nilai dari variabel `tunggal` juga turut berubah menjadi 1.

Jenis operasi yang sama juga berlaku untuk variabel `ganda` yang bisa Anda lihat di dua baris terakhir. Bedanya, nilai yang diberikan untuk variabel `ganda` adalah 2, sedxn variabel `tunggal` kita berikan nilai 1.

## Menarik Kesimpulan dari Pointer

Pointer adalah variabel.

Namun berbeda dengan variabel normal, pointer menyimpan alamat pada memori, bukan nilai yang kita masukkan.

Demikian pembahasan singkat mengenai pointer dan contoh programnya, semoga bermanfaat.

Jangan lewatkan [Seri Panduan Belajar Bahasa Pemrogrman C++](/blog/belajar-cpp/) disini.
