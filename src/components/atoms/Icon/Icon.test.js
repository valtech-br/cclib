import { mount } from '@vue/test-utils'
import Icon from './Icon.vue'

describe('Component Icon', () => {
  const Root = {
    template: `
      <div>
        <icon name="test" />
      </div>
    `
  }

  const context = {
    wrapper: null
  }

  beforeEach(() => {
    context.wrapper = mount(Root, {
      components: {
        [Icon.name]: Icon
      },
      attachTo: document.body
    })
  })

  it('Should renders correctly', () => {
    expect(context.wrapper.element).toMatchSnapshot()
  })
})
