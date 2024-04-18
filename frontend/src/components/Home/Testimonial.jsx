// import React from "react";
// import styled from "styled-components";

// const Testimonial = () => {
//   return (
//     <Wrapper>
//       <div className="w-[45rem] h-[45rem] bg-primary_light rounded-[3rem] relative testimonial"></div>
//     </Wrapper>
//   );
// };
// const Wrapper = styled.section`
//   .testimonial::before {
//     content: "";
//     position: absolute;
//     top: -22%;
//     left: 50%; /* Position horizontally centered */
//     transform: translate(-50%); /* Center horizontally */
//     width: 20rem; /* Diameter of the circle */
//     height: 20rem; /* Diameter of the circle */
//     background-color: #d9d9d9; /* Circle color */
//     border-radius: 50%; /* Make it a circle */
//   }
// `;
// export default Testimonial;

import React from "react";
import styled from "styled-components";

const Testimonial = ({data}) => {
  return (
    <Wrapper imageUrl={data.image}>
      <div className="w-[45rem] h-[43rem] bg-primary_light rounded-[3rem] relative testimonial pt-[14rem] px-[2rem] pb-[2rem] ">
        {/* <div className="circle  ">
          <img src={data.image} className="object-cover rounded-full" alt="" />
        </div> */}
        {/* <svg height="35px" className="border " fill="#00668C" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 32 32" xml:space="preserve">
                  <g>
                    <g id="right_x5F_quote">
                      <g>
                        <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
                        <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
                      </g>
                    </g>
                  </g>
        </svg> */}
        
        <div className="  flex flex-col justify-between h-full  p-4 ">
        
          <p className="text-4xl text-justify " >{data.text}</p>
          <div className="">
            <p className="text-3xl   font-semibold" >{data.name }</p>
            <p className="text-3xl  " >{data.designation }</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .testimonial {
    // clip-path: circle(32% at 49% 0);
  }
  // .circle {
  //   border-radius: 50%;
  //   // border:10px solid red;
  //   position: absolute;
  //   top: -50%;
  //   left: 50%;
  //   transform: translate(-50%, 50%);
  //   width: 20rem; /* Diameter of the circle */
  //   height: 20rem; /* Diameter of the circle */
  //   border-radius: 50%; /* Make it a circle */
     
    
  // }
    .testimonial::before {
      content: "";
      position: absolute;
      top: -22%;
      left: 50%; /* Position horizontally centered */
      transform: translate(-50%); /* Center horizontally */
      width: 20rem; /* Diameter of the circle */
      height: 20rem; /* Diameter of the circle */
      background-color: transparent; /* Circle color */
      border-radius: 50%; /* Make it a circle */
      background-image: url(${(props) =>props.imageUrl}); /* Image URL from prop */
      background-size: cover; /* Cover the entire circle */
      background-position: center; /* Center the image */
    }
`;

export default Testimonial;
