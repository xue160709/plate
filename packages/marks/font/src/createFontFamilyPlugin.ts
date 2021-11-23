import { createPluginFactory } from '@udecode/plate-core';

export const MARK_FONT_FAMILY = 'fontFamily';

export const createFontFamilyPlugin = createPluginFactory({
  key: MARK_FONT_FAMILY,
  inject: {
    props: {
      nodeKey: MARK_FONT_FAMILY,
    },
  },
  then: (editor, { type }) => ({
    deserializeHtml: {
      getNode: (element) => ({ [type]: element.style.fontFamily }),
      validStyle: {
        fontFamily: '*',
      },
    },
  }),
});