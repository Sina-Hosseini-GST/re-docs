<script>
  import gameStore from "../stores/gameStore";
  import Header from "$lib/components/Header.svelte";
  import Log from "$lib/components/Log.svelte";
  import logo from "$lib/assets/images/logo/logo.png";

  let numberOfFilesTranslated = 0;
  let numberOfWordsTranslated = 0;
  for (let i = 0; i < $gameStore.length; i++) {
    const game = $gameStore[i];
    for (let j = 0; j < game.files.length; j++) {
      const file = game.files[j];
      numberOfFilesTranslated++;
      for (let k = 0; k < file.originalContent.length; k++) {
        const originalContent = file.originalContent[k];
        const paragraph = originalContent.paragraph;
        const wordArray = paragraph.split(" ");
        numberOfWordsTranslated += wordArray.length;
      }
    }
  }
</script>

<svelte:head>
  <title>REdocs</title>
</svelte:head>

<Header />

<main class="flex items-center pt-12 text-white xl:pt-14 min-h-svh">
  <article
    class="flex flex-col mx-auto max-w-[40rem] w-full xl:p-4 p-3 xl:leading-10 leading-8 xl:gap-8 gap-6"
  >
    <p class="text-justify [text-align-last:center]">
      Welcome to <strong>REdocs</strong>! I'm <a
        class="underline"
        href="mailto:sina.hosseini.gst@gmail.com"
        target="_blank">Sina</a
      >, and this is my independent project that provides document translations
      of my favorite video games into Persian.
    </p>
    <img class="w-2/5 mx-auto" src={logo} alt="Logo" />
    <a class="flex items-center self-center justify-center w-4/5 gap-1.5 px-2 py-1 font-bold text-center border-gray-800 xl:py-2 border-y xl:gap-2 xl:px-4 bg-gradient-to-r from-zinc-900 via-green-900 hover:via-sky-900 to-zinc-900" href="/games">
      <span>
        EXPLORE
      </span>
      <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="" viewBox="4 3.99 13 12.01"><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
    <details class="py-1.5 border-gray-800 xl:py-2 xl:border-y-2 border-y">
      <summary
        class="sticky font-bold text-center text-blue-600 cursor-pointer xl:top-[calc(3.5rem+1px)] top-[calc(3rem+1px)] bg-zinc-900"
      >
        UPDATE LOG
      </summary>
      <ul>
        <Log
          text="All Main Files"
          action="Translated"
          game="RE1"
          date="Jul 15, 2023"
        />
        <Log
          text="All Main Files"
          action="Translated"
          game="RE2"
          date="Jul 15, 2023"
        />
        <Log
          text="All Main Files"
          action="Translated"
          game="RE3N"
          date="Aug 27, 2023"
        />
        <Log
          text="Translation"
          action="Started"
          game="RE4"
          date="Dec 6, 2023"
        />
        <Log
          text="Info on Ashley"
          action="Translated"
          game="RE4"
          date="Dec 6, 2023"
        />
        <Log
          text="Info on Ashley"
          action="Proofread"
          game="RE4"
          date="Dec 7, 2023"
        />
        <Log
          text="Info on Ashley"
          action="Proofread"
          game="RE4"
          date="Dec 10, 2023"
        />
        <Log
          text="Alert Order"
          action="Translated"
          game="RE4"
          date="Dec 10, 2023"
        />
        <Log
          text="About the Blue Medallions"
          action="Translated"
          game="RE4"
          date="Jan 4, 2024"
        />
        <Log
          text="Chief's Note"
          action="Translated"
          game="RE4"
          date="Jan 4, 2024"
        />
        <Log
          text="Alert Order"
          action="Proofread"
          game="RE4"
          date="Jan 7, 2024"
        />
        <Log
          text="Chief's Note"
          action="Proofread"
          game="RE4"
          date="Jan 7, 2024"
        />
        <Log
          text="Closure of the Church"
          action="Translated"
          game="RE4"
          date="Jan 7, 2024"
        />
        <Log
          text="Closure of the Church"
          action="Proofread"
          game="RE4"
          date="Jan 29, 2024"
        />
        <Log
          text="Anonymous Letter"
          action="Translated"
          game="RE4"
          date="Jan 29, 2024"
        />
        <Log
          text="Closure of the Church"
          action="Proofread"
          game="RE4"
          date="Feb 25, 2024"
        />
        <Log
          text="Sera and the 3rd Party"
          action="Translated"
          game="RE4"
          date="Feb 25, 2024"
        />
        <Log
          text="Two Routes"
          action="Translated"
          game="RE4"
          date="Feb 25, 2024"
        />
        <Log
          text="Two Routes"
          action="Proofread"
          game="RE4"
          date="Mar 4, 2024"
        />
        <Log
          text="Security Manual"
          action="Proofread"
          game="RE3"
          date="Mar 4, 2024"
        />
        <Log
          text="Village's Last Defense"
          action="Translated"
          game="RE4"
          date="Mar 4, 2024"
        />
        <Log
          text="Capture Luis Sera"
          action="Translated"
          game="RE4"
          date="Mar 9, 2024"
        />
        <Log
          text="Capture Luis Sera"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="Village's Last Defense"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="Two Routes"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="Sera and the 3rd Party"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="About the Blue Medallions"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="Alert Order"
          action="Proofread"
          game="RE4"
          date="Apr 8, 2024"
        />
        <Log
          text="Target Practice"
          action="Translated"
          game="RE4"
          date="Apr 9, 2024"
        />
        <Log
          text="Luis' Memo"
          action="Translated"
          game="RE4"
          date="Apr 16, 2024"
        />
        <Log
          text='"V-JOLT" Report'
          action="Proofread"
          game="RE1"
          date="Apr 16, 2024"
        />
        <Log
          text="Capture Luis Sera"
          action="Proofread"
          game="RE4"
          date="Apr 18, 2024"
        />
        <Log
          text="Two Routes"
          action="Proofread"
          game="RE4"
          date="Apr 18, 2024"
        />
        <Log
          text="Luis' Memo"
          action="Proofread"
          game="RE4"
          date="Apr 18, 2024"
        />
        <Log
          text="Castellan Memo"
          action="Translated"
          game="RE4"
          date="Apr 18, 2024"
        />
        <Log
          text="Female Intruder"
          action="Translated"
          game="RE4"
          date="Apr 24, 2024"
        />
        <Log
          text="Butler's Memo"
          action="Translated"
          game="RE4"
          date="Jun 5, 2025"
        />
        <Log
          text="Sample Retrieved"
          action="Translated"
          game="RE4"
          date="Jun 5, 2025"
        />
        <Log
          text="Butler's Memo"
          action="Proofread"
          game="RE4"
          date="Jun 6, 2025"
        />
        <Log
          text="Anonymous Letter"
          action="Proofread"
          game="RE4"
          date="Jun 6, 2025"
        />
        <Log
          text="Female Intruder"
          action="Proofread"
          game="RE4"
          date="Jun 6, 2025"
        />
        <li>
          Number of Documents Translated: {numberOfFilesTranslated}
        </li>
        <li>
          Number of Words Translated: {numberOfWordsTranslated.toLocaleString()}
        </li>
      </ul>
    </details>
    <p class="text-center text-orange-400 uppercase">
      Many thanks to <a
        class="text-orange-600 underline"
        href="https://www.evilresource.com/"
        target="_blank">Evil Resource</a
      >
      and the
      <a
        class="text-orange-600 underline"
        href="https://residentevil.fandom.com/wiki/Resident_Evil_Wiki"
        target="_blank">Resident Evil Wiki</a
      > for helping me shape this project!
    </p>
  </article>
</main>
