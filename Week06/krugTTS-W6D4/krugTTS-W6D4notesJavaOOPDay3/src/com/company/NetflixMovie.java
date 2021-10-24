package com.company;

import java.util.List;

class NetflixMovie
{
    public String title;
    public String producer;
    NetflixMovie(String title, String producer)
    {
        this.title = title;
        this.producer = producer;
    }
}
class NetflixMovieLibrary
{
    private final List<NetflixMovie> movies;
    NetflixMovieLibrary (List<NetflixMovie> movies)
    {
        this.movies = movies;
    }
    public List<NetflixMovie> getTotalNetflixMoviesInNetflixLibrary(){
        return movies;
    }
}