
import { css } from 'styled-components';

const _sitewidth = {
  sm: 672,
  lg: 1244
}

export const sitewidth = {
  sm: _sitewidth.sm + 'px',
  lg: _sitewidth.lg + 'px'
}

const _breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1148,
}

export const breakpoints = {
  xs: _breakpoints.xs + 'px',
  sm: _breakpoints.sm + 'px',
  md: _breakpoints.md + 'px',
  lg: _breakpoints.lg + 'px',
};

const _gridmargins = {
  xs: 8,
  sm: 16,
  md: 32,
  lg: 48
}

export const gridmargins = {
  xs: _gridmargins.xs + 'px',
  sm: _gridmargins.sm + 'px',
  md: _gridmargins.md + 'px',
  lg: _gridmargins.lg + 'px'
}

export const above = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const below = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (max-width: ${(_breakpoints[label] - 1) + 'px'}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});
