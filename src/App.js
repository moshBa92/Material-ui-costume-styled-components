import { useState } from "react";

import "./styles.css";

import Input from "./components/Input";
import Button from "./components/Button";
import Select from "./components/Select";
import { Column, Row } from "./components/Deractions";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Form from "./components/Form";
import Accordion from "./components/Accordion";
import ToolTip from "./components/ToolTip";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="App">
      <Column>
        <Input label="First Name" />
        <Row>
          <Button buttonText="Click Me" />
          <Button buttonText="Disabled Button" disabled />
        </Row>
        <Select
          label="Choose an option"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" }
          ]}
        />

        <Card
          image="https://source.unsplash.com/random"
          title="Card Title"
          subtitle="Card Subtitle"
        >
          This is some card content.
        </Card>

        <div>
          <Button buttonText="Open Modal" onClick={handleOpen} />
          <Modal open={open} onClose={handleClose}>
            <h2>Hello, I'm a modal!</h2>
          </Modal>
        </div>
        <Form />
        <Accordion
          items={[
            {
              title: "Accordion 1",
              content: "This is the content for accordion 1"
            },
            {
              title: "Accordion 2",
              content: "This is the content for accordion 2"
            },
            {
              title: "Accordion 3",
              content: "This is the content for accordion 3"
            }
          ]}
        />

        <ToolTip content="This is a tooltip">
          <Button buttonText="Tooltip Me" />
        </ToolTip>
      </Column>
    </div>
  );
}
