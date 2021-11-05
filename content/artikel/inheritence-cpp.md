---
title: "Contoh Program Sederhana C++ Menggunakan Inheritence"
date: 2020-10-19
slug: inheritence-cpp

description: "Artikel ini akan membahas pengertian inheritence dan bagaimana contoh penerapan dalam program sederhana menggunakan bahasa pemrograman c++"

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Object Oriented Programming (OOP) kini telah diadopsi oleh hampir semua bahasa pemrograman, termasuk C++ sebagai salah satu bahasa pemrograman yang paling tua dan kompleks di dunia teknologi.

Dalam konsep OOP, terdapat banyak hal teknis yang perlu dipelajari oleh seorang programmer. 

Salah satunya adalah inheritance (pewarisan).

## Table Of Contents

## Pengertian Inheritence dalam Pemrograman

Pengertian Inheritence atau Pewarisan/Penurunan:

> Inheritance adalah konsep pemrograman dimana sebuah class dapat ‘menurunkan’ property dan method yang dimilikinya kepada class lain. 

Konsep inheritance digunakan untuk memanfaatkan fitur *code reuse* untuk menghindari duplikasi kode program. Secara sederhana:

Dengan inheritance, anda dapat menggunakan `property` dan `method` yang dimiliki oleh class induk tanpa anda harus mendefinikan ulang.

Hal ini akan berdampak pada efisiensi serta struktur kode program yang lebih rapi.

*(Silahkan baca [Class dan Object pada Bahasa Pemrograman C++](/blog/class-cpp/))*

## Contoh Program Inheritence pada Bahasa Pemrograman C++

Agar lebih mudah dipahami, perhatikan contoh berikut :

```cpp
#include <iostream>

using namespace std; 

// class induk
class BangunDatar { 
    protected: 
    int lebar, tinggi; 
    
    public: 
    void setValue(int a, int b){
        lebar   = a;
        tinggi  = b;
    } 
};

// class turunan
class Persegi: public BangunDatar { 
    public: 
    int getValue(){
        return (lebar * tinggi); 
    } 
}; 

// class turunan
class Segitiga: public BangunDatar { 
    public: 
    int getValue(){ 
        return (lebar * tinggi / 2); 
    } 
};
 
// program utama
int main () { 

    // Inisiasi Object
    Persegi persegi; 
    Segitiga segitiga; 
    
    // Inisiasi Nilai
    persegi.setValue(4,5); 
    segitiga.setValue(4,5); 
    
    // Mendapatkan Nilai Kembalian
    cout << persegi.getValue() << endl; 
    cout << segitiga.getValue() << endl; 
    return 0; 
}
```

Pada contoh diatas kita telah menefinisikan sebuah class induk bernama `BangunDatar`. 

```cpp

class BangunDatar { 
    protected: 
    int lebar, tinggi; 
    
    public: 
    void setValue(int a, int b){
        lebar   = a;
        tinggi  = b;
    } 
};
```

Dalam class tersebut kita memiliki:

- **Property** : `panjang` dan `lebar` bertipe data integer dengan hak akses `protected`.

- **Method** : `setValue()` dengan hak akses `public`.

Kemudian dibawahnya, terdapat dua class turunan yaitu `Persegi` dan `Segitiga`. 

Kedua class turunan ini secara otomatis mewarisi member-member milik class induk. 

Artinya, anda bisa menggunakan property dan method dari class induk tanpa harus mendefinisikan ulang.

*(Silahkan baca [Fungsi & Prosedur pada Bahasa Pemrograman C++](/blog/fungsi-cpp/))*

## Cara Mendefinisikan Class Turunan pada C++

Untuk mengimplementasikan konsep inheritence pada C++ format penulisannya sebagai berikut:

```cpp

class NamaClassTuruanan: public NamaClassInduk {}
```

Dalam Inheritance, terdapat tiga level hak akses yaitu `Public`, `Protected`, dan `Private`. 

Perhatikan baris kode di atas. 

Pada saat deklarasi, terdapat keyword `Public` yang mengiringi nama class induk. 

Ini berarti semua member dari class induk akan diwariskan ke class turunan dengan hak akses yang sama dengan yang terdapat di class induk.

Jika hak akses `Public` di atas diganti menjadi `Protected`, maka semua member yang diwariskan ke class turunan akan memiliki hak akses `Protected`. 

Hal yang sama juga berlaku untuk hak akses `Private`.

Dalam kaitannya dengan member class:

- Hak akses `Public` berfungsi untuk member class yang dapat diakses oleh bagian kode mana pun di dalam program, bahkan oleh class atau fungsi yang bukan merupakan turunan dari class tersebut.

- Hak akses `Protected` dapat diakses oleh class induk dan class turunan, tetapi tidak dapat diakses oleh class lain yang tidak memiliki hubungan Inheritance dengan class tersebut.

- Sedangkan hak akses `Private` hanya dapat diakses oleh class itu sendiri dan tidak dapat diakses oleh class lain, bahkan oleh class turunannya sekalipun.

**Mari kita lanjutkan pembahasan ke contoh programnya:**

Seperti yang ada lihat pada contoh diatas, disana kita bisa menggunakan variabel `lebar` dan `tinggi` padahal kita sama sekali tidak mendefinisikan secara langsung pada masing-masing class turunan.

Kemudian, didalam kedua class turunan tersebut kita menambahkan fungsi `getValue()` yang berfungsi untuk melakukan kalkulasi luas bangun datar. 

```cpp
// class turunan
class Persegi: public BangunDatar { 
    public: 
    int getValue(){
        return (lebar * tinggi); 
    } 
}; 
```

Untuk `class Persegi`, formula yang digunakan adalah `lebar * tinggi` untuk menghitung luas persegi. 

```cpp
// class turunan
class Segitiga: public BangunDatar { 
    public: 
    int getValue(){ 
        return (lebar * tinggi / 2); 
    } 
};
```

Sedangkan untuk `class Segitiga`, digunakan formula `lebar * tinggi / 2` untuk menghitung luas segitiga.

## Menjalankan Program C++ dengan Konsep Inheritence

Pada contoh diatas, ketika kode program di atas dijalankan maka anda akan mendapatkan hasil kalkulasi bangun persegi dan segitiga dengan nilai lebar 4 dan tinggi 5.

```cpp

int main () { 

    // Inisiasi Object
    Persegi persegi; 
    Segitiga segitiga; 
    
    // Inisiasi Nilai
    persegi.setValue(4,5); 
    segitiga.setValue(4,5); 
    
    // Mendapatkan Nilai Kembalian
    cout << persegi.getValue() << endl; 
    cout << segitiga.getValue() << endl; 
    return 0; 
}
```

Pada contoh diatas kita mendefinisikan dua buah obyek `Persegi` dan `Segitiga`..

..dari dua obyek tersebut masing-masing kita beri nilai lebar 4 dan tinggi 5 menggunakan fungsi `setValue()`.

Kemudian dikahir program kita ingin menmapilkan hasil kalkulasi masing-masing luas bangun datar dari segitiga dan persegi menggunakan fungsi `getValue()`.

Demikian pembahasan singkat mengenai inheritence dan contoh programnya, semoga bermanfaat.

Jangan lewatkan [Seri Panduan Belajar Bahasa Pemrogrman C++](/blog/belajar-cpp/) disini.
