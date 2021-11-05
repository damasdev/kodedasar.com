---
title: "7+ Tipe Data C++ Berserta Contoh Program dan Jangkauannya"
date: 2019-05-16
slug: tipe-data-cpp

description: "Ada tujuh macam tipe data sederhana dalam bahasa c++. Dalam artikel ini anda akan mengetahui berapa ukuran memori dan jangkauannya beserta contoh program."

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Mari kita ingat kembali, tipe data digunakan untuk menentukan jenis nilai atau value yang akan disimpan ke dalam variabel untuk kemudian di proses dalam program kita.

Ketika anda mendeklarasikan sebuah variabel, pada dasarnya anda sedang memesan sebuah ruang didalam memori. Lalu besarnya memori dipengaruhi oleh Tipe Data.

Nah tugas besar seorang programmer adalah bisa menentukan tipe data yang tepat, karena kita dituntut untuk membuat program yang efektif dan tidak boros memori.

Untuk itu, kita akan mengenal beberapa tipe data dalam Bahasa C++.

## Table Of Contents

## Tipe Data Primive C++

Pada dasarnya tipe data dibagi menjadi 3 jenis:

- **Tipe Data Angka** - untuk angka dan berhubungan dengan aritmetika.

- **Tipe Data Karakter** - untuk karakter dan angka bukan untuk operasi aritmetika.

- **Tipe Data Logika** - untuk logika benar (*true*) atau salah (*false*).

Untuk penjelasan lebih detail silahkan baca: [macam macam tipe data dan fungsinya](/blog/pengertian-tipedata/)

Pada dasarnya C++ memiliki beberapa tipe data *built-in* yang langsung anda gunakan. Dan berikut 7+ tipe data primitif dalam bahasa pemrograman C++:

| Tipe Data      | Keyword        |
| -------------- | -------------- |
| Boolean        | bool           |
| Character      | char           |
| Integer        | int            |
| Floating point | float          |
| Double         | double         |
| Valueless      | void           |
| Wide character | wchar_t        |

## Ukuran Memori dan Jangkauannya

Beberapa tipe data dasar diatas dapat dimodifikasi dengan *type modifiers* berikut −

- signed
- unsigned
- short
- long

Setiap tipe data memiliki besar memori yang berbeda antara satu dengan yang lain. Untuk membuktikannya, anda bisa memeriksanya dengan fungsi kode `sizeof()`

```cpp

#include <iostream>
using namespace std;

int main() {
   cout << "Size of char : " << sizeof(char) << endl;
   cout << "Size of int : " << sizeof(int) << endl;
   cout << "Size of short int : " << sizeof(short int) << endl;
   cout << "Size of long int : " << sizeof(long int) << endl;
   cout << "Size of float : " << sizeof(float) << endl;
   cout << "Size of double : " << sizeof(double) << endl;
   cout << "Size of wchar_t : " << sizeof(wchar_t) << endl;

   return 0;
}
```

Ketika kode diatas di complie maka kita akan mendapat output sebagai berikut:

```cpp

Size of char : 1
Size of int : 4
Size of short int : 2
Size of long int : 4
Size of float : 4
Size of double : 8
Size of wchar_t : 4
```

Dan disini kami akan merangkum macam-macam tipe variabel, berapa banyak memori yang digunakan dalam memori, dan berapa jangkauan nilai yang mampu digunakan.

| Tipe Data           | Ukuran Memori  | Jangkauan                        |
| ------------------- | -------------- | -------------------------------- |
| char	              | 1 byte         |	-127 to 127 or 0 to 255         |
| unsigned char	      | 1 byte	       | 0 to 255                         |
| signed char	        | 1 byte	       | -127 to 127                      |
| int	                | 4 bytes	       | -2147483648 to 2147483647        |
| unsigned int        | 4 bytes	       | 0 to 4294967295                  |
| signed int	        | 4 bytes	       | -2147483648 to 2147483647        |
| short int	          | 2 bytes	       | -32768 to 32767                  |
| unsigned short int	| Range	         | 0 to 65,535                      |
| signed short int	  | Range	         | -32768 to 32767                  |
| long int	          | 4 bytes	       | -2,147,483,648 to 2,147,483,647  |
| signed long int	    | 4 bytes	       | -2,147,483,648 to 2,147,483,647  |
| unsigned long int	  | 4 bytes	       | 0 to 4,294,967,295               |
| float	              | 4 bytes	       | +/- 3.4e +/- 38 (~7 digits)      |
| double	            | 8 bytes	       | +/- 1.7e +/- 308 (~15 digits)    |
| long double	        | 8 bytes	       | +/- 1.7e +/- 308 (~15 digits)    |
| wchar_t	            | 2 atau 4 bytes | 1 wide character                 |

