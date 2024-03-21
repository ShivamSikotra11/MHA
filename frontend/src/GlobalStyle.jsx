import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Irish Grover", system-ui;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
  background-color:#F2FAFF;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

 

h1 {
  font-size: 6rem;
  font-weight: 900;
}

 h2 {
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

 
.testimonial::before {
  content: "";
  position: absolute;
  top: -22%;
  left: 50%; /* Position horizontally centered */
  transform: translate(-50%); /* Center horizontally */
  width: 20rem; /* Diameter of the circle */
  height: 20rem; /* Diameter of the circle */
  background-color: #d9d9d9; /* Circle color */
  border-radius: 50%; /* Make it a circle */
}
.ConditionActive{
  width:30rem;
  height:35rem;
  background-color:#00668C;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adjust the shadow as needed */
  transition: background-color 0.6s ease, box-shadow 0.6s ease;
} 
.ConditionInactive{
  width:25rem;
  height:30rem;
  background-color:#A9E1FF;
} 
.HeaderActive{
  border-radius: 1.2rem;
  background-color: white;
  padding-left: 4px;
  padding-right: 4px;
} 



`;
