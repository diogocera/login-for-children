import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import routes from "@/router/routes.js";
import App from "@/App.vue";
import HomePage from "@/views/Login.vue";
import LoginPage from "@/views/Login.vue";
import AppNavBar from "@/components/AppNavBar.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("App", () => {
  let router;
  let wrapper;

  it("renders the nav bar if the route is '/'", () => {
    const $route = {
      path: "/",
    };
    wrapper = shallowMount(App, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.findComponent(AppNavBar).exists()).toBeTruthy();
  });

  it("doesn't render the nav bar if the route is '/login'", () => {
    const $route = {
      path: "/login",
    };
    wrapper = shallowMount(App, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.findComponent(AppNavBar).exists()).toBeFalsy();
  });

  it("renders a child component via routing", async () => {
    router = new VueRouter({ routes });
    wrapper = mount(App, {
      localVue,
      router,
    });

    router.push({ path: "/login" });
    await wrapper.vm.$nextTick();

    //Invalid test because both expectations are passing which is not possible or doesn't make sense
    expect(wrapper.findComponent(HomePage).exists()).toBeTruthy();
    expect(wrapper.findComponent(LoginPage).exists()).toBeTruthy();
  });
});