## Tipe Data Baru dengan typedef

Dalam Bahasa C++ kita dapat mendeklarasikan variabel menggunakan tipe data kustom yang sebelumnya telah kita buat dengan menggunakan sintaks `typedef`.

Cara membuatnya seperti ini:

```cpp

typedef tipedata namabaru;
```

Sebagai contoh:

Kita ingin memberi tahu kepada compiler bahwa `angka` merupakan nama lain dari `int`.

```cpp

typedef int angka;
```

Maka sekarang anda bisa menggunakan `angka` sebagai tipe data baru anda:

```cpp

angka jarak;
```

## Enumerasi dalam C++

Pada C++, enum biasa digunakan saat suatu data yang sudah kita ketahui jumlahnya, dan tidak banyak. Seperti halnya untuk menyatakan beberapa hal berikut:

- Nama hari,

- Nama bulan,

- Jenis kelamin, dan lainnya.

Berikut cara penggunaannya:

```cpp

enum bulan{Januari, Februari, Maret, April, Mei, Juni, Juli, Agustus, September, Oktober, November, Desember};
```

Secara default, nilai dari nama pertama adalah 0, nama kedua adalah 1, dan seterusnya. Namun anda bisa memberikan sebuah nilai sepesifik, dengan menambahakn identifier.

Contoh:

```cpp

enum color { red, green = 5, blue};
```

Sehingga red bernilai 0 (tanpa identifier, selalu mulai dari nol), gree bernilai 5, dan blue bernilai 6 karena setiap nama akan selalu 1 tingkat lebih besar dari nama sebelumnya.

Berikut cara penggunaannya:

```cpp

enum color { red, green, blue };
c = blue;
```

## #1 Tipe Data Boolean (bool)

**Boolean** adalah salah satu tipe data yang hanya memiliki dua pilihan yaitu True (1) atau False (0). Tipe data ini biasanya digunakan untuk memberikan kondisi pada program.

...atau bisa juga memastikan kebenaran dari sebuah operasi.

Besarnya memori yang dibutuhkan tipe data **bool** yaitu 1 byte atau 8 bit.

Berikut ini contoh program C++ menggunakan tipe data bool:

```cpp

#include <iostream>
using namespace std;

int main()
{
   int angka;
   bool hasil;
   cout << "Masukan angka = "; cin >> angka;
   hasil = angka > 10;
   cout << hasil;
}
```

Pada contoh program diatas, kita menggunakan 2 buah variabel yaitu variabel `angka` dengan tipe data integer, dan variabel `hasil` dengan tipe data boolean.

Nah, disini saya akan mengambil nilai/value untuk variabel hasil dengan membandingkan nilai pada variabel angka terhadap bilangan 10.

Apabila nilai pada variabel angka lebih dari 10 maka hasil bernilai 1 (true) dan jika angka lebih kecil dari 10 maka hasilnya bernilai 0 (false).

## #2 Tipe Data Character (char)

**Character** adalah salah satu tipe data yang memungkinkan kita untuk memesan memori berformat text (huruf, angka, dan simbol) dengan karakter tunggal.

Besarnya memori yang dibutuhkan tipe data **char** yaitu 1 byte atau 8 bit.

Berikut ini contoh program C++ menggunakan tipe data char:

```cpp

#include <iostream>
using namespace std;

int main(){
   char nilai;

   cout << "Masukan nilai (A/B/C/D): "; cin>>nilai;
   cout << "Nilai anda:" << nilai;

}
```

Perlu diingat bahwa tipe data char hanya dapat menyimpan data berbentuk karakter dan hanya satu karakter, oleh karena itu apabila anda memasukan lebih dari 1 karakter maka nilai yang akan tersimpan hanya karakter pertama.

## #3 Tipe Data Integer (int)

