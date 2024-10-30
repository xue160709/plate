import React from 'react';

import { getNode } from '@udecode/plate-common';
import {
  toDOMNode,
  useEditorPlugin,
  useEditorSelector,
} from '@udecode/plate-common/react';

import type { Heading } from '../../lib/types';
import type { TocSideBarProps } from '../types';

import { useContentController, useTocController } from '.';
import { getHeadingList } from '../../internal/getHeadingList';
import { TocPlugin } from '../TocPlugin';
import { checkIn } from '../utils';

export const useTocSideBarState = ({
  open = true,
  rootMargin = '0px 0px 0px 0px',
  topOffset = 0,
}: TocSideBarProps) => {
  const { editor, getOptions } = useEditorPlugin(TocPlugin);
  const { scrollContainerSelector } = getOptions();
  const headingList = useEditorSelector(getHeadingList, []);
  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollContainerRef.current = document.querySelector(
      scrollContainerSelector ?? '#scroll_container'
    )!;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tocRef = React.useRef<HTMLElement>(null);

  const [mouseInToc, setMouseInToc] = React.useState(false);

  const [isObserve, setIsObserve] = React.useState(open);

  const { activeContentId, onContentScroll } = useContentController({
    containerRef: scrollContainerRef,
    isObserve,
    rootMargin,
    topOffset,
  });

  useTocController({
    activeId: activeContentId,
    isObserve,
    tocRef,
  });

  return {
    activeContentId,
    editor,
    headingList,
    mouseInToc,
    open,
    setIsObserve,
    setMouseInToc,
    tocRef,
    onContentScroll,
  };
};

export const useTocSideBar = ({
  editor,
  mouseInToc,
  open,
  setIsObserve,
  setMouseInToc,
  tocRef,
  onContentScroll,
}: ReturnType<typeof useTocSideBarState>) => {
  React.useEffect(() => {
    if (mouseInToc) {
      setIsObserve(false);
    } else {
      setIsObserve(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseInToc]);

  const onContentClick = React.useCallback(
    (
      e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
      item: Heading,
      behavior?: ScrollBehavior
    ) => {
      e.preventDefault();
      const { id, path } = item;
      const node = getNode(editor, path);

      if (!node) return;

      const el = toDOMNode(editor, node);

      if (!el) return;

      onContentScroll({ id, behavior, el });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    navProps: {
      ref: tocRef,
      onMouseEnter: () => {
        !mouseInToc && open && setMouseInToc(true);
      },
      onMouseLeave: (
        e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>
      ) => {
        if (open) {
          const isIn = checkIn(e);
          isIn !== mouseInToc && setMouseInToc(isIn);
        }
      },
    },
    onContentClick,
  };
};