
import Row from "../../components/Row/Row";
import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
      <Banner />
      <Row
        title="Continue Watching"
        fetchUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=c2850ebe04502724ace76f3435a8d0f6"
        isLargeRow
      />
      <Row
        title="Popular on Netflix"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"
        isLargeRow
      />
      <Row
        title="Horror"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=c2850ebe04502724ace76f3435a8d0f6&with_genres=27"
        isLargeRow
      />
      <Row
        title="Action"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=c2850ebe04502724ace76f3435a8d0f6&with_genres=28"
        isLargeRow
      />
      <Row
        title="Netflix Originals"
        fetchUrl=" https://api.themoviedb.org/3/discover/tv?api_key=c2850ebe04502724ace76f3435a8d0f6&with_networks=123"
        isLargeRow
      />
      <Row
        title="Documentaries"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=c2850ebe04502724ace76f3435a8d0f6&with_genres=99"
        isLargeRow
      />
      <Row
        title="Discover TV Shows"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=c2850ebe04502724ace76f3435a8d0f6&sort_by=popularity.desc"
      isLargeRow
      />
      <Row
        title="Upcoming Movies And Shows"
        fetchUrl=" https://api.themoviedb.org/3/movie/upcoming?api_key=c2850ebe04502724ace76f3435a8d0f6"
      
      isLargeRow/>
      </div>
  );
}

export default HomePage;