import React, { PureComponent } from "react";

export default function createComponent(AntdComponent, mapProps) {
  class InputComponent extends PureComponent {
    constructor(p) {
      super(p);
      this.getRenderedComponent = this.getRenderedComponent.bind(this);
      this.initComponentRef = this.initComponentRef.bind(this);
    }
    getRenderedComponent() {
      return this.componentRef;
    }

    initComponentRef(r) {
      this.componentRef = r;
    }

    render() {
      const { ...rest } = mapProps(this.props);

      return (
        <div>
          <AntdComponent {...rest} />
        </div>
      );
    }
  }
  InputComponent.displayName = `Redux-form-ANTD-MOBILE${AntdComponent.displayName}`;

  return InputComponent;
}
