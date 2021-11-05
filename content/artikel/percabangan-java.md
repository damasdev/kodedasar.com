---
title: "Contoh Program Java Kondisional dengan If Else dan Switch Case"
date: 2019-03-25
slug: percabangan-java

description: "Disini kita akan belajar bagaimana contoh program java menggunakan konsep percabangan if else dan switch case supaya anda tahu kapan menggunakannya."

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Dalam kehidupan sehari-hari pasti kita sering menghadapi sebuah pilihan dan begitu juga dalam program. Untuk itu kita membutuhkan [algoritma percabangan](/blog/algoritma-percabangan/).

Konsep percabangan adalah pemilihan statemen yang akan dieksekusi dimana pilihan tersebut berdasarkan kondisi tertentu untuk mengarahkan suatu proses.

Pada tutorial kali ini kita akan membahas fungsi percabangan `if else` dan `switch case` paling sederhana lalu diakhir bab kita akan membahas contoh yang lebih kompleks.

## Table Of Contents

## #1 Percabangan If Else

Untuk membuat program percabangan di Java dengan fungsi if else, cukup mudah karena sintaksnya tidak jauh berbeda dengan bahasa c++ (Jika anda mengetahui).

Silahkan perhatikan baris kode berikut ini:

```java

if (kondisi){
       Statement yang dieksekusi jika bernilai Benar;
   }
   else {
       Statement yang dieksekusi jika bernilai Salah;
   }
```

Dan berikut adalah contoh if else dalam program java:

```java

public class ContohKondisi {

      public static void main(String[] args) {
        boolean kondisi= true;

        if (kondisi){
            System.out.println("Jawaban anda benar...");
        }
        else {
            System.out.println("Jawaban anda benar salah...");
        }
    }
}
```

Anda pasti sudah tahu tipe data boolean (hanya berisi *true* atau *false*), dan dalam program diatas kita memanfaatkan tipe data tersebut sebagai kondisi program kita.

*Baca: [Macam-macam Tipe Data Primitif pada Bahasa Java dan Fungsinya](/blog/tipedata-java/)*

**TIPS**: Jadi selama kondisi bernilai benar maka blok program if akan dijalan, sedangkan jika kondisi bernilai salah maka blok program else akan dijalankan.

Jika anda menjalakan program diatas, maka hasilnya:

```java

D:>kodedasar>java ContohKondisi
Jawaban anda benar...
```

**Catatan**: Jika mengkompile dan menjalankanya menggunakan command promt.

Mengapa demikian? Hal ini disebabkan kondisi dari variabel kondisi bernilai true (Benar). Kemudian kita akan bermain-main dengan tipe data boolean...

..dimana kita akan mengetahui apakah nilai 1 ditambah 1 sama dengan 2 dan apakah angka 2 lebih dari angka 1 dengan mengubah program diatas menjadi berikut:

```java

public class ContohKondisi {

    public static void main(String[] args) {
        boolean kondisi;

        kondisi= (1+1) == 2 && 2>1;

        if (kondisi){
            System.out.println("Jawaban anda benar...");
        }
        else {
            System.out.println("Jawaban anda benar salah...");
        }
    }
}
```

Dalam menuliskan syarat, digunakan suatu operator relasi yang digunakan untuk membandingkan 2 buah nilai sebagai berikut (Operator --> Keterangan):

| Operator       | Keterangan                     |
| -------------- | --------------                 |
| ==             | Sama dengan                    |
| !=             | Tidak sama dengan              |
| >              | Lebih dari                     |
| <              | Kurang dari                    |
| >=             | Lebih dari atau sama dengan    |
| <=             | Kurang dari atau sama dengan   |

Selain itu jika syarat yang digunakan lebih dari satu sering digunakan operator logika yakni sebagai berikut (Operator --> Keterangan):

| Operator       | Keterangan     |
| -------------- | -------------- |
| &&             | **AND** - Jika semua operand bernilai benar (TRUE) maka kondisi bernilai benar.   |
| \|\|             | **OR** - Jika salah satu operand bernilai benar (TRUE) maka kondisi bernilai benar. |
| !              | **NOT** - Digunakan untuk membalik kondisi. Jika kondisi benar (TRUE) maka akan berubah menjadi salah (FALSE), begitu pula sebaliknya.|

**Studi Kasus Program Percabangan If Else**

Dalam studi kasus kali ini kita diminta untuk membuat sebuah program sederhana untuk mengetahui apakah nilai yang kita miliki lebih dari angka 2 atau tidak.

Jika ya kita diminta untuk memeriksa apakah termasuk dalam bilangan genap atau ganjil, jika tidak kita tidak perlu melakukan pengecekan.

```java

public class ContohIfElse {

    public static void main(String[] args) {
        int nilai = 10;
        String pesan="", jumlah="";

        if (nilai>2) {
            jumlah = "Lebih besar dari 2";
            if(nilai%2 == 0){
                pesan = "Bilangan Genap";
            }else{
                pesan = "Bilangan Ganjil";
            }
            System.out.println(jumlah+" dan "+pesan);
        }else{
            jumlah = "Lebih kecil dari 2";
            System.out.println(jumlah);
        }
    }

}
```

