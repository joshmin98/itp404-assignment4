import { helper } from '@ember/component/helper';

export function truncateText(params) {
  return params[0].slice(0, params[1]);
}

export default helper(truncateText);
