---
title: "Belajar Bahasa Pemrograman Java untuk Pemula dari Nol [Bonus PDF]"
date: 2019-05-06
slug: belajar-java

description: "Seri panduan belajar bahasa pemrograman java untuk pemula ini cukup lengkap. Dari akhir panduan silahkan download ebook tutorial dari JENI"

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Jika anda mencari lowongan pekerjaan sebagai developer sebuah aplikasi mobile, maka anda akan menemukan persyaratan minimal harus menguasai pemrograman Java.

Hal ini dikarenakan Java merupakan bahasa pemograman yang dapat dijalankan baik di komputer maupun ponsel, dan juga merupakan pemograman yang bersifat umum.

Saat ini Java masih menjadi salah satu bahasa pemrograman yang paling populer digunakan, dan secara luas dimanfaatkan dalam pengembangan aplikasi.

Bahkan banyak akademisi di Indonesia yang menggunakan Java sebagai *alat bantu* untuk menyelesaikan skripsi atau tugas akhir dengan berbagai topik antara lain:

| No             | Topik                         |
| -------------- | ----------------------------- |
| 1              | Kecerdasan Buatan             |
| 2              | Data Mining                   |
| 3              | Aplikasi Mobile, dan lainnya  |

Meskipun sekarang, bahasa Java sudah tergantikan oleh koltin sebagai bahasa resmi untuk pemrograman Android dari Google. Namun Java tetap menjadi dasarnya.

Tidak hanya itu, bahasa Java juga menjadi pondasi bagi berbagai bahasa pemrograman seperti Scala, Clojure, Groovy, JRuby, Jython, dan lainnya yang memanfaatkan JVM.

JVM atau *Java Virtual Machine* adalah mesin untuk menjalakan program java.

Di dunia *web development* sendiri, Java memiliki berbagai web framework unggulan seperti Spring, Spark, Jakarta Struts, dan Java Server Pages.

Jadi, apakah anda sudah tertarik untuk belajar bahasa pemrograman Java?

## Table Of Contents

## #1 Mengenal Pemrograman Java

Pada awalnya Bahasa Java dibuat oleh *James Gosling* saat masih bergabung di Sun Microsystems namun saat ini merupakan bagian dari Oracle dan dirilis tahun 1995.

Bahasa Java juga menggunakan konsep pemrograman berorientasi objek (OOP).

Berikut fase-fase pengkodean dalam bahasa Java:

- **Write** - Pada dasarnya anda hanya perlu menulis kode program menggunakan text editor seperti notepad lalu menyimpan berkas tersebut dengan ekstensi `.java`.

- **Compile** - Setelah membuat dan menyimpan kode program, kompilasi file yang berisi kode program tersebut dengan menggunakan Java Compiler. Hasil dari kompilasi berupa berkas bytecode dengan ekstensi `.class`.

- **Run** - Berkas yang mengandung bytecode tersebut kemudian akan dikonversikan oleh Java Interpreter menjadi bahasa mesin sesuai dengan jenis dan platform.

Pada dasarnya aplikasi-aplikasi berbasis Java pada umumnya dikompilasi ke dalam *p-code (bytecode)* sehingga dapat dijalankan pada berbagai *Java Virtual Machine (JVM)*.

Dari fase Java diatas, anda hanya perlu menulis dan mengkompilasi baris kode program sebanyak satu kali namun kita  dapat menjalankan program dimanapun dengan JVM.

Karena program aplikasi java mampu berjalan di beberapa platform sistem operasi yang berbeda, maka java dikenal dengan slogannya, *"Tulis sekali, jalankan di mana pun".*

## #2 Struktur Program Java

Untuk dapat membuat program, anda harus membuat kelas (sintaks: `class`) terlebih dahulu karena setiap program Java harus berada dalam sebuah kelas.

Kemudian anda harus membuat sebuah method `main` atau program utama untuk dapat menjalankan kode program. Berikut contoh program sederhana pada Java:

```java

public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello Java...");
    }
}
```

Berikut sedikit hal yang perlu anda ketahui:

- **public** adalah sebuah *keyword* di Java yang menandakan bahwa objek, method, atau atribut dapat diakses dari class lain. Nanti kita akan belajar *access modifier*.

- **class** adalah sebuah *keyword* di Java untuk membuat sebuah Kelas. Dalam contoh program diatas kita membuat kelas bernama `HelloWorld`.

- **main** menunjukan bahwa blok tersebut merupakan program utama. Dan kita akan menggunakan parameter `String[]` untuk method main program java.

- **System.out.println()** adalah sebuah method yang telah di-import otomatis untuk digunakan mencetak output di konsol.

