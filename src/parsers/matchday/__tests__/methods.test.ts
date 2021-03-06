import { list } from '../methods';

// Entities
import { createMatchday } from '../../../entities/matchday';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/matchday/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for EPL, 17/18 (GB1, 2017)',
            async () => {
                const response = [
                    createMatchday({
                        competitionId: 'GB1',
                        id: 1,
                        seasonId: '2017',
                        title: '1.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 2,
                        seasonId: '2017',
                        title: '2.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 3,
                        seasonId: '2017',
                        title: '3.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 4,
                        seasonId: '2017',
                        title: '4.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 5,
                        seasonId: '2017',
                        title: '5.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 6,
                        seasonId: '2017',
                        title: '6.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 7,
                        seasonId: '2017',
                        title: '7.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 8,
                        seasonId: '2017',
                        title: '8.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 9,
                        seasonId: '2017',
                        title: '9.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 10,
                        seasonId: '2017',
                        title: '10.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 11,
                        seasonId: '2017',
                        title: '11.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 12,
                        seasonId: '2017',
                        title: '12.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 13,
                        seasonId: '2017',
                        title: '13.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 14,
                        seasonId: '2017',
                        title: '14.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 15,
                        seasonId: '2017',
                        title: '15.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 16,
                        seasonId: '2017',
                        title: '16.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 17,
                        seasonId: '2017',
                        title: '17.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 18,
                        seasonId: '2017',
                        title: '18.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 19,
                        seasonId: '2017',
                        title: '19.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 20,
                        seasonId: '2017',
                        title: '20.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 21,
                        seasonId: '2017',
                        title: '21.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 22,
                        seasonId: '2017',
                        title: '22.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 23,
                        seasonId: '2017',
                        title: '23.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 24,
                        seasonId: '2017',
                        title: '24.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 25,
                        seasonId: '2017',
                        title: '25.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 26,
                        seasonId: '2017',
                        title: '26.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 27,
                        seasonId: '2017',
                        title: '27.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 28,
                        seasonId: '2017',
                        title: '28.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 29,
                        seasonId: '2017',
                        title: '29.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 30,
                        seasonId: '2017',
                        title: '30.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 31,
                        seasonId: '2017',
                        title: '31.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 32,
                        seasonId: '2017',
                        title: '32.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 33,
                        seasonId: '2017',
                        title: '33.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 34,
                        seasonId: '2017',
                        title: '34.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 35,
                        seasonId: '2017',
                        title: '35.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 36,
                        seasonId: '2017',
                        title: '36.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 37,
                        seasonId: '2017',
                        title: '37.Matchday',
                    }),
                    createMatchday({
                        competitionId: 'GB1',
                        id: 38,
                        seasonId: '2017',
                        title: '38.Matchday',
                    }),
                ];
                await expect(list('GB1', '2017')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should an empty array for too early year (GB1, 1900)',
            async () => {
                await expect(list('GB1', '1900')).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should an empty array for too late year (GB1, 2900)',
            async () => {
                await expect(list('GB1', '2900')).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for NO provided params',
            async () => {
                await expect(list(undefined, undefined)).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for INcorrect params',
            async () => {
                await expect(list('aaa', 'bbb')).resolves.toEqual([]);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});
