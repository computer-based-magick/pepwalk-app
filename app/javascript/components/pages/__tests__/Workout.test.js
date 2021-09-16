import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Workout from "../Workout";

Enzyme.configure({ adapter: new Adapter() });

describe("When Workout page renders", () => {
  it("displays an h1 tag", () => {
    const renderh1 = shallow(<Workout />);
    const renderText = renderh1.find("h1");
    expect(renderText.length).toEqual(2);
  });

  it("has a link to add a log", () => {
    const renderPage = shallow(<Workout />);
    const linkTag = renderPage.find("Link")
    expect(linkTag.props().to).toEqual('/addlog')
    expect(linkTag.text()).toEqual('Add A Log')
  })
});