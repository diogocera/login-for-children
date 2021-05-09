import { mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import routes from "@/router/routes.js";
import App from "@/App.vue";
import HomePage from "@/views/Login.vue";
import LoginPage from "@/views/Login.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  it("renders a child component via routing", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
    });

    router.push("/login");
    await wrapper.vm.$nextTick();

    //Invalid test because both expectations are passing which is not possible or doesn't make sense
    expect(wrapper.findComponent(HomePage).exists()).toBeTruthy();
    expect(wrapper.findComponent(LoginPage).exists()).toBeTruthy();
  });

  it("should have a route different than /login", async () => {
    const router = new VueRouter({ routes });
    const wrapper = mount(App, {
      localVue,
      router,
    });
    // This test will fail because we are still on the /login
    //Invalid test because both expectations are passing which is not possible or doesn't make sense
    expect(wrapper.findComponent(LoginPage).exists()).toBe(false);
    expect(wrapper.findComponent(HomePage).exists()).toBe(false);
    console.log(router.currentRoute);
  });
});