**Integer** adalah salah satu tipe data numerik yang memungkinakan kita untuk menyimpan data dalam bentuk bilangan bulat.

Besarnya memori yang dibutuhkan tipe data **int** yaitu 4 byte atau 32 bit. Berikut ini contoh program C++ menggunakan tipe data int:

```cpp

#include <iostream>
using namespace std;

int main(){
   int x,y,z;
   x=3; y=4;

   z=x*y;
   cout << "Hasil perkalian: " << z;
}
```

Dengan menggunakan tipe data integer hal ini memungkinkan kita untuk melakukan sejumlah operasi aritmetika seperti perkalian dan lain sebagainya.

Pada contoh diatas, saya menggunakan 3 buah variabel beripe integer sebagai berikut: `X` bernilai 3, `Y` bernilai 4, dan `Z` sebagai hasil hasil perkalian x dan y.

## #4 Tipe Data Floating Point (float)

**Floating Point** adalah tipe data numerik yang memungkinkan untuk menyimpan nilai dalam memori bersifat bilangan pecahan atau real, maupun eksponensial.

Besarnya memori yang dibutuhkan tipe data **float** yaitu 4 byte atau 32 bit. Berikut ini contoh program C++ menggunakan tipe data float:

```cpp

#include <iostream>
using namespace std;

int main(){
   float jari, hasil ;
   const float p=3.14;

   cout << "Masukan Jumlah jari-jari = "; cin >> jari;
   hasil = (jari * p) * 2;

   cout << "Keliling dari Lingkaran adalah " << hasil;

}
```

## #5 Tipe Data Double Floating Point (double)

**Double Floating Point** sama seperti float yaiut salah satu tipe data yang bersifat menyatakan bilangan pecahan atau real, maupun eksponensial.

Bedanya adalah penyimpanan angka masimal lebih besar daripada float dan otomatis double juga akan membutuhkan memori yang lebih besar.

Besarnya memori yang dibutuhkan tipe data **double** yaitu 8 byte atau 64 bit. Berikut ini contoh program C++ menggunakan tipe data double:

```cpp

#include <iostream>
using namespace std;

int main(){
   double jari, hasil ;
   const double p=3.1428;

   cout << "Masukan Jumlah jari-jari = "; cin >> jari;
   hasil = jari*(jari * p);
   cout << "Luas lingkaran: " << hasil;
}
```

## #6 Tipe Data String (string)

**String** merupakan tipe data *text* (huruf, angka, dan simbol) yang memungkinkan kita menyimpan nilai dengan bentuk text, kumpulan dari character.

Besarnya memori yang dibutuhkan tipe data **string** yaitu 4 byte atau 32 bit. Berikut ini contoh program C++ menggunakan tipe data string:

```cpp

#include <iostream>
using namespace std;

int main(){
   string nohp;

   cout << "Masukan nomor HP: "; cin >> nohp;
   cout << "Nomor HP anda: " << nohp;
}
```

Sama seperti halnya tipe data char, dalam tipe data string kita bisa menggunakan karakter dan angka dengan ketentuan  tidak dapat dilakukan operasi aritmetika.

Namun perbedaannya, jika dalam tipe data char kita hanya mampu menyimpan nilai satu karakter untuk tiap variabel, hal ini tidak berlaku pada tipe data string.

Hal ini di karenakan `String` merupakan tipe data composite.

*(Baca: [Perbedaan tipe data Primive dan Composite](/blog/pengertian-tipedata/))*

## #7 Tipe Data Valueless (void)

**Valueless** adalah salah satu tipe data yang berarti “tidak ada” atau “tidak mempunyai tipe data”. Namun disini kita belum akan membahasnya lebih detail.

Void termasuk katagori tipe data namun kita tidak bisa menggunakanya pada variabel biasa, void biasanya digunakan pada `function` yang tidak mempunyai return value.

Besarnya memori yang dibutuhkan tipe data **void** yaitu 1 byte atau 8 bit.

## Manarik Kesimpulan

Setelah mengetahui bahwa setiap tipe data memiliki fungsi kegunaan dan kebutuhan memori yang berbeda-beda, kini anda sudah lebih tau bagaimana memilih tipe data.

Jangan lewatkan [seri panduan belajar c++](/blog/belajar-cpp/) kami.
