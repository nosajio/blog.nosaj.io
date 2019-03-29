const fonts = {
  init: () => `
    @font-face {
      font-family: 'mono';
      src: url('/mono.woff') format('woff');
      font-weight: 200;
    }
  `,
  tg: {
    f: 'trade-gothic-next, sans-serif',
    w: {
      regular: 400,
      bold: 700
    }
  },
  tgc: {
    f: 'trade-gothic-next-compressed, trade-gothic-next, sans-serif',
    w: {
      regular: 400,
      bold: 700,
      heavy: 800
    }
  },
  mono: {
    f: 'mono, Fira Code, Hack, Operator Mono, monospace',
    w: {
      regular: 200
    }
  }
};

export default fonts;