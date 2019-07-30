import { list } from '../methods';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/api/player/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for Manchester City, 17/18 (281, 2018)',
            async () => {
                const response = [
                    {
                        id: 238223,
                        logoUrl: null,
                        name: 'Ederson',
                        birthday: '1993-08-17',
                        nationalities: ['Brazil', 'Portugal'],
                        number: 31,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 40423,
                        logoUrl: null,
                        name: 'Claudio Bravo',
                        birthday: '1983-04-13',
                        nationalities: ['Chile', 'Spain'],
                        number: 1,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 339253,
                        logoUrl: null,
                        name: 'Daniel Grimshaw',
                        birthday: '1998-01-16',
                        nationalities: ['England'],
                        number: 32,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 371021,
                        logoUrl: null,
                        name: 'Arijanet Murić',
                        birthday: '1998-11-07',
                        nationalities: ['Kosovo', 'Montenegro'],
                        number: 49,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 186590,
                        logoUrl: null,
                        name: 'John Stones',
                        birthday: '1994-05-28',
                        nationalities: ['England'],
                        number: 5,
                        position: 'Centre-Back'
                    },
                    {
                        id: 176553,
                        logoUrl: null,
                        name: 'Aymeric Laporte',
                        birthday: '1994-05-27',
                        nationalities: ['France'],
                        number: 14,
                        position: 'Centre-Back'
                    },
                    {
                        id: 54781,
                        logoUrl: null,
                        name: 'Nicolás Otamendi',
                        birthday: '1988-02-12',
                        nationalities: ['Argentina'],
                        number: 30,
                        position: 'Centre-Back'
                    },
                    {
                        id: 90681,
                        logoUrl: null,
                        name: 'Eliaquim Mangala',
                        birthday: '1991-02-13',
                        nationalities: ['France', 'Belgium'],
                        number: 15,
                        position: 'Centre-Back'
                    },
                    {
                        id: 9594,
                        logoUrl: null,
                        name: 'Vincent Kompany',
                        birthday: '1986-04-10',
                        nationalities: ['Belgium', 'DR Congo'],
                        number: 4,
                        position: 'Centre-Back'
                    },
                    {
                        id: 340460,
                        logoUrl: null,
                        name: 'Philippe Sandler',
                        birthday: '1997-02-10',
                        nationalities: ['Netherlands'],
                        number: 34,
                        position: 'Centre-Back'
                    },
                    {
                        id: 210178,
                        logoUrl: null,
                        name: 'Pablo Marí',
                        birthday: '1993-08-31',
                        nationalities: ['Spain'],
                        number: null,
                        position: 'Centre-Back'
                    },
                    {
                        id: 282199,
                        logoUrl: null,
                        name: 'Erik Palmer-Brown',
                        birthday: '1997-04-24',
                        nationalities: ['United States'],
                        number: null,
                        position: 'Centre-Back'
                    },
                    {
                        id: 277723,
                        logoUrl: null,
                        name: 'Cameron Humphreys',
                        birthday: '1998-08-22',
                        nationalities: ['England'],
                        number: null,
                        position: 'Centre-Back'
                    },
                    {
                        id: 466794,
                        logoUrl: null,
                        name: 'Eric García',
                        birthday: '2001-01-09',
                        nationalities: ['Spain'],
                        number: 50,
                        position: 'Centre-Back'
                    },
                    {
                        id: 157495,
                        logoUrl: null,
                        name: 'Benjamin Mendy',
                        birthday: '1994-07-17',
                        nationalities: ['France', 'Senegal'],
                        number: 22,
                        position: 'Left-Back'
                    },
                    {
                        id: 203853,
                        logoUrl: null,
                        name: 'Oleksandr Zinchenko',
                        birthday: '1996-12-15',
                        nationalities: ['Ukraine'],
                        number: 35,
                        position: 'Left-Back'
                    },
                    {
                        id: 95424,
                        logoUrl: null,
                        name: 'Kyle Walker',
                        birthday: '1990-05-28',
                        nationalities: ['England'],
                        number: 2,
                        position: 'Right-Back'
                    },
                    {
                        id: 145707,
                        logoUrl: null,
                        name: 'Danilo',
                        birthday: '1991-07-15',
                        nationalities: ['Brazil'],
                        number: 3,
                        position: 'Right-Back'
                    },
                    {
                        id: 26267,
                        logoUrl: null,
                        name: 'Fernandinho',
                        birthday: '1985-05-04',
                        nationalities: ['Brazil'],
                        number: 25,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 261504,
                        logoUrl: null,
                        name: 'Aleix García',
                        birthday: '1997-06-28',
                        nationalities: ['Spain'],
                        number: null,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 114365,
                        logoUrl: null,
                        name: 'Luke Brattan',
                        birthday: '1990-03-08',
                        nationalities: ['Australia', 'England'],
                        number: null,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 395239,
                        logoUrl: null,
                        name: 'Claudio Gomes',
                        birthday: '2000-07-23',
                        nationalities: ['France', 'Guinea-Bissau'],
                        number: 81,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 53622,
                        logoUrl: null,
                        name: 'Ilkay Gündogan',
                        birthday: '1990-10-24',
                        nationalities: ['Germany'],
                        number: 8,
                        position: 'Central Midfield'
                    },
                    {
                        id: 50362,
                        logoUrl: null,
                        name: 'Fabian Delph',
                        birthday: '1989-11-21',
                        nationalities: ['England', 'Guyana'],
                        number: 18,
                        position: 'Central Midfield'
                    },
                    {
                        id: 406635,
                        logoUrl: null,
                        name: 'Phil Foden',
                        birthday: '2000-05-28',
                        nationalities: ['England'],
                        number: 47,
                        position: 'Central Midfield'
                    },
                    {
                        id: 447661,
                        logoUrl: null,
                        name: 'Douglas Luiz',
                        birthday: '1998-05-09',
                        nationalities: ['Brazil'],
                        number: null,
                        position: 'Central Midfield'
                    },
                    {
                        id: 103559,
                        logoUrl: null,
                        name: 'Mix Diskerud',
                        birthday: '1990-10-02',
                        nationalities: ['United States', 'Norway'],
                        number: null,
                        position: 'Central Midfield'
                    },
                    {
                        id: 226739,
                        logoUrl: null,
                        name: 'Anthony Cáceres',
                        birthday: '1992-09-29',
                        nationalities: ['Australia', 'Uruguay'],
                        number: null,
                        position: 'Central Midfield'
                    },
                    {
                        id: 484551,
                        logoUrl: null,
                        name: 'Taylor Richards',
                        birthday: '2000-12-04',
                        nationalities: ['England'],
                        number: null,
                        position: 'Central Midfield'
                    },
                    {
                        id: 88755,
                        logoUrl: null,
                        name: 'Kevin De Bruyne',
                        birthday: '1991-06-28',
                        nationalities: ['Belgium'],
                        number: 17,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 35518,
                        logoUrl: null,
                        name: 'David Silva',
                        birthday: '1986-01-08',
                        nationalities: ['Spain'],
                        number: 21,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 429790,
                        logoUrl: null,
                        name: 'Luka Ilic',
                        birthday: '1999-07-02',
                        nationalities: ['Serbia'],
                        number: null,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 406640,
                        logoUrl: null,
                        name: 'Felix Nmecha',
                        birthday: '2000-10-10',
                        nationalities: ['England', 'Germany'],
                        number: 61,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 466802,
                        logoUrl: null,
                        name: 'Adrián Bernabé',
                        birthday: '2001-05-26',
                        nationalities: ['Spain'],
                        number: 82,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 134425,
                        logoUrl: null,
                        name: 'Raheem Sterling',
                        birthday: '1994-12-08',
                        nationalities: ['England', 'Jamaica'],
                        number: 7,
                        position: 'Left Winger'
                    },
                    {
                        id: 192565,
                        logoUrl: null,
                        name: 'Leroy Sané',
                        birthday: '1996-01-11',
                        nationalities: ['Germany', 'France'],
                        number: 19,
                        position: 'Left Winger'
                    },
                    {
                        id: 314678,
                        logoUrl: null,
                        name: 'Brahim Díaz',
                        birthday: '1999-08-03',
                        nationalities: ['Spain', 'Morocco'],
                        number: 55,
                        position: 'Left Winger'
                    },
                    {
                        id: 345654,
                        logoUrl: null,
                        name: 'Marlos Moreno',
                        birthday: '1996-09-20',
                        nationalities: ['Colombia'],
                        number: null,
                        position: 'Left Winger'
                    },
                    {
                        id: 241641,
                        logoUrl: null,
                        name: 'Bernardo Silva',
                        birthday: '1994-08-10',
                        nationalities: ['Portugal'],
                        number: 20,
                        position: 'Right Winger'
                    },
                    {
                        id: 171424,
                        logoUrl: null,
                        name: 'Riyad Mahrez',
                        birthday: '1991-02-21',
                        nationalities: ['Algeria', 'France'],
                        number: 26,
                        position: 'Right Winger'
                    },
                    {
                        id: 225452,
                        logoUrl: null,
                        name: 'Patrick Roberts',
                        birthday: '1997-02-05',
                        nationalities: ['England'],
                        number: null,
                        position: 'Right Winger'
                    },
                    {
                        id: 417346,
                        logoUrl: null,
                        name: 'Jack Harrison',
                        birthday: '1996-11-20',
                        nationalities: ['England'],
                        number: null,
                        position: 'Right Winger'
                    },
                    {
                        id: 382553,
                        logoUrl: null,
                        name: 'Luke Bolton',
                        birthday: '1999-10-07',
                        nationalities: ['England'],
                        number: null,
                        position: 'Right Winger'
                    },
                    {
                        id: 392763,
                        logoUrl: null,
                        name: 'Ian Poveda',
                        birthday: '2000-02-09',
                        nationalities: ['England', 'Colombia'],
                        number: 83,
                        position: 'Right Winger'
                    },
                    {
                        id: 26399,
                        logoUrl: null,
                        name: 'Sergio Agüero',
                        birthday: '1988-06-02',
                        nationalities: ['Argentina', 'Spain'],
                        number: 10,
                        position: 'Centre-Forward'
                    },
                    {
                        id: 363205,
                        logoUrl: null,
                        name: 'Gabriel Jesus',
                        birthday: '1997-04-03',
                        nationalities: ['Brazil'],
                        number: 33,
                        position: 'Centre-Forward'
                    }
                ];
                await expect(list('281', '2018')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT
        );
        it(
            'Should return correct result for Bayer 04 Leverkusen, 17/18 (15, 2018)',
            async () => {
                const response = [
                    {
                        id: 48015,
                        logoUrl: null,
                        name: 'Lukas Hradecky',
                        birthday: '1989-11-24',
                        nationalities: ['Finland', 'Slovakia'],
                        number: 1,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 16498,
                        logoUrl: null,
                        name: 'Ramazan Özcan',
                        birthday: '1984-06-28',
                        nationalities: ['Austria'],
                        number: 28,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 38346,
                        logoUrl: null,
                        name: 'Thorsten Kirschbaum',
                        birthday: '1987-04-20',
                        nationalities: ['Germany'],
                        number: 24,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 85543,
                        logoUrl: null,
                        name: 'Niklas Lomb',
                        birthday: '1993-07-28',
                        nationalities: ['Germany'],
                        number: 36,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 320954,
                        logoUrl: null,
                        name: 'Tomasz Kucz',
                        birthday: '1999-07-06',
                        nationalities: ['Poland'],
                        number: null,
                        position: 'Goalkeeper'
                    },
                    {
                        id: 196357,
                        logoUrl: null,
                        name: 'Jonathan Tah',
                        birthday: '1996-02-11',
                        nationalities: ['Germany', 'Cote d\'Ivoire'],
                        number: 4,
                        position: 'Centre-Back'
                    },
                    {
                        id: 324351,
                        logoUrl: null,
                        name: 'Panagiotis Retsos',
                        birthday: '1998-08-09',
                        nationalities: ['Greece'],
                        number: 3,
                        position: 'Centre-Back'
                    },
                    {
                        id: 29993,
                        logoUrl: null,
                        name: 'Sven Bender',
                        birthday: '1989-04-27',
                        nationalities: ['Germany'],
                        number: 5,
                        position: 'Centre-Back'
                    },
                    {
                        id: 59032,
                        logoUrl: null,
                        name: 'Aleksandar Dragovic',
                        birthday: '1991-03-06',
                        nationalities: ['Austria', 'Serbia'],
                        number: 6,
                        position: 'Centre-Back'
                    },
                    {
                        id: 206386,
                        logoUrl: null,
                        name: 'Tin Jedvaj',
                        birthday: '1995-11-28',
                        nationalities: ['Croatia'],
                        number: 16,
                        position: 'Centre-Back'
                    },
                    {
                        id: 389079,
                        logoUrl: null,
                        name: 'Jan Boller',
                        birthday: '2000-03-14',
                        nationalities: ['Germany'],
                        number: 33,
                        position: 'Centre-Back'
                    },
                    {
                        id: 228433,
                        logoUrl: null,
                        name: 'Wendell',
                        birthday: '1993-07-20',
                        nationalities: ['Brazil'],
                        number: 18,
                        position: 'Left-Back'
                    },
                    {
                        id: 202591,
                        logoUrl: null,
                        name: 'Benjamin Henrichs',
                        birthday: '1997-02-23',
                        nationalities: ['Germany', 'Ghana'],
                        number: null,
                        position: 'Right-Back'
                    },
                    {
                        id: 119211,
                        logoUrl: null,
                        name: 'Mitchell Weiser',
                        birthday: '1994-04-21',
                        nationalities: ['Germany'],
                        number: 23,
                        position: 'Right-Back'
                    },
                    {
                        id: 346328,
                        logoUrl: null,
                        name: 'Jakub Bednarczyk',
                        birthday: '1999-01-02',
                        nationalities: ['Poland', 'Germany'],
                        number: null,
                        position: 'Right-Back'
                    },
                    {
                        id: 30059,
                        logoUrl: null,
                        name: 'Lars Bender',
                        birthday: '1989-04-27',
                        nationalities: ['Germany'],
                        number: 8,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 34787,
                        logoUrl: null,
                        name: 'Julian Baumgartlinger',
                        birthday: '1988-01-02',
                        nationalities: ['Austria'],
                        number: 15,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 389078,
                        logoUrl: null,
                        name: 'Adrian Stanilewicz',
                        birthday: '2000-02-22',
                        nationalities: ['Poland', 'Germany'],
                        number: null,
                        position: 'Defensive Midfield'
                    },
                    {
                        id: 89701,
                        logoUrl: null,
                        name: 'Charles Aránguiz',
                        birthday: '1989-04-17',
                        nationalities: ['Chile'],
                        number: 20,
                        position: 'Central Midfield'
                    },
                    {
                        id: 118847,
                        logoUrl: null,
                        name: 'Dominik Kohr',
                        birthday: '1994-01-31',
                        nationalities: ['Germany'],
                        number: 21,
                        position: 'Central Midfield'
                    },
                    {
                        id: 309400,
                        logoUrl: null,
                        name: 'Kai Havertz',
                        birthday: '1999-06-11',
                        nationalities: ['Germany'],
                        number: 29,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 335100,
                        logoUrl: null,
                        name: 'Sam Schreck',
                        birthday: '1999-01-29',
                        nationalities: ['Germany'],
                        number: 30,
                        position: 'Attacking Midfield'
                    },
                    {
                        id: 387626,
                        logoUrl: null,
                        name: 'Leon Bailey',
                        birthday: '1997-08-09',
                        nationalities: ['Jamaica'],
                        number: 9,
                        position: 'Left Winger'
                    },
                    {
                        id: 187492,
                        logoUrl: null,
                        name: 'Julian Brandt',
                        birthday: '1996-05-02',
                        nationalities: ['Germany'],
                        number: 10,
                        position: 'Left Winger'
                    },
                    {
                        id: 336002,
                        logoUrl: null,
                        name: 'Herdi Bukusu',
                        birthday: '2000-04-03',
                        nationalities: ['Germany', 'Angola'],
                        number: null,
                        position: 'Left Winger'
                    },
                    {
                        id: 428791,
                        logoUrl: null,
                        name: 'Paulinho',
                        birthday: '2000-07-15',
                        nationalities: ['Brazil'],
                        number: 7,
                        position: 'Right Winger'
                    },
                    {
                        id: 61087,
                        logoUrl: null,
                        name: 'Karim Bellarabi',
                        birthday: '1990-04-08',
                        nationalities: ['Germany', 'Morocco'],
                        number: 38,
                        position: 'Right Winger'
                    },
                    {
                        id: 82009,
                        logoUrl: null,
                        name: 'Kevin Volland',
                        birthday: '1992-07-30',
                        nationalities: ['Germany'],
                        number: 31,
                        position: 'Centre-Forward'
                    },
                    {
                        id: 193782,
                        logoUrl: null,
                        name: 'Lucas Alario',
                        birthday: '1992-10-08',
                        nationalities: ['Argentina', 'Italy'],
                        number: 13,
                        position: 'Centre-Forward'
                    },
                    {
                        id: 201311,
                        logoUrl: null,
                        name: 'Isaac Kiese Thelin',
                        birthday: '1992-06-24',
                        nationalities: ['Sweden', 'DR Congo'],
                        number: null,
                        position: 'Centre-Forward'
                    },
                    {
                        id: 173491,
                        logoUrl: null,
                        name: 'Joel Pohjanpalo',
                        birthday: '1994-09-13',
                        nationalities: ['Finland'],
                        number: 17,
                        position: 'Centre-Forward'
                    }
                ];
                await expect(list('15', '2018')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT
        );
    });
});
