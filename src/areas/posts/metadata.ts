import PostModel from "./models/post";

const posts: PostModel[] = [
  {
    urlId: "avr-programming-macos",
    title: "AVR programming on MacOS",
    date: new Date(2021, 5, 4),
  },
  {
    urlId: "dfunc",
    title: "dFunc - making a functional programming language",
    date: new Date(2023, 5, 27),
  },
  {
    urlId: "compile-and-link-raylib-windows",
    title: "[Windows] Compiling and adding raylib to Visual Studio 2022 project",
    date: new Date(2022, 12, 22)
  }
];

export default posts;
