---
title: "2+ Macam Algoritma Percabangan Beserta Contoh Programmnya"
date: 2019-02-28
slug: algoritma-percabangan

description: "Disini anda akan belajar seperti apa algoritma percabangan dalam pemrograman dengan contoh program pengambilan keputusan bersadarkan kondisi tertentu"

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Dalam kehidupan sehari-hari tentu anda pernah menemukan sebuah pilihan, sebagai contoh sederhana ketika anda akan memasuki sebuah toilet umum.

Hal tersebut termasuk sebuah percabangan dengan algoritma "jika anda adalah laki-laki (True) maka masuk toilet pria, jika tidak (False) maka masuk toilet wanita".

Jadi setiap program percabangan hanya mengenal kondisi True (benar) atau False (salah), tidak ada konsidi <strike>bisa jadi</strike> atau kondisi lainnya yang tidak ada kepastian.

Berikut pengertian dari konsep percabangan:

>**Percabangan** adalah cara yang digunakan dalam program untuk mengambil keputusan ke salah satu kemungkinan *True* atau *False* dari beberapa kondisi.

Jadi program percabangan akan menjalankan instruksi sesuai dengan kondisi tertentu. Kondisi adalah persyaratan yang dapat bernilai benar atau salah.

Instruksi hanya dilaksanakan apabila kondisi bernilai benar.

## Table Of Contents

## Macam-macam Percabangan

Ada dua fungsi percabangan dalam pascal yaitu: `if then else` dan `case of`

**1. Percabangan If Then Else**

Bentuk struktur `If…Then…` adalah sebagai berikut :

```pascal

If Kondisi Then Statemen;
```

Statemen ini digunakan untuk mengendalikan jalannya suatu program berdasarkan suatu kondisi atau syarat yang diberikan. Bila kondisi yang diseleksi terpenuhi...

...maka statemen yang mengikuti Then akan diproses, sebaliknya bila kondisi tidak terpenuhi, maka yang akan diproses statemen berikutnya.

Jika kondisi bernilai benar (TRUE) maka statemen akan dikerjakan. Jika kondisi bernilai salah maka (FALSE) maka statemen tidak akan dikerjakan.

## #1 Contoh Program If Then Else Pascal

```pascal

Program Lulus;
Uses crt;
Var nilai : Real;
Begin
Write ('Jumlah Nilai :');
Readln (nilai);

If nilai > 60 Then Writeln('Lulus');

Readln;
End.
```

Pada contoh diatas, kita akan mencetak kata "Lulus" jika nilai yang kita masukan lebih dari 60. Jika tidak maka program tidak akan mencetak apapun.

Bentuk statemen `IF...THEN...ELSE....` merupakan pengembangan dari struktur `IF.....THEN.......` Bentuk statemen tersebut adalah sebagai berikut :

```pascal

If kondisi Then
   Begin
   ……
   statemen1;
   ……
   End
Else
   Begin
   …….
   statemen2;
   …….
   End;
```

Perintah ini berguna untuk memilih statemen mana yang akan dikerjakan oleh komputer berdasarkan kondisi/syarat yang diberikan.

Jika kondisi bernilai benar (TRUE) maka statemen1 akan dikerjakan. Jika kondisi bernilai salah maka (FALSE) maka statemen2 yang akan dikerjakan.

**PENTING**: Untuk selalu menambahkan tanda titik koma (;) di akhir fungsi if.

Dari contoh diatas, mari kita sedikit memodifikasi:

```pascal

Program Lulus;
Uses crt;
Var nilai : Real;
Begin
   Write ('Jumlah Nilai :');
   Readln (nilai);

   If nilai > 60 Then
      Begin
      Writeln('Lulus');
      End
   Else
      Begin
      Writeln('Tidak Lulus');
      End;

   Readln;
End.
```

Pada contoh kasus diatas kita akan menggukan kondisi dimana apabila nilai lebih dari 60 maka Lulus, jika tidak (kurang dari 60) maka tidak lulus.

**NESTED IF (If Then Else Bersarang)**

```pascal

IF (kondisi 1) THEN
  begin
    (kode program 1)
    IF (kondisi 1.1) THEN
      begin
        (kode program 1.1)
      end;
  end
ELSE
  begin
    (kode program 2)
  end;
```

IF bersarang atau nested IF adalah penggunaan struktur IF di dalam IF. Kondisi seperti ini sering digunakan untuk kode program yang sudah cukup kompleks.

Sebagai studi kasus disini kita ingin membuat program yang menyeleksi lamaran pekerjaan dengan ketentuan laki-laki dan umur dibawah 30 tahun.

