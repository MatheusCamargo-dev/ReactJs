
interface Post{
  id: number;
  title: string;
  body: string;
  img?: string;
}

export default async function loadPosts(search?: string) {

  const anime_filter = search ? `filter[text]=${search}&` : '';
  const animes_0 = await fetch(`https://kitsu.io/api/edge/anime?${anime_filter}page[limit]=20&page[offset]=0`);
  const animes_1 = await fetch(`https://kitsu.io/api/edge/anime?${anime_filter}page[limit]=20&page[offset]=20`);
  const animes_2 = await fetch(`https://kitsu.io/api/edge/anime?${anime_filter}page[limit]=20&page[offset]=40`);
  const animes_3 = await fetch(`https://kitsu.io/api/edge/anime?${anime_filter}page[limit]=20&page[offset]=60`);
  const posts_0 = await animes_0.json();
  const posts_1 = await animes_1.json();
  const posts_2 = await animes_2.json();
  const posts_3 = await animes_3.json();
  const animes = [...posts_0.data, ...posts_1.data, ...posts_2.data, ...posts_3.data];
  return animes;
}