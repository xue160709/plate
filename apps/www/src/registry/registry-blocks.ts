import type { Registry } from '@/registry/schema';

export const blocks: Registry = [
  {
    category: 'Editors',
    dependencies: [
      '@udecode/plate-common',
      '@udecode/plate-ai',
      '@udecode/cn',
      '@udecode/plate-basic-marks',
      '@udecode/plate-block-quote',
      '@udecode/plate-code-block',
      '@udecode/plate-comments',
      '@udecode/plate-date',
      '@udecode/plate-dnd',
      '@udecode/plate-docx',
      '@udecode/plate-emoji',
      '@udecode/plate-excalidraw',
      '@udecode/plate-font',
      '@udecode/plate-heading',
      '@udecode/plate-highlight',
      '@udecode/plate-horizontal-rule',
      '@udecode/plate-indent',
      '@udecode/plate-indent-list',
      '@udecode/plate-juice',
      '@udecode/plate-kbd',
      '@udecode/plate-layout',
      '@udecode/plate-line-height',
      '@udecode/plate-link',
      '@udecode/plate-list',
      '@udecode/plate-markdown',
      '@udecode/plate-media',
      '@udecode/plate-mention',
      '@udecode/plate-node-id',
      '@udecode/plate-reset-node',
      '@udecode/plate-select',
      '@udecode/plate-selection',
      '@udecode/plate-slash-command',
      '@udecode/plate-tabbable',
      '@udecode/plate-table',
      '@udecode/plate-toggle',
      '@udecode/plate-trailing-block',
      '@udecode/plate-alignment',
      '@udecode/plate-autoformat',
      '@udecode/plate-break',
      '@udecode/plate-caption',
      'react-dnd',
      'react-dnd-html5-backend',
      'prismjs',
    ],
    files: [
      {
        path: 'block/editor-ai/page.tsx',
        target: 'app/editor/page.tsx',
        type: 'registry:page',
      },
      {
        path: 'block/editor-ai/components/editor/plate-editor.tsx',
        target: 'components/editor/plate-editor.tsx',
        type: 'registry:component',
      },
      {
        path: 'block/editor-ai/components/editor/use-create-editor.tsx',
        target: 'components/editor/use-create-editor.tsx',
        type: 'registry:component',
      },
    ],
    name: 'editor-ai',
    registryDependencies: [
      'plate-types',
      'ai-plugins',
      'autoformat-plugin',
      'copilot-plugins',
      'ai-menu',
      'ai-leaf',
      'ghost-text',
      'comments-popover',
      'cursor-overlay',
      'editor',
      'fixed-toolbar',
      'fixed-toolbar-buttons',
      'floating-toolbar',
      'floating-toolbar-buttons',
      'block-context-menu',
      'blockquote-element',
      'code-block-element',
      'code-leaf',
      'code-line-element',
      'code-syntax-leaf',
      'column-element',
      'column-group-element',
      'comment-leaf',
      'date-element',
      'draggable',
      'emoji-input-element',
      'excalidraw-element',
      'heading-element',
      'highlight-leaf',
      'hr-element',
      'image-element',
      'image-preview',
      'indent-todo-marker',
      'kbd-leaf',
      'link-element',
      'link-floating-toolbar',
      'list-element',
      'media-embed-element',
      'mention-element',
      'mention-input-element',
      'paragraph-element',
      'placeholder',
      'slash-input-element',
      'table-cell-element',
      'table-element',
      'table-row-element',
      'toc-element',
      'toggle-element',
    ],
    type: 'registry:block',
  },
  {
    category: 'Editors',
    files: [
      {
        path: 'block/editor-basic/page.tsx',
        target: 'app/editor/page.tsx',
        type: 'registry:page',
      },
      {
        path: 'block/editor-basic/components/editor/plate-editor.tsx',
        target: 'components/editor/plate-editor.tsx',
        type: 'registry:component',
      },
    ],
    name: 'editor-basic',
    registryDependencies: ['editor'],
    type: 'registry:block',
  },
];
