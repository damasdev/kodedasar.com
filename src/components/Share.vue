<template>
  <div
    class="z-30 fixed w-screen pl-1 pr-3 md:pl-0 md:pr-0 md:w-14 h-auto items-center flex md:flex-col justify-start md:right-0 md:top-1/4 bottom-0"
  >
    <div
      class="hover:bg-blue-600 transform translate-x-1 justify-center transition duration-500 ease-in-out rounded-tl-xl w-full md:w-14 h-14 bg-blue-800 flex items-center"
    >
      <a
        aria-label="Facebook"
        :href="
          'https://www.facebook.com/sharer/sharer.php?u=' +
            url +
            '?utm_source=facebook&utm_medium=sharer&utm_campaign=social'
        "
        class="cursor-pointer"
      >
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          />
        </svg>
      </a>
    </div>
    <div
      class="hover:bg-blue-400 transform translate-x-1 justify-center transition duration-500 ease-in-out w-full md:w-14 h-14 bg-blue-700 flex items-center"
    >
      <a
        aria-label="Linkedin"
        :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url=' + url"
        class="cursor-pointer"
      >
        <svg class="w-6 h-6" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
    </div>
    <div
      class="hover:bg-blue-300 transform translate-x-1 justify-center transition duration-500 ease-in-out w-full md:w-14 h-14 bg-blue-500 flex items-center"
    >
      <a
        aria-label="Twitter"
        :href="'https://twitter.com/intent/tweet?url=' + url"
        class="cursor-pointer"
      >
        <svg class="w-8 h-8" viewBox="0 0 512 512">
          <path
            fill="#ffffff"
            d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
          ></path>
        </svg>
      </a>
    </div>
    <div
      class="hover:bg-green-300 transform translate-x-1 justify-center transition duration-500 ease-in-out rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl w-full md:w-14 h-14 bg-green-500 flex items-center"
    >
      <a
        aria-label="Whastapp"
        :href="'whatsapp://send?text=' + url"
        class="cursor-pointer"
      >
        <svg
          class="w-6 h-6"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    url: function() {
      return "https://kodedasar.com" + this.$route.path;
    },
  },
};
</script>
