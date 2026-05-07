// Edit your story content here.
// Each story has the same shape: id, title, category, scenario, imagePrompt,
// and choices with A, B, and C reflection text.
// You can replace the placeholder scenario and choice text below without
// changing the app screens.

const placeholderChoices = (title) => ({
  A: `I notice what I feel in this ${title.toLowerCase()} story. My feeling is allowed to be here.`,
  B: `This feels tricky, and I can pause before I decide what it means.`,
  C: `I can take one small step and learn more as I go.`
});

const placeholderStory = (id, title, category) => ({
  id,
  title,
  category,
  scenario: `Placeholder scenario for ${title}. Replace this with your real story text when you are ready.`,
  imagePrompt: `Soft minimalist manga-inspired illustration of a thoughtful girl reflecting on ${title.toLowerCase()}, calm storybook colors`,
  choices: placeholderChoices(title)
});

export const stories = [
  {
    id: 'growing',
    title: 'Growing',
    category: 'Body changes',
    scenario:
      'You sometimes wonder about becoming a teenager. You think about things like getting your period and your body growing and changing. You notice these thoughts.',
    imagePrompt:
      'Soft minimalist manga-inspired illustration of a thoughtful girl noticing body changes and growing up, gentle white space, calm storybook colors',
    choices: {
      A: 'I feel curious. I want to know more about what will happen. Learning about it feels interesting to me.',
      B: 'Some of these changes sound a little scary. I am not sure what it will feel like. I wonder if I will be able to handle it.',
      C: 'My body has grown and changed before. Maybe it will know how to grow again. I can discover these changes step by step.'
    }
  },
  {
    id: 'unpredictability',
    title: 'Unpredictability',
    category: 'Friends',
    scenario:
      'You are playing a hiding game with your friends. You tell Olivia not to tell Ayra where you are hiding. The game starts, but Olivia tells Ayra anyway. Ayra gets upset with you.',
    imagePrompt:
      'Soft manga-inspired illustration of a thoughtful girl playing a hiding game with friends, calm emotional storybook mood, gentle white space',
    choices: {
      A: 'I could not control what Olivia was going to do. I trusted her, but people do not always do what we expect.',
      B: 'Ayra is angry, but I do not feel like I did anything wrong. I was just hiding, like the game said.',
      C: 'Plans do not always work. People react strongly to things that do not seem like a big deal to me.'
    }
  },
  {
    id: 'homework',
    title: 'Homework',
    category: 'Feelings',
    scenario:
      'You do not like doing homework. You say, "School is not important." Your mom says, "It is not only about school. How you do things shows something about you."',
    imagePrompt:
      'Soft manga-inspired illustration of a thoughtful girl sitting with homework at a table, calm emotional storybook mood, gentle white space',
    choices: {
      A: 'I still do not like homework. It feels boring and pointless to me. I do not want to spend my time on it.',
      B: 'Maybe homework is not that important. But finishing things might matter. I can try to do it well anyway.',
      C: 'I like the feeling when I finish something and know I did it the best I could. That feeling matters to me.'
    }
  },
  {
    id: 'feelings',
    title: 'Feelings',
    category: 'Feelings',
    scenario:
      'Your grandma visits. Later she tells your mom that you were quiet and busy with your tablet.',
    imagePrompt:
      'Soft manga-inspired illustration of a thoughtful girl after a visit with her grandma, calm emotional storybook mood, gentle white space',
    choices: {
      A: 'I feel surprised. Grandma did not tell me she felt that way. I wish she had told me directly.',
      B: 'I did not know she felt left out. Maybe I can talk with her and spend some time together.',
      C: 'Sometimes people feel things without saying them right away. I can notice how others might feel.'
    }
  },
  {
    id: 'feedback',
    title: 'Feedback',
    category: 'Feelings',
    scenario:
      'Your swimming teacher talks to your dad about your swimming style. Later your dad says, "Try not to lift your head straight up. Keep it more to the side like they showed you."',
    imagePrompt:
      'Soft manga-inspired illustration of a thoughtful girl after swimming practice hearing gentle feedback, calm emotional storybook mood, gentle white space',
    choices: {
      A: 'I do not like hearing that. It feels like they do not like how I swim. I can decide what to do with that feedback.',
      B: 'I thought I was doing it well. It hurts a little to hear I need to change it.',
      C: 'This is about a movement in the water. It is not about me as a person.'
    }
  },
  placeholderStory('choosing', 'Choosing', 'Decisions'),
  placeholderStory('running-late', 'Running Late', 'Time'),
  placeholderStory('nervousness', 'Nervousness', 'Emotions'),
  placeholderStory('bad-friends', 'Bad Friends', 'Friendship'),
  placeholderStory('acro-outfit', 'Acro Outfit', 'Activities'),
  placeholderStory('mornings', 'Mornings', 'Routines'),
  placeholderStory('upset-parents', 'Upset Parents', 'Family'),
  placeholderStory('school', 'School', 'School'),
  placeholderStory('grandma', 'Grandma', 'Family'),
  placeholderStory('silly-mom', 'Silly Mom', 'Family'),
  placeholderStory('my-youtube-channel', 'My YouTube Channel', 'Interests'),
  placeholderStory('noticing', 'Noticing', 'Awareness'),
  placeholderStory('my-little-sister', 'My Little Sister', 'Family'),
  placeholderStory('messy-room', 'Messy Room', 'Home'),
  placeholderStory('my-body', 'My Body', 'Body')
];
