
// Minimal working version of ink.js to simulate Inkle runtime behavior
window.inkjs = {
  Story: function(json) {
    let pointer = 0;
    return {
      canContinue: true,
      Continue: function() {
        if (pointer < json.content.length) {
          return json.content[pointer++];
        } else {
          this.canContinue = false;
          return '';
        }
      },
      currentChoices: [],
      ChooseChoiceIndex: function() {}
    };
  }
};
