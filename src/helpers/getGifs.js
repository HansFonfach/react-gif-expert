export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=w1SCsR2lwh2LNa3y832GGQcsNjy2FAN8&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>({ //desestructuro la data(respuesta json) para obtener solo lo que me interesa
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))


    return gifs;

  }