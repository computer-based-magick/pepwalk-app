import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogCard from "../LogCard";

Enzyme.configure({ adapter: new Adapter() });

describe("When Log Card page renders", () => {
  const log =
      {
          date: "2021-09-10T22:09:16.408Z",
          workout_id: 874,
          workout_name: 'Forward Lunge',
          happy: 5,
          sad: 5,
          energetic: 7,
          lethargic: 2,
          entry: 'crushed it!',
          id: 1
      }
  
  it("displays an h1 tag", () => {
    const renderLogCard = shallow(<LogCard log={log}/>);
    const render = renderLogCard.find("h1");
    expect(render.length).toEqual(1);
  });

  it("displays 3 p tags", () => {
    const renderLogCard = shallow(<LogCard log={log}/>);
    const pTags = renderLogCard.find("p");
    expect(pTags.length).toEqual(3);
  });

  it("has a button that says more info", () => {
    const renderLogCard = shallow(<LogCard log={log}/>);
    const renderButton = renderLogCard.find("button");
    expect(renderButton.text()).toEqual("More Info");
  });

  it("has a Link element that links to the log show page", () => {
    const renderLogCard = shallow(<LogCard log={log}/>);
    const renderLink = renderLogCard.find("Link");
    expect(renderLink.props().to).toEqual(`log/${log.id}`)
  })
});
