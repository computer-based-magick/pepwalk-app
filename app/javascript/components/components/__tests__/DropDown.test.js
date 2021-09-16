import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DropDown from "../DropDown";

Enzyme.configure({ adapter: new Adapter() });

describe("When DropDown renders", () => {
  it("DropDown displays 5 link tags", () => {
    const renderPage = shallow(<DropDown />);
    const linkTags = renderPage.find("Link");
    expect(linkTags.length).toEqual(5);
    expect(linkTags.at(0).text()).toEqual("Home")
    expect(linkTags.at(1).text()).toEqual("Your Logs")
    expect(linkTags.at(2).text()).toEqual("About")
    expect(linkTags.at(3).text()).toEqual("Contact")
    expect(linkTags.at(4).text()).toEqual("Add a Log")
  });
});
