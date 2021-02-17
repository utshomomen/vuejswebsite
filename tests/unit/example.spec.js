import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})



describe("About.vue", () => {
  test("intial state is zero", () => {
    
    //arrange
    const wrapper = shallowMount(HelloWorld)
    
    //Assert
    expect(wrapper.html()).toContain(0);
  });
});

// describe('Views', ()=>{
//   const inithe =200
//   let mockedInfunc
//   let store

//   beforeEAch 
// })

// const $axios = {
//   get: () => {
//     return Promise.resolve({ data: [{ char_id: 1, name: "123" }] });
//   }
// };

// describe("secret vue", () => {
 
//   it("renders", () => {
//     const wrapper = mount(Secret, { mocks: { $axios } });
//     expect(wrapper.exists()).toBe(true);
//   });

//   it("showsviews body", async () => {
//     wrapper = mount(Secret, { mocks: { $axios } });
//     await flushPromises();
//     const l = wrapper.find("h5");
//     expect(l.text()).toBe("123");
//   });
// });

