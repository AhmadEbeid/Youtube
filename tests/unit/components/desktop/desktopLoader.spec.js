import { shallowMount } from "@vue/test-utils";
import DesktopLoader from "@/components/desktop/DesktopLoader.vue";

describe("DesktopLoader.vue", () => {
  it("renders props when passed", () => {
    
    const loading = true;
    const width = 20;

    const wrapper = shallowMount(DesktopLoader, {
      propsData: {
        loading,
        width
      }
    });

    expect(wrapper.vm.loading).toBe(loading);
    expect(wrapper.vm.width).toBe(width);
    
    expect(wrapper.findAll('div').at(1).attributes().style).toMatch(width + '%;');

  });
});
