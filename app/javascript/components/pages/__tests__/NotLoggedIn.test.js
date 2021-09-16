import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotLoggedIn from "../NotLoggedIn";

Enzyme.configure({ adapter: new Adapter() });

describe("When Not Logged In page renders", () => {
  it("displays h1 tags", () => {
    const renderh1 = shallow(<NotLoggedIn />);
    const renderText = renderh1.find("h1");
    expect(renderText.length).toEqual(2);
  });

  it("has anchor tags to login and sign up", () => {
    const renderPage = shallow(<NotLoggedIn />);
    const anchorTags = renderPage.find("a")
    expect(anchorTags.length).toEqual(2)
    expect(anchorTags.at(0).text()).toEqual("Login")
    expect(anchorTags.at(1).text()).toEqual("Sign Up")
  })
});