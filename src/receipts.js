import CollapsibleSection from "./CollapsibleSection";

const receipts = [
  {
    id: 1,
    name: "Eska 33",
    steps: [
      { name: "Začátek vedení kvásku", duration: 0 },
      { name: "První přidání mouky a vody do kvásku", duration: 270 },
      {
        name: "Druhé přidání mouky a vody, když je kvásek hladový",
        duration: 360,
      },
      {
        name: "Třetí přidání mouky a vody, když je kvásek opět hladový",
        duration: 210,
      },
      { name: "Míchání těsta", duration: 15 },
      { name: "První odpočinek těsta", duration: 30 },
      {
        name: "Formování bochánku a odpočinek na pokojové teplotě",
        duration: 20,
      },
      { name: "Kynutí těsta v lednici", duration: 840 },
      { name: "Temperování těsta před pečením", duration: 45 },
      { name: "Pečení na 250 °C", duration: 10 },
      { name: "Pečení na 200 °C", duration: 30 },
      { name: "Chlazení chleba", duration: 0 },
    ],
    description: () => (
      <>
        <CollapsibleSection title="Vedení kvásku">
          <p className="my-4">
            Poté, co jsme kvásek založili, bude veškerá další péče spočívat v
            jeho krmení - tomu se mezi pekaři říká vedení kvásku.
          </p>

          <h2 className="text-lg font-bold mb-2">3-stupňové vedení:</h2>
          <p className="my-4">
            Jedná se o 3-stupňové vedení kvásku, které je sice náročnější na
            vedení, ale zajišťuje zvláště vyzrálou chuť a stabilitu. V prvním
            stupni se množí především kvasinky, v druhém stupni pak bakterie
            produkující kyseliny. Třetí stupeň slouží k vyrovnání poměru
            bakterií homo- a heterofermentativního kvašení.
          </p>

          <h2 className="text-lg font-bold mb-2">
            Návod pro výrobu 0,39 kg kvásku / 1 ks chleba
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              1:00 - Vyndáme kvásek z boxu o objemu 0,13 kg. Do 0,13 kg zbylého
              kvásku přimícháme 0,043 kg žitné mouky a 0,043 l vlažné vody 32°C,
              přikryjeme a necháme stát 4-6 hodin při 22-26°C. Kvásek by měl
              zvětšit objem a po nějaké době začít klesat.
            </li>
            <li>
              5:00 - Když je kvásek hladový (jeho objem se zmenšil a už dále
              neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,021 l vlažné
              vody 32°C. Necháme stát asi 6 hodin při cca 30°C.
            </li>
            <li>
              11:00 - Když je kvásek opět hladový (jeho objem se zmenšil a už
              dále neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,069 l
              vlažné vody 32°C. Necháme stát 3-4 hodiny při 28-30°C.
            </li>
            <li>
              15:00 - Když je kvásek ve fázi klesání nebo už je „spadlý“ úplně
              (cca po 4 hodinách), můžeme zadělat těsto na chleba. Z kvásku
              odebereme 0,13 kg, které dáme do chladu v uzavřené nádobě (ne
              pevně uzavřené!) a zbytek kvásku použijeme do chleba.
            </li>
          </ul>

          <h2 className="text-lg font-bold mb-2">Poznámky:</h2>
          <ul>
            <li>
              Teploty není třeba úzkostlivě dodržovat. Důležité je aby kvásek
              vždy vyběhl nahoru a pak začal klesat a byl hodně kyselý
              (ochutnat).
            </li>
            <li>
              Časy mezi jednotlivým nakrmením velmi záleží na teplotě, takže je
              berte jako orientační. Kvásku nevadí, když zůstane nějakou dobu
              hladový.
            </li>
            <li>
              Pokud to vypadá, že kvásek uteče z nádoby, tak je možno ho
              důkladně zamíchat aby spadnul dolů - vůbec mu to nevadí a navíc
              dostane více kyslíku.
            </li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Chleba 33">
          <h2 className="text-lg font-bold mb-2">Suroviny na jeden bochník</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>kvas 220 g</li>
            <li>mouka pšeničná chlebová PROBIO 330 g</li>
            <li>voda 200 ml</li>
            <li>sůl 20 g</li>
            <li>drcený kmín 10 g</li>
            <li>brambory (vařené ve slupce a nastrouhané) 140 g</li>
          </ul>
          <p className="my-4">
            Základ dobrého chleba. Ten náš je třístupňově vedený, který je
            trochu náročnější na založení, ale odměnou vám bude vyzrálá chuť a
            stabilita.
          </p>
          <h2 className="text-xl font-semibold my-4">Postup</h2>
          <p className="mb-4">
            Do díže dáme vodu (22 °C), kvas a mouku. Pomalu mícháme 5 minut. V
            průběhu přidáme sůl a kmín. Pak přidáme uvařené brambory a rychle
            mícháme ještě 10 minut. Těsto zaprášíme moukou a necháme 30 minut
            stát v díži.
          </p>
          <p className="mb-4">
            Poté skoulíme a uděláme bochánek do ošatky s vysypaným plátnem.
            Necháme 20 minut venku, pak uložíme do lednice na 14 hodin. Před
            pečením necháme natemperovat cca 30-60 minut tak, aby byl nakynutý.
            Chleba z ošatky překlopíme přes ruce na pečicí papír, ometeme
            přebytečnou mouku, propíchneme špejlí a postříkáme vodou.
          </p>
          <p className="mb-4">
            Sázíme do předehřáté trouby na 250 °C, rozprašovačem do ní stříkneme
            vodu a pečeme cca 10 minut. Pak teplotu snížíme na 200 °C a dopečeme
            cca 30 minut. Čas se může lišit podle výkonu trouby nebo pece.
          </p>
        </CollapsibleSection>
      </>
    ),
  },
  {
    id: 2,
    name: "Ořech",
    steps: [
      { name: "Začátek vedení kvásku", duration: 0 },
      { name: "První přidání mouky a vody do kvásku", duration: 270 },
      {
        name: "Druhé přidání mouky a vody, když je kvásek hladový",
        duration: 360,
      },
      {
        name: "Třetí přidání mouky a vody, když je kvásek opět hladový",
        duration: 210,
      },
      { name: "Míchání těsta", duration: 15 },
      { name: "První odpočinek těsta", duration: 30 },
      { name: "Formování bochánku a kynutí těsta na lince", duration: 240 },
      { name: "Pečení na 250 °C", duration: 10 },
      { name: "Pečení na 200 °C", duration: 30 },
      { name: "Chlazení chleba", duration: 0 },
    ],
    description: () => (
      <>
        <CollapsibleSection title="Vedení kvásku">
          <p className="my-4">
            Poté, co jsme kvásek založili, bude veškerá další péče spočívat v
            jeho krmení - tomu se mezi pekaři říká vedení kvásku.
          </p>

          <h2 className="text-lg font-bold mb-2">3-stupňové vedení:</h2>
          <p className="my-4">
            Jedná se o 3-stupňové vedení kvásku, které je sice náročnější na
            vedení, ale zajišťuje zvláště vyzrálou chuť a stabilitu. V prvním
            stupni se množí především kvasinky, v druhém stupni pak bakterie
            produkující kyseliny. Třetí stupeň slouží k vyrovnání poměru
            bakterií homo- a heterofermentativního kvašení.
          </p>

          <h2 className="text-lg font-bold mb-2">
            Návod pro výrobu 0,39 kg kvásku / 1 ks chleba
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              1:00 - Vyndáme kvásek z boxu o objemu 0,13 kg. Do 0,13 kg zbylého
              kvásku přimícháme 0,043 kg žitné mouky a 0,043 l vlažné vody 32°C,
              přikryjeme a necháme stát 4-6 hodin při 22-26°C. Kvásek by měl
              zvětšit objem a po nějaké době začít klesat.
            </li>
            <li>
              5:00 - Když je kvásek hladový (jeho objem se zmenšil a už dále
              neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,021 l vlažné
              vody 32°C. Necháme stát asi 6 hodin při cca 30°C.
            </li>
            <li>
              11:00 - Když je kvásek opět hladový (jeho objem se zmenšil a už
              dále neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,069 l
              vlažné vody 32°C. Necháme stát 3-4 hodiny při 28-30°C.
            </li>
            <li>
              15:00 - Když je kvásek ve fázi klesání nebo už je „spadlý“ úplně
              (cca po 4 hodinách), můžeme zadělat těsto na chleba. Z kvásku
              odebereme 0,13 kg, které dáme do chladu v uzavřené nádobě (ne
              pevně uzavřené!) a zbytek kvásku použijeme do chleba.
            </li>
          </ul>

          <h2 className="text-lg font-bold mb-2">Poznámky:</h2>
          <ul>
            <li>
              Teploty není třeba úzkostlivě dodržovat. Důležité je aby kvásek
              vždy vyběhl nahoru a pak začal klesat a byl hodně kyselý
              (ochutnat).
            </li>
            <li>
              Časy mezi jednotlivým nakrmením velmi záleží na teplotě, takže je
              berte jako orientační. Kvásku nevadí, když zůstane nějakou dobu
              hladový.
            </li>
            <li>
              Pokud to vypadá, že kvásek uteče z nádoby, tak je možno ho
              důkladně zamíchat aby spadnul dolů - vůbec mu to nevadí a navíc
              dostane více kyslíku.
            </li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Ořech">
          <h2 className="text-lg font-bold mb-2">Suroviny na jeden bochník</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>kvas 220 g</li>
            <li>mouka pšeničná chlebová PROBIO 330 g</li>
            <li>voda 200 ml</li>
            <li>sůl 20 g</li>
            <li>drcený kmín 10 g</li>
            <li>brambory (vařené ve slupce a nastrouhané) 140 g</li>
            <li>2 hrsti vlašských ořechů</li>
          </ul>
          <p className="my-4">
            Základ dobrého chleba. Ten náš je třístupňově vedený, který je
            trochu náročnější na založení, ale odměnou vám bude vyzrálá chuť a
            stabilita.
          </p>
          <h2 className="text-xl font-semibold my-4">Postup</h2>
          <p className="mb-4">
            Do díže dáme vodu (22 °C), kvas a mouku. Pomalu mícháme 5 minut. V
            průběhu přidáme sůl a kmín. Pak přidáme uvařené brambory a ořechy a
            rychle mícháme ještě 10 minut. Těsto zaprášíme moukou a necháme 30
            minut stát v díži.
          </p>
          <p className="mb-4">
            Poté skoulíme a uděláme bochánek do ošatky s vysypaným plátnem.
            Necháme 4 hodiny kynout na lince. Chleba z ošatky překlopíme přes
            ruce na pečicí papír, ometeme přebytečnou mouku, propíchneme špejlí
            a postříkáme vodou.
          </p>
          <p className="mb-4">
            Sázíme do předehřáté trouby na 250 °C, rozprašovačem do ní stříkneme
            vodu a pečeme cca 10 minut. Pak teplotu snížíme na 200 °C a dopečeme
            cca 30 minut. Čas se může lišit podle výkonu trouby nebo pece.
          </p>
        </CollapsibleSection>
      </>
    ),
  },
];

export default receipts;
