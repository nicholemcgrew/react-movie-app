import React from 'react';

interface MovieTrendProps {
    trendingList: any;
}
const MovieTrendList = ({trendingList}: any) => {
  console.log("The Trend list is: ", trendingList)
  return (
    <div>
      Movie trend list
    </div>
  );
}

export default MovieTrendList;
