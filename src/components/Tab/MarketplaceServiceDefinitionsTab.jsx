import * as React from "react";
import Box from "@mui/material/Box";
import MuiTabs, { tabsClasses } from "@mui/material/Tabs";
import MuiTab, { tabClasses } from "@mui/material/Tab";
import styled from "@emotion/styled";

export const tabs = {
  pricing: "Pricing",
  support: "Support",
  documentation: "Documentation",
  description: "Description",
};

export default function MarketplaceServiceDefinitionsTab(props) {
  const { currentTab, setCurrentTab } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "2px solid #EAECF0",
      }}
    >
      <Tabs
        value={currentTab}
        centered
        sx={{
          [`& .${tabsClasses.indicator}`]: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Tab
          label={tabs.description}
          value={tabs.description}
          onClick={() => {
            setCurrentTab(tabs.description);
          }}
        />
        <Tab
          label={tabs.documentation}
          value={tabs.documentation}
          onClick={() => {
            setCurrentTab(tabs.documentation);
          }}
        />
        <Tab
          label={tabs.pricing}
          value={tabs.pricing}
          onClick={() => {
            setCurrentTab(tabs.pricing);
          }}
        />
        <Tab
          label={tabs.support}
          value={tabs.support}
          onClick={() => {
            setCurrentTab(tabs.support);
          }}
        />
      </Tabs>
    </Box>
  );
}

const Tabs = styled(MuiTabs)({
  [`& .${tabsClasses.indicator}`]: {
    backgroundColor: "transparent",
  },
});

const Tab = styled(MuiTab)({
  paddingTop: 20,
  paddingBottom: 20,
  minWidth: "12%",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  textTransform: "none",
  color: "#A1A5B7",
  [`&.${tabClasses.selected}`]: {
    // backgroundColor: "#F4EBFF",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    borderBottom: "2px solid #7F56D9",
    color: "#3F4254",
  },
});
