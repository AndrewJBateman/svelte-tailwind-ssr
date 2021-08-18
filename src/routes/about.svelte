<svelte:head>
  <title>About Svelte Countries API App</title>
</svelte:head>
<div class="min-h-screen min-w-screen">
  <div class="flex justify-center w-full h-screen pt-10 mx-auto">
    <div class="max-w-xs">
      <div class="rounded-lg bg-gray-100 shadow-lg">
        <div class="p-2 pt-5 pb-0 photo-wrapper">
          <img
            class="w-40 h-40 mx-auto rounded-full"
            width="40px"
            height="40px"
            src="../../../assets/globe-large.png"
            alt="globe"
          />
        </div>

        <div class="p-2">
          <h4
            class="pb-1 text-xl font-medium leading-8 text-center text-gray-900"
          >
          Countries API
          </h4>
          <div class="px-2 text-xs font-semibold text-left text-gray-600">
            <p class="pb-2">
              <span class="font-bold text-gray-900"
                >A list of countries is fetched from the REST Countries API</span
              >
              using a simple http fetch and javascript map method. The country Alpha3 Code is used as the id so user can navigate to a Country Detail page.
            </p>
            <p>
              <span class="font-bold text-gray-900"
                >The data on the Contact page</span
              >
              is fetched from the Github API. No API key is required to search
              for a user.
            </p>
          </div>
          <table class="my-2 text-xs">
            <tbody>
              <tr>
                <td class="px-2 font-semibold text-gray-500">
                  <span class="font-bold text-gray-900">The Stack:</span>
                </td>
                <td class="px-2 text-xs text-gray-600">
                  Svelte, Tailwindcss
                </td>
              </tr>
              <tr>
                <td class="px-2">
                  <span class="font-bold text-gray-900">Testing:</span>
                </td>
                <td class="px-2 text-xs text-gray-600">tba</td>
              </tr>
              <tr>
                <td class="px-2">
                  <span class="font-bold text-gray-900">Image Credit:</span>
                </td>
                <td class="px-2">
                  <td class="px-2 text-xs text-gray-600">tba
                </td>
              </tr>
            </tbody>
          </table>

          <div class="my-2 text-center">
            <a
              class="text-xs italic font-medium text-indigo-600 hover:underline hover:text-indigo-800"
              href="https://github.com/AndrewJBateman/svelte-tailwind-ssr"
              target="_blank"
              rel="noopener noreferrer"
              >See Github Repo.</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>