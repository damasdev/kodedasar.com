---
title: "Macam-Macam Algoritma Sorting dan Contoh Programnya dalam Pascal"
date: 2019-11-04
slug: algoritma-sorting

description: "Di artikel ini anda akan belajar beragam algoritma sorting seperti bubble sort, quick sort, shell short, selection sort, insert short dan merger sort disertai contoh programnya."

published: true
author: "Damas Amirul Karim"
tags: ['Algoritma', 'Pascal']
series: false
cover_image: ./images/pascal.png
canonical_url: true
---

Karena fokus kita disini adalah menuntun anda bagaimana memahami logika pemrograman dan algoritma maka disini saya akan sedikit mengulas mengenai algoritma sorting.

Jika anda merupakan mahasiswa teknik informatika maka algoritma sorting (pengurutan data) ini mungkin akan anda dapatkan saat anda berada di awal semester perkuliahan.

Beberapa metode sorting mengurutkan data yang dikenal antara lain adalah:

1. Bubble Sort (sederhana tetapi lambat)
2. Quick Sort (cepat tetapi rumit)
3. Shell Sort (agak cepat dan tidak terlalu rumit)
4. Selection Sort
5. Insert Sort
6. Merge Sort

Yang perlu anda ketahui adalah bagaimana cara kerja dari masing-masing algoritma.

Dan disini kita akan membandingkan beberapa algoritma tersebut untuk mengurutkan sebuah data. Namun anda harus ingat bahwa: **tidak ada algoritma salah atau buruk**.

Hanya saja, ada algoritma yang lebih baik dari yang lain.

Nah disini tugas anda sebagai programmer adalah menentukan algoritma terbaik untuk program anda dan menguji apakah sudah sesuai dengan kebutuhan anda.

## Table Of Contents

## #1 Bubble Sort

Yang pertama kita akan membahas bubble sort. Algoritma ini merupakan salah satu algoritma pengurutan yang paling sederhana, baik dalam hal pengertian maupun penerapannya.

>Ide dari algoritma bubble sort adalah mengulang proses pembandingan antara tiap-tiap elemen array dan menukarnya apabila urutannya salah.

Teknik ini menyusun data yang diinginkan secara berurutan dengan membandingkan elemen data yang ada dan terus diulang hingga tidak perlu dilakukan penukaran lagi.
Berikut ini adalah gambaran dari algoritma bubble sort:

```pascal

for i:=1 to Jumlah_data-1 do
  for j:=i+1 to Jumlah_data do
    if Data[i]>Data[j] then
    begin
      t:=Data[i];
      Data[i]:=Data[j];
      Data[j]:=t;
    end;
```

Kita misalkan memiliki 5 angka yang akan kita simpan kedalam variabel `Data` (Array).

Dengan masing-masing nilai sebagai berikut:

```

Data[1] := 3;
Data[2] := 1;
Data[3] := 4;
Data[4] := 2;
Data[5] := 6;
```

**Cara Kerja:**

1. Langkah pertama: `Data[1]` akan dibandingkan dengan `Data[2]`. Jika `Data[1]` lebih besar dari `Data[2]` maka nilai dari kedua variabel tersebut ditukar posisinya.

2. `Data[1]` akan terus dibandingkan dengan data-data selanjutnya (`Data[3]`, `Data[4]`, dan `Data[5]`). Hingga akhirnya `Data[1]` berisi nilai terkecil.

3. Setelah proses perbandingan `Data[1]` selesai, selanjutnya kita akan membandingkan `Data[2]` dengan `Data[3]`, `Data[4]` dan `Data[5]` seperti proses sebelumnya.

4. Begitu seterusnya sampai semua data selesai di bandingkan.

Berikut adalah conto program pascal dengan agoritma buble sort:

