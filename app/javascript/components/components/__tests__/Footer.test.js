import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("When Footer renders", () => {
  it("Footer displays a p tag", () => {
    const renderPage = shallow(<Footer />);
    const pTag = renderPage.find("p");
    expect(pTag.length).toEqual(1);
  });
});
