import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendingMovies () {
    try {
        const response = await axios("/trending/all/day?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03")
        if (response.status === 200) {
            return response.data.results;
        };
        
    } catch (error) {
        console.log(error);
    };
};

export async function searchMovie(value:string) {
        try {
        const response = await axios(`/search/movie?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US&page=1&include_adult=false&query=${value}`)
            if (response.status === 200) {
                console.log(response.data.results)
                return response.data.results
            }
        
    } catch (error) {
        console.log(error);
    }
}

export async function movieDetails(id:string) {
         try {
             const response = await axios(`/movie/${id}?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US`);
             if (response.status === 200) {
                 return response.data;
             };
      } catch (error) {
        console.log(error);
    };
};

export async function movieCast (id:string) {
       try {
           const response = await axios(`/movie/${id}/credits?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US`)
           
           if (response.status === 200) return response.data.cast;
        
    } catch (error) {
        console.log(error);
    };
};

export async function movieReviews (id:string) {
       try {
           const response = await axios(`/movie/${id}/reviews?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US&page=1`);
           if (response.status === 200) {
               return response.data.results;
           };
         } catch (error) {
        console.log(error);
    };
};