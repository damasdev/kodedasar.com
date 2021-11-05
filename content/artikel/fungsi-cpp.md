---
title: "Contoh Program C++ Sederhana Menggunakan Fungsi & Prosedur"
date: 2019-03-20
slug: fungsi-cpp

description: "Inilah contoh program sederhana menggunakan fungsi dan prosedur atau yang sering disebut dengan method pada bahasa pemrograman c++."

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Jika dalam pemrograman pascal kita mengenal prosedur dan fungsi, maka dalam bahasa pemrograman C++ kita akan menyebut keduanya sebagai *method*.

Idenya: kita akan mulai membagi program besar kita menjadi program-program kecil dengan masing-masing tugas dan tanggung jawab sehingga lebih fleksibel.

Method sendiri dapat diartikan sebagai berikut:

> **Method** adalah kumpulan statemen atau blok peryataan yang berfungsi untuk menyelesaikan tugas khusus dari program kita. Berfungsi sebagai subprogram.

Intinya kita ingin membagi-bagi program dari program utama (main program) sehingga program dapat lebih rapih dan juga lebih terstruktur dan dapat dijalankan berulang kali.

Dalam sebuah program C++ minimal kita memiliki 1 method, karena pada dasarnya `main()` juga merupakan sebuah method. Method main adalah program utama kita.

## Table Of Contents

## Deklasasi Fungsi / Method pada C++

Berikut cara mendeklarasikan fungsi atau method pada bahasa C++:

```cpp

return_type nama_method ( daftar parameter) {
  blok pernyataan;
}
```

Ada dua jenis method dalam pemrograman C+:

- **Method Return** - Memiliki nilai kembali, contoh: `int` (sama seperti fungsi).

- **Method Void** - Tanpa memiliki nilai kembalian (sama seperti prosedur).

*(Silahkan baca: [Perbedaan prosedur dan fungsi](/blog/prosedur-dan-fungsi/))*

## #1 Method Tanpa Return Value

**Method Void** - fungsi yang tidak memiliki nilai kembalian, maka dari itu penggunaan prosedur selalu menggunakan void karena void tidaklah mengembalikan nilai.

*(Silahkan baca: [Macam-macam tipe data dalam bahasa pemrograman C++](/blog/tipe-data-cpp/))*

Tujuan dari penggunaan prosedur atau method void salah satunya adalah untuk mendefinisikan  masing – masing tugas. Berikut ini contoh prosedur pada C++:

```cpp

#include <iostream>
using namespace std;

void LuasPersegi()
{
 int panjang,lebar;

 cout << "Masukkan panjang: "; cin >> panjang;
 cout << "Masukkan lebar: "; cin >> lebar;

 cout<<"Luas persegi: " << panjang*lebar;
}

int main()
{
 LuasPersegi();
 return 0;
}
```

## #2 Method dengan Return value

**Fungsi** adalah subprogram yang akan mengolah data dan mengembalikan nilai (return value). Silahkan perhatikan program fungsi pada kode C++ berikut ini:

```cpp

#include <iostream>
using namespace std;

int LuasPersegi (int p, int l){
    int luas;
    luas = p*l;
    return luas;
}

int main()
{
    int a,b;

    cout << "masukkan panjang: "; cin >> a;
    cout << "masukkan lebar: "; cin >> b;

    cout << "Luas Persegi: " << LuasPersegi(a,b);
    return 0;
}
```

**Catatan**: penggunaan parameter dalam prosedur boleh dikosongkan, sedangkan dalam sebuah fungsi kita harus menggunakan parameter dalam penggunaannya.

## Menarik Kesimpulan

Inti dari fungsi dan prosedur yaitu berfungsi untuk memecahkan program yang rumit dan besar menjadi program-program yang lebih sederhana atau kecil.

Pada dasarnya tidak ada perbedaan yang signifikan antara prosedur dan fungsi karena hanya dibedakan dari return value. Namun dapat kita simpulkan sebagai berikut:

- Pada fungsi, nilai yang dikirimkan balik terdapat pada nama fungsinya (sedangkan prosedur berada pada parameter yang dikirimkan secara acuan).

- Karena nilai balik berada di nama fungsi tersebut, maka fungsi tersebut dapat langsung digunakan untuk dicetak hasilnya atau dipindahkan ke variable.

- Tidak seperti sebuah fungsi, yang dapat langsung digunakan dari sebuah prosedur adalah parameternya yang mengandung nilai balik.

Namun inti dari semua hal tersebut: Jika suatu sub program tersebut memiliki nilai balik (return value) maka sub program tersebut disebut Function (Fungsi)...

Jika tidak memiliki nilai balik maka sub program tersebut merupakan prosedur.

Jangan lewatkan [seri panduan belajar c++](/blog/belajar-cpp/) dari kami.
