import { helper } from '@ember/component/helper';

export function cutoff(params) {
  return params[0].slice(0, 50) + '...';
}

export default helper(cutoff);
