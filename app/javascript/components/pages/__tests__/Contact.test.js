import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../Contact";

Enzyme.configure({ adapter: new Adapter() });

describe("When Logs page renders", () => {

  it("displays an h1 tag", () => {
    const renderpage = shallow(<Contact/>);
    const renderText = renderpage.find("h1");
    expect(renderText.length).toEqual(1);
  });
});
