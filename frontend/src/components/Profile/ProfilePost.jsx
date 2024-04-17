// import React from "react";
// import { useMainContext } from "../../store/MainContext";

// const ProfilePost = ({ post, isExpanded, onPostClick }) => {
//   const { deleteUserPost } = useMainContext();

//   return (
//     <div className="bg-primary_light border flex flex-col p-4 cursor-pointer rounded-lg border-primary_dark space-y-4 " onClick={onPostClick}>

//       <div className="flex justify-between ">
//         <div className="text-black text-4xl font-inter font-semibold mb-2 ">
//           {post.heading}
//         </div>

//         <div
//           className="font-inter text-4xl px-7 rounded-full text-white cursor-pointer bg-[#ff2828]"
//           onClick={() => deleteUserPost(post.timestamp)}
//         >
//           Remove
//         </div>
//       </div>
      
//       <div className={`text-black text-2xl text-justify transition-all ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
//         {post.content}
//       </div>

//     </div>
//   );
// };

// export default ProfilePost;

// import React, { useState, useRef, useEffect } from "react";
// import { useMainContext } from "../../store/MainContext";
// import styled from "styled-components";

// const ProfilePost = ({ post, isExpanded, onPostClick }) => {
//   const { deleteUserPost } = useMainContext();
//   const [contentHeight, setContentHeight] = useState("100px");
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       setContentHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : "100px");
//     }
//   }, [isExpanded]);

//   return (
//     <Wrapper 
//       className="bg-primary_light border flex flex-col p-4 cursor-pointer rounded-lg border-primary_dark space-y-4 "
//       onClick={onPostClick}
//       style={{ height: contentHeight }}
//     >
//       <div className="flex justify-between ">
//         <div className="text-black text-4xl font-inter font-semibold mb-2 ">
//           {post.heading}
//         </div>
//         <div
//           className="font-inter text-[2rem] px-7 rounded-full text-white cursor-pointer bg-[#ff2828]"
//           onClick={() => deleteUserPost(post.timestamp)}
//         >
//           Remove
//         </div>
//       </div>
//       <div
//         ref={contentRef}
//         className={`text-black text-2xl text-justify overflow-hidden`}
//       >
//         <div className={isExpanded ? 'line-clamp-none' : 'line-clamp-2'}>
//           {post.content}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   transition: height 0.5s ease-in-out;

//   .line-clamp-2 {
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: 2;
//     overflow: hidden;
//   }

//   .line-clamp-none {
//     display: block;
//   }
// `;

// export default ProfilePost;


import React from "react";
import { useMainContext } from "../../store/MainContext";
import styled from "styled-components";

const ProfilePost = ({ post, isExpanded, onPostClick }) => {
  const { deleteUserPost } = useMainContext();

  return (
    <Wrapper className="bg-primary_light border flex flex-col p-4 cursor-pointer rounded-lg border-primary_dark space-y-4 " onClick={onPostClick}>

      <div className="flex justify-between ">
        <div className="text-black text-4xl font-inter font-semibold mb-2 ">
          {post.heading}
        </div>

        <div
          className="font-inter text-[2rem] px-7 rounded-full text-white cursor-pointer bg-[#ff2828]"
          onClick={() => deleteUserPost(post.timestamp)}
        >
          Remove
        </div>
      </div>
      
      <div className={`text-black text-2xl text-justify overflow-hidden transition-max-height ${isExpanded ? 'max-h-[1000px]' : 'max-h-[100px]'}`}>
        <div className={isExpanded ? 'line-clamp-none' : 'line-clamp-2'}>
          {post.content}
        </div>
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
.transition-max-height {
  transition-property: max-height;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}

.max-h-[100px] {
  max-height: 100px;
}

.max-h-[1000px] {
  max-height: 1000px;
}


`;

export default ProfilePost;
