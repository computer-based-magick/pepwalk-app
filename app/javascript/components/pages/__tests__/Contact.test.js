import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../Contact";

Enzyme.configure({ adapter: new Adapter() });

describe("When Contact page renders", () => {

  it("displays an h1 tag", () => {
    const renderpage = shallow(<Contact/>);
    const renderText = renderpage.find("h1");
    expect(renderText.length).toEqual(1);
    expect(renderText.text()).toEqual("Contact Us");
  });

  it("displays a button", () => {
    const renderpage = shallow(<Contact/>);
    const render = renderpage.find("button");
    expect(render.length).toEqual(1);
  });
});
