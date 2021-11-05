---
title: "Contoh Program Sederhana Array pada Java 1 & 2 Dimensi [Studi Kasus]"
date: 2019-04-23
slug: array-java

description: "Berikut adalah contoh program java menggunakan array 1 dimensi dan multi dimensi. Mari kita pelajari bersama melalui studi kasus kita kali ini."

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Sebenarnya Array pada bahasa Java tidak berbeda dengan pemrograman C++. Jadi akan mudah bagi anda yang telah menyelesaikan [seri panduan belajar c++](/blog/belajar-cpp/) kami.

Namun jangan khawatir, bagi anda yang belum paham mengenai tipe data array dan penggunaanya dalam pemrograman Java. Karena akan saya bahas dari awal.

Saat anda membaca artikel ini, saya anggap anda sudah paham apa itu variabel.

**Jadi, contoh kasus sederhananya seperti ini:**

Ketika anda ingin menyimpan sebuah data yaitu `nama` misalnya, tentunya anda perlu mendeklarasikan sebuah variabel untuk dapat menyimpan data tersebut.

Namun sayangnya kita tidak selalu berurusan dengan satu data, sekarang kita bayangkan jika kita ingin membuat daftar nama mahasiswa di kelas kita.

**INGAT**: sebuah variabel biasa hanya mampu menyimpan 1 nilai.

Lalu, apakah kita akan membuat variabel `nama1`, `nama2`, `nama3`, dan seterusnya?

Tentu saja tidak, inilah sebabnya kita membutuhkan sebuah tipe data array. Karena array memungkinkan kita untuk menyimpan banyak data dalam sebuah variabel.

*(Silahkan baca: [Pengertian Tipe Data Array](/blog/pengertian-array/))*

## Table Of Contents

## #1 Deklarasi Variabel Array

Untuk dapat menggunakan array, kita harus mendeklarasikannya terlebih dahulu.

Cara pertama dengan menggunakan operator `new`.

```java

tipeData [] namaArray = new tipeData[panjangArray];
```

Dalam sintaks diatas:

Kita harus menuliskan tipe datanya lalu diikuti tanda kurung siku dan juga nama array.

Lalu tuliskan `=` (sama dengan) `new` tipe data diikuti panjang array didalam kurung siku.

Sebagai alternatif lain, anda bisa langsung memberikan nilainya sekaligus.

```java

tipeData [] namaArray = {nilaiData0,nilaiData1,nilaiData2,...,nilaiDataN};
```

Pada cara kedua ini kita hanya perlu menulikan tipe data, kurung siku, nama array, sama dengan, kurung kurawal dengan nilai yang kita tentukan didalamnya.

Untuk memudahkan anda memahaminya mari kita lihat contoh berikut ini:

```java

String[] namaMahasiswa = new String[10];
```

Dalam kode diatas berarti kita menyiapkan variabel bernama `namaMahasiswa` sebanyak 10 larik ber tipe data String. Artinya hanya boleh diisi dengan teks atau tulisan.

```java

int[] nilaiMahasiswa = {10,9,8,10,7};
```

Sedangkan maksud dari kode diatas bahwa kita ingin mendeklarasikan variabel bernama `nilaiMahasiswa` bertipe data angka (`int`) dengan nilai awal 10, 9, 8, 10, dan 7.

*(Silahkan baca: [Macam-Macam Tipe Data pada Java](/blog/tipedata-java/))*

## #2 Cara Menggunakan Array

Kita harus paham bahwa untuk dapat mengakses array kita tidak dapat langsung memanggil namanya seperti pada variabel biasa. Karena array berbetuk baris.

Jadi, untuk mengakses tiap baris array kita menggunakan nomor indexnya.

Sebagai contoh disini saya akan mendeklarasikan array sebagai berikut:

```java

String[] namaMahasiswa = new String[5];
```

Maka, untuk dapat memberikan nilai kita harus mengakses nomor indexnya.

```java

namaMahasiswa[0] = "Damas Amirul Karim";
namaMahasiswa[1] = "Dianita Yuswanti";
namaMahasiswa[2] = "Yustin";
namaMahasiswa[3] = "Afan Hafarasani";
namaMahasiswa[4] = "Miftakhul Fauzi";
```

**INGAT**: Index pada array dimulai dari Nol.

Lalu, untuk mengakses nilai dari tiap-tiap baris kita hanya perlu memanggil nama variabel diikuti nomor indexnya. Berikut adalah contohnya:

```java

System.out.println(namaMahasiswa[0]);

//Outputnya: Damas Amirul Karim
```

Nah pada contoh diatas kita hanya menggunakan 5 data, bagaimana jika 100 data?

Tenang, saat kita ingin memberikan nilai ataupun mengakses nilainya kita tidak perlu menuliskan nomor index tersebut satu persatu kok. Lalu bagaimana caranya?

Karena disini terdapat sebuah pola yaitu pertambahan nomor index pada Array.

