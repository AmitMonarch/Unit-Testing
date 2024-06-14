import React from "react";
import { ApplicationConstants } from "../Constants";

export const Application = () => {
  return (
    <>
      <h1>{ApplicationConstants.heading1}</h1>
      <h2>{ApplicationConstants.heading2}</h2>
      <p>{ApplicationConstants.paragraph}</p>
      <span title="close">X</span>
      <img src="https://imageurl.com/150" alt="Not found" />
      <div data-testId="custom-element">{ApplicationConstants.divText}</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            value="Amitesh"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />
            {ApplicationConstants.terms}
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
