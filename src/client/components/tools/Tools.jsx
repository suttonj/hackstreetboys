import React from 'react';
import { connect } from 'react-redux';

import Tool from './Tool';

class Tools extends React.Component {
    render() {
        const {
            component: ToolComponent,
            properties,
        } = this.props.activeTool || {};
        const setTool = tool => () => this.props.dispatch({ type: `SET_TOOL`, tool });
        return (
            <div>
            { ToolComponent ?
                <ToolComponent {...properties} /> :
                this.props.tools.map(tool => <Tool {...tool} setTool={setTool(tool.id)} />)
            }
            </div>
        );
    }
}

export default connect(state => state.tools)(Tools);
