import { useState } from "react";

import "@/styles/globals.css";
import "./styles/variables.css";
import "./styles/variables.dark.css";

import styles from "./App.module.css";
import { ThemeName } from "./theme";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  ClickUIProvider,
  CardSecondary,
  Checkbox,
  DangerAlert,
  Icon,
  IconButton,
  InfoAlert,
  SidebarCollapsibleItem,
  SidebarNavigationItem,
  Spacer,
  SuccessAlert,
  Switch,
  Tabs,
  WarningAlert,
  CardPrimary,
} from "@/components";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("dark");
  const [selectedButton, setSelectedButton] = useState(0);
  const [checked, setChecked] = useState(false);
  const [disabled] = useState(false);

  return (
    <ClickUIProvider
      theme={currentTheme}
      config={{ tooltip: { delayDuration: 0 } }}
    >
      <div className={styles.flexWrap}>
        <IconButton
          icon="user"
          size="xs"
          onClick={() => console.log("click")}
        />
        <IconButton
          icon="user"
          size="xs"
          onClick={() => console.log("click")}
        />
        <IconButton
          icon="user"
          size="xs"
          disabled
          onClick={() => console.log("click")}
        />
      </div>
      <div className={styles.flexWrap}>
        <IconButton
          icon="user"
          size="sm"
          onClick={() => console.log("click")}
        />
        <IconButton
          icon="user"
          size="sm"
          onClick={() => console.log("click")}
        />
        <IconButton
          icon="user"
          size="sm"
          disabled
          onClick={() => console.log("click")}
        />
      </div>
      <div className={styles.flexWrap}>
        <IconButton
          icon="user"
          onClick={() => console.log("click")}
        />
        <IconButton
          icon="user"
          onClick={() => console.log("click")}
        />
        <IconButton
          disabled
          icon="user"
          onClick={() => console.log("click")}
        />
      </div>
      <div className={styles.flexWrap}>
        <IconButton
          type="secondary"
          icon="user"
          onClick={() => console.log("click")}
        />
        <IconButton
          type="secondary"
          icon="user"
          onClick={() => console.log("click")}
        />
        <IconButton
          type="secondary"
          disabled
          icon="user"
          onClick={() => console.log("click")}
        />
      </div>
      <div className={styles.flexWrap}>
        <Badge text={"default"}></Badge>
        <Badge
          text={"success"}
          state={"success"}
        ></Badge>
        <Badge
          text={"neutral"}
          state={"neutral"}
        ></Badge>
        <Badge
          text={"danger"}
          state={"danger"}
        ></Badge>
        <Badge
          text={"disabled"}
          state={"disabled"}
        ></Badge>
      </div>
      <div style={{ display: "flex", padding: "1rem" }}>
        <CardSecondary
          title="Card title"
          icon="building"
          description="This is a card description"
          badgeText="experiment"
          infoText="Read More"
          infoUrl="#"
        />

        <CardSecondary
          title="Card title"
          icon="building"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sagittis neque. Quisque ut nunc tortor. Donec ut faucibus neque. In vel suscipit nunc. Praesent odio velit, sollicitudin ac tempor a, varius vitae turpis. Donec mauris risus, dapibus a justo eu, ultricies ullamcorper lacus. Sed ligula purus, sodales quis arcu sit amet, tempor dignissim velit. In ullamcorper lectus non rutrum bibendum. Etiam velit dolor, hendrerit vitae tristique a, semper vitae est. Vivamus elit justo, pellentesque eu auctor feugiat, ultrices vitae diam. Donec accumsan tortor nec vestibulum lobortis. Proin mattis quam nisl, sed malesuada diam volutpat a."
          badgeText="experiment"
          infoText="Read More"
          infoUrl="#"
        />
      </div>
      <div style={{ display: "flex", padding: "1rem" }}>
        <CardPrimary
          title="Card title"
          icon="building"
          description="This is a card description"
          infoText="Read More"
          infoUrl="#"
          style={{ display: "flex", width: "100%" }}
        />

        <CardPrimary
          title="Card title"
          icon="building"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sagittis neque. Quisque ut nunc tortor. Donec ut faucibus neque. In vel suscipit nunc. Praesent odio velit, sollicitudin ac tempor a, varius vitae turpis. Donec mauris risus, dapibus a justo eu, ultricies ullamcorper lacus. Sed ligula purus, sodales quis arcu sit amet, tempor dignissim velit. In ullamcorper lectus non rutrum bibendum. Etiam velit dolor, hendrerit vitae tristique a, semper vitae est. Vivamus elit justo, pellentesque eu auctor feugiat, ultrices vitae diam. Donec accumsan tortor nec vestibulum lobortis. Proin mattis quam nisl, sed malesuada diam volutpat a."
          infoText="Read More"
          infoUrl="#"
          style={{ display: "flex", width: "100%" }}
        />
      </div>
      <ButtonGroup
        labels={["Left center", "Center", "Center", "Center", "Right end"]}
        activeIndex={selectedButton}
        onClick={(index: number) => setSelectedButton(index)}
      />
      <Switch
        checked={checked}
        disabled={disabled}
        onCheckedChange={setChecked}
      />
      <div style={{ color: "white" }}>disabled: {`${disabled}`}</div>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "black";
          setCurrentTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "white";
          setCurrentTheme("light");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          document.body.style.backgroundColor = "white";
          setCurrentTheme("classic");
        }}
      >
        Classic
      </button>

      <Button
        type="primary"
        onClick={() => alert("you clicked on the primary button")}
      >
        Primary
      </Button>
      <Button
        type="secondary"
        onClick={() => alert("you clicked on the secondary button")}
      >
        Secondary
      </Button>
      <Icon name="users" />
      <Icon name="in" />
      <Icon name="gcp" />
      <Accordion title="Accordion">I'm some content </Accordion>
      <SidebarNavigationItem
        icon="user"
        label={<a href="/color"> link to color</a>}
      />
      <SidebarCollapsibleItem
        icon="user"
        label="collapsible item"
        onOpenChange={(open: boolean) => console.log(open)}
      >
        <a href="/color"> link to color</a>
      </SidebarCollapsibleItem>
      <Checkbox label="accept terms and conditions of this page" />
      <Tabs
        defaultValue="tab1"
        onValueChange={e => console.log(e)}
      >
        <Tabs.TriggersList>
          <Tabs.Trigger value="tab1">tab1 </Tabs.Trigger>
          <Tabs.Trigger value="tab2">tab2 </Tabs.Trigger>
          <Tabs.Trigger value="tab3">tab3 </Tabs.Trigger>
        </Tabs.TriggersList>
        <Tabs.Content value="tab1">Tab 1 content</Tabs.Content>
        <Tabs.Content value="tab2">Tab 2 content</Tabs.Content>
        <Tabs.Content value="tab3">Tab 3 content</Tabs.Content>
      </Tabs>
      <Alert
        text="An example of alert"
        title="Title"
      />
      <DangerAlert
        text="An example of alert"
        title="Title"
      />
      <WarningAlert
        text="An example of alert"
        title="Title"
      />

      <Spacer />
      <InfoAlert
        text="An example of alert"
        title="Title"
      />
      <SuccessAlert
        text="An example of alert"
        title="Title"
      />
      <Avatar text="CH" />
    </ClickUIProvider>
  );
};

export default App;
