<template>
  <header
    class="flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white"
  >
    <nav aria-label="Global" class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
        <div class="flex items-center truncate">
          <a href="/" class="flex-none text-gray-900">
            <span class="sr-only">kodedasar.com</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <div
            class="truncate lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5"
          >
            <span class="truncate inline font-sans text-sm font-light">
              Built By Developer, For Developer
            </span>
          </div>
        </div>
        <div
          class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center pt-4 sm:pt-0 border-t border-gray-100 sm:border-none"
        >
          <div class="flex items-center space-x-4 mr-4">
            <a
              href="https://github.com/damasdev"
              rel="noreferrer"
              target="_blank"
              alt="Github"
              class="flex items-center space-x-1"
            >
              <svg
                class="text-gray-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                />
              </svg>
              <span class="text-xs">Github</span>
            </a>
            <a
              href="https://www.youtube.com/kodedasar"
              rel="noreferrer"
              target="_blank"
              alt="Youtube"
              class="flex items-center space-x-1"
            >
              <svg
                class="text-gray-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"
                />
              </svg>
              <span class="text-xs">Youtube</span>
            </a>
          </div>
          <div
            class="group border-l pl-4 border-gray-200 hover:text-teal-600 flex items-center"
          >
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  components: {
    ToggleTheme,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>
