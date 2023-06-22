import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Publications = () => {
    const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const username = 'peliah';
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        );
        const data = response.data;
        
        if (response.status === 200) {
          const items = data.items;
          const storiesData = items.map(item => ({
            title: item.title,
            link: item.link,
            image: item.thumbnail,
            description: item.description
          }));
          
          setStories(storiesData);
        }
      } catch (error) {
        console.error('Error fetching Medium stories:', error);
      }
    };
    
    fetchStories();
  }, []);

  return (
    <section className='flex flex-col px-6 py-20' id='publications' style={{color:"#ABB2BF"}}>
        <section className='lg:w-1/4 w-72' >
            <h1 className='lg:text-2xl text-xl'>
                <span className='text-pink-700'>#</span>Publications
            </h1>
            <figure></figure>
        </section>
        <section className="flex place-items-center w-full">
            <div className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 lg:gap-5 gap-6 place-items-center w-full" >
            {stories.map((story) => (
                <article key={story.title} className="items-center text-justify cursor-pointer hover:shadow-2xl shadow-lg">
                    <figure className="border w-80">
                        <a
                            href={story.link}>
                            <img src={story.image} alt="Article Preview"
                            className=" w-80 h-36 object-fill"
                            />
                        </a>
                    </figure>
                    <figcaption className="w-80">
                    <h2 className="font-bold h-20 flex items-center lg:text-sm text-sm border-t-0 border px-2 py-2 text-justify">
                        {story.title}
                    </h2>
                    <p className="h-32 text-xs border border-t-0 px-2 py-1 text-justify">
                    {story.description.substring(138, 300)}...
                    </p>
                    </figcaption>
                   {/* <h2>{article.title}</h2>
                   <img src={`https://miro.medium.com/${article.image}`} alt="Article Preview" />
                   <p>{article.body.substring(0, 150)}...</p> */}
                </article> 
                ))}
            </div>
        </section>
    </section>
  )
}

export default Publications