// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Gola";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "ano@gmail.com",
  fullname: {
    userfullname: {
      firstname: "M",
      lastname: "K",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.lastname); // undefined
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = { ...obj1, ...obj2 }; // spread operator will mostly use this only
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "mk@123",
  },
];

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLog'));

const course = {
  coursename: "JavaScript",
  price: "786",
  courseInstructor: "Mustafa",
};

// course.courseInstructor

// const {courseInstructor} = course // destructuring
const { courseInstructor: instructor } = course; // destructuring with short name as an instructor
console.log(instructor);
