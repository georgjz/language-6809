'use babel';

import Language6809 from '../lib/language-6809';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Language6809', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('language-6809');
  });

  describe('when the language-6809:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.language-6809')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'language-6809:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.language-6809')).toExist();

        let language6809Element = workspaceElement.querySelector('.language-6809');
        expect(language6809Element).toExist();

        let language6809Panel = atom.workspace.panelForItem(language6809Element);
        expect(language6809Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'language-6809:toggle');
        expect(language6809Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.language-6809')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'language-6809:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let language6809Element = workspaceElement.querySelector('.language-6809');
        expect(language6809Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'language-6809:toggle');
        expect(language6809Element).not.toBeVisible();
      });
    });
  });
});
