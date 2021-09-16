import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../About";

Enzyme.configure({ adapter: new Adapter() });

describe("When Logs page renders", () => {

  it("displays 4 p tags", () => {
    const renderlog = shallow(<About />);
    const renderText = renderlog.find("p");
    expect(renderText.length).toEqual(4);
  });
});
