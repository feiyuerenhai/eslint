// 如果使用jsx，还必须安装babel插件以识别jsx文件

import React from 'react'

const Compo = React.createClass({
	render() {

	}
});

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: true
    };
  }
}
