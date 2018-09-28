import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Radio,
  InputNumber,
  Icon
} from "antd";
const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

ReactDOM.render(
  <div>
    <h1>Custom widget creation</h1>

    <div className="title-side row m-t">Este codigo de barras proviene de </div>

    <Row gutter={8}>
      <Col span={24}>
        <RadioGroup>
          <Radio value={1}>Un valor fijo</Radio>
          <Radio value={2}>El valor contenido en un marcador</Radio>
          <Radio value={3}>Personalizado</Radio>
          <FormItem className="m-t-xs" label="">
            <Input placeholder="Basic usage" />
          </FormItem>
        </RadioGroup>
      </Col>
    </Row>

    <Row gutter={8}>
      <Col span={24}>
        <FormItem label="Tipo de Codigo de barras">
          <Select style={{ width: 200 }} placeholder="Code 128" />
        </FormItem>
        <div>Tipo</div>
        <span>Barcode description selected</span>
      </Col>
    </Row>

    <Row gutter={8}>
      <Col span={24}>
        <FormItem label="Seleccion de tamaño">
          <Select style={{ width: 200 }} placeholder="Normal" />
        </FormItem>
      </Col>
    </Row>

    <div className="title-side row m-t">Ejemplo del codigo resultante</div>
    <Checkbox>Agregar en cada pagina</Checkbox>
    <Checkbox>Agregar numero de pagina</Checkbox>
    <Row>
      <Col span={10}>
        <FormItem label="Posicion">
          <Select style={{ width: 200 }} placeholder="Defecto" />
        </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        {" "}
        <FormItem label="Horizontal">
          <InputNumber placeholder="0" />
        </FormItem>
      </Col>
      <Col span={12}>
        {" "}
        <FormItem label="Vertical">
          <InputNumber placeholder="0" />
        </FormItem>
      </Col>
    </Row>
  </div>,

  document.getElementById("container")
);
