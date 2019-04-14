import React from 'react';
import { Link } from 'umi';
import styles from '../styles.less';

export default function(props: any) {
  const list = [
    {
      name: 'a1',
      id: 'a1',
    },
    {
      name: 'a2',
      id: 'a2',
    },
    {
      name: 'a3',
      id: 'a3',
    },
  ];

  const {
    location: { pathname },
  } = props;

  return (
    <div>
      <div className={styles.title}>角色列表</div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map(h => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.name}</td>
              <td>
                <Link to={`${pathname}/children/${h.id}/${h.name}`}>编辑</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
