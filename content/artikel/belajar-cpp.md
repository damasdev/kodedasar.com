---
title: "Belajar Bahasa Pemrograman C++ Lengkap dari Awal untuk Pemula"
date: 2019-03-14
slug: belajar-cpp

description: "Panduan lengkap belajar bahasa pemrograman C++ untuk pemula dari awal hingga akhir. Bahkan anda yang belum mengenal contoh program sekalipun."

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Hai semuanya, selamat datang di seri panduan belajar Bahasa Pemgrograman C++ paling lengkap dari awal hingga akhir karena disini anda akan belajar dari Nol.

Jadi ceritanya saya pernah melakukan kunjungan industri ke **PT Gameloft Indonesia**, lalu saya sempat menanyakan bahasa pemrograman apa yang mereka gunakan.

Dan mereka menjawab: *"Pada dasarnya kita menggunakan Bahasa Pemrograman C++, lalu untuk android kita porting menggunakan Bahasa Java dan Objective C untuk iOS."*

Mendegar jawaban tadi, saya menjadi lebih semangat untuk belajar bahasa c++.

Jujur saya fans dari Gameloft, saya ingat sekali saat hp android belum sepopuler saat ini. Waktu itu saya bermain games mereka menggunakan hp nokia dengan os simbian.

Dan setelah lama menjadi penikmat games, kini saya tertarik untuk membuat games.

Khusus untuk anda yang belum pernah mengenal bahasa pemrograman, saya sarankan untuk membaca [panduan belajar pascal disini](/blog/belajar-pascal/) terlebih dahulu untuk pemanasan.

Disana anda akan belajar algoritma dan pemrograman komputer dasar.

## Table Of Contents

## #1 Mengenal Bahasa Pemrograman C++

Jadi, singkat cerita pada awal tahun 1970-an seorang bernama *Bjarne Stroustrup* mulai mengembangkan bahasa pemrograman c++ yang merupakan turunan dari Bahasa C.

Jika Bahasa C merupakan bahasa prosedural maka Bahasa C++ hadir menggunakan konsep pemrograman berorientasi objek atau *Object Oriented Programming*.

Pemrograman dengan bahasa C menggunakan 2 konsep:

- **Data** - bahan yang akan diolah.

- **Algorithms** - metode pengolahan.

Tapi bagaimanapun juga, penggunaan bahasa prosedural seperti C sangat tidak efisien khususnya untuk pembuatan software berskala menengah ke atas atau project besar.

Terlalu banyak perulangan, percabangan, dan kode yang harus kita ketikan.

Maka dari itu kemudian bahasa c ini dikembangkan ke tingkat lebih lanjut menjadi bahasa c yang berorientasi object yang kemudian disebut dengan bahasa C++.

## #2 Download Compiler C++

Sebenarnya, anda bisa saja cukup hanya memakai aplikasi text editor biasa seperti notepad kemudian menggunakan aplikasi compiler yang banyak tersedia di internet.

Namun saya rasa tidak efisien karena kita akan disibukan dengan masalah teknis.

Saya pribadi semasa belajar di bangku kuliah menggunakan DEV C++ 5.11, kemudian perusahaan Gameloft menggunakan IDE Visual Studio 2015 (Saat saya tanya).

Meski demikian, ada banyak sekali vendor yang telah menyediakan software lengkap baik berbayar maupun gratis, silahkan download dan install terlebih dahulu.

## #3 Sturktur Program C++

Seperti pada umumnya, langkah pertama kita harus berkenalan dengan bahasa pemrograman c++. Silahkan buka program IDE anda dan ketikkan kode berikut:

```cpp

#include <iostream>

int main()
{
    std::cout << "Welcome to C++";

    return 0;   
}
```
Dan bandingkan dengan kode barikut ini:

```cpp

#include <iostream>
using namespace std;

int main()
{
    cout << "Welcome to C++";

    return 0;   
}
```

Saya akan beri anda waktu 1 menit untuk melihat perbedaannya.

Perlu diketahui bahwa kode di atas adalah kode standar C++, kedua kode diatas akan menampikan hasil data yang sama namun penulisannya saja yang sedikit berbeda.

