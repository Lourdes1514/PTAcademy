import React from "react";
import "./BlocklyComponent.css";

import Blockly from "../blockly copy/core";
import "../blockly copy/blocks";

class BlocklyComponent extends React.Component {
  componentDidMount() {
    const { initialXml, children, ...rest } = this.props;
    this.primaryWorkspace = Blockly.inject(this.blocklyDiv, {
      toolbox: this.toolbox,
      ...rest
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        this.primaryWorkspace
      );
    }
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(
      Blockly.Xml.textToDom(xml),
      this.primaryWorkspace
    );
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div ref={e => (this.blocklyDiv = e)} id="blocklyDiv" />
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: "block" }}
          ref={toolbox => {
            this.toolbox = toolbox;
          }}
        >
          {children}
        </xml>
      </React.Fragment>
    );
  }
}

export default BlocklyComponent;
