---
title: "Contoh Program Sederhana C++ Menggunakan Namespace"
date: 2020-10-22
slug: namespace-cpp

description: "Berikut penjelasan mengenai pengertian namespace beserta contoh penerapannya dalam program menggunakan bahasa pemrograman c++"

published: true
author: "Damas Amirul Karim"
tags: ['C++']
series: false
cover_image: ./images/cpp.png
canonical_url: true
---

Pada artikel kali ini saya akan membahas tentang namespace pada bahasa pemrograman c++.

Pada dasarnya, namespace digunakan untuk mengelompokkan kelas, objek, dan fungsi di bawah satu nama.

Atau lebih mudahnya seperti anda memasukan file kedalam satu folder.

Langkah ini diperlukan untuk mengorganisir bagian-bagian kode program supaya lebih mudah untuk dibaca dan dirawat di kemudian hari. 

Selain itu, namespace juga berfungsi untuk mencegah kesalahan redefinisi akibat nama variabel yang sama. 

## Table Of Contents

## Cara Mendeklarasikan Namespace pada C++

Berikut formatnya:

```cpp
namespace NamaNamespace {}
```

Contoh sederhana penggunaan namespace adalah sebagai berikut :

```cpp

namespace myNamespace{
    int a, b;
}
```

Pada kode di atas, kita mendeklarasikan namespace bernama `myNameSpace` yang berisi variabel `a` dan variabel `b` dengan tipe data integer.

Sedangkan untuk mengakses objek yang ada di dalam namespace:

..anda harus menggunakan `scope` operator (::). 

```cpp
NamaNamespace::objek
```

Untuk kasus seperti contoh di atas, kita bisa mengakses variabel `a` dan `b` dengan dua baris kode berikut :

```cpp
myNameSpace::a
myNameSpace::b
```

## Contoh Penggunaan Namespace pada C++

Dengan fitur namespace, anda bisa mendeklarasikan lebih dari satu variabel dengan nama yang sama di namespace yang berbeda. Contohnya sepetri di bawah ini :

```cpp

#include <iostream>
using namespace std;

namespace first{
	int var = 5;
}

namespace second{
	double var = 3.1416;
}

int main () {
	cout << first::var << endl;
	cout << second::var << endl;
	return 0;
}
```

Pada contoh di atas, kita mendeklarasikan dua buah namespace bernama `first` dan `second`. 

- Namespace `first` memiliki variabel bernama `var` dengan tipe data integer. 

- Namespace `second` juga memiliki variabel bernama `var` tetapi dengan tipe data double.

Tanpa menggunakan namespace, variabel `var` akan didefinisikan ulang sehingga tipe data dan nilai dari variabel `var` akan berubah sesuai dengan deklarasi yang terakhir.

Tapi dengan namespace, kedua variabel tersebut disimpan sebagai dua variabel yang berbeda dan keduanya tetap dapat digunakan. Hal ini bisa Anda buktikan pada fungsi `main()` yang membaca nilai dari `first::var` dan `second::var`.

Jika Anda menjalankan program di atas, Anda akan mendapatkan nilai dari kedua variabel `var` yaitu 5 dan 3.1416.

## Menggunakan Keyword using pada Namespace

Dalam namespace, ada keyword bernama using yang digunakan untuk menunjuk namespace tertentu untuk digunakan dalam satu blok kode. Perhatikan contoh di bawah :

```cpp

#include <iostream>
using namespace std;

namespace first{
	int x = 5;
	int y = 10;
}

namespace second{
	double x = 3.1416;
	double y = 2.7183;
}

int main () {
	using first::x;
	using second::y;
	cout << x << endl;
	cout << y << endl;
	cout << first::y << endl;
	cout << second::x << endl;
	return 0;
}
```

Pada contoh di atas, kita mendeklarasikan dua namespace bernama `first` dan `second` yang keduanya memiliki dua variabel bernama `x` dan `y`. 

Bedanya, variabel di namespace `first` bertipe data integer sedangkan di namespace `second` bertipe data double.

Di dalam fungsi `main()`, kita menggunakan keyword using untuk menunjuk variabel `x` dari fungsi `first` dan variabel `y` dari fungsi `second`. 

Setelah menggunakan keyword using, kita dapat mengakses `first::x` dan `second::y` tanpa harus menyertakan nama namespace lagi. 

Cukup dengan menyebut nama variabel yang ingin dibaca yaitu `cout << x` dan `cout << y`.

Walaupun begitu, kita masih bisa mengakses variabel lain di luar keyword using dengan tetap menyertakan nama namespacenya.

Seperti pada `cout << first::y` dan `cout << second::x`.

Anda juga bisa menggunakan `using` untuk menunjuk namespace secara keseluruhan. Misalnya :

```cpp
#include <iostream>
using namespace std;

namespace first{
	double x = 3.1416;
}

int main () {
    using namespace first;
    cout << x << endl;
    return 0;
}
```

Baris kode di atas hampir sama dengan contoh sebelumnya. 

Bedanya, jika sebelumnya kita hanya menggunakan keyword `using`, kali ini kita menggunakan keyword `using namespace`.

Dengan keyword ini, anda bisa mengakses seluruh isi dari namespace yang ditunjuk tanpa perlu menyertakan nama namespacenya lagi.

Jika keyword using hanya berfungsi untuk menunjuk objek tertentu dari suatu namespace, keyword using namespace memiliki fungsi yang lebih luas yaitu menunjuk seluruh isi dari namespace yang ditunjuk.

Demikian pembahasan singkat mengenai pointer dan contoh programnya, semoga bermanfaat.

Jangan lewatkan [Seri Panduan Belajar Bahasa Pemrogrman C++](/blog/belajar-cpp/) disini.
