import { Box, Stack } from "@mui/material";

import Menu from "../Menu/Menu";
import useOrgServiceOfferings from "src/features/Marketplace/PublicServices/hooks/useOrgServiceOfferings";

import NineDotMenu from "./Icons/NineDotMenu";
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Text } from "../Typography/Typography";
import { styleConfig } from "src/providerConfig";
import CubeIcon from "./Icons/CubeIcon";
import { useRouter } from "next/router";
import { getMarketplaceProductTierRoute } from "src/utils/route/access/accessRoute";
import { marketplaceServicePageTypes } from "src/features/Marketplace/constants/marketplaceServicePageTypes";
import LoadingSpinnerSmall from "../CircularProgress/CircularProgress";

const ServicesDropdown = () => {
  const router = useRouter();
  const { serviceId } = router.query;
  const { data: serviceOfferingsData, isFetching } = useOrgServiceOfferings();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const redirectToProductPage = (service) => {
    closeMenu();
    router.push(
      getMarketplaceProductTierRoute(
        service.serviceId,
        service.serviceEnvironmentID,
        marketplaceServicePageTypes.public
      )
    );
  };

  return (
    <Box>
      <NineDotMenu onClick={openMenu} style={{ cursor: "pointer" }} />
      <Menu
        anchorEl={anchorEl}
        id="#services-menu"
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        sx={{
          boxShadow: "0px 4px 6px -2px #10182808 0px 12px 16px -4px #10182814",
          maxHeight: "500px",
          ".MuiMenu-list": {
            borderRadius: "8px",
            border: "1px solid #F1F1F2",
            padding: 0,
          },
          ".MuiPaper-root": {
            width: "240px",
            scrollbarWidth: "thin",
          },
        }}
      >
        <Box p="15px 16px" borderBottom="1px solid #F1F1F2">
          <Text
            size="small"
            weight="medium"
            // color={styleConfig.navbarTextColor}
            color="#181C32"
          >
            Select Services
          </Text>
        </Box>

        {isFetching ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="16px"
          >
            <LoadingSpinnerSmall />
          </Box>
        ) : (
          serviceOfferingsData?.map((service, index) => (
            <MenuItem
              key={index}
              onClick={() => redirectToProductPage(service)}
              selected={service.serviceId === serviceId}
              sx={{
                p: "15px 16px",
                textWrap: "wrap",
                wordBreak: "break-all",
              }}
            >
              <Stack direction="row" alignItems="center" gap="8px">
                <CubeIcon
                  // color={styleConfig.nineDotMenuTextColor}
                  color="#6E717F"
                  style={{ flexShrink: 0 }}
                />

                <Text
                  size="small"
                  weight="medium"
                  // color={styleConfig.nineDotMenuTextColor}
                  color="#6E717F"
                >
                  {service.serviceName}
                </Text>
              </Stack>
            </MenuItem>
          ))
        )}
      </Menu>
    </Box>
  );
};

export default ServicesDropdown;
