---
title: "3+ Contoh Program Looping pada Java dengan For, While, Do-While"
date: 2019-03-26
slug: perulangan-java

description: "Ada tiga macam atau bentuk umum dari perulangan ( for, while, dan do-while ) dan berikut adalah contoh program looping pada bahasa pemrograman java."

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Dalam Java, ada tiga struktur kontrol perulangan yaitu: `for`, `while`, dan  `do-while`.

Untuk yang belum tahu: Perulangan ( atau yang disebut *Looping*) adalah suatu proses yang diklakukan secara berulang-ulang hingga mencapai kondisi tertentu.

Sebagai contoh ketika anda ingin mencetak deretan angka hingga batas tertentu (contoh: 1-100), maka anda bisa menggunakan fungsi looping dalam program.

Biasanya fungsi looping digunakan dan berperan penting dalam algoritma sorting, karena kita akan menukar nilai variabel hingga menghasilkan nilai berurutan.

Bentuk umum perulangan pada java dapat kita temukan dalam beberapa program yang bekerja menggunakan tipe data array sebagai variabel yang digunakan.

## Table Of Contents

## #1 Strukur dan Aturan Penulisan For Loop

Pada dasarnya konsep perulangan pada java memiliki sintaks yang sama dengan C++. Jika anda sudah membaca panduan kami maka anda tidak akan asing dengannya.

Perhatikan baris kode berikut ini:

```java

for (start; condition; increment)
{
   statement;
}
```

**Start** adalah kondisi pada saat awal perulangan.

Biasanya kondisi awal ini digunakan untuk membuat dan memberikan nilai kepada variabel yang digunakan untuk mengontrol perulangan.

Misalkan, kita akan membuat variabel i, maka untuk kondisi start ini, kita juga harus memberikan nilai awal untuk variabel i, misalnya dengan 1, maka i=1.

**Condition** adalah kondisi yang harus terpenuhi agar looping dapat berjalan. Selama kondisi terpenuhi, maka Java akan terus melakukan perulangan.

Jadi anda harus lebih teliti dan berhati-hati dalam memberikan condition dalam perulangan for supaya tidak terjadi infinity loop atau malah loop tidak bekerja.

**Statement** adalah bagian baris kode program yang akan diproses secara terus-menerus selama proses perulangan berlangsung.

**Increment** adalah bagian yang digunakan untuk memproses variabel agar bisa memenuhi kondisi akhir perulangan. Biasa ditulis `i++` atau `++i`.

Berikut contoh sederhana perulangan for pada java:

```java

public class CetakAngka {

  public static void main(String[] args) {
      for(int x=0;x<10;x++){
          System.out.println(x);
      }
  }

}
```

Dalam program diatas kita hanya ingin mencetak 10 angka mulai dari 0 sampai 9. Mengapa dimulai dari nol? karena start kita di angka nol.

## #2 Perbedaan While dan Do While

Perulangan yang mungkin anda akan temukan adalah `while` dan `do while`. Kedua looping ini akan bekerja selama kondisi masih terpenuhi.

Namun yang membedakan kedua perulangan tersebut adalah lokasi kondisi. Untuk detailnya mari kita langsung saja lihat kedalam contoh program.

```java

public class WhileLoop {
    public static void main(String[] args) {
        int batas = 0;
        while (batas<10) {
          System.out.print(batas);
          batas++;
        }
    }
}
```

dan bandingkan dengan baris kode barikut:

```java

public class DoWhileLoop {
   public static void main(String[] args) {
        int batas = 0;
        do {
            System.out.print(batas);
            batas++;
        }while (batas<10);
    }
}
```

Sekilas memang hasilnya sama saja, namun sebenarnya ada perbedaan hasil jika kita menggunakan while loop dengan mengunakan do while.

Pada kasus do while loop pengecekan dilakukan di akhir sehingga minimal program akan berjalan 1 kali meskipun kondisi tidak terpenuhi.

Sebenarnya konsepnya sama dengan perulangan for, namun hanya sedikit berbeda dalam penulisan kodenya. Kita tetap membutuhkan start, condition, dan increment.

## Penutup

Kesalahan terbesar pada pemula adalah kurang telili pada bagian condition sehingga program akan berjalan tanpa akhir atau disebut infinity loop.

Dan nantinya kita akan mempelajari apa itu nested loop dan contohnya di bagian belajar tipe data array di artikel selanjutnya.

Namun intinya, nested loop atau perulangan bersarang adalah loop yang berada di dalam loop. Nantinya akan digunakan untuk Array 2 Dimensi

Jangan lewatkan seri [belajar pemrograman java untuk pemula](/blog/belajar-java/) kami.
