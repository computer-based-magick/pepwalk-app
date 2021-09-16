import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../About";

Enzyme.configure({ adapter: new Adapter() });

describe("When About page renders", () => {

  it("displays 4 p tags", () => {
    const renderlog = shallow(<About />);
    const renderText = renderlog.find("p");
    expect(renderText.length).toEqual(4);
  });

  it("displays 4 img tags", () => {
    const renderlog = shallow(<About />);
    const renderText = renderlog.find("img");
    expect(renderText.length).toEqual(4);
  });

  it("displays 4 h5 tags", () => {
    const renderlog = shallow(<About />);
    const renderText = renderlog.find("h5");
    expect(renderText.length).toEqual(4);
  });
});
