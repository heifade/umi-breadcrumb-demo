import React from 'react';
import styles from './index.css';
import { Breadcrumbs } from './breadCrumbs';
import { SideMenu } from './menu';
import { Layout } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import { router } from 'umi';

function onMenuClick(param: ClickParam) {
  router.push(param.key);
}

const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <Layout.Header>
        <div className={styles.title}>UMI 路由/面包屑 demo</div>
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <SideMenu onClick={onMenuClick} />
        </Layout.Sider>
        <Layout.Content>
          <Breadcrumbs />
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
