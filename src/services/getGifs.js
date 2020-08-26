const apiKey = 'xWGkkIZKU5IffrzH6LT3rAtJLMKTVAoX';

export default function getGifs({search = 'coding'} = {}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10&offset=0&rating=r&lang=en`;
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response;
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return gifs;
        })
}