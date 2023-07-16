import { assert, expect, fixture, html } from '@open-wc/testing';
import { About } from '../src/about/about';

describe('About Component', () => {
  let element: About;

  beforeEach(async () => {
    element = await fixture<About>(html` <EaCodingTest> `);
  });

  it('is defined', () => {
    assert.instanceOf(element, About);
  });

  it("renders 'EaCodingTest' as a title", () => {
    const h2 = element.shadowRoot!.querySelector('h2')!;
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EaCodingTest');
  });

  it('renders a paragraph', () => {
    const paragraph = element.shadowRoot!.querySelector('p')!;
    expect(paragraph).to.exist;
    expect(paragraph.textContent).to.contain(
      'Adrian Venti'
    );
  });
});