```pascal

Program Bubble_Urutan;
  uses crt;
  var Data:array[1 .. 5] of integer;
  i,j,t,Jumlah_data:integer;
Begin
  Data[1] := 3;
  Data[2] := 1;
  Data[3] := 4;
  Data[4] := 2;
  Data[5] := 6;
  Jumlah_data := 5;

  writeln('Data Awal:');
  for i:=1 to Jumlah_data do
  begin
    writeln('Data[',i,'] = ',Data[i]);
  end;

  for i:=1 to Jumlah_data-1 do
    for j:=i+1 to Jumlah_data do
      if Data[i]>Data[j] then
      begin
        t:=Data[i];
        Data[i]:=Data[j];
        Data[j]:=t;
      end;

  writeln('Hasil:');
  for i:=1 to Jumlah_data do
  begin
    writeln('Data[',i,'] = ',Data[i]);
  end;

End.
```

## #2 Quick Short

Algoritma quick short ditemukan oleh *E. Hoare*. Algoritma ini menggunakan metode rekursi sampai habis. Prinsipnya membagi data menjadi dua bagian yang sama (kiri dan kanan).

Dimana data tengah menjadi pivot (pusat operasi). Kemudian kita akan mengumpukan data dengan nilai lebih kecil dari pivot disebelah kiri pivot, dan di kanan untuk yang lebih besar.

Karena dimungkinkan bagian kiri dan kanan pivot tidak sama besarnya. maka dari itu tiap bagian di bagi menjadi dua lagi sehingga mempunyai pivot yang baru.

```pascal

baca:=0;
pusat := A[(awal+akhir) div 2];
kiri := awal;
kanan := akhir;
While kiri <= kanan Do
  Begin
  While A[kiri] < pusat Do
  Inc(kiri);
  While A[kanan] > pusat Do
    Dec(kanan);
    If kiri<=kanan Then
      Begin
      Ganti(A[kiri],A[kanan]);
      Inc(kiri);
      Dec(kanan);
      Inc(baca);
      End;
  End;

If kanan>awal Then
  Urut(awal,kanan);
  If akhir>kiri Then
    Urut(kiri,akhir);
```

Algoritma Quick Sort juga disebut juga dengan *partition Exchange sort* karena konsepnya membuat partisi-partisi, dan sort dilakukan per partisi.

## #3 Shell Sort
Prinsipnya hampir sama dengan Bubble Sort tetapi dioptmisisasi sehingga lebih cepat.

Ditemukan oleh Donald Shell. prinsipnya adalah membandingkan data dengan jarak tertentu dalam array. Algoritma utamanya adalah sebagai berikut :

```pascal

baca:=0;
For i:= (m Div 2) Downto 1 Do
For j:= 1 To m-i Do
  If A[j]>A[j+i] Then
  Begin
    Ganti(A[j],A[j+i]);
    Inc(baca);
  End;
```

## #4 Selection Sort

Algoritma utamanya adalah sebagai berikut:

```pascal

baca:=0;
For i:= 1 To m-1 Do
Begin
  tempat:=i;
  For j:= i+1 To m Do
    If A[tempat]>A[j] Then
      tempat:=j;
      Ganti(A[i],A[tempat]);
      Inc(baca);
End;
```

## #5 Insert Sort

Algoritma utamanya adalah sebagai berikut :

```pascal

baca:=0;
For i:= 2 To m Do
Begin
  G:=A[i];
  j:=i-1;
  A[0]:=G;
    While G<A[j] Do
    Begin
      A[j+1]:=A[j];
      Dec(j);
      Inc(baca);
    End;
    A[j+1]:=G;
End;
```

## #6 Merge Sort

Algoritma utamanya

```pascal

Begin
i:=awal;
k:=awal;
j:=tengah+1;
Repeat
  If A[i]<A[j] Then
    Begin
      B[k]:=A[i];
      Inc(i);
      End
      Else
      Begin
      B[k]:=A[j];
      Inc(j);
    End;
  Inc(k);
  Inc(baca);
Until (i>tengah) Or (j>akhir);

If i>tengah Then
  For t:= j To akhir Do
  Begin
    B[k+t-j]:=A[t];
  End
Else
  For t:= i To tengah Do
  Begin
    B[k+t-i]:=A[t];
  End;
End;
```

## Penutup

Selamat karena ini adalah artikel terakhir yang akan saya buat untuk seri panduan bahasa pascal. Jika anda sudah sampai artikel ini berarti anda sudah siap untuk ngoding.

Sampai jumpa di seri panduan selanjutnya :)
