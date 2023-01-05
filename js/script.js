"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count))
            {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                personalMovieDB.movies[a] = b;

                console.log('done');
            } else {
                console.log('error');
                i--;
            }

            }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов' );
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if ( personalMovieDB.count >= 30 ) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisebleMyDB: function () {
        if (personalMovieDB.privet) {
            personalMovieDB.privet = false;
        } else {
            personalMovieDB.privet = true;
       }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            }

            personalMovieDB.genres[i - 1] = genre;
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

    }

    
};

 



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);
console.log(showProgrammingLangs(personalPlanPeter));

