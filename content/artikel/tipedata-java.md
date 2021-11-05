---
title: "Macam-macam Tipe Data Primitif pada Bahasa Java dan Fungsinya"
date: 2019-03-24
slug: tipedata-java

description: "Masih bingung apa saja macam-macam tipe data pada bahasa pemrograman java? Berikut adalah penjelasan lengkapnya"

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Dalam program java kita akan mengenal dua jenis tipe data: yang pertama yaitu tipe data *primitive* (primitif) dan yang kedua adalah *reference* (referensi).

Namun disini kita akan mempelajari tipe data primitif.

Mari ingat kembali pengertian dari tipe data:

>"Tipe data adalah suatu nilai yang dapat dinyatakan dalam bentuk konstanta atau variabel dan operator. Konstanta menyatakan nilai yang tetap, sedangkan variabel menyatakan nilai yang dapat berubah-ubah selama eksekusi berlangsung."

Apa perbedaan tipe data primitif dan reference?

Tipe data primitive adalah tipe data yang hanya mampu menyimpan satu nilai tiap satu variabelnya dan defaultnya telah didefinisikan oleh java.

Jadi, tipe data primitive merupakan tipe data dasar suatu program...

...sedangkan tipe data reference dalam java digunakan untuk merefrensikan sebuah object, class seperti String, Interface, dan Array.

Berikut macam-macam tipe data primitive dalam java:

1. Numerik atau Angka
   - Bilangan Bulat (byte, short, int, long)
   - Bilangan Desimal (float, double)
2. Karakter (char)
3. Boolean (boolean)

## Table Of Contents

## #1 Tipe Data Numerik

Kita mulai yang pertama, tipe data numerik adalah tipe data yang digunakan pada variabel atau konstanta untuk menyimpan nilai dalam bentuk bilangan atau angka.

Jika menggunakan bilangan bulat, maka anda membutuhkan tipe data `byte`, `short`, `int`, dan `long`. Sedangkan `float` dan `double` digunakan untuk bilangan desimal.

Tipe data **byte**:

- Ukuran memori 8-bit
- Nilai miminimal -128 (-2^7)
- Nilai maksimal 127 (2^7 -1)
- Default value adalah 0
- Contoh: byte a = 100, byte b = -50

Tipe data **short**:

- Ukuran memori 16-bit
- Nilai miminimal -32.768 (-2^15)
- Nilai maksimal 32.767 (2^15 -1)
- Default value adalah 0
- Contoh: short s = 10000, short r = -20000

Tipe data **int**:

- Ukuran memori 32-bit
- Nilai miminimal -2.147.483.648 (-2^31)
- Nilai maksimal 2.147.483.647(2^31 -1)
- Default value adalah 0
- Contoh: int a = 100000, int b = -200000

Tipe data **long**:

- Ukuran memori 64-bit
- Nilai miminimal -9.223.372.036.854.775.808 (-2^63)
- Nilai maksimal 9.223.372.036.854.775.807 (2^63 -1)
- Default value adalah 0L
- Contoh: long a = 100000L, long b = -200000L

Tipe data bilangan bulat yang paling sering digunakan adalah int. Sedangkan byte dan short jarang digunakan bahkan long hampir tidak pernah digunakan.

Berikut contoh penggunaan tipe data bilangan bulat:

```java

class TambahKurang{
 public static void main(String[] args){
 int x = 10;
 int y = 5;

 System.out.println(x + " + " + y + " = " + (x+y));
 System.out.println(x + " + " + y + " = " + (x-y));
 }
}
```

Kemudian ada juga tipe data angka untuk bilangan desimal.

Tipe data **float**:

- Ukuran memori 32-bit
- Digunakan untuk bilangan desimal
- Default value adalah 0.0f
- Contoh: float f1 = 234.5f

Tipe data **double**:

- Ukuran memori 64-bit
- Biasanya menjadi pilihan utama untuk bilangan desimal
- Default value adalah 0.0d
- Contoh: double d1 = 123.4

Berikut contoh penggunaan tipe data desimal:

```java

class KaliBagi{
 public static void main(String[] args){
 double x = 7.0d;
 double y = 2.0d;

 System.out.println(x + " * " + y + " = " + (x*y));
 System.out.println(x + " / " + y + " = " + (x/y));
 }
}
```

## #2 Tipe Data Logika

Jenis tipe data kedua adalah **boolean**:

- Hanya memiliki dua nilai yaitu: *true* dan *false*)
- tipe data boolean merepresentasikan satu bit informasi
- Tipe data ini digunakan untuk menandai sebuah kondisi
- Default value adalah false
- Contoh: boolean one = true

## #3 Tipe Data Karakter

Yang terakhir tipe data untuk karakter yaitu **char**:

- Ukuran memori 16-bit
- Untuk menyimpan karakter apapun
- Contoh: char letterA = 'A'

Sekarang anda sudah tahu apa saja jenis dan macam dari tipe data pada bahasa pemrograman java dan juga anda sudah tahu fungsi masing-masing tipe data.

Yang perlu anda ingat adalah: tipe data primitive hanya mampu menyimpan satu nilai tiap satu variabelnya. Berbeda dengan tipe data reference misalnya String.

Jika char hanya mampu menyimpan satu karakter maka berbeda dengan tipe data string yang mampu menyimpan banyak karakter dalam satu variabel.

Berikut contoh program char vs String pada java:

```java

class Karakter{
 public static void main(String[] args){
  char j = 'J';
  char a = 'A';
  char v = 'V';

  String tulisanJava = "Java";

  System.out.println("char: "+j+a+v+a);
  System.out.println("String: "+tulisanJava);
 }
}
```

Jika anda memasukan lebih dari satu karakter untuk tipe data char maka saya yakin pasti anda akan mendapatkan sebuah pesan error saat melakukan kompilasi program.

**TIPS**: Gunakan single quotes untuk `char` dan gunakan double quotes untuk `String`.

Lihat juga seri [belajar java](/blog/belajar-java/) kami.
