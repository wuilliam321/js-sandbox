/* eslint-env jest */
const LinkedList = require('../src/linked_list');

describe('Given a Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('When addFront()', () => {
    linkedList.addFront(1);
    linkedList.addFront(2);
    linkedList.addFront(3);
    expect(linkedList.getFirst()).toEqual(3);
    expect(linkedList.getLast()).toEqual(1);
  });

  it('When getFirst()', () => {
    linkedList.addFront(1);
    expect(linkedList.getFirst()).toEqual(1);
  });

  it('When getBack()', () => {
    linkedList.addFront(1);
    linkedList.addFront(2);
    linkedList.addFront(3);
    expect(linkedList.getLast()).toEqual(1);
  });

  it('When addBack()', () => {
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);
    expect(linkedList.getFirst()).toEqual(1);
    expect(linkedList.getLast()).toEqual(3);
  });

  it('When size()', () => {
    expect(linkedList.size()).toEqual(0);
    linkedList.addBack(1);
    expect(linkedList.size()).toEqual(1);
    linkedList.addBack(2);
    expect(linkedList.size()).toEqual(2);
    linkedList.addBack(3);
    expect(linkedList.size()).toEqual(3);
  });

  it('When clear()', () => {
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);
    expect(linkedList.size()).toEqual(3);
    linkedList.clear();
    expect(linkedList.size()).toEqual(0);
  });

  it('When deleteValue()', () => {
    linkedList.addBack(1);
    expect(linkedList.size()).toEqual(1);
    linkedList.deleteValue(1);
    expect(linkedList.size()).toEqual(0);
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);
    linkedList.deleteValue(2);
    linkedList.deleteValue(3);
    expect(linkedList.getFirst()).toEqual(1);
    expect(linkedList.getLast()).toEqual(1);
  });

  it('When deleteLastValue()', () => {
    linkedList.addBack(1);
    linkedList.deleteLastValue();
    expect(linkedList.size()).toEqual(0);
    linkedList.addBack(1);
    linkedList.addBack(2);
    linkedList.addBack(3);
    linkedList.deleteLastValue();
    expect(linkedList.getLast()).toEqual(2);
  });
});
