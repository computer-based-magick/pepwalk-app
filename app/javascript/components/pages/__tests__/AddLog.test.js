import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddLog from "../AddLog";
import { useHistory } from "react-router-dom";

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
      wrapper = shallow(<AddLog currentUserId={1} createLog={createLog} />)
  });

  afterEach(() => {
      jest.clearAllMocks();
  });

  it("submits a form with mock data", () => {
    const happyRadioButton = wrapper.find("[data-test-id='happy']")
    const lethargicRadioButton = wrapper.find("[data-test-id='lethargic']")
    const energeticRadioButton = wrapper.find("[data-test-id='energetic']")
    const sadRadioButton = wrapper.find("[data-test-id='sad']")
    sadRadioButton.simulate("change", {target: {value: 1, name: "sad"}})
    lethargicRadioButton.simulate("change", {target: {value: 4, name: "lethargic"}})
    happyRadioButton.simulate("change", {target: {value: 5, name: "happy"}})
    energeticRadioButton.simulate("change", {target: {value: 5, name: "energetic"}})

    const entryText = "entryText"
    const workoutText = "workoutText"
    const entryInput = wrapper.find("[data-test-id='entry']")
    const workoutNameInput = wrapper.find("[data-test-id='workout_name']")
    entryInput.simulate("change", {target: {value: entryText, name: "entry"}})
    workoutNameInput.simulate("change", {target: {value: workoutText, name: "workout_name"}})
    
    const submitButton = wrapper.find("button");
    submitButton.simulate("click", {preventDefault: jest.fn()})
    expect(createLog).toHaveBeenCalledWith({entry: entryText, workout_name: workoutText,
      sad: 1, happy: 5, lethargic: 4, energetic: 5, workout_id: -1, user_id: 1})
    expect(submitButton.text()).toEqual("Submit");
  });

});
