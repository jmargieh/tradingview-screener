/**
 * Filter operations for field comparisons
 */
export const FilterOperator = {
  GREATER: 'greater',
  GREATER_OR_EQUAL: 'egreater',
  LESS: 'less',
  LESS_OR_EQUAL: 'eless',
  EQUAL: 'equal',
  NOT_EQUAL: 'nequal',
  IN_RANGE: 'in_range',
  NOT_IN_RANGE: 'not_in_range',
  IN: 'in',
  NOT_IN: 'not_in',
  MATCH: 'match',
  NOT_MATCH: 'nmatch',
  HAS: 'has',
  HAS_NONE_OF: 'has_none_of',
  ABOVE: 'above',
  BELOW: 'below',
  CROSSES: 'crosses',
  CROSSES_ABOVE: 'crosses_above',
  CROSSES_BELOW: 'crosses_below',
} as const;

export type FilterOperatorValue = typeof FilterOperator[keyof typeof FilterOperator];
