'use strict'
import { Flex, Link, Grid } from 'smbls'

export const Header = {
  extend: Flex,
  props: {
    minWidth: '100%',
    padding: 'Z B',
    align: 'center space-between'
  },

  Flex: {
    props: { gap: 'C' },
    childExtend: {
      extend: Link,
      props: ({ props }) => ({
        textDecoration: window.location.pathname === props.href ? 'underline' : 'none'
      })
    },
    Text_logo: { href: '/', text: 'Hello!' },
    Text_about: { href: '/about', text: 'About' }
  },

  ThemeSwitcher: {}
}

export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: 'A2' },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: 'pointer',
      '.active': {
        fontWeight: '900'
      }
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key })
      }
    }
  },
  dark: { text: 'Dark' },
  light: { text: 'Light' },
  midnight: { text: 'Midnight' }
}

export const Footer = {
  tag: 'div',
  props: {
    class: 'footer',
    style: {
      padding: 'Z B',
      order: 9,
      textAlign: 'center', 
      fontSize: 'A',
      color: '#555',
      marginTop: '20px'
    }
  },
  children: [
    {
      tag: 'p',
      text: (element, state) => state.footerText || 'Footer Content Here',
      props: {
        style: {
          margin: 0
        }
      }
    }
  ]
}

export const GridSelection = {
  extend: Flex, 
  props: {
    flow: 'column',
    align: 'center center',
  },
  state: {
    x: 16,
    y: 8,
    selectedRows: 0,
    selectedColumns: 0,
    totalSelected: 0,
  },

  content: (element, state) => ({
    grid: {
      extend: Grid,
      props: {
        style: {
          display: 'grid',
          gridTemplateColumns: `repeat(${state.x}, 26px)`,
          gridTemplateRows: `repeat(${state.y}, 26px)`,
          gap: '4px',
        },
      },
      key: false, 
      ...(() => {
        const items = {};
        for (let row = 1; row <= state.y; row++) {
          for (let col = 1; col <= state.x; col++) {
            const key = `box_${row}_${col}`;
            items[key] = {
              tag: 'div',
              props: {
                row: row,
                col: col,
                style: {
                  gridRowStart: row,
                  gridColumnStart: col,
                  width: 'A',
                  height: 'A',
                  background:
                    state.selectedRows >= row && state.selectedColumns >= col
                      ? '#3D7BD9'
                      : '#E8F1FF',
                  borderRadius: '2px',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                },
              },
              on: {
                click: (event, element, state) => {
                  const row = element.props.row;
                  const col = element.props.col;

                  state.update({
                    selectedRows: row,
                    selectedColumns: col,
                    totalSelected: row * col,
                  });
                },
              },
            };
          }
        }
        return items;
      })(),
    },
    footer: {
      tag: 'div',
      props: {
        marginTop: 'Z1',
        fontSize: 'A',
        fontFamily: 'Europa Regular',
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        },
      },
      content: (element, state) => {
        if (state.totalSelected) {
          return {
            leftText: {
              tag: 'div',
              style: {
                width: 'fit-content'
              },
              text: `Selection coordinates: ${state.selectedColumns},${state.selectedRows}`,
            },
            rightText: {
              tag: 'div',
              style: {
                width: 'fit-content'
              },
              text: `Total cells selected: ${state.totalSelected}`,
            },
          };
        } else {
          return {
            tag: 'div',
            props: {
              style: {
                textAlign: 'center',
                width: '100%',
              },
            },
            text: 'No selection',
          };
        }
      },
    },
  }),
};

