import React from 'react';
import { TreeSelect } from 'antd';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const enHanceTreeData = treeData =>
  treeData.map(item => {
    const { id, pid, children } = (item.node && item.node.props) || item.props;
    return {
      id,
      pid,
      children: enHanceTreeData(children),
    };
  });

const getFlatTreeData = treeData => {
  let trees = [];
  treeData.forEach(item => {
    if (Array.isArray(item.children) && item.children.length > 0) {
      trees.push({ id: item.id, pid: item.pid });
      trees = trees.concat(getFlatTreeData(item.children));
    } else {
      trees.push({ id: item.id, pid: item.pid });
    }
  });
  return trees;
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    id: '0-0',
    pid: 0,
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        pid: '0-0',
        key: '0-0-0',
        id: '0-0-0',
        children: [
          {
            title: 'Child Node1-Child Node1',
            value: '0-0-0-0',
            pid: '0-0-0',
            key: '0-0-0-0',
            id: '0-0-0-0',
          },
        ],
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    id: '0-1',
    pid: 0,
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
        pid: '0-1',
        id: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
        pid: '0-1',
        id: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
        pid: '0-1',
        id: '0-1-2',
      },
    ],
  },
  {
    title: 'Node6',
    value: '0-2',
    key: '0-2',
    id: '0-2',
    pid: 0,
  },
];

export default class TreeSelectComponent extends React.Component {
  state = {
    value: [],
  };

  onChange = (value, label, extra) => {
    // console.log('onChange ', value, label, extra);
    const enHanceData = enHanceTreeData(extra.allCheckedNodes);
    const resData = getFlatTreeData(enHanceData);
    console.log(resData);
    this.setState({ value });
  };

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300,
      },
    };
    return <TreeSelect {...tProps} />;
  }
}
