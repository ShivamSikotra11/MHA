// import React from "react";
// import styled from "styled-components";
// import ShowPost from "./components/Interaction/ShowPost";
// import UserStats from "./components/Interaction/UserStats";
// import UserForum from "./components/Interaction/UserForum";
// import { usePostContext } from "./store/PostContext";

// const Interaction = () => {
//   const { createPost } = usePostContext();
//   return (
//     <Wrapper className="">
//       <div className="img-container flex items-center justify-center text-[6rem] text-primary_dark ">
//         <div className="content capitalize font-inter">
//           Interact with other user
//         </div>
//       </div>
//       <div className="grid grid-cols-6 p-4 ">
//         <div className="p-8 col-span-4   ">
//           <UserStats />
//           <UserForum />
//         </div>
//         <div className="col-span-2   p-8">
//           <ShowPost />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };
// const Wrapper = styled.section`
//   .img-container {
//     background: url("hills.jpg");
//     // width: 100%;
//     height: 20vh;
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//   }
// `;

// export default Interaction;
// import React from "react";
// import styled from "styled-components";
// import ShowPost from "./components/Interaction/ShowPost";
// import UserStats from "./components/Interaction/UserStats";
// import UserForum from "./components/Interaction/UserForum";
// import { usePostContext } from "./store/PostContext";

// const Interaction = () => {
//   const { createPost } = usePostContext();
//   return (
//     <Wrapper className="">
//       <div className="img-container flex items-center justify-center text-[6rem] text-primary_dark ">
//         <div className="content capitalize font-inter">
//           Interact with other user
//         </div>
//       </div>
//       <div className="grid grid-cols-6 p-4 ">
//         <div className="p-8 col-span-4   ">
//           <UserStats />
//           <UserForum />
//         </div>
//         <div className="col-span-2   p-8">
//           <ShowPost />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };
// const Wrapper = styled.section`
//   .img-container {
//     background: url("hills.jpg");
//     // width: 100%;
//     height: 20vh;
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//   }
// `;

// export default Interaction;

import React from "react";
import styled from "styled-components";
import ShowPost from "../components/Interaction/ShowPost";
import UserStats from "../components/Interaction/UserStats";
import UserForum from "../components/Interaction/UserForum";
import CreatePost from "../components/Interaction/CreatePost"; // Import the CreatePost component
import { usePostContext } from "../store/PostContext";
import Header from "../components/Header";
import Toast from "../components/Toast";

const Interaction = () => {
  const { createPost } = usePostContext();

  return (
    <Wrapper className={createPost ? "overflow-hidden h-[100vh]" : ""}>
      <Header />
      <Toast/>
      <div className="img-container flex items-center justify-center  text-primary_dark ">
        <div className="content capitalize font-inter text-center text-[5.4rem] max-[900px]:text-[4.7rem] max-[763px]:text-[4rem] max-[655px]:text-[3rem] ">
        Interact With other
        </div>
      </div>
      
      <div className="grid grid-cols-6 p-4  max-[700px]:grid-cols-1">
        <div className="p-8 col-span-4   ">
          <UserStats />
          <UserForum />
        </div>
        <div className="col-span-2  p-8 ">
          <ShowPost />
        </div>
      </div>

      {/* Conditionally render the overlay and CreatePost component */}
      {createPost && (
        <Overlay>
          <div className="cp-box">
            <CreatePost />
          </div>
        </Overlay>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .img-container {
    background: url("hills.jpg");
    // width: 100%;
    height: 16vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black with opacity 50% */
  z-index: 999;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */

  .cp-box {
    transform: scale(0);
    z-index: 3;
  }
  .cp-box {
    animation: anim-cp 0.5s ease-in-out 1;
    transform: scale(1);
    transition: 0.5s;
  }
  @keyframes anim-cp {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Interaction;
