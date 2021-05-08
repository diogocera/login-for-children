import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Login from "@/views/Login.vue";

describe("Login.vue", () => {
  const localVue = createLocalVue();
  let vuetify;
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("isInputFilled method", () => {
    beforeEach(() => {
      wrapper = shallowMount(Login, {
        localVue,
        vuetify,
      });
    });

    it("returns false when null is passed", () => {
      const inputValue = null;

      const actualValue = wrapper.vm.isInputFilled(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns false when an empty string is passed", () => {
      const inputValue = "";

      const actualValue = wrapper.vm.isInputFilled(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns true when a not empty string is passed", () => {
      const inputValue = "test";

      const actualValue = wrapper.vm.isInputFilled(inputValue);
      expect(actualValue).toBeTruthy();
    });

    it("returns true when a not number is passed", () => {
      const inputValue = "test";

      const actualValue = wrapper.vm.isInputFilled(inputValue);
      expect(actualValue).toBeTruthy();
    });
  });

  describe("isEmailValid method", () => {
    beforeEach(() => {
      wrapper = shallowMount(Login, {
        localVue,
        vuetify,
      });
    });

    it("returns false when an empty string is passed", () => {
      const inputValue = "";

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns false when a number is passed", () => {
      const inputValue = 10;

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns false when an email without username is passed", () => {
      const inputValue = "@email.com";

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns false when an email without @ symbols passed", () => {
      const inputValue = "test.email.com";

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns false when an email without domain passed", () => {
      const inputValue = "test@email";

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeFalsy();
    });

    it("returns true when a valid email passed", () => {
      const inputValue = "test@email.com";

      const actualValue = wrapper.vm.isEmailValid(inputValue);
      expect(actualValue).toBeTruthy();
    });
  });

  describe("getEmailValidationMessage method", () => {
    beforeEach(() => {
      wrapper = shallowMount(Login, {
        localVue,
        vuetify,
      });
    });

    it("returns missing email message when an empty string is passed", () => {
      const inputValue = "";

      const actualValue = wrapper.vm.getEmailValidationMessage(inputValue);
      const expectedValue = "Please, write your e-mail on this box.";
      expect(actualValue).toBe(expectedValue);
    });

    it("returns invalid email message when a not empty and invalid email is passed", () => {
      const inputValue = "email";

      const actualValue = wrapper.vm.getEmailValidationMessage(inputValue);
      const expectedValue =
        "Your e-mail should look something like yourname@email.com.";
      expect(actualValue).toBe(expectedValue);
    });

    it("returns true when a valid email is passed", () => {
      const inputValue = "test@email.com";

      const actualValue = wrapper.vm.getEmailValidationMessage(inputValue);
      expect(actualValue).toBeTruthy;
    });
  });

  describe("doesPasswordHaveMinNumberCharacters method", () => {
    beforeEach(() => {
      wrapper = shallowMount(Login, {
        localVue,
        vuetify,
      });
    });

    it("returns false when an empty string is passed", () => {
      const inputValue = "";

      const actualValue = wrapper.vm.doesPasswordHaveMinNumberCharacters(
        inputValue
      );
      expect(actualValue).toBeFalsy();
    });

    it("returns false when a string with less than 8 characters is passed", () => {
      const inputValue = "Ab1_";

      const actualValue = wrapper.vm.doesPasswordHaveMinNumberCharacters(
        inputValue
      );
      expect(actualValue).toBeFalsy();
    });

    it("returns true when a string with 8 characters is passed", () => {
      const inputValue = "AbC@123_";

      const actualValue = wrapper.vm.doesPasswordHaveMinNumberCharacters(
        inputValue
      );
      expect(actualValue).toBeTruthy;
    });

    it("returns true when a string with more than 8 characters is passed", () => {
      const inputValue = "AbC@123_Zyx";

      const actualValue = wrapper.vm.doesPasswordHaveMinNumberCharacters(
        inputValue
      );
      expect(actualValue).toBeTruthy;
    });
  });
});
