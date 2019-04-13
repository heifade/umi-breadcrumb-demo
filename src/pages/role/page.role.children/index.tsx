import React from 'react';
import { Link } from 'umi';
import styles from '../styles.less';

export default function(props: any) {
  const { match } = props;
  const { id, name } = match.params;

  const list = [
    {
      name: 'b1',
      id: 'b1',
    },
    {
      name: 'b2',
      id: 'b2',
    },
    {
      name: 'b3',
      id: 'b3',
    },
  ];

  return (
    <div>
      <div className={styles.title}>{name}子角色列表</div>
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
                <Link to={`/role/children/${id}/${name}/detail/${h.id}/${h.name}`}>编辑</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
