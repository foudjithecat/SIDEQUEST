/* 120 original quests. No server, API, or account needed. */
const QUESTS = [
  {
    "id": "adventure-01",
    "title": "The Detail Hunter",
    "description": "On a familiar route, spot five tiny details you have never noticed. Give the most interesting one a name.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "adventure-02",
    "title": "Neighborhood Postcard",
    "description": "Take a picture of a public place that would look great on a postcard. Write a three-word caption.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-03",
    "title": "The Mini Map",
    "description": "Sketch a tiny map of your room or a familiar area, adding three silly landmarks.",
    "category": "adventure",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "adventure-04",
    "title": "New Bench Perspective",
    "description": "Visit a familiar safe public spot and notice how it looks from a different seat or viewpoint.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "adventure-05",
    "title": "Cloud Casting",
    "description": "Look at the clouds from a safe spot and invent movie titles for three shapes.",
    "category": "adventure",
    "minutes": 10,
    "place": "outdoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "adventure-06",
    "title": "Sound Safari",
    "description": "Take a short walk on a familiar safe route and list six different sounds you hear.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-07",
    "title": "Alphabet Expedition",
    "description": "Find signs or objects starting with five consecutive letters of the alphabet.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-08",
    "title": "The Tiny Museum",
    "description": "Choose three everyday items around you and give each a museum-style label.",
    "category": "adventure",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "adventure-09",
    "title": "Window Explorer",
    "description": "Spend five minutes observing a familiar view from a window. Describe three changes you noticed.",
    "category": "adventure",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "adventure-10",
    "title": "One Street, Three Stories",
    "description": "On a short familiar route, pick three ordinary locations and imagine a fictional story behind each.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-11",
    "title": "Color Trail",
    "description": "On a safe walk, try to spot seven different shades of one color.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-12",
    "title": "The Guidebook",
    "description": "Write a mini travel guide for one place you know well, including a fun title and two tips.",
    "category": "adventure",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "adventure-13",
    "title": "Secret Landmark",
    "description": "Choose a harmless, overlooked object near home and declare it the landmark of an imaginary city.",
    "category": "adventure",
    "minutes": 10,
    "place": "either",
    "company": "either",
    "xp": 25
  },
  {
    "id": "adventure-14",
    "title": "Golden Hour Observer",
    "description": "At a comfortable time of day, photograph how the light changes a familiar object.",
    "category": "adventure",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "adventure-15",
    "title": "Texture Gallery",
    "description": "Find four different textures nearby. Describe or photograph them without touching anything unsafe.",
    "category": "adventure",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "adventure-16",
    "title": "Garden Detective",
    "description": "From a familiar path, notice three plants or trees and invent nicknames for their shapes.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-17",
    "title": "Perspective Swap",
    "description": "Photograph the same everyday object from three unusual but safe angles.",
    "category": "adventure",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "adventure-18",
    "title": "Your Area in Three Words",
    "description": "Take a brief stroll on a route you know and describe the atmosphere using only three words.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-19",
    "title": "Hidden Patterns",
    "description": "Find five repeating patterns in your surroundings: tiles, bricks, leaves, or anything else.",
    "category": "adventure",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "adventure-20",
    "title": "Micro Adventure Log",
    "description": "Spend 20 minutes exploring a safe familiar place, then write a two-sentence adventure report.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "creative-01",
    "title": "Movie Trailer in Three Shots",
    "description": "Film or storyboard three shots that make an ordinary task seem like an epic movie.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-02",
    "title": "The One-Color Album",
    "description": "Make a mini photo collection of five objects sharing the same color.",
    "category": "creative",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-03",
    "title": "Invent a Book Cover",
    "description": "Sketch a cover and title for a book that does not exist.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-04",
    "title": "Six-Word Story",
    "description": "Write an entire fictional story in exactly six words. Add a title.",
    "category": "creative",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "creative-05",
    "title": "The Fake Advertisement",
    "description": "Create a funny, clearly fictional ad for an everyday object.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "creative-06",
    "title": "Tiny Animation",
    "description": "Create a four-frame flipbook or photo sequence of something moving.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-07",
    "title": "Album Art Challenge",
    "description": "Make a square album-cover design using shapes, text, or your own photo.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-08",
    "title": "Dramatic Lighting",
    "description": "Make an ordinary object look mysterious using only safe household lighting.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-09",
    "title": "The One-Minute Documentary",
    "description": "Record a mock nature documentary about an ordinary household object.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "creative-10",
    "title": "Invent a Mascot",
    "description": "Draw a mascot for your day, name it, and give it a strange superpower.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-11",
    "title": "Draw Without Looking",
    "description": "Sketch a nearby object while looking mostly at the object rather than your paper.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-12",
    "title": "Photo Story Triptych",
    "description": "Take three photos that tell a beginning, middle, and end without words.",
    "category": "creative",
    "minutes": 20,
    "place": "either",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-13",
    "title": "Reimagine a Logo",
    "description": "Invent a playful logo for a fictional organization that solves an absurd problem.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-14",
    "title": "Soundtrack Your Room",
    "description": "Make a list of five original imaginary song titles describing the mood of your room.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-15",
    "title": "The Unlikely Hero",
    "description": "Write a five-sentence adventure starring a harmless everyday object.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-16",
    "title": "Poster from a Quote",
    "description": "Create a simple typographic poster using an original sentence you wrote.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-17",
    "title": "One-Minute Radio Show",
    "description": "Record a short fictional radio update about a very unimportant event.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "creative-18",
    "title": "Object Portrait",
    "description": "Create an artistic portrait of an inanimate object as if it were a celebrity.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-19",
    "title": "Three-Shape Creature",
    "description": "Design a creature using only a circle, triangle, and square, repeated as needed.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-20",
    "title": "The First Scene",
    "description": "Write or sketch the opening moment of a movie you wish existed.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "social-01",
    "title": "The Ridiculous Debate",
    "description": "With a willing friend, debate whether cereal counts as soup. Each person gets one minute.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-02",
    "title": "Two Truths, One Fiction",
    "description": "Each player shares two true low-stakes facts and one invented one. Guess the fictional fact.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-03",
    "title": "Compliment Relay",
    "description": "Ask a friend to exchange genuine compliments about something each of you has done well.",
    "category": "social",
    "minutes": 5,
    "place": "either",
    "company": "friends",
    "xp": 15
  },
  {
    "id": "social-04",
    "title": "Invent a Holiday",
    "description": "Together, invent a holiday with a name, tradition, and absolutely bizarre mascot.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-05",
    "title": "The 60-Second Pitch",
    "description": "Each person pitches the worst fictional movie idea they can invent. Vote for the funniest.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-06",
    "title": "Shared Playlist Theme",
    "description": "Choose a funny theme and each suggest three songs that would match it; no need to play them.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-07",
    "title": "Reverse Interview",
    "description": "Let a friend ask three unexpected but comfortable questions. Then switch roles.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-08",
    "title": "The Improbable Business",
    "description": "Together invent a harmless business that serves the world’s most niche customer.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-09",
    "title": "Build a Fictional Town",
    "description": "Take turns naming places and characters in a fictional town until it feels real.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-10",
    "title": "Would You Rather Lab",
    "description": "Create three original would-you-rather questions and take turns defending your choices.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-11",
    "title": "Caption Tournament",
    "description": "Choose a photo you both agree to use, write funny captions, and vote on a winner.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-12",
    "title": "Friendship Time Capsule",
    "description": "Each person writes one hope for next year; save the notes to revisit together.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-13",
    "title": "One-Minute Portraits",
    "description": "With permission, draw quick, silly portraits of each other and share the results.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-14",
    "title": "Memory Swap",
    "description": "Each share a lighthearted memory you remember differently and compare the details.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-15",
    "title": "Create a Secret Handshake",
    "description": "Invent a simple, comfortable handshake or greeting with a willing friend.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-16",
    "title": "Co-Write a Mystery",
    "description": "Alternate sentences to create a short, ridiculous mystery story.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-17",
    "title": "Three Things in Common",
    "description": "Find three surprising interests you share that you have never discussed before.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-18",
    "title": "Design a Dream Café",
    "description": "Together choose a name, menu theme, and interior concept for a fictional café.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-19",
    "title": "The Friendly Quiz",
    "description": "Each make five fun, non-personal trivia questions and quiz one another.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-20",
    "title": "Invent a Game Show",
    "description": "Create a goofy game-show title, three rules, and one sample round you can play.",
    "category": "social",
    "minutes": 20,
    "place": "either",
    "company": "friends",
    "xp": 45
  },
  {
    "id": "chaos-01",
    "title": "The Overdramatic Review",
    "description": "Write a five-star review of something extremely ordinary, as though it changed your life.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-02",
    "title": "Name Everything",
    "description": "Give five nearby objects fancy names that belong in a fantasy novel.",
    "category": "chaos",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "chaos-03",
    "title": "Chair Press Conference",
    "description": "Pretend your chair is a famous guest; write three interview questions and answers.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-04",
    "title": "Tiny Olympic Games",
    "description": "Invent a harmless tabletop sport using paper or other lightweight objects; define the rules.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "chaos-05",
    "title": "Fake Museum Tour",
    "description": "Give an overly serious, fictional tour of three ordinary objects in your room.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "chaos-06",
    "title": "The Villain Monologue",
    "description": "Write a dramatic villain speech about a tiny inconvenience, like a missing pen.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-07",
    "title": "Emergency Snack Broadcast",
    "description": "Record a fictional breaking-news report about a completely ordinary snack.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-08",
    "title": "Random Object Lore",
    "description": "Pick an object nearby and invent its 400-year secret history.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-09",
    "title": "Worst Superpower",
    "description": "Invent the least useful superpower imaginable and design its superhero costume.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-10",
    "title": "The Official Ranking",
    "description": "Rank five harmless everyday things using the most absurd criteria possible.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "chaos-11",
    "title": "Ridiculous Restaurant",
    "description": "Invent a restaurant that serves only one extremely specific fictional dish.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-12",
    "title": "Petty World Record",
    "description": "Invent a completely harmless world record and write its ridiculous official announcement.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-13",
    "title": "Appliance Horoscope",
    "description": "Write a fictional horoscope for a toaster, lamp, or other everyday appliance.",
    "category": "chaos",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "chaos-14",
    "title": "The Useless Invention",
    "description": "Sketch a machine that solves a problem nobody has.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "chaos-15",
    "title": "Plot Twist Generator",
    "description": "Write three boring situations and add a wild but harmless fictional plot twist to each.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-16",
    "title": "Imaginary Courtroom",
    "description": "Put a harmless object on trial for a silly crime, then write its defense.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "chaos-17",
    "title": "The News Anchor",
    "description": "Deliver an imaginary evening news summary about your day with exaggerated seriousness.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-18",
    "title": "Forbidden Talent Show",
    "description": "Invent five ridiculous talents for a fictional talent show and pick a winner.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "chaos-19",
    "title": "New Dictionary Entry",
    "description": "Invent three new words and use each one in a sentence.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-20",
    "title": "Accidental Masterpiece",
    "description": "Arrange five safe, non-breakable objects as if they were a famous modern-art installation.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-01",
    "title": "The Future Postcard",
    "description": "Write a short postcard from yourself five years in the future. Keep it hopeful or curious.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-02",
    "title": "Change My Mind",
    "description": "Pick a harmless opinion and make the strongest possible argument for the opposite side.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-03",
    "title": "One Question, Three Answers",
    "description": "Choose a big life question and give three very different plausible answers.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-04",
    "title": "Philosophy of a Spoon",
    "description": "Use an ordinary object to explain a philosophical idea in five sentences.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-05",
    "title": "Invent a Paradox",
    "description": "Create an original thought experiment that produces two conflicting answers.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-06",
    "title": "The Curiosity List",
    "description": "Write down five things you genuinely wonder about and research one using a safe source.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-07",
    "title": "The Better Question",
    "description": "Rewrite a boring question so that it becomes genuinely interesting.",
    "category": "mind",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "mind-08",
    "title": "A Day Without One Thing",
    "description": "Imagine a world without one everyday convenience. List three surprising effects.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-09",
    "title": "Personal Time Capsule",
    "description": "Save three words that describe today and a note about why they fit.",
    "category": "mind",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "mind-10",
    "title": "The Invention Timeline",
    "description": "Choose an object and imagine how its design could change over the next century.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-11",
    "title": "Memory in a Sentence",
    "description": "Describe a happy or neutral memory in one sentence without naming its location.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-12",
    "title": "The Kindness Experiment",
    "description": "Write down one small act of kindness you can do today, then carry it out if convenient.",
    "category": "mind",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-13",
    "title": "Perspective Puzzle",
    "description": "Describe one event as three fictional characters with different viewpoints.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-14",
    "title": "The One Rule Universe",
    "description": "Invent a world with a single unusual rule and describe everyday life there.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-15",
    "title": "Question Ladder",
    "description": "Start with a simple “why” question and keep asking “why” five times to go deeper.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-16",
    "title": "The Trade-Off List",
    "description": "Choose two good things that sometimes compete, like freedom and comfort, and compare them.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-17",
    "title": "Invisible Design",
    "description": "Identify three design choices you usually overlook, from door handles to menus.",
    "category": "mind",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-18",
    "title": "Explain It Simply",
    "description": "Take something you know well and explain it to an imaginary curious nine-year-old.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-19",
    "title": "Who Decides?",
    "description": "Invent a tiny imaginary society and decide one fair rule everyone should follow.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-20",
    "title": "Small Discovery",
    "description": "Learn one new fact about a safe topic and write a two-sentence explanation in your own words.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-01",
    "title": "The 10-Minute Reset",
    "description": "Tidy one small space while pretending you are preparing it for a museum opening.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-02",
    "title": "Random Word Adventure",
    "description": "Pick three random words from a book and write a story connecting them.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-03",
    "title": "Tiny Exhibition",
    "description": "Curate three photos or drawings around a theme of your choice.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-04",
    "title": "Soundtrack Without Sound",
    "description": "List five original music track titles for a fictional adventure happening today.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-05",
    "title": "Swap the Genre",
    "description": "Describe an ordinary activity as a mystery, comedy, and science-fiction scene.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-06",
    "title": "The Kind Message",
    "description": "Send a supportive, low-pressure message to a friend you already know, if you feel like it.",
    "category": "wildcard",
    "minutes": 5,
    "place": "either",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "wildcard-07",
    "title": "Silent Scavenger Hunt",
    "description": "Find something round, something blue, something soft, and something that makes you smile.",
    "category": "wildcard",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-08",
    "title": "One-Page Zine",
    "description": "Fold a sheet of paper into a small zine about a funny or fascinating topic.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-09",
    "title": "Name a Constellation",
    "description": "From a safe outdoor spot or a star photo, invent a constellation and its mythology.",
    "category": "wildcard",
    "minutes": 15,
    "place": "either",
    "company": "either",
    "xp": 35
  },
  {
    "id": "wildcard-10",
    "title": "The Friend Quest",
    "description": "With a willing friend, each pick a harmless mini challenge for the other.",
    "category": "wildcard",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "wildcard-11",
    "title": "Invent a Board Game",
    "description": "Create a simple board game using paper and coins as pieces—no money involved.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "wildcard-12",
    "title": "A Photo, A Poem",
    "description": "Take a picture of an everyday object and write a four-line poem inspired by it.",
    "category": "wildcard",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-13",
    "title": "Local Legend",
    "description": "Invent a humorous legend explaining the name of a familiar public place.",
    "category": "wildcard",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-14",
    "title": "Five-Minute Field Notes",
    "description": "Spend five minutes observing a quiet, safe spot. Write down what you notice.",
    "category": "wildcard",
    "minutes": 5,
    "place": "either",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "wildcard-15",
    "title": "Mystery Box of Three",
    "description": "Pick three safe household objects and invent one fictional use combining all of them.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-16",
    "title": "The Alternate Ending",
    "description": "Rewrite the ending of a classic public-domain fairy tale in five sentences.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-17",
    "title": "An Unexpected Thank You",
    "description": "Write a thank-you note about a helpful thing someone did recently. Sending it is optional.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-18",
    "title": "The First-Level Quest",
    "description": "Invent the easiest possible mission for a fictional video game hero, then draw its badge.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-19",
    "title": "Make a Micro Playlist",
    "description": "Create a short playlist of songs you already know for an imagined road-trip scene.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-20",
    "title": "Room as a Kingdom",
    "description": "Draw a fantasy map where furniture is terrain and everyday objects become castles.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  }
];
