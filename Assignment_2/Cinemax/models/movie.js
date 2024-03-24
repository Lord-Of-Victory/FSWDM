const moviesData = require('../data/movies.json');
const moviesSchedule = require('../data/schedule.json');

const fs = require('fs');

class Movie {
    static getCurrentMovies() {
        return moviesData.currentMovies;
    }

    static getUpcomingMovies() {
        return moviesData.upcomingMovies;
    }

    static getSchedule() {
        try {
            const scheduleData = fs.readFileSync('./data/schedule.json', 'utf-8');
            return JSON.parse(scheduleData);
        } catch (error) {
            console.error('Error reading schedule:', error);
            return {};
        }
    }

    static updateSchedule(day, movieTitle, timing) {
        try {
            let schedule = this.getSchedule();
            if (schedule[day]) {
                schedule[day].push({ title: movieTitle, timing });
            } else {
                schedule[day] = [{ title: movieTitle, timing }];
            }
            fs.writeFileSync('./data/schedule.json', JSON.stringify(schedule, null, 2));
            console.log('Schedule updated successfully.');
        } catch (error) {
            console.error('Error updating schedule:', error);
        }
    }

    static addMovie(title,storyline, timing, cast,day,posterFilePath) {
        var poster=posterFilePath;
        moviesData.upcomingMovies.push({ title, cast, poster ,storyline});
        fs.writeFileSync('./data/movies.json', JSON.stringify(moviesData, null, 2));
        moviesSchedule[day] = moviesSchedule[day] || [];
        moviesSchedule[day].push({ title, timing });
        fs.writeFileSync('./data/schedule.json', JSON.stringify(moviesSchedule, null, 2));
        return JSON.stringify({ success: true, message: 'Movie added successfully.' });
    }
}

module.exports = Movie;
