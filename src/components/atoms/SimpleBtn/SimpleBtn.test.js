import { mount } from '@vue/test-utils'
import store from '@/store'
import SimpleBtn from './SimpleBtn.vue'

describe('Simple Button Component', () => {
  const Root = {
    template: `
      <simple-btn>
      </simple-btn>
    `
  }

  const context = {
    wrapper: null
  }

  beforeEach(() => {
    context.wrapper = mount(Root, {
      store,
      components: {
        [SimpleBtn.name]: SimpleBtn
      },
      attachTo: document.body
    })
  })

  it('Should renders correctly', () => {
    expect(context.wrapper.element).toMatchSnapshot()
  })
})
