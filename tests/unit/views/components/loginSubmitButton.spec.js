import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import LoginSubmitButton from "@/components/LoginSubmitButton.vue";

const localVue = createLocalVue();
let vuetify = new Vuetify();
let wrapper;

describe("LoginSubmitButton", () => {
  beforeEach(() => {
    wrapper = mount(LoginSubmitButton, {
      localVue,
      vuetify,
    });
  });

  it("renders disabled when form is invalid", () => {
    wrapper.setProps({
      formIsValid: false,
    });

    const button = wrapper.findComponent({ ref: "login-submit-button" });
    expect(button.exists()).toBe(true);

    expect(button.attributes().disabled).toBe("true");
  });

  it("renders enabled when form is valid", async () => {
    wrapper.setProps({
      formIsValid: true,
    });

    const button = wrapper.findComponent({ ref: "login-submit-button" });
    expect(button.exists()).toBe(true);

    await wrapper.vm.$nextTick();

    expect(button.attributes().disabled).toBeFalsy();
  });

  it("should emit an event when the action v-btn is clicked", async () => {
    wrapper.setProps({
      formIsValid: true,
      loading: false,
    });

    const event = jest.fn();
    const button = wrapper.findComponent({ ref: "login-submit-button" });

    wrapper.vm.$on("login", event);

    expect(event).toHaveBeenCalledTimes(0);

    await button.trigger("click");

    expect(event).toHaveBeenCalledTimes(1);
  });

  it("should emit an event when the action v-btn is clicked", async () => {
    const event = jest.fn();
    const button = wrapper.findComponent({ ref: "login-submit-button" });

    wrapper.vm.$on("login", event);

    expect(event).toHaveBeenCalledTimes(0);

    await button.trigger("click");

    expect(event).toHaveBeenCalledTimes(1);
  });
});
