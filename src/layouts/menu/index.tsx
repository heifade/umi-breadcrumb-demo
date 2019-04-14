import React from 'react';
import { Menu, Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu';

const { SubMenu, ItemGroup } = Menu;

interface IProps {
  onClick: (param: ClickParam) => void;
}

export function SideMenu(props: IProps) {
  return (
    <Menu
      onClick={props.onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            <span>路由/面包屑</span>
          </span>
        }
      >
        <ItemGroup key="g1" title="系统管理">
          <Menu.Item key="/department">部门管理</Menu.Item>
          <Menu.Item key="/user">用户管理</Menu.Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
  );
}
