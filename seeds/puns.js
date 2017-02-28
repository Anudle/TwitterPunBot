
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Puns').del()
    .then(function () {
      // Inserts seed entries
      return knex('Puns').insert([
        {Pun: "Why don't some couples go to the gym? Because some relationships don't work out."},
        {Pun: "Did you hear about the guy whose whole left side was cut off? He's all right now."},
        {Pun: "I wasn't originally going to get a brain transplant, but then I changed my mind."},
        {Pun: "I'd tell you a chemistry joke but I know I wouldn't get a reaction."},
        {Pun: "I wondered why the baseball was getting bigger. Then it hit me."},
        {Pun: "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside."},
        {Pun: "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game."},
        {Pun: "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink."},
        {Pun: "Have you ever tried to eat a clock? It's very time consuming."},
        {Pun: "	I'm reading a book about anti-gravity. It's impossible to put down."},
        {Pun: "The experienced carpenter really nailed it, but the new guy screwed everything up."},
        {Pun: "If there was someone selling drugs in this place, weed know."}
      ]);
    });
};
