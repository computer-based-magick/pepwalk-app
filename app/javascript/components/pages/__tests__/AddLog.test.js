import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddLog from "../AddLog";

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("When Add Log page renders", () => {
  let wrapper;
  const createLog = jest.fn();

  beforeEach(() => {
      wrapper = mount(<AddLog currentUserId={1} createLog={createLog} />)
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

    expect(createLog).toHaveBeenCalledWith({entry: entryText, workout_name: workoutText,
      sad: 1, happy: 5, lethargic: 4, energetic: 5, workout_id: -1, user_id: 1})
    expect(submitButton.text()).toEqual("Submit");
  });

});
