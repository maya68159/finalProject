Vue.createApp({
  data() {
    return {
      rating: "",
      ratings: [
        "I've seen better",
        "not bad",
        "Wow! So good",
        "Wow, unmatched",
      ],
      page: 1,
      shelf: [],
      cart: [],
      receipt: {
        theft: [],
        assault: [],
        traffic: [],
        drugs: [],
        clearance: [],
      },
      theftShelf: [],
      assaultShelf: [],
      trafficShelf: [],
      drugsShelf: [],
      clearanceShelf: [],
      stimp: [{},{},{},{}],
      theft: [
        {
          crime_name: "Burglarizing a commercial location",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/angry-rock.png",
          clearance_rate: 0.49,
        },
        {
          crime_name: "Burglarizing a dwelling",
          category: "theft",
          max_penalty: 15000,
          jail_time: 15,
          image: "fpImages/banana.jpg",
          clearance_rate: 0.32,
        },
        {
          crime_name: "Stealing an organ",
          category: "theft",
          max_penalty: 50000,
          jail_time: 5,
          image: "fpImages/bear.png",
          clearance_rate: 0.32,
        },
        {
          crime_name: "Stealing jewelry",
          category: "theft",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/bigBird.png",
          clearance_rate: 0.17,
        },
        {
          crime_name: "Stealing a television",
          category: "theft",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/black-dog.png",
          clearance_rate: 0.17,
        },
        {
          crime_name: "Stealing a bicycle",
          category: "theft",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/bottle.png",
          clearance_rate: 0.17,
        },
        {
          crime_name: "Stealing a couch",
          category: "theft",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/buddy-dogs.png",
          clearance_rate: 0.32,
        },
        {
          crime_name: "Stealing a generator",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/coke.png",
          clearance_rate: 0.32,
        },
        {
          crime_name: "Stealing a bed",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/color-tab.png",
          clearance_rate: 0.32,
        },
        {
          crime_name: "Stealing a car",
          category: "theft",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/confused-dog.png",
          clearance_rate: 0.05,
        },
        {
          crime_name: "Stealing a train",
          category: "theft",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/cool-rock.webp",
          clearance_rate: 0.05,
        },
      ],
      assault: [
        {
          crime_name: "Committing murder",
          category: "assault",
          max_penalty: 10000,
          jail_time: 25,
          image: "fpImages/crystal.png",
          clearance_rate: 0.6,
        },
        {
          crime_name: "Causing bodily injury to an innocent bystander",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/floppy.webp",
          clearance_rate: 0.42,
        },
        {
          crime_name: "Causing serious bodily injury to an innocent bystander",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/flowers.png",
          clearance_rate: 0.42,
        },
        {
          crime_name: "Causing an innocent bystander to lose consciousness",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/fluffy-dog.png",
          clearance_rate: 0.42,
        },
        {
          crime_name: "Causing bodily injury to law enforcement",
          category: "assault",
          max_penalty: 10000,
          jail_time: 25,
          image: "fpImages/full-trash.jpg",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Causing serious bodily injury ot a bystander through arson",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/trask-can.jpg",
          clearance_rate: 0.24,
        },
        {
          crime_name:
            "Causing substantial bodily injury to a bystander through arson",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/turtle-holding-pencil.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Committing arson in a way that endangers human life",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/ghost.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Stalking",
          category: "clearance",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/girl-pencil.png",
          clearance_rate: 0.5,
        },
      ],
      traffic: [
        {
          crime_name: "Driving without a seatbelt",
          category: "traffic",
          max_penalty: 45,
          jail_time: 0,
          image: "fpImages/glasses-rock.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving with an expired drivers license",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/viscious.jpg",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving with no drivers license",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/green-eye-cat.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Avoiding getting pulled over by an officer",
          category: "traffic",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/gray-cat.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Leaving the scene of an accident",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/grouchy-cat.png",
          clearance_rate: 1,
        },
        {
          crime_name: "DUI",
          category: "traffic",
          max_penalty: 1310,
          jail_time: 0.5,
          image: "fpImages/grumpy-rock.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Reckless driving",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/weed.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Unsafe lane travel",
          category: "traffic",
          max_penalty: 200,
          jail_time: 0,
          image: "fpImages/heart-dog.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Not having two working headlights",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0,
          image: "fpImages/jewels.png",
          clearance_rate: 1,
        },
        {
          crime_name: "DUI refusal",
          category: "traffic",
          max_penalty: 500,
          jail_time: 1,
          image: "fpImages/jumpy-pencil.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving with expired registration",
          category: "traffic",
          max_penalty: 750,
          jail_time: 0,
          image: "fpImages/kid-marker.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Going 0-10 MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 140,
          jail_time: 0,
          image: "fpImages/white-dog.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Going 11-19 MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 240,
          jail_time: 0,
          image: "fpImages/winky-dog.webp",
          clearance_rate: 1,
        },
        {
          crime_name: "Going 20+ MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 440,
          jail_time: 0,
          image: "fpImages/marshmallow.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 1-10 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 170,
          jail_time: 0,
          image: "fpImages/max.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 11-15 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 220,
          jail_time: 0,
          image: "fpImages/menacing-rock.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 16-20 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 320,
          jail_time: 0,
          image: "fpImages/milk.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 21-25 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 470,
          jail_time: 0,
          image: "fpImages/notebook.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 26-30 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 670,
          jail_time: 0,
          image: "fpImages/orange-cat.png",
          clearance_rate: 1,
        },
        {
          crime_name:
            "Going 31+ MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 870,
          jail_time: 0,
          image: "fpImages/orange-stripe-cat.png",
          clearance_rate: 1,
        },
      ],
      drugs: [
        {
          crime_name: "Possession of drug paraphernalia",
          category: "drugs",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/peeping-dog.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Sale of drug paraphernalia",
          category: "drugs",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/pencil-2.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Sale of drug paraphernalia to a minor",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/pot.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Selling marijuana",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/pencil.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Possession of marijuana",
          category: "drugs",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/present-cat.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Cultivating marijuana",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/purple-cat-2.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Possession of cocaine",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/raymond.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Selling cocaine",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/purple-cat.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Possession of heroin",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/red-cheek-child.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Selling heroin",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/red-pencil.webp",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Possession of meth",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/reflection-dog.webp",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Selling meth",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/rico.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Possession of MDMA",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/rock.png",
          clearance_rate: 0.44,
        },
        {
          crime_name: "Selling MDMA",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/rocky-rock.png",
          clearance_rate: 0.44,
        },
      ],
      clearance: [
        {
          crime_name: "Throwing stones from a car",
          category: "clearance",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/rottweiler.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Throwing snowballs",
          category: "clearance",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/salt.png",
          clearance_rate: 1,
        },
        {
          crime_name: "throwing bricks onto the road",
          category: "clearance",
          max_penalty: 850,
          jail_time: 0.08,
          image: "fpImages/samone.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving blindfolded",
          category: "clearance",
          max_penalty: 3000,
          jail_time: 1,
          image: "fpImages/scary-pencil.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Arson damages exceeding $5000",
          category: "clearance",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/scary-rock.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Arson damages ranging from  $500 to $1500",
          category: "clearance",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/scissors-pencil.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Arson damages ranging from $1500 to $5000",
          category: "clearance",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/shiny-dogs.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Arson damages under $500",
          category: "clearance",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/skull.png",
          clearance_rate: 0.24,
        },
        {
          crime_name: "Driving a car with tinted windows",
          category: "traffic",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/squall.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving a car without tail lights",
          category: "traffic",
          max_penalty: 40,
          jail_time: 0,
          image: "fpImages/staring-rock.png",
          clearance_rate: 1,
        },
        {
          crime_name: "Driving an unsafe vehicle",
          category: "traffic",
          max_penalty: 240,
          jail_time: 0,
          image: "fpImages/stool-dog.webp",
          clearance_rate: 1,
        },
        {
          crime_name: "Forging a prescription",
          category: "clearance",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/tab.png",
          clearance_rate: 0.05,
        },
      ],
      totalTime: 0,
      totalFine: 0,
    };
  },
  methods: {
    goToPage: function (page) {
      this.page = page;
    },
    addCrime: function (crime) {
      //add crime to cart (in specific category)

      this.cart.push(crime);

      console.log("cart crime name: ", crime.crime_name);

      if (this.cart.length == 10) {
        this.page = 8;
      }
    },
    buildShelf: function (crimes) {
      // consumes a list of crimes and returns a list of 4 lists that evenly divides out the crimes
      const crimeList = [...crimes];
      var total = crimeList.length;
      let perRow = Math.ceil(crimeList.length / 4);
      var rows = [perRow, perRow, perRow, total - perRow * 3];
      var shelves = [];

      for (let row of rows) {
        var rowList = [];
        for (let i = 0; i < row; i++) {
          rowList.push(crimeList[crimeList.length - 1]);
          crimeList.pop();
        }
        shelves.push(rowList);
        rowList = [];
      }
      this.shelf = shelves;
      console.log("shelf: ", this.shelf);
      return shelves;
    },

    clearCart: function () {
      // this.cart = [];
      // console.log("clear cart happened");

      window.location.reload();
    },

    testingForLoops: function () {
      console.log("testingForLoops happened");
      console.log("stimp length: ", this.stimp.length);
      console.log("theft length: ", this.theft.length);
      console.log("drugs: ", this.drugs)
      for (var i = 0; i < this.theft.length; i++) {
        console.log("testingForLoops: ", this.theft[i].crime_name)
      }
    },

    payItem: function (crime) {
      if (this.cart.length != 0) {
        this.totalTime += crime.jail_time;
        this.totalFine += crime.max_penalty;

        if (this.totalFine >= 10000) {
          this.rating = this.ratings[3];
        } else {
          this.rating = this.ratings[0];
        }

        this.receipt[String(crime.category)].push(crime);
        console.log("before cart length: ", this.cart.length);
        this.cart.pop();
        console.log("after cart length: ", this.cart.length);
      }
    },
  },
  created: function () {
    // this.getCrimes()
    this.theftShelf = this.buildShelf(this.theft);
    this.assaultShelf = this.buildShelf(this.assault);
    this.trafficShelf = this.buildShelf(this.traffic);
    this.drugsShelf = this.buildShelf(this.drugs);
    this.clearanceShelf = this.buildShelf(this.clearance);
    this.testingForLoops();
  },
  watch: {
    squimp() {
      if (this.page == 1) {
        this.cart = [];
        console.log("squimp happened");
      }
    },
  },
  computed: {
    // balance() {
    //   return this.receipt.theft.reduce((total, crime) => total + crime.jail_time, 0);
    // },
    // bilince() {
    //   return this.receipt.theft.reduce((tatal, crime) => tatal + crime.jail_time, 0);
    // }
  },
}).mount("#app");

imageMapResize();
