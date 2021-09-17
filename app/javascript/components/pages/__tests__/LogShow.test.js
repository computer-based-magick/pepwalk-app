import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogShow from "../LogShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When Log Show page renders", () => {
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
    const renderlog = shallow(<LogShow log={log}/>);
    const renderText = renderlog.find("h1");
    expect(renderText.length).toEqual(1);
  });

  it("displays 7 p tags", () => {
    const renderlog = shallow(<LogShow log={log}/>);
    const renderText = renderlog.find("p");
    expect(renderText.length).toEqual(7);
  });
  
  it("has a buttons to edit, go back, and delete", () => {
    const renderlog = shallow(<LogShow log={log}/>);
    const renderText = renderlog.find("button");
    expect(renderText.at(0).text()).toEqual("edit");
    expect(renderText.at(1).text()).toEqual("back to your logs");
    expect(renderText.at(2).text()).toEqual("delete");
  });
});
