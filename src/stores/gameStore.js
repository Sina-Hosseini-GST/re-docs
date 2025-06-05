import { writable } from 'svelte/store';

const gameStore = writable([
  {
    id: 1,
    gameImageUrl: '/src/lib/assets/images/re1/re1.png',
    shortTitle: 'RE1',
    title: 'Resident Evil',
    releaseDate: '1996',
    url: '/games/re1/files',
    files:
    [
      {
        id: 1,
        fileImageUrl: '/src/lib/assets/images/re1/files/botany-book/botany-book.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!botany-book",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/botany-book/map/botany-book-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/small-library",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/botany-book",
        title: "Botany Book",
        originalContent: [
          {
            paragraph: "As you may know, there are many plants that have medical effects. Since ancient times, humans have been healing wounds and diseases using various plants.",
            paragraphDirection: "left"
          },
          {
             paragraph: "In this book, we're going to sample three herbs that grow around the Raccoon mountains and give their outlines as examples of those plants with medical properties.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Each herb has different colors and different effects as medical plants: the green one recovers physical strength, the blue one neutralizes natural toxins, while the red herb does not have any effect by itself.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The red herb is only effective when it is mixed with other herbs. For example, if you mix this herb with the herb that recovers physical strength, the recovery effect will be tripled.",
            paragraphDirection: "left"
          },
          {
            paragraph: "By adjusting the amount and experimenting with these three herbs, you can create various kinds of medicines but I'll leave the details in your hands, because that's the best way to acquire true knowledge.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "همانطور که می‌دانید، گیاهان زیادی با خواص دارویی وجود دارند. و از قدیم‌الایام نیز، بشر زخم‌ها و مریضی‌هایش را با بکارگیری گیاهان مختلف، درمان می‌کرده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در این کتاب نیز، بنا بر این است تا به سراغ سه گیاهی، که در کوه‌های راکون به عمل می‌آیند، برویم تا چکیده‌ای از این نمونه گیاهان دارویی را ارائه دهیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هر گیاه، خود به عنوانِ گیاهی دارویی، دارای رنگ و اثری متفاوت است: نوع سبزرنگ قدرت فیزیکی را بازیابی می‌نماید، و نوع آبی‌رنگ به خنثی‌سازیِ سموم طبیعی می‌پردازد، در حالی که نوع قرمزرنگ، به خودیِ خود گره‌گشایی نمی‌کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گیاه قرمز تنها در صورتی تاثیرگذار است که با دیگرِ گیاهان، ترکیب شود. به عنوان مثال، اگر این گیاه را با گیاهِ افزایش‌دهنده‌ی قدرت فیزیکی ترکیب کنید، قدرت بازیابیِ سلامتی سه‌برابر می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با تنظیم‌کردن این مقادیر و آزمایش با این سه گیاه، داروهای متفاوتی پیش رویتان خواهد بود، اما من این مهم را به شما واگذار می‌کنم، چرا که این، بهترین روش برای کسب دانش است.",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 2,
        fileImageUrl: '/src/lib/assets/images/re1/files/keeper-s-diary/keeper-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!keepers-diary",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/keeper-s-diary/map/keeper-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/mansion/mansion-1f/keepers-bedroom",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/keeper-s-diary",
        title: "Keeper's Diary",
        originalContent: [
          {
            paragraph: "May 9th, 1998",
            paragraphDirection: "left"
          },
          {
             paragraph: "At night, we played Poker with Scott the guard, Alias and Steve the researcher.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Steve was really lucky, but I think he was cheating.",
            paragraphDirection: "left"
          },
          {
            paragraph: "What a scumbag.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 10th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "Today, a high ranking researcher asked me to take care of a new monster.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It looks like a gorilla without any skin. They told me to feed them live food. When I threw in a pig, they were playing with it... tearing off the pig's legs and pulling out the guts before they actually ate it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 11th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "Around 5 o'clock this morning, Scott came in and woke me up suddenly. He was wearing a protection suit that looks like a space suit. He told me to put one on as well.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I heard there was an accident in the basement lab.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's no wonder, those researchers never rest, even at night.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 12th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "I've been wearing this annoying space suit since yesterday, my skin grows musty and feels very itchy.",
            paragraphDirection: "left"
          },
          {
            paragraph: "By way of revenge, I didn't feed those dogs today.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Now I feel better.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 13th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "I went to the medical room because my back is all swollen and feels itchy.",
            paragraphDirection: "left"
          },
          {
            paragraph: "They put a big bandage on my back and the doctor told me I did not need to wear the space suit any more.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I guess I can sleep well tonight.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 14th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "When I woke up this morning, I found another blister on my foot. It was annoying and I ended up dragging my foot as I went to the dogs' pen. They have been quiet since morning, which is very unusual. I found that some of them had escaped.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I'll be in real trouble if the higher-ups find out.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 15th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "Even though I didn't feel well, I decided to go see Nancy. It's my first day off in a long time. But I was stopped by the guard on the way out.",
            paragraphDirection: "left"
          },
          {
            paragraph: "They say the company has ordered that no one leave the grounds.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I can't even make a phone call. What kind of joke is this?!",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 16th, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "I heard a researcher who tried to escape from this mansion was shot last night.",
            paragraphDirection: "left"
          },
          {
            paragraph: "My entire body feels burning and itchy at night.",
            paragraphDirection: "left"
          },
          {
            paragraph: "When I was scratching the swelling on my arm, a lump of rotten flesh dropped off.",
            paragraphDirection: "left"
          },
          {
            paragraph: "What the hell is happening to me?",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 19, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "Fever gone but itchy.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Hungry and eat doggie food.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Itchy itchy Scott came.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Ugly face so killed him.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Tasty.",
            paragraphDirection: "left"
          },
          {
            paragraph: "4",
            paragraphDirection: "center"
          },
          {
            paragraph: "Itchy.",
            paragraphDirection: "center"
          },
          {
            paragraph: "Tasty.",
            paragraphDirection: "center"
          }
        ],
        farsiContent: [
          {
            paragraph: "۹ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "شب بود که با نگهبان اسکات، الیاس، و محقق استیو، رفتیم پوکر.",
            paragraphDirection: "right"
          },
          {
            paragraph: "استیو که واقعا خوش‌شانس بود، هرچند که فکر کنم داشت تقلب می‌کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مردک حال‌به‌هم‌زن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۰ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "امروز، یه محقق بالارتبه، ازم خواست تا مراقب یه هیولای جدید باشم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اون شبیه یه گوریل بود که هیچ پوستی به تن نداشت. بهم هم گفتن که غذای زنده بدم بخوره. و وقتی که یه خوک رو گذاشتم وسط، باهاش ور رفت... و قبل اینکه بخورتش، پاهاش رو با دریدن، کند، و دل و روده‌ش رو کشید بیرون.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۱ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "حول‌وحوش ساعتای 5 صبح بود که اسکات اومد تو و منو یهویی بیدار کرد. اون یه لباس محافظتی تنش کرده بود و بهم گفت که یکی مث همینا تنم کنم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شنیده بودم که یه اتفاقاتی توی آزمایشگاه زیرزمینی افتاده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "چیز عجیبی هم نیست، اون محقق‌ها استراحت تو کارشون نبود، حتی شبا.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۲ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "از دیروزه که این لباس فضاییِ اذیت‌کننده رو تنم کردم، و پوستم تو فاز پوسیدگی و خارش بدی رفته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای تلافی ولی، امروز غذایی به اون سگ‌ها ندادم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و حالا حس بهتری دارم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۳ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "پام به داروخونه کشید، چرا که پشتم تماما متورم شده و حس خارش گرفته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "باندپیچی مشتی‌ای هم کردن پشتم رو و دکتر هم گفتش که دیگه نیازی به پوشیدن اون لباس فضایی نداری.",
            paragraphDirection: "right"
          },
          {
            paragraph: "غلط نکنم بتونم امشبه رو راحت بخوابم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۴ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "صبح که از خواب پا شدم، بازم آبله رو پام دیدم. خیلی رنج‌آور بود، و آخر کاری هم این دست و اون دست کردم، در عین حال که داشتم می‌رفتم سمت قفس سَگا. اونا از صبحه که ساکتِ ساکت‌ان، که خب این خیلی غیر عادیه، و فهمیدم که یه سری‌هاشون فرار کردن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اینجوری هم اگه مافوق‌ها بفهمن که رسما افتادم تو دردسر.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۵ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگرچه حس‌وحال خوشی نداشتم، ولی گفتم برم پیش نانسی. این اولین مرخصی من تو این همه مدت بود، ولی محافظی که توی راه خروج بود، جلوم رو گرفت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بهم گفته شد که این کمپانی دستور صادر کرده که هیچکی خارج نشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حتی امکان به تماس تلفنی هم ندارم. این دیگه چه جور جوکیه؟!",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۶ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "اینطور شنیدم که یه محقق، که در تلاش برای خروج از این عمارت بوده، شب گذشته تیر می‌خوره می‌ره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شب‌ها هم حس می‌کنم بدنم می‌سوزه و همه‌ش خارش داره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "وقتی هم که ورمِ روی بازوم رو می‌خارونم، یه غده از گوشت فاسدشده می‌پره بیرون.",
            paragraphDirection: "right"
          },
          {
            paragraph: "واقعا چه بلایی داره سرم میاد؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۹ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "تبی دیگه در کار نیست، ولی خارش چرا.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گرسنمه، و دارم غذای سگ می‌خورم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اسکات با خارش اومد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "زشت بود، منم کشتمش.",
            paragraphDirection: "right"
          },
          {
            paragraph: "خوشمزه‌ست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۴",
            paragraphDirection: "center"
          },
          {
            paragraph: "می‌خاره.",
            paragraphDirection: "center"
          },
          {
            paragraph: "خوش‌مزه‌ست.",
            paragraphDirection: "center"
          },
        ]
      },
      {
        id: 3,
        fileImageUrl: '/src/lib/assets/images/re1/files/researcher-s-will/researcher-s-will.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!researchers-will",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/researcher-s-will/map/researcher-s-will-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/study",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/researcher-s-will",
        title: "Researcher's Will",
        originalContent: [
          {
            paragraph: "My dear Alma,",
            paragraphDirection: "left"
          },
          {
             paragraph: "The fact that you have received this letter is both a joy and sadness for me.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I could not even talk to you because of that guy in the sunglasses. Alma, be calm and read this.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I think I've told you that I moved to pharmaceutical company's lab. They headhunted me.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Last month, there was an accident in the lab and the virus we were studying escaped.",
            paragraphDirection: "left"
          },
          {
            paragraph: "All my colleagues who were infected by the virus are dead. To be accurate, they've become living dead.",
            paragraphDirection: "left"
          },
          {
            paragraph: "They still wander around.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Some of them are knocking on my room door desperately right now.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But there's no sign of intelligence in their eyes.",
            paragraphDirection: "left"
          },
          {
            paragraph: "That cursed virus takes away all humanity from the human brain. Love, joy, sorrow, fear, humor... eternally.",
            paragraphDirection: "left"
          },
          {
            paragraph: "And Alma, even the memories of the days I spent with you...",
            paragraphDirection: "left"
          },
          {
            paragraph: "Yes, I'm infected.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I did everything I could, but I could only delay the progress by a few days.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The most frightening thing is, that I forget more about you by the day.",
            paragraphDirection: "left"
          },
          {
            paragraph: "So I chose a peaceful death, rather than becoming the living dead.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Within an hour, I will have entered my eternal sleep.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I do hope you'll understand my decision...",
            paragraphDirection: "left"
          },
          {
            paragraph: "Good Bye and Forever Yours,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Martin Crackhorn",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "آلمای عزیزم،",
            paragraphDirection: "right"
          },
          {
            paragraph: "این واقعیت که نامه تو دستته، هم مایه‌ی لذتمه و هم مایه‌ی ناراحتی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بخاطر اون یارو که عینک‌آفتابی داشت، نشد باهات حرف بزنم. آلما، خونسرد باش و این نامه رو بخون.",
            paragraphDirection: "right"
          },
          {
            paragraph: "فکر کنم بهت گفته بودم که به آزمایشگاهِ یه شرکت داروسازی، نقل مکان کردم. شدم مغزِ داستان فرار مغزا.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ماه گذشته تو آزمایشگاه، یه اتفاقی میفته و ویروسی که ما روش مطالعه کردیم آزاد می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تمام همکارای منم که آلوده‌ی به این ویروس شده بودن می‌میرن. دقیق‌تر بخوام بگم، اونا تبدیل به مرده‌های زنده می‌شن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و همچنان این دور و بر پرسه می‌زنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همین الآن هم، بعضی‌هاشون درِ اتاقم رو دارن محکم می‌کوبن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ نشونه‌ای هم از هوشیاری تو چشاشون نیست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این ویروس نفرین‌شده، همه‌ی انسایت رو از مغز یه انسان پاک می‌کنه می‌بره. عشق، خوشی، غم، ترس، فاز... اونم برای همیشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و حتی خاطرات روزایی که با هم بودیم رو...",
            paragraphDirection: "right"
          },
          {
            paragraph: "درسته، منم آلوده شدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هر کاری از دستم برمیومد هم انجام دادم، اما فقط تونستم این پروسه رو برای چند روز به تاخیر بندازم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ترسناک‌ترین چیز اما، اینه که روزبه‌روز خاطراتی که ازت داشتم، دارن پاک می‌شن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای همین هم یه مرگ آروم رو انتخاب کردم، تا اینکه یه مرده‌ی زنده باشم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ظرف یه ساعت دیگه، وارد یه خواب ابدی می‌شم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و عمیقا امیدوارم که تصمیمم رو درک کنی...",
            paragraphDirection: "right"
          },
          {
            paragraph: "بدرود، با عشق",
            paragraphDirection: "right"
          },
          {
            paragraph: "مارتین کرکهورن",
            paragraphDirection: "left"
          },
        ]
      },
      {
        id: 4,
        fileImageUrl: '/src/lib/assets/images/re1/files/orders/orders.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!orders",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/orders/map/orders-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/trophy-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/orders",
        title: "Orders",
        originalContent: [
          {
            paragraph: "TOP SECRET July 22, 1998 2:13",
            paragraphDirection: "left"
          },
          {
             paragraph: "To the Head of the Security Department",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"X-day\" is approaching.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Complete the following orders within the week.",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Lure the members of S.T.A.R.S. into the lab and have them fight with the B.O.W. in order to obtain data of actual battles.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Collect two embryos per B.O.W. type making sure to include all species except for Tyrant.",
            paragraphDirection: "left"
          },
          {
            paragraph: "3. Destroy the Arkley lab including all researchers and lab animals in a manner which will seem accidental.",
            paragraphDirection: "left"
          },
          {
            paragraph: "White Umbrella",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "فوق سری، ۲۲ ژوئیه‌ی ۱۹۹۸، ساعت ۲:۱۳",
            paragraphDirection: "right"
          },
          {
            paragraph: "به رئیس دپارتمان امنیتی",
            paragraphDirection: "right"
          },
          {
            paragraph: "«روز ایکس» نزدیکه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "دستورات زیر رو، ظرف یه هفته، به پایان برسون.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. پای اعضای استارز رو به آزمایشگاه باز کن و بندازشون وسط زد و خورد با بی.او.دابلیو، تا اطلاعاتی از این مبارزات حاصل شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. به ازای هر نمونه از بی.او.دابلیو، دو جنین بذار کنار، و مطمئن باش که به جز تایرنت، همه رقم رو شامل می‌کنی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۳. آزمایشگاه آرکلی رو با خاک یکسان کن، اونم با تمام محقق‌ها و حیوانات آزمایشگاهی‌ش، طوری که تصادفی به نظر بیاد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آمبرلای سفید",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 5,
        fileImageUrl: '/src/lib/assets/images/re1/files/plant-42-report/plant-42-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!plant-42-report",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/plant-42-report/map/plant-42-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/guardhouse-residence/guardhouse-1f/room-002",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/plant-42-report",
        title: "Plant 42 Report",
        originalContent: [
          {
            paragraph: "4 days have passed since the accident and the plant at Point 42 is growing amazingly fast.",
            paragraphDirection: "left"
          },
          {
             paragraph: "It has been effected by the T-Virus differently than other plants have been and shows unique shape in addition to its size. Looking at the way it behaves, it is now difficult to determine what kind of plant it was originally.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There are two ways in which Plant 42 gathers nutrition.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The first is through its root that reaches into the basement.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Immediately after the accident, a scientist went mad and broke the water tank in the basement. Now the basement is filled with water.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It is easily imaginable that some chemical elements were blended in the water and promotes the incredibly fast growth of Plant 42.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Another part of Plant 42 from the basement grows through the duct and hangs down like so many bulbs from the ceiling of the first floor. Many vines come out of those bulbs and they are the second resource for its nutrition.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once sensing movement, Plant 42 shoots its vines around the prey and holds it. Then it starts sucking up blood, using the suckers located at the back of its vine.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It also has some intelligence.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It blocks the door by twining its vines around it especially when it captures prey or is sleeping. Several staff members have already fallen victim to this.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 21, 1998",
            paragraphDirection: "right"
          },
          {
            paragraph: "Henry Sarton",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "۴ روز از اون اتفاق می‌گذره و گیاه نقطه‌ی ۴۲، در کمال شگفتی، رشد سریعی رو رقم می‌زنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این گیاه، متفاوت از بقیه نمونه‌ها از ویروس تی تاثیر می‌گیره، و ظاهر و اندازه‌ی منحصربه‌فردی از خودش بروز می‌ده. با روشی هم که در پیش گرفته، دیگه سخته بفهمی اول ماجرا چه جور گیاهی بوده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گیاه ۴۲ به دو روش تقویت می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اولین روشش هم به واسطه‌ی ریشه‌ی گیاهه، که خودشو به زیرزمین رسونده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ولی بلافاصله بعد از این اتفاق، یکی از دانشمندا می‌زنه به سرش و مخزن آبِ تو زیرزمین رو می‌پکونه. حالا زیرزمین غرق آبه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "چیزی که به راحتی می‌شه متصور شد اینه که یه سری مواد شیمیایی با آب قاطی می‌شن و رشدِ سریع و وحشتناک گیاه ۴۲ رو جلو میندازن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بخش دیگه‌ی گیاه 42، از زیرزمین، از میون کانال رشد می‌کنه و و مث خیلی از ریشه‌های طبقه‌ی اول، از سقف آویزون می‌شه. کلی هم ساقه‌های پیچنده از اون ریشه‌ها منشعب می‌شن، که می‌شه گفت منبع دوم تقویتی اونن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به محض اینکه حرکتی هم حس کنه، ساقه‌هاشو می‌پیچه دور طعمه‌ش و گیرش می‌ندازه. بعدش هم با آلت مکنده‌ی پشت ساقه‌ش، شروع به مکیدن خون می‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همچنین می‌شه گفت که اون از هوش بهره می‌بره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و به واسطه‌ی پیچوندن ساقه‌هاش، دورِ در، جلوشو می‌گیره. مخصوصا وقتی که طعمه‌شو گیر میاره یا موقعی که می‌ره بخوابه. تا حالا که خیلی از کارکنا قربانی این گیاه شدن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۱ مه ۱۹۹۸",
            paragraphDirection: "left"
          },
          {
            paragraph: "هنری سارتن",
            paragraphDirection: "left"
          },
        ]
      },
      {
        id: 6,
        fileImageUrl: '/src/lib/assets/images/re1/files/fax/fax.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!fax",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/fax/map/fax-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/private-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/fax",
        title: "Fax",
        originalContent: [
          {
            paragraph: "To:",
            paragraphDirection: "left"
          },
          {
             paragraph: "General Manager of Sanitation Division",
            paragraphDirection: "left"
          },
          {
            paragraph: "From:",
            paragraphDirection: "left"
          },
          {
            paragraph: "Special Committee on Disasters Raccoon Special Research Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This memorandum is strictly confidential and must be destroyed as soon as it is understood.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Regarding the \"T-Virus\" outbreak which occurred recently, this Committee conducted a field survey. According to the results, estimates on the amount of damage caused by the accident are considerably greater than reported earlier.",
            paragraphDirection: "left"
          },
          {
            paragraph: "First, although it is very difficult to obtain accurate data in terms of actual numbers, it is thought that more than half of the researchers died after exposure to the \"T-Virus\". The body count will almost likely increase since nearly all of the survivors show symptoms peculiar to the \"T-Virus\".",
            paragraphDirection: "left"
          },
          {
            paragraph: "Second, our security system is still in operation. However, our special security guard squad has been nearly destroyed. Because of that, research information considered by our company to be top secret has been made available to outsiders. Counter-measures should be taken as soon as possible.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Finally, many of the \"subjects\" from the experiments have escaped and are out of control. We believe that some of the researchers were killed by these \"subjects\" and their bodies were mutilated.",
            paragraphDirection: "left"
          },
          {
            paragraph: "By curious coincidence, these events are proof of the success of our research. However, there is also a very high risk that this news may be leaked to the press if we don't act immediately.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The condition is very serious. Our operation to cover-up the situation is difficult to attain, however we hope the problem will be solved quickly.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We are especially concerned that the State Police and S.T.A.R.S. are intervening too quickly.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We need to act on this situation as well.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "گیرنده:",
            paragraphDirection: "right"
          },
          {
            paragraph: "مدیر کل بخش بهداشت",
            paragraphDirection: "right"
          },
          {
            paragraph: "فرستنده:",
            paragraphDirection: "right"
          },
          {
            paragraph: "کمیته‌ی خصوصیِ مربوط به دپارتمان تحقیقاتیِ ویژه‌ی فجایع راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "این یادداشت، شدیدا محرمانه است و می‌بایست به محض دریافت، معدوم گردد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "درباره‌ی شیوع «ویروس تی» اما، که اخیرا نیز به وقوع پیوسته، این کمیته یک بررسی میدانی انجام داده، که طبق نتایج آن، برآورد آسیب ناشیِ از این مهم بسیار بیشتر از گزارشات اولیه است.",
            paragraphDirection: "right"
          },
          {
            paragraph: "نخست، اگرچه ارائه‌ی آماری دقیق از تعداد واقعیِ افراد دشوار است، اما اینطور که به نظر می‌رسد، بیش از نیمی از محققان، پس از آنکه در معرض «ویروس تی» قرار می‌گیرند، جان می‌بازند. از آنجا که عملا تمامی بازماندگان، علائمی مختص به «ویروس تی» نشان می‌دهند، میزان تلفات احتمالا رو به افزایش خواهد بود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در ثانی، سیستم امنیتی‌مان همچنان فعال است، اما جوخه‌ی نگهبانی امنیتی ویژه، تقریبا از بین رفته. از این رو، اطلاعات تحقیقاتی‌ای که توسط کمپانی ما فوق سری به شمار می‌رفت، برای غیر خودی‌ها نیز در دسترس قرار گرفته. به زودیِ هر چه تمام باید اقدامات متقابلی صورت بگیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و در پایان آنکه، بسیاری از «سوژه‌ها»ی این آزمایشات، گریخته و از کنترل خارج شده‌اند. و ما معتقدیم که بسیاری از محققان، توسط این «سوژه‌ها» به قتل رسیده و جسدشان قطع عضو شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تصادف عجیب اما آن است که این وقایع، نشان‌دهنده‌ی موفقیت تحقیقات ماست. اگرچه که در صورت عدم اقدام فوری، خطری بزرگ برای درز کردن این اخبار به بیرون وجود دارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شرایط، بحرانی‌ست. و عملیات ما در دستیابی به لاپوشانیِ این موقعیت نیز دشوار است، هرچند امیدواریم تا این مشکل به زودی حل شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما نگران آنیم که پلیس ایالتی و استارز به سرعت پا به میان بگذارند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما خود اما، نیازمند انجام عملیات بر روی این موقعیت‌ایم.",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 7,
        fileImageUrl: '/src/lib/assets/images/re1/files/scrapbook/scrapbook.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!scrapbook",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/scrapbook/map/scrapbook-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/mansion/mansion-2f/large-library",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/scrapbook",
        title: "Scrapbook",
        originalContent: [
          {
            paragraph: "RACCOON TIMES MAY 27, 1998",
            paragraphDirection: "left"
          },
          {
             paragraph: "ANIMAL ATTACK? WOMAN MUTILATED",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 20. Around 10 PM a 20-year-old young woman's body was found by a passer-by on the left bank of Marble River in the Cider District of Raccoon City.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Raccoon police assume it to be a grizzly or other animal's doing because there are teeth marks along her mutilated arms and left foot that show considerable power. Since she was wearing a hiking boot on her remaining foot, it has been determined that she was attacked in the Arklay Mountains and fell into the river. They are hurrying to identify this woman.",
            paragraphDirection: "left"
          },
          {
            paragraph: "RACCOON WEEKLY JUNE 16, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "MONSTERS IN ARKLAY MOUNTAINS?",
            paragraphDirection: "left"
          },
          {
            paragraph: "Some people claim they've seen monsters in the Arklay mountains.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The monsters are supposedly about the same size as large dogs and usually run in a pack as wolves do.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This may sound like a group of ordinary wild dogs, but these monsters are surprisingly fierce and hard to hurt.",
            paragraphDirection: "left"
          },
          {
            paragraph: "They say these dogs won't bother you unless you wake them, so you smart readers should stay out of the Arklay Mountains for the time being.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But if you're looking for adventure, check it out! You wanna try?",
            paragraphDirection: "left"
          },
          {
            paragraph: "RACCOON TIMES JULY 9, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "MYSTERY ON ARKLAY MOUNTAINS: MOUNTAIN ROAD BLOCKED",
            paragraphDirection: "left"
          },
          {
            paragraph: "Due to successive disasters in the Arklay Mountains, the city authorities have decided to block the road leading to the foothills.",
            paragraphDirection: "left"
          },
          {
            paragraph: "At the same time, Raccoon police intend to begin the search for lost people with the help of S.T.A.R.S. team members. They expect great difficulty because of the vast size of the Arklay Mountains and the primeval forest that covers most of the area.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Also people are still reporting sightings of grotesque monsters in the mountains.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "راکون تایمز، ۲۷ مه ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "حمله‌ی یک حیوان؟ یک زن، نقص عضو می‌شود",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۰ مه، حوالی ساعت ۱۰ شب، جسد یک زن ۲۰ ساله، در ساحل سمت چپ رودخانه‌ی ماربل در منطقه‌ی سیدر شهر راکون، توسط یک رهگذر، پیدا می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پلیس راکون بنا را بر این گذاشته که این کارِ یک خرس یا حیوانی دیگر باشد، چرا که اثر گازهای موجود بر روی دست‌ها و پای چپ وی که از جا قطع شده، قدرت بسیاری را به اثبات می‌رساند. از آنجا که کفش کوهنوردی، به پای آسیب‌ندیده‌ی وی است، گویا او در کوه‌های آرکلی مورد حمله قرار گرفته و سپس در رودخانه سقوط کرده. آن‌ها در تکاپوی تعیین هویت این زن هستند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "روزنامه‌ی هفتگی راکون، ۱۶ ژوئن ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیولا در کوه‌های آرکلی؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "برخی مدعی آن هستند که هیولاهایی را در کوه‌های آرکلی‌اند دیده‌اند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیولاهایی که گویا از نظر جثه همانند سگ‌هایی بزرگ عمل می‌کنند، و به مانند گرگ‌ها، همچون گله می‌تازند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شاید آن‌ها همچون گروهی از سگ‌های وحشیِ معمولی به نظر برسند، اما این هیولاها به طرز شگفت‌انگیزی تندخو و مقاوم‌اند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گفته می‌شود که این سگ‌ها کاری به شما ندارند، مگر آنکه خود سربه‌سرشان بگذارید، بنابراین شما خوانندگان زیرک، موقتا نباید در معرض خطر کوه‌های آرکلی قرار بگیرید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اما اگر به دنبال ماجراجویی هستید، به آن سر بزنید! آیا امتحانش می‌کنید؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "راکون تایمز، ۹ ژوئیه‌ی ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "اسرار کوه‌های آرکلی! جاده‌ی آرکلی بسته می‌شود",
            paragraphDirection: "right"
          },
          {
            paragraph: "به سبب فجایع پی‌درپی موجود در کوه‌های آرکلی، مسئولین شهر تصمیم گرفتند تا مسیر منتهی به دامنه‌ی کوه را مسدود کنند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در عین حال، پلیس راکون قصد دارد تا جستجو برای افراد گم‌شده را، به کمک اعضای استارز، کلید بزند. به واسطه‌ی مقیاس بزرگ کوه‌های آرکلی، و جنگلی کهن که عمده‌ی منطقه را پوشانده، آنها چالشی مهلک را پیش‌بینی می‌کنند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و مردم نیز همچنان مشاهده‌های خود، از هیولاهایی منزجرکننده را، در این رشته‌کوه گزارش می‌دهند.",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 8,
        fileImageUrl: '/src/lib/assets/images/re1/files/security-system/security-system.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!security-system",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/security-system/map/security-system-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b2/visual-data-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/security-system",
        title: "Security System",
        originalContent: [
          {
            paragraph: "- BASEMENT LEVEL 1 -",
            paragraphDirection: "center"
          },
          {
            paragraph: "HELICOPTER PORT",
            paragraphDirection: "left"
          },
          {
            paragraph: "Executive and Government Officials only on helicopter port.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This restriction may not apply in case of an accident.",
            paragraphDirection: "left"
          },
          {
            paragraph: "PASSAGE TO THE HELICOPTER",
            paragraphDirection: "left"
          },
          {
            paragraph: "No one is allowed to enter unless they are attended by a Research Consultant or Security Director.",
            paragraphDirection: "left"
          },
          {
            paragraph: "All others will be shot on sight.",
            paragraphDirection: "left"
          },
          {
            paragraph: "ELEVATOR",
            paragraphDirection: "left"
          },
          {
            paragraph: "The elevator stops during all emergencies.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- BASEMENT LEVEL 2 -",
            paragraphDirection: "center"
          },
          {
            paragraph: "VISUAL DATA ROOM",
            paragraphDirection: "left"
          },
          {
            paragraph: "Visual Data Room is within the control of Special Research Division. Keith Arving, the Room Manager, is designated to have jurisdiction over room usage.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- BASEMENT LEVEL 3 -",
            paragraphDirection: "center"
          },
          {
            paragraph: "PRISON",
            paragraphDirection: "left"
          },
          {
            paragraph: "Sanitation Division controls the usage of the prison. Consultant Researchers (E.Smith, S.Ross, A.Wesker) must be present if virus is used.",
            paragraphDirection: "left"
          },
          {
            paragraph: "TRIPLE LOCK DOOR",
            paragraphDirection: "left"
          },
          {
            paragraph: "No one is allowed to enter unless he presents all pass code documents.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Pass code documents must be created on the specialized output machine by the Chief Researcher of each block.",
            paragraphDirection: "left"
          },
          {
            paragraph: "POWER ROOM",
            paragraphDirection: "left"
          },
          {
            paragraph: "Only Headquarters Supervisors may enter.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This restriction may not apply in the Consultant Researcher has received special instructions.",
            paragraphDirection: "left"
          },
          {
            paragraph: "PASS CODE OUTPUT MACHINE",
            paragraphDirection: "left"
          },
          {
            paragraph: "No one is allowed to use the pass code output machine but the Chief Researchers.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- BASEMENT LEVEL 4 -",
            paragraphDirection: "center"
          },
          {
            paragraph: "TOP SECRET",
            paragraphDirection: "left"
          },
          {
            paragraph: "Regarding the progress of \"Tyrant\" after the use of T-virus... (Remaining document is unreadable)",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "- زیرزمین، سطح ۱ -",
            paragraphDirection: "center"
          },
          {
            paragraph: "فرودگاه هلیکوپتر",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیئت رئیسه و مسئولان دولتی تنها در فرودگاه حاضر باشند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "محدودیت فوق ممکن است در صورت تصادف اعمال نگردد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گذرگاه منتهی به هلیکوپتر",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ‌کس حق ورود ندارد، مگر آنکه در کنار یک مشاور تحقیقاتی یا مدیر امنیتی حضور داشته باشد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورت مشاهده، به دیگران شلیک خواهد شد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آسانسور",
            paragraphDirection: "right"
          },
          {
            paragraph: "آسانسور در مواقع اضطراری، متوقف می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- زیرزمین، سطح ۲ -",
            paragraphDirection: "center"
          },
          {
            paragraph: "اتاق داده‌های بصری",
            paragraphDirection: "right"
          },
          {
            paragraph: "اتاق داده‌های بصری، تحت کنترل بخش تحقیقاتیِ ویژه است. کیت آروینگ، مدیر این فضا، در جهت نظارت بر بکارگیری آن گماشته شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- زیرزمین، سطح ۳ -",
            paragraphDirection: "center"
          },
          {
            paragraph: "زندان",
            paragraphDirection: "right"
          },
          {
            paragraph: "بخش بهداشت، نظارت بر زندان را به عهده دارد. محققان مشاور (ا.اسمیت، س.راس، آ.وسکر) می‌بایست در صورت بکارگیری ویروس حضور یابند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "درِ سه‌قفله",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ‌کس حق ورود ندارد، مگر آنکه تمامی مستندات مربوط به رمز‌های عبور، ارائه داده شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این مستندات می‌بایست توسط محقق ارشد هر بند و به واسطه‌ی دستگاه دریافت ویژه‌ی رمز عبور ساخته شوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اتاق برق",
            paragraphDirection: "right"
          },
          {
            paragraph: "تنها مافوق‌های مرکز فرماندهی حق ورود دارند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورت دریافت فرمان توسط محقق مشاور، این محدودیت اعمال نمی‌گردد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ماشین دریافت رمز عبور",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ‌کس حق استفاده از ماشین دریافت رمز عبور را ندارد، مگر محققان ارشد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- زیرزمین، سطح ۴ -",
            paragraphDirection: "center"
          },
          {
            paragraph: "فوق سری",
            paragraphDirection: "right"
          },
          {
            paragraph: "در باب پروسه‌ی «تایرنت»، پس از استفاده‌ی از ویروس تی... (باقیِ مستند، غیر قابل خوندنه)",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 9,
        fileImageUrl: '/src/lib/assets/images/re1/files/researcher-s-letter/researcher-s-letter.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!researchers-letter",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/researcher-s-letter/map/researcher-s-letter-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/x-ray-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/researcher-s-letter",
        title: "Researcher's Letter",
        originalContent: [
          {
            paragraph: "June 8, 1998",
            paragraphDirection: "left"
          },
          {
            paragraph: "Dear Ada,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Ada, by the time you read this, I'll be something... different. Today's test turned out to be positive, just as I expected. I feel like going crazy when I think about becoming one of them.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Ada, you're not infected and I hope you never will be.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In case you are the last one left, take the material in the Visual Data Room and go to the Power Room to operate the Triggering System before you escape.",
            paragraphDirection: "left"
          },
          {
            paragraph: "And make all this public through the media.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If everything is in order, all the locks can be opened by the security system. You can access the system if you log in with my name from the terminal in the small lab and enter the password. The password is your name.",
            paragraphDirection: "left"
          },
          {
            paragraph: "To unlock the door at B2 where the Visual Data Room is located, you'll need to access with our name first and then enter another password.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I've written the code below. I'm sure you'll understand it easily.",
            paragraphDirection: "left"
          },
          {
            paragraph: "And this is my last hope - if you find me completely changed, please kill me yourself.",
            paragraphDirection: "left"
          },
          {
            paragraph: "PASSWORD = ᛗ ᛟ ᛚ ᛖ",
            paragraphDirection: "center"
          },
          {
            paragraph: "Yours, John",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "۸ ژوئن ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "ایدای عزیز،",
            paragraphDirection: "right"
          },
          {
            paragraph: "ایدا، وقتی که تو نامه رو می‌خونی‌ش من دیگه چیزِ... متفاوتی شدم. کاشف به عمل اومده که تست امروز مثبت بوده، درست همونطور که انتظار می‌رفت. وقتی هم که فکر می‌کنم قراره به یکی از اونا تبدیل بشم، مخم رد می‌ده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ایدا، تو بهش مبتلا نشدی و امیدوارم هیچ‌وقت هم اینطور نشی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگه به عنوان اخرین نفر، جون سالم به در بردی، اطلاعات موجود توی اتاق داده‌های بصری رو بردارد و قبل اینکه فرار کنی، برای راه‌اندازی سیستم تحریک، به اتاق برق برو.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و اینکه، تمامی این مستندات رو از طریق رسانه‌ها عمومی کن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "وقتی همه چی سر جاش باشه، سیستم امنیتی می‌تونه همه‌ی قفلا رو وا کنه. تو به سیستم دسترسی داری، اگه از ترمینالِ تو آزمایشگاه کوچیکه، با اسم من وارد حسابم شی و رمز عبورو وارد کنی. رمز عبور، اسم خودته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای باز کردن درِ زیرزمینِ سطح ۲، که اتاق داده‌های بصری اونجاست، نیازه که اول، اسم‌هامون رو وارد کنی، و بعد یه رمز عبور دیگه رو بزنی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "من رمز رو پایین نوشتم، و مطمئنم که عین هلو می‌گیری منظور رو.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این امید نهایی منه - اگه دیدی که زیادی تغییر کردم، خودت منو خلاص کن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "رمز: ᛗ ᛟ ᛚ ᛖ",
            paragraphDirection: "center"
          },
          {
            paragraph: "چاکرت، جان",
            paragraphDirection: "left"
          },
        ]
      },
      {
        id: 10,
        fileImageUrl: '/src/lib/assets/images/re1/files/v-jolt-report/v-jolt-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!v-jolt-report",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/v-jolt-report/map/v-jolt-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/guardhouse-residence/guardhouse-1f/room-003",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/v-jolt-report",
        title: "\"V-JOLT\" Report",
        originalContent: [
          {
            paragraph: "As I stated in the last report, there are some common features found in the cells of the plant infected by the Tyrant virus. We also have found another interesting fact through some experiments.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We found an element that destroys these plant cells rapidly in \"UMB No.16\", one of the series of UMB chemicals that we used for that experiment.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We named this \"UMB No.16\" as \"V-JOLT\".",
            paragraphDirection: "left"
          },
          {
            paragraph: "In our calculation, it will take less than 5 seconds to destroy Plant 42 if we put the \"V-JOLT\" directly on the root.",
            paragraphDirection: "left"
          },
          {
            paragraph: "You need to mix some of the UMB series chemicals in a specific order to create a \"V-JOLT\". But the UMB series chemicals may generate a poisonous gas which is harmful to the human body. Extreme caution should be taken when handling these chemicals.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Following are the types of UMB series chemicals and their brief characteristics.",
            paragraphDirection: "left"
          },
          {
            paragraph: "UMB No. 2 Red NP-003 Purple",
            paragraphDirection: "left"
          },
          {
            paragraph: "UMB No. 4 Green Yellow-6 Yellow",
            paragraphDirection: "left"
          },
          {
            paragraph: "UMB No. 7 White",
            paragraphDirection: "left"
          },
          {
            paragraph: "UMB No. 13 Blue (stimulating smell)",
            paragraphDirection: "left"
          },
          {
            paragraph: "V-JOLT (UMB No. 16) Brown",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "همونطور که توی گزارش قبلی گفته بودم، یه سری خصیصه‌های مشترک توی سلول‌های گیاه مشاهده می‌شه، گیاهی که توسط ویروس تایرنت آلوده شده. ما حتی از طریق یه سری آزمایش، متوجه یه واقعیت جالب شدیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اینکه یه المانی هست که که سلول‌هاشو مرتب توی «یو.ام.بی شماره‌ی 16» می‌پُکونه؛ از سری مواد شیمیاییِ یو.ام.بی که ما برای این آزمایش استفاده‌ش کردیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما اسمش رو گذاشتیم «وی-جی.او.ال.تی».",
            paragraphDirection: "right"
          },
          {
            paragraph: "و طبق برآورد ما، در صورت تماسِ مستقیم «وی-جی.او.ال.تی» با ریشه‌ی گیاه ۴۲، ۵ ثانیه نشده نابودش می‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای ساخت «وی-جی.او.ال.تی» مجبورین از سری مواد شیمیایی یو.ام.بی با ترتیب مشخصی استفاده کنین. و اینکه این سری مواد شیمیایی ممکنه که یه گاز سمی به وجود بیارن که برای بدن انسان مضره. موقع کار با این مواد شیمیایی باید نهایت احتیاط رو به کار گرفت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "صفحه‌ی بعد شاملِ انواع سری یو.ام.بی و مختصراتی از خصیصه‌هاشونه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "یو.ام.بی شماره‌ی 2 قرمز ان.پی-003 بنفش",
            paragraphDirection: "right"
          },
          {
            paragraph: "یو.ام.بی شماره‌ی 4 سبز زرد-6 زرد",
            paragraphDirection: "right"
          },
          {
            paragraph: "یو.ام.بی شماره‌ی 7 سفید",
            paragraphDirection: "right"
          },
          {
            paragraph: "یو.ام.بی شماره‌ی 13 آبی (محرک شامه)",
            paragraphDirection: "right"
          },
          {
            paragraph: "وی-جی.او.ال.تی (یو.ام.بی شماره‌ی 16) قهوه‌ای",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 11,
        fileImageUrl: '/src/lib/assets/images/re1/files/barry-s-picture/barry-s-picture.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!barrys-picture",
        location: [
          {
            text: "Location (Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/barry-s-picture/map/barry-s-picture-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b2/ladder-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/barry-s-picture",
        title: "Barry's Picture",
        originalContent: [
          {
            paragraph: "Barry's Picture.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Something is written on the back of the picture.",
            paragraphDirection: "left"
          },
          {
            paragraph: "\" My dearest Moira and Poly.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I hope you will grow up to be strong and beautiful woman and help to cheer up mother.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Your father will watching you all from heaven.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Dad \"",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "این یه تصویر از بریه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "یه چیزی پشت این عکس نوشته شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "«به عزیزترین کسام، مویرا و پولی،",
            paragraphDirection: "right"
          },
          {
            paragraph: "امیدوارم بزرگ‌وبزرگترشدن، ازت یه زن زیبا و قوی بسازه تا بتونی به مادرت روحیه بدی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بابایی از بهشت مواظب‌تونه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پدرت»",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 12,
        fileImageUrl: '/src/lib/assets/images/re1/files/pass-code-01/pass-code-01.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!pass-code-01",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/pass-code-01/map/pass-code-01-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/private-room",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/pass-code-01",
        title: "Pass Code 01",
        originalContent: [
          {
            paragraph: "\"I swear by myself\", declares the Lord, \"that because you have done this and have not withheld your son, your only son,",
            paragraphDirection: "left"
          },
          {
            paragraph: "(Genesis 22:16)",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "به گفته‌ی پروردگار «به خودم قسم»، «به خاطر آنکه تو به انجامش رساندی و تنها فرزندت را منع نکردی،",
            paragraphDirection: "right"
          },
          {
            paragraph: "(جنسیس ۲۲:۱۶)",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 13,
        fileImageUrl: '/src/lib/assets/images/re1/files/pass-code-02/pass-code-02.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!pass-code-02",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/pass-code-02/map/pass-code-02-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/morgue",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/pass-code-02",
        title: "Pass Code 02",
        originalContent: [
          {
            paragraph: "I will surely bless you and make your descendant as numerous as the stars in the sky, and as the sand on the seashore.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Your descendants will take possession of the cities of their enemies,",
            paragraphDirection: "left"
          },
          {
            paragraph: "(Genesis 22:17)",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "البته، تو را برکت می‌دهم، و اولادت را به ازدیادِ ستاره‌های آسمان، و شن‌های یک ساحل درمی‌آورم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اولادت، شهرهای دشمنان‌شان را صاحب می‌شوند،",
            paragraphDirection: "right"
          },
          {
            paragraph: "(جنسیس ۲۲:۱۷)",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 14,
        fileImageUrl: '/src/lib/assets/images/re1/files/pass-code-03/pass-code-03.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil/files#!pass-code-03",
        location: [
          {
            text: "Location (Chris, Jill)",
            mapImageUrl: '/src/lib/assets/images/re1/files/pass-code-03/map/pass-code-03-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil/maps/underground-laboratory/laboratory-b3/power-maze-2",
            mapImageSource: 'Evil Resource'
          }
        ],
        url: "/pass-code-03",
        title: "Pass Code 03",
        originalContent: [
          {
            paragraph: "and through your offspring all nations on earth will be blessed, because you have obeyed me.\"",
            paragraphDirection: "left"
          },
          {
            paragraph: "(Genesis 22:18)",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "و به واسطه‌ی فرزندانت، تمامی مللِ روی زمین برکت داده می‌شوند، چرا که تو از من پیروی کردی.»",
            paragraphDirection: "right"
          },
          {
            paragraph: "(جنسیس ۲۲:۱۸)",
            paragraphDirection: "left"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    gameImageUrl: '/src/lib/assets/images/re2/re2.png',
    shortTitle: 'RE2',
    title: 'Resident Evil 2',
    releaseDate: '1998',
    url: '/games/re2/files',
    files:
    [
      {
        id: 1,
        fileImageUrl: '/src/lib/assets/images/re2/files/police-memorandum/police-memorandum.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!police-memorandum",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/police-memorandum/location/police-memorandum-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Police_memorandum",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/police-memorandum/map/police-memorandum-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/waiting-room-1f",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/police-memorandum",
        title: "Police Memorandum",
        originalContent: [
          {
            paragraph: "8/23/1998",
            paragraphDirection: "left"
          },
          {
             paragraph: "This letter is just to inform everyone about the recent movement of equipment that has happened during the precinct's rearrangement.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The safe with four digit lock has been moved from S.T.A.R.S. office on the second floor, to the eastern office on the first floor.",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"2236\"",
            paragraphDirection: "center"
          },
          {
            paragraph: "Raccoon Police Liaison Dept.",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "۲۳ اوت ۱۹۹۸",
            paragraphDirection: "right"
          },
          {
            paragraph: "این نامه، تنها به منظور اطلاع‌رسانی عموم درباره‌ی انتقال تجهیزاتی‌ست که طی بازآرایی کلانتری به انجام رسیده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گاوصندوقِ دارای قفل چهار رقمی نیز از دفتر استارز، واقع در طبقه‌ی دوم، به دفتر شرقیِ در طبقه‌ی اول، انتقال یافته. ",
            paragraphDirection: "right"
          },
          {
            paragraph: "«۲۲۳۶»",
            paragraphDirection: "center"
          },
          {
            paragraph: "دپارتمان ارتباطات پلیس راکون",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 2,
        fileImageUrl: '/src/lib/assets/images/re2/files/chris-s-diary/chris-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!chriss-diary",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/chris-s-diary/location/chris-s-diary-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/CHRIS%27s_diary",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/chris-s-diary/map/chris-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/stars-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/chris-s-diary",
        title: "Chris's Diary",
        originalContent: [
          {
            paragraph: "August 8th",
            paragraphDirection: "left"
          },
          {
             paragraph: "I talked to the chief today once again, but he refused to listen to me. I know for certain that Umbrella conducted T-virus research in that mansion.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Anyone infected turns into a zombie.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But the entire mansion went up in that explosion; along with any incriminating evidence. Since Umbrella employs so many people in this town, no one is willing to talk about the incident.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It looks like I'm running out of options.",
            paragraphDirection: "left"
          },
          {
            paragraph: "August 17th",
            paragraphDirection: "left"
          },
          {
            paragraph: "We've been receiving a lot of local reports about strange monsters appearing at random throughout the city. This must be the work of Umbrella.",
            paragraphDirection: "left"
          },
          {
            paragraph: "August 24th",
            paragraphDirection: "left"
          },
          {
            paragraph: "With the help of Jill and Barry, I finally obtained information vital to this case. Umbrella has begun research on the new G-virus, a variation of the original T-virus. Haven't they done enough damage already?!",
            paragraphDirection: "left"
          },
          {
            paragraph: "We talked it over, and have decided to fly to the main Umbrella HQ in Europe. I won't tell my sister about this trip because doing so could put her in danger.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Please forgive me Claire.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۸ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "همین امروز یه بار دیگه با رئیس کل صحبت کردم، اما گوشش بدهکار نبود. ولی من یقین دارم که آمبرلا، تحقیقات مرتبط با ویروس تی رو تو اون عمارت به انجام رسوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هر کسی هم که آلوده می‌شد، زامبی از آب درمیومد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هرچند که طی اون انفجار، کل عمارت رفت رو هوا؛ اونم با تموم شواهد مجرمانه‌ش. از اونجایی هم که آمبرلا، آدمای زیادی رو از این شهر، زیر دستش گرفته، هیچکی دوست نداره تا از این قضیه سخنی به میون بیاد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به نظر هم که دیگه انتخابی ندارم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۷ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "مشغول دریافت گزارشای محلی‌ای هستیم که از حضور تصادفی هیولاهای عجیب‌وغریب، تو سرتاسر شهر خبر می‌ده. این باید کارِ آمبرلا باشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۴ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "با کمک جیل و بری اما، آخرش به طلاعات کلیدی این پرونده دست پیدا کردم. آمبرلا تحقیقات روی ویروس جدیدِ جی رو شروع کرده، که یه شکل متفاوت از ویروس تی‌هه. قد کافی آسیب نزده بودن مگه؟!",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما صحبت‌هامونو کردیم، و تصمیم بر این شد تا طی یه پرواز به مقر اصلی آمبرلا توی اروپا بریم. درباره‌ی این سفر به خواهرم هیچی نمی‌گم، چون گفتنش می‌تونه اونو تو دردسر بندازه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "خواهش می‌کنم منو ببخش کلیر.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 3,
        fileImageUrl: '/src/lib/assets/images/re2/files/mail-to-chris/mail-to-chris.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!mail-to-chris",
        location: [
          {
            text: "Location (Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/mail-to-chris/location/mail-to-chris-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Mail_to_Chris",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/mail-to-chris/map/mail-to-chris-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/stars-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/mail-to-chris",
        title: "Mail to Chris",
        originalContent: [
          {
            paragraph: "Mr. Chris Redfield",
            paragraphDirection: "left"
          },
          {
             paragraph: "Raccoon City Police Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "S.T.A.R.S. division",
            paragraphDirection: "left"
          },
          {
            paragraph: "As per your request, we have conducted our internal investigation and discovered the following information:",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Regarding the G-virus currently under development by Umbrella Inc.",
            paragraphDirection: "left"
          },
          {
            paragraph: "So far it is unconfirmed that the G-virus even exists. We're continuing with our investigation.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Regarding Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Mr. Irons has allegedly received a large sum of funds in bribes from Umbrella Inc. over the last five years. He was apparently involved in the cover up of the mansion lab case along with several other incidents in which Umbrella appears to have direct involvement.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Mr. Irons had been arrested under suspicion of rape on two separate counts during his years as a university student. He underwent psychiatric evaluation as a result of the charges but was released due to circumstantial evidence as well as his phenomenal academic standing.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As such, extreme caution is advised when dealing with him.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Jack Hamilton,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Section Chief",
            paragraphDirection: "left"
          },
          {
            paragraph: "Internal Investigations",
            paragraphDirection: "left"
          },
          {
            paragraph: "United States Federal Police Department",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "آقای کریس ردفیلد",
            paragraphDirection: "right"
          },
          {
            paragraph: "اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "بخش استارز",
            paragraphDirection: "right"
          },
          {
            paragraph: "بنا به درخواست‌تان، تحقیقات داخلی خود را به انجام رساندیم، و به اطلاعات پیشِ رو دست پیدا کردیم:",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. در مورد ویروس جی که هم‌اکنون توسط آمبرلا در دست توسعه است",
            paragraphDirection: "right"
          },
          {
            paragraph: "تا به اکنون تایید نشده که آیا ویروس جی وجود دارد. اما ما به تحقیقات خود ادامه می‌دهیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. راجع به جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "ادعا می‌شود که آقای آیرونز، طی پنج سال گذشته، مبلغ هنگفتی از بودجه‌ی آمبرلا را، در قالب رشوه، دریافت می‌کند. از قرار معلوم نیز او در لاپوشانیِ پرونده‌ی آزمایشگاه عمارت، و همچنین دیگر وقایعی که آمبرلا در آن مستقیما دست داشته، مشارکت می‌کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آقای آیرونز به ظن تجاوز به دو نفر، طی سال‌های دانشجویی‌اش، دستگیر می‌شود. به دلیل اتهامات وارده اما، او تحت ارزیابی روانپزشک قرار می‌گیرد، ولی به واسطه‌ی شواهد ناکافی و جایگاه علمی شگفت‌انگیزش، آزاد می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "از این رو، توصیه می‌شود تا هنگام رویارویی با وی، نهایت احتیاط را به کار گیرید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "جک همیلتون",
            paragraphDirection: "right"
          },
          {
            paragraph: "رئیس بخش",
            paragraphDirection: "right"
          },
          {
            paragraph: "تحقیقات داخلی",
            paragraphDirection: "right"
          },
          {
            paragraph: "اداره‌ی پلیس فدرال ایاالات متحده‌ی آمریکا",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 4,
        fileImageUrl: '/src/lib/assets/images/re2/files/operation-report-1/operation-report-1.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!operation-report-1",
        location: [
          {
            text: "Location (Leon A, Claire A)",
            locationImageUrl: '/src/lib/assets/images/re2/files/operation-report-1/location/operation-report-1-location-a.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Operation_report_1",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/operation-report-1/map/operation-report-1-map-a.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/operations-room",
            mapImageSource: 'Evil Resource',
          },
          {
            text: "Location (Leon B, Claire B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/operation-report-1/location/operation-report-1-location-b.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Operation_report_1",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/operation-report-1/map/operation-report-1-map-b.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/operations-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/operation-report-1",
        title: "Operation Report 1",
        originalContent: [
          {
            paragraph: "- Operation Report -",
            paragraphDirection: "center"
          },
          {
            paragraph: "September 26th",
            paragraphDirection: "right"
          },
          {
            paragraph: "The Raccoon Police Dept. was unexpectedly attacked by zombies. Many have been injured. Even more were killed. During the attack, our communications equipment was destroyed and we longer have contact with the outside.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We have decided to carry out an operation with the intent of rescuing any possible survivors as well as to prevent this disaster from spreading beyond Raccoon City. The details of the operation are as follows:",
            paragraphDirection: "left"
          },
          {
            paragraph: "Security of armaments and ammunition.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Chief Irons has voiced concern regarding the issue of terrorism due to a series of recent unresolved incidents. On the very day before the zombies' attack, he made the decision to relocate all weapons to scattered intervals throughout the building as a temporary measure to prevent their possible seizure. Unfortunately, this decision made it extremely difficult for us to locate all ammunition caches.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It has become our top priority to recover these scattered munitions.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As stated earlier, it will be extremely difficult to secure all the ammunition. However, a considerable supply still remains in the underground weapon storage. Unfortunately, the person in charge of the card key used to access the weapon storage is missing and we have been unable to locate the key. One of the breakers went down during the battle and the electronic locks are not functioning in certain areas. It has become a top priority to restore the power in the power room and secure those locks.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Recorder: David Ford",
            paragraphDirection: "right"
          },
          {
            paragraph: "- Operation Report -",
            paragraphDirection: "center"
          },
          {
            paragraph: "September 27th",
            paragraphDirection: "right"
          },
          {
            paragraph: "1:00PM. The west barricade has been broken through and another exchange ensued. We sheltered the injured in the confiscation room on the first floor temporarily. Twelve more people were injured in the battle.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Recorder: David Ford",
            paragraphDirection: "right"
          },
          {
            paragraph: "- Additional Report -",
            paragraphDirection: "center"
          },
          {
            paragraph: "Three additional people were killed following the sudden appearance of an as of yet unknown creature.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This creature is identified by missing patches of skin and razor-like claws. However, its most distinguishing characteristic is its lance-like tongue, capable of piercing a human torso in an instant.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Their numbers as well as their location remains unknown. We have tentatively named this creature the \"licker\" and are currently in the process of developing countermeasures to deal with this new threat.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "- گزارش عملیات -",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۶ سپتامبر",
            paragraphDirection: "left"
          },
          {
            paragraph: "اداره‌ی پلیس شهر راکون به طور غیر منتظره‌ای مورد حمله‌ی زامبی‌ها قرار می‌گیره. این وسط خیلی‌ها زخمی می‌شن و بیشتر از اینا هم به قتل می‌رسن. طی این حمله تجهیزات ارتباطاتی‌مون می‌پوکه می‌ره و ارتباطمون با محیط بیرون قطع می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تصمیم بر این شد تا با هدف نجات حداکثری بازمانده‌ها و جلوگیری از گسترش این فاجعه از مرزهای راکون، یه عملیات رو با جزئیات زیر به انجام برسونیم:",
            paragraphDirection: "right"
          },
          {
            paragraph: "امنیت جنگ‌افزارها و مهمات",
            paragraphDirection: "right"
          },
          {
            paragraph: "ریس آیرونز به واسطه‌ی مجموعه‌ای از حوادث حل‌نشده، در مورد موضوع تروریسم، ابراز نگرانی می‌کنه. درست یک روز قبلِ حمله‌ی زامبی‌ها، اون تصمیم می‌گیره تا به عنوان اقدامی موقت برای جلوگیری از تصرف سلاح‌ها، اون‌ها رو به فواصل زمانی پراکنده، تو سرتاسر ساختمون، انتقال بده. بدبختانه ولی، این تصمیم باعث شد تا پیدا کردن تمامی انبارهای مهمات برای ما خیلی دشوار بشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اولویت اول ما هم این شد تا به بازیابی این تسلیحاتِ پخش‌وپَلاشده بپردازیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همونطور که قبلا هم گفته شد، ایمن‌سازیِ تمام مهمات قراره خیلی سخت باشه. با وجود این ولی، تو انبار زیرزمینی تسلیحات، هنوزم مقدار قابل توجهی تجهیزات داریم. ولی بدبختی اینجاست که شخصی که مسئول کلید کارتی مد نظر، برای باز کردن در انبار تسلیحات هست رو، گم کردیم و نشد کلید کارتی رو پیداش کنیم. طی این نبرد، یکی از مدارشکنا ترکید رفت، و قفلای الکترونیکی، توی یه سری محیط‌ها، کارشون رو درست انجام نمی‌دن. برگردوندن برق، توی اتاق مربوطه، به همراه ایمن‌سازی قفلا، اولویت اول ماس.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ثبت‌وضبط: دیوید فورد",
            paragraphDirection: "left"
          },
          {
            paragraph: "- گزارش عملیات -",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۷ سپتامبر",
            paragraphDirection: "left"
          },
          {
            paragraph: "ساعت ۱۳:۰۰‌هه؛ به سنگر غربی رخنه شده و به دنبالش، با یه جابجایی روبه‌روییم. به مجروحین موقتا تو طبقه‌ی اولِ اتاق مصادره، پناه داده شده. تو این مبارزه، دوازده نفر دیگه هم مجروح شدن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ثبت‌وضبط: دیوید فورد",
            paragraphDirection: "left"
          },
          {
            paragraph: "- گزارش تکمیلی -",
            paragraphDirection: "center"
          },
          {
            paragraph: "سه نفر دیگه به دنبال پیدایش ناگهانی یه موجود ناشناخته کشته شدن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این موجود به واسطه‌ی تیکه‌های پوست و چنگال‌های تیغه‌مانندش شناسایی می‌شه. اگرچه که بارزترین ویژگی‌ش، زبون نیزه‌مانندشه که می‌تونه تو یه چشم‌به‌هم‌زدن، نیم‌تنه‌ی انسان رو سوراخ کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تعداد و جاومکانش هم که نامشخصه. ما به صورت آزمایشی، اسمش رو گذاشتیم «لیکر»، و الآن هم مشغول اقدام متقابل با این تهدید جدیدیم.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 5,
        fileImageUrl: '/src/lib/assets/images/re2/files/memo-to-leon/memo-to-leon.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!memo-to-leon",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/memo-to-leon/location/memo-to-leon-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Memo_to_LEON",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/memo-to-leon/map/memo-to-leon-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/information-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/memo-to-leon",
        title: "Memo to Leon",
        originalContent: [
          {
            paragraph: "To Leon S. Kennedy,",
            paragraphDirection: "left"
          },
          {
             paragraph: "Congratulations on your assignment to the Raccoon City police department.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We all look forward to having you as part of our team and promise to take good care of you.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Welcome aboard!",
            paragraphDirection: "left"
          },
          {
            paragraph: "From all the guys at the R.P.D.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "به لیان اس. کندی",
            paragraphDirection: "right"
          },
          {
            paragraph: "پیوستن‌ات به اداره‌ی پلیس شهر راکون رو تبریک می‌گیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مشتاقانه منتظریم تا حضورت رو به عنوان بخشی از تیم‌مون شاهد باشیم، با تعهد به اینکه به خوبی ازت مراقبت کنیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به جمع ما خوش اومدی!",
            paragraphDirection: "right"
          },
          {
            paragraph: "از طرف همه‌ی اعضای اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 6,
        fileImageUrl: '/src/lib/assets/images/re2/files/operation-report-2/operation-report-2.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!operation-report-2",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/operation-report-2/location/operation-report-2-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Operation_report_2",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/operation-report-2/map/operation-report-2-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/dark-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/operation-report-2",
        title: "Operation Report 2",
        originalContent: [
          {
            paragraph: "- Operation Report -",
            paragraphDirection: "center"
          },
          {
             paragraph: "September 28th",
            paragraphDirection: "right"
          },
          {
            paragraph: "Early morning 2:30AM. Zombies overran the operation room and another battle broke out. We lost four more people, including David.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We're down to four people, including myself. We failed to secure the weapons cache and hope for our survival continues to diminish.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We won't last much longer... We agreed upon a plan to escape through the sewer. There's a path leading from the precinct underground to the sewage disposal plant. We should be able to access the sewers through there. The only drawback is that there is now guarantee the sewage disposal plant is free of any possible dangers. We know our chances in the sewers are slim, but anything would be better than simply waiting here to die.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In order to buy more time, we locked the only door leading to the underground, which is located in the eastern office. We left the key behind in the western office since it's unlikely that any of those creatures have the intelligence to find it and unlock the door.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I pray that this operation report will be helpful to whoever may find it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Recorder: Elliot Edward",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "- گزارش عملیات -",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۸ سپتامبر",
            paragraphDirection: "left"
          },
          {
            paragraph: "صبح زوده، ساعت هم ۲:۳۰. زامبی‌ها توی اتاقِ عملیات، تاخت‌وتاز راه می‌ندازن و یه مبارزه‌ی دیگه رو رقم می‌زنن. ما هم چهار نفر دیگه رو از دست دادیم، از جمله دیوید رو.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با احتساب من، همه‌ش شدیم چهار نفر. تو ایمن‌سازی انبار تسلیحات هم به شکست خوردیم و امیدمون برای بقا هم کمرنگ شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بیشتر از این دووم نمیاریم... سرِ نقشه‌ی فرار از طریق فاضلاب هم توافق کردیم. یه مسیری از زیرزمین کلانتری هست که ما رو به کارخونه‌ی دفع فاضلاب می‌رسونه؛ و باید بتونیم به این واسطه، به فاضلاب دسترسی پیدا کنیم. اشکال کار ولی اینجاست که هیچ تضمینی نیست که اونجا هم خالی از خطرات احتمالی باشه. می‌دونیم که شانس کمی تو فاضلاب داریم، اما هر چی باشه بهتر از اینه که اینجا بشینیم و منتظر مرگ بمونیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای اینکه وقت بیشتری رو بخریم، ما تنها درِ منتهی به زیرزمین، واقع تو دفتر شرقی رو، قفل کردیم. کلید هم گذاشتیم توی دفتر غربی، و بعیده که این موجودات اونقدر هوشیار باشن تا کلید رو برای باز کردن در، پیدا کنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "دعا می‌کنم این گزارش از عملیات به درد هر کی که پیداش می‌کنه بخوره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ثبت‌وضبط: الیوت ادوارد",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 7,
        fileImageUrl: '/src/lib/assets/images/re2/files/chief-s-diary/chief-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!chiefs-diary",
        location: [
          {
            text: "Location (Leon B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/chief-s-diary/location/chief-s-diary-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Chief%27s_diary",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/chief-s-diary/map/chief-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/chief-irons-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/chief-s-diary",
        title: "Chief's Diary",
        originalContent: [
          {
            paragraph: "September 23rd",
            paragraphDirection: "left"
          },
          {
             paragraph: "It's all over. Those imbeciles from Umbrella have finally done it... Despite all their promises, they've ruined my town. Soon the streets will be infested with zombies. I'm beginning to think that I may be infected myself. I'll kill everyone in town if this turns out to be true!!!",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 24th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I was successful in spreading confusion among the police as planned. I've made sure that no one from the outside will come to help.",
            paragraphDirection: "left"
          },
          {
            paragraph: "With the delays in police actions, no one will have the chance to escape my city alive. I've seen to it personally that all escape routes from inside the precinct have been cut off as well.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There are several survivors still attempting to escape through the lower levels, but I'll make sure no one gets out.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 26th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I've had a change of heart about the remaining survivors inside the precinct. I've decided to hunt them down myself.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I shot Ed in the back through the heart less than an hour ago. I watched him writhe in pain upon the floor in a pool of his own blood. The expression on his face was positively exquisite. He died with his eyes wide open, staring up at me. It was beautiful.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I wonder if the mayor's daughter is still alive? I let her escape so I could enjoy hunting her down later...",
            paragraphDirection: "left"
          },
          {
            paragraph: "I'm going to enjoy my new trophy. Yes, frozen forever in the pose I choose to give her.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۲۳ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "دیگه تموم شد. احمقای آمبرلا بالاخره کارشون رو کردن. علی‌رغم تعهدات‌شون، شهر منو به فنا دادن. به زودی زامبی‌ها به خیابونا حمله‌ور می‌شن. دارم به این فکر می‌کنم که نکنه منم آلوده شم. اگه این قضیه درست باشه، من یکی که همه‌ی آدمای تو شهرو به کشتن می‌دم!!!",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۴ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "طبق نقشه، با موفقیت بین پلیسا سردرگمی ایجاد کردم. مطمئن هم شدم که هیچکی قرار نیست به دادشون برسه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تاخیر تو امور پلیس، این شانسو به هیچ‌کس نمی‌ده که زنده از شهر بیرون بیاد. من حتی اطمینان خاطر دارم که راه‌های فرار از داخل کلانتری، از دسترس خارج شدن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هنوز چندتا بازمانده داریم که در تلاش برای فرار از طبقات زیرزمینی‌ان، اما من می‌خوام مطمئن بشم که هیچکی خروج نمی‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۶ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "نظرم راجع به تنها بازمانده‌های داخل کلانتری تغییر کرد و تصمیم گرفتم خودم گیرشون بیارم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "یه ساعت نمی‌شه که از پشت به قلبِ اِد شلیک کردم. از درد روی زمین، توی حوضی از خون خودش، می‌پیچید. حالت چهره‌ش ولی پر از حس بود. و با چشمای بازی که به من خیره شده بود مُرد. زیبایی یعنی این.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برام سواله که هنوز دختر شهردار زنده‌ست یا نه؟ من که گذاشتم فرار کنه، تا بعد، گیر بندازمش و لذت ببرم...",
            paragraphDirection: "right"
          },
          {
            paragraph: "با این یادگاری جدید قراره به خودم حالی بدم. صد البته، بصورت یخ‌زده، تو حالتی که قراره بهش تقدیم کنم.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 8,
        fileImageUrl: '/src/lib/assets/images/re2/files/film-a/film-a.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!film-a",
        location: [
          {
            text: "Location (Leon A, Claire A)",
            locationImageUrl: '/src/lib/assets/images/re2/files/film-a/location/film-a-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Film_A",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/film-a/map/film-a-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/evidence-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/film-a",
        title: "Film A",
        originalContent: [
          {
            paragraph: "Code G Human Body Experiment",
            paragraphDirection: "center"
          },
          {
             paragraph: "9/15 15:24",
            paragraphDirection: "center"
          }
        ],
        farsiContent: [
          {
            paragraph: "رمز جی، آزمایش بر روی بدن انسان",
            paragraphDirection: "center"
          },
          {
            paragraph: "۱۵ سپتامبر، ۱۵:۲۴",
            paragraphDirection: "center"
          }
        ]
      },
      {
        id: 9,
        fileImageUrl: '/src/lib/assets/images/re2/files/film-b/film-b.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!film-b",
        location: [
          {
            text: "Location (Leon A, Claire A)",
            locationImageUrl: '/src/lib/assets/images/re2/files/film-b/location/film-b-location-a.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Film_B",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/film-b/map/film-b-map-a.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/press-room",
            mapImageSource: 'Evil Resource',
          },
          {
            text: "Location (Leon B, Claire B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/film-b/location/film-b-location-b.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Film_B",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/film-b/map/film-b-map-b.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/evidence-room",
            mapImageSource: 'Evil Resource',
          },
        ],
        url: "/film-b",
        title: "Film B",
        originalContent: [
          {
            paragraph: "Pictured in front of the Arukas tailor.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Regressed into a zombie within two hours.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Subject repeatedly complained about severe agitation of the epidermis in addition to feelings of nausea.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This happened up to the moment he lost conscience.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Picture by R.Lambert",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "تصویر از روبه‌روی خیاطی آروکاسه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "طرف ظرف دو ساعت تبدیل به زامبی شد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "سوژه مرتبا از تحریک شدیدِ پوستی به همراه حالت تهوع شکایت می‌کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "قضیه مال قبل از دست دادن وجدانشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تصویر ارسالی از ر.لمبرت",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 10,
        fileImageUrl: '/src/lib/assets/images/re2/files/film-c/film-c.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!film-c",
        location: [
          {
            text: "Location (Leon B, Claire B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/film-c/location/film-c-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Film_C",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/film-c/map/film-c-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-b1/cell-block-entrance",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/film-c",
        title: "Film C",
        originalContent: [
          {
            paragraph: "Development Code: T-103",
            paragraphDirection: "left"
          },
          {
            paragraph: "Due to accelerated metabolism relative to the earlier 00 series, this subject possesses exemplary regenerative capabilities.",
            paragraphDirection: "left"
          },
          {
            paragraph: "PH-X016 File Data",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "کد توسعه: تی-۱۰۳",
            paragraphDirection: "right"
          },
          {
            paragraph: "بخاطر متابولیسم شتاب‌یافته، در مقایسه با سری ۰۰، این سوژه توانایی‌های نوزاییِ مثال‌زدنی‌ای داره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "داده‌های مربوط به فایلِ پی‌اچ-اکس۰۱۶",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 11,
        fileImageUrl: '/src/lib/assets/images/re2/files/patrol-report/patrol-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!patrol-report",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/patrol-report/location/patrol-report-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Patrol_report",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/patrol-report/map/patrol-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/file-storage",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/patrol-report",
        title: "Patrol Report",
        originalContent: [
          {
            paragraph: "-Patrol Report-",
            paragraphDirection: "center"
          },
          {
            paragraph: "September 20th 9:30 PM",
            paragraphDirection: "center"
          },
          {
            paragraph: "Reporter: Sgt. Neil Carlsen",
            paragraphDirection: "center"
          },
          {
            paragraph: "We received a report of a suspicious individual skulking around the sewers in the outskirts of Raccoon City. I searched the area and located the individual, but he ran away before I was able to question him.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I recovered the following items:",
            paragraphDirection: "left"
          },
          {
            paragraph: "A small amount of C4 plastic explosive.",
            paragraphDirection: "left"
          },
          {
            paragraph: "An electronic detonator.",
            paragraphDirection: "left"
          },
          {
            paragraph: "9x19 parabellum rounds.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Infrared scope [broken].",
            paragraphDirection: "left"
          },
          {
            paragraph: "End of report.",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "- گزارش گشت -",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۰ سپتامبر، ۲۱:۳۰",
            paragraphDirection: "center"
          },
          {
            paragraph: "گزارش: گورهبان نیل کارلسن",
            paragraphDirection: "center"
          },
          {
            paragraph: "ما گزارشی رو دریافت کردیم که حاکی از پرسه‌زدن یه شخص مشکوک تو حوالی فاضلابِ حومه‌ی شهر راکونه. محیط رو هم بازرسی کردم و شخص مورد نظر رو مکان‌یابی، اما قبل اینکه بتونم ازش سوالی بپرسم، فلنگ رو بست رفت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "من موارد زیر رو بازیابی کردم:",
            paragraphDirection: "right"
          },
          {
            paragraph: "یه مقدار ماده‌ی منفجره‌ی پلاستیکی سی۴",
            paragraphDirection: "right"
          },
          {
            paragraph: "منفجرکننده‌ی الکترونیکی",
            paragraphDirection: "right"
          },
          {
            paragraph: "گلوله‌های ۹ در ۱۹ پارابلوم",
            paragraphDirection: "right"
          },
          {
            paragraph: "دوربینِ روی اسلحه‌ی مادون قرمز (خراب)",
            paragraphDirection: "right"
          },
          {
            paragraph: "پایان گزارش",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 12,
        fileImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-a/secretary-s-diary-a.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!secretarys-diary-a",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-a/location/secretary-s-diary-a-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Secretary%27s_diary_A",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-a/map/secretary-s-diary-a-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/waiting-room-2f",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/secretary-s-diary-a",
        title: "Secretary's Diary A",
        originalContent: [
          {
            paragraph: "April 6th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I accidentally moved one of the stone statues on the second floor when I leaned against it. When the chief found out about it, he was furious. I swear the guy nearly bit my head off, screaming at me never to touch the statue again. If it's so important, then maybe he shouldn't have put it out in the open like that...",
            paragraphDirection: "left"
          },
          {
            paragraph: "April 7th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I heard that all the art pieces from the chief's collection are rare items, literally worth hundreds of thousand of dollars. I don't know which is the bigger mystery: where he finds those tacky things, or where he's getting the money to pay for them.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 10th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I wasn't surprised to see the chief come in today with yet another large picture frame in his hands. This time it was a really disturbing painting depicting a nude person being hanged. I was appalled by the expression on the chief's face as he leered at that painting.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Why anyone would consider something like that to be a work of art is beyond my comprehension...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۶ آوریل",
            paragraphDirection: "right"
          },
          {
            paragraph: "به یکی از مجسمه‌های طبقه‌ی دوم که تکیه داده بودم، اتفاقی جابجا شد رفت. وقتی هم که رئیس کل فهمید، از کوره در رفت. قسم می‌خورم که نزدیک بود الم‌شنگه راه بندازه، سرم داد می‌زد که دیگه نباید به مجسمه دست بزنی. اگه قضیه اینقد مهمه، پس نباید در معرض عموم می‌ذاشتش...",
            paragraphDirection: "right"
          },
          {
            paragraph: "۷ آوریل",
            paragraphDirection: "right"
          },
          {
            paragraph: "به گوشم خورده که آثار هنریِ کلکسیون رئیس کل، همگی اقلام کمیابی‌ان، که به معنای واقعی، صدها یا هزاران دلار ارزش مالی دارن. من که نفهمیدم کدوم یکی معمای بزرگتریه: اینکه از کجا این چیزای خزوخیل رو پیدا می‌کنه، یا اینکه از کجا پولِ پرداخت اینا رو میاره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۰ مه",
            paragraphDirection: "right"
          },
          {
            paragraph: "از اینکه دیدم رئیس کل یه روز دیگه با یه قاب عکس بزرگ از راه میاد، تعجب نکردم. این بار اما تصویر، تصویرِ یه شخص برهنه بود که به دار آوریخته شده. از اونجایی هم که چشم‌چرونی‌ش به تصویر رو دیدم، از حالت چهره‌ای که به خودش گرفته بود بهتم زد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اینکه چرا یکی باید اینو اثر هنری بدونه، از درک من خارجه...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 13,
        fileImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-b/secretary-s-diary-b.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!secretarys-diary-b",
        location: [
          {
            text: "Location (Leon B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-b/location/secretary-s-diary-b-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Secretary%27s_diary_B",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/secretary-s-diary-b/map/secretary-s-diary-b-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/taxidermy-display-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/secretary-s-diary-b",
        title: "Secretary's Diary B",
        originalContent: [
          {
            paragraph: "June 8th",
            paragraphDirection: "left"
          },
          {
            paragraph: "As I was straightening up the chief's room, he burst through the door with a furious look on his face. It's only been 2 months since I've started working here, but that was the second time I've seen him like this. The last time was when I bumped into that statue, only this time he looked even more agitated than ever. I seriously thought for a moment that he was going to hurt me.",
            paragraphDirection: "left"
          },
          {
            paragraph: "June 15th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I finally discovered what the chief has been hiding all along... If he finds out that I know, my life will be in serious danger.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's getting late already. I'm just going to have to take this a day at a time...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۸ ژوئن",
            paragraphDirection: "right"
          },
          {
            paragraph: "داشتم اتاق رئیس کل رو تمیز می‌کردم که یهو با یه چهره‌ی خشمگین، سروکله‌ش پیدا شد. همه‌ش هم ۲ ماهه که اینجا شروع به کار کردم، و این دفعه‌ی دومیه که اونو اینجوری می‌بینم. دفعه‌ی قبلی، موقعی بود که به مجسمه خورده بودم؛ اینبار ولی اون تحریک‌پذیرتر از همیشه به نظر می‌رسید. یه لحظه، به جد فکر کردم قراره بهم آسیب بزنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۵ ژوئن",
            paragraphDirection: "right"
          },
          {
            paragraph: "آخرسر فهمیدم که رئیس کل از اول داشت چه چیزی رو پنهان می‌کرد... اگه متوجه بشه که منم باخبرم، زندگی‌م تو خطر میفته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "دیگه دیر شده. من که می‌رم به زندگی‌م برسم...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 14,
        fileImageUrl: '/src/lib/assets/images/re2/files/watchman-s-diary/watchman-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!watchmans-diary",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/watchman-s-diary/location/watchman-s-diary-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Watchman%27s_diary",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/watchman-s-diary/map/watchman-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-1f/watchmans-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/watchman-s-diary",
        title: "Watchman's Diary",
        originalContent: [
          {
            paragraph: "August 11th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I finally had the chance to see blue skies for the first time in ages, but it did little to lift my spirits. I was reprimanded by the chief for neglecting my duties while I was up on the clock tower.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There's only one thing I still don't understand: the chief seemed to be more concerned about the fact that I was up on the tower rather than that I was neglecting my duties.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Why was access to the tower prohibited in the first place anyway?",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 5th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I recently talked to the old man who works in the scrap yard out back. His name is Thomas. He's a quiet man and really seems to enjoy chess. He even went so far as to design a special key and lock engraved with chess pieces on them for one of the doors in the disposal yard.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We made plans to play chess tomorrow night. I can't help but wonder how good he is. One thing that's been bothering me about him is the way that he's always scratching himself... Does he have some sort of skin disease or is he just rude?",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 9th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Thomas was a much better player than I has imagined. I used to think of myself as a fairly decent player, but he did a pretty good job of humbling me.",
            paragraphDirection: "left"
          },
          {
            paragraph: "About the only thing I imagine that could match his skills in chess is his appetite. All the guy did was talk about food throughout the entire game. He sounded fairly healthy, but he didn't look quite right...",
            paragraphDirection: "left"
          },
          {
            paragraph: "I wonder if he's okay.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 12th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I was supposed to play another game of chess with Thomas, but we had to cancel because he hasn't been feeling too well.",
            paragraphDirection: "left"
          },
          {
            paragraph: "He stopped by to see me, but I told him to go back and rest since he literally looked like the walking dead.",
            paragraphDirection: "left"
          },
          {
            paragraph: "He insisted he was just fine, but I could tell he was really having problems.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Come to think of it, I haven't been feeling too good myself lately...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۱۱ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "بالاخره این شانس رو پیدا کردم تا رنگ آسمون رو بعد مدت‌ها، برای اولین بار ببینم، هرچند که این قضیه حس‌وحالی برام ایجاد نکرد. وقتی هم که بالای برج ساعت بودم، بخاطر سرباززدن از وظایفم، توسط رئیس کل، توبیخ شدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "فقط یه چیزی هست که مطمئن نیستم: رئیس کل به نظر بیشتر نگران این قضیه‌ست که من رفتم بالای برج ساعت، نه اینکه وظایفم رو ندید گرفتم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بگذریم، ولی چرا از همون اول، دسترسی به برج ممنوع بود؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "۵ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "تازگی‌ها با اون پیرمرده که تو قبرستونِ دورافتاده‌ی ماشینا کار می‌کرد، صحبت داشتم. اسمش توماسه. بی‌سروصداس و گویا که از شطرنج، لذت می‌بره. اون تا اونجا پیش می‌ره که برای یکی از دَرای محوطه‌ی دفع زباله، کلید و قفل مخصوصی رو طراحی می‌کنه که روشون مهره‌های شطرنج حک شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برنامه ریختیم که فردا شب بریم شطرنج. فقط از بازیِ خوبش دهنم وا مونده. یه چیز که منو تو این مدت آزارم داد ولی اینه که طرف همیشه خودشو می‌خارونه. آیا اون یه نوع بیماری پوستی داره، یا فقط داره پرروگری می‌کنه؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "۹ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "توماس تو بازی بهتر از چیزی بود که متصور بودم. قبلاها پیش خودم فکر می‌کردم که بازیکن نسبتا قابل قبولی‌ام، اما اون کارش تو تنزل سطح من حرف نداشت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تنها چیزی هم که با مهارت‌های شطرنج‌اش جور در میاد، فکر می‌کنم اشتهاش باشه. کل کاری هم که می‌کرد، حرف‌زدن درباره‌ی غذا تو کل بازی‌مون بود. اون به نظر سالم بود، اما بوش نمیومد که اینطور باشه...",
            paragraphDirection: "right"
          },
          {
            paragraph: "موندم که روبه‌راهه یا نه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۲ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "قرار بود یه دست شطرنجِ دیگه با توماس داشته باشیم، ولی مجبور شدیم بیخیال‌اش بشیم، چون اون حال خوشی نداشت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "یه نگاه اجمالی هم بهم انداخت، اما بهش گفتم که برگرده و استراحت کنه، چون رسما شبیه یه مرده‌ی زنده شده بود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اصرار داشت که حالش خوبه، اما به جرات می‌تونم بگم که کلی مشکل داشت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "الآن که فکرشو می‌کنم، این اواخر خودمم حس خوبی نداشتم...",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 15,
        fileImageUrl: '/src/lib/assets/images/re2/files/mail-to-the-chief/mail-to-the-chief.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!mail-to-the-chief",
        location: [
          {
            text: "Location (Leon A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/mail-to-the-chief/location/mail-to-the-chief-location-leon.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Mail_to_the_chief",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/mail-to-the-chief/map/mail-to-the-chief-map-leon.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-b1/cells",
            mapImageSource: 'Evil Resource',
          },
          {
            text: "Location (Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/mail-to-the-chief/location/mail-to-the-chief-location-claire.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Mail_to_the_chief",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/mail-to-the-chief/map/mail-to-the-chief-map-claire.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/police-station/police-station-2f/chief-irons-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/mail-to-the-chief",
        title: "Mail to the Chief",
        originalContent: [
          {
            paragraph: "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We have lost the mansion lab facility due to the renegade operative, Albert Wesker.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Fortunately, his interference will have no lasting effects upon our continued virus research.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Our only present concern is the presence of the remaining S.T.A.R.S. members: Redfield, Valentine, Burton, Chambers and Vickers.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If it comes to light that S.T.A.R.S. have any evidence as to the activities of our research, dispose of them in a way that would appear to be purely accidental. Continue to monitor their progress and make certain their knowledge does not go public.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Annette will continue to be your contact throughout this affair.",
            paragraphDirection: "left"
          },
          {
            paragraph: "William Birkin",
            paragraphDirection: "right"
          },
          {
            paragraph: "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I have deposited the amount of US $10,000 to the account for your services this term as per our agreement.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The development of the G-virus scheduled to replace the T-virus, is near completion. Once completed, I am certain that I will be appointed to be a member of the executive board for Umbrella Inc.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It is imperative that we proceed with extreme caution. Redfield and the remaining S.T.A.R.S. members are still attempting to uncover information on the project. Continue to monitor their activities and block all attempts to investigate the underground research facilities.",
            paragraphDirection: "left"
          },
          {
            paragraph: "William Birkin",
            paragraphDirection: "right"
          },
          {
            paragraph: "To: Mr. Brian Irons, Chief of the Raccoon City Police Dept.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We have a problem. I have received information informing me that Umbrella HQ has sent spies to recover my research on the G-virus. There are an unknown number of agents involved. They must not be allowed to take this project away from me as it represents my entire life's work.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Search the city thoroughly for any suspicious persons. Detain any such individuals by whatever means deemed necessary and contact me immediately through Annette. With these precautions, any possible threat should be eliminated.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I will not allow anyone to steal my work on the G-virus. Not even Umbrella...",
            paragraphDirection: "left"
          },
          {
            paragraph: "William Birkin",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "به واسطه‌ی جاسوس خائن، آلبرت وسکر، تاسیسات آزمایشگاهی عمارت را از دست دادیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "خوشبختانه اما، مداخله‌ی او، تاثیر ماندگاری بر تحقیقات ادامه‌دارِ ویروس ما نخواهد داشت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تنها نگرانی ما، حضور اعضای باقی‌مانده‌ی استارز است: ردفیلد، ولنتاین، برتن، چمبرز، و ویکرز.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر استارز، شواهدی از فعالیت‌های تحقیقات ما در دست داشته باشد، جوری آن‌ها را حذف کنید که کاملا تصادفی به نظر برسد. بر روند کاری‌شان نظارت داشته باشید و اطمینان حاصل کنید که دانسته‌هایشان عمومی نمی‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آنت به آچارفرانسه‌بودنش برای شما ادامه می‌دهد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ویلیام برکین",
            paragraphDirection: "left"
          },
          {
            paragraph: "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "طبق توافق‌نامه، این بار ۱۰.۰۰۰ دلار، بابت خدمات‌تان به حساب واریز نمودم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "توسعه‌ی ویروس جی که قرار است جایگزینی بر ویروس تی باشد، رو به اتمام است. به محض تکمیل، مطمئن هستم که به عنوان یکی از اعضای هیئت اجرایی آمبرلا منصوب می‌شوم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ضروری‌ست که با نهایت احتیاط پیش برویم. ردفیلد و دیگر اعضای استارز همچنان در تلاش برای روکردن اطلاعات پشت پروژه هستند. فعالیت‌هایشان را رصد کرده و از تمامی تلاش‌هایشان در جهت بررسی تاسیسات تحقیقاتی زیرزمینی، جلوگیری کنید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ویلیام برکین",
            paragraphDirection: "left"
          },
          {
            paragraph: "گیرنده: جناب برایان آیرونز، رئیس کل اداره‌ی پلیس شهر راکون",
            paragraphDirection: "right"
          },
          {
            paragraph: "مشکلی پیش آمده. اطلاعاتی مبنی بر این به دستم رسیده که مقر آمبرلا، در جهت بازپس‌گیریِ تحقیقات من در مورد ویروس جی، چندین جاسوس را اعزام نموده. صحبت از تعداد نامشخصی مامور است. آن‌ها نباید اجازه داشته باشند تا این پروژه را از من بگیرند، چرا که این پروژه، نمایانگر تمام زندگیِ کاری من است.",
            paragraphDirection: "right"
          },
          {
            paragraph: "جستجوی کامل در شهر را، به منظور یافتن افراد مشکوک، آغاز کنید. جلوی این افراد، با هر آن چیزی که لازم دانستید سد بکشید، و سپس بلافاصله از طریق آنت با من تماس بگیرید. با چنین پیش‌بینی‌هایی، تهدیدات احتمالی از بین خواهند رفت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به هیچ‌کس اجازه نمی‌دهم تا زحمتی که بر روی ویروس جی کشیده‌ام را بدزدد، حتی آمبرلا...",
            paragraphDirection: "right"
          },
          {
            paragraph: "ویلیام برکین",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 16,
        fileImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-fax/sewer-manager-fax.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!sewer-manager-fax",
        location: [
          {
            text: "Location (Leon A+B)",
            mapImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-fax/map/sewer-manager-fax-map-leon.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/control-room-2",
            mapImageSource: 'Evil Resource',
          },
          {
            text: "Location (Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-fax/location/sewer-manager-fax-location-claire.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Sewer_manager_fax",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-fax/map/sewer-manager-fax-map-claire.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/control-room-1",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/sewer-manager-fax",
        title: "Sewer Manager Fax",
        originalContent: [
          {
            paragraph: "-User List of the Connecting Facility-",
            paragraphDirection: "center"
          },
          {
            paragraph: "On the first and third Wednesdays of the month, Angelica Margaret, chief of maintenance, will make use of the facilities. Be sure to reduce the moisture levels in the facility by activating the fan, as the equipment she will be using is susceptible to the effects of water vapors.",
            paragraphDirection: "left"
          },
          {
            paragraph: "On the 28th of every month, the chemical transporter Don Weller will use the facility. The chemicals he will be transporting are extremely volatile. Extreme caution should be observed throughout their transport.",
            paragraphDirection: "left"
          },
          {
            paragraph: "On the 6th and 16th of every month, police chief Brian Irons will visit the facility to attend the regular meeting that take place in the lab.",
            paragraphDirection: "left"
          },
          {
            paragraph: "On the fourth Friday of every other month, William Birkin will use the facility to conduct a training seminar for the Chicago branch of Umbrella Inc. As the probability of an attack upon William Birkin will be high, take every measure conceivable to guard his life.",
            paragraphDirection: "left"
          },
          {
            paragraph: "You will be informed of all other potential visitors and the times they will arrive as needed. Guide these individuals to their destination safely. We expect nothing but the best from you.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Charles Coleman",
            paragraphDirection: "left"
          },
          {
            paragraph: "Secretary Chief",
            paragraphDirection: "left"
          },
          {
            paragraph: "Umbrella Headquarters",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "- فهرست تاسیسات اتصال -",
            paragraphDirection: "center"
          },
          {
            paragraph: "تو اولین و سومین چهارشنبه‌ی هر ماه، آنجلیکا مارگارت، رئیس بخش نگهداری، تاسیسات رو به کار می‌گیره. مطمئن شین که سطح رطوبت تاسیسات رو، با روشن‌کردنِ فن، کم می‌کنین، چون تجهیزاتی که اون استفاده می‌کنه تحت تاثیر بخار آبه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۸اُم هر ماه، انتقال‌دهنده‌ی شیمیایی، جناب دان ولر، می‌ره که از تاسیسات استفاده بکنه. مواد شیمیایی‌ای که اون حمل می‌کنه خیلی فرارن. و در طول حمل‌ونقل باید خیلی احتیاط بشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تو ۶اُم و ۱۶اُم هر ماه، رئیس کل اداره‌ی پلیس، آقای برایان آیرونز، می‌ره به تاسیسات سر بزنه، برای حضور تو جلسه‌ی همیشگی‌ای که توی آزمایشگاه تشکیل می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تو چهارمین جمعه‌ی هر ماه، ویلیام برکین می‌ره سراغ تاسیسات، برای برگزاری یه سمینار آموزشیِ شعبه‌ی شیکاگوی آمبرلا. از اونجایی هم که احتمال حمله به ویلیام برکین زیاده، هر کاری برای محافظتش می‌شه انجام داد رو انجام بدین.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگه لازم بشه، از بقیه‌ی افراد بازدیدکننده، به همراه زمان ورودشون، مطلع می‌شین. این افرادو صحیح‌وسالم به سمت مقصد هدایت کنین. از شما، جز بهترینا، انتظار دیگه‌ای نمی‌ره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "چارلز کلمن",
            paragraphDirection: "right"
          },
          {
            paragraph: "رئیس منشی",
            paragraphDirection: "right"
          },
          {
            paragraph: "مقر آمبرلا",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 17,
        fileImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-diary/sewer-manager-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!sewer-manager-diary",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-diary/location/sewer-manager-diary-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Sewer_manager_diary",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/sewer-manager-diary/map/sewer-manager-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/raccoon-sewers/sewer-b1/upper-walkway",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/sewer-manager-diary",
        title: "Sewer Manager Diary",
        originalContent: [
          {
            paragraph: "June 28th",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's been a while, but I saw Don today and we talked after completing our work. He told me he had been sick in bed until yesterday.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It really doesn't come as much of a surprise given how long he's been working here.",
            paragraphDirection: "left"
          },
          {
            paragraph: "He was sweating like a horse and kept scratching his body while we were talking. I asked if he was hot, but he just looked at me funny.",
            paragraphDirection: "left"
          },
          {
            paragraph: "What's wrong with him anyway?",
            paragraphDirection: "left"
          },
          {
            paragraph: "July 7th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Chief Irons has been visiting the lab quite often lately. I don't know what he's doing over there but he always looks grim.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The expression on his face has been even more unsettling than usual...",
            paragraphDirection: "left"
          },
          {
            paragraph: "My guess is that it's because of Dr. Birkin's impossible requests. The chief has my sympathies though. After all he's done for the town, he doesn't deserve this.",
            paragraphDirection: "left"
          },
          {
            paragraph: "July 21st",
            paragraphDirection: "left"
          },
          {
            paragraph: "I rarely drink because I'm on the graveyard shift, but I don't suppose I have much to complain about it since this is how I make my living.",
            paragraphDirection: "left"
          },
          {
            paragraph: "August 16th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Chief Irons came in late today, looking grimmer than his usual self. I tried to joke with him to cheer him up but he wasn't amused. He pulled his gun and threatened to shoot me! I was able to calm him down, but that guy must have some serious problems. He knows he can't enter the lab without my help and my medal.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This is what it means for the chief \"to serve and protect\"!?",
            paragraphDirection: "left"
          },
          {
            paragraph: "August 21st",
            paragraphDirection: "left"
          },
          {
            paragraph: "William informed me that the police and media have begun their investigation on Umbrella's affairs. He said that the investigation will be citywide and that there is a possibility they'll even search through the sewers. He asked me to suspend all Umbrella sewer facility operations until the investigation has concluded. The sewer will still be used for passage, but he stressed that I have to be extremely cautious and that I'd lose my job if anyone finds out about this operation.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۲۸ ژوئن",
            paragraphDirection: "right"
          },
          {
            paragraph: "مدت زیادی بود که دان رو ندیده بودم، امروز ولی این اتفاق افتاد، و بعد انجام کار، با هم صحبت داشتیم. اون گفت که تا دیروز از مریضی تو رخت خواب بوده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با در نظر گرفتن اینکه چه مدت اینجا کار می‌کرده هم، خیلی نباید تعجب کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اون مثل چی داشت عرق می‌کرد، و به خاروندن خودش، طی صحبت‌مون، ادامه می‌داد. ازش پرسیدم گرمته؟ و اون فقط یه نگاه احمقانه بهم انداخت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گذشته از این حرفا، واقعا چش بود؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "۷ ژوئیه",
            paragraphDirection: "right"
          },
          {
            paragraph: "رئیس آیرونز، اخیرا مرتب به آزمایشگاه سر می‌زنه. نمی‌دونم اونجا چی کار می‌کنه، ولی قیافه‌ش که همه‌ش عبوسه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حالت صورتش هم حتی پریشون‌تر از همیشه بود...",
            paragraphDirection: "right"
          },
          {
            paragraph: "غلط نکنم باید بخاطر درخواست‌های غیر ممکن دکتر برکین باشه. رئیس ولی، همدردی منو داره. بعد اون همه کاری که برای شهر کرد، لیاقتش این نبود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۱ ژوئیه",
            paragraphDirection: "right"
          },
          {
            paragraph: "کم پیش میاد به خوردن مایعات بپردازم، چون توی شیفت قبرستون‌ام، ولی خیلی هم نمیشه شکایتی کرد، چون زندگی‌م از همین راه می‌گذره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۶ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "رئیس آیرونز امروز دیر از راه رسید، اونم عبوس‌تر از همیشه. سعی کردم باهاش شوخی کنم تا انرژی بهش بدم، اما حس‌وحالش تغییری نکرد. اون اسلحه کشید و منو تهدید به شلیک کرد! با اینکه تونستم آرومش کنم، اما مطمئنا باید از مشکلات جدی‌ای رنج ببره. اون متوجه این موضوع هست که بدون من و مدالم، نمی‌تونه وارد آزمایشگاه بشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "معنی رئیسِ «خدمت و محافظت» اینه آخه؟!",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۱ اوت",
            paragraphDirection: "right"
          },
          {
            paragraph: "ویلیام بهم گفت که پلیس و رسانه‌ها، تحقیقات‌شون رو در مورد قضیه‌ی آمبرلا شروع کردن. اون گفت که تحقیقات، تو سطحِ شهر انجام می‌شه و حتی ممکنه کار به فاضلاب هم برسه. اون ازم خواست تا موقعی که تحقیقات به سرانجام می‌رسه، همه‌ی عملیات‌های تاسیسات فاضلاب آمبرلا رو به تعویق بندازم. از فاضلاب همچنان به عنوان گذرگاه استفاده می‌شه، ولی ویلیام تاکید داشت که خیلی احتیاط کنم، اگه کسی هم از این ماجرا بو ببره، شغلم رو از دست می‌دم.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 18,
        fileImageUrl: '/src/lib/assets/images/re2/files/lab-security-manual/lab-security-manual.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!lab-security-manual",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/lab-security-manual/location/lab-security-manual-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Lab_security_manual",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/lab-security-manual/map/lab-security-manual-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b4/sleeping-quarters-a",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/lab-security-manual",
        title: "Lab Security Manual",
        originalContent: [
          {
            paragraph: "Laboratory Security Manual",
            paragraphDirection: "left"
          },
          {
            paragraph: "-Security measures in case of an emergency-",
            paragraphDirection: "left"
          },
          {
            paragraph: "In the instance of an uncontainable biohazardous breakout, all security measures will be directed toward the underground transport facility.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In the instance that any abnormalities are detected among cargo in transit, all materials will automatically be transported from the loading zone to the designated high-speed train. At which point, all materials will be isolated and disposed of immediately.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In the instance of a Class 1 emergency, the entire train will be purged and disposed of without delay.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In the instance that the lab itself becomes contaminated, the northern most route currently used to transport materials to and from the facility will be designated as the emergency escape route. This route will secure passage to the relay point outside the city limits.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Disclosure about any information regarding research conducted here, or the existence of this facility, is strictly prohibited. Since it is top priority to keep all research classified, escape access may be denied under certain extenuating circumstances.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "راهنمای امنیتی آزمایشگاه",
            paragraphDirection: "right"
          },
          {
            paragraph: "- تمهیدات امنیتی، در مواقع اورژانسی -",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورت شیوع یک زیست‌آسیب مهارنشدنی، تمامی تمهیدات امنیتی، به تاسیسات حمل‌ونقل زیرزمینی معطوف می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورت شناسایی ناهنجاری در میان محموله‌ها، تمامی مصالح، از منطقه‌ی بارگیری به قطاری پرسرعت و تخصیص‌یافته انتقال می‌یابند. سپس تمامی آن‌ها، جدا شده و بلافاصله دفع می‌شوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در مواقع اضطراری سطح ۱، تمامی قطار، پاکسازی شده و بدون تاخیر، دفع می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در مواردی که خودِ آزمایشگاه آلوده شود، شمالی‌ترین مسیر که برای انتقال مصالح به آن، از طرف تاسیسات است، به عنوان مسیر خروج اضطراری تعیین می‌گردد. این مسیر، گذرگاه منتهی به نقطه‌ی ارتباطی را، خارج از محدوده‌ی شهر، ایمن می‌سازد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "افشاسازی هرگونه اطلاعات، درباره‌ی تحقیقات انجام‌شده و وجود این تاسیسات، اکیدا ممنوع است. اگرچه که سری‌سازیِ تمامی این تحقیقات، اولین اولویت ماست، دسترسی برای فرار ممکن است تحت شرایط موجه خاصی رد شود.",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 19,
        fileImageUrl: '/src/lib/assets/images/re2/files/p-epsilon-gas-report/p-epsilon-gas-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!p-epsilon-report",
        location: [
          {
            text: "Location (Leon B, Claire B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/p-epsilon-gas-report/location/p-epsilon-gas-report-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/P-Epsilon_Gas_Report",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/p-epsilon-gas-report/map/p-epsilon-gas-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b2/steam-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/p-epsilon-gas-report",
        title: "P-Epsilon Gas Report",
        originalContent: [
          {
            paragraph: "-This report demands immediate attention-",
            paragraphDirection: "left"
          },
          {
            paragraph: "The P-epsilon gas has been proven capable of incapacitating all know B.O.W.s (Bio Organic Weapon). As such, it has been designated for emergency usage in the event of a B.O.W. escape. Reports based on data collected during prior incidents indicate the potential for negative side effects.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The P-eplison gas has proven to weaken the B.O.W.s' cellular functions. However, prolonged or repeated exposures will result in the creation of adaptive antibodies to the agent.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Furthermore, some species have been observed to absorb the P-eplison gas as a source of nutrition and use the toxins extracted against anything perceived as a threat.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Use of P-eplison gas should be severely limited to extreme cases only.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We strongly request the authority to re-evaluate the P-eplison gas deployment system. We would like this re-evaluation to take place immediately.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2nd R&D Room/Security Team",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "- این گزارش نیازمند توجه فوریه -",
            paragraphDirection: "right"
          },
          {
            paragraph: "ثابت شده که گاز پی-اپسیلون قادر به از کار انداختنِ تمام بی.او.دابلیوهای (سلاح‌های بیو ارگانیکِ) شناخته‌شده‌ست. بر این اساس، این گاز اختصاصا برای کاربرد اورژانسی، اونم موقع خروج یه بی.او.دابلیو‌هه. گزارشای مبنی بر داده‌های جمع‌آوری‌شده، طی حوادث قبلی، پتانسیلِ تاثیرات جانبی منفی رو مشخص می‌کنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ثابت شده که این گاز، عملکرد سلولیِ بی.او.دابلیوها رو ضعیف می‌کنه. با این وجود، در معرض خطر قرار گرفتن طولانی یا مکرر، به تولید آنتی‌بادی‌های سازگار با عامل ختم می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گذشته از اینا، یه سری از گونه‌ها هستن که گاز پی-اپسیلون رو به عنوان منبع تغذیه جذب می‌کنن، و از سموم استخراج‌شده بر علیه هر چیزی که حس کنن تهدیده استفاده می‌کنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "استفاده از گاز پی-اپسیلون فقط باید به موارد استثنایی محدود شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما قویا از مسئولا می‌خوایم که سیستم استقرارِ گاز پی-اپسیلون رو مجدد، ارزیابی کنن. تمایل داریم که این قضیه هر چه زودتر اتفاق بیفته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اتاق دوم تحقیق‌وتوسعه، تیم امنیتی",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 20,
        fileImageUrl: '/src/lib/assets/images/re2/files/user-registration/user-registration.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!user-registration",
        location: [
          {
            text: "Location (Leon A+B, Claire A+B)",
            locationImageUrl: '/src/lib/assets/images/re2/files/user-registration/location/user-registration-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/User_registration",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/user-registration/map/user-registration-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b4/sleeping-quarters-a",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/user-registration",
        title: "User Registration",
        originalContent: [
          {
            paragraph: "Temporary User Registration for the Culture Experiment Room.",
            paragraphDirection: "left"
          },
          {
            paragraph: "User Name: \"GUEST\"",
            paragraphDirection: "left"
          },
          {
            paragraph: "Password: None",
            paragraphDirection: "left"
          },
          {
            paragraph: "Valid for 24 hours.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "ثبت موقت کاربر برای اتاق آزمایشگاهی فرهنگی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "نام کاربری: «مهمان»",
            paragraphDirection: "right"
          },
          {
            paragraph: "رمز عبور: خالی",
            paragraphDirection: "right"
          },
          {
            paragraph: "معتبر برای ۲۴ ساعت.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 21,
        fileImageUrl: '/src/lib/assets/images/re2/files/vaccine-synthesis/vaccine-synthesis.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-2/files#!vaccine-synthesis",
        location: [
          {
            text: "Location (Claire A)",
            locationImageUrl: '/src/lib/assets/images/re2/files/vaccine-synthesis/location/vaccine-synthesis-location.webp',
            locationImageSourceUrl: "https://residentevil.fandom.com/wiki/Vaccine_synthesis",
            locationImageSource: 'Resident Evil Wiki',
            mapImageUrl: '/src/lib/assets/images/re2/files/vaccine-synthesis/map/vaccine-synthesis-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-2/maps/underground-laboratory/laboratory-b5/lab-entry-corridor",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/vaccine-synthesis",
        title: "Vaccine Synthesis",
        originalContent: [
          {
            paragraph: "Any beings infected by the G-virus will reproduce through the impregnation of an embryo within another living being.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Unless rejected by the host, the embryo will undertake a process of gradual cellular invasion, infecting the host's cells on a molecular level as it rewrites their DNA.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once the metamorphosis is complete, the host will be capable of continuing this cycle of self-replication. The duration of time for the process to run its course will vary from subject to subject. In the early stages of cellular invasion, it is possible to halt progression of the metamorphosis through the administration of the G-vaccine antigen.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The following procedure details its synthesis.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The vaccine creation requires the base vaccine. This can be arranged by the activator VAM. First set the empty cartridge to the VAM and activate it. After several moments the process will be complete and the white-colored base vaccine will be set in the cartridge automatically. Then confirm the green light is on, remove the cartridge and proceed to the next step.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once the base vaccine has been prepared, set it in the vaccine synthesis machine located in the P-4 level experiment room. The machine is fully automated and only requires the user to push the sequence start switch. At this point, the program will run automatically and synthesis will be complete within approximately 10 seconds.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As the synthesis of DEVIL is an extremely delicate process, the quality will vary with slight shocks or changes in temperature. Careful handling is required for the proper results.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "هر موجودی که به ویروس جی آلوده بشه، داخل یه موجود زنده‌ی دیگه، از طریقِ لقاح یک جنین، تکثیر می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "جنین در صورتی که توسط میزبان ندید گرفته بشه، فرآیند تدریجی تهاجم سلولی رو طی می‌کنه، و به آلوده‌کردن سلول‌های میزبان تو سطح مولکولی می‌پردازه و دی‌ان‌اِی‌شون رو بازنویسی می‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "وقتی دگردیسی تموم بشه، میزبان می‌تونه به چرخه‌ی خودتکثیری‌ش ادامه بده. مدت‌زمانِ اجرای فرآیند هم، برای طی‌کردنِ دوره، بسته به سوژه متفاوته. تو مراحل اولیه‌ی تهاجم سلولی، می‌شه توی پیشرفت دگردیسی، طی تجویز آنتی‌ژن واکسن جی، فاصله انداخت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "روش پیش رو، به جزئیات سنتزش می‌پردازه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ساخت واکسن، نیازمند واکسن پایه‌ست. این رو می‌شه به واسطه‌ی فعال‌کننده‌ی وی‌اِی‌ام ترتیب داد. اول از همه، کارتریج رو داخل وی‌اِی‌ام بذارین و اونو فعال کنین. بعدِ چند لحظه، فرآیند تکمیل می‌شه و واکسن پایه‌ی سفیدرنگ، به طور خودکار، تو کارتریج قرار می‌گیره. بعدش روشن‌بودنِ چراغ سبزو تایید کنین، کارتریج رو بردارین، و برین قدم بعدی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به محض اینکه واکسنِ پایه آماده شد، اونو تو دستگاه سنتزِ واسکن، واقع تو سطح ۴ اتاق آزمایش، قرار بدین. دستگاه، تمام‌اتوماته، و فقط نیازمند فشار کلید فعال‌سازی از طرف کاربره. اینجاست که برنامه به طورر اتوماتیک اجرا می‌شه و عملیات سنتز، طی حدودا ۱۰ ثانیه، به اتمام می‌رسه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "از اونجایی هم که سنتز شیطان، پروسه‌ی خیلی حساسیه، بسته به تغییرات دما و تکون‌های کوچیک، کیفیت کار تغییر می‌کنه. دستیابی به نتایج مناسب، نیازمند بررسی دقیقه.",
            paragraphDirection: "right"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    gameImageUrl: '/src/lib/assets/images/re3n/re3n.png',
    shortTitle: 'RE3N',
    title: 'Resident Evil 3 Nemesis',
    releaseDate: '1999',
    url: '/games/re3n/files',
    files:
    [
      {
        id: 1,
        fileImageUrl: '/src/lib/assets/images/re3n/files/clock-tower-postcard/clock-tower-postcard.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!clock-tower-postcard",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/clock-tower-postcard/map/clock-tower-postcard-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/black-jacks-bar",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/clock-tower-postcard",
        title: "Clock Tower Postcard",
        originalContent: [
          {
            paragraph: "A picture postcard of a clock tower.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The following explanation is printed on the backside:",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"A landmark spot:",
            paragraphDirection: "left"
          },
          {
            paragraph: "Saint Michael Clock Tower.\"",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "این یه کارت‌پستال از برج ساعته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پشتش هم یه چنین چیزی پرینت شده:",
            paragraphDirection: "right"
          },
          {
            paragraph: "«موقعیت مکانی:",
            paragraphDirection: "right"
          },
          {
            paragraph: "برج ساعت سنت میکائیل.»",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 2,
        fileImageUrl: '/src/lib/assets/images/re3n/files/photo-a/photo-a.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-a",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/photo-a/map/photo-a-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/barricaded-back-passage",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/photo-a",
        title: "Photo A",
        originalContent: [
          {
            paragraph: "The policemen are pressing forward.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's dated \"September 27\"",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "مامورای پلیس، پیش می‌تازن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تاریخ: «۲۷ سپتامبر»",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 3,
        fileImageUrl: '/src/lib/assets/images/re3n/files/marvin-s-report/marvin-s-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!marvins-report",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/marvin-s-report/map/marvin-s-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-1f/information-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/marvin-s-report",
        title: "Marvin's Report",
        originalContent: [
          {
            paragraph: "\"Report\"",
            paragraphDirection: "center"
          },
          {
            paragraph: "September 24th",
            paragraphDirection: "left"
          },
          {
            paragraph: "There are reports of a theft in the municipal building before dawn. A jewel decorated clock at the main gate was damaged. Two of twelve gems that are installed on the face of the clock are missing.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Due to lack of available officers at this time, I have no choice but to suspend the research of this case.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Signed,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Marvin Branagh",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"Report\"",
            paragraphDirection: "center"
          },
          {
            paragraph: "September 26th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Based upon an autopsy report of a 42 year old restaurant owner, I have discovered that he has one of the missing gems. He apparently took shelter in the police department at about 10 am, where he was shot to death within 10 minutes of having developed the symptoms.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Since the city is currently under martial law, we are forced to suspend this case. At this time, we'll keep the gem as evidence.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Signed,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Marvin Branagh",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "«گزارش»",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۴ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "گزارش‌هایی مبنی بر سرقت، توی ساختمون شهرداری، اونم قبل سحر، به گوش می‌رسه. جواهری هم که ساعت رو، کنار درِ ورودی، مزین کرده بود، نابود می‌شه می‌ره. دوتا از این جواهر که روی این ساعت نصب می‌شدن الآن گم‌ان.",
            paragraphDirection: "right"
          },
          {
            paragraph: "عدم حضور هیچ افسری هم، انتخابی جز بیخیال‌شدنِ این پرونده برام نذاشته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "امضاء",
            paragraphDirection: "right"
          },
          {
            paragraph: "ماروین برانا",
            paragraphDirection: "right"
          },
          {
            paragraph: "«گزارش»",
            paragraphDirection: "center"
          },
          {
            paragraph: "۲۶ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "طی گزارشِ کالبدشکافیِ یه رستوران‌دارِ ۴۲ساله، متوجه شدم که یکی از جواهرای گم‌شده دست اونه؛ از قرار معلوم هم، ساعتای ۱۰ به اداره‌ی پلیس پناه می‌بره، جایی که ظرف ۱۰ دقیقه، ایجادِ علائم می‌کنه و طی اصابت گلوله، کشته می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "از اونجایی هم که تو شهر، حکومت‌نظامی برقراره، مجبور شدیم بیخیال پرونده بشیم. و در حال حاضر، جواهر رو به عنوان مدرک در نظر می‌گیریم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "امضاء",
            paragraphDirection: "right"
          },
          {
            paragraph: "ماروین برانا",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 4,
        fileImageUrl: '/src/lib/assets/images/re3n/files/david-s-memo/david-s-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!davids-memo",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/david-s-memo/map/david-s-memo-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-1f/dark-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/david-s-memo",
        title: "David's Memo",
        originalContent: [
          {
            paragraph: "My sanity is at its end... I still can't believe this is happening. We lost another man yesterday. Meyer; one of our better marksmen. He saw me panic once we were overrun by the zombies, but he came back to save me.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But when the time came to return the debt, I ran.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I can still hear him calling out my name. I can still hear the screams coming from behind. The sound of his flesh being stripped from its bones. I was afraid... terrified...",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's the 27th. The fight to stay alive continues. I took out several zombies who managed to break through the barricades. Now I'm cutting through the chill with whisky, unloading my Mossberg on anything undead. That shotgun's become a close friend of mine. I've blasted many a zombie into fertilizer with it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We've lost 13 men as of yesterday. In 3 hours, we'll bicker over trivial things in the meeting room. It's a total waste of time. When I finish this bottle, my old friend Mossberg will be turning one last body into fertilizer.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Peace at last.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I can hardly wait...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "دیگه سلامت روانی برام نمونده... هنوزم نمی‌تونم باورش کنم. دیروز یه نفر دیگه رو از دست دادیم؛ مِیِر، از بهترین تیراندازامون رو. موقعِ تاخت‌وتاز زامبی‌ها، اون منو تو وحشت دید و اومد تا نجاتم بده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اما زمان جبرانش که رسید، جا زدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هنوزم می‌تونم صداشو بشنوم که اسمم رو داره فریاد می‌زنه. هنوزم می‌تونم صدای جیغ‌های پشت سرم رو بشنوم. صدای کنده‌شدن پوستش از استخونش رو... ترسیده بودم... وحشت ورم داشته بود...",
            paragraphDirection: "right"
          },
          {
            paragraph: "امروز ۲۷اُمه و مبارزه برای زنده‌بودن ادامه داره. یه مشت زامبی که موفق به رخنه‌ی به منطقه شده بودن رو هم پُکوندم. الآن ولی این ویسکیه که حالمو بهتر می‌کنه، و باعث می‌شه روی هر مرده‌ی متحرکی تفنگ موسبرگ‌ام رو، رو نکنم. اون شات‌گانه ولی، شده رفیق صمیمی‌م. باهاش هر زامبی‌ای رو به کود تبدیل کردم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "از دیروز، ۱۳ نفرو از دست دادیم. ۳ ساعت بعد هم قراره تو اتاق ملاقات، سر مسائل بی‌اهمیت، جروبحث کنیم. این یه اتلافِ وقتِ تمام‌عیاره. وقتی این قوطی رو تموم کردم، رفیق قدیمی‌م، تفنگ موسبرگ، می‌ره که آخرین نفر رو به کود تبدیل کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "صلح در پایان...",
            paragraphDirection: "right"
          },
          {
            paragraph: "سخت می‌شه منتظر موند...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 5,
        fileImageUrl: '/src/lib/assets/images/re3n/files/fax-from-kendo-gun-shop/fax-from-kendo-gun-shop.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!fax-from-kendo-gun-shop",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/fax-from-kendo-gun-shop/map/fax-from-kendo-gun-shop-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/police-station/police-station-2f/stars-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/fax-from-kendo-gun-shop",
        title: "Fax From Kendo Gun Shop",
        originalContent: [
          {
            paragraph: "To the boys of S.T.A.R.S.,",
            paragraphDirection: "left"
          },
          {
            paragraph: "I have some good news for you from my brother Joe. He has finalized the new hand-gun for official use. It's the M92F S.T.A.R.S. Special, but he calls it the \"Samurai Edge.\" It's the most balanced of the Kendo custom guns. Joe said if you miss the targets with this, you should carry a teething ring instead of a gun in your holster.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The goods will be delivered along with their proper documentation. I'm sure you'll be surprised when you see what kind of excellent parts are used for the M92F. I know that you'll want to thank the good people who developed it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Sincerely,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Robert Kendo",
            paragraphDirection: "left"
          },
          {
            paragraph: "Kendo Gun Shop",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "به بر و بچ استارز",
            paragraphDirection: "right"
          },
          {
            paragraph: "خبرای خوبی از داداشم، جو، براتون دارم. اون سلاحِ دستی جدیدی رو برای استفاده‌ی رسمی نهایی‌سازی کرده؛ اِم۹۲اِف استارز، که بهش می‌گه «تیغه‌ی سامورایی». بین سلاح‌های شخصی‌سازی‌شده‌ی کِندو هم، بالانس‌ترینه. جو می‌گه اگه هدف رو با این سلاح گم کردین، بهتره به جای تفنگ تو غلاف‌تون، دندون‌گیرِ نوزاد همراه داشته باشین.",
            paragraphDirection: "right"
          },
          {
            paragraph: "کالاها، به همراه مستنداتِ مخصوص‌شون، از راه می‌رسن. و من مطمئنم وقتی ببینین از چه قطعات خفنی توی اِم۹۲اِف استفاده شده، شگفت‌زده می‌شین. می‌دونم که می‌خواین از آدمای کاربلدی که ساختنش، تشکر کنین.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با احترام،",
            paragraphDirection: "right"
          },
          {
            paragraph: "رابرت کِندو",
            paragraphDirection: "right"
          },
          {
            paragraph: "اسلحه‌فروشی کِندو",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 6,
        fileImageUrl: '/src/lib/assets/images/re3n/files/mercenary-s-diary/mercenary-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!mercenarys-diary",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/mercenary-s-diary/map/mercenary-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/zigzag-alley",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/mercenary-s-diary",
        title: "Mercenary's Diary",
        originalContent: [
          {
            paragraph: "September 1st",
            paragraphDirection: "left"
          },
          {
            paragraph: "Following six months of intensive training, my body's edge had returned.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I was a good soldier, but they ordered my execution with no reason given. I was tortured and forced to give a false confession.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But on the morning of my execution, a miracle happened. The company had helped me out, giving me a second lease on life.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 15th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I ended my vacation short and returned to the HQ office. It looks like my UBCS unit's been called into action.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Umbrella maintains its own paramilitary unit to counter corporate terrorism and V.I.P. abduction. In addition, they have nightmen who specialize in handling problems cause by illegal products.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I'm currently a member of the latter.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 28th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Dawn's here, but we're still slogging through this nightmare. There are no provisions of any kind here. The undead walk the streets feeding upon the flesh of the living.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Given the choice again, I would rather have been executed. Death row was a heavenly asylum compared to this place.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I've chosen to pull the trigger myself, in the hope that my dead body won't come back to life.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۱ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "بعدِ شیش ماه تمرین فشرده، همون گولاخ سابق شدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با اینکه سرباز خوبی بودم، ولی حکم اعدامم رو بدون هیچ دلیلی صادر کردن. من مورد شکنجه قرار گرفتم و به اعتراف اجباری مجبور شدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ولی درست صبحِ روز اعدام بود که یه معجزه اتفاق افتاد؛ کمپانی بهم دستی رسوند و شانس زندگی بهم داد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۵ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "به سرعت به تعطیلاتم پایان دادم و برگشتم سمت دفترِ مقر. گویا که نیروهای یوبی‌سی‌اِس رو اعزام کردن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آمبرلا واحد شبه‌نظامی‌شو برای مقابله با ربودن افراد به شدت مهم و تروریسمِ سازمانی نگه داشته. به علاوه اینکه کلی آدمِ شب‌کار تو مشتشه که تو مدیریت مشکلات ناشی از محصولات غیر قانونی تخصص دارن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و من در حال حاضر عضو این آخری‌ام.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۸ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "سپیده دمه و هنوزم داریم با این کابوس، دست‌وپنجه نرم می‌کنیم. هیچ مدل تمهیداتی هم به چشم نمی‌خوره. مرده‌های متحرک ولی، تو خیابون پرسه می‌زنن و از گوشتِ زنده‌ها تغذیه می‌کنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگه می‌شد که حق انتخاب مجددی داشته باشم، ترجیح می‌دادم تا اعدام بشم. بندِ محکومای به مرگ، در مقایسه با اینجا، یه آسایشگاه بهشتی بود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "انتخاب کردم که خودم ماشه رو بکشم، به این امید که جسدم قرار نیست به زندگی برگرده.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 7,
        fileImageUrl: '/src/lib/assets/images/re3n/files/city-guide/city-guide.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!city-guide",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/city-guide/map/city-guide-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/restaurant",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/city-guide",
        title: "City Guide",
        originalContent: [
          {
            paragraph: "City Guide",
            paragraphDirection: "left"
          },
          {
            paragraph: "The Tracks of Our City",
            paragraphDirection: "left"
          },
          {
            paragraph: "Dear citizens,",
            paragraphDirection: "left"
          },
          {
            paragraph: "Thanks to kind and generous people of Umbrella Inc., this is a peaceful and friendly city. The vast donations from Umbrella Inc., have been used for welfare work, the construction of public utilities, and to help maintain public peace.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In 1992, it was my fifth year as mayor of our beautiful city. It was then that through many donations and hard work our city was able to rebuild the municipal building, create a state of the art hospital.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In honor of these fine accomplishments, I was awarded with a grand statue that same year. The statue rests in the municipal building.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I came to this city as an engineer more than 35 years ago. I made contributions to the electric systems, and to the installation of the cable car. I pledge to follow the tradition of this fine city and will devote my life to its prosperity.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The mayor of the city",
            paragraphDirection: "left"
          },
          {
            paragraph: "Michael Warren",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "راهنمای شهر",
            paragraphDirection: "right"
          },
          {
            paragraph: "مسیرای شهرمون",
            paragraphDirection: "right"
          },
          {
            paragraph: "شهروندای گرامی،",
            paragraphDirection: "right"
          },
          {
            paragraph: "به لطف آدمای سخاوت‌مند و مهربونِ آمبرلا، اینجا دیگه یه شهر بدون تنش و دوستانه‌ست. تسهیلات رفاهی، ساخت‌وسازِ شرکت‌های خدمات عمومی، و کمک تو حفظ امنیت عمومی، به واسطه‌ی حمایت‌های مالیِ گسترده از طرف آمبرلا رقم خورده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۹۹۲، پنجمین سالی به شمار می‌رفت که شهردار این شهر زیبا بودم. همون موقع هم بود که طی کلی حمایت مالی و تلاش و پشتکار، شهرمون تونست ساختمون شهرداری رو بازسازی کنه، و یه بیمارستان تمام‌امکانات ایجاد کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به افتخارِ این دستاوردای قابل توجه، ازم با یه مجسمه‌ی بزرگ، توی همون سال، تقدیر شد. و مجسمه هم، داخل همون ساختمون شهرداری می‌مونه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بیشتر از ۳۵ سال پیش بود که به عنوان یه مهندس، پا به این شهر گذاشتم. و چه توی سیستم‌های الکترونیکی، و چه توی نصب کابل‌های ماشین هم، مشارکت داشتم. و اینکه عهد بستم تا به سنت‌های این شهر زیبا پایبند بمونم و زندگی‌م رو وقفِ رونق‌اش کنم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شهردارِ اینجا",
            paragraphDirection: "right"
          },
          {
            paragraph: "مایکل وارن",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 8,
        fileImageUrl: '/src/lib/assets/images/re3n/files/photo-b/photo-b.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-b",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/photo-b/map/photo-b-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office-lobby",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/photo-b",
        title: "Photo B",
        originalContent: [
          {
            paragraph: "A close-up shot of a zombie.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It says, \"SCOOP!\" on the backside.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "نمای نزدیک از یه زامبی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پشتش نوشته «خبر دسته اول!».",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 9,
        fileImageUrl: '/src/lib/assets/images/re3n/files/photo-c/photo-c.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-c",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/photo-c/map/photo-c-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/photo-c",
        title: "Photo C",
        originalContent: [
          {
            paragraph: "The police have been destroyed.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "نیروهای پلیس به فنا رفتن.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 10,
        fileImageUrl: '/src/lib/assets/images/re3n/files/reporter-s-memo/reporter-s-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!reporters-memo",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/reporter-s-memo/map/reporter-s-memo-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/press-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/reporter-s-memo",
        title: "Reporter's Memo",
        originalContent: [
          {
            paragraph: "At last I have found the evidence I need to prove that the \"cannibal disease\" is indeed happening in this city.",
            paragraphDirection: "left"
          },
          {
            paragraph: "One man actually ate people to death. He was like a savage animal tearing away a new flesh. It was completely disgusting. I have heard rumors that many people are also suffering from this disease now. However, the causes of the disease is not yet known. Is this another mystery of the present disease? I will have to check on it...",
            paragraphDirection: "left"
          },
          {
            paragraph: "They have placed Raccoon City under martial law because of the cannibal disease. I have lost contact with the media outside of the city, but I won't give up. As a journalist, I won't keep my eyes shut and walk away. I have a duty to the people and my profession. I don't think the disease has spread nationwide yet. I believe that this city holds the key to its creation and cure. In fact, I'm sure of it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The military has setup blockades around the city to keep people from escaping and spreading the disease. Most of the citizens have either died or have come in contact with the disease. I know that it is the right decision to quarantine the city, but I can't help but pity myself. If I am infected or eaten, it doesn't matter. My fate is already sealed. All I have left is my journalism. I won't give up until I solve the mystery of this deadly disease. I have just discovered that the disease is not spread through the air, but by some other means.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "هر چی نباشه شواهدی که نیاز داشتم، دستم رسیده و این نشون می‌ده که «بیماریِ آدم‌خواری» راستی‌راستی تو شهر در جریانه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حتی یکی‌شون طرفو تا سر حد مرگ می‌خوره. عین یه حیوون درنده که سر از یه بدن جدید درمیاره. همه چیش هم چندش‌آور بود. طبق شایعاتی که به گوشمم خورده، این روزا آدمای زیادی از این بیماری رنج می‌برن. هرچند، علت این بیماری هنوز ناشناخته‌ست. آیا معمای دیگه‌ای در رابطه با این بیماری وجود داره؟ من یکی که باید بزنم تو کارش...",
            paragraphDirection: "right"
          },
          {
            paragraph: "اونا بخاطر بیماری آدم‌خواری، توی راکون، حکومت نظامی راه می‌ندازن. و منم ارتباطم رو با رسانه‌های خارج از شهر از دست می‌دم، اما ول‌کُن‌اش نمی‌شم. به عنوان یه رزونامه‌نگار قرار نیست چشام رو، رو به همه چی ببندم و بیخیالِ قضیه بشم. چه برای حرفه‌م، و چه برای آدما، این وظیفه روی دوش منه. اما فکر نمی‌کنم که تا به الآن، این بیماری تو کل کشور شیوع پیدا کرده باشه. و مطمئنم که تیکه‌های گم‌شده‌ی این پازل، که شامل ریشه و درمان بیماریه، تو دل همین شهره. در واقع که به این قضیه حتم دارم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ارتش کل شهرو بسته، تا جلوی مردم رو از فرار و شیوع این بیماری بگیره. عمده‌ی شهروندا هم یا جون‌شون رو از دست دادن یا در معرض این بیماری قرار گرفتن. می‌دونم که قرنطینه‌کردن این شهر، تصمیم درستیه، اما برای خودم کاری جز ابراز تاسف نمی‌تونم انجام بدم. اینکه آلوده بشم یا بخورنم، مهم نیست. آینده‌ی من مشخصه. تمام چیزی هم که برام مونده، روزنامه‌نگاریه. تا وقتی هم که معمای این بیماریِ کشنده رو حل نکنم، دست نمی‌کشم. تازگی ولی به این پی بردم که این بیماری از طریق هوا قابل انتقال نیست، چرا که روش دیگه‌ای رو در پیش می‌گیره.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 11,
        fileImageUrl: '/src/lib/assets/images/re3n/files/mechanic-s-memo/mechanic-s-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!mechanics-memo",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/mechanic-s-memo/map/mechanic-s-memo-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/downtown/cable-car-rear-carriage",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/mechanic-s-memo",
        title: "Mechanic's Memo",
        originalContent: [
          {
            paragraph: "I know that you're intimidated by your new job Kevin, so let me tell you how to make sure that you and your trains get along just fine. You see, these carriages were made in 1968, and then imported from Europe. Sometimes they get rickety, but they still work because they are simple, stubborn, and strong. We can always depend on them. If they have a bad day and are malfunctioning, you'll need to take a good look at their circuits for any trouble. Once you discover what's wrong, you'll be able to fix it easily.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I'm sure that you'll be able to avoid those nasty little malfunctions if you check the parts every day. These old trains will surely have problem if you don't remember to check them out. Just remember that if you need to replace anything, you have to choose a suitable part. When I say suitable, I mean that even if you can't find another original part, you'd better find something that works good enough. Even with regard to oil, you must always prepare good quality oil for these trains.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Never forget Kevin that a man may betray others, but a machine won't.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "متوجه‌ام که شغل جدیدت دستپاچه‌ت کرده کِوین، پس بذار بهت توضیح بدم که چطور می‌تونی از هماهنگیِ میون خودت و قطارایی که داری اطمینان حاصل کنی. می‌دونی که این کوپه‌ها ۱۹۶۸ ساخته می‌شن، و بعدش از اروپا واردشون می‌کنن. شاید زوارشون در بره ها، اما کارکردشون سر جاشه؛ چون که اونا ساده، سرسخت، و مستحکم‌ان. و ما همیشه می‌تونیم به اونا اطمینان کنیم. اگه هم روز بدشون از راه رسید و نقص فنی پیدا کردن، نیازه که به مدارهاشون یه نگاه دقیق بندازی و دنبال مشکل بگردی. و به محض اینکه فهمیدی چشه، می‌تونی به سادگی درستش کنی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حتم دارم اگه هر روز به این قطعات سر بزنی، می‌تونی از نقصای فنی کوچیک و اذیت‌کننده‌شون جلوگیری کنی. ولی کافیه یادت بره همین قطارای قدیمی رو بررسی کنی، تا مشکلات‌شون شروع بشه. فقط یادت باشه که اگه نیاز به جایگزینیِ چیزی داشتی، باید از قطعه‌ی مناسبش استفاده کنی. منظورمم از کلمه‌ی مناسب اینه که اگه نتونستی قطعه‌ی اصلی رو پیدا کنی، بهتره چیزی رو گیر بیاری که قد کافی درست کار کنه. در رابطه با سوخت هم، همیشه باید سوخت باکیفیتی رو برای این قطارا تهیه کنی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ‌وقت هم فراموش نکن کِوین، که آدم ممکنه خائن از آب در بیاد، ولی ماشین اینطور نیست.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 12,
        fileImageUrl: '/src/lib/assets/images/re3n/files/manager-s-report/manager-s-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!managers-report",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/manager-s-report/map/manager-s-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/sales-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/manager-s-report",
        title: "Manager's Report",
        originalContent: [
          {
            paragraph: "Before you begin your new position, please allow me to give you some advice. Some of the medicines in the storage room are unstable and their quality will deteriorate under changing temperatures or humidity. Therefore, you must remember to keep the temperature the same in the storage room at all times. You should personally check it everyday. Although the computer checks it around the clock, a machine is not perfect. Try and remember that a machine is no more than a tool to be used by people.",
            paragraphDirection: "left"
          },
          {
            paragraph: "You must check all personnel coming and going to the storage room. Many dangerous drugs are stored there, if any of them are missing you have a serious problem on your hands. The door to the storage room is always locked, but when you let personnel into it, you will need to have them hand in their documents. And above all else, remember that if you find anything suspicious, contact your boss immediately.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If you forget the password to lock the door, try and remember that it is a word that everyone is familiar with. Don't forget that once a new product is shipped, the password will be updated again. You can always enter the password from the terminal of the PC for administration.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "قبل اینکه به سِمت جدیدت رو بیاری، لطفا اجازه بده تا راهنمایی‌ت کنم. یه سری از داروهای تو انبار، پایداری‌ای تو کارشون نیست و کیفیت‌شون، تحت تاثیر تغییر دما یا رطوبت، رو به وخامته. برای همینم ثابت‌نگه‌داشتنِ همیشگی دمای انبار رو نباید فراموش کنی. و لازمه که هر روز بهش سر بزنی. اگرچه که همیشه‌ی خدا کامپیوتر رصدش می‌کنه، ولی یه دستگاه همیشه بی‌نقص نیست. یادت باشه که ماشین، چیزی جز ابزارِ مورد استفاده‌ی مردم به حساب نمیاد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "لازمه همه‌ی کارمندایی که به انبار وارد می‌شن یا ازش خروج می‌کنن رو مورد بررسی قرار بدی. از اونجایی هم که داروهای خطرناک زیادی اینجا نگه‌داری می‌شه، گم‌شدنِ هر کدوم‌شون می‌تونه برات دردسرآفرین باشه. درِ منتهی به انبار ولی همیشه قفله، مگه اینکه بذاری کارمندا بیان تو، تا نیاز به تحویل مدارک‌شون داشته باشی. و از همه مهم‌تر، اگه چیز مشکوکی به چشِت خورد، فورا با مافوقِت تماس بگیر.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر رمز عبور رو قفل‌کردنِ در رو فراموش کردی، یادت باشه که این همون کلمه‌ایه که هر کسی باهاش آشنایی داره. از یاد هم نبر که وقتی یه محصول می‌ره پِی ارسال، این وسط رمز عبور مجددا به‌روز می‌شه. برای سازماندهی هم، از طریق ترمینالِ کامپیوتر می‌تونی رمز عبور رو وارد کنی.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 13,
        fileImageUrl: '/src/lib/assets/images/re3n/files/business-fax/business-fax.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!business-fax",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/business-fax/map/business-fax-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/sales-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/business-fax",
        title: "Business Fax",
        originalContent: [
          {
            paragraph: "\"Order Sheet\"",
            paragraphDirection: "center"
          },
          {
            paragraph: "The liquid medicine named VT-J98 is suitable to cultivate the NE-T type virus. Therefore, we will need to order additional quantities of it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "U.E. Sixth Laboratory",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "«فُرم سفارش»",
            paragraphDirection: "center"
          },
          {
            paragraph: "این مایع دارویی، تحت نامِ وی‌تی-جِی۹۸، برای پرورش ویروس اِن‌ای-تی مناسب است. و به تبع نیز نیاز است تا مقدار بیشتری از آن را سفارش دهیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آزمایشگاه ششمِ یو.ای",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 14,
        fileImageUrl: '/src/lib/assets/images/re3n/files/dario-s-memo/dario-s-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!darios-memo",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/dario-s-memo/map/dario-s-memo-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/uptown-and-downtown/uptown/warehouse",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/dario-s-memo",
        title: "Dario's Memo",
        originalContent: [
          {
            paragraph: "I can't help but wonder if anyone will read these words, but writing them will help me maintain my sanity if nothing else.",
            paragraphDirection: "left"
          },
          {
            paragraph: "After I've become a meal for those undead monsters, will the G.I.s responsible for sealing off the town laugh upon discovering my corpse? So is this how it's supposed to end? I don't want to die. I'm just not ready...",
            paragraphDirection: "left"
          },
          {
            paragraph: "My wife, daughter, mother... My entire family has been killed. But none of that matters anymore. Right now, my life is the only important thing. That's all that matters.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I never would have pictured my end to be like this. I had so much left to do. Rather than becoming a salesman, I should have tried my hand at being a novelist. It's what I've always wanted, but my mother would only tell me you have a long way to go.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Why did I ever listen to her?",
            paragraphDirection: "left"
          },
          {
            paragraph: "But this looks like the end for the great Dario Rosso, novelist extraordinaire.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Cut down before his prime...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "بعید می‌دونم کسی این نوشته رو بخونه، اما حداقل با نوشتن‌اش، از حفظِ سلامتِ روانم گره باز می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "وقتی به خوراک اون هیولاهای نامیرا تبدیل شم، آیا جی.آی.های مسئول ممنوع‌الورودکردن شهر، سر جسدم قهقهه می‌زنن؟ قراره همین‌جوری تموم شه؟ من که نمی‌خوام بمیرم. اصلا آماده‌ش هم نیستم...",
            paragraphDirection: "right"
          },
          {
            paragraph: "زنم، دخترم، مادرم... تموم خانواده‌م به قتل رسیدن. ولی دیگه هیچ‌کدوم‌شون اهمیتی ندارن. در حال حاضر، این زندگیِ منه که این وسط مهمه. این تنها چیزیه که اهمیت داره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ‌وقت متصور نمی‌شدم چنین عاقبتی نصیبم شه. کلی هم کار برای انجام دارم. به جای تبدیل‌شدن به یه فروشنده، باید می‌زدم تو کار رُمان‌نویسی. این چیزی بود که همیشه می‌خواستم، ولی مادرم همیشه می‌گفت که تو راه درازی در پیش داری.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اصلا چرا بهش گوش می‌دادم؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "ولی گویا اینجا برای داریو روسوی بزرگ، رمان‌نویسِ خفن، آخر خطه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پرنده‌ای که قبلِ پَرکشیدن، خداحافظی می‌کنه...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 15,
        fileImageUrl: '/src/lib/assets/images/re3n/files/operation-instruction/operation-instruction.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!operation-instruction",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/operation-instruction/map/operation-instruction-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/main-hall",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/operation-instruction",
        title: "Operation Instruction",
        originalContent: [
          {
            paragraph: "Order for UBCS Echo Team:",
            paragraphDirection: "left"
          },
          {
            paragraph: "Wipe out the downtown area of the infestation and then evacuate the remaining citizens to the clock tower. Among the civilians, remember to give priority to the employees of Umbrella's affiliates. Remember to stay alert because the infected have a high endurance rate and will strike without hesitation.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Evacuation Procedure:",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Once the mission is complete, or when it becomes too impossible to accomplish, evacuate immediately.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. We'll deploy a helicopter that is waiting in the suburbs, to the yard in front of the clock tower.",
            paragraphDirection: "left"
          },
          {
            paragraph: "3. When you are ready for evacuation, ring the bell of the clock tower to signal the helicopter.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "دستور برای یوبی‌سی‌اِس اکو",
            paragraphDirection: "right"
          },
          {
            paragraph: "منطقه‌ی مرکزیِ شیوع را منهدم ساخته و سپس شهروندان باقیمانده را به سمت برج ساعت هدایت نمایید. فراموش نکنید که در میان عوام، اولیت با کارکنانِ واحدهای فرعیِ آمبرلاست. گوش‌به‌زنگ‌بودن را از یاد نبرید، چرا که مبتلایان از تاب‌وتحمل بالایی بهره برده و بی‌درنگ حمله‌ور می‌شوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "روال خروج:",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. به محض اتمام عملیات، یا تبدیل‌شدن آن به امری غیر ممکن، بلافاصله محل را ترک کنید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. ما به اعزام یک هلیکوپتر خواهیم پرداخت که در حومه‌ی شهر در حال انتظار است، تا به سمت محوطه‌ی جلوی برج ساعت حرکت کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۳. وقتی برای ترکِ محل آماده شدید، ناقوس را به صدا درآورید تا هلیکوپتر را متوجه سازید.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 16,
        fileImageUrl: '/src/lib/assets/images/re3n/files/art-picture-postcard/art-picture-postcard.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!art-picture-postcard",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/art-picture-postcard/map/art-picture-postcard-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/small-library",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/art-picture-postcard",
        title: "Art Picture Postcard",
        originalContent: [
          {
            paragraph: "A picture postcard of antique clocks.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The following verse is printed.",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"Give your soul to the goddess. Put your hands together to pray before her.\"",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "یه کارت‌پستال از ساعتای عتیقه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "روش اینو نوشته:",
            paragraphDirection: "right"
          },
          {
            paragraph: "«روحت را در اختیار ایزدبانو قرار دِه. و دستانت را در کنار هم بگذار تا در محضرِ او نیایش کنی.»",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 17,
        fileImageUrl: '/src/lib/assets/images/re3n/files/mercenary-s-pocketbook/mercenary-s-pocketbook.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!mercenarys-pocketbook",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/mercenary-s-pocketbook/map/mercenary-s-pocketbook-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-clock-tower/clock-tower-1f/clock-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/mercenary-s-pocketbook",
        title: "Mercenary's Pocketbook",
        originalContent: [
          {
            paragraph: "September 26th",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's only been three hours since the mission started, but the team is down to me and Campbell. The number of the zombies is far greater than we expected. There is no hope left for this city. We have already injected the antibody for the virus, but I'm not sure that it will work. I don't know if I will survive...",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 27th",
            paragraphDirection: "left"
          },
          {
            paragraph: "We managed to reach the clock tower. Out of desperation we robbed some wounded members of their weapons and used the surviving citizens as decoys. We were taught to do this in order to survive in the battle field, but I never enjoyed it. However, a girl showed up at the clock tower before me. She is one of the survivors. She looks just like my sister before she starved to death...",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 28th",
            paragraphDirection: "left"
          },
          {
            paragraph: "I wanted to evacuate as soon as possible, but the girl didn't. Her father insisted that he wouldn't leave the city where his beloved wife rests in peace. I really wanted to save the girl, but Campbell said, \"All I care about is our lives.\" That's how I felt before, but now... The clock tower has become a dangerous place and I don't want to make anymore mistakes...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۲۶ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "همه‌ش سه ساعته که از شروع عملیات گذشته، ولی از تیم فقط من و کمپل موندیم. تعداد زامبی‌ها هم از چیزی که فکر می‌کردیم، خیلی بیشتره. امیدی به این شهر نیست. ما از قبل، آنتی‌بادیِ این ویروس رو تزریق کردیم، که خب مطمئن نیستم اثری داشته باشه. از زنده‌موندن‌ام بی‌خبرم...",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۷ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "موفق شدیم تا به برج ساعت دست پیدا کنیم. از روی ناچاری اما، اسلحه‌ی برخی از افراد زخمی رو کش رفتیم و از شهرواندای به‌جای‌مونده به عنوان تله استفاده کردیم. به ما گفته شده بود که برای زنده‌موندن تو میدون جنگ، این شیوه رو در پیش بگیریم، که خب من اصلا باهاش حال نکردم. با این وجود ولی یه دختر، توی برج ساعت و درست جلو روم، از راه می‌رسه. یکی از بازمونده‌ها... اون عین خواهرم بود، قبلِ اینکه از گرسنگی جونش رو از دست بده...",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۸ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "می‌خواستم در اولین فرصت از اینجا خارج بشم، ولی اون دختر چنین قصدی نداشت. باباش اصرار می‌کرد که قرار نیست شهرو، به عنوان محلی که همسرش به خاک سپرده شده، ترک کنه. من واقعا می‌خواستم دختره رو نجات بدم، ولی کمپل می‌گفت «این جون ماست که مهمه». قبلاها چنین حسی داشتم ها، ولی الآن... برج ساعت هم خطرناک شده و دیگه نمی‌خوام دست به اشتباه بزنم...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 18,
        fileImageUrl: '/src/lib/assets/images/re3n/files/director-s-diary/director-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!directors-diary",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/director-s-diary/map/director-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-1f/doctors-lounge",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/director-s-diary",
        title: "Director's Diary",
        originalContent: [
          {
            paragraph: "September 10th",
            paragraphDirection: "left"
          },
          {
            paragraph: "These patients suffer from gangrene and congestion of their blood at first. Then their mind slowly deteriorates. In the end, there is nothing left of their mind. When that happens even mercy killing seems pointless. After all, they are already dead...",
            paragraphDirection: "left"
          },
          {
            paragraph: "This disease is unlike anything I have ever witnessed. Once the patient's mind is gone, they become flesh hunger monsters and act like wild animals who are on some type of bloodlust.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 18th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Another patient has been admitted to the hospital. He is showing symptoms of the first stages of the disease at this point, but... I haven't been able to sleep at all these past few days. I refuse to let these patients become \"zombies.\" I am not just an ordinary citizen. I am a doctor. Even if I die, my clinical charts will contribute to finding a cure.",
            paragraphDirection: "left"
          },
          {
            paragraph: "September 26th",
            paragraphDirection: "left"
          },
          {
            paragraph: "We lost most of the doctors and staff during the battle against the \"zombie\" patients. It's impossible to maintain the hospital under these conditions. And, I know that it's too late for me. I am beginning to feel that same itchy and hungry desire that all of my patients felt. It's too late for me...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۱۰ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "بیمارا در نگاه اول به قانقاریا و جمع‌شدنِ خون مبتلان. بعدها اما کَم‌کَمک زوال عقل می‌گیرن. و در پایان هم چیزی از عقل‌شون باقی نمی‌مونه. اینجاست که خلاص کردن بیمار از رنج، بی‌هدف جلوه می‌کنه. هر چی نباشه اونا دیگه مُردن...",
            paragraphDirection: "right"
          },
          {
            paragraph: "این بیماری، بی‌شباهت به هر چیزیه که تا به حال دیده بودم. وقتی عقل از سر بیمار می‌پره، اون به هیولای تشنه‌ی گوشتی تبدیل می‌شه که با عمل‌کردن مثل حیوونای وحشی، درجه‌ای از تشنگیِ خون رو به ارث می‌بره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۸ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "یه مریضِ دیگه راهی بیمارستان می‌شه. در حال حاضر هم علائم اولیه‌ی این بیماری رو از خودش بروز می‌ده، اما... اصلا این چند روزه خوابم نبرد. نمی‌خوام این مریضا تبدیل به «زامبی» بشن. من هم یه شهروند معمولی نیستم، دکترم. حتی اگه بمیرم هم نمودارهای مریض‌هام، برای چاره‌جوییِ این بیماری، وارد ماجرا می‌شن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۶ سپتامبر",
            paragraphDirection: "right"
          },
          {
            paragraph: "عمده‌ی دکترا و کارکنای اینجا رو طی نبرد با بیمارای «زامبی‌شده» از دست دادیم. غیر ممکنه بیمارستان رو، توی این وضعیت، بتونیم نگه داریم. و اینکه دیگه واسه‌م دیره. درست همون حس خارش و گرسنگی‌ای رو دارم که تمام مریضام داشتن. از من که گذشت...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 19,
        fileImageUrl: '/src/lib/assets/images/re3n/files/photo-d/photo-d.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-d",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/photo-d/map/photo-d-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-4f/data-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/photo-d",
        title: "Photo D",
        originalContent: [
          {
            paragraph: "The zombies are walking.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It says, \"The effects of the \"T-virus\" on the backside.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "زامبی‌ها پرسه می‌زنن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پشتش نوشته «تاثیرات ویروس تی».",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 20,
        fileImageUrl: '/src/lib/assets/images/re3n/files/medical-instruction-manual/medical-instruction-manual.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!medical-instruction-manual",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/medical-instruction-manual/map/medical-instruction-manual-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-hospital/hospital-b3/experiment-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/medical-instruction-manual",
        title: "Medical Instruction Manual",
        originalContent: [
          {
            paragraph: "Umbrella Medical Service",
            paragraphDirection: "left"
          },
          {
            paragraph: "North America Division",
            paragraphDirection: "left"
          },
          {
            paragraph: "Douglas Rover",
            paragraphDirection: "left"
          },
          {
            paragraph: "In order to activate the synthesizer to cultivate the vaccine, please follow the procedure as detailed below:",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Supply enough energy to the system.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Set the medium base to the device.",
            paragraphDirection: "left"
          },
          {
            paragraph: "When the device is ready, you can start mixing the vaccine medium. To mix the vaccine, you will need to control the five levers. This will cause the two gauges to increase or decrease. If you adjust the two gauges so that they stop at the center, the vaccine medium will then be produced automatically.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "سرویس داروییِ آمبرلا",
            paragraphDirection: "right"
          },
          {
            paragraph: "شعبه‌ی آمریکای شمالی",
            paragraphDirection: "right"
          },
          {
            paragraph: "داگلاس روور",
            paragraphDirection: "right"
          },
          {
            paragraph: "به منظور فعالسازیِ دستگاه فرآوری، برای پرورش واکسن، لطفا این پروسه را که با جزئیات شرح داده شده دنبال کنید:",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. انرژی لازم را برای سیستم تامین نمایید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. محفظه‌ی محلول را درون دستگاه قرار دهید.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به هنگام آماده‌سازی دستگاه، می‌توان ترکیب‌سازیِ محلولِ واکسن را شروع کرد. برای این کار، نیاز است تا کنترل پنج اهرم به دست گرفته شود. امری که سبب می‌شود تا درجه‌ی دو سنجش‌گر، افزایش یا کاهش یابد. اگر این دو به گونه‌ای تنظیم شوند که در مرکز متوقف گردند، محلولِ واکسن خودبخود فرآوری می‌شود.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 21,
        fileImageUrl: '/src/lib/assets/images/re3n/files/photo-e/photo-e.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!photo-e",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/photo-e/map/photo-e-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/park-office",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/photo-e",
        title: "Photo E",
        originalContent: [
          {
            paragraph: "The zombies are attacking.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "زامبی‌ها تاخت‌وتاز راه انداختن.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 22,
        fileImageUrl: '/src/lib/assets/images/re3n/files/written-order-to-supervisors/written-order-to-supervisors.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!written-order-to-supervisors",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/written-order-to-supervisors/map/written-order-to-supervisors-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/forest-path",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/written-order-to-supervisors",
        title: "Written Order to Supervisors",
        originalContent: [
          {
            paragraph: "Mission Requirements: Bravo 16",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Obtain and secure sample of all the information pertaining to this case. Observe and record combat data on the UBCS.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Destroy all the evidence including the medical facility that has the medical treatment data.",
            paragraphDirection: "left"
          },
          {
            paragraph: "3. Check the guinea pig's ability to accomplish the mission.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once your mission is complete, evacuate the area. Remember that you must not help anyone who is not a supervisor, nor bring anything back that might be traced to where it belongs.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "ملزومات عملیات: براوو ۱۶",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. یه نمونه از کلیه‌ی اطلاعات این پرونده رو آماده و حفظ کنین. داده‌های مربوط به زدوخورد یوبی‌سی‌اِس رو مورد مشاهده و ثبت‌وضبط قرار بدین.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. تمامی شواهد، از جمله تاسیسات دارویی‌ای که اطلاعات درمانی به دست داره رو، از بین ببرین.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۳. تواناییِ موش آزمایشگاهی رو مورد بررسی قرار بدین تا ماموریت با موفقیت به پایان برسه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به محض اتمام عملیات، محل رو ترک کنین. و به یاد داشته باشین که نه به غیر مافوق‌ها کمکی برسونین، و نه چیزی که ممکنه جاش لو بره رو برگردونین.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 23,
        fileImageUrl: '/src/lib/assets/images/re3n/files/supervisor-s-report/supervisor-s-report.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!supervisors-report",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/supervisor-s-report/map/supervisor-s-report-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/secret-communications-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/supervisor-s-report",
        title: "Supervisor's Report",
        originalContent: [
          {
            paragraph: "The endurance ability of the contaminated guinea pigs is truly incredible. Even when shot in a vital area, they can sometimes survive for several days without taking care of the wound. However, after prolonged exposure to the virus, the guinea pigs' intelligence level decreases to that of an insect. Even though reviving the dead seems too disgusting, the virus may still be of use. If we inject the virus into our POWs and release them, they would return to their units and then turn into zombies. This plan may work well for us in the future.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In certain areas, the virus seems to have caused the mutation of animals and plants. It may be difficult, but it'll make a good sample for the bio weapon development. I've heard that there is a giant alligator, but I have only encountered a giant creature moving under ground. I don't even want to imagine what creature spawned that monster.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I encountered \"NEMESIS.\" If I didn't know about it, I'd have been contaminated and would have become one of them by now. If it is still walking around in the city, its mission is not yet over. S.T.A.R.S. members must be very tough, since they have survived until this point. However, they cannot hold out forever...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "الحق که موش‌های آزمایشگاهیِ آلوده، استقامتِ حیرت‌آوری دارن. حتی به محض شلیک به ناحیه‌ی حیاتی‌شون هم، بدون توجه به زخم و برای روزها، گاها ممکنه دووم بیارن. هرچند که تحت تماس طولانی‌مدت با ویروس، سطح هوشیاری‌شون در حد یه حشره میاد پایین. و با وجود اینکه به‌هوش‌آوردن این تلفات، کار چندش‌آوریه، ولی ویروس ممکنه همچنان به دردمون بخوره. اگه هم ویروس رو به پی‌اودابلیوهامون تزریق و بعد رهاشون کنیم، به سمت واحدهاشون برمی‌گردن و تبدیل به زامبی می‌شن. شاید این نقشه بعدها به کارمون بیاد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به نظر میاد که ویروس، توی نواحی خاصی، باعث دگرگونیِ حیوونا و گیاها می‌شه. شاید سخت باشه، اما این یه نمونه‌ی خوب برای توسعه‌ی سلاح بیولوژیکی‌مون به حساب میاد. خبرایی هم مبنی بر حضور یه تمساح گنده‌مُنده به گوشم خورده، ولی توی زیرزمین که فقط به یه موجود غول‌پیکر بر خوردم. حتی نمی‌خوامم فکر کنم که چه موجودی این هیولا رو پس انداخته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با «نمسیس» مواجه شدم. اگه چیزی ازش نمی‌دونستم، آلوده شده بودم و تا الآن به یکی از همونا تغییر هویت می‌دادم. اگه هنوز داره تو شهر پرسه می‌زنه، پس ماموریتش همچنان به پایان نرسیده. اعضای استارز هم سرسخت‌ان که تا به الآن دووم آوردن. هرچند که اونا تا ابد طاقت نمیارن...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 24,
        fileImageUrl: '/src/lib/assets/images/re3n/files/fax-from-headquarters/fax-from-headquarters.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!fax-from-headquarters",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/fax-from-headquarters/map/fax-from-headquarters-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/park/secret-communications-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/fax-from-headquarters",
        title: "Fax From Headquarters",
        originalContent: [
          {
            paragraph: "Attention. The Raccoon City project has been abandoned. Our political maneuvering in the senate to delay their plans are now futile. All supervisors should evacuate immediately. The US army is going to execute their plan tomorrow morning. The city will be obliterated at daybreak for sure.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "توجه. پروژه‌ی راکون رها شده است. تمهیدات سیاسی‌مان در مجلس سنا نیز برای به‌تاخیرانداختن نقشه‌هایشان دیگر نتیجه‌ی مثبتی در پی ندارد. تمامی مسئولان باید محل را بلافاصله ترک کنند. قرار است تا ارتش آمریکا فردا، به وقت صبح، نقشه‌اش را عملی سازد. شهر در سیپده‌دم با اطمینان نابود خواهد شد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 25,
        fileImageUrl: '/src/lib/assets/images/re3n/files/manager-s-diary/manager-s-diary.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!managers-diary",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/manager-s-diary/map/manager-s-diary-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-2f/resting-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/manager-s-diary",
        title: "Manager's Diary",
        originalContent: [
          {
            paragraph: "April 25th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Today is my 30th birthday. I was transferred to this facility today. I am very happy because the work environment is very different from life in the university.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 14th",
            paragraphDirection: "left"
          },
          {
            paragraph: "The disposal system has been completed. Using a special kind of gas, it can decompose the cells of the guinea pigs. We have to try this out before beginning practical usage of the system, since it is not 100% stable yet.",
            paragraphDirection: "left"
          },
          {
            paragraph: "May 20th",
            paragraphDirection: "left"
          },
          {
            paragraph: "While I was checking the treatment room, the door shut, and I was locked inside. I couldn't get out for one hour. I guess even if you have the key card, it's useless when you are locked inside.",
            paragraphDirection: "left"
          },
          {
            paragraph: "June 7th",
            paragraphDirection: "left"
          },
          {
            paragraph: "The guinea pigs we have to dispose of are increasing. The system is not working smoothly. The laboratory staff doesn't listen to my opinions and I am getting extremely frustrated.",
            paragraphDirection: "left"
          },
          {
            paragraph: "July 16th",
            paragraphDirection: "left"
          },
          {
            paragraph: "We can't dispose of all the bodies and the quality of the liquid medicine is not good enough, either...",
            paragraphDirection: "left"
          },
          {
            paragraph: "July 29th",
            paragraphDirection: "left"
          },
          {
            paragraph: "Though the function of the system decreases, the number of the bodies we have to dispose doesn't. The infection level has increased and the antibodies we are using is no match for the new mutation of the virus. Some of the workers have been infected by the disease. I have continued to work, but I always keep a gun with me. I must remember to save one bullet for me. I want to weep. I don't want to die here. I swear that I'll lose my mind if I imagine how painful the death will be...",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۲۵ آوریل",
            paragraphDirection: "right"
          },
          {
            paragraph: "امروز تولد ۳۰ سالگی‌مه. در حال حاضر هم به این موسسه منتقل شدم. خیلی خوشحالم که محیط کاری با زندگی دانشگاهی، به کل متفاوته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۴ مه",
            paragraphDirection: "right"
          },
          {
            paragraph: "سیستم دفع هم تکمیل شد. با استفاده از یه گاز ویژه، این سیستم می‌تونه سلول‌های متعلق به موش‌های آزمایشگاهی‌مون رو از هم بپاشونه. از اونجایی هم که سیستم، صددرصد پایدار نیست، قبلِ کار عملی با اون باید حتما امتحانش کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۰ مه",
            paragraphDirection: "right"
          },
          {
            paragraph: "موقع بررسیِ اتاق درمان، در بسته می‌شه و منم حبس می‌شم. تا یه ساعت هم نشد بیام بیرون. حدسم اینه که وقتی حبس بشی، حتی داشتن کلید کارتی هم دردی رو دوا نمی‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۷ ژوئن",
            paragraphDirection: "right"
          },
          {
            paragraph: "موش‌های آزمایشگاهی‌ای که باید کلک‌شون رو بکنیم، رو به افزایش‌ان. سیستم دردسر به بار میاره. کارکنای آزمایشگاه به نظراتم بها نمی‌دن، و این منو شدیدا دلسرد می‌کنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱۶ ژوئیه",
            paragraphDirection: "right"
          },
          {
            paragraph: "از شرِ همه‌ی اجساد نمی‌تونیم خلاص شیم، و کیفیت شربت‌های دارویی هم تعریفی نداره...",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲۹ ژوئن",
            paragraphDirection: "right"
          },
          {
            paragraph: "با اینکه عملکرد سیستم روندِ رو به کاهشی رو طی می‌کنه، ولی شُمار اجسادی که باید کلک‌شون رو بکنیم اینطور نیستن. سطح آلودگی افزایش پیدا کرده و آنتی‌بادی‌های مورد استفاده‌ی ما برای جهش این ویروس، چاره‌گشا نیستن. بعضی از کارکنا هم به این بیماری مبتلا شدن. من به کارم ادامه دادم، با تفنگی که همیشه همرامه. نباید فراموش کنم که یه گلوله رو برای خودم نگه دارم. می‌خوام بزنم زیر گریه. نمی‌خوام اینجا بمیرم. اگه بفهمم که چقدر مرگ دردناکه، قسم می‌خورم که رد می‌دم...",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 26,
        fileImageUrl: '/src/lib/assets/images/re3n/files/security-manual/security-manual.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!security-manual",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/security-manual/map/security-manual-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/monitoring-room",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/security-manual",
        title: "Security Manual",
        originalContent: [
          {
            paragraph: "\"Security of the Plant\"",
            paragraphDirection: "left"
          },
          {
            paragraph: "Since this plan is a facility under the disguise of a deserted factory, civilians will sometimes enter. If this should occur, do not hesitate to shoot them. If they choose to surrender, arrest and then transfer them to the laboratory as new guinea pigs. You will be rewarded.",
            paragraphDirection: "left"
          },
          {
            paragraph: "\"Maintenance of the Device\"",
            paragraphDirection: "left"
          },
          {
            paragraph: "This entire plant is controlled by an epidemic prevention system. When contamination is detected in the treatment room or decomposed specimen pool, the plant will automatically be locked down for isolation. In that case, you must follow the manual to unlock it. If the contamination is over the limit, the whole system will automatically lockdown. Then, you must remain in the plant and wait for subsequent orders. Those who leave the facility without permission will suffer extreme consequences.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "«سلامت گیاه»",
            paragraphDirection: "right"
          },
          {
            paragraph: "از آنجا که این گیاه، تاسیساتی‌ست در پوشش یک کارخانه‌ی ویران‌شده، شهروندان گاها به آن ورود می‌یابند. در صورت الزام به وقوع این امر، تردید برای شلیک‌شان را کنار بگذارید. اگر تصمیم به تسلیم‌شدن گرفتند، آن‌ها را دستگیر کرده و به عنوان موش‌های آزمایشگاهی جدید، به آزمایشگاه تحویل‌شان دهید. شما پاداش دریافت خواهید کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "«حفظ دستگاه»",
            paragraphDirection: "right"
          },
          {
            paragraph: "این گیاه تماما توسط یک سیستمِ جلوگیری از شیوع، تحت کنترل است. به هنگام تشخیص آلودگی در اتاق درمان یا استخرِ نمونه‌ی تجزیه‌شده، گیاه خودبخود و به منظور ایزوله‌سازی، قرنطینه می‌شود. در این حالت، باید از راهنمای موجود برای بازکردن آن استفاده کرد. اگر آلودگی از حد مجاز خارج شود، کل سیستم به طور خودکار به انجام قرنطینه می‌پردازد. در این هنگام، می‌بایست در گیاه باقی ماند و منتظر دستورات پیاپی شد. افرادی که بدون اجازه، تاسیسات را ترک می‌کنند، از تبعات حادی رنج خواهند برد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 27,
        fileImageUrl: '/src/lib/assets/images/re3n/files/incinerator-manual/incinerator-manual.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!incinerator-manual",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/incinerator-manual/map/incinerator-manual-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/emergency-tunnel",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/incinerator-manual",
        title: "Incinerator Manual",
        originalContent: [
          {
            paragraph: "The incinerator plant is one of the facilities that burns the disposable items which are sent from the laboratory. The incinerator burns the waste materials that cannot be decomposed at the treatment room. It also supplies electricity to the facility by a thermal power electricity generator. Part of the electricity is stored in the big battery installed in the facility's underground area. The electricity is used as an auxiliary power source.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The auxiliary power circuit will be activated once the three \"auxiliary circuit units\" are properly placed in their sockets. In case the circuits are not connected automatically, a person can connect them manually to activate the system.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "نیروگاه زباله‌سوز یکی از تاسیساتی‌ست که موادِ یک‌بارمصرفی که از آزمایشگاه فرستاده می‌شوند را می‌سوزاند. این زباله‌سوز، به سوختن ضایعاتی در اتاق درمان می‌پردازد که نمی‌توانند تجزیه شوند. همچنین این زباله‌سوز به واسطه‌ی ژنراتور حرارتی، الکتریسیته‌ی لازم را برای تاسیسات فراهم می‌آورد. بخشی از این الکتریسیته در باتری بزرگی که در زیرزمینِ تاسیسات نصب شده، ذخیره می‌شود. این الکتریسیته، به عنوان نیرودِه کمکی مورد استفاده قرار می‌گیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "جریان برق کمکی در صورتی فعال می‌شود که سه «واحد جریان کمکی» به درستی در سر جایشان قرار بگیرند. در صورتی که این سه به طور خودکار به هم متصل نبودند، نیروی انسانی می‌تواند برای فعالسازی سیستم، آن‌ها را به طور دستی به یکدیگر اتصال دهد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 28,
        fileImageUrl: '/src/lib/assets/images/re3n/files/classified-photo-file/classified-photo-file.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/files#!classified-photo-file",
        location: [
          {
            text: "Location",
            mapImageUrl: '/src/lib/assets/images/re3n/files/classified-photo-file/map/classified-photo-file-map.png',
            mapImageSourceUrl: "https://www.evilresource.com/resident-evil-3-nemesis/maps/raccoon-city-outskirts/dead-factory-1f/car-yard",
            mapImageSource: 'Evil Resource',
          }
        ],
        url: "/classified-photo-file",
        title: "Classified Photo File",
        originalContent: [
          {
            paragraph: "In my opinion, I feel that it's too early to use this, \"Paracelsus' Sword\" in actual fighting. However, in order to acquire the G-virus that Umbrella has developed, it will be a great help to us.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The power of the \"Rail Cannon\" is satisfactory, but please note that it is still having a few remaining problems.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Technology Division Colonel",
            paragraphDirection: "left"
          },
          {
            paragraph: "Franklin Hart",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "به نظرم خیلی زوده که «شمشیر پاراسل‌سوس» رو توی مبارزه‌ی واقعی به کار ببریم. هرچند این یه کمک بزرگ به ما برای دستیابی به ویروس جی‌هه، ویروسی که آمبرلا توسعه‌ش داده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "قدرت «ریل‌گان» رضایت‌بخشه، ولی لطفا توجه داشته باشین که همچنان یه سری از مشکلاتش باقیه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "سرهنگ بخش تکنولوژی",
            paragraphDirection: "right"
          },
          {
            paragraph: "فرانکلین هارت",
            paragraphDirection: "right"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    gameImageUrl: '/src/lib/assets/images/re4/re4.jpg',
    shortTitle: 'RE4',
    title: 'Resident Evil 4',
    releaseDate: '2005',
    url: '/games/re4/files',
    files:
    [
      {
        id: 1,
        fileImageUrl: '/src/lib/assets/images/re4/files/info-on-ashley/info-on-ashley.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!info-on-ashley",
        url: "/info-on-ashley",
        title: "Info on Ashley",
        originalContent: [
          {
            paragraph: "Name: Ashley Graham",
            paragraphDirection: "left"
          },
          {
            paragraph: "Age: 20",
            paragraphDirection: "left"
          },
          {
            paragraph: "Daughter of the United States President.",
            paragraphDirection: "left"
          },
          {
            paragraph: "She was kidnapped by an unidentified group while on her way home from her university.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The kidnapper's motives are still unknown. Although there's reliable information that the perpetrator is an insider.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Only a handful of people know about this kidnapping. It's been kept under wraps mostly due to the fact that we can't determine who the traitor is.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The guys in intelligence say they have reliable information that Ashley's been sighted somewhere in Europe. But until we find out who the insider is, I don't know what to believe. It could be a ploy.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We have very few leads as to the whereabouts of Ashley. But members of the Secret Service and anyone related to Ashley are being questioned by an investigative team.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Even active agents are being investigated for any information. It's just a matter of time before the kidnapper is exposed.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "نام: اشلی گراهام",
            paragraphDirection: "right"
          },
          {
            paragraph: "سن: ۲۰",
            paragraphDirection: "right"
          },
          {
            paragraph: "دختر رئیس جمهور آمریکا",
            paragraphDirection: "right"
          },
          {
            paragraph: "اون تو راه بازگشت از دانشگاه به خونه، توسط یه گروه مجهول‌الهویه ربوده می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "انگیزه‌ی شخص آدم‌ربا هنوز مشخص نیست. اطلاعات موثق اما، نشون می‌دن که مجرم یه نفوذیه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "فقط یه سری از مردم از این موضوع اطلاع دارن. و از اونجایی که نمی‌شه گفت شخص خیانت‌کار کیه، از افشای این قضیه جلوگیری شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "واحد خبره، با توجه به اخبار موثقی که تو دستشه اظهار می‌کنه که اشلی یه‌جایی تو اروپا رویت شده. تا وقتِ پیداکردنِ شخص نفوذی هم، نمی‌دونم که به چیزی اطمینان کنم. این می‌تونه یه حُقه باشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اطلاعات کمی از محل سکونت اشلی تو دست‌مونه. بر و بچ سرویس مخفی آمریکا و حتی بستگانِ اشلی هم توسط تیم تجسس مورد بازجویی قرار می‌گیرن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این قضیه برای عوامل فعال هم صدق می‌کنه. کاری که دیر یا زود، و تا زمان برملاشدنِ هویتِ شخص آدم‌ربا، عملی می‌شه.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 2,
        fileImageUrl: '/src/lib/assets/images/re4/files/alert-order/alert-order.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!alert-order",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/alert-order/location/alert-order-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/alert-order/map/alert-order-map-far.png',
              default: '/src/lib/assets/images/re4/files/alert-order/map/alert-order-map-default.png',
              near: '/src/lib/assets/images/re4/files/alert-order/map/alert-order-map-near.png'
            }
          }
        ],
        url: "/alert-order",
        title: "Alert Order",
        originalContent: [
          {
            paragraph: "Recently there has been information that a United States government agent is here investigating the village.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Do not let this American agent get in contact with the prisoner.",
            paragraphDirection: "left"
          },
          {
            paragraph: "For those of you not yet informed, the prisoner is being held in an old house beyond the farm. We will transfer the prisoner to a more secure location in the valley when we are ready. The prisoner is to stay here until further notice. Meanwhile, do not let the American agent near the prisoner.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We do not know how the American government found out about our village. But we are investigating.",
            paragraphDirection: "left"
          },
          {
            paragraph: "However, I feel that this intrusion at this particular time is not just a coincidence.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I sense a third party other then the United States government involved here.",
            paragraphDirection: "left"
          },
          {
            paragraph: "My fellow men, stay alert!",
            paragraphDirection: "left"
          },
          {
            paragraph: "- Chief, Bitores Mendez",
            paragraphDirection: "right"
          }
        ],
        farsiContent: [
          {
            paragraph: "به تازگی اطلاعاتی به دست‌مان رسیده که حاکی از اعزام یک مامور، از طرف دولت آمریکا، برای بررسی دِه ماست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "نگذارید تا این مامور آمریکایی، دستش به شخص زندانی برسد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای آن‌هایی که نمی‌دانند، شخص زندانی داخل یک خانه‌ی قدیمی، در آن طرف مزرعه، قرار دارد. به وقتش نیز او را به منطقه‌ی امن‌تری در دَره انتقال می‌دهیم. تا اطلاع ثانوی نیز، او اینجا ماندگار است. در این بین نگذارید تا مامور آمریکایی به شخص زندانی نزدیک شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "نمی‌دانیم دولت آمریکا چگونه دستش به این اطلاعات، از دهکده‌ی ما رسیده است، اما ما به تحقیقات ادامه می‌دهیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگرچه، حس می‌کنم که این مزاحمت، آن هم در این زمان مشخص، نمی‌تواند تصادفی باشد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به نظر می‌آید که یک عامل سوم، به غیر از دولت آمریکا، قاطی ماجراست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مردمان من، گوش‌به‌زنگ باشید!",
            paragraphDirection: "right"
          },
          {
            paragraph: "- کدخدا، بیتورس مندز",
            paragraphDirection: "left"
          }
        ]
      },
      {
        id: 3,
        fileImageUrl: '/src/lib/assets/images/re4/files/about-the-blue-medallions/about-the-blue-medallions.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!about-the-blue-medallions",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/about-the-blue-medallions/location/about-the-blue-medallions-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-far.png',
              default: '/src/lib/assets/images/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-default.png',
              near: '/src/lib/assets/images/re4/files/about-the-blue-medallions/map/about-the-blue-medallions-map-near.png'
            }
          }
        ],
        url: "/about-the-blue-medallions",
        title: "About the Blue Medallions",
        originalContent: [
          {
            paragraph: "15 blue medallions...",
            paragraphDirection: "left"
          },
          {
            paragraph: "7 in the farm... 8 in the cemetery...",
            paragraphDirection: "left"
          },
          {
            paragraph: "For those of you who destroy 10 or more will be awarded...",
            paragraphDirection: "left"
          },
          {
            paragraph: "(The rest is illegible.)",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "۱۵ مدال آبی‌رنگ...",
            paragraphDirection: "right"
          },
          {
            paragraph: "۷تا تو مزرعه‌ست... ۸تا هم تو قبرستون...",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای اونایی که ۱۰تا مدال، یا بیشتر از این مقدار رو از بین می‌برن، جایزه در نظر گرفته می‌شه...",
            paragraphDirection: "right"
          },
          {
            paragraph: "(بقیه‌ش رو نمی‌شه خوند.)",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 4,
        fileImageUrl: '/src/lib/assets/images/re4/files/chief-s-note/chief-s-note.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!chiefs-note",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/chief-s-note/location/chief-s-note-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/chief-s-note/map/chief-s-note-map-far.png',
              default: '/src/lib/assets/images/re4/files/chief-s-note/map/chief-s-note-map-default.png',
              near: '/src/lib/assets/images/re4/files/chief-s-note/map/chief-s-note-map-near.png'
            }
          }
        ],
        url: "/chief-s-note",
        title: "Chief's Note",
        originalContent: [
          {
            paragraph: "As instructed by Lord Saddler, I have the agent in confinement, alive. Why keep him alive? I do not fully understand what the Lord's intentions are.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I would, however, think he'd keep them separate; not confine them together as has been ordered.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I don't expect Luis would trust a stranger but if by chance they did cooperate, the situation could get a bit more complicated.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If for some reason, an unknown third party is involved, I don't think they'd let a chance like this slip by.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But maybe it's all Lord Saddler's ploy - leaving us vulnerable so that this third party will surface, if they even exist that is...",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's an unlikely possibility, but if a prowler is already amongst us, then our plans could be ruined.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I guess the Lord thinks it's worth the risk, if we're able to stop whatever conspiracy is at work.",
            paragraphDirection: "left"
          },
          {
            paragraph: "At any rate, it's the Lord's call.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We will trust his judgement as always.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "به دستور لرد سدلر، مامور را زنده و در بند در اختیار دارم. حال چرا زنده؟ نمی‌دانم قصد او از این کار چیست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هرچند، من اینگونه فکر می‌کنم که لرد می‌خواهد آنان از هم جدا باشند، نه آنکه طبق دستوری که داده شد، در کنار هم به بند کشیده شوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بعید می‌دانم لوییس به غریبه‌ها اعتماد کند، اما اگر به هر نحوی آن‌ها با هم دست به همکاری بزنند، وضعیت کمی پیچیده‌تر می‌شود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر به هر دلیلی، یک عامل جدید وارد ماجرا شود، فکر نکنم که آن‌ها چنین فرصتی را از دست بدهند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "شاید هم همه‌ی ماجرا، حقه‌ای از طرف لرد سدلر باشد، که ما را بی‌دفاع رها کرده تا این عامل سوم خودش را نشان دهد، البته اگر حقیقت داشته باشد... ",
            paragraphDirection: "right"
          },
          {
            paragraph: "دور از ذهن به نظر می‌آید، ولی اگر کسی ما را دنبال کرده باشد، نقشه‌هایمان نقشِ بر آب خواهد شد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حدس من در مورد دیدگاه لرد این است که ایستادن جلوی هر توطئه‌ای ارزشش را دارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به هر روی، این لرد است که تصمیم می‌گیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ما همواره به لرد ایمان خواهیم داشت.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 5,
        fileImageUrl: '/src/lib/assets/images/re4/files/closure-of-the-church/closure-of-the-church.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!closure-of-the-church",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/closure-of-the-church/location/closure-of-the-church-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/closure-of-the-church/map/closure-of-the-church-map-far.png',
              default: '/src/lib/assets/images/re4/files/closure-of-the-church/map/closure-of-the-church-map-default.png',
              near: '/src/lib/assets/images/re4/files/closure-of-the-church/map/closure-of-the-church-map-near.png'
            }
          }
        ],
        url: "/closure-of-the-church",
        title: "Closure of the Church",
        originalContent: [
          {
            paragraph: "Regarding the two fugitives, the apprehension of Luis is our top priority; the American agent a distant second.",
            paragraphDirection: "left"
          },
          {
            paragraph: "What Luis stole from us is far more important than the girl.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Unless we get it back, the girl will become useless to us. We must get it back to execute our plan to the end.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If it gets in the wrong hands, the world would become a totally different place than what Lord Saddler has envisioned.",
            paragraphDirection: "left"
          },
          {
            paragraph: "At all costs, we mustn't let that happen.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Nevertheless, we're not letting go of the girl. To ensure that the agent does not get to her, I have locked the church door where the girl is being held.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Anyone who needs access to the church must first get approval by Lord Saddler.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There is a key beyond the lake but it should be safe now that the \"Del Lago\" has been awakened by our Lord. No one will get across the lake alive.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Plus, our same blood courses through the agent's veins. It'll be just a matter of time before he joins us. Once he does, there will be nobody else left that will come looking for the girl.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "در خصوص این دو فراری باید گفت که دستگیری لوییس اولویت اول ماست، و مامور آمریکایی با اختلاف بسیار زیادی بعد از آن قرار می‌گیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "چیزی که لوییس از پیش ما به سرقت برد، بسیار مهم‌تر از آن دختر به شمار می‌رود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر آن را پس نگیریم، این دختر برایمان ارزشی نخواهد داشت. باید آن را پس گرفت تا نقشه‌هایمان عملی شده و به انتها برسد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر بیگانگان به آن دست یابند، دنیا به جایی متفاوت از آن چیزی تبدیل می‌شود که لرد سدلر در نظر گرفته است.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به هر قیمتی باید جلوی وقوع این امر را بگیریم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با این حال اما، این دختر را آزاد نمی‌کنیم. درِ کلیسا را نیز که دخترک در آن زندانی شده، به منظور اطمینان‌حاصل‌کردن از عدم دستیابی لیان به وی، قفل کرده‌ام.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هر آنکس که قصد دسترسی به کلیسا را دارد، در قدم اول بایستی توسط لرد سدلر مورد تایید قرار بگیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "کلید در آن سوی دریاچه قرار دارد، اما جایش امن است، چرا که «دِل لاگو» توسط لرد بیدار شده؛ و هیچ‌کس نمی‌تواند زنده از دریاچه عبور کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در ضمن، خون ما در رگ‌های این مامور جاری‌ست. دیر یا زود نیز او به ما ملحق می‌شود. به محض وقوع این مهم، دیگر هیچ‌کسی به دنبال دخترک نخواهد آمد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 6,
        fileImageUrl: '/src/lib/assets/images/re4/files/anonymous-letter/anonymous-letter.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!anonymous-letter",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/anonymous-letter/location/anonymous-letter-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/anonymous-letter/map/anonymous-letter-map-far.png',
              default: '/src/lib/assets/images/re4/files/anonymous-letter/map/anonymous-letter-map-default.png',
              near: '/src/lib/assets/images/re4/files/anonymous-letter/map/anonymous-letter-map-near.png'
            }
          }
        ],
        url: "/anonymous-letter",
        title: "Anonymous Letter",
        originalContent: [
          {
            paragraph: "There's an important item hidden in the falls. If you are able to get it, you might be able to get Ashley out of the church.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But I'll warn you, the route to the church isn't a walk in the park by any means. They've deployed what's called an \"El Gigante\", so God bless.",
            paragraphDirection: "left"
          },
          {
            paragraph: "About what's been going on in your body... If I could help you, I would.",
            paragraphDirection: "left"
          },
          {
            paragraph: "But unfortunately it's beyond my power.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "یه آیتم مهم تو آبشار مخفی شده. اگه بتونی گیرش بیاری، احتمالا بتونی اشلی رو از کلیسا خارج بکنی.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اما بهت بگم که مسیر کلیسا، هیچ‌جوره مثل آب خوردن نیست. اونا موجودی به نام «ال گیگانته» رو فرستادن و این یعنی اوضاع خیطه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "درباره‌ی اتفاقاتی که برای بدنت افتاده... اگه کمکی از دستم ساخته بود، دریغ نمی‌کردم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اما متاسفانه، این از عهده‌ی من خارجه.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 7,
        fileImageUrl: '/src/lib/assets/images/re4/files/sera-and-the-3rd-party/sera-and-the-3rd-party.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!sera-and-the-3rd-party",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/sera-and-the-3rd-party/location/sera-and-the-3rd-party-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-far.png',
              default: '/src/lib/assets/images/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-default.png',
              near: '/src/lib/assets/images/re4/files/sera-and-the-3rd-party/map/sera-and-the-3rd-party-map-near.png'
            }
          }
        ],
        url: "/sera-and-the-3rd-party",
        title: "Sera and the 3rd Party",
        originalContent: [
          {
            paragraph: "The whereabouts of Sera are still unknown.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Most likely he's using an old secret passage taught to him by his grandfather who used to hunt in this region long ago.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I'm pretty certain that he's hiding our property somewhere in the forest.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If his grandfather was still alive, I would have used him to find Sera...",
            paragraphDirection: "left"
          },
          {
            paragraph: "But how did he find out about the egg injected into his body?",
            paragraphDirection: "left"
          },
          {
            paragraph: "- And the fact that he was able to remove it before it hatched is concerning.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Another factor that concerns me is that Sera escaped with our property just before the American agent arrived. I don't believe that was just a coincidence.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There has to be another player involved in this.",
            paragraphDirection: "left"
          },
          {
            paragraph: "In order to settle this whole situation, we have to capture Sera and wait for the effects of the drug to wear off before we inject him with another egg.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once this is done, whoever is behind all of this will surface. Nobody shall interfere with our plans. Those who do shall suffer severe consequences.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "مشخص نیست لوییس کجاست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به احتمال زیاد یه مسیر قدیمی و مخفی، که از پدربزرگش یاد گرفته رو، انتخاب کرده؛ کسی که تو گذشته‌های دور برای شکار راهیِ اینجا می‌شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "بی‌بروبرگرد می‌گم که اون، سرمایه‌ی ما رو یه جا تو جنگل مخفی کرده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگه پدربزرگش هنوز زنده بود، می‌فرستادمش دنبال سِرا...",
            paragraphDirection: "right"
          },
          {
            paragraph: "آخه از کجا باید بفهمه که تخمِ ویروس به بدنش تزریق شده؟",
            paragraphDirection: "right"
          },
          {
            paragraph: "- این قضیه که تونسته قبلِ آزادسازی ویروس، اون رو از بدنش خارج کنه نگران‌کننده‌ست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "قضیه‌ی دیگه‌ای که نگرانم می‌کنه اینه که درست قبل از رسیدنِ اون مامور آمریکایی، سرا به همراه دارایی ما قسر در می‌ره. باور ندارم که این همه‌ش یه اتفاق باشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "باید پای یکی دیگه در میون باشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مجبوریم برای بهبود اوضاع، سرا رو دستگیر کنیم و قبلِ تزریق تخم دیگه‌ای از ویروس بهش، منتظر ازبین‌رفتنِ تاثیرات دارو بمونیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به محض انجام این کار، هر کی که پشت قضیه‌ست خودش رو نشون می‌ده. هیچکی هم تو عملی‌کردنِ نقشه‌هامون دخالت نمی‌کنه. اونایی هم که قاطی ماجرا بشن، به سرنوشت وحشتناکی دچار می‌شن.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 8,
        fileImageUrl: '/src/lib/assets/images/re4/files/two-routes/two-routes.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!two-routes",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/two-routes/location/two-routes-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/two-routes/map/two-routes-map-far.png',
              default: '/src/lib/assets/images/re4/files/two-routes/map/two-routes-map-default.png',
              near: '/src/lib/assets/images/re4/files/two-routes/map/two-routes-map-near.png'
            }
          }
        ],
        url: "/two-routes",
        title: "Two Routes",
        originalContent: [
          {
            paragraph: "Just a while ago, I was informed by Lord Saddler that our men had shot down a United States military helicopter.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There shouldn't be any more outside interference for a while now.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Unless the United States government determines who the traitor is, they can only initiate very small covert operations.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We must use this time to our advantage and recapture the girl.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The two Americans can only get out of our territory by using one of two routes.",
            paragraphDirection: "left"
          },
          {
            paragraph: "This is where we'll stop them.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We shall make use of our forces to the greatest degree.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We will deploy a large number of Ganados in one of the routes to ensure that they do not slip by us. For the other route we shall leave the task to El Gigante. Whichever route they take, the agent will never leave here alive. Not with the girl at least.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "همین چند وقت پیش توسط لرد سدلر مطلع شدم که آدمای ما، هلیکوپترِ نظامی آمریکا رو از کار انداختن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای یه مدتی، دیگه نباید پای یکی دیگه به ماجرا کشیده بشه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورتی که تشخیص داده نشه کی دست به خیانت زده، دولت آمریکا فقط می‌تونه دست به اقدام یه سری عملیات سریِ ریز بزنه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "باید از وقتی که در اختیار داریم به نفع خودمون استفاده کنیم و دختره رو پس بگیریم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این دو آمریکایی فقط  به واسطه‌ی یکی از این دو مسیر می‌تونن از قلمروی ما خارج بشن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و اینجاست که گیرشون می‌ندازیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "تا حد امکان هم از ارتش‌مون بهره می‌بریم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "توی یکی از این دو مسیر، کلی «گانادو» رو راهی می‌کنیم تا مطمئن شیم اونا از دست ما قسر در نمی‌رن. برای اون یکی مسیر هم، کارو به «ال گیگانته» می‌سپریم. هر مسیری هم که انتخاب کنن، ماموره، حداقل با دخترک، زنده ازش بیرون نمیاد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 9,
        fileImageUrl: '/src/lib/assets/images/re4/files/village-s-last-defense/village-s-last-defense.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!villages-last-defense",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/village-s-last-defense/location/village-s-last-defense-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/village-s-last-defense/map/village-s-last-defense-map-far.png',
              default: '/src/lib/assets/images/re4/files/village-s-last-defense/map/village-s-last-defense-map-default.png',
              near: '/src/lib/assets/images/re4/files/village-s-last-defense/map/village-s-last-defense-map-near.png'
            }
          }
        ],
        url: "/village-s-last-defense",
        title: "Village's Last Defense",
        originalContent: [
          {
            paragraph: "I clearly underestimated the American agent's capability. He's still alive.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I thought that we could wait until the egg hatched, but at this rate, he could destroy the entire village before it does. We must take care of this nuisance.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We shall change our priorities - for the time being, we will cease our hunt for Luis and ambush the two Americans.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There is a building used to enlighten betrayers just beyond the point where you get off the lift.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's a perfect place for ambushing them.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If all else fails, they still would need to face me in order to get past the last gate that leads out of the village.",
            paragraphDirection: "left"
          },
          {
            paragraph: "For only before my sight will the gate open.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "توانمندی مامور آمریکا را واضحا دست کم گرفته بودم. او همچنان نفس می‌کشد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "فکر کردم می‌توان در انتظار آزادسازی ویروس بود، اما او قادر است قبل از این امر، تمامیِ دهکده را نابود سازد. باید از پس این مایه‌ی دردسر بربیاییم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اولویت‌هایمان را تغییر داده و موقتا از گیرانداختنِ لوییس دست می‌کشیم تا این دو آمریکایی را به دام بیندازیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هنگام پیاده‌شدن از کابین و کمی آن طرف‌تر، بنایی برای شیرفهم‌کردن خیانت‌کاران وجود دارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این، بهترین منطقه برای حمله‌ی مخفیانه به آنهاست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر به بن‌بست بخوریم، آن‌ها همچنان باید با من روبه‌رو شوند تا از دروازه‌ی نهایی، که راه خروج از دهکده است گذر کنند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و این قدرت بینایی من است که دروازه را باز می‌کند.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 10,
        fileImageUrl: '/src/lib/assets/images/re4/files/capture-luis-sera/capture-luis-sera.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!capture-luis-sera",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/capture-luis-sera/location/capture-luis-sera-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/capture-luis-sera/map/capture-luis-sera-map-far.png',
              default: '/src/lib/assets/images/re4/files/capture-luis-sera/map/capture-luis-sera-map-default.png',
              near: '/src/lib/assets/images/re4/files/capture-luis-sera/map/capture-luis-sera-map-near.png'
            }
          }
        ],
        url: "/capture-luis-sera",
        title: "Capture Luis Sera",
        originalContent: [
          {
            paragraph: "I have confirmation that Sera has entered the castle.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Why would he return during his escape leaves me to question his motives. But we must seize this moment and capture him.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We will get the other two Americans after we apprehend Sera.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It appears he took some vaccines when he stole our \"sample\". The vaccines we can do without but we must retrieve the \"sample\" for it is our life blood.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I feel there is somebody else or some other group involved in this whole affair.",
            paragraphDirection: "left"
          },
          {
            paragraph: "If the \"sample\" were to get into the hands of that other entity, the world which we seek to create will not come. We must apprehend Sera as quickly as possible.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "مدارکی دارم که نشان می‌دهد سرا به قلعه ورود پیدا کرده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "دلیل برگشتنش آن هم به هنگام فرار، من را در رابطه با انگیزه‌اش به فکر فرو برده. در هر صورت، باید فرصت را غنیمت شمرده و او را گیر بیندازیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "آن دو آمریکایی نیز بعد از دستگیرکردنِ سرا به چنگ آورده می‌شوند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "ظاهرا وقتی که او «نمونه‌ی آزمایشگاهی» را از ما می‌دزدد، به تعدادی واکسن دسترسی پیدا می‌کند. ما از آن‌ها بی‌نیازیم، اما بازپس‌گیری این «نمونه»، به عنوان شاهرگ حیاتی کارمان، الزامی‌ست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "احساس می‌کنم پای یک شخص یا گروهی جدید به ماجرا باز شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "اگر قرار باشد این «نمونه‌ی آزمایشگاهی» به دست دیگران راه یابد، دنیایی که ما خواهان تشکیل آن هستیم تحقق پیدا نمی‌کند. ما باید سرا را با سرعت هر چه تمام دستگیر کنیم.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 11,
        fileImageUrl: '/src/lib/assets/images/re4/files/target-practice/target-practice.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!target-practice",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/target-practice/location/target-practice-location.png',
          }
        ],
        url: "/target-practice",
        title: "Target Practice",
        originalContent: [
          {
            paragraph: "- Game Rules -",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Receive prizes by scoring above 1,000 points.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Bonus Points will be awarded for headshots.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- Game Rules - (cont'd)",
            paragraphDirection: "left"
          },
          {
            paragraph: "3. A high-scoring Salazar target may appear with successive hits.",
            paragraphDirection: "left"
          },
          {
            paragraph: "4. Shooting an Ashley target will deduct points.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- Prizes -",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. 1 bottle cap will be awarded for every 1,000 points scored.",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. Special bottle caps will be awarded by either shooting all the wooden targets except Ashley or scoring above 3,500 points.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- Prizes - (cont'd)",
            paragraphDirection: "left"
          },
          {
            paragraph: "3. There are 24 bottle caps in all. Each time you enter a new Shooting Range, 6 new bottle caps will become available.",
            paragraphDirection: "left"
          },
          {
            paragraph: "- Special Bonuses -",
            paragraphDirection: "left"
          },
          {
            paragraph: "1. Each time you complete a row on the collector's base, you'll earn bonus points!",
            paragraphDirection: "left"
          },
          {
            paragraph: "2. There are a total of 4 rows.",
            paragraphDirection: "left"
          },
          {
            paragraph: "You have 4 bonus chances!",
            paragraphDirection: "left"
          },
          {
            paragraph: "Note: Bottle cap collections can be viewed in the Key/Treasures screen.",
            paragraphDirection: "center"
          }
        ],
        farsiContent: [
          {
            paragraph: "- قوانین بازی -",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. با کسب امتیاز بالای ۱۰۰۰، جایزه بگیر.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. برای هر هدشات، امتیاز اضافی به دست بیار.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- قوانین بازی - (ادامه)",
            paragraphDirection: "right"
          },
          {
            paragraph: "۳. سالازار، به عنوان یه هدف با امتیاز بالا، بعد از شلیک‌های موفقیت‌آمیز خودشو نشون می‌ده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۴. شلیک به اشلی باعث کاهش امتیاز می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- جوایز -",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. به ازای هر ۱۰۰۰ امتیاز، یه درب بطری جایزه داده می‌شه.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. درب‌های بطریِ ویژه هم یا با شلیک به هر هدف چوبی‌ای به غیر از اشلی، یا با کسب امتیاز بیشتر از ۳۵۰۰، اعطا می‌شن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- جوایز - (ادامه)",
            paragraphDirection: "right"
          },
          {
            paragraph: "۳. مجموعا ۲۴ عدد از این درا هست. هر دفعه هم که وارد این بازی بشی، ۶تاشون در دسترس قرار می‌گیرن.",
            paragraphDirection: "right"
          },
          {
            paragraph: "- پاداش‌های ویژه -",
            paragraphDirection: "right"
          },
          {
            paragraph: "۱. هر دفعه که یه ردیفو، توی کلکسیون به پایان برسونی، امتیاز اضافی بدست میاری!",
            paragraphDirection: "right"
          },
          {
            paragraph: "۲. در مجموع ۴ ردیف وجود داره.",
            paragraphDirection: "right"
          },
          {
            paragraph: "۴ شانس ویژه در اختیارته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "توجه: مجموعه درب بطری‌ها، از صفحه‌ی «کلیدها/گنج‌ها» قابل مشاهده‌ست.",
            paragraphDirection: "center"
          }
        ]
      },
      {
        id: 12,
        fileImageUrl: '/src/lib/assets/images/re4/files/luis-memo/luis-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!luis-memo",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/luis-memo/location/luis-memo-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/luis-memo/map/luis-memo-map-far.png',
              default: '/src/lib/assets/images/re4/files/luis-memo/map/luis-memo-map-default.png',
              near: '/src/lib/assets/images/re4/files/luis-memo/map/luis-memo-map-near.png'
            }
          }
        ],
        url: "/luis-memo",
        title: "Luis' Memo",
        originalContent: [
          {
            paragraph: "There are some parasites that have the ability to control their hosts.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's basic knowledge among biologists but not much is known as to how the parasites do it.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Studying these parasites specifically might reveal some clues to as to how the powers of the Las Plagas work. And perhaps provide more insight on the victims of the Las Plagas, the Los Ganados.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Here is a list of some parasites that have the ability to manipulate the behavioral patterns of their host.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Dicrocoelium",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once the larvae of this parasite migrates to the ant's esophagus, it alters the behavior of the ant. When the temperature drops in the evening, the infected ant climbs to the top of a plant and clamps onto a leaf using its mandible.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It stays there immobile until the next morning, placing the ant where it's most vulnerable to be eaten by a browsing herbivore such as sheep.",
            paragraphDirection: "left"
          },
          {
            paragraph: "One could conclude that the parasite is manipulating the host's behavior to make its way into the body of its definitive host.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Galactosomum",
            paragraphDirection: "left"
          },
          {
            paragraph: "The larvae of this parasite makes its home inside the brain of a fish such as the yellowtail and the parrot bass. Once infected, the fish make their way up to the water's surface where they'll swim until eaten by seabirds.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once again, the peculiar behavior can only be explained by the parasite's desire to get into the bodies of the seabirds.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Leucochlordium",
            paragraphDirection: "left"
          },
          {
            paragraph: "This parasite's sporocysts develop in the snail's tentacles. The sporocysts are vivid in color and pulsate continually somewhat like a worm.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Surprisingly the infected snail makes its way to the top of a plant where it is more visible to the eyes of birds, therefore more likely to be eaten.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Once eaten by a bird, the parasite will complete its metamorphosis into an adult.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "انگل‌هایی وجود دارد که کنترلِ میزبان‌هایش، از قابلیت‌های آن به شمار می‌رود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این مهم، دانش پایه‌ی زیست‌شناسان به حساب می‌آید، در حالی که چگونگی انجام آن توسط این انگل، چندان مشخص نیست.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مطالعه بر روی این انگل، مشخصا می‌تواند از چگونگی سازوکارِ «لاس پلاگاس» پرده بردارد؛ امری که شاید از قربانی‌های «لاس پلاگاس»، که «لاس گانادو» نیز نام دارند، اطلاعات بیشتری در اختیارمان بگذارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "چند انگلی که می‌توانند الگوهای رفتاری میزبانان‌شان را دستکاری کنند، به شرح زیرند:",
            paragraphDirection: "right"
          },
          {
            paragraph: "دیکروسلیوم",
            paragraphDirection: "right"
          },
          {
            paragraph: "آنگاه که کرم‌های انگل فوق، به مریِ مورچه برسد، رفتار آن را تغییر می‌دهند. به هنگام کاهش دمای غروب نیز، مورچه‌ی آلوده خود را به بالای گیاه رسانده و به کمک فکش، خود را از برگ آویزان می‌کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "او تا صبح روز بعد، بی‌حرکت باقی مانده و در جایگاهی آسیب‌پذیر در مقابل جانورانِ گیاه‌خواری مثل گوسفند، قرار می‌گیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "می‌توان اینگونه نتیجه گرفت که این انگل، برای ورود به بدن میزبان نهایی‌اش، رفتار او را تغییر می‌دهد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "گالاکتوسوموم",
            paragraphDirection: "right"
          },
          {
            paragraph: "کرم‌های این انگل، در مغزِ ماهی‌هایی همچون دُم‌زرد یا پرت‌باس، جا خوش می‌کنند. به محض آلوده‌شدن ماهی نیز، او خود را به سطح آب می‌رساند، جایی که بعد از شناکردن، طعمه‌ی پرندگان دریایی قرار می‌گیرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "لازم به ذکر است که این رفتار عجیب برای انتخاب پرندگان دریایی را، تنها می‌توان با امیالِ انگل فوق توجه کرد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "لوککلوردیِم",
            paragraphDirection: "right"
          },
          {
            paragraph: "کرم این انگل در شاخک حلزون، تکامل پیدا می‌کند. این کرم‌ها، رنگِ زنده‌ای داشته و به مانند یک کرم واقعی، پیوسته به حرکت خود ادامه می‌دهند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در کمال تعجب، حلزونِ آلوده خود را به بالای گیاه رسانده و توجه پرندگان را به خود جلب می‌کند، از این رو محتمل‌تر است تا طعمه‌ی پرندگان قرار گیرند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به محض طعمه‌شدن، انگل مذکور به سوی بزرگسالی قدم برداشته و دگرگونی‌اش را به اتمام می‌رساند.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 13,
        fileImageUrl: '/src/lib/assets/images/re4/files/castellan-memo/castellan-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!castellan-memo",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/castellan-memo/location/castellan-memo-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/castellan-memo/map/castellan-memo-map-far.png',
              default: '/src/lib/assets/images/re4/files/castellan-memo/map/castellan-memo-map-default.png',
              near: '/src/lib/assets/images/re4/files/castellan-memo/map/castellan-memo-map-near.png'
            }
          }
        ],
        url: "/castellan-memo",
        title: "Castellan Memo",
        originalContent: [
          {
            paragraph: "For many years the Salazar family has served as the castellans of this castle. However, not everything is bright, for my ancestry has a dark past.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Long ago there once was a religious group that had deep roots in this region called the Los Illuminados. Unjustly however, the first castellan of the castle took away their rights and powers.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As a follower of this religion and as the 8th Castellan, I felt that it was my duty as well as my responsibility to atone for that sin.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I knew the best way to atone for that sin was to give power back to those who we once took it away from, the Los Illunimados.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As expected it took a little time, but we were able to rejuvenate the once sealed Las Plagas. With this success I was one step closer to the revival of the Los Illuminados.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The reason why I released the Las Plagas from deep under the castle and gave them to Lord Saddler was not only to repay for the sins of my ancestors but I felt certain that the Lord would make better use of this power to help save the world.",
            paragraphDirection: "left"
          },
          {
            paragraph: "To save those that have sinned with the power of the Las Plagas and to cleanse their souls creating a world without sinners. The way it was meant to be. Once cleansed, they would become one of the many Ganados where they will find their reason to live.",
            paragraphDirection: "left"
          },
          {
            paragraph: "And after the Lord has succeeded in creating the world in which he has envisioned, then the sins of my Salazar family will be atoned for.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "برای سال‌های متمادی، خاندان سالازار حاکمیت این قلعه را بر عهده داشته. در رابطه با گذشته‌ی تاریک اجدادم اما، هیچ چیز روشنی وجود ندارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مدت‌ها پیش نیز، فرقه‌ی مذهبیِ «لوس ایلامینادوس» به این منطقه نفود می‌یابد. به ناحق اما، اولین حاکم این قلعه، تمامی حقوق و اختیارات را از آنان سلب می‌کند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "به عنوان یک معتقد به این دین و هشتمین حاکم این قلعه، این را وظیفه و مسئولیت خویش می‌دانم تا این گناه را جبران کنم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "می‌دانستم که بهترین راه برای جبران این اشتباه، بازگرداندن قدرت به کسانی‌ست که پیش از این قدرت‌شان را تصاحب کرده بودیم: «لوس ایلامینادوس».",
            paragraphDirection: "right"
          },
          {
            paragraph: "همچنین پی بردم که بازسازی «لاس پلاگاس» که برای مدت‌ها کارش به پایان رسیده، به زمان زیادی لازم ندارد. به واسطه‌ی این موفقیت نیز، یک قدم به بازگردانی «لوس ایلامینادوس» نزدیک‌تر شدم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "نه برای جبرانِ گناهان اجدادم، که برای احساس قطعیت‌ام نسبت به لرد سدلر، برای استفاده‌ی بهتر از این قدرت در کمک به نجات دنیا، «لاس پلاگاس» را از اعماق این قلعه آزاد ساخته و در اختیارش قرار دادم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "برای نجات آنان که با «لاس پلاگاس» دست به خطا زدند، و در جهت تطهیر روحشان که به شکل‌گیری دنیایی عاری از گناهکاران دامن زدند. مسیر از ابتدا اینگونه پی‌ریزی شده بود. تطهیرشان نیز آن‌ها را به «گانادوهایی» بدل می‌سازد که دلیلی برای زندگی یافت می‌کنند.",
            paragraphDirection: "right"
          },
          {
            paragraph: "پس از موفقیت لرد در شکل‌گیری جهان مد نظر اوست که گناهان خاندانم جبران می‌شوند.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 14,
        fileImageUrl: '/src/lib/assets/images/re4/files/female-intruder/female-intruder.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files#!female-intruder",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/female-intruder/location/female-intruder-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/female-intruder/map/female-intruder-map-far.png',
              default: '/src/lib/assets/images/re4/files/female-intruder/map/female-intruder-map-default.png',
              near: '/src/lib/assets/images/re4/files/female-intruder/map/female-intruder-map-near.png'
            }
          }
        ],
        url: "/female-intruder",
        title: "Female Intruder",
        originalContent: [
          {
            paragraph: "There seems to be a female intruder among us. We believe she's connected with Sera.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We also believe that she was the one who removed the egg injected into Sera before it hatched. She may have had him retrieve the \"sample\" before the American agent's arrival.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It's obvious that her objective is the \"sample\". We must get to her before she is able to reestablish contact with Sera.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There's also reason to believe that she's working for somebody. We need her alive for interrogation.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The female should be able to answer all our questions. After we have captured her, Sera will no longer be of any concern.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As long as we retrieve the \"sample\", you may dispose of him as you see fit.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "گویا یک مهمان ناخوانده‌ی مونث در میان‌مان است و ایمان داریم که با سرا در ارتباط است.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همچنین معتقدیم که این شخص تخم ویروس را، پیش از آزادسازیِ آن در بدن سرا، از میان برداشته. دور از ذهن نیز نیست که قبل از رسیدن مامور آمریکایی، «نمونه‌ی آزمایشگاهی» را از او باز پس گرفته باشد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "مشخص است که وی همان «نمونه‌ی آزمایشگاهی» را هدف قرار داده. باید خودمان را نیز، پیش از آنکه با سرا تماس مجدد برقرار سازد، به او برسانیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همچنین دلیلی وجود دارد تا باور کنیم که این شخص، برای کسی دیگر کار می‌کند. ما زنده می‌خواهیم‌اش، تا از او حرف بکشیم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "این زن باید برای سوالات‌مان، جواب داشته باشد. پس از دستگیری‌اش، دیگر سرا هیچ اهمیتی ندارد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "در صورت لزوم نیز، پس از پیداشدن این «نمونه»، می‌توان از شر سرا خلاص شد.",
            paragraphDirection: "right"
          }
        ]
      },
      {
        id: 15,
        fileImageUrl: '/src/lib/assets/images/re4/files/butler-s-memo/butler-s-memo.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files/butlers-memo",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/butler-s-memo/location/butler-s-memo-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/butler-s-memo/map/butler-s-memo-map-far.png',
              default: '/src/lib/assets/images/re4/files/butler-s-memo/map/butler-s-memo-map-default.png',
              near: '/src/lib/assets/images/re4/files/butler-s-memo/map/butler-s-memo-map-near.png'
            }
          }
        ],
        url: "/butler-s-memo",
        title: "Butler's Memo",
        originalContent: [
          {
            paragraph: "Knowing that Sr. Ramon Salazar had no family, Lord Saddler must have used his strong faith in the Los Illuminados to his advantage to talk Sr. Salazar into undoing the seal of the Las Plagas once done by his ancestor.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Sr. Salazar would never do such a thing unless he was in some way being used unknowingly. I should have sensed the Lord's dirty scheme sooner. I feel I'm partly responsible for all of this.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I have no idea as to what the Lord is planning, but Sr. Salazar was just being used.",
            paragraphDirection: "left"
          },
          {
            paragraph: "It is too late now however, Sr. Salazar has already taken the Plaga into his body.",
            paragraphDirection: "left"
          },
          {
            paragraph: "There is no turning back once the Plaga has turned into an adult in the body.",
            paragraphDirection: "left"
          },
          {
            paragraph: "The Plaga parasite will not die unless the host dies. There's no cure. Perhaps, Sr. Salazar may have been vaguely aware of the Lord's plan all along. But it's hard to tell.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Nevertheless, there's nothing I can do about it now.",
            paragraphDirection: "left"
          },
          {
            paragraph: "I have served the Salazar family for generations. I am prepared to continue my services until the very end.",
            paragraphDirection: "left"
          }
        ],
        farsiContent: [
          {
            paragraph: "از آنجا که جناب رامون سالازار خانواده‌ای نداشت، لرد سدلر می‌بایست از اطمینان خود به «لوس ایلامینادوس» به نفع خود استفاده می‌کرد تا سالازار را برای آزادسازی «لاس پلاگاس» متقاعد سازد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "جناب سالازار نیز چنین کاری را هرگز انجام نداد، مادامی که خود ناخواسته تحت کنترل قرار گرفت. من نیز باید زودتر از برنامه‌ی شوم لرد باخبر می‌شدم، و حس می‌کنم کم‌وبیش خود مسئول این اتفاقاتم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هیچ ایده‌ای از برنامه‌های لرد ندارم، اما می‌دانم که جناب سالازار تحت کنترل قرار گرفته.",
            paragraphDirection: "right"
          },
          {
            paragraph: "هرچند که کار از کار گذشته، و «پلاگا» نیز وارد بدن جناب سالازار شده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "وقتی هم که «پلاگا» به تکامل در بدن شخص میزبان برسد، هیچ راه برگشتی در کار نخواهد بود.",
            paragraphDirection: "right"
          },
          {
            paragraph: "همچنین تا زمانی که شخص میزبان زنده باشد، انگل «پلاگا» از بین نمی‌رود و هیچ درمانی در کار نیست. شاید از همان شروع کار جناب سالازار تا حدی از نقشه‌ی لرد باخبر بود، هرچند که گفتن آن سخت است.",
            paragraphDirection: "right"
          },
          {
            paragraph: "با وجود این، نمی‌توانم کاری برای بهبود اوضاع انجام دهم.",
            paragraphDirection: "right"
          },
          {
            paragraph: "من برای نسل‌ها در خدمت خانواده‌ی سالازار بودم و برای انجام این کار تا پایان راه آماده خواهم بود.",
            paragraphDirection: "right"
          },
        ]
      },
      {
        id: 16,
        fileImageUrl: '/src/lib/assets/images/re4/files/sample-retrieved/sample-retrieved.png',
        fileImageSource: 'Evil Resource',
        fileImageSourceUrl: "https://www.evilresource.com/resident-evil-4/files/sample-retrieved",
        location: [
          {
            text: "Location",
            locationImageUrl: '/src/lib/assets/images/re4/files/sample-retrieved/location/sample-retrieved-location.png',
            mapImageUrl: {
              far: '/src/lib/assets/images/re4/files/sample-retrieved/map/sample-retrieved-map-far.png',
              default: '/src/lib/assets/images/re4/files/sample-retrieved/map/sample-retrieved-map-default.png',
              near: '/src/lib/assets/images/re4/files/sample-retrieved/map/sample-retrieved-map-near.png'
            }
          }
        ],
        url: "/sample-retrieved",
        title: "Sample Retrieved",
        originalContent: [
          {
            paragraph: "As you may have heard, Luis Sera has been disposed of by Lord Saddler. The \"sample\" is back where it belongs. I had hoped that the whole matter could be resolved without troubling the Lord. However, as long as the \"sample\" is safe we can all rejoice, for our time is nearly at hand.",
            paragraphDirection: "left"
          },
          {
            paragraph: "Now that the \"sample\" is back in our safe hands, it'll be a bit more difficult for that troublesome woman to get it. In light of all this, it's unfortunate that Sera had to go. Like us, he would have had a bright future if only he had shown more faith in our beliefs.",
            paragraphDirection: "left"
          },
          {
            paragraph: "As for the other two Americans, the Lord has left the matter in our hands.",
            paragraphDirection: "left"
          },
          {
            paragraph: "We must not disappoint the Lord. We shall capture Ashley and take her to the Lord and dispose of the American agent.",
            paragraphDirection: "left"
          },
        ],
        farsiContent: [
          {
            paragraph: "همانطور که احتمالا به گوش‌تان خورده، لوییس سرا توسط لرد سدلر به قتل رسید و «نمونه‌ی آزمایشگاهی» اکنون سر جایش قرار دارد. امید داشتم تا این موضوع بدون آنکه لرد را به دردسر بیاندازد، حل شود. هرچند، تا زمانی که این «نمونه» در محیطی امن قرار داشته باشد، ما شادکام خواهیم بود. چرا که به زودی، دنیا تحت کنترل ما قرار خواهد گرفت.",
            paragraphDirection: "right"
          },
          {
            paragraph: "حال که این «نمونه» در دستان ماست، دستیابیِ به آن برای زنِ دردسرساز، کمی سخت‌تر خواهد بود. در همین راستا نیز، این مایه‌ی تاسف است که سرا باید کشته می‌شد. تنها کافی بود تا او، همانند ما، اعتقاد خود را نسبت به تفکرات‌مان کمی بیشتر بروز می‌داد تا از آینده‌ای روشن برخوردار می‌شد.",
            paragraphDirection: "right"
          },
          {
            paragraph: "لرد نیز تمام‌کردن ماجرای این دو آمریکایی را به ما سپرده.",
            paragraphDirection: "right"
          },
          {
            paragraph: "و ما نباید لرد را نااُمید کنیم. ما می‌بایست اشلی را دستگیر و تحویل لرد بدهیم و همچنین از شر آن مامور آمریکایی خلاص شویم.",
            paragraphDirection: "right"
          }
        ]
      },
    ]
  }
]);

export default gameStore;