
interface MovieListProps {
	recommendList: any;
}
const MovieList = ({ recommendList }: any) => {
	console.log("The recommended list is: ", recommendList)
	return <div>Movielist</div>
}

export default MovieList
