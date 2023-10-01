// search movies
export const searchProduct = async (title) => {
    let resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${title}`)
    return resp.json()
}


// export const searchProduct = async (title,id) => {
//     let resp = await fetch(`https://api.themoviedb.org/3/search/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${title}`)
//     return resp.json()
// }


// export const searchProduct = async () => {
//     let resp = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&query=horr")
//     return resp.json()
// }

//products