/* SIDEQUEST v2: 120 practical, low-pressure ideas, no account required. */
const QUESTS = [
  {
    "id": "adventure-01",
    "title": "Take a Different Route",
    "description": "Walk a familiar, safe route using a different public street or pathway. See what you notice.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-02",
    "title": "Golden Hour Walk",
    "description": "Go for a short walk when the light is nice. Take one photo you genuinely like.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-03",
    "title": "Find a New View",
    "description": "Visit a nearby public lookout, park, or open space you've never stopped at before.",
    "category": "adventure",
    "minutes": 30,
    "place": "outdoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-04",
    "title": "Neighbourhood Photo Walk",
    "description": "Take five photos that capture what your neighbourhood actually feels like.",
    "category": "adventure",
    "minutes": 30,
    "place": "outdoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-05",
    "title": "Check Out a Local Park",
    "description": "Spend a little time in a park you rarely visit. No agenda needed.",
    "category": "adventure",
    "minutes": 30,
    "place": "outdoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-06",
    "title": "Explore a Library",
    "description": "Browse a library section you usually walk past and pick up something interesting.",
    "category": "adventure",
    "minutes": 30,
    "place": "indoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-07",
    "title": "Visit a Free Exhibition",
    "description": "Look for a free local exhibit or public art display and check it out if one is nearby.",
    "category": "adventure",
    "minutes": 60,
    "place": "either",
    "company": "either",
    "xp": 85
  },
  {
    "id": "adventure-08",
    "title": "Find a Good Reading Spot",
    "description": "Try a different comfortable spot at home or in a public library to read or relax.",
    "category": "adventure",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "adventure-09",
    "title": "A No-Headphones Walk",
    "description": "Take a short walk on a safe familiar route without music and notice what stands out.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "adventure-10",
    "title": "Take the Scenic Way",
    "description": "On a trip you're already taking, choose a safe public route with a nicer view.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-11",
    "title": "Photograph Architecture",
    "description": "Pick a building you like from a public sidewalk and capture three interesting angles.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-12",
    "title": "Find Street Art",
    "description": "Take a walk in a familiar public area and photograph a mural or public artwork you like.",
    "category": "adventure",
    "minutes": 30,
    "place": "outdoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-13",
    "title": "Go Somewhere Green",
    "description": "Spend a little time in a nearby public green space, even if it's just a few minutes.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-14",
    "title": "Discover a Quiet Corner",
    "description": "Look for a peaceful spot in a public park or library you haven't tried yet.",
    "category": "adventure",
    "minutes": 20,
    "place": "either",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-15",
    "title": "Take a Sunset Photo",
    "description": "If the timing works, photograph the sky from a safe public spot or your window.",
    "category": "adventure",
    "minutes": 15,
    "place": "either",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-16",
    "title": "Revisit a Favourite Place",
    "description": "Return to somewhere you like and see whether it feels different today.",
    "category": "adventure",
    "minutes": 30,
    "place": "either",
    "company": "either",
    "xp": 60
  },
  {
    "id": "adventure-17",
    "title": "Try a Public Walking Trail",
    "description": "Choose an easy familiar or clearly marked trail suited to the weather and daylight.",
    "category": "adventure",
    "minutes": 60,
    "place": "outdoor",
    "company": "either",
    "xp": 85
  },
  {
    "id": "adventure-18",
    "title": "Make a Mini Photo Series",
    "description": "While out on a normal errand, photograph three details connected by a theme.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "adventure-19",
    "title": "Explore Your Campus",
    "description": "Walk through a public area of campus you haven't paid much attention to.",
    "category": "adventure",
    "minutes": 15,
    "place": "outdoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "adventure-20",
    "title": "Find One Interesting Shop Window",
    "description": "Walk along a familiar shopping street and notice one window display or design you like.",
    "category": "adventure",
    "minutes": 20,
    "place": "outdoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "creative-01",
    "title": "Edit One Favourite Photo",
    "description": "Choose an existing photo and try a new crop or color grade. Save both versions.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-02",
    "title": "Make a 20-Second Video",
    "description": "Film and edit a short video about something you're actually interested in today.",
    "category": "creative",
    "minutes": 30,
    "place": "either",
    "company": "solo",
    "xp": 60
  },
  {
    "id": "creative-03",
    "title": "Create a Phone Wallpaper",
    "description": "Turn one of your own photographs into a clean wallpaper that fits your phone.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-04",
    "title": "Plan a Photo Shoot",
    "description": "Pick a theme, location, and three shots you'd like to capture next time.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-05",
    "title": "Test Natural Lighting",
    "description": "Take the same photo near a window from three angles and compare the results.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-06",
    "title": "Make a Short Photo Carousel",
    "description": "Choose four or five photos that look good together and arrange them in order.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-07",
    "title": "Try Black and White",
    "description": "Edit a photo in monochrome, focusing on contrast, texture, and composition.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-08",
    "title": "Write a Video Concept",
    "description": "Jot down a simple idea for a video you'd actually want to film.",
    "category": "creative",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-09",
    "title": "Make a Moodboard",
    "description": "Collect a few images, colors, or references for a project you have in mind.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-10",
    "title": "Record a Simple Voiceover",
    "description": "Write and record a short voiceover for a clip or documentary idea.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-11",
    "title": "Redesign an Old Poster",
    "description": "Take a poster you've made and experiment with a cleaner layout or typography.",
    "category": "creative",
    "minutes": 30,
    "place": "indoor",
    "company": "solo",
    "xp": 60
  },
  {
    "id": "creative-12",
    "title": "Learn One Editing Trick",
    "description": "Try a single new feature in your favorite photo or video editing app.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-13",
    "title": "Pick a Photo Theme",
    "description": "Choose a theme like reflections or shadows and plan three pictures around it.",
    "category": "creative",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "creative-14",
    "title": "Film a Calm B-Roll Sequence",
    "description": "Record three steady shots of a familiar place and put them together.",
    "category": "creative",
    "minutes": 20,
    "place": "either",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-15",
    "title": "Make a Cover Image",
    "description": "Design a simple cover for a playlist, video, or imaginary personal project.",
    "category": "creative",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "creative-16",
    "title": "Write Five Interview Questions",
    "description": "Create five thoughtful questions for someone you'd like to interview one day.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-17",
    "title": "Sort Your Best Photos",
    "description": "Pick your ten favorite pictures from the past month and put them in one album.",
    "category": "creative",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-18",
    "title": "Try a New Camera Setting",
    "description": "On your camera or phone, experiment with one setting in a safe, familiar place.",
    "category": "creative",
    "minutes": 15,
    "place": "either",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "creative-19",
    "title": "Create a Tiny Zine Page",
    "description": "Combine one photo with a short paragraph about a place, memory, or idea.",
    "category": "creative",
    "minutes": 30,
    "place": "indoor",
    "company": "solo",
    "xp": 60
  },
  {
    "id": "creative-20",
    "title": "Make a Personal Project Logo",
    "description": "Sketch or design a simple wordmark for an idea you've had recently.",
    "category": "creative",
    "minutes": 30,
    "place": "indoor",
    "company": "solo",
    "xp": 60
  },
  {
    "id": "social-01",
    "title": "Send a Catch-Up Message",
    "description": "Message a friend you haven't talked to recently just to see how they're doing.",
    "category": "social",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "social-02",
    "title": "Make Plans for This Week",
    "description": "Ask a friend whether they want to hang out sometime this week.",
    "category": "social",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "social-03",
    "title": "Pick a Movie Together",
    "description": "Choose a film with a friend using a short list of three options.",
    "category": "social",
    "minutes": 10,
    "place": "indoor",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-04",
    "title": "Two-Person Photo Walk",
    "description": "Go on a short walk together and each take a photo of the same scene.",
    "category": "social",
    "minutes": 30,
    "place": "outdoor",
    "company": "friends",
    "xp": 60
  },
  {
    "id": "social-05",
    "title": "Share a Favorite Song",
    "description": "Trade one song recommendation with a friend and explain why you picked it.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-06",
    "title": "Plan an Easy Hangout",
    "description": "Come up with a simple free activity to do with friends and suggest a time.",
    "category": "social",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "social-07",
    "title": "Take Better Group Photos",
    "description": "With everyone's permission, try getting one group photo you all actually like.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-08",
    "title": "Recommend a Good Film",
    "description": "Tell a friend about a movie you liked and ask for their recommendation.",
    "category": "social",
    "minutes": 5,
    "place": "either",
    "company": "friends",
    "xp": 15
  },
  {
    "id": "social-09",
    "title": "Make a Shared Playlist",
    "description": "Add five songs each to a playlist for the next time you hang out.",
    "category": "social",
    "minutes": 15,
    "place": "indoor",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-10",
    "title": "Have a Proper Catch-Up",
    "description": "Spend ten minutes listening and chatting with a friend without multitasking.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-11",
    "title": "Try a Board or Card Game",
    "description": "Play a quick game with a friend using something you already own.",
    "category": "social",
    "minutes": 30,
    "place": "indoor",
    "company": "friends",
    "xp": 60
  },
  {
    "id": "social-12",
    "title": "Plan a Weekend Walk",
    "description": "Pick a public spot nearby that you and a friend could explore together.",
    "category": "social",
    "minutes": 10,
    "place": "indoor",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-13",
    "title": "Exchange Photo Picks",
    "description": "Each choose a favorite recent photo and explain what you like about it.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-14",
    "title": "Do a Mini Movie Review",
    "description": "Watch a short video or trailer together and discuss whether you'd see the film.",
    "category": "social",
    "minutes": 10,
    "place": "indoor",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-15",
    "title": "Browse Old Memories",
    "description": "Look through a few shared photos with friends and revisit a nice memory.",
    "category": "social",
    "minutes": 15,
    "place": "indoor",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-16",
    "title": "Try a New Co-Op Game",
    "description": "Play something you already own with a friend, online or in person.",
    "category": "social",
    "minutes": 30,
    "place": "indoor",
    "company": "friends",
    "xp": 60
  },
  {
    "id": "social-17",
    "title": "Talk About Future Plans",
    "description": "Ask a friend what they'd love to learn, make, or do in the next year.",
    "category": "social",
    "minutes": 15,
    "place": "either",
    "company": "friends",
    "xp": 35
  },
  {
    "id": "social-18",
    "title": "Choose the Next Group Activity",
    "description": "Ask friends to vote between three realistic hangout ideas.",
    "category": "social",
    "minutes": 10,
    "place": "either",
    "company": "friends",
    "xp": 25
  },
  {
    "id": "social-19",
    "title": "Start a Photo Album Together",
    "description": "Make a shared album for an event or trip, with everyone's permission.",
    "category": "social",
    "minutes": 20,
    "place": "indoor",
    "company": "friends",
    "xp": 45
  },
  {
    "id": "social-20",
    "title": "Cook Something Simple Together",
    "description": "Make a basic snack or meal using ingredients you already have.",
    "category": "social",
    "minutes": 30,
    "place": "indoor",
    "company": "friends",
    "xp": 60
  },
  {
    "id": "chaos-01",
    "title": "Find a New Favorite Song",
    "description": "Listen to three songs from an artist you don't know well. Save the best one.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "chaos-02",
    "title": "Watch a Short Film",
    "description": "Find a short film and watch it without scrolling through your phone.",
    "category": "chaos",
    "minutes": 20,
    "place": "indoor",
    "company": "either",
    "xp": 45
  },
  {
    "id": "chaos-03",
    "title": "Rewatch an Old Favorite",
    "description": "Revisit one scene from a movie or show you used to love.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "chaos-04",
    "title": "Make a Rainy-Day Playlist",
    "description": "Choose eight songs for a specific mood or kind of day.",
    "category": "chaos",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "chaos-05",
    "title": "Try a Different Snack Combo",
    "description": "Make a snack from things already in the kitchen. Keep it simple.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "chaos-06",
    "title": "Play a Quick Round",
    "description": "Play one short round of a game you enjoy, without turning it into an all-night session.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "chaos-07",
    "title": "Watch a Music Video",
    "description": "Pick a song and watch its official music video with attention to the visuals.",
    "category": "chaos",
    "minutes": 5,
    "place": "indoor",
    "company": "either",
    "xp": 15
  },
  {
    "id": "chaos-08",
    "title": "Find a New YouTube Channel",
    "description": "Explore a short video from a creator who makes something you enjoy.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "chaos-09",
    "title": "Create a Mini Movie List",
    "description": "Choose three movies you'd like to watch and save them for later.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-10",
    "title": "Revisit an Old Playlist",
    "description": "Find a playlist you haven't heard in a while and listen to a few songs.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "chaos-11",
    "title": "Read an Interesting Article",
    "description": "Pick an article on a topic you genuinely care about and finish it.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "chaos-12",
    "title": "Have a Screen-Free Break",
    "description": "Put your phone aside for ten minutes and do something you find relaxing.",
    "category": "chaos",
    "minutes": 10,
    "place": "either",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-13",
    "title": "Take a Casual Photo",
    "description": "Capture a moment you like without worrying about making it perfect.",
    "category": "chaos",
    "minutes": 5,
    "place": "either",
    "company": "either",
    "xp": 15
  },
  {
    "id": "chaos-14",
    "title": "Make a Three-Song Queue",
    "description": "Choose three songs that sound great played back-to-back.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-15",
    "title": "Find a New Podcast Episode",
    "description": "Look for an episode on history, culture, science, or a topic you're curious about.",
    "category": "chaos",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "chaos-16",
    "title": "Watch a Comedy Clip",
    "description": "Put on a favorite comedian or creator for a quick laugh.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "either",
    "xp": 25
  },
  {
    "id": "chaos-17",
    "title": "Pick Tonight's Soundtrack",
    "description": "Make a short playlist to match your afternoon or evening.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-18",
    "title": "Play a Classic Game",
    "description": "Try a familiar quick puzzle or game, like Tetris or a word game.",
    "category": "chaos",
    "minutes": 15,
    "place": "indoor",
    "company": "either",
    "xp": 35
  },
  {
    "id": "chaos-19",
    "title": "Revisit a Saved Video",
    "description": "Open a video you saved months ago and finally watch it.",
    "category": "chaos",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "chaos-20",
    "title": "Do Nothing for Five Minutes",
    "description": "Sit somewhere comfortable without a task. Let the boredom pass on its own.",
    "category": "chaos",
    "minutes": 5,
    "place": "either",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "mind-01",
    "title": "One Interesting Science Topic",
    "description": "Read a short explanation of a physics or science concept you've wondered about.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-02",
    "title": "A Philosophy Question",
    "description": "Pick one question about identity, justice, or happiness and write your current answer.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-03",
    "title": "Learn a Camera Term",
    "description": "Look up one camera concept like aperture, dynamic range, or focal length.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-04",
    "title": "Discover a Historical Story",
    "description": "Read about a small historical event you've never heard of before.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-05",
    "title": "Learn a Useful Shortcut",
    "description": "Find one keyboard or phone shortcut and try using it today.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-06",
    "title": "Research an Interesting Place",
    "description": "Read a little about a destination you might like to visit someday.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-07",
    "title": "Explore a Design Choice",
    "description": "Choose an app or poster you like and notice what makes its design work.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-08",
    "title": "Find a Documentary",
    "description": "Save a documentary on a subject you care about for a future watch.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-09",
    "title": "Learn a New French or English Word",
    "description": "Find a useful word you rarely use and write a sentence with it.",
    "category": "mind",
    "minutes": 5,
    "place": "indoor",
    "company": "solo",
    "xp": 15
  },
  {
    "id": "mind-10",
    "title": "Understand One Investing Term",
    "description": "Learn what an index fund, dividend, or ETF means using an educational source.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-11",
    "title": "Try a Logic Puzzle",
    "description": "Solve a short puzzle, taking your time rather than chasing a score.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-12",
    "title": "Explore a Photography Style",
    "description": "Read about a photographer or style that interests you and save one reference.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-13",
    "title": "Watch an Educational Video",
    "description": "Pick a short video that teaches you something you've been curious about.",
    "category": "mind",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "mind-14",
    "title": "Learn a New Recipe",
    "description": "Read a simple recipe for something you could make with familiar ingredients.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-15",
    "title": "Think About Your Next Project",
    "description": "Write down one project idea and the smallest first step you could take.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-16",
    "title": "Read About a Local Landmark",
    "description": "Learn a little about a building, park, or place in your area.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-17",
    "title": "Ask a Better Question",
    "description": "Take a topic you know a little about and write three deeper questions about it.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-18",
    "title": "Explore an Album's Story",
    "description": "Read about the background of an album or artist you enjoy.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "mind-19",
    "title": "Compare Two Design Styles",
    "description": "Find two visual styles you like and write down one thing each does well.",
    "category": "mind",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "mind-20",
    "title": "Read a Few Pages",
    "description": "Pick up a book or essay you've been meaning to start and read for fifteen minutes.",
    "category": "mind",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-01",
    "title": "Refresh Your Home Screen",
    "description": "Rearrange apps or widgets to make your phone feel cleaner and easier to use.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-02",
    "title": "Make a Small Weekend Plan",
    "description": "Pick one genuinely enjoyable thing you could do this weekend.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-03",
    "title": "Try a Simple New Recipe",
    "description": "Make a familiar, low-effort snack or meal with ingredients already available.",
    "category": "wildcard",
    "minutes": 30,
    "place": "indoor",
    "company": "either",
    "xp": 60
  },
  {
    "id": "wildcard-04",
    "title": "Clean Up Your Camera Roll",
    "description": "Delete obvious duplicates and favorite five photos you want to keep.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-05",
    "title": "Create an Ideas List",
    "description": "Write down five things you might want to make, see, or learn someday.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-06",
    "title": "Fix a Tiny Annoyance",
    "description": "Choose one small non-hazardous thing you can organize or tidy in ten minutes.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-07",
    "title": "Improve a Digital Project",
    "description": "Spend fifteen minutes polishing a webpage, slide, or design you're working on.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-08",
    "title": "Make a Free Local To-Do List",
    "description": "List three interesting free places or activities near you for future bored days.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-09",
    "title": "Plan a Mini Photo Series",
    "description": "Choose a theme and decide where you could capture five photos soon.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-10",
    "title": "Choose a New Skill",
    "description": "Pick a skill you'd like to improve and find one short beginner lesson.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-11",
    "title": "Make a Personal Inspiration Folder",
    "description": "Collect a few photos, designs, or ideas that genuinely inspire you.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-12",
    "title": "Try a Different Study Spot",
    "description": "Move to a comfortable, suitable place and work on something interesting for a while.",
    "category": "wildcard",
    "minutes": 20,
    "place": "either",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-13",
    "title": "Write a Tiny Review",
    "description": "Write five honest sentences about a book, movie, game, or place you liked.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-14",
    "title": "Design a Better Routine",
    "description": "Choose one small part of your day that could be more enjoyable and make a realistic change.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  },
  {
    "id": "wildcard-15",
    "title": "Organize a Future Hangout",
    "description": "Draft a simple plan for a low-cost meetup and share it only if you want.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-16",
    "title": "Learn One New Editing Tool",
    "description": "Open a creative app you already use and test a feature you've ignored.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-17",
    "title": "Make Something for a Friend",
    "description": "Create a small digital card, playlist, or photo edit as a thoughtful surprise.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-18",
    "title": "Revisit an Unfinished Idea",
    "description": "Open an old creative project and make one small improvement.",
    "category": "wildcard",
    "minutes": 20,
    "place": "indoor",
    "company": "solo",
    "xp": 45
  },
  {
    "id": "wildcard-19",
    "title": "Plan a Short Local Outing",
    "description": "Check a familiar public destination, opening hours, and a comfortable route for another day.",
    "category": "wildcard",
    "minutes": 15,
    "place": "indoor",
    "company": "solo",
    "xp": 35
  },
  {
    "id": "wildcard-20",
    "title": "Make Your Next Day Easier",
    "description": "Prepare a few things for tomorrow so you'll have more free time later.",
    "category": "wildcard",
    "minutes": 10,
    "place": "indoor",
    "company": "solo",
    "xp": 25
  }
];
