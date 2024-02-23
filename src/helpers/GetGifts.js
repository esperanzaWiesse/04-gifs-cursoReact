export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=n14YEktS6Xj3DIAa7AgdMejLz407EJWw&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();

    // extarayendo los campos que me interesan, para mostrar la imagen
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs
}