// https://youtu.be/6M9aZzm-kEc?si=OjBH82xcoDtoObDs - See this video for more information

const routes = {
  home: "/",
  about: "/about",
  contact: "/contact"
} as const;
// make every property readonly

const goToRoute = (route: '/' | 'about' | 'contact') => {
  console.log('You are going to',route);
}

goToRoute(routes.home); /* if we not make it `as const`, we will get an error, Argument of type 'string' is not assignable to parameter of
type '"/" | "about" | "contact"',coz ts will not know that routes properties are only these three, it may thought those props values can be change */

// if we try to pass a string that is not a key of the routes object, we will get an error
// goToRoute("notARoute"); // Error: "notARoute" is not assignable to parameter of type '"home" | "about" | "contact"'.

// Object.freeze() can also be used to do same work, but difference is Object.freeze() will only make top level properties readonly, not the nested ones unlike `as const`

// More DRY

//           ({ readonly home: "/"; readonly about: "/about"; readonly contact: "/contact";})["about" | "contact" | "home"]
type Route = (typeof routes)[keyof typeof routes];

const goToRoute2 = (route: Route) => {
  console.log('You are going to',route);
}

goToRoute2('/contact'); // no error, and see it gives us autocompletion for the params here also