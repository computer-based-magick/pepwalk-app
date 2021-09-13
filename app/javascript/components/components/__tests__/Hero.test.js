import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hero from "../Hero";

Enzyme.configure({ adapter: new Adapter() });

describe("When hero renders", () => {
  it("Hero displays app name in an h1 tag", () => {
    const renderHero = shallow(<Hero />);
    const renderText = renderHero.find("h1");
    expect(renderText.length).toEqual(1);
  });
  it("has a link that says Add A Log", () => {
    const renderHero = shallow(<Hero />);
    const renderText = renderHero.find("Link");
    expect(renderText.at(0).text()).toEqual("Add A Log");
  });
  it("has a link that says Get a Workout", () => {
    const renderHero = shallow(<Hero />);
    const renderText = renderHero.find("Link");
    expect(renderText.at(1).text()).toEqual("Get A Workout");
  });
});