Jadi dapat anda bayangkan bahwa program kita diatas akan membuat sebuah kelas bernama `HelloWorld` yang akan mencetak kata "Hello Java..." di konsol.

**TIPS:** Semua program java harus ditulis di dalam kelas atau `class`.

## #3 Komentar

Komentar merupakan sebuah catatan biasa yang ditulis oleh programmer untuk sebagai pengingat atau penjelasan ketika membaca sebuah kode.

- **Hanya 1 Baris** - tanda komentar satu baris, menggunakan tanda `//`

- **Banyak Baris** - komentar lebih dari satu bari, menggunakan tannda `/* ... */`.

Berikut contoh komentar dalam program java:

```java

// ini adalah komentar satu Baris
// ini juga satu baris

/*  
  Sedangkan ini adalah komentar
  dengan beberapa baris
*/

```

**TIPS**: Kata – kata dalam sebuah komentar tidak akan dieksekusi oleh compiler.

## #4 Operator Aritmetika

Berikut operator yang akan sering anda jumpai.

- ‘+’ = penjumlahan
- ‘-‘ = pengurangan
- ‘\*’ = perkalian
- ‘/’ = pembagian
- ‘%’ = sisa bagi (modulo)

Bahasa ini banyak mengadopsi sintaksis yang terdapat pada C++, jika anda sudah terbiasa dengan bahasa pemrograman c++ saya rasa akan lebih mudah.

*(Baca: [Belajar Bahasa Pemrograman C++ Lengkap dari Awal untuk Pemula](/blog/belajar-cpp/))*

## #5 Java Variables

Dalam pemograman java, kita akan mengenal tiga jenis variabel:

- **Local Variables** - yaitu variabel yang hanya bisa digunakan oleh blok program yang membungkusnya atau didalamnya. Misalnya untuk sebuah method, dll.

- **Class Variables (Static Variables)** - variabel yang dimiliki oleh kelas (ditandai oleh keyword `static`), artinya langsung dapat digunakan tanpa harus membuat objek.

- **Instance Variables (Non-static Variables)** - yaitu variabel yang dimiliki oleh objek, artinya anda harus membuat objek sebelum bisa menggunakan variabel tersebut.

## #6 Java Modifiers

Pada dasarnya ada dua jenis modifier pada java yaitu:

- **Access Modifiers** − default, public , protected, private

- **Non-access Modifiers** − final, abstract

Tenang saja, saya berjanji anda akan segera memahami perbedaanya. Disini hanya untuk perkenalan saja karena nantinya akan kita bahas di artikel selanjutnya.

## #7 List Panduan Bahasa Java

Panduan ini ditujukan kepada anda yang ingin belajar pemgrograman java lewat contoh program. Jika anda suka menggunakan modul silahkan download ebook diakhir artikel.

Hal pertama yang perlu anda persiapkan adalah:

```

Silahkan Download:

-Eclipse IDE for Java Developers
Link: https://www.eclipse.org/downloads/packages/release/Juno/SR2

-Java SE Development Kit
Link: http://www.oracle.com/technetwork/java/javase/downloads/index.html
```

Selain itu anda bisa menggunakan NetBeans IDE. Silahkan pilih sesuai selera anda.

**BAB 1: Dasar Pemrograman JAVA**

Pada bab ini kita akan belajar mengenai konsep dasar dari program java.

1. **Panduan** - [Aturan Penulisan di Java: Variabel, Konstanta, Method dan Class](/blog/aturan-penulisan-java/)

2. **Tipe Data** - [Macam-macam Tipe Data Primitif pada Bahasa Java dan Fungsinya](/blog/tipedata-java/)

3. **Percabangan** - [Contoh Program Java Kondisional dengan If Else dan Switch Case](/blog/percabangan-java/)

4. **Perulangan** - [3+ Contoh Program Looping pada Java dengan For, While, Do-While](/blog/perulangan-java/)

5. **Array** - [Contoh Program Sederhana Array pada Java 1 & 2 Dimensi](/blog/array-java/)

6. **Method** - [Pengertian Method: 2+ Contoh Program Fungsi dan Prosedur pada Java](/blog/method-java/)

**BAB 2: Konsep OOP (Object Oriented Programming)**

Anda sudah tahu bahwa Java mengunakan pemrograman berorientasi objek yang membuat program dapat dibuat secara modular dan dapat dipergunakan kembali.

Yang dimaksud dengan pemrograman berorientasi objek yaitu dengan memodelkan dunia nyata kedalam objek dan melakukan interaksi antar objek-objek tersebut.

