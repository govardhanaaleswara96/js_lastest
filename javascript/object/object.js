// object
var book1 = {
  title: "i am indian",
  author: "Gova",
  date: 2020,
  getSummary: function() {
    return `${this.title} was written by ${this.author} in year of ${this.date}`;
  }
};

// console.log(book1);
// console.log(book1.getSummary());
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// constructor
function Development(clientSide, serverSide, webFrame, dbSide) {
  this.clientSide = clientSide;
  this.serverSide = serverSide;
  this.webFrame = webFrame;
  this.dbSide = dbSide;
  this.getSummary = function() {
    return `This Webpage Used To Design ${this.clientSide},${this.serverSide},${this.webFrame},${this.dbSide}`;
  };
}

var mean = new Development("Angular", "Node Js", "Express Js", "Mongo Db");
var mern = new Development("React js", "Node Js", "Express Js", "Mongo Db");

// console.log(mern.getSummary());
// console.log(mean.getSummary());

// prototypes
function Development(clientSide, serverSide, webFrame, dbSide, year) {
  this.clientSide = clientSide;
  this.serverSide = serverSide;
  this.webFrame = webFrame;
  this.dbSide = dbSide;
  this.year = year;
}

// getSummary
Development.prototype.getSummary = function() {
  return `This Webpage Used To Design ${this.clientSide},${this.serverSide},${this.webFrame},${this.dbSide}`;
};

// getAge
Development.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `this page is ${years} old`;
};

// Upgraded
Development.prototype.upGraded = function(newYear) {
  this.year = newYear;
  this.upGraded = true;
};
var mean = new Development(
  "Angular",
  "Node Js",
  "Express Js",
  "Mongo Db",
  2014
);
var mern = new Development(
  "React js",
  "Node Js",
  "Express Js",
  "Mongo Db",
  2018
);

//console.log(mern.getSummary());
// console.log(mern.getAge());
mern.upGraded(2020);
console.log(mern);
