import React from 'react';
import styles from './styles.less';

export default function(props) {
  const { match } = props;

  return (
    <div>
      <div className={styles.title}>{match.params.name}公用详情页面</div>
    </div>
  );
}
