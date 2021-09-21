import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WorkoutList from "../WorkoutList";

Enzyme.configure({ adapter: new Adapter() });

describe("When WorkoutList page renders", () => {
  it("displays an h1 tag", () => {
    const renderh1 = shallow(<WorkoutList />);
    const renderText = renderh1.find("h1");
    expect(renderText.length).toEqual(1);
  });

  it("has a link to a random workout page", () => {
    const renderPage = shallow(<WorkoutList />);
    const linkTag = renderPage.find("Link")
    expect(linkTag.props().to).toEqual('/workout')
  })
});