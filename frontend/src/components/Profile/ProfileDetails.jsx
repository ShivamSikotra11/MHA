import React, { useEffect } from "react";
import styled from "styled-components";
import ButtonDiv from "../ButtonDiv";
import { useMainContext } from "../../store/MainContext"; 

const ProfileDetails = () => {
  const { formData, setFormData, getProfileData, updateProfileData } = useMainContext();

  useEffect(() => {
    getProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // useEffect(() => {
  //   const ips = document.querySelectorAll(".input");
  //   ips.forEach((ip) => {
  //     ip.addEventListener("focus", (e) => {
  //       e.target.parentNode.classList.add("focus");
  //     });

  //     if (ip.value !== "") {
  //       ip.parentNode.classList.add("focus");
  //     }

  //     ip.addEventListener("blur", (e) => {
  //       if (e.target.value === "") {
  //         e.target.parentNode.classList.remove("focus");
  //       }
  //     });

  //     ip.addEventListener("input", (e) => {
  //       e.target.parentNode.classList.add("focus");
  //     });
  //   });
  // }, []);

  return (
    <Wrapper className="   ">
      <p className="text-black font-inter text-5xl font-semibold mb-4 max-[440px]:text-4xl">Details</p>
      <form className="details-box px-[3rem]" onSubmit={updateProfileData}>
      <div className="name flex space-x-[2rem] max-[614px]:flex-col max-[614px]:space-x-0">
          <div className="input-container w-1/3 max-[615px]:w-full focus">
            <input
              type="text"
              name="fname"
              className="input"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <label htmlFor="">First Name</label>
            <span>First Name</span>
          </div>

          <div className="input-container w-1/3 max-[615px]:w-full focus">
            <input
              type="text"
              name="mname"
              className="input"
              value={formData.mname}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Middle Name</label>
            <span>Middle Name</span>
          </div>

          <div className="input-container w-1/3 max-[615px]:w-full focus">
            <input
              type="text"
              name="lname"
              className="input"
              value={formData.lname}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Last Name</label>
            <span>Last Name</span>
          </div>
        </div>

        <div className="dob flex space-x-[2rem] max-[614px]:flex-col max-[614px]:space-x-0">
          <div className="input-container w-1/2 max-[615px]:w-full focus">
            <input
              type="date"
              name="dob"
              className="date"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Date of Birth</label>
            <span>Date of Birth</span>
          </div>
          
          <div className="input-container w-1/2 max-[615px]:w-full focus">
            <input
              type="text"
              name="gender"
              className="input"
              value={formData.gender}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Gender</label>
            <span>Gender</span>
          </div>
        </div>

        <div className="contact flex space-x-[2rem] max-[614px]:flex-col max-[614px]:space-x-0">
          <div className="input-container w-1/2 max-[615px]:w-full focus">
            <input
              type="text"
              name="mobile"
              className="input"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Mobile</label>
            <span>Mobile</span>
          </div>

          <div className="input-container w-1/2 max-[615px]:w-full focus">
            <input
              type="email"
              name="email"
              className="input"
              value={formData.email}
              onChange={handleChange}
              required
              readOnly
            />
            <label htmlFor="">Email</label>
            <span>Email</span>
          </div>
        </div>

        <div className="address input-container focus">
          <textarea
            name="address"
            className="input"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="">Address</label>
          <span>Address</span>
        </div>


        <div className="space-x-[2rem] flex  max-[614px]:flex-col max-[614px]:space-x-0">
          <div className="input-container w-1/2 max-[615px]:w-full focus">
            <input
              type="text"
              name="city"
              className="input"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <label htmlFor="">City</label>
            <span>City</span>
          </div>
          <div className="invisible  input-container w-1/2 max-[615px]:hidden focus">
            <input type="text" name="Lname" className="input" />
            <label htmlFor="">City</label>
            <span>City</span>
          </div>
        </div>
        <button type="submit">
          {/* Submit */}
          <ButtonDiv value="Update" />
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .invisible {
    visibility: hidden;
  }
  .input-container {
    position: relative;
    margin: 1rem 0;
    // border: 2px solid salmon;
  }

  .input-container input {
    width: 100%;
  }
  .input-container .input,
  .input-container .date {
    width: 100%;
    outline: none;
    background: #fff;
    border: 2px solid #00668c;
    color: black;
    padding: 0.3rem 1rem;
    // font-weight: 400;
    font-size: 2rem;
    letter-spacing: 1.5px;
    border-radius: 12px;
    transition: 0.3s;
    /* color:#FF2828; */
  }

  .donor-id .input,
  .personal-details .input,
  .mail-id .input {
    background-color: #fa4a4a5e;
  }
  textarea.input {
    padding: 0.8rem 1.2rem;
    /* min-height:50px; */
    border-radius: 22px;
    resize: none;
    overflow-y: auto;
  }

  .input-container label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0rem;
    color: black;
    // font-weight: 500;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;
    font-size: 2.1rem;
  }
  .input-container.textarea label {
    top: 0.7rem;
    transform: translateY(0);
  }

  .input-container span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    padding: 0 0rem;
    color: transparent;
    // font-weight: 500;
    pointer-events: none;
    z-index: 500;
    transition: 0.5s;
    /* background-color: red; */
    // border: 2px solid red;
  }
  .input-container span::before,
  .input-container span::after {
    content: "";
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    background-color: #EBF8FF;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid #EBF8FF;
  }
  .input-container span::before {
    left: 50%;
  }
  .input-container span::after {
    right: 50%;
  }
  .input-container.focus label {
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    font-size: 1.8rem;
  }
  .input-container.focus span::before,
  .input-container.focus span::after {
    width: 50%;
    opacity: 1;
  }
`;

export default ProfileDetails;
