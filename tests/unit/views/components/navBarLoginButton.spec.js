import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import AppNavLoginButton from "@/components/AppNavLoginButton.vue";
import routes from "@/router/routes.js";

const localVue = createLocalVue();
localVue.use(VueRouter);
let vuetify = new Vuetify();
let router = new VueRouter({ routes });

const $route = {
  path: "/",
};

const wrapper = mount(AppNavLoginButton, {
  localVue,
  vuetify,
  router,
  mocks: {
    $route,
  },
});

describe("NavBarLoginButton", () => {
  it("changes the route path to '/login' when clicked", async () => {
    const button = wrapper.find("#login-button");

    expect(button.exists()).toBeTruthy();

    await button.trigger("click");

    expect(wrapper.vm.$route.path).toBe("/login");
  });
});
