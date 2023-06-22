import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import axios from 'axios'
import Card from '../components/Card';

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const perPage = 6;
        const response = await axios.get(`https://api.github.com/users/Peliah/repos?sort=created&direction=desc&per_page=${perPage}&page=${page}`);
        const data = response.data;
        
        // Map the required repository information into an array of objects
        const reposData = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await axios.get(repo.languages_url);
            const languagesData = languagesResponse.data;
            
            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              languages: Object.keys(languagesData),
            };
          })
        );

        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
    AOS.init();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };


  return (
    <section className="flex flex-col px-6 pb-20" id="project" style={{color:"#ABB2BF"}}>
      <section className="flex justify-start items-center lg:w-5/12 w-72 pb-10">
        <h1 className="lg:text-2xl text-xl">
          <span className="text-pink-700 ">#</span>Projects
        </h1>
        {/* <figure className="pl-4">
          <img src={stroke} alt="line" className="w-36" />
        </figure> */}
      </section>
      <section className="grid md:grid-cols-2 grid-col-1 lg:grid-cols-3 gap-6 lg:gap-5 place-items-center w-full text-xs">
      
        {
          repos.map((repo)=>(
            <Card id={repo.id} title={repo.name} about={repo.description} link={repo.url}/>
          ))
        }
        
        
      </section>
      <div className="flex justify-center mt-4">
        <button
          className={`bg-pink-700 text-white rounded-full px-4 py-2 mr-2 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-800'}`}
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          &lt;
        </button>
        <button
          className="bg-pink-700 text-white rounded-full px-4 py-2 ml-2 hover:bg-pink-800"
          onClick={handleNextPage}
          disabled={repos.length===0}
        >
          &gt;
        </button>
      </div>
    </section>
  )
}

export default Project