import { Box, styled } from "@mui/material";
import fourZeroFourImg from "../public/assets/images/404.png";
import Image from "next/image";
import Container from "../src/components/NonDashboardComponents/Container/Container";
import Layout from "../src/components/NonDashboardComponents/Layout/Layout";
import {
  CardTitle,
  Heading,
  Link,
  SubmitButton,
} from "../src/components/NonDashboardComponents/FormElements/FormElements";

function FourHundredFourPage() {
  return (
    <>
      <Layout>
        <Heading>
          <title>Page not found </title>
          <link rel="icon" href="/favicon.ico" />
        </Heading>
        <Container
          noBottomBorder
          sx={{
            paddingTop: {
              mobile: "40px",
              desktop: "64px",
            },
            paddingBottom: {
              mobile: "40px",
              desktop: "64px",
            },
          }}
        >
          <ImageContainer>
            <Image
              src={fourZeroFourImg}
              alt="sign-up"
              style={{
                maxWidth: 300,
                height: "auto",
                display: "block",
                margin: "auto",
              }}
            />
          </ImageContainer>

          <Box
            sx={{
              textAlign: "center",
              maxWidth: "592px",
              align: "center",
              display: "block",
              margin: "auto",
            }}
          >
            <CardTitle
              sx={{ maxWidth: "592px", marginTop: "40px", textAlign: "center" }}
            >
              Looks like you’ve found the doorway to the great nothing. <br />
            </CardTitle>

            <Description>
              Please visit our homepage to get where you need to go. <br />
            </Description>

            <Link href="/product-tiers">
              <SubmitButton sx={{ marginTop: "40px" }}>
                Take me there
              </SubmitButton>
            </Link>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default FourHundredFourPage;

const Description = styled("p")(({ theme }) => ({
  color: "#475467",
  fontSize: "20px",
  lineHeight: "30px",
  marginTop: "16px",
  maxWidth: "592px",
  marginInline: "auto",
  textAlign: "center",
}));

const ImageContainer = styled(Box)(({ theme }) => ({}));
