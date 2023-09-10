const chai = window.chai;
const expect = chai.expect;


describe('Deck', function () {
  describe('#shuffle()', function () {
    it('should shuffle the deck of cards', function () {
      const deck = new Deck();
      const originalOrder = [...deck.cards]; // Copy of the original order
      deck.shuffle();

      // Check if the deck has the same cards but in a different order
      expect(deck.cards).to.have.members(originalOrder);
      expect(deck.cards).to.not.deep.equal(originalOrder);
    });
  });
});
