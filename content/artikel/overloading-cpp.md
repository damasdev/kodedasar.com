---
title: "Contoh Program Sederhana C++ Menggunakan Overloading"
date: 2020-10-20
slug: overloading-cpp

description: "Pada artikel kali ini saya ingin mengenalkan kosep overloading pada bahasa pemrograman c++ dan bagaimana contoh penerapannya dalam program sederhana"

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Dalam pemrograman menggunakan bahasa C++, ada satu istilah teknis yang disebut dengan *overloading*. 

Istilah ini merujuk pada suatu kondisi dimana terdapat lebih dari satu fungsi dengan nama yang sama.

Ya, bahasa pemrograman C++ mengijinkan kondisi semacam ini. 

Tentunya dengan beberapa persyaratan khusus yang harus dipenuhi. Untuk melakukan overloading..

..masing-masing fungsi harus memiliki parameter dengan **jumlah** atau **tipe data** yang berbeda. 

*(Silahkan baca [Fungsi & Prosedur pada Bahasa Pemrograman C++](/blog/fungsi-cpp/))*

## Table Of Contents

## Overloading dengan Tipe Data yang Berbeda

Perhatikan contoh berikut :

```cpp

int hitung(int a , int b){
	return (a+b);
}

float hitung(float a, float b){
	return (a-b);
}
```

Kedua fungsi di atas memiliki nama yang sama yaitu `hitung`. 

Meskipun demikian, keduanya memiliki dua buah parameter dengan **tipe data yang berbeda**. 

- Fungsi yang pertama menerima dua buah parameter bertipe `integer`, 

- sedangkan fungsi kedua menerima parameter float. 

Dengan demikian, overloading seperti contoh diatas dapat diterapkan pada pemrograman C++.

```cpp

#include <iostream>
using namespace std;

int hitung(int a , int b){
	return (a+b);
}

float hitung(float a, float b){
	return (a-b);
}

int main(){
    cout << "Hasil: " << hitung(4,5);
    return 0;
}
```

Ketika fungsi `hitung()` dipanggil, program akan secara otomatis mendeteksi jumlah dan tipe parameter yang dimasukkan pada saat pemanggilan untuk mengetahui fungsi mana yang harus dijalankan.

Pada kasus di atas:

Jika anda memasukkan dua buah parameter bertipe data integer, maka program akan memanggil fungsi `hitung()` yang pertama. 

Sesuai dengan alur kode pada saat deklarasi, anda akan mendapatkan `return` bertipe data integer dengan nilai berupa hasil penjumlahan kedua parameter.

Sedangkan jika anda memberikan dua buah nilai float pada saat pemanggilan, secara otomatis program akan menjalankan fungsi `hitung()` yang kedua. 

Hasilnya, anda akan mendapatkan return bertipe data float berupa hasil pengurangan kedua parameter.

## Overloading dengan Jumlah Parameter yang Berbeda

Contoh lain dari kasus overloading yang diperbolehken adalah jumlah parameter yang berbeda.

Silahkan perhatikan contoh berikut:

```cpp

int hitung (int a){
	return (a*a)
}

int hitung (int a, int b){
	return (a*b)
}
```

Pada contoh di atas, terdapat dua fungsi dengan nama yang sama yaitu `hitung()`. 

Tipe `return` dari keduanya pun sama-sama integer. Bedanya, fungsi yang pertama hanya memiliki satu parameter, sedangkan fungsi yang kedua memiliki dua parameter. 

Maka program singkat di atas dapat dikategorikan sebagai overloading dalam C++.

```cpp

#include <iostream>
using namespace std;

int hitung (int a){
	return (a*a)
}

int hitung (int a, int b){
	return (a*b)
}

int main(){
    cout << "Hasil: " << hitung(4,5);
    return 0;
}
```

Jika anda memanggil fungsi `hitung()` dengan satu parameter bertipe data integer, anda akan mendapatkan return berupa nilai kuadrat dari parameter tersebut. 

Dengan kata lain, bilangan yang anda masukkan sebagai parameter pada saat pemanggilan fungsi akan dikalikan dengan bilangan itu sendiri.

Sedangkan jika anda memasukkan dua buah nilai saat memanggil fungsi `hitung()`, nilai dari parameter pertama akan dikalikan dengan nilai parameter kedua.

## Menarik Kesimpulan Overloading pada C++

Syarat dilakukannya overloading dalam C++ adalah perbedaan jumlah atau tipe data parameter. 

Anda diperbolehkan mendeklarasikan fungsi dengan:

- nama,
- return type,
- maupun jenis operasi

yang sama persis, selama terdapat perbedaan pada parameter antar fungsi.

Penting untuk diingat bahwa anda tidak diperbolehkan melakukan overloading hanya dengan return type yang berbeda, karena syarat overloading adalah perbedaan parameter.

Perhatikan contoh di bawah :

```cpp

int hitung (int a, float b){
	return (a*b)
}

float hitung (int a, float b){
	return (a/b)
}
```

Pada baris kode di atas, memang terdapat perbedaan pada return type. 

Fungsi `hitung()` yang pertama memberikan return bertipe data integer, sedangkan fungsi yang kedua memberikan return bertipe data float. 

Meksipun begitu, jumlah dan tipe parameter antara kedua fungsi di atas tidak berbeda sama sekali.

Maka overloading pada contoh di atas termasuk ilegal dan akan menghasilkan error pada saat kompilasi.

Demikian pembahasan singkat mengenai overloading dan contoh programnya, semoga bermanfaat.

Jangan lewatkan [Seri Panduan Belajar Bahasa Pemrogrman C++](/blog/belajar-cpp/) disini.
