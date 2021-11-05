---
title: "Pengertian Method: 2+ Contoh Program Fungsi dan Prosedur pada Java"
date: 2019-05-06
slug: method-java

description: "Mau tau apa yang dimaksud method pada java? Inilah penjelasan bagaimana cara membuat prosedur dan fungsi dalam program sederhana kita"

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Tanpa anda sadari, sebenarnya anda telah menggunakan salah satu method.

Saat anda ingin mencetak sesuatu ke *console* maka anda akan menggunakan sintaks `System.out.println();`. Nah **println();** merupakan salah satu method pada java.

Nantinya, kita akan belajar bagaimana cara membuat sebuah method kita sendiri.

Namun sebelum itu kita akan membahas pengertian method terlebih dahulu.

> **Method** dalam pemrograman Java adalah sebuah blok program terpisah (diluar program utama) yang kita gunakan untuk menyelesaikan masalah khusus.

**Tujuannya:** memecah program kompleks menjadi bagian-bagian kecil sehingga nantinya dapat kita gunakan secara berulang-ulang tanpa harus menulis baris kode yang sama.

Jika anda pernah mendengar istilah prosedur dan fungsi atau mungkin juga *function*, pada dasarnya sama. Namun dalam Java kita akan menyebutnya sebagai Method.

*(Silahkan baca: [Perbedaan Prosedur dan Fungsi](/blog/prosedur-dan-fungsi/))*

## Table Of Contents

## Bagaimana Cara Membuat Method

Berikut adalah struktur dari sebuah method:

```java

modifier returnType namaMethod (Parameter List) {
   // method body
}
```

Penjelasan singkat:

- **modifier** - Untuk menentukan hak akses terhadap method.

- **returnType** - Ada dua jenis method yaitu: *method void* dan *method return*.

- **namaMethod** - Ini adalah nama method. Sesuai keinginan anda.

- **Parameter** - Untuk meng-oper sebuah nilai. Bersifat opsional.

Dan berikut adalah bentuk method pada java:

```java

public void cetakPesan(){
  System.out.println("Belajar Java bersama kodedasar.com");
}
```

Nah dari contoh diatas kita membuat sebuah method bernama `cetakPesan` tanpa menggunakan parameter. Lalu tugasnya untuk mencetak sebuah pesan.

**Catatan**: Dalam method kita bisa menggunakan parameter maupun tanpa menggunakan parameter. Hal ini tergantung kebutuhan program yang kita kerjakan.

## #1 Method Void (Tanpa Nilai Kembali)

Diawal pembahasan kita sudah menyinggung bahwa ada dua jenis method dan pada bagian ini kita akan membahas tentang method void yang tidak memiliki nilai kembali.

Method jenis ini fungsinya seperti prosedur pada bahasa pascal. Untuk lebih jelasnya disini saya akan membuat contoh program java menggunakan method void.

Silahkan perhatikan baris kode berikut ini:

```java

public class MethodVoid {
	public static String tulisan = "Selamat Belajar Method pada Java!";

	public static void cetakTulisan(){
		System.out.println(tulisan);
	}

	public static void cetakNama(String nama){
		System.out.println("Nama saya adalah "+nama);
	}

	public static void main(String[] args){
		cetakTulisan();
		cetakNama("Damas Amirul Karim");
	}
}
```

**Catatan**: keyword `static` berfungsi agar variabel atau method yang kita buat dapat digunakan langsung dalam program utama tanpa harus membuat obyek.

Saya sengaja menambahkannya karena kita belum belajar tentang OOP.

Dalam program diatas kita membuat sebuah kelas bernama `MethodVoid`. Pertama kita mendeklarasikan variabel `tulisan` dengan tipe data String.

Kemudian, kita membuat dua method void bernama `cetakTulisan` dan `cetakNama`. Yang membedakannya adalah penggunaan parameter pada method cetakNama.

Terakhir, kita memanggil method teadi kedalam program utama.

Tentu output dari program diatas dapat kita tebak yaitu:

```java

Selamat Belajar Method pada Java!
Nama saya adalah Damas Amirul Karim
```

Jika kita lihat lagi, method `cetakTulisan()` akan menampilkan nilai dari variabel `tulisan` dimana sebelumnya telah kita deklarasikan langsung nilainya sekaligus.

Sedangkan pada method `cetakNama()` kita akan mengoper sebuah nilai didalam parameter, yang kemudian akan disimpan dalam variabel `nama` lalu dicetak.

## #2 Method dengan Return Value

Selanjutnya kita akan membahas tentang method return. Yang dimaksud dengan method return artinya kita akan mengembalikan sebuah nilai pada fungsi atau method kita.

Lalu nilai kembalian tersebut sesuai dengan tipe data yang digunakan.

*(Baca: [Macam-macam Tipe Data Primitif pada Bahasa Java dan Fungsinya](/blog/tipedata-java/))*

Untuk lebih mudahnya mari kita lihat contoh program berikut ini:

```java

public class MethodReturn {

	public static String nama = "Damas Amirul Karim";

	public static String getNama(){
		return nama;
	}

	public static int hitungUmur(int lahir, int sekarang){
		int umur = sekarang - lahir;
		return umur;
	}

	public static void main(String[] args){

		String namaSaya = getNama();
		System.out.println("Nama saya: "+namaSaya);

		int umurSaya = hitungUmur(1995, 2019);
		System.out.println("Umur saya: "+umurSaya);
	}

}
```

Dalam program diatas kita membuat kelas bernama `MethodReturn` dimana kita telah mendeklarasikan variabel `nama` dan method `getNama()` juga method `hitungUmur()`.

Sama seperti method void kita boleh menggunakan parameter maupun tanpa parameter hal ini disesuikan dengan program yang kita butuhkan.

Hasil output dari program diatas adalah:

```java

Nama saya: Damas Amirul Karim
Umur saya: 23
```

Jika kita perhatikan dalam program diatas kita menggunakan keyword `return` untuk tiap method. Namun tipe data untuk tiap method berbeda sesuai kebutuhan kita.

Nah fungsi `return` adalah untuk mengembalikan nilai kedalam fungsi itu sendiri. Intinya nilai yang dikembalikan akan disimpan dalam nama method.

Inilah sebabnya kita dapat mencetak atau memindakan nilai dari method return kedalam variabel. Contohnya kita memindahkan nilai `getNama()` kedalam variabel `namaSaya`.

Meskipun demikian, sebenarnya saya bisa saja langsung mencetaknya.

## Penutup dan Kesimpulan

Dalam praktiknya, method void akan sering kita jumpai untuk memberikan sebuah nilai terhadapat variabel atau yang nantinya akan kita kenal dengan sebutan Setter.

Sedangkan method return akan sering kita jumpai untuk mengambil sebuah nilai dari sebuah variabel atau yang kita sebuat dengan method Getter.

Tambahan, intinya kita menggunakan sebuah parameter jika ingin mengoper sebuah nilai yang kemudian akan kita olah kedalam sebuah method baik void maupun return.

Jangan lewaktan [seri panduan belajar java](/blog/belajar-java/) kami.
