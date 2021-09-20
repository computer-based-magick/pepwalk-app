import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../NavBar";

Enzyme.configure({ adapter: new Adapter() });

describe("When NavBar renders", () => {
  
  const current_user={email:" "}
  
  it("has multiple links that render different words", () => {
    const renderNavBar = shallow(<NavBar />);
    const renderText = renderNavBar.find("Link");
    expect(renderText.at(1).text()).toEqual("Home");
    expect(renderText.at(2).text()).toEqual("About");
    expect(renderText.at(3).text()).toEqual("Contact");
  });
  
  it("renders an anchor link to log out when user is logged in", () => {
    const renderNavBar = shallow(<NavBar  logged_in={true} current_user={current_user}/>);
    const renderText = renderNavBar.find("a");
    expect(renderText.length).toEqual(1);
    });
  
    it("renders an anchor link to log in when user is logged out", () => {
    const renderNavBar = shallow(<NavBar  logged_in={false} current_user={current_user}/>);
    const renderText = renderNavBar.find("a");
    expect(renderText.length).toEqual(1);
  });
  
  it("has an h3 tag for PepWalk and the user's email", () => {
    const renderNavBar = shallow(<NavBar  logged_in={false} current_user={current_user}/>);
    const h3Tag = renderNavBar.find("h3")
    expect(h3Tag.length).toEqual(2)
  })

});
