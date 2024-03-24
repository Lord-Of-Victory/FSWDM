const moviesData = require('../data/movies.json');
const fs = require('fs');

class Movie {
    static getCurrentMovies() {
        return moviesData.currentMovies;
    }

    static getUpcomingMovies() {
        return moviesData.upcomingMovies;
    }

    static getSchedule() {
        return {
            "Monday": [moviesData.upcomingMovies[0]],
            "Tuesday": [moviesData.upcomingMovies[1]],
            // Add more days as needed
        };
    }

    static addMovie(title, timing, cast) {
        // Add movie to JSON database
        moviesData.upcomingMovies.push({ title, timing, cast });
        fs.writeFileSync('./data/movies.json', JSON.stringify(moviesData, null, 2));
        // You can also save this data back to the JSON file if needed
    }
}

module.exports = Movie;
