import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Hero from "../Hero";

Enzyme.configure({ adapter: new Adapter() });

describe("Hero has App name", () => {
  it("Hero displays app name in an h1 tag", () => {
    const renderHero = shallow(<Hero />);
    const renderText = renderHero.find("h1");
    expect(renderText.length).toEqual(1);
  });
});
