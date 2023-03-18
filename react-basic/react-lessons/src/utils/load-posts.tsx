
interface Post{
    id: number;
    title: string;
    body: string;
    img?: string;
}

export default async function loadPosts() {
    const dataPosts = await fetch('https://jsonplaceholder.typicode.com/posts') 
    const posts = await dataPosts.json();
    const dataPhotos = await fetch('https://jsonplaceholder.typicode.com/photos') 
    const photos = await dataPhotos.json();
    const postAndPhotos = posts.map((post: Post, index:number) => {
      return { ...post, img: photos[index].url}
    })

    return postAndPhotos;
}