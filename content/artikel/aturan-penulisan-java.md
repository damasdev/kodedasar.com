---
title: "Aturan Penulisan di Java: Variabel, Konstanta, Method dan Class"
date: 2019-03-23
slug: aturan-penulisan-java

description: "Disini kita akan belajar memahami aturan penamaan kelas, variable, method, dan kontanta (seperti penggunaan camel-case, underscore, dan lain-lain)."

published: true
author: "Damas Amirul Karim"
tags: ['Java']
series: false
cover_image: ./images/java.png
canonical_url: true
---

Mungkin banyak dari anda sudah tahu bahwa: bahasa pemrograman Java bersifat *case sensitive* yang berarti bahwa `namavariabel` tidak sama dengan `NamaVariabel`.

Namun tahukah anda bahwa ada beberapa aturan dalam pemberian nama variabel, konstanta, method, dan class? Jika belum maka artikel ini sangatlah tepat untuk anda.

Disini saya ingin anda supaya membiasakan untuk menerapkan konsep dan aturan pemberian nama, hal ini akan berguna saat anda mengerjakan program besar.

Meskipun ada beberapa poin yang tidak wajib dipraktikan, namun saya sarankan anda memakai konsep ini untuk memudahkan dalam memahami kode program.

## Table Of Contents

## #1 Nama Variabel, Method, dan Class

Seperti yang sudah saya singgung diawal, java bersifat case sensitive artinya huruf besar (kapital) dan huruf kecil akan berpengaruh. contoh: `nama` != `NAMA`.

Untuk itu anda harus memperhatikan nama variabel, konstanta, method, ataupun class anda apakah menggunakan huruf kapital atau tidak. Lalu, perhatikan juga hal berikut:

***Reserved word*** - Anda tidak boleh menggunakan *reserved word* atau keyword java karena keyword-keyword ini telah dipesan oleh program java.

| Reserved Keyword |                |                |                |                |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| abstract       | continue       | for            | new            | switch         |
| assert         | default        | goto           | package        | synchronized   |
| boolean        | do             | if             | private        | this           |
| break          | double         | implements     | protected      | throw          |
| byte           | else           | import         | public         | throws         |
| case           | enum           | instanceof     | return         | transient      |
| catch          | extends        | int            | short          | try            |
| char           | final          | interface      | static         | void           |
| class          | finally        | long           | strictfp       | volatile       |
| const          | float          | native         | super          | while          |

Tenang saja, anda tidak perlu menghafal semua keyword tersebut. Yang terpenting adalah gunakan nama yang mudah diingat dan dapat mengambarkan fungsinya.

**Operator** - Dalam pemberian nama variabel, konstanta, method, dan class anda tidak diperbolehkan untuk menggunakan simbol-simbol operator.

Berikut contoh pemberian nama yang salah:

```

+metode();
-variabel;
*konstanta;
```

**Angka** - Pemberian nama tidak boleh diawali dengan bilangan (0, 1, 2, ...).

Berikut contoh pemberian nama yang salah:

<pre><code><br />7namaVariabel<br />99design<br /></code><br /></pre>

Aturan pemberian nama yang terakhir adalah: Selalu dimulai dengan huruf abjad, atau underscore ( \_ ), atau tanda dolar ( $ ) kemudian dapat pula diikuti dengan angka.

Berikut contoh penulisan nama yang benar:

```

_namaVariabel;
$kodeDasar;
contohNama;
nama1;
n4maMetode();
```

Nah, beberapa contoh diatas merupakan aturan umum pemberian nama yang wajib anda ikuti. Selain itu, masih ada beberapa aturan yang dapat anda ikuti.

Aturan selanjutnya ini akan bermanfaat ketika anda masuk kedalam pembuatan program berskala besar. Misalnya membuat program yang dikerjakan oleh beberapa orang.

**TIPS**: Anda akan lebih mudah memahami maksud dari program tersebut.

## #2 Penulisan Kelas (sintaks: class)

Dalam program java, setiap baris kode berada dalam sebuah kelas. Namun sebelum anda membuat kelas, ada beberapa aturan yang perlu anda ketahui.

**Pertama** - Hanya boleh ada satu kelas `public` dalam satu file java

Sebagai contoh disini saya membuat class dengan nama file `Hewan.java`

```java

public class Hewan {
   .......

   public static void main (String[] args){
      ......
   }
}
```

**Kedua** - Boleh lebih dari satu kelas dalam sebuah file java jika Non public class.

Sebagai contoh disini saya membuat class dengan nama file `Herbivora.java`

```java

class Hewan {
   .......
   ......
}
class Herbivora extends Hewan{
   .........
   .........
   public static void main (String[] args){
      ......
   }
}
```

**Ketiga** - Nama file untuk class public harus sama dengan nama kelas.

Sebagai contoh ketika anda membuat kelas public bernama `ContohKelas`, maka anda harus menyimpan dengan nama `ContohKelas.java`, jika bukan public maka bebas.

**Keempat** - Karakter pertama sebuah kelas diawali dengan huruf kapital, hal ini juga berlaku untuk dua kata atau lebih. Gunakan huruf kapital untuk karakter pertama.

Berikut contoh penamaan kelas yang benar:

```java

class Kelas {...}
class NamaKelas {...}
class ContohNamaKelas {...}
```

**Catatan Penting**: Aturan penamaan pada kelas menggunakan konsep *Camel Case* atau huruf kapital di setiap karakter pertama dan tanpa spasi.

## #3 Penulisan Variabel &amp; Method

Untuk penamaan variabel dan juga method saya rasa sama, oleh karena itu saya menggabungkan kedua hal tersebut menjadi satu pembahasan ringkas.

Aturannya seperti ini:

Jika nama variabel atau method terdiri dari satu kata maka gunakan huruf kecil untuk semua karakter, sedangkan jika anda menggunakan lebih dari satu kata...

..maka kata pertama menggunakan huruf kecil, kemudian setiap karakter pertama dari kata berikutnya menggunakan huruf kapital. Camel case tidak untuk kata pertama.

Berikut contoh penulisan variable dan method yang benar:

```

umur;
namaDosen;
nomorPokokMahasiswa;
cetakNama();
hitungUmur();
```

Sebagai catatan tambahan:

Pemberian nama method menggunakan kata kata kerja atau ungkapan kata kerja.

Khusus penamaan variabel lokal dan parameter silahkan gunakan akronim, singkatan, atau istilah-istlah yang mudah diingat, contoh: `npm`.

## #4 Penulisan Konstanta

Jika anda ingin medeklarasikan konstanta maka gunakan huruf kapital semua. Untuk konstanta lebih dari satu kata maka gunakan underscore ( \_ ).

Berikut contoh penulisan konstanta yang benar:

```

TAHUN;
MAX_DATA;
```

## Penutup

Inti dari pembahasan ini adalah untuk memahami aturan penamaan kelas, variable, method, dan kontanta (seperti penggunaan camel-case, underscore, dan lain-lain).

Jangan lewatkan seri panduan [belajar java lengkap](/blog/belajar-java/) dari kami.