## #2 Percabangan Switch Case

Jika sebelumnya kita telah mempelajari fungsi percabangan `if-else`, dan pada kesempatan kali ini kita akan belajar konsep percabangan `switch case`.

Jika pada percabangan if-else kita menggunakan tipe data boolean sebagai kondisional, maka pada switch case kita dapat menggunakan beberapa tipe data primitif seperti byte, short, char, dan int sebagai kondisi yang akan kita uji.

**Struktur dan Aturan Penulisan Switch Case**

Pernyataan switch memungkinkan kita untuk menguji sebuah variabel terhadap daftar nilai. Setiap nilai disebut case lalu variabel akan dicek untuk setiap case.

Silahkan perhatikan baris kode berikut:

```java

switch(expression) {
   case value1 :
      // Statements
      break;

   case value2 :
      // Statements
      break;

   // You can have any number of case statements.
   default :
      // Statements
}
```

Berikut aturan yang berlaku untuk fungsi switch case:

Variabel yang digunakan adalah bilangan bulat yang dapat dikonversi, string dan enum.

Kemudian nilai untuk sebuah case harus memiliki tipe data yang sama dengan variabel.

Sebenarnya cara kerjanya seperti ini:

Program akan membandingkan nilai dari variabel expression terhadap daftar nilai case satu persatu hingga kondisi terpenuhi lalu menjalankan statement.

Namun jika tidak ada satupun case yang terpenuhi maka statement default lah yang akan dieksekusi oleh program. Keyword break sebagai batas akhir statement.

**Contoh Sederhana Percabangan Switch Case dalam Program Java**

Disini kita akan melihat contoh sederhana penggunaan switch case pada bahasa pemrograman java, mari kita perhatikan secara seksama baris kode berikut:

```java

public class ContohPercabanganSwitch {

   public static void main(String args[]) {

      char grade = 'A';

      switch(grade) {
         case 'A' :
            System.out.println("Perfect!");
            break;
         case 'B' :
            System.out.println("Excellent!");
            break;
         case 'C' :
            System.out.println("Well done");
            break;
         case 'D' :
            System.out.println("You passed");
         case 'F' :
            System.out.println("Better try again");
            break;
         default :
            System.out.println("Invalid grade");
      }
      System.out.println("Your grade is " + grade);
   }
}
```

Dalam contoh program diatas kita ingin memberikan respon yang berbeda untuk setiap `grade` yang berhasil didapatkan oleh masing-masing mahasiswa.

Misalnya ketika anda mendapat nilai A maka yang akan tercetak adalah kata perfect jika grade sama dengan B maka akan tercetak excellent dan seterusnya.

Namun jika grade tidak sesuai dengan daftar nilai maka statement default-lah yang akan dieksekusi sehingga muncul kata invalid grade.

Jika di compile maka akan tercetak:

```

Perfect!
Your grade is A
```

**Studi Kasus Fungsi Switch Case pada Java**

Dalam studi kasus kali ini kita didiminta untuk menghitung jumlah hari dari sebuah bulan di tahun tertentu. Silahkan perhatikan baris berikut:

```java

class HitungHari{
    public static void main(String[] args) {

        int bulan = 1;
        int tahun = 2019;
        int jumlahHari = 0;

        switch (bulan) {
            case 1: case 3: case 5:
            case 7: case 8: case 10:
            case 12:
                jumlahHari = 31;
                break;
            case 4: case 6:
            case 9: case 11:
                jumlahHari = 30;
                break;
            case 2:
                if (tahun % 4 == 0)
                    jumlahHari = 29;
                else
                    jumlahHari = 28;
                break;
            default:
                System.out.println("Maaf bulan hanya sampai 12.");
                break;
        }
        System.out.println("Jumlah hari = " + jumlahHari);
    }
}
```

Jadi inti dari program diatas adalah: Jika `bulan` bernilai 1, 3, 5, 7, 8, 10, atau 12 maka jumlah hari = 31. Jika bulan bernilai 4, 6, 9, atau 11 maka jumlah hari = 30

Khusus untuk bulan 2 kita membutuhkan sebuah pecabangan if-else untuk kondisi. Jika hasil bagi 4 dari tahun = 0 maka jumlah hari = 29 jika tidak jumlah hari = 28

Berikut hasil program diatas:

```

Jumlah hari = 31
```

## Penutup

Demikian penjelasan singkat mengenai fungsi percabangan if else dan switch case dalam bahasa pemrograman java, jika anda memiliki pertanyaan terkait program diatas jangan sungkan untuk meninggalkan pesan di kolom diskusi.

Lihat juga seri [panduan belajar pemrograman java](/blog/belajar-java/) dari kami.
