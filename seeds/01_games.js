exports.seed = function(knex, Promise) {
  return knex('games').del()
    .then(function () {
      return knex('games').insert([
        {id: 1, title: "Assassin's Creed",
        description: 'An arrogant young assassin is stripped of his rank and must work his way back up',
        rating: 8,
        url: 'http://www.imdb.com/title/tt0932936/?ref_=fn_al_tt_6',
        platforms: 'Original Xbox'
      },
      {
        id: 2, title: "Assassin's Creed II",
        description: 'A young assassin in Renaissance Italy embarks on a quest for revenge',
        rating: 9,
        url: 'http://www.imdb.com/title/tt1201133/?ref_=fn_al_tt_4',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        id: 3,
        title: "Assassin's Creed: Brotherhood",
        description: 'The Italian Assassin, now fully trained, begins to follow the Assassin doctrine while also completing his revenge quest',
        rating: 9,
        url: 'http://www.imdb.com/title/tt1699759/?ref_=fn_al_tt_8',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: "Assassin's Creed: Revelations",
        description: 'The Italian Assassin, now much older and honored Mentor of the brotherhood, begins a quest for knowledge as to the Assassin origins',
        rating: 9,
        url: 'http://www.imdb.com/title/tt1928116/?ref_=fn_tt_tt_17',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: "Assassin's Creed III",
        description: 'A young Mohawk tribesman begins a quest for revenge in Revolutionary America',
        rating: 8,
        url: 'http://www.imdb.com/title/tt2175563/?ref_=fn_tt_tt_2',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: "Assassin's Creed IV: Black Flag",
        description: 'A pirate on a hunt for nothing more than treasure and adventure learns of the centuries-long struggle between Assassins and Templars',
        rating: 10,
        url: 'http://www.imdb.com/title/tt2739708/?ref_=fn_tt_tt_12',
        platforms: 'Xbox 360, Xbox One, PC, PS3, PS4'
      },
      {
        title: "Assassin's Creed: Rogue",
        description: 'An Irish Assassin, raised in the brotherhood, learns a terrible truth',
        rating: 7,
        url: 'http://www.imdb.com/title/tt4117250/?ref_=fn_tt_tt_7',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: "Assassin's Creed: Unity",
        description: 'A young Frenchman learns the truth behind the death of his adoptive father, and embarks on a revenge quest in Revolutionary Paris',
        rating: 7,
        url: 'http://www.imdb.com/title/tt3947868/?ref_=fn_tt_tt_5',
        platforms: 'Xbox One, PC, PS4'
      },
      {
        title: "Assassin's Creed: Syndicate",
        description: 'Twin Assassins operating in Victorian London seek to take control of the criminal underground',
        rating: 9,
        url: 'http://www.imdb.com/title/tt4332798/?ref_=fn_tt_tt_9',
        platforms: 'Xbox One, PC, PS4'
      },
      {
        title: 'Mass Effect',
        description: 'Systems Alliance Marine Commander Shepard must take up a highly-coveted mantle and seek to stop a rogue agent',
        rating: 8,
        url: 'http://www.imdb.com/title/tt1073668/?ref_=fn_al_tt_1',
        platforms: 'Xbox 360'
      },
      {
        title: 'Mass Effect 2',
        description: 'Commander Shepard, long thought dead, returns to halt a new threat to the galaxy',
        rating: 9,
        url: 'http://www.imdb.com/title/tt1540125/?ref_=fn_al_tt_6',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: 'Mass Effect 3',
        description: 'Commander Shepard returns to active duty when an old enemy appears in numbers never before imagined',
        rating: 9,
        url: 'http://www.imdb.com/title/tt1839558/?ref_=fn_al_tt_5',
        platforms: 'Xbox 360, PC, PS3'
      },
      {
        title: "Mass Effect: Andromeda",
        description: 'With a very limited crew, a Pathfinder must seek out a way for familiar faces to survive in a new home',
        rating: 8,
        url: 'http://www.imdb.com/title/tt4876864/?ref_=fn_al_tt_4',
        platforms: 'Xbox One, PC, PS4'
      }
      ]);
    });
};