Untuk lebih jelasnya akan kita bahas di seri panduan ini:

1. ...

2. ...

## BONUS: E-Book Java by JENI

Untuk yang belum tahu, JENI adalah sebuah pelayanan integratif bagi mahasiswa di Indonesia, untuk mempelajari, berbagi dan mengembangkan solusi berbasis JAVA.

JENI dideklarasikan oleh **Departemen Pendidikan Nasional**, dan didukung oleh *Indonesia Go Open Source (IGOS)*, *JUG Indonesia*, dan *SUN Microsystems*.

Menariknya dalam modul ini kita akan dibantu dengan contoh program yang sudah tersedia. langsung saja ya, berikut daftar panduan yang akan anda pelajari:

- **Level 1**
  - Pengenalan Pemrograman 1
      - Bab 01 - Pengenalan Pemrograman Komputer
      - Bab 02 - Pengenalan Bahasa Java
      - Bab 03 - Mengenali Lingkup Pemrograman Anda
      - Bab 04 - Dasar-Dasar Pemrograman
      - Bab 05 - Mendapatkan Input dari Keyboard
      - Bab 06 - Struktur Kontrol
      - Bab 07 - Java Array
      - Bab 08 - Argumen dari  Command-Linei
      - Bab 09 - Bekerja Dengan Java Class Library
      - Bab 10 - Membuat class sendiri
      - Bab 11 - Pewarisan, Polimorfisme, dan interface
      - Bab 12 - Dasar Exception Handling
  - Pengenalan Pemrograman 2
      - Bab 01 - Review Konsep Dasar dalam Java
      - Bab 02 - Exception dan Assertion
      - Bab 03 - Teknik Pemrograman Lanjut
      - Bab 04 - Tour dari Package java.lang
      - Bab 05 - Aplikasi berbasis teks
      - Bab 06 - Algoritma Sorting
      - Bab 07 - Abstract Windowing Toolkit dan Swing
      - Bab 08 - GUI Event Handling
      - Bab 09 - Threads
      - Bab 10 - Jaringan
      - Bab 11 - Applet
      - Bab 12 - Stream IO Lanjut
      - Bab 13 - Pengenalan Generics
- **Level 2**
  - J2ME
      - Bab 01 - Pengembangan Aplikasi Mobile
      - Bab 02 - Memulai Pemrograman Mobile
      - Bab 03 - High Level User Interface
      - Bab 04 - Low Level User Interface
      - Bab 05 - Persistence
      - Bab 06 - Jaringan
      - Bab 07 - Security
      - Bab 08 - Web Services
      - Bab 09 - Optimisasi
      - Bab 10 - Optional Packages
      - Bab 11 - Topik-topik Tambahan
- **Level 3**
  - Web Programming
      - Bab 1 - Pengenalan Pemrograman WEB
      - Bab 2 - Basic Servlets
      - Bab 3 - Advanced Servlets
      - Bab 4 - Dasar JSP
      - Bab 5 - SQL dan JDBC
      - Bab 6 - JSP Lanjutan
      - Bab 7 - MVC Intro
      - Bab 8 - Advanced MVC
      - Bab 9 - JSF
      - Bab 10 - Advanced JSF
      - Bab 11 - Web Security
      - Bab 12 - AJAX
      - Bab 13 - J2EE Design Pattern
      - Bab 14 - App Case Study
- **Level 4**
  - Bab 01 - Modul Timer
  - Bab 02 - Modul Thread
  - Bab 03 - Modul MMAPI
  - Bab 04 - Modul GameCanvas
  - Bab 05 - Modul Sprite
  - Bab 06 - Modul LayerManager
  - Bab 07 - Modul TiledLayer
- **Level 5**
  - Bab 01 - Pengembangan Aplikasi Java dengan MVC
  - Bab 02 - Pemrograman MVC dengan WebWork-Struts2
  - Bab 03 - Teknologi Injection of Control dengan Spring
  - Bab 04 - Berkenalan dengan Hibernate
  - Bab 06 - Membangun aplikasi web CRUD dengan Cimande
- **Level 6**
  - Modul 1 - Pengenalan Game
  - Modul 2 - Collection & Thread
  - Modul 3 - Event Handling
  - Modul 4 - Efek Suara
  - Modul 5 - Grafik Vector
  - Modul 6 - Grafik Bitmap
  - Modul 7 - Skala, Rotasi & Translasi
  - Modul 8 - Sprite & Collision Detection
  - Modul 9 - Pemrograman Socket

Link Download: [Google Drive](https://drive.google.com/file/d/0B3JHW3-u_LeveE55ZktwYWlYUTQ/view?usp=sharing).
