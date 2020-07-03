import { shallowMount } from "@vue/test-utils";
import DesktopHeader from "../../src/components/desktop/DesktopHeader.vue";

describe("DesktopHeader.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(DesktopHeader, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
