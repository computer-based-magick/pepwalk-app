import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logs from "../Logs";

Enzyme.configure({ adapter: new Adapter() });

describe("When Logs page renders", () => {
  const logs = [
      {
          date: "2021-09-10T22:09:16.408Z",
          workout_id: 874,
          workout_name: 'Forward Lunge',
          happy: 5,
          sad: 5,
          energetic: 7,
          lethargic: 2,
          entry: 'crushed it!'
      }
  ]
  it("displays an h1 tag", () => {
    const renderlogs = shallow(<Logs logs={logs}/>);
    const renderText = renderlogs.find("h1");
    expect(renderText.length).toEqual(1);
  });

  it("displays 3 p tags", () => {
    const renderlogs = shallow(<Logs logs={logs}/>);
    const renderText = renderlogs.find("p");
    expect(renderText.length).toEqual(3);
  });

  it("has a button that says more info", () => {
    const renderlogs = shallow(<Logs logs={logs}/>);
    const renderText = renderlogs.find("button");
    expect(renderText.text()).toEqual("More Info");
  });
});
