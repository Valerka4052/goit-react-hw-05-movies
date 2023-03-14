import axios from "axios";

export async function getTrendingMovies () {
    try {
        const response = await axios("https://api.themoviedb.org/3/trending/all/day?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03")
        if (response.status === 200) {
            // console.log(response.data.results);
            return response.data.results;
        };
        
    } catch (error) {
        console.log(error);
    };
};

// export async function searchMovie(value) {
//         try {
//         const response = await axios("https://api.themoviedb.org/3/trending/all/day?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03")
//         if (response.status === 200) { console.log(response.data.results); return response.data.results}
        
//     } catch (error) {
//         console.log(error);
//     }
// }

export async function movieDetails(id) {
         try {
             const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US`);
             if (response.status === 200) {
                //  console.log(response);
                 return response.data;
             };
        
    } catch (error) {
        console.log(error);
    };
};

export async function movieCast (id) {
       try {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US`)
           if (response.status === 200) return response.data.cast;;
        
    } catch (error) {
        console.log(error);
    };
};

export async function movieReviews (id) {
       try {
           const response = await axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=633fe04a7d6ce6c2dfe6642f8f7fec03&language=en-US&page=1`);
           if (response.status === 200) {
            //    console.log(response.data.results);
               return response.data.results;
           };
        
    } catch (error) {
        console.log(error);
    };
};