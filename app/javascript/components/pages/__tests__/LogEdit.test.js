import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import LogEdit from "../LogEdit";

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("When Log Edit page renders", () => {
  const log =
      {
          date: "2021-09-10T22:09:16.408Z",
          workout_name: 'Forward Lunge',
          happy: 5,
          sad: 5,
          energetic: 7,
          lethargic: 2,
          entry: 'crushed it!',
          id: 1
      }

  let wrapper;
  const updateLog = jest.fn();

  beforeEach(() => {
      wrapper = mount(<LogEdit oldLog={log} updateLog={updateLog} />)
  });

  afterEach(() => {
      jest.clearAllMocks();
  });

  it("submits a form with mock data", () => {
    const entryText = "entryText"
    const workoutText = "workoutText"

    const submitButton = wrapper.find("button");
    const sadRadioButton = wrapper.find("[data-test-id='sad']")
    const happyRadioButton = wrapper.find("[data-test-id='happy']")
    const lethargicRadioButton = wrapper.find("[data-test-id='lethargic']")
    const energeticRadioButton = wrapper.find("[data-test-id='energetic']")
    const entryInput = wrapper.find("[data-test-id='entry']")
    const workoutNameInput = wrapper.find("[data-test-id='workout_name']")

    sadRadioButton.simulate("change", {target: {value: 1, name: "sad"}})
    lethargicRadioButton.simulate("change", {target: {value: 4, name: "lethargic"}})
    happyRadioButton.simulate("change", {target: {value: 5, name: "happy"}})
    energeticRadioButton.simulate("change", {target: {value: 5, name: "energetic"}})
    entryInput.simulate("change", {target: {value: entryText, name: "entry"}})
    workoutNameInput.simulate("change", {target: {value: workoutText, name: "workout_name"}})
    submitButton.simulate("click", {preventDefault: jest.fn()})

    expect(updateLog).toHaveBeenCalledWith({entry: entryText, workout_name: workoutText,
      sad: 1, happy: 5, lethargic: 4, energetic: 5, workout_id: -1,
      date: "2021-09-10T22:09:16.408Z", id: 1})
    expect(submitButton.text()).toEqual("Submit");
  });

});