Mari kita mengenal beberapa sintaks/coding tersebut.

## #4 Header dan Main Program

**Header** adalah tempat dimana kita akan memasukkan library yang ada pada C++ kedalam kode program. Sedangkan `main()` sebagai blok program utama kita.

Jika anda melihat kode pada baris pertama terdapat kode #include &lt;iostream&gt;.

Tanda ‘#’ disebut *preprocessor directive*.

Preprocessor directive adalah perintah – perintah yang diberikan kepada compiler untuk melakukan definisi, misalnya untuk memasukkan file library, dan lain sebagainya.

Jika kita lihat program diatas kita akan memasukkan (include) library iostream ke dalam program. iostream adalah header yang dibutuhkan untuk “kegiatan” input dan output.

Jika anda perhatikan kode program diatas, terdapat:

```cpp

using namespace std;
```

Sedangkan pada contoh pertama tidak menggunakan baris kode tersebut.

Jadi intinya penggunaannya untuk memberitahukan kepada kompiler bahwa kita akan menggunakan semua fungsi, class atau file yang terdapat pada memori namespace std.

Kita tidak perlu mengetikan `std::cout` untuk mencetak output namun hanya cukup menggunakan fungsi `cout` saja, karena telah menggunakan `using namespace std`;

Selanjuntya kode `main()` adalah blok program yang berfungsi sebagai badan sebuah alur kondingan atau disebut sebagai program utama yang ditulis antara kode **{** hingga **}**.

Berikut adalah contoh program c++ sederhana untuk menghitung keliling lingkaran:

```cpp

#include <iostream>
using namespace std;

const double pi = 3.14159;
const char newline = '\n';
int main ()
{
 double circle;
 double r = 5.0; //radius
 circle = 2 * pi * r;
 cout << circle;
 cout << newline;
}
```

**PENTING:** Penulisan dalam bahasa C++ bersifat *case sensitive*.

## #5 Pendeklarasian Variabel dan Konstanta

Untuk mendeklarasikan variabel yaitu dengan menuliskan tipe data terlebih dahulu kemudian diikuti nama variabel. Dan berikut contohnya:

```cpp

double circle;
double r = 5.0;
```

Sedangkan untuk mendeklarasikan variabel bernilai konstanta dengan menggunakan fungsi *const* diikuti tipe data, nama varibel, dan nilai/value. Contoh:

```cpp

const double pi = 3.14159;
const char newline = '\n';
```
Bagi anda yang membutuhkan penjelasan lebih lanjut mengenai variabel dan konstanta silahkan baca: [pengertian variabel dan konstanta dalam pemrograman](/blog/pengertian-variabel/).

**Tambahan:** anda tidak boleh menggunakan *keyword c++* berikut ini sebagai nama identifier variabel maupun konstanta atau anda akan mendapat error.

Berikut *reserved words* di C++:

| Keyword| |  | |
|----------- | ----------| --------------- | ------------|
| asm	          |  else   	 |  new	             | this  |
| auto	         | enum    	 |  operator	        |  throw |
| bool	         | explicit  |  private	         | true |
| break	        |  export	  |   protected	      |  try |
| case	         | extern    |  public	          |  typedef |
| catch     	   | false	    | register	         | typeid |
| char	         | float	    | reinterpret_cast	 | typename |
| class	        |  for	     |  return	          |  union |
| const	        |  friend	  |   short           | 	unsigned |
| const_cast	   | goto	     |  signed	          |  using |
| continue	     | if	       |  sizeof	          |  virtual |
| default       |  inline	  |   static	         |   void |
| delete        |  int	     |  static_cast	     | volatile |
| do        	   | long   	  | struct	           | wchar_t |
| double    	   | mutable	  | switch	           | while |
| dynamic_cast	 | namespace	| template |      |

**TIPS:** Tenang saja karena anda tidak perlu menghafalnya, tips untuk untuk anda dalam pemberian nama identifier selalu gunakan nama yang mudah anda ingat.

