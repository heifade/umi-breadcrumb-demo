import React from 'react';
import styles from './styles.less';

export default function(props) {
  const { match } = props;

  return (
    <div>
      <div className={styles.title}>{match.params.name}用户信息编辑</div>
    </div>
  );
}
