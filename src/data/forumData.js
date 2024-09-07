const forumData = [
    {
      id: 1,
      name: "Public transportation",
      forums: [
        {
          id: 1,
          title: "Subway",
          description: "Subway trains and stations during budy hours and days can be a very dangerous place. It would be nice to encourage active communication between people to avoid injury.",
          image: "/assets/elevator_danger1.jpg",
          posts: 3,
          topics: 1,
          recentTopics: [
            {
              id: 1,
              title: "Someone stepped on my foot and don't say sorry 😡",
              author: "QuantumEcho",
              date: "4 weeks ago"
            },
            {
                id: 2,
                title: "Someone scratched me I bleeded in subway train 🤯",
                author: "UrbanVoyager",
                date: "4 weeks ago"
            },
            {
                id: 3,
                title: "I'm tired of people pushing and not being sorry",
                author: "UrbanVoyager",
                date: "4 weeks ago"
            }
          ]
        },
        {
            id: 2,
            title: "Bus",
            description: "Inside the bus and bus stops can turn chaotic during rush hours. Share experiences and voice your thoughts on how to travel safer with bus.",
            image: "https://d31nhj1t453igc.cloudfront.net/cloudinary/2022/Apr/08/bcSgGPytiozmUbDPPiCu.jpg",
            posts: 3,
            topics: 1,
            recentTopics: [
              {
                id: 1,
                title: "... 😡",
                author: "QuantumEcho",
                date: "4 weeks ago"
              },
              {
                  id: 2,
                  title: "... 🤯",
                  author: "UrbanVoyager",
                  date: "4 weeks ago"
              },
              {
                  id: 3,
                  title: "... ",
                  author: "UrbanVoyager",
                  date: "4 weeks ago"
              }
            ]
          },
      ]
    },
    {
        id: 2,
        name: "Personal mobility vehicles",
        forums: [
          {
            id: 1,
            title: "Bicycle",
            description: "Riders, signal your presence, sinal your way!",
            image: "https://bicyclenetwork.com.au/wp-content/uploads/2018/12/pedestrians-and-bikes-feature-1.png",
            posts: 3,
            topics: 1,
            recentTopics: [
              {
                id: 1,
                title: "I got almost run over by a fat bike 🤯",
                author: "NeonPioneer",
                date: "4 weeks ago"
              }
            ]
          },
          {
            id: 2,
            title: "E-scooters",
            description: "Riders, signal your presence, sinal your way!",
            image: "https://image.kmib.co.kr/online_image/2019/0518/611220150013323951_1.jpg",
            posts: 3,
            topics: 1,
            recentTopics: [
              {
                id: 1,
                title: "I can see people are scared when I go around town with my e-scooter. 🛴",
                author: "NeonPioneer",
                date: "4 weeks ago"
              }
            ]
          },
          // More forums...
        ]
      },

      {
        id: 3,
        name: "Cars",
        forums: [
          {
            id: 1,
            title: "Cars",
            description: "It's time to call it quits to reckless driving. Make the roads and streets safer place to walk.",
            posts: 3,
            topics: 1,
            recentTopics: [
              {
                id: 1,
                title: "recent topic title",
                author: "StellarWanderer",
                date: "4 weeks ago"
              }
            ]
          },
          {
            id: 2,
            title: "Motorcycles",
            description: "Time to bring chaneges to motorcycle driving culture and safety.",
            posts: 3,
            topics: 1,
            recentTopics: [
              {
                id: 1,
                title: "recent topic title",
                author: "StellarWanderer",
                date: "4 weeks ago"
              }
            ]
          },
        ]
      },
    ];
  
  export default forumData;