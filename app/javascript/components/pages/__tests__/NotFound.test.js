import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "../NotFound";


Enzyme.configure({ adapter: new Adapter() });

describe("When Logs page renders", () => {

  it("displays an h4 tag", () => {
    const renderlog = shallow(<NotFound />);
    const renderText = renderlog.find("h4");
    expect(renderText.length).toEqual(1);
  });
});
