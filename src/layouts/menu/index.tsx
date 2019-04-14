import React from 'react';
import { Menu, Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu';

const { SubMenu, ItemGroup } = Menu;

interface IProps {
  match: {
    params: {
      menuId: string;
    };
  };
  onClick: (param: ClickParam) => void;
}

export function SideMenu(props: IProps) {
  const {
    params: { menuId },
  } = props.match;

  return (
    <Menu
      onClick={props.onClick}
      defaultSelectedKeys={[menuId]}
      defaultOpenKeys={[menuId.substr(0, 2)]}
      mode="inline"
    >
      <SubMenu
        key="01"
        title={
          <span>
            <Icon type="setting" />
            <span>系统管理</span>
          </span>
        }
      >
        <Menu.Item key="011" data-url="/011/department">
          部门管理
        </Menu.Item>
        <Menu.Item key="012" data-url="/012/user">
          用户管理
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="02"
        title={
          <span>
            <Icon type="file-word" />
            <span>文章</span>
          </span>
        }
      >
        <Menu.Item key="021" data-url="/021/article">
          文章管理
        </Menu.Item>
        <Menu.Item key="022" data-url="/022/articleDetail/001">
          文章1
        </Menu.Item>
        <Menu.Item key="023" data-url="/023/articleDetail/002">
          文章2
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