Maka dalam penerapannya, array akan kita sandingkan dengan program perulangan.

## #3 Contoh Array dalam Program Java

Sebagai studi kasus, misalnya disini kita sebagai programmer diminta untuk membuat program yang mampu menjumlahkan angka 1 hingga 100. Lalu menampilkannya.

Dalam kasus diatas kita membuat sebuah kelas bernama `TotalAngka`. Lalu didalamnya kita membuat program utama untuk menjumlahkan angka 1 sampai 100.

Mari perhatikan contoh berikut:

```java

public class TotalAngka {

	public static void main(String[] args){
		int[] angka = new int[100];

		int x = 1;
		//untuk memberi nilai pada tiap index
		for (int i = 0; i < angka.length; i++) {
			angka[i] = x;
			x++;
		}

		int total = 0;
		//untuk menjumlahkan nilai 1-100
		for (int i = 0; i < angka.length; i++) {
			total+=angka[i];
		}

		System.out.println(total);
	}

}
```

Disana kita mendeklarasikan 3 variabel:

- Yang pertama, sebuah variabel array bernama `angka` dengan tipe integer.

- Yang kedua, variabel `x` bertipe data bertipe data integer dengan nilai awal = 1.

- Yang ketiga, adalah variabel `total` untuk menyimpan jumlah nilai.

Kemudian kita menggunakan fungsi perulangan atau looping.

- Looping pertama untuk memberikan nilai untuk tiap index array dari 1-100.

- Looping kedua kita gunakan untuk menjumlahkan tiap nilai kedalam variabel `total`.

Lalu, diakhir program kita akan menampilkannya hasil dari penjumlahannya.

*(Silahkan Baca: [Looping pada Java](/blog/percabangan-java/))*

## #4 Jenis Array 2 Dimensi

Sebagai tambahan kita akan mempelajari array berdimensi dua. Disini kita analogikan seperti sebuah tabel dimana kita memiliki baris dan kolom sebagai nomor index.

Cara mendeklarasikannya sama dengan array satu dimensi, bedanya terletak pada jumlah kurung kotak dimana kita menggunakan dua buah kurung kotak (`[][]`).

```java

int[][] nilai = new int[2][2];
```

Dan cara mengaksesnya juga dengan memanggil nomor indexnya.

```java

nilai[0][0] = 10;
nilai[0][1] = 12;
nilai[1][0] = 11;
nilai[1][1] = 14;
```

Jika dalam bentuk tabel maka akan seperti ini:

| Index       | Kolom 0                 | Kolom 1                 |
| ----------- | ----------------------- | ----------------------- |
| **Baris 0** | (baris 0, kolom 0) = 10 | (baris 0, kolom 1) = 12 |
| **Baris 1** | (baris 1, kolom 0) = 11 | (baris 1, kolom 1) = 14 |

Langsung saja, berikut contoh array 2 dimensi pada java:

```java

public class Matriks {
	public static void main(String[] args){
		int[][] nilai = {{10,12},{11,14}};

		for (int i = 0; i < nilai.length; i++) {
			for (int j = 0; j < nilai[i].length; j++) {
				System.out.print(nilai[i][j]+"\t");
			}
			System.out.println();
		}

	}
}
```

Dalam program diatas kita membuat sebuah kelas bernama `Matriks`.

Lalu pada program utama kita deklarasikan variabel nilai bertipe array dengan tipe data ineteger dan juga nilai untuk masing-masing index `[0][0]` hingga `[1][1]`.

Nah khusus pada array dua dimensi kita membutuhkan *Nested Loop*. Silahkan pelajari lagi mengenai [Apa itu Looping dalam Bahasa Pemrograman](/blog/algoritma-perulangan/).

## Pembahasan Kesimpulan

Mungkin banyak yang bertanya apa hungungan Array degan Looping pada java? Saya kok sering melihatnya dalam sebuah contoh program java khususnya array di internet.

Sebenarnya tidak ada hubungan yang sepesial.

Anda bisa saja menggunakan array tanpa sebuah perulangan atau looping. Caranya dengan memanggil nama variabel diikuti nomor indexnya secara manual.

Namun tentunya hal ini membuat program kita tidak efektif dan efisien. Karena kita sama saja dengan membuat banyak variabel dengan nama yang berurutan.

Lalu apa bedanya? Jadi, kita perlu sebuah perulangan.

Kita dapat melihat sebuah pola pada array bahwa nomor indexnya selalu dimulai dari angka nol (0) lalu diikuti anga setelahnya hingga batas tertentu.

Nah, pola inilah yang dapat kita manfaatkan untuk membuat program kita lebih efektif dan efisien. Karena kita tahu berapa batas awal dan akhir juga pertambahan array.

Demikianlah pembahasan lengkap mengenai tipe data array dalam pemrograman Java.

Jangan lewatkan [seri panduan belajar java](/blog/belajar-java).
