import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../Contact";

Enzyme.configure({ adapter: new Adapter() });

describe("When Logs page renders", () => {
  const logs =
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
    const renderpage = shallow(<Contact/>);
    const renderText = renderpage.find("h1");
    expect(renderText.length).toEqual(1);
  });
});