```pascal

Program Loker;
Uses crt;
Var
  umur: Real;
  jenis: char;

Begin
   Write ('Jenis Kelamin (l/p) :'); Readln (jenis);
   Write ('Umur (1-100) :'); Readln (umur);

   If jenis = 'l' Then
      Begin
      If umur < 30 then
         Begin
         Writeln('Lolos');
         End;
      End
   Else
      Begin
      Writeln('Tidak Lolos');
      End;

   Readln;
End.
```

Demikianlah penjelasan lengkap mengenai percabangan if then else pada pascal.

## #2 Contoh Program Case Of Pascal

**Case Var Of** atau biasa disingkat `Case Of` adalah salah satu fungsi pada pascal yang mirip dengan If, namun untuk penggunaan yang lebih kompleks.

Ketika anda dihadapkan dengan banyak pilihan (lebih dari dua kondisi) maka program percabangan `case of` sangat cocok untuk anda gunakan.

Sebagai contoh kecil ketika anda ingin menggunakan ATM.

Anda akan dihadapkan dengan banyak pilihan sekaligus, misal: transfer, tarik tunai, cek saldo, dan lain-lain. Maka dibutuhkan program `case of` untuk mengatasinya.

Berikut struktur penulisan percabangan case of else dalam pascal:

```pascal

case (kondisi) of
   caselabel1 : Statemen;
   caselabel2 : Statemen;
   caselabelN : Statemen;

   else
     StatemenDefault;
end;
```

Jumlah case label dapat disesuaikan dengan kebutuhan anda. Kemudian jika semua kondisi tidak terpenuhi maka  `StatemenDefault`-lah yang akan dijalankan.

**Catatan:** Jenis variabel (kondisi) yang dipakai Case Of adalah Integer atau Char.

Sebagai studi kasus, berikut saya sertakan program ATM karya Telkom University:

```pascal

program bank;
uses crt;
var
  p:integer;
  sm:longint;
  saldo,setoran,tarikan:longint;
 procedure cek(saldo : longint);
           begin
              writeln('saldo anda sebesar : Rp.',saldo);
           end;

 procedure setor(tunai:longint);
          begin
              writeln('saldo awal anda sebesar : Rp.',saldo);
              writeln('setoran anda sebesar : Rp.',tunai);
              saldo:= saldo - tunai;
              writeln('————————————– -');
              writeln('saldo akhir anda sebesar : Rp.',saldo);
          end;
 procedure tarik(tt:longint);
         begin
           writeln('saldo awal anda sebesar : Rp.',saldo);
           writeln('tarikan anda sebesar : Rp.',tt);
               if ((saldo-tt) >= sm) then
                 begin
                    saldo:= saldo -tt;
                    writeln('—————————- -');
                    writeln('saldo akhir anda sebesar : Rp.',saldo);
                 end
               else
                begin
                     writeln('saldo anda tidak mencukupi');
                end;
         end;

 BEGIN
 clrscr;
 randomize;
 saldo := 1000000;
 sm:= 100000;
 repeat
 writeln('==============BANK TEL-U==============');
 writeln('MENU UTAMA');
 writeln('1. Cek Saldo');
 writeln('2. Setor');
 writeln('3. Tarik Tunai');
 writeln('4. Keluar');
 writeln('silahkan masukan pilihan anda : '); readln(p);
    case p of
 1 : begin
     cek(saldo);
     end;
 2 : begin
      write('Jumlah  setoran : Rp. '); readln(setoran);
      setor(setoran);
     end;
 3 : begin
      write('jumlah tarikan : Rp. '); readln(tarikan);
      tarik(tarikan);
     end;
 4 : begin
      writeln('terima kasih telah menggunakan jasa BANK TEL-U');
     end;
 end;
 writeln('press enter to continou…');
 readln;
 until (p=4);clrscr;
 end.
```

Mungkin masih ada beberapa kode yang masih membingungkan bagi anda, namun yang kita fokuskan adalah bagian `case of` pada program pascal diatas.

## Menarik Kesimpulan

Mungkin anda muncul pertanyaan kapan kita menggunakan percabangan `if then else` dan kapan kita menggunakan `case of`. Keduanya memiliki kelebihan masing-masing.

Tapi intinya kita menggunakan `if then else` ketika membutuhkan kondisi dengan logika (boolean). Sebagai contoh kondisi dimana nilai > 10.

Sedangkan fungsi `case of` hanya digunakan untuk kondisi dengan tipe char maupun integer, artinya tidak bisa digunakan untuk logika.

Demikianlah penjelasan mengenai algoritma percabangan.

Jangan lewatkan seri [belajar pascal](/blog/belajar-pascal) kami.