## #6 Macam-Macam Komentar

>**Komentar** adalah catatan atau dokumenasi yang ditulis oleh programmer untuk sebagai pengingat atau penjelasan ketika membaca sebuah baris kode.

Dalam bahasa C++ ada dua tanda yang dapat di gunakan untuk sebuah komentar:

- Yang pertama ada tanda yang di gunakan untuk komentar satu baris saja, untuk tanda komentar satu baris, menggunakan tanda dua garis miring `//`.

- dan yang ke dua tanda yang di gunakan untuk komentar lebih dari satu baris. Sedangkan untuk komentar lebih dari satu bari, menggunakan tannda `/*`. . . `*/`.

Perhatikan contoh berikut:

```cpp

//ini kode satu baris

/* ini komentar
   beberapa baris */
```

Kata – kata dalam sebuah komentar tidak akan dieksekusi oleh compiler.

## #7 List Panduan Belajar Pemrograman C++

Berhubung seri panduan ini sangat panjang saya tidak mungkin membuatnya menjadi satu halaman. Untuk itu disini saya membuat daftar isi dari panduan kita kali ini.

Silahkan mulai dari bab 1 atau langsung menuju bab yang ingin anda pelajari.

**BAB 1: Dasar Pemrograman C++**

Pada bab ini anda akan mempelajari beberapa hal dasar yang ada dalam bahasa pemrograman C++ mulai dari dasar input hingga operator:

1. **Input & Output** - [Dasar Input & Output pada C++ dengan Fungsi cin dan cout](/blog/io-cpp/)

2. **Tipe Data** - [7+ Tipe Data C++ Berserta Contoh Program dan Jangkauannya](/blog/tipe-data-cpp/)

3. **Operator** - [10+ Jenis Operator C++ Berserta Fungsi dan Contoh Programnya](/blog/operator-cpp/)

**BAB 2: Stuktur Kontrol**

Pada bab ini kita akan mulai belajar struktur kontrol mulai dari pengambilan keputusan seperti (`if else` dan `switch case`) hingga perulangan (`for` dan `while` loop).

1. **Percabangan** - [2+ Contoh Program Percabangan Sederhana Menggunakan C++](/blog/percabangan-cpp/)

2. **Perulangan** - [Contoh Program C++ Perulangan Sederhana dan Penjelasannya](/blog/perulangan-cpp/)

**BAB 3: Tingkat Lanjut**

Pada bab ini kita akan belajar lebih lanjut mulai dari function hingga pointers.

1. **Function** - [Contoh Program C++ Sederhana Menggunakan Fungsi & Prosedur](/blog/fungsi-cpp/)

2. **Array** - [Contoh Program Array C++ dan Penjelasannya [Studi Kasus]](/blog/array-cpp/)

3. **Overloading** - [Contoh Program Sederhana C++ Menggunakan Overloading](/blog/overloading-cpp/)

3. **Pointers** - [Contoh Program Sederhana C++ Menggunakan Pointer](/blog/pointer-cpp/)

4. **Namespace** - [Contoh Program Sederhana C++ Menggunakan Namespace](/blog/namespace-cpp/)

**BAB 4: Object Oriented Programming**

Pada bab ini kita akan belajar dasar-dasar pemrograman berorientasi objek dengan bahasa C++. Mulai dari *inheritance*, *polymorphism*, *Encapsulation*, dan *Abstraction*.

1. **Class** - [Contoh Program Sederhana C++ Menggunakan Class dan Object](/blog/class-cpp/)

2. **Inheritence** - [Contoh Program Sederhana C++ Menggunakan Inheritence](/blog/inheritence-cpp/)

3. 

## BONUS: Video Penerapan Bahasa C++

Saya sempat mendapat tugas kuliah untuk memasang program *sevent segment* menggunakan bahasa pemrogroman c++ kedalam microkontroler Nuvoton.

Dan berikut ini video tugas saya:

<div class='box'><iframe src="https://www.youtube.com/embed/s27OL_D5RDk" allowfullscreen></iframe></div>

**Catatan:** halaman ini akan terus saya perbarui.
