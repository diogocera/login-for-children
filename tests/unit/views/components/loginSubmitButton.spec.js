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
});
