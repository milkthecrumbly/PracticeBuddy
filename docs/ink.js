
/*! inkjs 1.12.1 - https://github.com/inkle/inkjs */

// trimmed for brevity; use actual full code in production

window.inkjs = {
    Story: function(json) {
        return {
            canContinue: false,
            Continue: function() { return "This is a stub story. Replace with compiled JSON."; },
            currentChoices: [],
            ChooseChoiceIndex: function() {}
        };
    }
};
