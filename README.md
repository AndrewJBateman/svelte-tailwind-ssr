# :zap: Svelte Tailwind SSR

* Sveltejs kit used to display country API data
* Code from [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) - see [:clap: Inspiration](#clap-inspiration) below - but using a different API, styling, navigation and grid layout. I recommend his tutorials - they are well explained.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/svelte-tailwind-ssr?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/svelte-tailwind-ssr?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Svelte Rollup Crypto](#zap-svelte-rollup-crypto)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Displays grid of Tailwind-styled cards, one for each country
* Search bar shows all countries that match the user search text
* Unused Tailwind CSS is purged during build which makes for a much lighter bundle
* [REST API Endpoints](https://restcountries.eu/#api-endpoints-code)

## :camera: Screenshots

![Frontend screenshot](./imgs/search.png)

## :signal_strength: Technologies

* [Sveltejs/kit v3](https://svelte.dev/) fast front-end UI library with small bundles of highly-optimized vanilla JavaScript & declarative transitions. Does not use a virtual DOM.
* [Tailwind v2](https://tailwindcss.com/) CSS framework
* [REST Countries API v2](https://restcountries.eu/) RESTful API with data on all world countries

## :floppy_disk: Setup

* `npm i` to install dependencies
* `npm run dev` to run dev server
* `npm run build` to build optimised version
* `npm run start` to run the newly built app

## :wrench: Testing

* N/A

## :computer: Code Examples

* tba

```svelte

```

## :cool: Features

* Search input filtering
* Tailwind results in a very compact bundle and helps with Lighthouse audit

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add navigation from country detail page back to home. Add SSR etc.

## :clap: Inspiration

* [
James Q Quick: SvelteKit Crash Course - SSR, API Routes, Stores, Tailwind CSS, and More!](https://www.youtube.com/watch?v=UU7MgYIbtAk&t=63s)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
